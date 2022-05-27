<template>
  <v-container>
    <div>
      <v-card dark filled class="ma-2">
                          <form @submit.prevent="submit" ref="form">

        <v-list-item class="pa-10">
          <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="text-h5 mb-1">
              {{ dataEvent.judul }}
            </v-list-item-title>
            <v-list-item-subtitle
              >Tanggal / jam: {{ dataEvent.tanggal }} /
              {{ dataEvent.jam }}</v-list-item-subtitle
            >
          </v-list-item-content>
          <v-list-item-content>
            <v-list-item-title class="text-h5 mb-1"> </v-list-item-title>
            <v-list-item-subtitle>Deskripsi:</v-list-item-subtitle>
            <v-list-item-subtitle>{{
              dataEvent.deskripsi
            }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-container fluid>
          <v-row align="center" class="mx-10">
            <v-col cols="12" sm="6">
              <v-list-item-content> Jenis Burung </v-list-item-content>
            </v-col>
            <v-col cols="12" sm="6">
              <v-select
                v-model="birdTypeSelect"
                :items="birdType"
                :item-text="'nama'"
                :item-value="'id'"
                label="Jenis Burung"
                data-vv-name="select.nama"
                required
              ></v-select>
            </v-col>

            <v-col cols="12" sm="6">
              <v-list-item-content> Pilih Sesi </v-list-item-content>
            </v-col>
            <v-col cols="12" sm="6">
              <v-select
                :items="jumlahSesi(this.dataEvent.jml_sesi)"
                label="Sesi"
                dense
              ></v-select>
            </v-col>

            <v-col cols="12" sm="12" align="center">
              <v-list-item-content>
                <v-list-item-title>Pilih Nomor Kursi</v-list-item-title>
              </v-list-item-content>
            </v-col>

            <v-col cols="12" sm="12" class="d-flex justify-center">
              <v-simple-table dense>
                <template v-slot:default>
                  <tbody>
                    <tr v-for="i in dataEvent.jml_baris" :key="i">
                      <td v-for="j in dataEvent.jml_kol" :key="j">
                        <v-checkbox
                          :value="(i - 1) * dataEvent.jml_kol + j"
                          v-model="noKursi"
                          :label="String((i - 1) * dataEvent.jml_kol + j)"
                          >{{ (i - 1) * dataEvent.jml_kol + j }}</v-checkbox
                        >
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-col>

            <v-col cols="12" sm="6">
              <v-list-item-content> Harga Tiket</v-list-item-content>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                label="Total"
                :value="dataEvent.harga_tiket"
                prefix="Rp"
                readonly
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>

        <v-card-actions class="justify-center">
          <v-btn color="orange" text @click="goToPrev()"> Kembali </v-btn>
            <v-btn type="submit" color="orange" text> Booking</v-btn>
        </v-card-actions>
                          </form>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  layout: "UserLayout",
  data() {
    return {
      dataEvent: [],
      birdType: [],
      birdTypeSelect: "",
      noKursi: "",

    };
  },

  async fetch() {
    await this.$axios
      .get("/event/" + this.$route.params.id)
      .then((res) => (this.dataEvent = res.data));
    return await this.$axios
      .get("/jenisBurung")
      .then((res) => (this.birdType = res.data));
  },

  methods: {
    goToPrev() {
      this.$router.go(-1);
    },
    jumlahSesi(a) {
      var b = Array.from(Array(a).keys());
      b.shift();
      b.push(a);
      return b;
    },
    async submit() {
      try {
        await this.$axios.post("/bookTiket/add", {
          event_id: this.dataEvent.event_id,
          user_id: "25bd3c05-180e-42f7-80ac-e528b86dbb23",
          nomer_tiket: this.noKursi,
          is_canceled: 0,
        });
        this.$router.push("/user/bookingSuccess");
      } catch (e) {
        this.error = e.response;
        console.log(this.error);
      }
    },
  },

  computed: {
    totalHarga() {
      return this.hargaTiket * this.jumlahTiket;
    },
  },

  mounted() {
    console.log(this.dataEvent)
  }
};
</script>
