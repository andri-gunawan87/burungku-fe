<template>
  <div>
    <center>
      <img
        src="/assets/logoTop.svg"
        height="75px"
        width="85%"
        class="logo-top"
      />
      <h5 class="text text-600">Masukkan Kode OTP</h5>
      <v-otp-input v-model="otp" :length="length" light></v-otp-input>
      <v-btn block :disabled="!isActive" class="btn-dark">
      <nuxt-link
        style="text-decoration: none; color: inherit"
        :to="'/account/register/Success'"
      >
        Verifikasi
      </nuxt-link>
      </v-btn>
    </center>
  </div>
</template>

<script>
export default {
  data: () => ({
    otp: "",
    length: 5,
  }),
  computed: {
    isActive() {
      return this.otp.length === this.length;
    },
  },
};
</script>
