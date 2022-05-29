<template>
  <v-card light rounded="lg" class="event_card">
    <v-col>
      <v-row>
        <div>
          <nuxt-link to="/detail-event">
          <img class="event_card_img" :src="img" alt="Kontes Burung Logo" width="100%" />
          </nuxt-link>
        </div>
        <div class="event_card_detail">
          <nuxt-link to="/detail-event" class="text-decoration-none">
          <h2 class="text-800 text_main_color" v-text="data.nama_event" />
          </nuxt-link>
          <div class="mt-2">
            <span class="text_main_color mr-3 ">{{ data.tgl }}</span>
            <span class="text_main_color">{{ data.kota }}</span>
          </div>
          <h2 class="font-weight-bold text_main_color mt-2" v-text="formatRupiah((data.harga).toString())" />
        </div>
        <v-btn
          width="100%"
          class="mx-auto mt-3"
          :to="'/detail-event/' + data.event_id"
          outlined
          plain
          style="margin-top: 16px;"
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
    img: ""
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