<template>
  <v-card light rounded="lg">
    <v-col>
      <v-row>
        <v-col cols="12" class="px-5">
          <h2 class="font-weight-bold text_main_color" v-text="'Upload Bukti Pembayaran'" />
        </v-col>

        <v-col cols="12" class="px-5 pt-0 pb-5">
          <img :src="data.gambar" alt="Bukti pembayaran" width="100%" />
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