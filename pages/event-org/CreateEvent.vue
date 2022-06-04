<template>
  <div>
    <v-container>
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
                    <v-row no-gutters>
                      <v-col cols="5">
                        <v-file-input
                          :rules="rules"
                          accept="image/png, image/jpeg, image/bmp"
                          placeholder="Upload foto"
                          prepend-icon="mdi-camera"
                          label="Foto Event"
                          validate-on-blur
                          v-model="foto"
                        ></v-file-input>
                      </v-col>
                      <v-spacer></v-spacer>
                      <v-col cols="6">
                        <v-text-field
                          v-model="eventName"
                          :counter="25"
                          label="Nama Event"
                          required
                          filled
                        ></v-text-field>
                        <v-textarea
                          v-model="description"
                          auto-grow
                          label="Deskripsi"
                          filled
                        ></v-textarea>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="6">
                        <v-select
                          v-model="lokasiSelect"
                          :items="list_lokasi"
                          :item-text="'nama'"
                          :item-value="'id'"
                          label="Lokasi Event"
                          data-vv-name="select.nama"
                          required
                          filled
                        ></v-select>
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

                        <v-menu
                          v-model="calendarStartReg"
                          :close-on-content-click="false"
                          :nudge-right="40"
                          transition="scale-transition"
                          offset-y
                          min-width="auto"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                              v-model="dateStartReg"
                              label="Tanggal Mulai Pendaftaran"
                              prepend-icon="mdi-calendar"
                              readonly
                              v-bind="attrs"
                              v-on="on"
                              filled
                            ></v-text-field>
                          </template>
                          <v-date-picker
                            v-model="dateStartReg"
                            @input="calendarStartReg = false"
                          ></v-date-picker>
                        </v-menu>

                        <v-menu
                          v-model="calendarEndReg"
                          :close-on-content-click="false"
                          :nudge-right="40"
                          transition="scale-transition"
                          offset-y
                          min-width="auto"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                              v-model="dateEndReg"
                              label="Tanggal Akhir Pendaftaran"
                              prepend-icon="mdi-calendar"
                              readonly
                              v-bind="attrs"
                              v-on="on"
                              filled
                            ></v-text-field>
                          </template>
                          <v-date-picker
                            v-model="dateEndReg"
                            @input="calendarEndReg = false"
                          ></v-date-picker>
                        </v-menu>
                        <v-text-field
                          v-model="numberOfTicket"
                          label="Jumlah Kursi"
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

                        <v-menu
                          ref="menu"
                          v-model="watchStartReg"
                          :close-on-content-click="false"
                          :nudge-right="40"
                          transition="scale-transition"
                          offset-y
                          max-width="290px"
                          min-width="290px"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                              v-model="eventTimeStartReg"
                              label="Jam Mulai Pendaftaran"
                              prepend-icon="mdi-clock-time-four-outline"
                              readonly
                              filled
                              v-bind="attrs"
                              v-on="on"
                            ></v-text-field>
                          </template>
                          <v-time-picker
                            v-if="watchStartReg"
                            v-model="eventTimeStartReg"
                            format="24hr"
                            full-width
                            @click:minute="$refs.menu.save(eventTimeStartReg)"
                          ></v-time-picker>
                        </v-menu>
                        <v-menu
                          ref="menu"
                          v-model="watchEndReg"
                          :close-on-content-click="false"
                          :nudge-right="40"
                          transition="scale-transition"
                          offset-y
                          max-width="290px"
                          min-width="290px"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                              v-model="eventTimeEndReg"
                              label="Jam Akhir Pendaftaran"
                              prepend-icon="mdi-clock-time-four-outline"
                              readonly
                              filled
                              v-bind="attrs"
                              v-on="on"
                            ></v-text-field>
                          </template>
                          <v-time-picker
                            v-if="watchEndReg"
                            v-model="eventTimeEndReg"
                            format="24hr"
                            full-width
                            @click:minute="$refs.menu.save(eventTimeEndReg)"
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
                      <v-col cols="6">
                        <div
                          class="display-2 font-weight-light col col-12 text--primary pa-0 mb-8 text-center"
                        >
                          <h6 class="font-weight-light">List Sesi</h6>
                        </div>

                        <v-text-field
                          v-for="(data, index) in list_sesi"
                          :key="index"
                          :value="data"
                          :label="'Sesi ' + ++index"
                          prepend-icon="mdi-clock-time-four-outline"
                          filled
                        ></v-text-field>
                        <!-- Add session time -->
                        <v-menu
                          ref="TimeSess"
                          v-model="timeSesMenu"
                          :close-on-content-click="false"
                          :nudge-right="40"
                          :return-value.sync="sesi"
                          transition="scale-transition"
                          offset-y
                          max-width="290px"
                          min-width="290px"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                              v-model="sesi"
                              label="Waktu Mulai"
                              prepend-icon="mdi-clock-time-four-outline"
                              readonly
                              v-bind="attrs"
                              v-on="on"
                            ></v-text-field>
                          </template>
                          <v-time-picker
                            format="24hr"
                            scrollable
                            v-if="timeSesMenu"
                            v-model="sesi"
                            full-width
                            @click:minute="$refs.TimeSess.save(sesi)"
                          ></v-time-picker>
                        </v-menu>
                        <!-- END  -->
                        <v-btn color="orange text-right" text @click="add_sesi">
                          Tambah Sesi
                        </v-btn>
                      </v-col>
                      <v-col cols="6">
                        <div
                          class="display-2 font-weight-light col col-12 text--primary pa-0 mb-8 text-center"
                        >
                          <h6 class="font-weight-light">List Aturan</h6>
                        </div>

                        <v-text-field
                          v-for="(data, index) in list_aturan"
                          :key="index"
                          :value="data"
                          filled
                        ></v-text-field>
                        <v-text-field
                          v-model="aturan"
                          label="Tulis aturan"
                          filled
                        ></v-text-field>
                        <v-btn color="orange text-right" text @click="add_rule">
                          Tambah Aturan
                        </v-btn>
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
    dateStartReg: "",
    dateEndReg: "",
    description: "",
    // birdType: [],
    birdTypeSelect: "",
    eventDate: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    eventDateStartReg: new Date(
      Date.now() - new Date().getTimezoneOffset() * 60000
    )
      .toISOString()
      .substr(0, 10),
    eventDateEndReg: new Date(
      Date.now() - new Date().getTimezoneOffset() * 60000
    )
      .toISOString()
      .substr(0, 10),
    eventTime: null,
    eventTimeStartReg: null,
    eventTimeEndReg: null,
    location: "",
    numberOfSession: 0,
    ticketPrice: 0,
    numberOfRow: 0,
    numberOfCol: 0,
    eventRules: "",
    calendar: false,
    calendarStartReg: false,
    calendarEndReg: false,
    watch: false,
    watchStartReg: false,
    watchEndReg: false,
    list_aturan: [],
    list_sesi: [],
    // list_lokasi: [],
    lokasiSelect: "",
    numberOfTicket: 0,
    aturan: "",
    sesi: null,
    timeSesMenu: false,
    rules: [
      (value) =>
        !value || value.size < 2000000 || "Foto Tidak Boleh Lebih dari 2 MB!",
    ],
    foto: null,
  }),

  // async fetch() {
  //   await this.$axios
  //     .get("/jenisBurung")
  //     .then((res) => (this.birdType = res.data))
  //     return this.$axios
  //     .get("/lokasi")
  //     .then((res) => (this.list_lokasi = res.data))
  // },

  async asyncData({ $axios }) {
    const [birdTypeRes, listLokasiRes, eventIdRes] = await Promise.all([
      $axios.get("/jenisBurung"),
      $axios.get("/lokasi"),
      $axios.get("/event/get/id"),
    ]);

    return {
      birdType: birdTypeRes.data,
      list_lokasi: listLokasiRes.data,
      event_id: eventIdRes.data,
    };
  },
  methods: {
    clear() {
      this.birdTypeSelect = "";
      this.$refs.form.reset();
    },

    add_rule() {
      this.list_aturan.push(this.aturan);
      this.aturan = "";
    },

    add_sesi() {
      this.list_sesi.push(this.sesi);
      this.sesi = null;
    },

    async submit() {
      try {
        await this.$axios.post("/event/add", {
          id: this.event_id,
          nama: this.eventName,
          deskripsi: this.description,
          tgl: this.date,
          jam: this.eventTime,
          jml_tiket: this.numberOfTicket,
          jml_sesi: this.numberOfSession,
          harga: this.ticketPrice,
          aturan: this.list_aturan.toString(),
          sesi: this.list_sesi.toString(),
          jenisburung_id: this.birdTypeSelect,
          lokasi: this.lokasiSelect,
          tgl_start: this.dateStartReg,
          tgl_end: this.dateEndReg,
          jam_start: this.eventTimeStartReg,
          jam_end: this.eventTimeEndReg,
        });
        await this.$axios.post("/event/elok/add", {
          lokasi_id: this.lokasiSelect,
          event_id: this.event_id,
        });
        this.$router.push("/event-org/");
      } catch (e) {
        this.error = e.response;
        console.log(this.error);
      }
    },
  },

  computed: {
    datetime() {
      return new String(this.date + " " + this.eventTime);
    },
  },
};
</script>
