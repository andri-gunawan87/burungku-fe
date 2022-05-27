<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
  <img src="/logo.png" alt="Kontes Burung Logo" class="center">
  <h2 class="text-center mt-4">Masukkan Kode OTP</h2>
<v-row justify="center">
  <v-col md="4" justify="center" class="text-center">
    <v-otp-input
  length="6"
></v-otp-input>
    <v-btn
      color="primary"
      class="mr-4"
      @click="confirmation"
    >
      Lanjut
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
      confirmation () {
        this.$refs.form.confirmation()
      },
    },
  }
</script>