<template>
  <v-card light rounded="lg">
    <v-col>
      <v-row>
        <v-col cols="4">
          <img :src="data.gambar" alt="Kontes Burung Logo" width="100%" />
        </v-col>
        <v-col cols="8">
          <h2 class="font-weight-bold" v-text="data.judul" />
          <v-row class="">
            <v-col cols="4">{{ data.tanggal }}</v-col>
            <v-col cols="8">{{ data.lokasi }}</v-col>
          </v-row>
          <h2 class="font-weight-bold" v-text="'Rp. ' + data.harga" />
        </v-col>
        <v-btn width="90%" class="mx-auto mb-3" outlined plain>Lihat Detail</v-btn>
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