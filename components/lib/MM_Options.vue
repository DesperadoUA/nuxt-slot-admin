<template>
  <v-container class="container--fluid pa-0 mt-3 mb-3">
    <v-row>
      <v-col class="offset-1 col-10 font-podkova-bold blue-grey darken-4">
        <v-expansion-panels inset>
          <v-expansion-panel>
            <v-expansion-panel-header >{{title}}</v-expansion-panel-header>
            <v-expansion-panel-content class="pt-4">
              <v-row align="center">
                <v-col
                        class="d-flex"
                        cols="12"
                        sm="6"
                >
                  <v-select
                          color="deep-orange darken-2"
                          :items="items"
                          v-model="current_value"
                          @change='changeItem'
                  ></v-select>
                </v-col>
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
        name: "MM_Options",
        props: ['value', 'title', , 'action', 'action_key', 'all_value'],
        data: () => ({   
            items: [],
            current_value: ''
        }),
        mounted(){
          this.current_value = this.value
          this.items = this.all_value
        },
        methods: {
          changeItem(){
            const data = {
                key: this.action_key,
                value: this.current_value
              }
            this.$store.dispatch(this.action, data)
          }
        }
    }
</script>

<style scoped>

</style>