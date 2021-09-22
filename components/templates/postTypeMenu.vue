<template>
  <v-sheet>
    <v-tabs
            background-color="black"
            dark
            next-icon="mdi-arrow-right-bold-box-outline"
            prev-icon="mdi-arrow-left-bold-box-outline"
            show-arrows
    >
      <v-tabs-slider color="deep-orange darken-2 text-white">
      </v-tabs-slider>
      <v-tab
              v-for="(item, index) in value"
              :key="index"
              @click="setCurrentPostType(item)"
      >
        {{item}}
      </v-tab>
    </v-tabs>
  </v-sheet>
</template>

<script>
    export default {
        props: ['value', 'action'],
        name: "postTypeMenu",
        methods: {
            async setCurrentPostType(item){
                const user = this.$store.getters['user/getUser']
                const dataPostType = {
                    session: user.session,
                    id: user.id,
                    postType: item
                }
                this.$store.dispatch('common/setLoad', true)
                await this.$store.dispatch(this.action, dataPostType)
                this.$store.dispatch('common/setLoad', false)
            }
        }
    }
</script>

<style scoped>
  .v-tab--active {
    color: #fff;
  }
</style>