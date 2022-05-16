<template>
 
</template>

<script>
export default {
  name: "IndexPage",
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
};
</script>
