<template>
  <div class="alert_warning d-flex align-center justify-center">
    <span class="text_main_color" v-if="data">Bayar sebelum {{ data }} </span>
    <v-row v-else>
      <v-col cols="2"></v-col>
      <v-col cols="8"><span class="text_main_color">Menunggu persetujuan panitia </span></v-col>
      <v-col cols="2"><v-icon size="32">mdi-clock</v-icon> </v-col>
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