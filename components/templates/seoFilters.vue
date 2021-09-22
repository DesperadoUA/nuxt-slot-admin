<template>
  <v-sheet class="mt-5 mb-5">
    <v-tabs
            background-color="black"
            dark
            next-icon="mdi-arrow-right-bold-box-outline"
            prev-icon="mdi-arrow-left-bold-box-outline"
            show-arrows
    >
      <v-tabs-slider
               color="deep-orange darken-2 text-white"
      >
      </v-tabs-slider>
      <v-tab
              v-for="(item, index) in value"
              :key="index"
              @click="setFilters(item)"
      >
        {{item.title}}
      </v-tab>
    </v-tabs>
  </v-sheet>
</template>

<script>
    export default {
        props: ['value', 'action'],
        name: "seoFilters",
        methods: {
            async setFilters(item){
                const user = this.$store.getters['user/getUser']
                const data = {
                    session: user.session,
                    id: user.id,
                    postType: this.$store.getters['seo/getCurrentPostType']
                }
                if(item.title === 'status') {
                    item.hide = !item.hide
                    item.public = !item.public
                    data.filter = 'status'
                    data.filterValue = item.hide ? 'hide' : 'public'
                }
                else if(item.title === 'all') {
                    item.asc = !item.asc
                    item.desc = !item.desc
                    data.filter = 'create_at'
                    data.filterValue = item.asc ? 'asc' : 'desc'
                }
                else if(item.title === 'rating') {
                    item.asc = !item.asc
                    item.desc = !item.desc
                    data.filter = 'rating'
                    data.filterValue = item.asc ? 'asc' : 'desc'
                }
                this.$store.dispatch('common/setLoad', true)
                data.lang = 1
                await this.$store.dispatch(this.action, data)
                data.lang = 2
                await this.$store.dispatch(this.action, data)
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