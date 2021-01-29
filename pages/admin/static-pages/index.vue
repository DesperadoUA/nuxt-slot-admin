<template>
  <div>
    <v-container>
      <v-row>
        <v-col class="offset-1 col-10 mt-5 mb-5">
          <h1 class="page_title font-podkova-bold">Static Pages</h1>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
    export default {
        name: "static_pages",
        layout: 'admin',
        mounted() {
            console.log('static-pages')
        }
    }
</script>

<style scoped>

</style>