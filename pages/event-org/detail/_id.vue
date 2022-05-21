<template>
  <div>
    <v-card light class="ma-2">
      <v-container fluid>
        <v-row align="center" class="mx-10">
          <v-col cols="12" sm="12" align="center">
            <v-list-item-content>
              <v-list-item-title>Detail Event </v-list-item-title>
            </v-list-item-content>
          </v-col>

          <v-col cols="12" sm="12" class="d-flex justify-center">
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
          </v-col>

          <v-col cols="12" sm="6">
            <v-list-item-content> Detail Event </v-list-item-content>
          </v-col>
          <v-divider vertical></v-divider>
          <v-col cols="12" sm="6">
            <v-row>
              <v-list-item-title class="align-center"> List Peserta </v-list-item-title>
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
          </v-col>
        </v-row>
      </v-container>

      <v-card-actions class="justify-center">
        <v-btn color="orange" text @click="goToPrev()"> Kembali </v-btn>

      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import ListPeserta from "@/components/Card/ListPesertaEventCard.vue";

export default {
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
      nomorPeserta: [14, 9, 2, 19]
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
