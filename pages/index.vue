<template>
  <v-container>
    <div v-if="!isSearchActive">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-row justify="center">
          <v-carousel cycle :show-arrows="false">
            <v-carousel-item v-for="(item, i) in items" :key="i">
              <v-img contain :src="item.src"> </v-img>
            </v-carousel-item>
          </v-carousel>
        </v-row>

        <v-row align="center" justify="end" class="mx-2 my-2">
          <v-col sm="12" md="4" lg="4">
            <v-card max-width="100%" class="px-3 py-3">
              <v-row align="center">
                <v-col sm="12" md="5" lg="5">
                  <v-text-field
                    v-model="location"
                    :counter="25"
                    label="Cari lokasi kontes"
                    required
                  ></v-text-field>
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
          </v-col>
        </v-row>
        <div class="my-3 py-3">
          <v-row justify="center">
            <h3>Informasi</h3>
          </v-row>
          <v-divider></v-divider>
        </div>
        <div class="my-3">
          <v-row class="py-3">
            <v-col cols="3" sm="12" md="3" lg="3">
              <v-card class="mx-2" max-width="100%">
                <v-img
                  class="white--text align-end"
                  height="200px"
                  src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                >
                  <v-card-title>Top 10 Australian beaches</v-card-title>
                </v-img>

                <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>

                <v-card-text class="text--primary">
                  <div>Whitehaven Beach</div>

                  <div>Whitsunday Island, Whitsunday Islands</div>
                </v-card-text>

                <v-card-actions>
                  <v-btn color="orange" text> Share </v-btn>

                  <v-btn color="orange" text> Explore </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
            <v-col cols="3" sm="12" md="3" lg="3">
              <v-card class="mx-2" max-width="100%">
                <v-img
                  class="white--text align-end"
                  height="200px"
                  src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                >
                  <v-card-title>Top 10 Australian beaches</v-card-title>
                </v-img>

                <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>

                <v-card-text class="text--primary">
                  <div>Whitehaven Beach</div>

                  <div>Whitsunday Island, Whitsunday Islands</div>
                </v-card-text>

                <v-card-actions>
                  <v-btn color="orange" text> Share </v-btn>

                  <v-btn color="orange" text> Explore </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
            <v-col cols="3" sm="12" md="3" lg="3">
              <v-card class="mx-2" max-width="100%">
                <v-img
                  class="white--text align-end"
                  height="200px"
                  src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                >
                  <v-card-title>Top 10 Australian beaches</v-card-title>
                </v-img>

                <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>

                <v-card-text class="text--primary">
                  <div>Whitehaven Beach</div>

                  <div>Whitsunday Island, Whitsunday Islands</div>
                </v-card-text>

                <v-card-actions>
                  <v-btn color="orange" text> Share </v-btn>

                  <v-btn color="orange" text> Explore </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
            <v-col cols="3" sm="12" md="3" lg="3">
              <v-card class="mx-2" max-width="100%">
                <v-img
                  class="white--text align-end"
                  height="200px"
                  src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                >
                  <v-card-title>Top 10 Australian beaches</v-card-title>
                </v-img>

                <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>

                <v-card-text class="text--primary">
                  <div>Whitehaven Beach</div>

                  <div>Whitsunday Island, Whitsunday Islands</div>
                </v-card-text>

                <v-card-actions>
                  <v-btn color="orange" text> Share </v-btn>

                  <v-btn color="orange" text> Explore </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </div>
        <div class="my-3 py-3">
          <v-row justify="center">
            <h3>Lomba Populer</h3>
          </v-row>
          <v-divider></v-divider>
        </div>
        <div class="my-3">
          <v-carousel hide-delimiters>
            <v-carousel-item
              v-for="(data, i) in searchEvents"
              :key="i"
              :data="data"
            >
              <SearchCard :data="data" />
            </v-carousel-item>
          </v-carousel>
        </div>
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
  </v-container>
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
  },
};
</script>
