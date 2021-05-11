<template>
  <div class="total font-podkova-bold">
      <span>Total: </span> {{data}}
  </div>
</template>
<script>
    export default {
        name: "totalPosts",
        props: ['data'],
    }
</script>
<style scoped>
.total {
    font-size: 20px;
    color: var(--white);
}
</style>