<template>
  <div>
    <nuxt-link
                style="text-decoration: none; color: inherit"
                :to="'/'"
            >
        <img src="/assets/back.svg" height="4%" width="4%" class="back">
      </nuxt-link>
    <div class="block-satu">
      <img
        src="/logo.png"
        alt="Kontes Burung Logo"
        class="logo"
        height="30%"
        width="30%"
      />
      <h1 class="text-700">Selamat Datang di Lomba Burung{{dataLink}}</h1>
      <p class="text-boarding text-400">
        Make payments, transfers, and receive the required information on your
        finances.
      </p>
    </div>
    <a :href="dataLink"> Masuk </a>
    <div class="block-dua">
      <v-btn @click="login" class="btn-putih">
        <img
          src="/assets/google.png"
          height="15px"
          width="15px"
          class="icon-google"
        />
        <p class="text-600">MASUK DENGAN GOOGLE</p>
      </v-btn>

      <!-- ===== Login Metode Lain ===== -->
      <!-- <center>
        <p class="atau text-600">atau</p>
      </center>
      <button class="btn-transparan text-600">
        <img src="" />MASUK DENGAN EMAIL</button
      ><br />
      <nuxt-link :to="'/account/register/Account'">
        <button class="btn-dark">DAFTAR DENGAN EMAIL</button>
      </nuxt-link> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataLink: ""
    }
  },

  async fetch() {
      const response = await this.$axios.get("/user/register/oauth");
      this.dataLink = response.data;
    },

  methods: {
    async login() {
      try {
        await this.$auth.loginWith("google");
        this.$router.push("/event-org");
      } catch (e) {
        this.error = e.response.data.message;
      }
    },
  },

  mounted() {
    console.log(this.dataLink)
  }
};
</script>
