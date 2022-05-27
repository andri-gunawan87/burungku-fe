<template>
  <v-app light>
    <AdminNavbar :propsTitle="navTitle"/>
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
  name: 'AdminLayout',
  data () {
    return {
      navTitle: ""
    }
  },
  mounted() {
    var route = this.$route.path
    var parse = route.split("/")[2]
    
    if(parse == "ListAllEvent") this.navTitle = "Admin Event"
    if(parse == "ListAllEO") this.navTitle = "Admin EO"
  },

}
</script>
