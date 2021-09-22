<template>
  <v-container class="container--fluid">
    <v-row>
      <v-col class="col-12">
        <img src="/admin-loader.gif" class="loader_img"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
    export default {
        name: "loader"
    }
</script>

<style scoped>
.loader_img {
  width: 100%;
}
</style>