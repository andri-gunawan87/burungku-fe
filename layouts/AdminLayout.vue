<template>
  <v-app variant="light">
    <AdminNavbar />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "AdminLayout",
  data() {
    return {};
  },
};
</script>
