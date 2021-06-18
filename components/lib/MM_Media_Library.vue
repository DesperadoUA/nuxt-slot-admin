<template>
  <div class="text-center media_conteiner">
    <v-dialog
      v-model="dialog"
      width="80%"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="red lighten-2"
          dark
          v-bind="attrs"
          v-on="on"
          class="deep-orange darken-2 font-podkova-bold"
        >
         <v-icon>mdi-tooltip-image</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="font-podkova-bold blue-grey darken-4">
         Media Library
        </v-card-title>
        <v-container>
            <v-row>
                <v-col class="col-12 mt-1 mb-1">
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
                        Library
                      </v-tab>
                      <v-tab href="#tab-2" >
                          Downloads
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
                              <div v-if="tab == 'tab-2'" class="media_container_wrapper">
                                <div class="pt-5">
                                  <v-container>
                                    <v-row>
                                      <v-col class="mt-0">
                                        <MM_Image :value = '""' 
                                                :title = '"Image Loader"'
                                                :action = '"media/addMedia"'
                                                :action_key = '"list"' />
                                      </v-col>
                                    </v-row>
                                  </v-container>
                                </div>
                              </div>
                              <div v-else class="media_container_wrapper">
                                  <div class="media_wrapper">
                                      <div class="media-item" 
                                          v-for="(item, index) in currentPosts" 
                                          :key="index"
                                          @click="choiceImg(item)"
                                      >
                                          <img :src="item" />
                                          <div class="item_delete" 
                                            @click="deleteImg(item)"
                                          >X</div>
                                      </div>
                                  </div>
                                  <v-btn  class="deep-orange darken-2 font-podkova-bold mt-5"
                                  @click="postShowMore"
                                  >Load more</v-btn>
                              </div>
                          </v-card-text>
                          </v-card>
                      </v-tab-item>
                      </v-tabs-items>
                  </v-card>
                </v-col>
            </v-row>
        </v-container>
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-text-field
              prepend-icon="mdi-tooltip-edit"
              type="text"
              color="deep-orange darken-2"
              class="media-text"
              readonly="readonly"
              v-model="text"
          ></v-text-field>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import MM_Image from '../lib/MM_Image.vue'
   export default {
    data () {
      return {
        dialog: false,
        tab: null,
        value: [],
        numberPostOnQuery: 30,
        postCurrentPage: 1,
        text: ''
      }
    },
    async mounted() {
        const user = this.$store.getters['user/getUser']
        const data = {
            session: user.session,
            id: user.id
        }
        this.value = this.$store.getters['media/getMedia']
        if(this.value.length === 0) {
            await this.$store.dispatch('media/setMedia', data)
            this.value = this.$store.getters['media/getMedia']
        }
    },
    computed: {
            currentPosts() {
              this.value = this.$store.getters['media/getMedia']
              return this.value.slice(0, this.numberPostOnQuery * this.postCurrentPage)
            },
        },
    methods: {
      postShowMore(){
        this.postCurrentPage += 1
      },
      choiceImg(item){
         this.text = `<img src="${item}" />`
      },
      deleteImg(item) {
        const user = this.$store.getters['user/getUser']
        const data = {
            session: user.session,
            id: user.id,
            file: item
        }
        this.$store.dispatch('media/deleteMedia', data)
      }
    },
    components:{MM_Image}
  }
</script>

<style scoped>
    .media_conteiner {
        position: fixed;
        right: 0px;
        top: 50%;
    }
    .media_container_wrapper {
        min-height: 300px;
        height: 500px;
        overflow-y: scroll;
    }
    .media-item {
        height: 100px;
        width: 10%;
        padding: 10px;
        border: 1px solid gray;
        cursor: pointer;
        position: relative;
    }
    .media_wrapper {
        display: flex;
        flex-wrap: wrap;
    }
    .media-item img{
        object-fit: cover;
        height: 100%;
        width: 100%;
    }
    .media-text {
      width: 100%;
    }

    img {
    max-width: 100%;
  }
  .item_delete {
    width: 20px;
    height: 20px;
    position: absolute;
    right: 5px;
    top:5px;
    z-index: 2;
    border-radius: 50%;
    background: #e64a19;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor:pointer;
  }
</style>