<template>
  <div>
    <v-card light class="ma-2">
      <v-list-item>
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

      <v-list-item>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="12" md="10">
            <v-list-item-content>
              Jenis Burung
            </v-list-item-content>
            <v-list-item-content>
              Pilih Sesi
            </v-list-item-content>
            <v-list-item-content>
              Jumlah Tiket
            </v-list-item-content>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="12" md="10">
            <v-list-item-content>
                <v-select
                  :items="jenisBurung"
                  label="Jenis Burung"
                  dense
                ></v-select>
            </v-list-item-content>
            <v-list-item-content>
                <v-select :items="sesi" label="Sesi" dense></v-select>
            </v-list-item-content>
             <v-list-item-content>
                <v-text-field
                  v-model="jumlahKursi"
                  label="Jumlah Kursi"
                  type="number"
                  required
                ></v-text-field>
             </v-list-item-content>
          </v-col>
        </v-row>
      </v-list-item>

      <v-list-item align="center" justify="center">
        <v-list-item-content>
          <v-list-item-title>Pilih Nomor Kursi</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-simple-table dense>
          <template v-slot:default>
            <tbody>
              <tr>
                <td>Jenis Burung</td>
                <td>
                  <v-select
                    :items="jenisBurung"
                    label="Jenis Burung"
                    dense
                  ></v-select>
                </td>
              </tr>
              <tr>
                <td>Pilih Sesi</td>
                <td><v-select :items="sesi" label="Sesi" dense></v-select></td>
              </tr>
              <tr>
                <td>Jumlah Tiket</td>
                <td>
                  <v-text-field
                    v-model="jumlahKursi"
                    label="Jumlah Kursi"
                    type="number"
                    required
                  ></v-text-field>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-list-item>

      <v-list-item class="d-flex justify-center">
        <v-simple-table dense>
          <template v-slot:default>
            <tbody>
              <tr v-for="i in jumlahRow" :key="i">
                <td v-for="j in jumlahCol" :key="j">
                  <v-checkbox
                    :value="(i - 1) * jumlahCol + j"
                    v-model="selected"
                    :label="(i - 1) * jumlahCol + j"
                    >{{ (i - 1) * jumlahCol + j }}</v-checkbox
                  >
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-list-item>

      <v-list-item>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="12" md="10">
            <v-list-item-content>
              <v-list-item-title class="mb-2">Total Harga</v-list-item-title>
              <v-list-item-title class="mb-2">Pembayaran</v-list-item-title>
            </v-list-item-content>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="12" md="10">
            <v-list-item-content>
              <v-list-item-title class="mb-2">: Jenis Event</v-list-item-title>
              <v-list-item-title class="mb-2">: Tanggal</v-list-item-title>
            </v-list-item-content>
          </v-col>
        </v-row>
      </v-list-item>

      <v-card-actions class="justify-center">
        <v-btn color="orange" text @click="goToPrev()"> Kembali </v-btn>
        <v-btn color="orange" text> Booking </v-btn>
      </v-card-actions>
    </v-card>
    <v-divider dark inset></v-divider>
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
      sesi: [1, 2, 3],
      jumlahKursi: 0,
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
};
</script>
<style>
.mytable .v-table tbody tr:not(:last-child) {
    border-bottom: none;
}
</style>