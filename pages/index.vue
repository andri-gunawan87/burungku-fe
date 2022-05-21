<template>
  <div>
    <div v-if="!isSearchActive">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-row justify="center">
          <v-carousel cycle :show-arrows="false">
          <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
          ></v-carousel-item>
        </v-carousel>
        </v-row>

        <v-row align="center" justify="center">
          <v-col cols="6" sm="6" md="6">
            <v-text-field
              v-model="location"
              :counter="25"
              label="Cari lokasi kontes"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="6" sm="6" md="6">
            <v-menu
              v-model="menu"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date"
                  label="Waktu kontes"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="date"
                @input="menu = false"
              ></v-date-picker>
            </v-menu>
          </v-col>
          <v-btn color="primary" class="mr-4" to="/user/search"> Cari </v-btn>
        </v-row>
      </v-form>
    </div>
    <div v-else>
      <div class="mb-4">
        <h2 class="text-h5 text-center">Hasil pencarian di lokasi ...</h2>
        <v-divider dark></v-divider>
      </div>

      <v-row align="center" justify="center">
        <SearchCard
          v-for="(data, index) in searchEvents"
          :key="index"
          :data="data"
        />
      </v-row>
    </div>
  </div>
</template>

<script>
import SearchCard from "@/components/Card/SearchCard.vue";

export default {
  name: "IndexPage",
  components: {
    SearchCard,
  },

  data: () => ({
    isSearchActive: false,
    valid: true,
    location: "",
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
    items: [
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
      },
    ],
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    menu: false,
    modal: false,
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
