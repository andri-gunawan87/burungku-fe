<template>
  <v-card light rounded="lg">
    <v-col>
      <v-row>
        <v-col cols="7" class="pa-5 d-flex my-auto">
          <!-- <h2 class="font-weight-bold text_main_color">{{formatRupiah((data.harga).toString())}}</h2> -->
          <h2 class="font-weight-bold text_main_color" v-text="formatRupiah((data.harga).toString())" />
        <h2>
        <span
          class="text-h6 font-weight-light text_main_color"
        >/ burung</span>
        </h2>
        </v-col>
        <v-col cols="5" class="pa-5 d-flex justify-center">
          <v-btn color="#3F3937"  width="100%" class="mt-0 white--text" :to="'/booking-event/' + data.id">Pesan Tiket</v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-card>
</template>

<script>
export default {
  props: {
    data: {
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