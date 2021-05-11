<template>
  <v-container class="container--fluid pa-0">
    <v-row>
      <v-col class="offset-1 col-10 font-podkova-bold blue-grey darken-4">
        <v-expansion-panels inset>
          <v-expansion-panel>
            <v-expansion-panel-header >{{title}}</v-expansion-panel-header>
            <v-expansion-panel-content class="pt-4">
              <v-text-field v-for="(item, index) in value"
                      prepend-icon="mdi-tooltip-edit"
                      type="text"
                      color="deep-orange darken-2"
                      v-model="value[index]"
              ></v-text-field>
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
        name: "MM_Multiple_Input",
        data(){
            return {
                title: 'Multiple Input',
                value: ['Value 1', 'Value_2', 'Value_3', "Value_4"]
            }
        },
        methods: {
            addItem(){
                this.value.push('')
                console.log(this.value)
            }
        }
    }
</script>

<style scoped>

</style>