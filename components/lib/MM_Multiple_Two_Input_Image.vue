<template>
  <v-container class="container--fluid pa-0">
    <v-row>
      <v-col class="offset-1 col-10 font-podkova-bold blue-grey darken-4">
        <v-expansion-panels inset>
          <v-expansion-panel>
            <v-expansion-panel-header >{{title}}</v-expansion-panel-header>
            <v-expansion-panel-content class="pt-4">
              <v-container class="bb_orange" v-for="(item, index) in value" :key = "index">
              <v-row class="pa-2 mb-2 slider_item_wrapper">
                <div class="col-lg-3 col-xs-12">
                  <img :src="value[index].src"
                       class="mm_image margin_bottom_15"
                  >
                </div>
                <div class="col-lg-3 col-xs-12">
                  <input type="file"
                         :id="'file_'+index"
                         class="mm_input margin_bottom_15 inputFile"
                         ref="file"
                         @change="selectFile(index)"
                  > <label :for="'file_'+index" class="mt-7">Choose a file ...</label>
                </div>
                <div class="col-lg-6 col-xs-12">
                  <v-text-field 
                        prepend-icon = "mdi-tooltip-edit"
                        type = "text"
                        color = "deep-orange darken-2"
                        v-model = "value[index].value_1"
                        @change = "change"
                  ></v-text-field>
                  <v-text-field 
                        prepend-icon = "mdi-tooltip-edit"
                        type = "text"
                        color = "deep-orange darken-2"
                        v-model = "value[index].value_2"
                    ></v-text-field>
                  <v-btn
                      class="deep-orange darken-2 font-podkova-bold mt-5"
                      @click="deleteItem(item)"
                  >
                  <v-icon left>mdi-delete</v-icon>
                  Delete
                  </v-btn>
                </div>
              </v-row>
              </v-container>
              <v-btn
                      class="deep-orange darken-2 font-podkova-bold mt-5"
                      @click="addItem"
              >
                <v-icon left>mdi-playlist-plus</v-icon>
                Add
              </v-btn>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
    import axios from 'axios'
    import config from '../../DAL/config'
    export default {
        name: "MM_Multiple_Two_Input_Image",
        props: ['value', 'title', 'action', 'action_key'],
        data(){
            return {
                
            }
        },
        methods: {
            addItem(){
                this.value.push({
                  src: '',
                  value_1: '',
                  value_2: ''
                })
            },
            async selectFile(index){
              const file = this.$refs.file[index].files[0]
              if(file) {
                  const reader = new FileReader();
                  reader.onloadend = async () => {
                    const user = this.$store.getters['user/getUser']
                    const data = {
                        session: user.session,
                        id: user.id,
                        file: {
                          name: file.name,
                          base64: reader.result
                        }
                    }
                    const result = await axios.post(config.API_URL+'admin/uploads', data)
                    this.value[index].src = result.data.src
                    const currenData = {
                      key: this.action_key,
                      value: this.value
                    }
                    this.$store.dispatch(this.action, currenData)    
                  }
                  reader.readAsDataURL(file);
              }
            },
            deleteItem(item){
              this.value = this.value.filter(obj => obj !== item)
              const currenData = {
                      key: this.action_key,
                      value: this.value
                    }
              this.$store.dispatch(this.action, currenData) 
            }

        }
    }
</script>

<style scoped>
.bb_orange {
  border-bottom: 1px solid #FF3D00;
}
</style>