<template>
    <v-container class="col-12 loop_container">
      <v-row class="deep-orange darken-2 pa-2 row_title font-podkova-bold white--text mb-2">
        <v-col class="col-3" color="white">
          <v-icon left color="white">
            mdi-folder-multiple
          </v-icon>
          Title
        </v-col>
        <v-col class="col-4">
          <v-icon left color="white">
            mdi-comment-text
          </v-icon>
          Short Desc
        </v-col>
        <v-col class="col-2">
          <v-icon left color="white">
            mdi-calendar-check
          </v-icon>
          Data Update
        </v-col>
        <v-col class="col-2">
          <v-icon left color="white">
            mdi-check
          </v-icon>
          Status
        </v-col>
        <v-col class="col-1 text-right">
          <v-icon left color="white">
            mdi-link
          </v-icon>
          Link
        </v-col>
      </v-row>
      <v-row
              v-for="post in data"
              :key="post.id"
              :class="[(post.status === '1') ? 'blue-grey darken-3 lighten-4 mb-2 align-center font-podkova-bold' : 'brown darken-2 mb-2 align-center font-podkova-bold']"
      >
        <v-col class="col-3 white--text">
          {{post.title}}
        </v-col>
        <v-col class="col-4 white--text" v-html="post.short_desc">
        </v-col>
        <v-col class="col-2 white--text">
          {{post.update_at | sliceData}}
        </v-col>
        <v-col class="col-1 white--text">
          {{post.status | public}}
        </v-col>
        <v-col class="col-2 text-right">
          <v-btn class="deep-orange darken-2"
                 :to="`/admin/${post.slug}/${post.id}`"
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
        name: "CategoryLoop",
        props: ['data', 'slug'],
        filters: {
            public(data){
                return data === 'public' ? 'public': 'hide'
            },
            sliceData(data) {
                return data.slice(0, 10)
            }

        }
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