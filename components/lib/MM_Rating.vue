<template>
  <v-container class="container--fluid pa-0 mt-3 mb-3">
    <v-row>
      <v-col class="offset-1 col-10 font-podkova-bold blue-grey darken-4">
        <v-expansion-panels inset>
          <v-expansion-panel>
            <v-expansion-panel-header >{{title}}</v-expansion-panel-header>
            <v-expansion-panel-content class="pt-4">
              <v-subheader class="pl-0">{{current_value}}</v-subheader>
              <v-slider
                v-model="current_value"
                :thumb-size="40"
                thumb-label="always"
              >
                <template v-slot:thumb-label="{ value }">
                  {{ satisfactionEmojis[Math.min(Math.floor(value / 10), 9)] }}
                </template>
              </v-slider>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
    export default {
        name: "MM_Rating",
        props: ['value', 'title', 'action', 'action_key'],
        data(){
          return {
              current_value: '',
              satisfactionEmojis: ['😭', '😢', '☹️', '🙁', '😐', '🙂', '😊', '😁', '😄', '😍'],
          }
        },
        mounted(){
          this.current_value = this.value
        },
        watch: {
          current_value: function() {
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
.v-expansion-panel-header--active {
  background: #FF3D00;
}
</style>