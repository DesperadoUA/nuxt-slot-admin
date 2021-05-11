<template>
    <v-container class="col-12 loop_container">
      <v-row class="deep-orange darken-2 pa-2 row_title font-podkova-bold white--text mb-2">
        <v-col class="col-9" color="white">
          <v-icon left color="white">
            mdi-folder-multiple
          </v-icon>
          Title
        </v-col>
        <v-col class="col-3 text-right">
          <v-icon left color="white">
            mdi-link
          </v-icon>
          Link
        </v-col>
      </v-row>
      <v-row
              v-for="post in data"
              :key="post.id"
              class="brown darken-2 mb-2 align-center font-podkova-bold"
      >
        <v-col class="col-9 white--text">
          {{post.title}}
        </v-col>
        <v-col class="col-3 text-right">
          <v-btn class="deep-orange darken-2"
                 :to="`/admin/${slug}/${post.id}`"
          >Edit
            <v-icon dark
                    right>mdi-tooltip-edit</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "optionsLoop",
        props: ['data', 'slug']
    }
</script>

<style>
  .border {
    border-bottom: 1px solid gray;
  }
  .loop_container {
    min-height: 650px;
  }
  .row_title {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
</style>