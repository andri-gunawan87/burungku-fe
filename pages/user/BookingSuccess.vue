<template>
  <v-container md>
    <v-card
      :loading="loading"
      class="mx-auto my-12"
      max-width="500"
      color="cyan lighten-5"
    >
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-card-title style="justify-content: center; color: #0065c9"
        >Booking Success !</v-card-title
      >
      <v-card-title class="py-0" style="justify-content: center; color: #000000"
        >Nomor Tiket Anda : 1234567891011</v-card-title
      >
      <v-img
        position="center"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngimg.com%2Fuploads%2Fqr_code%2Fqr_code_PNG6.png&f=1&nofb=1"
      ></v-img>
      <v-card-title class="py-1" style="justify-content:center; font-weight: 300; color: #000000">
        Tunjukan QR Code
      </v-card-title>
      <v-card-title class="pt-0" style="justify-content:center; font-weight: 300; color: #000000">
        Saat Registrasi Ulang di Lokasi
      </v-card-title>
      <v-row class="my-3 py-3" justify-md="center">
        <v-btn color="primary" elevation="2" >Kembali</v-btn>
      </v-row>
    </v-card>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    loading: false,
    selection: 1,
  }),
};
</script>
