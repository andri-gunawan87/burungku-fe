<template>
  <v-card light rounded="lg">
    <v-col>
      <v-row>
        <v-col cols="12" class="px-5">
          <h2 class="font-weight-bold text_main_color" v-text="'Pembayaran'" />
        </v-col>

        <v-col cols="12" class="px-5 pt-0 pb-5">
          <div class="mb-2">
            <span class="font-weight-light text_main_color">1x Ticket</span
            ><span class="font-weight-bold float-right text_main_color"
              >{{ formatRupiah(data.toString()) }}</span
            >
          </div>
          <div>
            <span class="font-weight-bold text_main_color">Total Harga</span
            ><span class="font-weight-bold float-right text_main_color"
              >{{ formatRupiah(data.toString()) }}</span
            >
          </div>
        </v-col>
      </v-row>
    </v-col>
  </v-card>
</template>

<script>
export default {
  props: {
    data: 0,
  },

  data() {
    return {
      checked: false,
      noKursi: "",
    };
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