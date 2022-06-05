<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="12" md="12">
      <v-card light class="pa-5 ma-5">
        <v-alert v-if="message == true" type="error">Password Salah</v-alert>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          @submit.prevent="login"
        >
          <img src="/logo.png" alt="Kontes Burung Logo" class="center" />
          <h2 class="text-center mt-4">Login Event-Organizer</h2>
          <v-row justify="center">
            <v-col md="12" justify="center" class="text-center">
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
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
              ></v-text-field>

              <v-card-actions class="justify-center">
                <v-btn type="submit" color="primary" class="mr-4">
                  Register
                </v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-form>
      </v-card>
    </v-col>
  </v-row>
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
    phone: "",
    show: false,
    message: false,
  }),

  methods: {
    async login() {
      try {
        await this.$axios
          .post("eo/login", {
            email: this.email,
            password: this.password,
          })
          .then((response) => {
            if (response.data == "password salah") {
              window.location.reload();
            } else {
              localStorage.setItem("token", response.data.token);
              this.$router.push("/event-org");
            }
          });

        // this.$router.push("/");
      } catch (e) {
        this.error = e.response.data.message;
      }
    },
  },
};
</script>