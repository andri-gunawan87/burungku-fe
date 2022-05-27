<template>
  <div>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="12" md="8">
        <v-card dark class="pa-5 ma-5">
          <v-list-item>
            <v-list-item-avatar
              tile
              size="80"
              color="grey"
            ></v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="text-h5 mb-1">
                {{ event.judul }}
              </v-list-item-title>
              <v-list-item-subtitle>{{ event.deskripsi }}</v-list-item-subtitle>
            </v-list-item-content>
            <!-- <v-list-item-content>
              <v-list-item-title class="text-h5 mb-1"> </v-list-item-title>
              <v-list-item-subtitle
                >: {{ event.deskripsi }}</v-list-item-subtitle
              >
            </v-list-item-content> -->
          </v-list-item>

          <v-list-item class="ma-5">
            <v-list-item-content>
              <v-list-item-title class="mb-2">Jenis Event</v-list-item-title>
              <v-list-item-title class="mb-2">Tanggal</v-list-item-title>
              <v-list-item-title class="mb-2">Jam</v-list-item-title>
              <v-list-item-title class="mb-2">Lokasi</v-list-item-title>
              <v-list-item-title class="mb-2">Jumlah Tiket</v-list-item-title>
              <v-list-item-title class="mb-2">Jumlah Sesi</v-list-item-title>
              <v-list-item-title class="mb-2">Harga Tiket</v-list-item-title>
              <v-list-item-title class="mb-2">Aturan Even</v-list-item-title>
            </v-list-item-content>
            <v-list-item-content>
              <v-list-item-title class="mb-2"
                >: {{ event.jenislomba_id }}</v-list-item-title
              >
              <v-list-item-title class="mb-2"
                >: {{ event.jadwal }}</v-list-item-title
              >
              <v-list-item-title class="mb-2"
                >: {{ event.jadwal }}</v-list-item-title
              >
              <v-list-item-title class="mb-2"
                >: {{ event.lokasi_id }}</v-list-item-title
              >
              <v-list-item-title class="mb-2"
                >: {{ event.jml_tiket }}</v-list-item-title
              >
              <v-list-item-title class="mb-2"
                >: {{ event.jml_sesi }}</v-list-item-title
              >
              <v-list-item-title class="mb-2"
                >: {{ event.harga_tiket }}</v-list-item-title
              >
              <v-list-item-title class="mb-2"
                >: {{ event.aturan }}</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-card-actions class="justify-center">
            <v-btn color="orange" text @click="goToPrev()"> Kembali </v-btn>
          </v-card-actions>
        </v-card>
        <v-divider dark inset></v-divider>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    event: [],
  }),

  async fetch() {
    await this.$axios
      .get("/event/" + this.$route.params.id)
      .then((res) => (this.event = res.data));
    console.log(this.event);
  },
  methods: {
    goToPrev() {
      this.$router.go(-1);
    },
  },
};
</script>
