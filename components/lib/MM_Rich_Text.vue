<template>
  <v-container class="container--fluid pa-0 mt-3 mb-3">
    <v-row>
      <v-col class="offset-1 col-10 font-podkova-bold blue-grey darken-4">
        <v-expansion-panels inset>
          <v-expansion-panel>
            <v-expansion-panel-header >{{title}}</v-expansion-panel-header>
            <v-expansion-panel-content class="pt-4">
              <quillEditor
                      v-model="current_value"
                      :options="editorOption"
                      @change="onEdit"
              />
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
    import 'quill/dist/quill.snow.css'
    import {quillEditor} from 'vue-quill-editor'
    export default {
        name: "MM_Rich_Text",
        props: ['value', 'title', 'action', 'action_key'],
        data(){
            return {
                editorOption: {
                    debug: 'info',
                    placeholder: 'Type this',
                    readOnly: true,
                    theme: 'snow'
                },
                current_value: ''
            }
        },
        mounted(){
          this.current_value = this.value
        },
        components: {
            quillEditor
        },
        methods:{
            onEdit(){
              const data = {
                key: this.action_key,
                value: this.current_value
              }
              this.$store.dispatch(this.action, data)
            }
        }
    }
</script>

<style>
  .ql-toolbar.ql-snow {
    background: #fff;
  }
</style>