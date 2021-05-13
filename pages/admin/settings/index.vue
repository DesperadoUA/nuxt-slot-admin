<template>
   <div>
    <v-container class="container--fluid">
      <v-row>
        <v-col class="offset-1 col-10 mt-10">
          <h1 class="page_title font-podkova-bold">Settings</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="offset-1 col-10 mt-2 mb-5">
          <v-card>
            <v-tabs
                    v-model="tab"
                    background-color="dark"
                    dark
                    icons-and-text
                    color="white"
            >
              <v-tabs-slider></v-tabs-slider>

              <v-tab href="#tab-1" >
                Ru <img
                      lazy-src="http://nuxt-slot-admin/img/ru.jpg"
                      class="lang"
                      src="http://nuxt-slot-admin/img/ru.jpg"
              >
              </v-tab>
              <v-tab href="#tab-2" >
                Ua
                <img
                        lazy-src="http://nuxt-slot-admin/img/ua.jpg"
                        class="lang"
                        src="http://nuxt-slot-admin/img/ua.jpg"
                >
              </v-tab>
            </v-tabs>
            <v-tabs-items v-model="tab">
              <v-tab-item
                      v-for="i in 2"
                      :key="i"
                      :value="'tab-' + i"
              >
                <v-card >
                  <v-card-text class="black">
                    <div v-if="tab == 'tab-2'">
                      <OptionsLoop :data="postsUa" :slug="slug" />
                    </div>
                    <div v-else>
                      <OptionsLoop :data="postsRu" :slug="slug" />
                    </div>
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
    import OptionsLoop from '../../../components/templates/optionsLoop'
    export default {
        name: "settings",
        layout: 'admin',
        component: {OptionsLoop},
        async mounted() {
            this.data.ru.posts = []
            this.data.ua.posts = []
            
            const user = this.$store.getters['user/getUser']
            const dataRu = {
                session: user.session,
                id: user.id,
                lang: 1,
            }
            await this.$store.dispatch('settings/setPages', dataRu)
            const dataUa = {
                session: user.session,
                id: user.id,
                lang: 2,
            }
            await this.$store.dispatch('settings/setPages', dataUa)
            const list = this.$store.getters['settings/getPages']
            this.data.ru.posts = list.ru
            this.data.ua.posts = list.ua

        },
        data(){
          return {
              data: {
                  ru: {
                      post_slug: 'settings',
                      lang: 'ru',
                      posts: [],
                      total: 0
                  },
                  ua: {
                      post_slug: 'settings',
                      lang: 'ua',
                      posts: [],
                      total: 0
                  }
              },
              tab: null,
              slug: 'settings'
          }
        },
        computed: {
          postsRu() {
             const list = this.$store.getters['settings/getPages']
             this.data.ru.posts = list.ru
             return this.data.ru.posts
          },
          postsUa() {
             const list = this.$store.getters['settings/getPages']
             this.data.ua.posts = list.ua
             return this.data.ua.posts
          }
        }
    }
</script>

<style scoped>

</style>