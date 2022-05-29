<template>
  <div>
    <center>
      <img src="/assets/logoTop.svg" height="75px" width="85%" class="logo-top">
      <v-text-field
        label="Nama Lengkap"
        outlined
        dense
        width="90%"
        filled
      ></v-text-field>
      <v-text-field
        label="Nomer Telepon"
        outlined
        dense
        width="90%"
        filled
      ></v-text-field>
      <v-text-field
        label="Kata Sandi"
        outlined
        dense
        width="90%"
        :type="'password'"
        filled
        :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="show2 = !show2"
      ></v-text-field>
      <v-text-field
        label="Ulangi Kata Sandi"
        outlined
        dense
        width="90%"
        :type="'password'"
        filled
      ></v-text-field>
      <nuxt-link
          :to="'/account/register/OtpV2'"
        >
        <button class="btn-dark">DAFTAR</button>
      </nuxt-link>
      <nuxt-link
          style="text-decoration: none; color: inherit"
          :to="'/account/LoginV2'"
        >
        <h5 class="masuk text-600">Masuk</h5>
      </nuxt-link>
     </center>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name tidak boleh kosong",
      (v) => (v && v.length <= 25) || "Name harus kurang dari 25 huruf",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail tidak boleh kosong",
      (v) => /.+@.+\..+/.test(v) || "Format e-mail tidak sesuai",
    ],
    password: "",
    passwordRules: [
      (v) => !!v || "Password tidak boleh kosong.",
      (v) => v.length >= 8 || "Password minimal 8 huruf",
    ],
    show: false,
  }),

  methods: {
    async register() {
      try {
        await this.$axios.post("/register", {
          username: this.name,
          email: this.email,
          password: this.password,
          name: this.name,
          submit_ref: "",
        });
        this.$router.push("/account/login");
      } catch (e) {
        this.error = e.response.data.message;
      }
    },
    google(){
      this.$auth.loginWith('google');
    }
  },
};
</script>