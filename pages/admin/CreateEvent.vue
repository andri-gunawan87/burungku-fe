<template>
  <v-container id="alerts" fluid tag="section">
    <base-v-component heading="Alerts" link="components/alerts" />

    <form v-on:submit.prevent="submitForm">
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="form.name"
            :counter="25"
            label="Nama Event"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-select
            v-model="form.jenis"
            :items="items"
            label="Jenis Burung"
            data-vv-name="select"
            required
          ></v-select>
        </v-col>
        <v-col cols="12" md="12">
          <v-text-field
            v-model="form.description"
            label="Deskripsi"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <!-- Kalendar -->
          <v-menu
            v-model="form.calendar"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="form.date"
                label="Tanggal Event"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="form.date"
              @input="calendar = false"
            ></v-date-picker>
          </v-menu>
        </v-col>
        <!-- Time Picker -->
        <v-col cols="12" sm="6">
          <v-menu
            ref="menu"
            v-model="from.watch"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="form.eventTime"
                label="Waktu Event"
                prepend-icon="mdi-clock-time-four-outline"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-time-picker
              v-if="form.watch"
              v-model="form.eventTime"
              format="24hr"
              full-width
              @click:minute="$refs.menu.save(eventTime)"
            ></v-time-picker>
          </v-menu>
        </v-col>

        <v-text-field
          v-model="form.location"
          label="Lokasi Event"
          required
        ></v-text-field>
        <v-text-field
          v-model="form.numberOfTicket"
          label="Jumlah Tiket"
          required
        ></v-text-field>
        <!-- <v-text-field
          v-model="from.numberOfSession"
          label="Jumlah Sesi"
          required
        ></v-text-field> -->
        <v-card-text>Aturan Event</v-card-text>
        <v-row>
          <v-col cols="9">
            <!-- <v-text-field
              v-model="form.numberOfSession"
              label="Jumlah Sesi"
              required
            ></v-text-field> -->
          </v-col>
          <v-col cols="3">
            <v-btn elevation="2"> Tambah Aturan</v-btn>
          </v-col>
        </v-row>
        <v-btn class="mr-4" type="submit"> submit </v-btn>
        <v-btn @click="clear"> clear </v-btn>
      </v-row>
    </form>
  </v-container>
</template>
<script>
export default {
  layout: "AdminLayout",
  data: () => ({
    form: {
      eventName: "",
      date: "",
      description: "",
      birdType: null,
      eventDate: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      eventTime: null,
      location: "",
      numberOfTicket: 0,
      // numberOfSession: 0,
      ticketPrice: 0,
      numberOfRow: 0,
      numberOfCol: 0,
      eventRules: "",
      items: ["Item 1", "Item 2", "Item 3", "Item 4"],
      calendar: false,
      watch: false,
    },
  }),

  methods: {
    async submitForm() {
      await this.$axios
        .post("/event/add", this.form)
        .then((response) => {
          console.log("Sukses");
        })
        .cath((error) => {
          console.log("Gagal");
        });
    },

    clear() {
      this.name = "";
      this.email = "";
      this.select = null;
      this.checkbox = null;
      this.$refs.observer.reset();
    },
  },
};
</script>
