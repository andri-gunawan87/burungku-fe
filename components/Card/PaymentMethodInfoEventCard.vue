<template>
  <v-card light rounded="lg">
    <v-col>
      <v-row>
        <v-col cols="12" class="px-5">
          <h2 class="font-weight-bold text_main_color" v-text="'Pembayaran'" />
        </v-col>
        <v-col cols="12" class="px-5 text_main_color">
          <div v-text="'Metode Pembayaran'" />
          <v-row>
            <v-col cols="12">
              <span class="font-weight-bold">{{ data.method }}</span></v-col
            >
          </v-row>
        </v-col>
        <v-col cols="12" class="px-5 pt-0 pb-5 text_main_color">
          <div v-text="'Total Harga'" />
          <v-row>
            <v-col cols="5">
              <span class="font-weight-bold">Rp. {{ data.harga }}</span></v-col
            >
         </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-card>
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