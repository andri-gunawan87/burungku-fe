<template>
  <div>
    <img src="/assets/logoTop.svg" height="100px" width="85%" class="logo-top">
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