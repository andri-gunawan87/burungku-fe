<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-card-text class="text-center">
              <div
                class="
                  display-2
                  font-weight-light
                  col col-12
                  text--primary
                  pa-0
                  mb-8
                "
              >
                <h5 class="font-weight-light">
                  List Kursi
                </h5>

              </div>

              <v-simple-table dense>
                <template v-slot:default>
                  <tbody>
                    <tr v-for="i in jumlahRow" :key="i">
                      <td v-for="j in jumlahCol" :key="j">
                        <v-checkbox
                          :value="(i - 1) * jumlahCol + j"
                          v-model="nomorPeserta"
                          :label="String((i - 1) * jumlahCol + j)"
                          readonly
                          >{{ (i - 1) * jumlahCol + j }}</v-checkbox
                        >
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" sm="12" md="6">
          <v-card>
            <v-card-text class="text-center">
              <div
                class="
                  display-2
                  font-weight-light
                  col col-12
                  text--primary
                  pa-0
                  mb-8
                "
              >
                <h5 class="font-weight-light">
                  Detail Event
                </h5>

              </div>
              <v-row class="text-left">
              <v-col cols="6">
                <v-list-item-title class="my-2">Tanggal</v-list-item-title>
                <v-list-item-title class="my-2">Nama</v-list-item-title>
                <v-list-item-title class="my-2">Jenis Burung</v-list-item-title>
                <v-list-item-title class="my-2">Lokasi</v-list-item-title>
                <v-list-item-title class="my-2">Harga</v-list-item-title>
            </v-col>
              <v-col cols="6">
                <v-list-item-title class="my-2">11 Oktober 2022</v-list-item-title>
                <v-list-item-title class="my-2">Event 1</v-list-item-title>
                <v-list-item-title class="my-2">Murai</v-list-item-title>
                <v-list-item-title class="my-2">Bandung</v-list-item-title>
                <v-list-item-title class="my-2">Rp. 10.000</v-list-item-title>
            </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <v-card>
            <v-card-text class="text-center">
              <div
                class="
                  display-2
                  font-weight-light
                  col col-12
                  text--primary
                  pa-0
                  mb-8
                "
              >
                <h5 class="font-weight-light">
                  List Peserta
                </h5>

              </div>
          <v-row>
            <v-col cols="2" sm="2" md="2">
              <v-list-item-title>No</v-list-item-title>
            </v-col>
            <v-col cols="6" sm="6" md="6">
              <v-list-item-title>Nama</v-list-item-title>
            </v-col>
            <v-col cols="4" sm="4" md="4">
              <v-list-item-title>Status</v-list-item-title>
            </v-col>
          </v-row>

          <ListPeserta
            v-for="(data, index) in listPeserta"
            :key="index"
            :data="data"
          />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-card-actions class="justify-center">
      <v-btn color="orange" text @click="goToPrev()"> Kembali </v-btn>
    </v-card-actions>
  </div>
</template>

<script>
import ListPeserta from "@/components/Card/ListPesertaEventCard.vue";

export default {
  layout: "EoLayout",
  components: {
    ListPeserta,
  },

  data() {
    return {
      jumlahCol: 7,
      jumlahRow: 5,
      selected: [""],
      jenisBurung: ["Foo", "Bar", "Fizz", "Buzz"],
      pembayaran: ["Di tempat", "Transfer"],
      sesi: [1, 2, 3],
      jumlahTiket: 0,
      hargaTiket: 10000,
      listPeserta: [
        {
          id: 1,
          nomorKursi: 14,
          nama: "Fandi",
          statusPembayaran: "Belum dibayar",
        },
        {
          id: 2,
          nomorKursi: 9,
          nama: "Andri",
          statusPembayaran: "Menunggu konfirmasi",
        },
        {
          id: 3,
          nomorKursi: 2,
          nama: "Fandi",
          statusPembayaran: "Sudah dibayar",
        },
        {
          id: 4,
          nomorKursi: 19,
          nama: "Syahrul",
          statusPembayaran: "On The Spot",
        },
      ],
      nomorPeserta: [14, 9, 2, 19],
    };
  },

  props: {
    data: {
      type: Object,
    },
  },

  methods: {
    goToPrev() {
      this.$router.go(-1);
    },
  },

  computed: {
    totalHarga() {
      return this.hargaTiket * this.jumlahTiket;
    },
  },
};
</script>
