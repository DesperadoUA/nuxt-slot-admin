<template>
        <v-snackbar
        v-model = "status"
        :timeout = "timeout"
        class = "font-podkova-bold"
        color = "deep-orange"
        >
        <div class="text-center text-uppercase">
        {{ text }}
        </div>
    </v-snackbar>
</template>
<script>
  export default {
    props:['status', 'text', 'timeout']
  }
</script>