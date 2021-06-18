<template>
  <div>
    <v-container class="container--fluid">
      <v-row>
        <v-col class="offset-1 col-10 mt-10">
          <h1 class="page_title font-podkova-bold">Options</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="offset-1 col-10 mt-2 mb-5">
         <optionsLoop :data="data" :slug="slug" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import optionsLoop from '~/components/templates/optionsLoop'
    export default {
  components: { optionsLoop },
        name: "options",
        layout: 'admin',
        component: {optionsLoop},
        data(){
          return {
              data: [],
              slug: 'options'
          }
        },
        async mounted(){
          const user = this.$store.getters['user/getUser']
          const data = {
                session: user.session,
                id: user.id,
            }
          await this.$store.dispatch('options/setPages', data)
          this.data = this.$store.getters['options/getPages']
        }
    }
</script>

<style scoped>

</style>