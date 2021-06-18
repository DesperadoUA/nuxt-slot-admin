<template>
  <v-container class="container--fluid pa-0 mt-3 mb-3">
    <v-row>
      <v-col class="offset-1 col-10 font-podkova-bold blue-grey darken-4">
        <v-expansion-panels inset>
          <v-expansion-panel>
            <v-expansion-panel-header >{{title}}</v-expansion-panel-header>
            <v-expansion-panel-content class="pt-4">
              <v-container class="bb_orange" v-for="(item, index) in currenData" :key = "index">
                <v-row class="pa-2 mb-2 slider_item_wrapper">
                  <div class="col-lg-3 col-xs-12">
                    <img :src="currenData[index].src"
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
                          v-model = "currenData[index].value_1"
                          @change = "change" 
                    ></v-text-field>
                    <v-text-field 
                          prepend-icon = "mdi-tooltip-edit"
                          type = "text"
                          color = "deep-orange darken-2"
                          v-model = "currenData[index].value_2"
                          @change = "change"
                      ></v-text-field>
                    <v-btn
                        class="deep-orange darken-2 font-podkova-bold mt-5"
                        @click="deleteItem(item)"
                    >
                    <v-icon left>mdi-delete</v-icon>
                    Delete
                    </v-btn>
                  </div>
                  <v-container>
                      <v-row v-for="(itemChild, indexChild) in currenData[index].child" :key = "indexChild">
                        <div class="col-5 col-xs-12">
                            <v-text-field 
                                  prepend-icon = "mdi-tooltip-edit"
                                  type = "text"
                                  v-model = "currenData[index]['child'][indexChild].value_1"
                                  @change = "change" 
                                  color = "deep-orange darken-2"
                            ></v-text-field>
                          </div>
                        <div class="col-5 col-xs-12">
                        <v-text-field 
                                prepend-icon = "mdi-tooltip-edit"
                                type = "text"
                                v-model = "currenData[index]['child'][indexChild].value_2"
                                @change = "change" 
                                color = "deep-orange darken-2"
                            ></v-text-field>
                          </div>
                        <div class="col-2 text-right">
                          <v-btn
                            class="deep-orange darken-2 font-podkova-bold mt-5"
                            @click="deleteItemChild(index, indexChild)"
                          >
                          <v-icon left>mdi-delete</v-icon>
                              Delete
                              </v-btn>
                        </div>
                      </v-row>
                        <div class="col-12 text-right">
                          <v-btn
                          class="deep-orange darken-2 font-podkova-bold mt-5"
                          @click="addItemChild(index)"
                          >
                            <v-icon left>mdi-playlist-plus</v-icon>
                            Add
                          </v-btn>
                          </div>
                  </v-container>
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
        name: "MM_Multiple_Menu",
        props: ['value', 'title', 'action', 'action_key'],
        data () {
            return {
                currenData: []
            }
        },
        mounted() {
            this.currenData = this.value
        },
        methods: {
            deleteItemChild(indexParent, indexChild) {
              this.currenData[indexParent].child.splice(indexChild, 1)
              const currenData = {
                      key: this.action_key,
                      value: this.currenData
                    }
              this.$store.dispatch(this.action, currenData) 
            },
            addItem(){
              this.currenData.push({
                src: '',
                value_1: '',
                value_2: '',
                child: []
              })
              const currenData = {
                      key: this.action_key,
                      value: this.currenData
                    }
              this.$store.dispatch(this.action, currenData)
            },
            addItemChild(index){
             this.currenData[index].child.push({
                  value_1: '',
                  value_2: ''
              })
            const currenData = {
                      key: this.action_key,
                      value: this.currenData
                    }
              this.$store.dispatch(this.action, currenData)
            },
            change(){
              const currenData = {
                      key: this.action_key,
                      value: this.currenData
                    }
              this.$store.dispatch(this.action, currenData)
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
                    this.currenData[index].src = result.data.src
                    const currenData = {
                      key: this.action_key,
                      value: this.currenData
                    }
                    this.$store.dispatch(this.action, currenData)    
                  }
                  reader.readAsDataURL(file);
              }
            },
            deleteItem(item){
              this.currenData = this.currenData.filter(obj => obj !== item)
              const currenData = {
                      key: this.action_key,
                      value: this.currenData
                    }
              this.$store.dispatch(this.action, currenData) 
            },
        },
    }
</script>

<style scoped>
.slider_item_wrapper {
  border-bottom: 1px solid #e64a19;
}
</style>