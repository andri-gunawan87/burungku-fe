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
   
          <v-btn block @click="submit()" :disabled="!isActive">
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

  methods: {
    async submit() {
        try {
          await this.$axios.put("/verify/" + this.otp);
        } catch (e) {
          this.error = e.response.data.message;
        }
    },
  },
};
</script>
