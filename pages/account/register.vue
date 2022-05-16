<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    @submit.prevent="register"
  >
  <img src="/logo.png" alt="Kontes Burung Logo" class="center">
  <h2 class="text-center mt-4">Daftar Akun</h2>
  <v-row justify="center">
  <v-col md="4" justify="center" class="text-center">

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

    

    <v-btn
    type="submit"
      color="primary"
      class="mr-4"
    >
      Register
    </v-btn>
  </v-col>
  </v-row>
  </v-form>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name tidak boleh kosong',
        v => (v && v.length <= 25) || 'Name harus kurang dari 25 huruf',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail tidak boleh kosong',
        v => /.+@.+\..+/.test(v) || 'Format e-mail tidak sesuai',
      ],
      password: '',
      passwordRules: [
          v => !!v || 'Password tidak boleh kosong.',
          v => v.length >= 8 || 'Password minimal 8 huruf',
      ],
        show: false,
    }),

    methods: {
      async register () {
        try {
          await this.$axios.post('/register', {
            username: this.name,
            email: this.email,
            password: this.password,
            name: this.name,
            submit_ref: ""
          })
          this.$router.push('/account/login')
        }
        catch (e) {
          this.error = e.response.data.message
        }
        }
      },
    }
</script>