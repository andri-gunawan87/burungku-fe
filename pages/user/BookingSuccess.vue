<template>
  <v-container md>
    <v-card
      :loading="loading"
      class="mx-auto my-12"
      max-width="500"
      color="white"
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
      <v-row justify="center">
        <qrcode-vue
          :value="value"
          :size="size"
          level="H"
          class="px-2 py-2"
        ></qrcode-vue>
      </v-row>
      <v-card-title
        class="py-1"
        style="justify-content: center; font-weight: 300; color: #000000"
      >
        Tunjukan QR Code
      </v-card-title>
      <v-card-title
        class="pt-0"
        style="justify-content: center; font-weight: 300; color: #000000"
      >
        Saat Registrasi Ulang di Lokasi
      </v-card-title>
      <v-row class="my-3 py-3" justify-md="center">
        <nuxt-link
          style="text-decoration: none; color: inherit"
          :to="'/user/myEvent'"
        >
          <v-btn color="primary" elevation="2">Kembali</v-btn>
        </nuxt-link>
      </v-row>
    </v-card>
  </v-container>
</template>
<script>
import QrcodeVue from "qrcode.vue";
export default {
  layout: "UserLayout",
  data: () => ({
    loading: false,
    selection: 1,
    value: "https://example.com",
    size: 150,
  }),
  components: {
    QrcodeVue,
  },
};
</script>
