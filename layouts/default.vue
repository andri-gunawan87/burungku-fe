<template>
  <v-app >
    <v-main class="main">
      <v-container fluid>
        <v-row justify="center" class="mx-2">
          <v-col cols="12" sm="8" md="4">
            <Nuxt />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
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
