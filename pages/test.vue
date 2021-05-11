<template>
  <v-row justify="center" align="center">
   <button class="test_btn" @click="testFetch">Test btn</button>
  </v-row>
</template>

<script>
 import DAL_Page from '../DAL/pages'
export default {
     name: "test",
     layout: 'test',
    methods: {
          async testFetch() {
              const data = {
                  id: 1,
                  session: 'bc0ad4a364dd991463cf4a17ae857de5'
              }
              const response = await DAL_Page.testPage(data);
              console.log(response)
          }
        }
}
</script>
<style>
.test_btn {
    margin-top:250px;
    color: white;
    background: red;
    padding: 20px;
}
</style>
