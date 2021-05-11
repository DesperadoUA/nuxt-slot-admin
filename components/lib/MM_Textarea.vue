<template>
  <v-container class="container--fluid pa-0">
    <v-row>
      <v-col class="offset-1 col-10 font-podkova-bold blue-grey darken-4">
        <v-expansion-panels inset>
          <v-expansion-panel>
            <v-expansion-panel-header >{{title}}</v-expansion-panel-header>
            <v-expansion-panel-content class="pt-4">
              <v-textarea
                      prepend-icon="mdi-tooltip-edit"
                      type="text"
                      color="deep-orange darken-2"
                      v-model="current_value"  
                      @change="onEdit"
              ></v-textarea>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
    export default {
        name: "MM_Textarea",
       props: ['value', 'title', 'action', 'action_key'],
        data(){
          return {
              current_value: ''
          }
        },
        mounted(){
          this.current_value = this.value
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

</style>