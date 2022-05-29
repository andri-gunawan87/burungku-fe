<template>
  <div>
    <v-row>
      <v-col cols="2">
        <v-btn
        @click="goToPrev()"
              icon
            >
              <v-icon size="32">mdi-chevron-left</v-icon>
            </v-btn>
      </v-col>
      <v-col cols="8" class="my-auto text_center text_main_color">
        <h2>Semua Event</h2>
      </v-col>
      <v-col>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="(data, index) in listEvent" :key="index" cols="12">
        <EventCard :key="index" :data="data" />
      </v-col>
    </v-row>
    <v-row>
      <v-btn width="100%" height="50px" class="mx-auto mt-3" icon
        ><v-icon> mdi-loading</v-icon></v-btn
      >
    </v-row>
  </div>
</template>
<script>
import EventCard from "@/components/Card/EventCard.vue";

export default {
  components: {
    EventCard,
  },

  data() {
    return {
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
  methods: {
    goToPrev() {
      this.$router.go(-1);
    },
  },
};
</script>