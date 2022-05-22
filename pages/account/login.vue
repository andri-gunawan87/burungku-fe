<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="12" md="8">
      <v-card light class="pa-5 ma-5">
        <v-form @submit.prevent="login">
          <img src="/logo.png" alt="Kontes Burung Logo" class="center" />
          <h2 class="text-center mt-4">Masuk</h2>
          <v-row justify="center">
            <v-col md="10" justify="center" class="text-center">
              <v-text-field
                v-model="username"
                :counter="25"
                :rules="usernameRules"
                label="Username"
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
                class="mb-4"
                counter
                @click:append="show = !show"
              ></v-text-field>

              <v-btn color="primary" class="mr-4" @click="login"> Login </v-btn>
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
    valid: false,
    username: "",
    usernameRules: [
      (v) => !!v || "Username tidak boleh kosong",
      (v) => (v && v.length <= 25) || "Username harus kurang dari 25 huruf",
    ],
    password: "",
    passwordRules: [
      (v) => !!v || "Password tidak boleh kosong.",
      (v) => v.length >= 8 || "Password minimal 8 huruf",
    ],
    show: false,
  }),

  methods: {
    async login() {
      try {
        await this.$auth.loginWith('google');
        this.$router.push("/");
      } catch (e) {
        this.error = e.response.data.message;
      }
    },
  },
};
</script>

