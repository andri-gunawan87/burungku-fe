<template>
  <v-card light rounded="lg">
    <v-col>
      <v-row>
        <v-col cols="12" class="px-5 pt-0 pb-5">
          <img :src="data.qrCode" alt="Qr-Code" width="100%" />
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