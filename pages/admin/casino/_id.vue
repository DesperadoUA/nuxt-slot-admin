<template>
  <div>
    <commonEdit v-if='data.body' 
                     :data = "data.body"
                     :action = '"casino/changeStateCurrentPost"'>
    </commonEdit> 
    <v-container>
        <v-row>
          <v-col class="offset-1 col-10 mt-5 mb-10">
            <v-btn
                  class="font-podkova-bold deep-orange darken-2"
                  text
                  @click="update()"
          >
          <v-icon left color="white">mdi-content-save</v-icon>
            Update
          </v-btn>
          <v-btn
                  class="font-podkova-bold deep-orange darken-2 ml-5"
                  text
                  @click="postDelete()"
          >
          <v-icon left color="white">mdi-delete</v-icon>
            Delete
          </v-btn>
          </v-col>
        </v-row>
    </v-container>
    <snackeBar :status = "snackbar.status"
               :text = "snackbar.text"
               :timeout = "snackbar.timeout"
    />
  </div>
</template>

<script>
import commonEdit from '../../../components/templates/commonEdit.vue'
import snackeBar from '../../../components/templates/snackbar'
    export default {
        name: "singleCasinoPage",
        layout: 'admin',
        components: {commonEdit, snackeBar},
        async mounted() {
            const user = this.$store.getters['user/getUser']
            const data = {
                session: user.session,
                id: user.id,
                url: this.$route.params.id
            }
            await this.$store.dispatch('casino/setCurrentPost', data)
            this.data.body = this.$store.getters['casino/getCurrentCasino']
        },
        data(){
          return {
              data:{
                body: undefined
              },
              snackbar:{
                status: false,
                text: 'Post Update',
                timeout: 5000
              }
          }
        },
        methods: {
          async update(){
            const user = this.$store.getters['user/getUser']
            const data = {
                session: user.session,
                id: user.id,
                data: this.$store.getters['casino/getCurrentCasino']
            }
            await this.$store.dispatch('casino/updateCurrentPost', data)
            this.snackbar.status = true
            setTimeout(()=>{
              this.snackbar.status = false  
            }, this.snackbar.timeout)
          },
          async postDelete(){
             const user = this.$store.getters['user/getUser']
             const data = {
                  session: user.session,
                  id: user.id,
                  data: this.$route.params.id
              }
              await this.$store.dispatch('casino/deleteCurrentPost', data)
              const confirmDelete = this.$store.getters['casino/getConfirmDelete']
              if(confirmDelete) this.$router.push(`/admin/casino`)
          }
        }
    }
</script>

<style scoped>

</style>