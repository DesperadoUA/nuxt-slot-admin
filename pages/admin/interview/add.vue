<template>
  <div>
   <commonAdd   v-if = 'data.body' 
                :data = "data.body"
                :action = 'POST_TYPE + "/changeStateNewPost"'></commonAdd>
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
import commonAdd from '~/components/templates/commonAdd.vue'
    export default {
        name: "singleInterviewAdd",
        layout: 'admin',
        components: {commonAdd},
        mounted() {   
           this.data.body = {
               title:  '',
               status: 'hide',
               lang: 'ru',
               post_type: 'interview',
               slug: 'interview',
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
           this.$store.dispatch(this.POST_TYPE + '/setNewPost', this.data.body)
        },
        data(){
          return {
              data:{
                body: undefined
              },
              POST_TYPE: 'interview'
          }
        },
        methods: {
          async add(){
            const user = this.$store.getters['user/getUser']
            const data = {
                session: user.session,
                id: user.id,
                data: this.$store.getters[this.POST_TYPE + '/getNewPost']
            }
            if(data.data.title !== '') {
                await this.$store.dispatch(this.POST_TYPE + '/addNewPost', data)
                const insertId = this.$store.getters[this.POST_TYPE + '/getInsertId']
                if(insertId !== '') this.$router.push(`/admin/${this.POST_TYPE}/${insertId}`)
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