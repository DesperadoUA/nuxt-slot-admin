<template>
  <v-container class="container--fluid pa-0">
    <v-row>
      <v-col class="offset-1 col-10 font-podkova-bold blue-grey darken-4">
        <v-expansion-panels inset>
          <v-expansion-panel>
            <v-expansion-panel-header >{{title}}</v-expansion-panel-header>
            <v-expansion-panel-content class="pt-4">
              <v-row v-for="(item, index) in currentData" :key="index">
                <v-col class="col-5">
                  <v-text-field
                                prepend-icon="mdi-tooltip-edit"
                                type="text"
                                color="deep-orange darken-2"
                                v-model = "currentData[index].value_1"
                                @change = "change"
                  ></v-text-field>
                </v-col>
                <v-col class="col-5">
                  <v-text-field
                                prepend-icon="mdi-tooltip-edit"
                                type="text"
                                color="deep-orange darken-2"
                                v-model = "currentData[index].value_2"
                                @change = "change"
                  ></v-text-field>
                </v-col>
                <v-col class="col-2 text-right">
                  <v-btn
                      class="deep-orange darken-2 font-podkova-bold mt-5"
                      @click="deleteItem(item)"
                  >
                  <v-icon left>mdi-delete</v-icon>
                  Delete
                  </v-btn>
                </v-col>
              </v-row>
              <v-btn
                      class="deep-orange darken-2 font-podkova-bold"
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
    export default {
        name: "MM_Multiple_Two_Input",
        props: ['value', 'title', 'action', 'action_key'],
        data(){
            return {
               currentData: []
            }
        },
        methods: {
             addItem() {
              this.currentData.push({
                value_1: '',
                value_2: ''
              })
              const currentData = {
                      key: this.action_key,
                      value: this.currentData
                    }
              this.$store.dispatch(this.action, currentData)
             },
             change(){
              const currentData = {
                      key: this.action_key,
                      value: this.currentData
                    }
              this.$store.dispatch(this.action, currentData)
             },
             deleteItem(item){
              this.currentData = this.currentData.filter(obj => obj !== item)
              const currentData = {
                      key: this.action_key,
                      value: this.currentData
                    }
              this.$store.dispatch(this.action, currentData) 
            }
        },
        mounted() {
          this.currentData = this.value
        }
    }
</script>

<style scoped>

</style>