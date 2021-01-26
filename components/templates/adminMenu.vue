<template>
  <div>
    <v-app-bar app dark >
      <v-app-bar-nav-icon
              @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>
        <nuxt-link to="/admin" tag="span" class="pointer" >NetGame App</nuxt-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text exact
               class="font-podkova-bold "
               v-for="link in links"
               :key="link.title" :to="link.url"
        >
          <v-icon left color="deep-orange darken-2">{{link.icon}}</v-icon>
          {{link.title}}
        </v-btn>
        <v-btn text exact
               class="font-podkova-bold"
               @click="logout"
        >
          <v-icon left color="deep-orange darken-2">mdi-logout</v-icon>
          LOGOUT
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-navigation-drawer app temporary
                         v-model="drawer" class="grey darken-4" color="deep-orange darken-2">
      <v-container>
        <v-layout class="justify-space-around mt-3 align-center">
          <v-btn class="deep-orange darken-2 display_block justify-start" color="deep-orange darken-2 font-podkova-bold"
                 @click="logout">
            Logout
          </v-btn>
        </v-layout>
        <v-layout class="mt-5 mb-5" wrap>
          <v-btn
                  class="deep-orange darken-2 justify-start display_block mb-5 font-podkova-bold"
                  dark
                  exact
                  to="/admin/domains">
            Domains
          </v-btn>
          <v-btn
                  class="deep-orange darken-2 justify-start display_block mb-5 font-podkova-bold"
                  dark
                  to="/admin/mails">
            Mails
          </v-btn>
        </v-layout>
      </v-container>
    </v-navigation-drawer>
  </div>
</template>

<script>
    import DAL_Login from '../../DAL/login'
    export default {
        name: "AdminMenu",
        data(){
            return {
                drawer: false,
                links: [
                    {title:'MAIN', url:'/admin', icon:'mdi-bank'},
                    {title:'CATEGORY', url:'/admin/category', icon:'mdi-checkbox-multiple-blank'},
                    {title:'SETTINGS', url:'/admin/settings', icon:'mdi-message-draw'},
                    {title:'STATIC PAGES', url:'/admin/static-pages', icon:'mdi-checkbox-multiple-blank'},
                    {title:'OPTIONS', url:'/admin/options', icon:'mdi-share-variant'},
                    {title:'CASINO', url:'/admin/casino', icon:'mdi-checkbox-multiple-blank'},
                ]
            }
        },
        methods: {
            async logout(){
                const session = this.$store.getters['user/getUser'].session
                const result = await DAL_Login.deleteSessionBySessionId(session)
                if(result.data.confirm === 'ok') {
                    this.$store.dispatch('user/setUser', {
                        id: '',
                        role: '',
                        login: false,
                        session: ''
                    })
                    this.$router.push('/')
                }
            }
        },
    }
</script>

<style scoped>
  .border {
    border: 1px solid red;
  }
  .display_block {
    width:100%;
  }
</style>
