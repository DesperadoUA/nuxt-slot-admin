<template>
  <v-container class="container--fluid pa-0">
    <v-row>
      <v-col class="offset-1 col-10 font-podkova-bold blue-grey darken-4">
        <v-expansion-panels inset>
          <v-expansion-panel>
            <v-expansion-panel-header >{{title}}</v-expansion-panel-header>
            <v-expansion-panel-content class="pt-4">
              <v-row v-for="(item, index) in value" :key="index">
                <v-col class="col-6">
                  <v-text-field
                                prepend-icon="mdi-tooltip-edit"
                                type="text"
                                color="deep-orange darken-2"
                                v-model="value[index].item_1"
                  ></v-text-field>
                </v-col>
                <v-col class="col-6">
                  <v-text-field
                                prepend-icon="mdi-tooltip-edit"
                                type="text"
                                color="deep-orange darken-2"
                                v-model="value[index].item_2"
                  ></v-text-field>
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
        data(){
            return {
                title: 'Multiple Two Input',
                value: [
                         {
                             item_1: 'Value 1_1',
                             item_2: 'Value 1_2'
                         },
                         {
                              item_1: 'Value 2_1',
                              item_2: 'Value 2_2'
                         },
                         {
                              item_1: 'Value 3_1',
                              item_2: 'Value 3_2'
                         },
                         {
                              item_1: 'Value 4_1',
                              item_2: 'Value 4_2'
                         }
                    ]
            }
        },
        methods: {
            addItem(){
                this.value.push({item_1: '', item_2: ''})
                console.log(this.value)
            }
        }
    }
</script>

<style scoped>

</style>