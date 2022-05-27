<template>
  <div>
    <v-row>
      <v-col cols="2">
        <v-icon size="32">mdi-ticket </v-icon>
      </v-col>
      <v-col cols="1o">
        <img src="/logo1.png" alt="Kontes Burung Logo" class="center" />
      </v-col>
      <v-col cols="2">
        <v-icon size="32">mdi-account </v-icon>
      </v-col>
    </v-row>
    <v-row>
      <v-text-field
        outlined
        label="Prepend inner"
        prepend-inner-icon="mdi-map-marker"
      ></v-text-field>
      <v-col v-for="n in 1" :key="n" cols="12">
        <v-card height="200"></v-card
      ></v-col>
    </v-row>
    <v-row>
      <v-col cols="3" class="headline font-weight-bold">Event</v-col>
      <v-spacer></v-spacer>
      <v-col cols="3">Lihat Semua</v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="(data, index) in listEvent"
        :key="index"
        cols="12"
      >
        <EventCard :key="index" :data="data" />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import EventCard from "@/components/Card/EventCard.vue";

export default {
    components: {
        EventCard
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
};
</script>