<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="12" md="12">
          <v-card>
            <MapBox />
          </v-card>
          <v-card>
            <v-card-text class="text-center">
              <div
                class="display-2 font-weight-light col col-12 text--primary pa-0 mb-8"
              >
                <h5 class="font-weight-light">Create Event</h5>
              </div>
              <v-row class="text-left">
                <v-col cols="12">
                  <form @submit.prevent="submit" ref="form">
                    <v-row>
                      <v-col cols="6">
                        <v-text-field
                          v-model="eventName"
                          :counter="25"
                          label="Nama Event"
                          required
                          filled
                        ></v-text-field>
                        <v-menu
                          v-model="calendar"
                          :close-on-content-click="false"
                          :nudge-right="40"
                          transition="scale-transition"
                          offset-y
                          min-width="auto"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                              v-model="date"
                              label="Tanggal Event"
                              prepend-icon="mdi-calendar"
                              readonly
                              v-bind="attrs"
                              v-on="on"
                              filled
                            ></v-text-field>
                          </template>
                          <v-date-picker
                            v-model="date"
                            @input="calendar = false"
                          ></v-date-picker>
                        </v-menu>

                        <v-text-field
                          v-model="location"
                          label="Lokasi Event"
                          required
                          filled
                        ></v-text-field>
                      </v-col>

                      <v-col cols="6">
                        <v-select
                          v-model="birdTypeSelect"
                          :items="birdType"
                          :item-text="'nama'"
                          :item-value="'id'"
                          label="Jenis Burung"
                          data-vv-name="select.nama"
                          required
                          filled
                        ></v-select>

                        <v-menu
                          ref="menu"
                          v-model="watch"
                          :close-on-content-click="false"
                          :nudge-right="40"
                          transition="scale-transition"
                          offset-y
                          max-width="290px"
                          min-width="290px"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                              v-model="eventTime"
                              label="Waktu Event"
                              prepend-icon="mdi-clock-time-four-outline"
                              readonly
                              filled
                              v-bind="attrs"
                              v-on="on"
                            ></v-text-field>
                          </template>
                          <v-time-picker
                            v-if="watch"
                            v-model="eventTime"
                            format="24hr"
                            full-width
                            @click:minute="$refs.menu.save(eventTime)"
                          ></v-time-picker>
                        </v-menu>

                        <v-text-field
                          v-model="ticketPrice"
                          label="Harga Tiket"
                          type="number"
                          filled
                          required
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="3">
                        <v-text-field
                          v-model="numberOfCol"
                          label="Jumlah Kolom"
                          type="number"
                          filled
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="3">
                        <v-text-field
                          v-model="numberOfRow"
                          label="Jumlah Baris"
                          type="number"
                          filled
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="3">
                        <v-text-field
                          v-model="numberOfTicket"
                          label="Jumlah Kursi"
                          readonly
                          filled
                        ></v-text-field>
                      </v-col>
                      <v-col cols="3">
                        <v-text-field
                          v-model="numberOfSession"
                          label="Jumlah Sesi"
                          type="number"
                          required
                          filled
                        ></v-text-field>
                      </v-col>

                      <v-col cols="6">
                        <v-textarea
                          v-model="description"
                          auto-grow
                          label="Deskripsi"
                          filled
                        ></v-textarea>
                      </v-col>

                      <v-col cols="6">
                        <v-textarea
                          v-model="eventRules"
                          auto-grow
                          label="Aturan"
                          filled
                        ></v-textarea>
                      </v-col>
                    </v-row>
                    <v-card-actions class="justify-center">
                      <v-btn color="orange" text @click="clear"> Clear </v-btn>

                      <v-btn color="orange" type="submit" text> Submit </v-btn>
                    </v-card-actions>
                  </form>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import MapBox from "@/components/MapBox.vue";
export default {
  layout: "EoLayout",
  components: {
    MapBox,
  },
  data: () => ({
    eventName: "",
    date: "",
    description: "",
    birdType: [],
    birdTypeSelect: "",
    eventDate: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    eventTime: null,
    location: "",
    numberOfSession: 0,
    ticketPrice: 0,
    numberOfRow: 0,
    numberOfCol: 0,
    eventRules: "",
    calendar: false,
    watch: false,
  }),

  async fetch() {
    await this.$axios
      .get("/jenisBurung")
      .then((res) => (this.birdType = res.data));
  },

  methods: {
    clear() {
      this.birdTypeSelect = "";
      this.$refs.form.reset();
    },

    async submit() {
      try {
        await this.$axios.post("/event/add", {
          judul: this.eventName,
          deskripsi: this.description,
          tanggal: this.date,
          jam: this.eventTime,
          jml_tiket: this.numberOfTicket,
          jml_sesi: this.numberOfSession,
          harga_tiket: this.ticketPrice,
          aturan: this.eventRules,
          jenisburung_id: this.birdTypeSelect,
          lokasi: this.location,
          jenislomba_id: 1,
          jml_kol: this.numberOfCol,
          jml_baris: this.numberOfRow,
        });
        this.$router.push("/");
      } catch (e) {
        this.error = e.response;
        console.log(this.error);
      }
    },
  },

  computed: {
    numberOfTicket() {
      return this.numberOfRow * this.numberOfCol;
    },
    datetime() {
      return new String(this.date + " " + this.eventTime);
    },
  },
};
</script>
