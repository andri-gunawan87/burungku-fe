<template>
  <v-card light rounded="lg">
    <v-col>
      <v-row>
        <div style="margin-right: 16px">
          <img :src="data.gambar" alt="Kontes Burung Logo" class="image-card"/>
        </div>
        <div>
          <h2 class="text-700 judul-daftar-tiket" v-text="data.judul" style="margin-bottom: 4px;" />
          <v-row class="">
            <v-col cols="1"><img src="/assets/map-pin.svg"></v-col>
            <v-col cols="10" class="text-500 lokasi-daftar-tiket" style="margin-bottom: 12px;">{{ data.lokasi }}</v-col>
          </v-row>
          <p class="text-400 tgl-daftar-tiket" style="margin-bottom: 0;">{{data.tanggal}} | {{data.jam}}</p>
        </div>
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