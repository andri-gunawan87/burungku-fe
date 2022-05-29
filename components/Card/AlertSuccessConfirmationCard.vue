<template>
  <div class="alert_success d-flex align-center justify-center">
    <span v-if="data">Bayar sebelum {{ data }} </span>
    <v-row v-else>
      <v-col cols="2"></v-col>
      <v-col cols="8"><span>Permintaan telah disetujui </span></v-col>
      <v-col cols="2"><v-icon size="32">mdi-check</v-icon> </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    data: 0,
  },

  data() {
    return {
      checked: false,
      noKursi: "",
    };
  },
};
</script>