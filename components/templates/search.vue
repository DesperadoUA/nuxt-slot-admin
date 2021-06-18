<template>
  <div class="text-right search_container mb-3">
    <v-dialog
      v-model="dialog"
      width="500px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="red lighten-2"
          dark
          v-bind="attrs"
          v-on="on"
          class="deep-orange darken-2 font-podkova-bold"
          @click="clearSearch"
        >
         <v-icon>mdi-yeast</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="font-podkova-bold blue-grey darken-4">
         Search
        </v-card-title>
        <v-container>
            <v-row>
                <v-col class="col-9 mt-1 mb-1">
                  <v-card>
                    <v-text-field
                        prepend-icon="mdi-tooltip-edit"
                        type="text"
                        color="deep-orange darken-2"
                        v-model="searchWord"
                    ></v-text-field>
                  </v-card>
                </v-col>
                <v-col class="col-3 mt-5 mb-1 text-right">
                    <v-btn class="deep-orange darken-2 font-podkova-bold"
                           @click="searchActivate"
                     >
                      SEARCH
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
        <v-divider></v-divider>
            <v-card
                class="mx-auto"
                max-width="500"
            >
                <v-list>
                <v-list-item-group>
                    <v-list-item
                    v-for="(item, i) in posts"
                    :key="i"
                    >
                    <v-list-item-content>
                        <NuxtLink :to="item.permalink" class="search_item font-podkova-bold">
                          <v-list-item-title v-text="item.title"></v-list-item-title>
                        </NuxtLink>
                    </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
                </v-list>
            </v-card>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import DAL from '~/DAL/search'
export default {
    data () {
      return {
        dialog: false,
        posts: [],
        searchWord: '',
      }
    },
    props:{
        postType: String,
        lang: String
    },
    methods:{
        async searchActivate(){
            const user = this.$store.getters['user/getUser']
            const data = {
               session: user.session,
               id: user.id,
               lang: this.lang,
               postType: this.postType,
               searchWord: this.searchWord
            }
            if(this.searchWord.trim() !== '') {
              const result = await DAL.getPosts(data)
              if(result.data.confirm === 'ok') {
                  this.posts = result.data.body
              }
            }
        },
        clearSearch(){
          this.searchWord = ''
          this.posts = []
        }
    }
  }
</script>
<style scoped>
.search_item {
  text-decoration: none;
  color: white;
}
</style>