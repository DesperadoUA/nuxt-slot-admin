<template>
  <div class="text-center">
    <v-container>
      <v-row justify="center">
        <v-col cols="8">
          <v-container class="max-width">
            <v-pagination
              v-model="page"
              class="my-4 font-podkova-bold "
              :total-visible="7"
              :length="length"
              @click="changePage()"
            ></v-pagination>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
  export default {
    name: "MM_Paginations",
    props: ['length', 'action', 'lang', 'numberOnPage', 'getterPage'],
    watch: {
       async page(){
            const user = this.$store.getters['user/getUser']
            const data = {
                session: user.session,
                id: user.id,
                lang: this.lang,
                limit: this.numberOnPage,
                offset: (this.page - 1) * this.numberOnPage
            }
            await this.$store.dispatch(this.action, data)
        }
    },
    data () {
      return {
        page: 1,
      }
    },
    mounted() {
      const pages = this.$store.getters[this.getterPage]
      const lang = this.$store.getters['common/lang']
      this.page = pages[lang[this.lang]]
    }
    
  }
</script>