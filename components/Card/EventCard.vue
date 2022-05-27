<template>
<v-row>
  <v-col cols="4">
    <img :src="data.gambar" alt="Kontes Burung Logo" class="center" />
  </v-col>
  <v-col cols="6">
    <h1 class="font-weight-light headline" v-text="data.judul" />
    <v-col cols="4">{{data.tanggal}}</v-col>
    <v-col cols="6">{{data.lokasi}}</v-col>
    <h1 class="font-weight-light headline" v-text="data.harga" />
  </v-col>
  <v-text-field
        outlined
        label="Lihat semua"
      ></v-text-field>
</v-row>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
    },
  },
};
</script>