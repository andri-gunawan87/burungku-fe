<template>
  <div>
    <v-card light class="ma-2">
      <v-list-item class="pa-10">
        <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="text-h5 mb-1"> Event 1 </v-list-item-title>
          <v-list-item-subtitle>Tanggal: </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-content>
          <v-list-item-title class="text-h5 mb-1"> </v-list-item-title>
          <v-list-item-subtitle>Deskripsi:</v-list-item-subtitle>
          <v-list-item-subtitle
            >Event ini untuk tanggal 28 oktober 2022 yang akan di laksanakan di
            Bandung untuk jenis burung Murai</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>

      <v-container fluid>
        <v-row align="center" class="mx-10">
          <v-col cols="12" sm="6">
            <v-list-item-content> Jenis Burung </v-list-item-content>
          </v-col>
          <v-col cols="12" sm="6">
            <v-select
              :items="jenisBurung"
              label="Jenis Burung"
              dense
            ></v-select>
          </v-col>

          <v-col cols="12" sm="6">
            <v-list-item-content> Pilih Sesi </v-list-item-content>
          </v-col>
          <v-col cols="12" sm="6">
            <v-select :items="sesi" label="Sesi" dense></v-select>
          </v-col>

          <v-col cols="12" sm="6">
            <v-list-item-content> Jumlah Tiket </v-list-item-content>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="jumlahTiket"
              label="Jumlah Tiket"
              type="number"
              required
            ></v-text-field>
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
                  <tr v-for="i in jumlahRow" :key="i">
                    <td v-for="j in jumlahCol" :key="j">
                      <v-checkbox
                        :value="(i - 1) * jumlahCol + j"
                        v-model="selected"
                        :label="String((i - 1) * jumlahCol + j)"
                        >{{ (i - 1) * jumlahCol + j }}</v-checkbox
                      >
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-col>

          <v-col cols="12" sm="6">
            <v-list-item-content> Total Harga </v-list-item-content>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
          label="Total"
          :value="totalHarga"
          prefix="Rp"
          readonly
        ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-list-item-content> Metode Pembayaran </v-list-item-content>
          </v-col>
          <v-col cols="12" sm="6">
            <v-select :items="pembayaran" label="Metode Pembayaran" dense></v-select>
          </v-col>
        </v-row>
      </v-container>

      <v-card-actions class="justify-center">
        <v-btn color="orange" text @click="goToPrev()"> Kembali </v-btn>

        <nuxt-link style="text-decoration: none; color: inherit;" :to="'/user/bookingSuccess'">
          <v-btn color="orange" text> Booking </v-btn>
        </nuxt-link>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
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
      return this.hargaTiket * this.jumlahTiket
    }
  }
};
</script>
