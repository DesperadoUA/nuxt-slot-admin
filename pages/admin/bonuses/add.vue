<template>
  <div>
   <commonAdd   v-if = 'data.body' 
                :data = "data.body"
                :action = '"bonuses/changeStateNewPost"'></commonAdd>
    <v-container>
        <v-row>
          <v-col class="offset-1 col-10 mt-5 mb-10">
            <v-btn
                  class="font-podkova-bold deep-orange darken-2"
                  text
                  @click="add()"
          >
           <v-icon left color="white">mdi-folder-plus</v-icon>
            Add
          </v-btn>
          </v-col>
        </v-row>
    </v-container>
  </div>
</template>

<script>
import commonAdd from '../../../components/templates/commonAdd.vue'
    export default {
        name: "singleBonusAdd",
        layout: 'admin',
        components: {commonAdd},
        mounted() {   
           this.data.body = {
               title:  '',
               status: 'public',
               lang: 'ru',
               post_type: 'bonus',
               slug: 'bonuses',
               meta_title: '',
               description: '',
               keywords: '',
               short_desc: '',
               h1: '',
               content: '',
               update_at: new Date().toJSON().slice(0,10),
               create_at: new Date().toJSON().slice(0,10),
               thumbnail: ''
           }
           this.$store.dispatch('bonuses/setNewPost', this.data.body)
        },
        data(){
          return {
              data:{
                body: undefined
              }
          }
        },
        methods: {
          async add(){
            const user = this.$store.getters['user/getUser']
            const data = {
                session: user.session,
                id: user.id,
                data: this.$store.getters['bonuses/getNewPost']
            }
            if(data.data.title !== '') {
                await this.$store.dispatch('bonuses/addNewPost', data)
                const insertId = this.$store.getters['bonuses/getInsertId']
                if(insertId !== '') this.$router.push(`/admin/bonuses/${insertId}`)
            } 
            else {
                alert('Title empty')
            }
          }
        }
    }
</script>

<style scoped>

</style>