<template>
  <div class="otp">
    <center>
      <img
        src="/assets/logoTop.svg"
        height="75px"
        width="85%"
        class="logo-top"
      />
      <h5 class="text text-600">Masukkan Kode OTP</h5>
      <v-otp-input v-model="otp" :length="length" light></v-otp-input>
   
          <v-btn block :disabled="!isActive" :to="'/account/register/Success'">
            Verifikasi
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
