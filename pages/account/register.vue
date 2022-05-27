<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="12" md="8">
      <v-card dark class="pa-5 ma-5">
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          @submit.prevent="register"
        >
          <img src="/logo.png" alt="Kontes Burung Logo" class="center" />
          <h2 class="text-center mt-4">Daftar Akun</h2>
          <v-row justify="center">
            <v-col md="10" justify="center" class="text-center">
              <v-text-field
                v-model="name"
                :counter="25"
                :rules="nameRules"
                label="Nama"
                required
              ></v-text-field>

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
          <v-card-actions class="justify-end">
              <a :href="'/event-org/register'">
      Daftar sebagai Event-Organizer?
    </a>
          </v-card-actions>
            </v-col>
          </v-row>
        </v-form>
        <v-btn v-on:click="google" color="primary" class="mr-4">
                google
              </v-btn>
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