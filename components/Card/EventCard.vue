<template>
  <v-card light rounded="lg" class="event_card">
    <v-col>
      <v-row>
        <div>
          <nuxt-link to="/detail-event">
          <img class="event_card_img" :src="data.gambar" alt="Kontes Burung Logo" />
          </nuxt-link>
        </div>
        <div class="event_card_detail">
          <nuxt-link to="/detail-event" class="text-decoration-none">
          <h2 class="text-700 text_main_color" v-text="data.judul" />
          </nuxt-link>
          <div class="mt-2">
            <span class="text-500 text_main_color mr-3 ">{{ data.tanggal }}</span>
            <span class="text-500 text_main_color">{{ data.lokasi }}</span>
          </div>
          <h2 class="text-700 font-weight-bold text_main_color mt-2" v-text="formatRupiah(data.harga)" />
        </div>
        <v-btn
          width="100%"
          class="mx-auto mt-3"
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