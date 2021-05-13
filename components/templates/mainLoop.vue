<template>
  <div>
    <v-container class="container--fluid">
      <v-row>
        <v-col class="offset-1 col-10 mt-10">
          <h1 class="page_title font-podkova-bold">Основные разделы сайта</h1>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="container--fluid">
      <v-layout row>
        <v-col class="offset-1 col-10">
          <v-layout row>
            <v-col class="col-xs-12 col-md-4" v-for="card in cards"
                   :key="card.title"
            >
              <v-card
                      class="mx-auto"
                      max-width="344"
              >
                <v-img
                        :src="card.thumbnail"
                        height="200px"
                ></v-img>

                <v-card-title class="font-podkova-bold">
                  {{card.title}}
                  <v-spacer></v-spacer>
                  <v-btn
                          class="font-podkova-bold deep-orange darken-2"
                          color="deep-orange darken-2"
                          :to="card.link"
                  >
                    More
                  </v-btn>
                </v-card-title>
              </v-card>
            </v-col>
          </v-layout>
        </v-col>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
    export default {
        name: "mainLoop",
        data(){
            return {
                cards: [
                    {title: 'Static Pages', thumbnail: 'http://nuxt-slot-admin/img/static-page.jpg', link: '/admin/static-pages'},
                    {title: 'Casino', thumbnail: 'http://nuxt-slot-admin/img/casino.png', link: '/admin/casino'},
                    {title: 'Category', thumbnail: 'http://nuxt-slot-admin/img/category.png', link: '/admin/category'},
                    {title: 'Settings', thumbnail: 'http://nuxt-slot-admin/img/settings.jpg', link: '/admin/settings'},
                    {title: 'Options', thumbnail: 'http://nuxt-slot-admin/img/options.jpg', link: '/admin/options'},
                ]
            }
        },
    }
</script>

<style scoped>

</style>



