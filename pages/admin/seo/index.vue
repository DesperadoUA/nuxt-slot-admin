<template>
  <div>
    <v-container class="container--fluid">
      <v-row>
        <v-col class="offset-1 col-10 mt-10">
          <h1 class="page_title font-podkova-bold">Seo</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="offset-1 col-10">
          <PostTypeMenu :value="POST_TYPE_LIST" :action="ACTION"></PostTypeMenu>
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
                      lazy-src="https://admin.onlinecasino.ua/img/ru.jpg"
                      class="lang"
                      src="https://admin.onlinecasino.ua/img/ru.jpg"
              >
              </v-tab>
              <v-tab href="#tab-2" >
                Ua
                <img
                        lazy-src="https://admin.onlinecasino.ua/img/ua.jpg"
                        class="lang"
                        src="https://admin.onlinecasino.ua/img/ua.jpg"
                >
              </v-tab>
            </v-tabs>
            <SeoFilters :value="filters" :action="ACTION_FILTERS" />
            <Loader v-if="loading" />
            <v-tabs-items v-else v-model="tab">
              <v-tab-item
                      v-for="i in 2"
                      :key="i"
                      :value="'tab-' + i"
              >
                <v-card >
                  <v-card-text class="black">
                    <div v-if="tab == 'tab-2'">
                      <SeoCard :value="postsUa" />
                    </div>
                    <div v-else>
                      <SeoCard :value="postsRu" />
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
    import CategoryLoop from '~/components/templates/categoryLoop'
    import TotalPosts from '~/components/templates/totalPosts'
    import Search from '~/components/templates/search'
    import PostTypeMenu from '~/components/templates/postTypeMenu'
    import SeoCard from '~/components/templates/seoCard'
    import SeoFilters from '~/components/templates/seoFilters'
    import Loader from '~/components/templates/loader'

    export default {
        name: "seo",
        layout: 'admin',
        component: {CategoryLoop, TotalPosts, Search, PostTypeMenu, SeoCard, SeoFilters, Loader},
        async mounted() {

            this.data.ru.posts = []
            this.data.ua.posts = []
            const user = this.$store.getters['user/getUser']

            const dataPostType = {
                session: user.session,
                id: user.id
            }
            await this.$store.dispatch(this.POST_TYPE + '/setPostTypes', dataPostType)
            this.POST_TYPE_LIST = this.$store.getters[this.POST_TYPE + '/getPostTypes']
        },
        beforeDestroy(){
            this.$store.dispatch(this.POST_TYPE + '/defaultPosts')
        },
        data(){
            return {
                POST_TYPE: 'seo',
                POST_TYPE_LIST: [],
                ACTION_FILTERS: 'seo/filtersUpdate',
                FILTERS: [],
                ACTION: "seo/setCurrentPostType",
                data: {
                    ru: {
                        lang: 'ru',
                        posts: [],
                        total: 0
                    },
                    ua: {
                        lang: 'ua',
                        posts: [],
                        total: 0
                    }
                },
                tab: null,
                numberPostOnPage: 100,
                counter: 0
            }
        },
        computed: {
            postsRu() {
                const list = this.$store.getters[this.POST_TYPE + '/getPosts']
                this.data.ru.posts = list.ru
                return this.data.ru.posts
            },
            postsUa() {
                const list = this.$store.getters[this.POST_TYPE + '/getPosts']
                this.data.ua.posts = list.ua
                return this.data.ua.posts
            },
            filters() {
                const filters = this.$store.getters[this.POST_TYPE + '/getFilters']
                this.FILTERS = filters
                return this.FILTERS
            },
            loading(){
                const load = this.$store.getters['common/isLoading']
                return load
            }
        }
    }
</script>

<style scoped>

</style>