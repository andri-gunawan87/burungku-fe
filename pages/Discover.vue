<template>
  <div>
    <v-row class="pa-3">
      <v-col cols="2" class="d-flex justify-center align-center">
          <img src="/assets/ticket-home.svg" height="20px" width="18px" class="mt-2">
      </v-col>
      <v-col cols="8" class="d-flex justify-center">
        <img height="44px" src="/logo1.png" width="auto" alt="Kontes Burung Logo" class=""/>
      </v-col>
      <v-col cols="2" class="d-flex justify-center">
        <img src="/assets/user.svg" height="16px" width="21px" class="mt-3">
      </v-col>
    </v-row>
    <v-row class="pa-3">
      <v-text-field
        outlined
        label="Cari Lokasi Kontes"
        prepend-inner-icon="mdi-map-marker"
      ></v-text-field>
    </v-row>
    <v-row>
      <v-col v-for="n in 1" :key="n" cols="12">
        <v-card height="200"></v-card
      ></v-col>
    </v-row>
    <v-row>
      <v-col cols="3" class="headline font-weight-bold text_main_color">Event</v-col>
      <v-spacer></v-spacer>
      <v-col cols="3"><nuxt-link class="text-decoration-none text_main_color" to="/discover-all">Lihat Semua</nuxt-link></v-col>
    </v-row>
    <v-row>
      <v-col v-for="(data, index) in listEvent" :key="index" cols="12">
        <EventCard :key="index" :data="data" />
      </v-col>
    </v-row>
    <v-row class="pa-3">
      <v-btn width="100%" height="50px" class="mx-auto " :to="'/discover-all'" outlined
        >Lihat semua Event</v-btn
      >
    </v-row>
    <v-row>
      <v-col cols="3" class="headline font-weight-bold text_main_color">FAQ</v-col>
    </v-row>
    <v-row class="pa-3">
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-bold text_main_color">
            Apa itu kontes burung?
            <template v-slot:actions>
              <v-icon color="text_main_color"> $expand </v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="text_main_color">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>

      <v-expansion-panels class="mt-2">
        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-bold text_main_color">
            Bagaimana cara kerjanya?
            <template v-slot:actions>
              <v-icon color="primary"> $expand </v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="text_main_color">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </div>
</template>
<script>
import EventCard from "@/components/Card/EventCard.vue";
import { async } from "q";

export default {
  components: {
    EventCard,
  },

  data() {
    return {
      user: null,
      listEvent: [
        {
          id: 1,
          judul: "Lomba Burung Murai",
          tanggal: "Mei 21",
          lokasi: "Bandung, Jawa Barat",
          harga: "200000",
          gambar:
            "https://cdnwpseller.gramedia.net/wp-content/uploads/2021/10/18222845/unnamed-6.jpg",
        },
        {
          id: 1,
          judul: "Lomba Burung Murai",
          tanggal: "Mei 21",
          lokasi: "Bandung, Jawa Barat",
          harga: "200000",
          gambar:
            "https://cdnwpseller.gramedia.net/wp-content/uploads/2021/10/18222845/unnamed-6.jpg",
        },
        {
          id: 1,
          judul: "Lomba Burung Murai",
          tanggal: "Mei 21",
          lokasi: "Bandung, Jawa Barat",
          harga: "200000",
          gambar:
            "https://cdnwpseller.gramedia.net/wp-content/uploads/2021/10/18222845/unnamed-6.jpg",
        },
        {
          id: 1,
          judul: "Lomba Burung Murai",
          tanggal: "Mei 21",
          lokasi: "Bandung, Jawa Barat",
          harga: "200000",
          gambar:
            "https://cdnwpseller.gramedia.net/wp-content/uploads/2021/10/18222845/unnamed-6.jpg",
        },
      ],
    };
  },

  middleware: 'auth',
  async fetch() {
    this.user = await this.$axios.get("http://127.0.0.1:5000/auth/user/")
  },
};
</script>