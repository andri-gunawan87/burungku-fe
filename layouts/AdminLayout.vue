<template>
  <v-app dark>
    <AdminNavbar />
    <v-main class="main">
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'AdminLayout',
  data () {
    return {
      
    }
  },

  mounted() {
    if (localStorage.getItem("token") == null) {
      this.$router.push("/admin/LoginAdmin");
    }
  }
}
</script>
