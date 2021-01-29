<template>
  <div>
    <v-container class="container--fluid">
      <v-row>
        <v-col class="offset-1 col-10 mt-10">
          <h1 class="page_title font-podkova-bold">Static Pages</h1>
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
                      lazy-src="http://nuxt-slot-admin/admin/img/ru.jpg"
                      class="lang"
                      src="http://nuxt-slot-admin/admin/img/ru.jpg"
              >
              </v-tab>
              <v-tab href="#tab-2" >
                Ua
                <img
                        lazy-src="http://nuxt-slot-admin/admin/img/ua.jpg"
                        class="lang"
                        src="http://nuxt-slot-admin/admin/img/ua.jpg"
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
                      <CategoryLoop :data="data.ua" />
                    </div>
                    <div v-else>
                      <CategoryLoop :data="data.ru" />
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
  import CategoryLoop from '../../../components/templates/categoryLoop'
    export default {
        name: "static_pages",
        layout: 'admin',
        component: {CategoryLoop},
       async mounted() {
            this.data.ru.posts = []
            this.data.ua.posts = []
            const user = this.$store.getters['user/getUser']
            const data = {
                session: user.session,
                action: 'get_data'
            }
            await this.$store.dispatch('static_pages/setPages', data)
            const list = this.$store.getters['static_pages/getPages']
            this.data.ru.posts = list.filter(item => item.lang === 'ru')
            this.data.ua.posts = list.filter(item => item.lang === 'ua')
           console.log(list)
        },
        data(){
          return {
              data: {
                  ru: {
                      post_slug: 'static_pages',
                      lang: 'ru',
                      posts: []
                  },
                  ua: {
                      post_slug: 'static_pages',
                      lang: 'ua',
                      posts: []
                  }
              },
              tab: null
          }
        }
    }
</script>

<style>
.lang {
  width: 20px;
}
</style>