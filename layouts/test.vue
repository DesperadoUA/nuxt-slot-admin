<template>
  <v-app>
    <div class="admin_layout">
      <AdminMenu />
      <nuxt />
    </div>
  </v-app>
</template>

<script>
    import AdminMenu from '../components/templates/adminMenu'
    export default {
        name: "test",
        components: {AdminMenu},
    }
</script>

<style>
  body {
    background: #333;
  }
  .color-orange {
    color: #FF3D00;
  }
  .page_title {
    margin-top: 50px;
    text-align: center;
    font-family: 'Podkova';
  }
  .font-podkova-light {
    font-family: 'Podkova';
    font-weight: 400;
  }
  .font-podkova-bold {
    font-family: 'Podkova';
    font-weight: 800;
  }
  .font-podkova-midle {
    font-family: 'Podkova';
    font-weight: 500;
  }
  .pointer {
    cursor:pointer;
  }
</style>