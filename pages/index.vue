<template>
  <v-container>
    <div v-if="!isSearchActive">
      <v-row justify="center">
        <v-carousel cycle height="25%" :show-arrows="false">
          <v-carousel-item v-for="(item, i) in items" :key="i">
            <v-img contain :src="item.src"> </v-img>
          </v-carousel-item>
        </v-carousel>
      </v-row>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-row align="center" justify="end" class="mx-2 my-2">
          <v-col cols="8">
            <v-row align="center">
              <v-col cols="2" class="pr-0">
                <v-btn icon color="#3F3937" v-bind="attrs" v-on="on">
                  <v-icon color="#3F3937" @click="focusSearch()"
                    >mdi-magnify</v-icon
                  >
                </v-btn>
              </v-col>
              <v-col cols="10" class="pl-1"
                ><v-text-field
                  ref="searchInput"
                  v-model="location"
                  :counter="25"
                  color="#3F3937"
                  label="Cari lokasi kontes"
                  dark
                ></v-text-field
              ></v-col>
            </v-row>
          </v-col>

          <!-- <v-col sm="12" md="4" lg="4">
            <v-card max-width="100%" class="px-3 py-3">
              <v-row align="center">
                <v-col sm="12" md="5" lg="5">
                </v-col>
                <v-col sm="12" md="5" lg="5">
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
                <v-col sm="12" md="5" lg="5" class="">
                  <v-btn small color="primary" elevation="3" @click="search">
                    Cari
                  </v-btn>
                </v-col>
              </v-row>
            </v-card>
          </v-col> -->
        </v-row>
        <v-row justify="space-between" align="center" class="my-3 py-3">
          <h3 class="text-title">Lomba Populer</h3>
          <v-btn color="#3F3937" elevation="0" plain small>Lihat Semua</v-btn>
        </v-row>
        <div class="my-3">
          <EventCard
            v-for="(data, index) in searchEvents"
            :key="index"
            :data="data"
          />
        </div>
      </v-form>
    </div>
    <div v-else>
      <div class="mb-4">
        <h2 class="text-h5 text-center">Hasil pencarian di lokasi ...</h2>
        <v-divider dark></v-divider>
      </div>

      <v-row align="center" justify="center">
        <EventCard
          v-for="(data, index) in searchEvents"
          :key="index"
          :data="data"
        />
      </v-row>
    </div>
  </v-container>
</template>

<script>
import EventCard from "@/components/Card/EventCard.vue";

export default {
  name: "IndexPage",
  components: {
    EventCard,
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
        biaya: 200000,
      },
      {
        id: 2,
        judul: "Event 2",
        lokasi: "Kota Bandung",
        tanggal: "23 Oktober 2022",
        biaya: 200000,
      },
      {
        id: 3,
        judul: "Event 3",
        lokasi: "Kota Bandung",
        tanggal: "23 Oktober 2022",
        biaya: 200000,
      },
    ],
    items: [
      {
        src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.avCzUDIgmLtWe1wb_MTdMgHaEK%26pid%3DApi&f=1",
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
    focusSearch() {
      this.$refs.searchInput.focus();
    },
  },
};
</script>
