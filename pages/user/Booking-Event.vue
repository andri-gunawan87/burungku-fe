<template>
  <div>
    <v-row>
      <v-col cols="2">
        <v-btn icon>
          <v-icon size="32">mdi-close</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="8" class="my-auto text_center">
        <h2>Pesan Tiket</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <SmallDetailEventCard :data="detail_data" />
      </v-col>
      <v-col cols="12">
        <ListSessionEventCard :data="detail_data.jam" />
      </v-col>
      <v-col cols="12">
        <v-row>
          <v-btn width="90%" height="50px" class="mx-auto mt-3 brown_color white--text" outlined
            >Pesan jadwal pada<br />{{ detail_data.tanggal }}</v-btn
          >
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import SmallDetailEventCard from "@/components/Card/SmallDetailEventCard.vue";
import ListSessionEventCard from "@/components/Card/ListSessionEventCard.vue";

export default {
  components: {
    SmallDetailEventCard,
    ListSessionEventCard,
  },

  data() {
    return {
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
    };
  },
};
</script>