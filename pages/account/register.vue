<template>
    <div>
        <center>
            <img src="/assets/logoTop.svg" height="75px" width="85%" class="logo-top">
            <v-form
          @submit.prevent="register"
        >
            <v-text-field
                v-model="name"
                :counter="25"
                :rules="nameRules"
                label="Nama"
                required
                outlined
                dense
              ></v-text-field>

              <v-text-field
                v-model="phone"
                label="No Telephone"
                required
                outlined
                dense
              ></v-text-field>

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
                :to="'/account/login'"
            >
                <p style="text-align: right; font-weight: 700; font-size: 16px; line-height: 22px;">
                    Sudah punya akun?
                </p>
            </nuxt-link>
                <button type="submit" class="btn-dark white--text">Daftar Akun</button>
            </v-form>
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
    phone: "",
    show: false,
  }),

  methods: {
    async register() {
      try {
        await this.$axios.post("/user/register/manual", {
          no_hp: this.phone,
          email: this.email,
          password: this.password,
          nama: this.name,
        });
        this.$router.push("/account/login");
      } catch (e) {
        this.error = e.response.data.message;
      }
    },
  },
};
</script>