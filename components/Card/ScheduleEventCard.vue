<template>
  <v-card light rounded="lg">
    <v-col>
      <v-row>
        <v-col cols="12" class="px-5">
          <h2 class="font-weight-bold text_main_color" v-text="'Jadwal'" />
        </v-col>
        <v-col cols="12" class="px-5 text_main_color">
          <div v-text="'Sesi'" />
          <v-row>
            <v-col cols="5">
              <span class="font-weight-bold text_main_color"
                >Sesi 1, {{ data.jam[0] }}</span
              ></v-col
            >
            <v-spacer></v-spacer>
            <v-col cols="5" class="text-right">
                <nuxt-link class="font-weight-bold text-decoration-none text_main_color" v-if="data.isbooking" to="/booking-event"
                  >ubah</nuxt-link
              ></v-col
            >
          </v-row>
        </v-col>
        <v-col cols="12" class="px-5 pt-0 pb-5 text_main_color">
          <div v-text="'No Kursi'" />
          <v-row>
            <v-col cols="5">
              <span class="font-weight-bold text_main_color">Kursi 1</span></v-col
            >
            <v-spacer></v-spacer>
            <v-col cols="5" class="text-right font-weight-bold">
                <nuxt-link class="font-weight-bold text-decoration-none text_main_color" v-if="data.isbooking" to="/booking-event"
                  >ubah</nuxt-link
              ></v-col
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