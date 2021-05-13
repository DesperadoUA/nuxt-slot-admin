<template>
  <v-container class="container--fluid pa-0 mt-3 mb-3">
    <v-row>
      <v-col class="offset-1 col-10 font-podkova-bold blue-grey darken-4">
        <v-expansion-panels inset>
          <v-expansion-panel>
            <v-expansion-panel-header >{{title}}</v-expansion-panel-header>
            <v-expansion-panel-content class="pt-4">
                <v-combobox
                  v-model="chips"
                  :items="items"
                  chips
                  clearable
                  label="Relative"
                  multiple
                  prepend-icon="mdi-filter-variant"
                  solo
                >
                  <template v-slot:selection="{ attrs, item, select, selected }">
                    <v-chip
                      v-bind="attrs"
                      :input-value="selected"
                      close
                      @click="select"
                      @click:close="remove(item)"
                    >
                      <strong>{{ item }}</strong>
                    </v-chip>
                  </template>
                </v-combobox>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
    export default {
        name: "MM_Relative_Posts",
        props: ['value', 'title', 'action', 'action_key', 'multiple'],
        data () {
          return {
            chips: [],
            items: [],
          }
        },
        methods: {
          remove (item) {
            this.chips.splice(this.chips.indexOf(item), 1)
            this.chips = [...this.chips]
          },
        },
        watch: {
          chips() {
            const currenData = {
                      key: this.action_key,
                      value: this.chips
                    }
            this.$store.dispatch(this.action, currenData) 
          }
        },
        mounted(){
          console.log(this.action)
          this.chips = this.value.current_value
          this.items = this.value.all_value
        }
    }
</script>

<style scoped>

</style>