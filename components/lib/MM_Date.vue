<template>
  <v-container class="container--fluid pa-0 mt-3 mb-3">
    <v-row>
      <v-col class="offset-1 col-10 font-podkova-bold blue-grey darken-4">
        <v-expansion-panels inset>
          <v-expansion-panel>
            <v-expansion-panel-header >{{title}}</v-expansion-panel-header>
            <v-expansion-panel-content class="pt-4">
              <v-menu
                      ref="menu"
                      v-model="menu"
                      color="deep-orange darken-2"
                      :close-on-content-click="false"
                      transition="scale-transition"
                      offset-y
                      min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                          color="deep-orange darken-2"
                          v-model="current_value"
                          prepend-icon="mdi-calendar"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                        color="deep-orange darken-2"
                        ref="picker"
                        v-model="current_value"
                        min="1950-01-01"
                        @change="save"
                ></v-date-picker>
              </v-menu>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
    export default {
        name: "MM_Date",
        props: ['value', 'title', 'action', 'action_key'],
        data: () => ({
            menu: false,
            current_value: ''
        }),
        watch: {
            menu (val) {
                val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
            },
        },
        mounted(){
          this.current_value = this.value
        },
        methods: {
            save (date) {
                this.$refs.menu.save(this.current_value)
                const data = {
                key: this.action_key,
                value: this.current_value
                }
                this.$store.dispatch(this.action, data)
            },
        },
    }
</script>

<style scoped>

</style>