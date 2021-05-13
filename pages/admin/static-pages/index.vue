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
                      <CategoryLoop :data="postsUa" />
                      <TotalPosts :data="data.ua.total" />
                      <MM_Paginations :length = "Math.ceil(data.ua.total/numnerPostOnPage)" 
                                      :lang = "1"
                                      :action = '"static_pages/setPaginationPage"'
                                      :numberOnPage = "numnerPostOnPage"
                                      :getterPage = "'static_pages/getPage'"
                      />
                    </div>
                    <div v-else>
                      <CategoryLoop :data="postsRu" />
                      <TotalPosts :data="data.ru.total" />
                      <MM_Paginations :length = "Math.ceil(data.ru.total/numnerPostOnPage)" 
                                      :lang = "1"
                                      :action = '"static_pages/setPaginationPage"'
                                      :numberOnPage = "numnerPostOnPage"
                                      :getterPage = "'static_pages/getPage'"
                      />
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
  import TotalPosts from '../../../components/templates/totalPosts'
  import MM_Paginations from '../../../components/lib/MM_Paginations'
    export default {
        name: "static_pages",
        layout: 'admin',
        component: {CategoryLoop, TotalPosts, MM_Paginations},
        async mounted() {
            this.data.ru.posts = []
            this.data.ua.posts = []
            const user = this.$store.getters['user/getUser']
            const page = this.$store.getters['static_pages/getPage']
            const dataRu = {
                session: user.session,
                id: user.id,
                lang: 1,
                limit: this.numnerPostOnPage,
                offset: (page.ru - 1) * this.numnerPostOnPage
            }
            await this.$store.dispatch('static_pages/setPages', dataRu)
            
            const dataUa = {
                session: user.session,
                id: user.id,
                lang: 2,
                limit: this.numnerPostOnPage,
                offset: (page.ua - 1) * this.numnerPostOnPage
            }
            await this.$store.dispatch('static_pages/setPages', dataUa)

            const total = this.$store.getters['static_pages/getTotal']
            this.data.ru.total = total.ru
            this.data.ua.total = total.ua
        },
        data(){
          return {
              data: {
                  ru: {
                      post_slug: 'static-pages',
                      lang: 'ru',
                      posts: [],
                      total: 0
                  },
                  ua: {
                      post_slug: 'static-pages',
                      lang: 'ua',
                      posts: [],
                      total: 0
                  }
              },
              tab: null,
              numnerPostOnPage: 8
          }
        },
        computed: {
          postsRu() {
             const list = this.$store.getters['static_pages/getPages']
             this.data.ru.posts = list.ru
             return this.data.ru.posts
          },
          postsUa() {
             const list = this.$store.getters['static_pages/getPages']
             this.data.ua.posts = list.ua
             return this.data.ua.posts
          }
        }
    }
</script>

<style>
.lang {
  width: 20px;
}
.btn {
  margin: 50px;
  background: red;
  padding: 15px 20px;
}
</style>