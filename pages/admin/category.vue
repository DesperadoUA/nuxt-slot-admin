<template>
  <v-container class="container--fluid">
    <v-row>
      <v-col class="offset-1 col-10 mt-10">
        <h1 class="page_title font-podkova-bold">Category</h1>
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
                    <CategoryLayer :commonData="dataCategory.ua" :lang="'ua'" :category="categoryUa"/>
                  </div>
                  <div v-else>
                    <CategoryLayer :commonData="dataCategory.ru" :lang="'ru'" :category="categoryRu"/>
                  </div>
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
    import CategoryLayer from '../../components/templates/categoryLayer'
    export default {
        name: "category",
        layout: 'admin',
        data () {
            return {
                tab: null,
                dataCategory: {
                    ru: {
                        title: 'Category RU',
                        post_type: [
                            {icon: 'mdi-dice', name: 'Casino'}
                        ],
                        lang: 'ru',
                        casino: [],
                    },
                    ua: {
                        title: 'Category UA',
                        post_type: [
                            {icon: 'mdi-dice', name: 'Casino'}
                        ],
                        lang: 'ua',
                        casino: []
                    }
                },
            }
        },
        components: {CategoryLayer},
        computed: {
            categoryUa(){
                const result = this.$store.getters['category/getCategory']
                const category = {}
                category.casino = result.filter(item => {
                    if(item.lang === 'ua' && item.post_type === 'casino') return item
                })
                return category
            },
            categoryRu(){
                const result = this.$store.getters['category/getCategory']
                const category = {}
                category.casino = result.filter(item => {
                    if(item.lang === 'ru' && item.post_type === 'casino') return item
                })
                return category
            }
        },
        async beforeCreate() {
            const user = this.$store.getters['user/getUser']
            const data = {
                session: user.session,
                action: 'get_data'
            }
            await this.$store.dispatch('category/setCategory', data)
        }
    }
</script>

<style>
.lang {
  width:30px;
}
</style>