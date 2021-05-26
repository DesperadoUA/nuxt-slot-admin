<template>
    <v-container class="container--fluid pa-0">
      <v-row>
        <v-col class="offset-1 col-10 font-podkova-bold blue-grey darken-4">
          <v-expansion-panels inset>
            <v-expansion-panel>
              <v-expansion-panel-header >{{title}}</v-expansion-panel-header>
              <v-expansion-panel-content class="pt-4">
                <v-container fluid>
                  <v-select
                          v-model="chips"
                          :items="items"
                          label="Select items"
                          multiple
                  >
                    <template v-slot:prepend-item>
                      <v-list-item
                              ripple
                              @click="toggle"
                      >
                        <v-list-item-action>
                          <v-icon :color="chips.length > 0 ? 'deep-orange darken-2' : ''">
                            {{ icon }}
                          </v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                          <v-list-item-title>
                            Select All
                          </v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                      <v-divider class="mt-2"></v-divider>
                    </template>
                    <template v-slot:append-item>
                      <v-divider class="mb-2"></v-divider>
                      <v-list-item disabled>
                        <v-list-item-avatar color="deep-orange darken-2">
                          <v-icon>
                            mdi-star-circle
                          </v-icon>
                        </v-list-item-avatar>

                        <v-list-item-content v-if="allItems">
                          <v-list-item-title>

                          </v-list-item-title>
                        </v-list-item-content>

                        <v-list-item-content v-else-if="selectItems">
                          <v-list-item-title>
                            Total Count
                          </v-list-item-title>
                          <v-list-item-subtitle>
                            {{ value.length }}
                          </v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-content v-else>
                          <v-list-item-title>

                          </v-list-item-title>
                          <v-list-item-subtitle>

                          </v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </template>
                  </v-select>
                </v-container>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "MM_Multiple_Options",
        props: ['value', 'title', 'action', 'action_key', 'multiple'],
        data: () => ({
            items: [
                'Apples',
                'Apricots',
                'Avocado',
                'Bananas',
                'Blueberries',
                'Blackberries',
                'Boysenberries',
                'Bread fruit',
                'Cantaloupes (cantalope)',
                'Cherries',
                'Cranberries',
                'Cucumbers',
                'Currants',
                'Dates',
                'Eggplant',
                'Figs',
                'Grapes',
                'Grapefruit',
                'Guava',
                'Honeydew melons',
                'Huckleberries',
                'Kiwis',
                'Kumquat',
                'Lemons',
                'Limes',
                'Mangos',
                'Mulberries',
                'Muskmelon',
                'Nectarines',
                'Olives',
                'Oranges',
                'Papaya',
                'Peaches',
                'Pears',
                'Persimmon',
                'Pineapple',
                'Plums',
                'Pomegranate',
                'Raspberries',
                'Rose Apple',
                'Starfruit',
                'Strawberries',
                'Tangerines',
                'Tomatoes',
                'Watermelons',
                'Zucchini',
            ],
            chips: [],
        }),

        computed: {
            allItems () {
                return this.chips.length === this.items.length
            },
            selectItems () {
                return this.chips.length > 0 && !this.allItems
            },
            icon () {
                if (this.allItems) return 'mdi-close-box'
                if (this.selectItems) return 'mdi-minus-box'
                return 'mdi-checkbox-blank-outline'
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
        methods: {
            toggle () {
                this.$nextTick(() => {
                    if (this.allItems) {
                        this.chips = []
                    } else {
                        this.chips = this.items.slice()
                    }
                })
            },
        },
        mounted(){
          this.chips = this.value.current_value
          this.items = this.value.all_value
        }
    }
</script>

<style scoped>

</style>