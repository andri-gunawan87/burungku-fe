<template>
  <v-card light rounded="lg">
    <v-col>
      <v-row>
        <v-col cols="12" class="px-5">
          <h2
            class="font-weight-bold text_main_color"
            v-text="'Metode Pembayaran'"
          />
        </v-col>

        <v-col cols="12" class="px-5 pt-0 pb-5">
          <v-row>
            <v-col cols="12"
              ><v-btn
                width="100%"
                class="mx-auto py-10 brown_color white--text"
                outlined
                >Bayar di tempat<br />{{ data.onTheSpot.detail }}</v-btn
              ></v-col
            >
            <!-- <v-col cols="6"
              ><v-btn
                width="100%"
                class="mx-auto py-10 brown_color white--text"
                outlined
                >Transfer BANK<br />{{ data.transfer.detail }}</v-btn
              ></v-col
            > -->
          </v-row>
        </v-col>

        <!-- ====== Button pembayaran Perulangan ===== -->
        <!-- <v-btn-toggle v-model="toggle_exclusive" mandatory>
          <v-row class="ma-5">
            <v-col
              cols="6"
              v-for="(data, index) in data"
              :key="index"
              :data="data"
            >
              <v-btn
                :value="data"
                width="100%"
                class="mx-auto mb-3 text_main_color payment_method"
                plain
                >{{ data.detail }}</v-btn
              >
            </v-col>
          </v-row>
        </v-btn-toggle> -->
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
      toggle_exclusive: []
    };
  },
};
</script>