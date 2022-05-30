<template>
  <v-card light rounded="lg">
    <v-col>
      <v-row>
        <v-col cols="12" class="px-4 pt-6">
          <img
            class="detail_event_card_img"
            :src="img"
            alt="Kontes Burung Logo"
            width="100%"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="px-4">
          <h2
            class="font-weight-bold text_main_color"
            v-text="data.nama_lomba"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2" class="remove-padding-col px-5">
          <v-icon>mdi-calendar-range </v-icon>
        </v-col>
        <v-col cols="10" class="remove-padding-col px-5 text_main_color"
          >{{ $moment(data.tgl_lomba).format("dddd, MMMM Do YYYY") }}
        </v-col>
        <v-col cols="2" class="remove-padding-col px-5">
          <v-icon>mdi-clock-time-three </v-icon>
        </v-col>
        <v-col cols="10" class="remove-padding-col px-5">
          <div
            v-for="(i, index) in data.sesi"
            :key="index"
            :data="data"
            class="text_main_color"
          >
            {{ i }}
          </div>
        </v-col>
        <v-col cols="2" class="remove-padding-col px-5">
          <v-icon>mdi-map-marker </v-icon>
        </v-col>
        <v-col cols="10" class="remove-padding-col px-5 text_main_color"
          >{{ data.kota }}
        </v-col>
        <v-col cols="2" class="remove-padding-col px-5">
          <v-icon>mdi-ticket </v-icon>
        </v-col>
        <v-col cols="10" class="remove-padding-col px-5 text_main_color"
          >{{ data.jml_tiket }}
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="remove-padding-col px-5 pb-5">
          <span style="white-space: pre-line" class="text_main_color">
            {{ data.deskripsi }}
          </span>
        </v-col>
      </v-row>
      <v-row> </v-row>
    </v-col>
  </v-card>
</template>

<script>
import moment from "moment";

export default {
  props: {
    data: [],
    img: "",
  },
  buildModules: [
    '@nuxtjs/moment'
  ],
  moment: {
    locales: ['idn']
  }
};
</script>