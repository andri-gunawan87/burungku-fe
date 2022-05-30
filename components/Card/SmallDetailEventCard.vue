<template> 
  <v-card light rounded="lg">
    <v-col>
      <v-row>
        <v-col cols="12" class="px-4 pt-6">
          <!-- <img class="detail_event_card_img" :src="data.gambar" alt="Kontes Burung Logo" width="100%" /> -->
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="px-4">
          <h2 class="font-weight-bold text_main_color" v-text="data.nama_lomba" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2" class="remove-padding-col px-5">
          <v-icon>mdi-calendar-range
          </v-icon>
        </v-col>
        <v-col cols="10" class="remove-padding-col px-5 text_main_color">{{data.tgl_lomba}}
        </v-col>
        <v-col cols="2" class="remove-padding-col px-5">
          <v-icon>mdi-clock-time-three
          </v-icon>
        </v-col>
        <v-col cols="10" class="remove-padding-col px-5">
          <div
            v-for="(i, index) in data.sesi"
            :key="index"
            :data="data"
            class="text_main_color"
          >
            {{ i.jam_start }} - {{ i.jam_end }}
          </div>
        </v-col>
        <v-col cols="2" class="remove-padding-col px-5">
          <v-icon>mdi-map-marker
          </v-icon>
        </v-col>
        <v-col cols="10" class="remove-padding-col px-5 text_main_color">{{data.kota}}, {{data.provinsi}}
        </v-col>
        <v-col cols="2" class="remove-padding-col px-5">
          <v-icon>mdi-ticket
          </v-icon>
        </v-col>
        <v-col cols="10" class="remove-padding-col px-5 text_main_color">{{data.jml_tiket}} Tiket
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="pa-5">
          <span style="white-space: pre-line;" :class="{ 'text_main_color': checked, 'truncate text_main_color': !checked }">
          {{data.deskripsi}}
          </span><a class="text-decoration-none text_main_color font-weight-bold" @click="checked = !checked">{{checked ? '' : 'Baca Selengkapnya'}}</a>
        </v-col>
      </v-row>
      <v-row>
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
  data() {
    return {
      checked: false
    }
  }
};
</script>