<template>
    <div>
          <v-row align="center" justify="center">
    <v-col cols="2" sm="2" md="2">
        <v-list-item-subtitle>{{data.nomorKursi}}</v-list-item-subtitle>
    </v-col>
    <v-col cols="6" sm="6" md="6">
        <v-list-item-subtitle>{{data.nama}}</v-list-item-subtitle>
    </v-col>
    <v-col cols="4" sm="4" md="4">
        <v-list-item-subtitle class="red" v-if="data.statusPembayaran == 'Belum dibayar'">{{data.statusPembayaran}}</v-list-item-subtitle>
        <v-list-item-subtitle class="yellow" v-if="data.statusPembayaran == 'Menunggu konfirmasi'">{{data.statusPembayaran}}</v-list-item-subtitle>
        <v-list-item-subtitle class="green" v-if="data.statusPembayaran == 'Sudah dibayar'">{{data.statusPembayaran}}</v-list-item-subtitle>
        <v-list-item-subtitle class="primary" v-if="data.statusPembayaran == 'On The Spot'">{{data.statusPembayaran}}</v-list-item-subtitle>
    </v-col>
          </v-row>
    </div>
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