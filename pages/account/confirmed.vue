<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
  <img src="/logo.png" alt="Kontes Burung Logo" class="center">
  <h2 class="text-center mt-4">Akun anda sudah terverifikasi</h2>
<v-row justify="center">
  <v-col md="4" justify="center" class="text-center">
    <v-icon color="green" size="300">mdi-check-circle</v-icon>
    <br>
    <v-btn
      color="primary"
      class="mr-4"
      @click="login"
    >
      Login
    </v-btn>
  </v-col>
</v-row>
  </v-form>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
    }),

    methods: {
      login () {
        this.$refs.form.login()
      },
    },
  }
</script>