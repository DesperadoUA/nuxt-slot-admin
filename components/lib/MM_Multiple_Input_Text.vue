<template>
  <v-container class="container--fluid pa-0">
    <v-row>
      <v-col class="offset-1 col-10 font-podkova-bold blue-grey darken-4">
        <v-expansion-panels inset>
          <v-expansion-panel>
            <v-expansion-panel-header >{{title}}</v-expansion-panel-header>
            <v-expansion-panel-content class="pt-4">
              <v-row v-for="(item, index) in currenData" :key="index" class="bb_orange">
                <v-col class="col-12">
                  <v-text-field
                                prepend-icon="mdi-tooltip-edit"
                                type="text"
                                color="deep-orange darken-2"
                                v-model="currenData[index].value_1"
                                @change="change"
                  ></v-text-field>
                </v-col>
                <v-col class="col-12">
                  <v-textarea
                                prepend-icon="mdi-tooltip-edit"
                                type="text"
                                color="deep-orange darken-2"
                                v-model="currenData[index].value_2"
                                @change="change"
                  ></v-textarea>
                </v-col>
                <v-col class="col-12 text-right">
                  <v-btn
                      class="deep-orange darken-2 font-podkova-bold"
                      @click="deleteItem(item)"
                  >
                  <v-icon left>mdi-delete</v-icon>
                  Delete
                  </v-btn>
                </v-col>
              </v-row>
              <v-btn
                      class="deep-orange darken-2 font-podkova-bold mt-7"
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
        name: "MM_Multiple_Input_Text",
        props: ['value', 'title', 'action', 'action_key'],
        data(){
            return {
                currenData: []
            }
        },
        methods: {
            addItem(){
              this.currenData.push({
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
            deleteItem(item){
              this.currenData = this.currenData.filter(obj => obj !== item)
              const currenData = {
                      key: this.action_key,
                      value: this.currenData
                    }
              this.$store.dispatch(this.action, currenData) 
            },
        },
        mounted(){
          this.currenData = this.value
        }
    }
</script>

<style scoped>
.bb_orange {
  border-bottom: 1px solid #FF3D00;
}
</style>