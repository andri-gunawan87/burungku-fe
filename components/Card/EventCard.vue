<template>
  <v-card light rounded="lg">
    <v-col>
      <v-row>
        <v-col cols="4">
          <img :src="data.gambar" alt="Kontes Burung Logo" width="100%" />
        </v-col>
        <v-col cols="8">
          <h2 class="text-800 text_main_color" v-text="data.judul" />
          <v-row class="">
            <v-col cols="4" class="text_main_color">{{ data.tanggal }}</v-col>
            <v-col cols="8" class="text_main_color">{{ data.lokasi }}</v-col>
          </v-row>
          <h2 class="font-weight-bold text_main_color" v-text="formatRupiah(data.harga)" />
        </v-col>
        <v-btn
          width="90%"
          class="mx-auto mb-3"
          :to="'/detail-event'"
          outlined
          plain
          >Lihat Detail</v-btn
        >
      </v-row>
    </v-col>
  </v-card>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
    },
  },

  methods: {
    formatRupiah(angka) {
      var prefix = "Rp. ";
      var number_string = angka.replace(/[^,\d]/g, "").toString(),
        split = number_string.split(","),
        sisa = split[0].length % 3,
        rupiah = split[0].substr(0, sisa),
        ribuan = split[0].substr(sisa).match(/\d{3}/gi);

      if (ribuan) {
        var separator = sisa ? "." : "";
        rupiah += separator + ribuan.join(".");
      }

      rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah;
      return prefix == undefined ? rupiah : rupiah ? "Rp. " + rupiah : "Rp. ";
    },
  },
};
</script>