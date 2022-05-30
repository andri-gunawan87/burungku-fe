<template>
  <div>
    <div class="block-satu">
      <img
        src="/logo.png"
        alt="Kontes Burung Logo"
        class="logo"
        height="30%"
        width="30%"
      />
      <h1 class="text-700">Selamat Datang di Lomba Burung</h1>
      <p class="text-boarding text-400">
        Make payments, transfers, and receive the required information on your
        finances.
      </p>
    </div>
    <div class="block-dua">
      <button class="btn-putih" @click="login">
        <img
          src="/assets/google.png"
          height="15px"
          width="15px"
          class="icon-google"
        />
        <p class="text-600">MASUK DENGAN GOOGLE</p>
      </button>

      <center>
        <p class="atau text-600">atau</p>
      </center>
      <button class="btn-transparan text-600">
        <img src="" />MASUK DENGAN EMAIL</button
      ><br />
      <nuxt-link :to="'/account/register/Account'">
        <button class="btn-dark">DAFTAR DENGAN EMAIL</button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  
  data() {
    return {
      events: [],
    };
  },

  methods: {
    async fetch() {
      await this.$axios.get("/event").then((res) => (this.events = res.data));
      console.log(this.events);
    },
    
    async login() {
      try {
        await this.$auth.loginWith("google");
        this.$router.push("/");
      } catch (e) {
        this.error = e.response.data.message;
      }
    },
  },
};
</script>
