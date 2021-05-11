<template>
  <v-container class="container--fluid pa-0">
    <v-row>
      <v-col class="offset-1 col-10 font-podkova-bold blue-grey darken-4">
        <v-expansion-panels inset>
          <v-expansion-panel>
            <v-expansion-panel-header >{{title}}</v-expansion-panel-header>
            <v-expansion-panel-content class="pt-4">
              <v-row>
                  <v-color-picker
                          v-model="value"
                          show-swatches
                          flat
                  ></v-color-picker>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
    export default {
        name: "MM_Color_Picker",
        data () {
            return {
                value: '#006064',
                title: 'Color Change'
            }
        },
    }
</script>

<style scoped>

</style>