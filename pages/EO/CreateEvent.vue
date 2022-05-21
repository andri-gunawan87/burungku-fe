<template>
  <v-container fluid>
    <form @submit.prevent="submit">
      <v-text-field
        v-model="eventName"
        :counter="25"
        :error-messages="errors"
        label="Nama Event"
        required
      ></v-text-field>

      <v-text-field
        v-model="description"
        :error-messages="errors"
        label="Deskripsi"
        required
      ></v-text-field>
      <v-select
        v-model="birdType"
        :items="items"
        :error-messages="errors"
        label="Jenis Burung"
        data-vv-name="select"
        required
      ></v-select>
      <!-- Kalendar -->
      <v-col cols="12" sm="6" md="4">
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
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="date"
            @input="calendar = false"
          ></v-date-picker>
        </v-menu>
      </v-col>
      <!-- Time Picker -->
      <v-col cols="12" sm="6">
        <v-menu
          ref="menu"
          v-model="watch"
          :close-on-content-click="false"
          :nudge-right="40"
          :return-value.sync="time"
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
      </v-col>

      <v-text-field
        v-model="location"
        :error-messages="errors"
        label="Lokasi Event"
        required
      ></v-text-field>
      <v-text-field
        v-model="numberOfTicket"
        :error-messages="errors"
        label="Jumlah Tiket"
        required
      ></v-text-field>
      <v-text-field
        v-model="numberOfSession"
        :error-messages="errors"
        label="Jumlah Sesi"
        required
      ></v-text-field>
      <v-card-text>Aturan Event</v-card-text>
      <v-row>
        <v-col cols="9">
          <v-text-field
            v-model="numberOfSession"
            :error-messages="errors"
            label="Jumlah Sesi"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-btn elevation="2"> Tambah Aturan</v-btn>
        </v-col>
      </v-row>
      <v-btn class="mr-4" type="submit" :disabled="invalid"> submit </v-btn>
      <v-btn @click="clear"> clear </v-btn>
    </form>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    eventName: "",
    description: "",
    birdType: null,
    eventDate: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    eventTime: null,
    location: "",
    numberOfTicket: 0,
    numberOfSession: 0,
    ticketPrice: 0,
    numberOfRow: 0,
    numberOfCol: 0,
    eventRules: "",
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    calendar: false,
    watch: false,
  }),

  methods: {
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
