<template>
  <div>
    <div class="mb-4">
      <h2 class="text-h5 text-center">Hasil pencarian di lokasi ...</h2>
      <v-divider dark></v-divider>
    </div>

    <v-container>
      <v-row>
        <v-col
          v-for="(data, index) in searchEvents"
          :key="index"
          cols="12"
          sm="12"
          md="6"
        >
          <EventCard :key="index" :data="data" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import EventCard from "@/components/Card/EventCard.vue";

export default {
  name: "IndexPage",
  components: {
    EventCard,
  },

  data: () => ({
    searchEvents: [
      {
        id: 1,
        judul: "Event 1",
        lokasi: "Kota Bandung",
        tanggal: "23 Oktober 2022",
      },
      {
        id: 2,
        judul: "Event 2",
        lokasi: "Kota Bandung",
        tanggal: "23 Oktober 2022",
      },
      {
        id: 3,
        judul: "Event 3",
        lokasi: "Kota Bandung",
        tanggal: "23 Oktober 2022",
      },
    ],
  }),

  methods: {
    async search() {
      try {
        // await this.$axios
        //   .get("/search/?q=" + this.location)
        //   .then((res) => (this.datas = res.data.results));
        this.isSearchActive = true;
      } catch (e) {
        this.error = e.response.data.message;
      }
    },
  },
};
</script>
