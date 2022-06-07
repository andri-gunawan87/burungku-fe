<template>
  <v-app dark>
    <EoNavbar />
    <v-main>
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
  name: 'EoLayout',
  data () {
    return {
      // token: localStorage.getItem("token")
    }
  },

  // mounted() {
  //   if (localStorage.getItem("token") == null) {
  //     this.$router.push("/event-org/login")
  //   }
  //   // console.log(localStorage.getItem("token"))
  // }
}
</script>
