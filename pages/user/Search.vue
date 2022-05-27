<template>
  <div>
    <v-row align="center" justify="end" class="mx-2 my-2">
      <v-col cols="12" sm="12" md="12" lg="12"> </v-col>
    </v-row>

    <v-container>
      <v-card max-width="100%" class="px-3 py-3">
        <v-row align="center">
          <v-col cols="5">
            <v-text-field
              v-model="location"
              :counter="25"
              label="Cari lokasi kontes"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="5">
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
          <v-col cols="2" class="">
            <v-btn small color="primary" elevation="3" @click="search">
              Cari
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
      <v-row>
        <v-col>
          <div class="my-4">
            <h2 class="text-h5 text-center">Event terdekat</h2>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col
          v-for="(data, index) in searchEvents"
          :key="index"
          cols="12"
          sm="12"
          md="6"
        >
          <SearchCard :key="index" :data="data" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import SearchCard from "@/components/Card/SearchCard.vue";

export default {
  layout: "UserLayout",
  components: {
    SearchCard,
  },

  data: () => ({
    searchEvents: [],
  }),

  async fetch() {
    await this.$axios
      .get("/event")
      .then((res) => (this.searchEvents = res.data));
  },

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
