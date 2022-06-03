<template>
  <v-app >
    <v-main class="main">
      <v-container fluid class="container_mobile">
            <Nuxt />
      </v-container>
    </v-main>
    <div
      class="main footer my-auto"
      height="20px"
    >
          <div class="text_center text_main_color">
             Kontes Burung <span>&copy; 2022</span>
          </div>
      
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      
    }
  }
}
</script>
