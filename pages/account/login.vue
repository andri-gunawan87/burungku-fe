<template>
  <div>
    <center>
      <v-alert v-if="message == true" type="error"
        >Email dan/atau password Salah</v-alert
      >
      <v-form
        ref="form"
        @submit.prevent="login"
      >
        <img
          src="/assets/logoTop.svg"
          height="75px"
          width="85%"
          class="logo-top"
        />
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
          outlined
          dense
        ></v-text-field>
        <v-text-field
          v-model="password"
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="passwordRules"
          :type="show ? 'text' : 'password'"
          name="input-10-1"
          label="Password"
          hint="At least 8 characters"
          counter
          @click:append="show = !show"
          outlined
          dense
        ></v-text-field>
        <nuxt-link
          style="text-decoration: none; color: inherit"
          :to="'/account/forgotPassword/ForgotPassword'"
        >
          <p
            style="
              text-align: right;
              font-weight: 700;
              font-size: 16px;
              line-height: 22px;
            "
          >
            Lupa Password?
          </p>
        </nuxt-link>
        <button type="submit" class="btn-dark white--text">Masuk</button>
        <nuxt-link
          style="text-decoration: none; color: inherit"
          :to="'/account/register/Account'"
        >
          <h5 class="daftar text-600">Daftar Akun</h5>
        </nuxt-link>
      </v-form>
    </center>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

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
    message: false,
    show: false
  }),

  methods: {
    async login() {
      try {
        await this.$auth.loginWith("local", {
          data: {
            email: this.email,
            password: this.password,
          },
        });
        if (this.$auth.user.role == "2") {
          this.$router.push("/");
        } else if (this.$auth.user.role == "1") {
          this.$router.push("/event-org");
        } else {
          this.$router.push("/admin");
        }
      } catch (err) {
        if (err.response) {
          // There is an error response from the server
          // You can anticipate error.response.data here
          const error = err.response.data;
          this.message = true;
        } else if (err.request) {
          // The request was made but no response was received
          // Error details are stored in error.reqeust
          console.log(err.request);
        } else {
          // Some other errors
          console.log("Error", err.message);
        }
      }
    },
  },

  computed: {
    ...mapGetters(["isAuthenticated", "loggedInUser"]),
  },
};
</script>