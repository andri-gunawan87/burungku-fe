<template>
  <v-container md>
    <v-card
      :loading="loading"
      class="mx-auto my-12"
      max-width="500"
      light 
    >
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-card-title style="justify-content: center; color: #000000"
        >QR Code</v-card-title
      >
      <v-img
        position="center"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngimg.com%2Fuploads%2Fqr_code%2Fqr_code_PNG6.png&f=1&nofb=1"
      ></v-img>
    </v-card>
    <v-row>
      <v-col cols="6">
        <v-card-text> Nomor Tiket </v-card-text>
        <v-card-text> Nama Event </v-card-text>
        <v-card-text> Tanggal </v-card-text>
        <v-card-text> Sesi </v-card-text>
        <v-card-text> Jumlah Kursi </v-card-text>
        <v-card-text> Nomor Kursi </v-card-text>
      </v-col>
      <v-col cols="6">
        <v-card-text> : </v-card-text>
        <v-card-text> : </v-card-text>
        <v-card-text> : </v-card-text>
        <v-card-text> : </v-card-text>
        <v-card-text> : </v-card-text>
        <v-card-text> : </v-card-text>
      </v-col>
    </v-row>
    <v-row class="mt-10 mx-5">
      <v-col cols="4">
        <v-btn block color="yellow darken-4" elevation="6" small >Batalkan Tiket</v-btn>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="4">
        <v-btn block color="primary" elevation="2" small >Kembali</v-btn>
      </v-col>
      
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    loading: false,
    selection: 1,
  }),

  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>
