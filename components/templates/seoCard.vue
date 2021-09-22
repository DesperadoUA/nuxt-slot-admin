<template>
  <v-container>
    <v-row v-for="(item, index) in value"
           :key="index" class="mb-4 pa-2 border-orange">
      <v-col class="col-3 font-podkova-bold">
        {{item.title}}
      </v-col>
      <v-col class="col-4 font-podkova-bold">
        <v-text-field
                prepend-icon="mdi-tooltip-edit"
                type="text"
                color="deep-orange darken-2"
                v-model = "value[index].meta_title"
        ></v-text-field>
      </v-col>
      <v-col class="col-4 font-podkova-bold">
        <v-text-field
                prepend-icon="mdi-tooltip-edit"
                type="text"
                color="deep-orange darken-2"
                v-model = "value[index].description"
        ></v-text-field>
      </v-col>
      <v-col class="col-1 font-podkova-bold">
          <v-select
                  color="deep-orange darken-2"
                  :items="status"
                  v-model="value[index].status"
          ></v-select>
      </v-col>
      <v-col class="col-12 border font-podkova-bold" v-if="item.rating !== undefined">
        <v-subheader class="pl-0">{{item.rating}}</v-subheader>
        <v-slider
                v-model="item.rating"
                :thumb-size="40"
                thumb-label="always"
        >
          <template v-slot:thumb-label="{ value }">
            {{ satisfactionEmojis[Math.min(Math.floor(value / 10), 9)] }}
          </template>
        </v-slider>
      </v-col>
      <v-col class="col-12 font-podkova-bold" v-if="item.ref">
        <h2 class="mb-2">Ref</h2>
        <v-col class="col-12 text-right" v-for="(item, indexRef) in item.ref"
               :key="indexRef">
          <v-text-field prepend-icon="mdi-tooltip-edit"
                        type="text"
                        color="deep-orange darken-2"
                        v-model="value[index].ref[indexRef]"
          ></v-text-field>
          <v-btn
                  class="deep-orange darken-2 font-podkova-bold"
                  @click="deleteItemRef(index, indexRef)"
          >
            <v-icon left>mdi-delete</v-icon>
            Delete
          </v-btn>
        </v-col>
        <v-btn
                class="deep-orange darken-2 font-podkova-bold"
                @click="addItem(index)"
        >
          <v-icon left>mdi-playlist-plus</v-icon>
          Add
        </v-btn>
      </v-col>
    </v-row>
    <v-btn
            color="red lighten-2"
            dark
            class="deep-orange darken-2 font-podkova-bold btn_update"
            @click="update"
    >
      <v-icon>mdi-content-save</v-icon>
    </v-btn>
    <snackeBar :status = "snackbar.status"
               :text = "snackbar.text"
               :timeout = "snackbar.timeout"
    />
  </v-container>
</template>

<script>
    import snackeBar from '~/components/templates/snackbar'
    export default {
        name: "seoCard",
        props: ['value', 'action'],
        components: {snackeBar},
        data(){
            return {
                satisfactionEmojis: ['😭', '😢', '☹️', '🙁', '😐', '🙂', '😊', '😁', '😄', '😍'],
                status: ["public", "hide", "basket"],
                POST_TYPE: 'seo',
                snackbar:{
                    status: false,
                    text: 'Posts Update',
                    timeout: 5000
                }
            }
        },
        methods:{
            deleteItemRef(index, indexRef){
                this.value[index].ref.splice(indexRef, 1)
            },
            addItem(index) {
                this.value[index].ref.push("")
            },
            async update(){
                const posts = this.$store.getters[this.POST_TYPE + '/getPosts']
                const user = this.$store.getters['user/getUser']
                const postType = this.$store.getters[this.POST_TYPE + '/getCurrentPostType']
                const data = {
                    session: user.session,
                    id: user.id,
                    posts: posts.ru.concat(posts.ua),
                    postType
                }
                await this.$store.dispatch(this.POST_TYPE + '/update', data)
                this.snackbar.status = true
                setTimeout(()=>{
                    this.snackbar.status = false
                }, this.snackbar.timeout)
            }
        }

    }
</script>

<style>
  .border-orange {
     border: 1px solid #e64a19;
  }
  .btn_update {
    position: fixed;
    right: 0px;
    top: 50%;
  }
</style>