<template>
  <div class="text_main_color">
    <v-row>
      <v-col cols="2">
        <v-btn @click="goToPrev()" icon>
          <v-icon size="32">mdi-close</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="8" class="my-auto text_center">
        <h2>Detail Pesanan</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <AlertSuccessConfirmationCard />
      </v-col>

      <v-col cols="12">
        <SmallDetailEventCard :data="detail_data" />
      </v-col>
      <v-col cols="12">
        <ScheduleEventCard :data="detail_data" />
      </v-col>
      <v-col cols="12">
        <PaymentMethodInfoEventCard :data="paymentInfo" />
      </v-col>
      <v-col cols="12">
        <PaymentProofEventCard :data="paymentInfo" />
      </v-col>
    </v-row>
        <v-row class="px-3">
          <v-btn
            width="100%"
            height="50px"
            class="mx-auto mt-3 cancel_button red--text"
            elevation="0"
            @click="cancelbooking = true"
            >Batalkan Pemesanan</v-btn
          >
        </v-row>
        <v-row class="px-3">
          <v-btn
            width="100%"
            height="50px"
            class="mx-auto mt-3 home_button_color black--text"
            :to="'/'"
            >Kembali Ke Beranda</v-btn
          >
        </v-row>
        <v-row class="px-3">
          <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                width="100%"
                height="50px"
                class="mx-auto mt-3 brown_color white--text"
                outlined
                v-bind="attrs"
                v-on="on"
                ><v-icon>mdi-qrcode</v-icon> &nbsp; Lihat Kode QR</v-btn
              >
            </template>
            <QrCodeEventCard :data="paymentInfo" />
          </v-dialog>
        </v-row>
      <v-dialog v-model="cancelbooking" max-width="300">
        <v-card>
          <v-card-title>
            Are you sure?

            <v-spacer />

            <v-icon aria-label="Close" @click="cancelbooking = false">
              mdi-close
            </v-icon>
          </v-card-title>

          <v-card-text class="pb-6 pt-12 text-center">
            <v-btn class="mr-3" text @click="cancelbooking = false">
              Nevermind
            </v-btn>

            <v-btn color="red" text @click="cancelbooking = false"> Yes </v-btn>
          </v-card-text>
        </v-card>
      </v-dialog>
  </div>
</template>
<script>
import SmallDetailEventCard from "@/components/Card/SmallDetailEventCard.vue";
import ScheduleEventCard from "@/components/Card/ScheduleEventCard.vue";
import PaymentMethodInfoEventCard from "@/components/Card/PaymentMethodInfoEventCard.vue";
import AlertSuccessConfirmationCard from "@/components/Card/AlertSuccessConfirmationCard.vue";
import PaymentProofEventCard from "@/components/Card/PaymentProofEventCard.vue";
import QrCodeEventCard from "@/components/Card/QrCodeEventCard.vue";

export default {
  components: {
    SmallDetailEventCard,
    ScheduleEventCard,
    PaymentMethodInfoEventCard,
    AlertSuccessConfirmationCard,
    PaymentProofEventCard,
    QrCodeEventCard,
  },

  data() {
    return {
      dialog: false,
      cancelbooking: false,
      detail_data: {
        id: 1,
        judul: "Lomba Burung Murai",
        tanggal: "Kamis, 12 Mei 2022",
        jam: ["10:00-12:00", "13:00-14:00"],
        lokasi: "Bandung, Jawa Barat",
        jumlah_tiket: 20,
        harga: 200000,
        gambar:
          "https://cdnwpseller.gramedia.net/wp-content/uploads/2021/10/18222845/unnamed-6.jpg",
        deskripsi:
          "Hi! I'm Daniel :) \n I am a Senior Brand & Visual designer at Mimo. At least that's what my LinkedIn profile says, but the reality it's a bit broader :) \n \n At Mimo I've built the foundations of Mimo brand and Mimo Design System, and now I am making sure everything is inline and looks & feels perfect. From brand, I naturally shifted to product and UX but always keeping eye on UI and all visual elements. ",
        aturan: [
          "Hi! I'm Daniel :)",
          "I am a Senior Brand & Visual designer at Mimo. At least that's what my LinkedIn profile says, but the reality it's a bit broader :)",
          "At Mimo I've built the foundations of Mimo brand and Mimo Design System, and now I am making sure everything is inline and looks & feels perfect. From brand, I naturally shifted to product and UX but always keeping eye on UI and all visual elements.",
        ],
      },
      paymentMethod: {
        onTheSpot: {
          id: 1,
          detail: "(On The Spot)",
        },
        transfer: {
          id: 2,
          detail: "(Foto Bukti Transfer)",
        },
      },

      paymentInfo: {
        method: "Transfer BANK (Foto Bukti Transfer) - BCA",
        harga: 200000,
        gambar:
          "https://c.kaskus.id/kaskus_forum_image/74d19aedb143a6d4ae36c13ff448c6a2.jpg",
        qrCode:
          "https://camo.githubusercontent.com/5c0e557ce429b13dfd71ef0c05124eda691129db9c7ca21787790a488ab5030d/68747470733a2f2f656e64726f69642e6e6c2f71722d636f64652f64656661756c742f4c6966652532306973253230746f6f25323073686f7274253230746f253230626525323067656e65726174696e672532305152253230636f646573",
      },
    };
  },
  methods: {
    goToPrev() {
      this.$router.go(-1);
    },
  },
};
</script>