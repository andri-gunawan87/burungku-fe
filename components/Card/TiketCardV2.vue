<template>
  <v-card light rounded="lg">
    <v-col>
      <v-row>
        <v-col cols="4">
          <img :src="data.gambar" alt="Kontes Burung Logo" width="100%" height="100%" style="border-radius: 8px;"/>
        </v-col>
        <v-col cols="8">
          <h2 class="text-700 judul-daftar-tiket" v-text="data.judul" />
          <v-row class="">
            <v-col cols="1"><img src="/assets/map-pin.svg"></v-col>
            <v-col cols="10" class="text-500 lokasi-daftar-tiket">{{ data.lokasi }}</v-col>
          </v-row>
          <p class="text-400 tgl-daftar-tiket">{{data.tanggal}} | {{data.jam}}</p>
        </v-col>
      </v-row>
    </v-col>
  </v-card>
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