<template>
  <v-container class="container--fluid pa-0">
    <v-row>
      <v-col class="offset-1 col-10 font-podkova-bold blue-grey darken-4">
        <v-expansion-panels inset>
          <v-expansion-panel>
            <v-expansion-panel-header >{{title}}</v-expansion-panel-header>
            <v-expansion-panel-content class="pt-4">
              <v-row class="pa-2 mb-2 slider_item_wrapper">
                <div class="col-lg-3 col-xs-12">
                  <img :src="current_value"
                       class="mm_image margin_bottom_15"
                  >
                </div>
                <div class="col-lg-3 col-xs-12">
                  <input type="file"
                         id="file"
                         class="mm_input margin_bottom_15 inputFile"
                         ref="file"
                         @change="selectFile()"
                  > <label for="file" class="mt-7">Choose a file ...</label>
                </div>
              </v-row>
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
        name: "MM_Image",
        props: ['value', 'title', 'action', 'action_key'],
        methods:{
            async selectFile(){
              const file = this.$refs.file.files[0]
              console.log(this.$refs.file.files)
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
                    this.current_value = result.data.src   
                    const obj = {
                      key: this.action_key,
                      value: this.current_value
                    }
                    this.$store.dispatch(this.action, obj)    
                  }
                  reader.readAsDataURL(file);
              }
            }
        },
        data(){
            return {
                  current_value: ''
              }
            },
        mounted(){
              this.current_value = this.value
            }
    }
</script>

<style>
  img {
    max-width: 100%;
  }
  .inputFile {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
  .inputFile + label {
    font-size: 1.25em;
    font-weight: 700;
    color: white;
    background-color: #e64a19;
    display: inline-block;
    padding: 10px 15px;
    cursor: pointer;
  }
  .inputFile:focus + label,
  .inputFile + label:hover {
    background-color: #e64a19;
  }
</style>