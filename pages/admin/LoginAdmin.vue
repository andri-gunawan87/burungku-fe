<template>
  <div>
    <center>
      <img
        src="/assets/logoTop.svg"
        height="75px"
        width="85%"
        class="logo-top"
      />
      <h1 style="margin-bottom: 17px">Login Admin</h1>
      <form @submit.prevent="submit" ref="form">
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>
        <v-text-field
          v-model="password"
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show ? 'text' : 'password'"
          name="input-10-1"
          label="Password"
          counter
          @click:append="show = !show"
        ></v-text-field>
        <!-- <nuxt-link
                    style="text-decoration: none; color: inherit"
                    :to="'/account/forgotPassword/ForgotPassword'"
                >
                    <p style="text-align: right; font-weight: 700; font-size: 16px; line-height: 22px;">
                        Lupa Password?
                    </p>
                </nuxt-link> -->

        <button type="submit" class="btn-dark">MASUK</button>
      </form>
    </center>
  </div>
</template>

<script>
export default {
  data: () => ({
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
    async submit() {
      try {
        await this.$axios
          .post("/admin/login", {
            email: this.email,
            password: this.password,
          })
          .then((res) => {
            if (res.data == "password salah") {
              this.$router.push("/admin/LoginAdmin");
              alert("Kombinasi email dan password salah");
            } else {
                localStorage.setItem("token", res.data.token);
                this.$router.push("/admin/HomeAdmin");
            }
          });
      } catch (e) {
        this.error = e.response;
        console.log(e.response);
      }
    },
  },
};
</script>
