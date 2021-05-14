<template>
  <v-container class="container--fluid pa-0">
    <v-row>
      <v-col class="offset-1 col-10 font-podkova-bold blue-grey darken-4">
        <v-expansion-panels inset>
          <v-expansion-panel>
            <v-expansion-panel-header >{{title}}</v-expansion-panel-header>
            <v-expansion-panel-content class="pt-4">
              <v-row>
                <v-sheet>
                  <v-switch
                          color="deep-orange darken-2"
                          v-model="currenData"
                          inset
                          @change="change"
                  ></v-switch>
                </v-sheet>
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
        name: "MM_Checkbox",
        props: ['value', 'title', 'action', 'action_key'],
        data () {
            return {
                currenData: true
            }
        },
        mounted() {
          this.currenData = this.value === 1 ? true : false 
        },
        methods: {
            change(){
              const currenData = {
                      key: this.action_key,
                      value: this.currenData
                    }
              this.$store.dispatch(this.action, currenData)
            }
        },
    }
</script>

<style scoped>

</style>