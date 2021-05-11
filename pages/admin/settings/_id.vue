<template>
  <div>
      <v-container>
      <v-row>
        <v-col class="offset-1 col-10 mt-10">
          <h1 class="page_title font-podkova-bold">{{data.title}}</h1>
        </v-col>
      </v-row>
      <v-row>
           <v-col class="mt-0">
              <MM_Image v-if = "data.editor === 'image'" 
                        :value = 'data.value' 
                        :title = 'data.title'
                        :action = 'action'
                        :action_key = '"value"' />
              <MM_Input v-if = "data.editor === 'input'"
                        :value = 'data.value' 
                        :title = 'data.title'
                        :action = 'action'
                        :action_key = '"value"' />  
              <MM_Rich_Text v-if = "data.editor === 'rich_text'"
                        :value = 'data.value' 
                        :title = 'data.title'
                        :action = 'action'
                        :action_key = '"value"' />
              <MM_Multiple_Two_Input_Image v-if = "data.editor === 'two_input_image'"
                        :value = 'data.value' 
                        :title = 'data.title'
                        :action = 'action'
                        :action_key = '"value"' />
           </v-col>
      </v-row>
    </v-container>
    <v-container>
        <v-row>
          <v-col class="offset-1 col-10 mt-5 mb-10">
            <v-btn
                  class="font-podkova-bold deep-orange darken-2"
                  text
                  @click="update()"
          >
            Update
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
import snackeBar from '../../../components/templates/snackbar'
import MM_Image from '../../../components/lib/MM_Image'
import MM_Input from '../../../components/lib/MM_Input'
import MM_Rich_Text from '../../../components/lib/MM_Rich_Text'
import MM_Multiple_Two_Input_Image from '../../../components/lib/MM_Multiple_Two_Input_Image'
    export default {
        name: "singleSettings",
        layout: 'admin',
        components: {snackeBar, MM_Image, MM_Input, MM_Rich_Text, MM_Multiple_Two_Input_Image},
        async mounted() {
          this.data.title = 'Settings single page'
          
            const user = this.$store.getters['user/getUser']
            const data = {
                session: user.session,
                id: user.id,
                url: this.$route.params.id
            }
            await this.$store.dispatch('settings/setCurrentPage', data)
            this.data = this.$store.getters['settings/getCurrentPage']
        },
        data(){
          return {
              data:{},
              snackbar: {
                  status: false,
                  text: 'Options Update',
                  timeout: 5000
                },
              action: 'settings/changeStateCurrentPage'
          }
        },
        methods: {
          async update() {
            const user = this.$store.getters['user/getUser']
            const data = {
                session: user.session,
                id: user.id,
                data: this.$store.getters['settings/getCurrentPage']
            }
    
            await this.$store.dispatch('settings/updateCurrentPage', data)
            this.snackbar.status = true
            setTimeout(()=>{
              this.snackbar.status = false  
            }, this.snackbar.timeout)
          }
        }
    }
</script>

<style scoped>

</style>