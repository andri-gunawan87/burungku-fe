<template>
  <v-app dark>
    <Navbar />
    <v-main>
      <v-container fluid>
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
  name: 'DefaultLayout',
  data () {
    return {
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-login',
          title: 'Login',
          to: '/account/login'
        },
        {
          icon: 'mdi-account-plus',
          title: 'Register',
          to: '/account/register'
        }
      ],
    }
  }
}
</script>
