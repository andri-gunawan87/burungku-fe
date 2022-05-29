<template>
  <div>
    <div class="judul">
      <img src="/assets/back.svg" height="4%" width="4%" class="back" />
      <h2 class="text-700 text-judul-page">Daftar Tiket</h2>
    </div>

    <v-tabs
        v-model="tab"
        background-color="transparent"
        color="basil"
        grow
      >
        <v-tab
          v-for="item in items"
          :key="item"
        >
          {{ item }}
        </v-tab>
      </v-tabs>
  
      <v-tabs-items v-model="tab">
        <v-tab-item
          v-for="item in items"
          :key="item"
        >
          <v-card
            color="basil"
            flat
            id="card"
          >
            <v-card-text>
              <v-col v-for="(data, index) in listTiket" :key="index" cols="12">
                <TiketCard :key="index" :data="data" />
              </v-col>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>

    <!-- <nuxt-link
      style="text-decoration: none; color: inherit"
      :to="'/user/Discover'"
    >
      <v-tabs
        v-model="tab"
        background-color="transparent"
        color="basil"
        grow
      >
        <v-tab
          v-for="item in items"
          :key="item"
        >
          {{ item }}
        </v-tab>
      </v-tabs>
      <v-card-text>{{ text }}</v-card-text>

      <button class="btn-berlangsung">Sedang Berlangsung</button>
    </nuxt-link>
    <nuxt-link
      style="text-decoration: none; color: inherit"
      :to="'/user/Discover'"
    >
      <button class="btn-riwayat">Riwayat</button>
    </nuxt-link> -->
    
  </div>
</template>

<script>
import TiketCard from "@/components/Card/TiketCardV2.vue";

export default {
  components: {
    TiketCard,
  },

  data() {
    return {
      listTiket: [
        {
          id: 1,
          judul: "Lomba Burung Murai",
          lokasi: "Bandung, Jawa Barat",
          tanggal: "24 Agustus 2021",
          jam: "07.00",
          gambar:
            "https://cdnwpseller.gramedia.net/wp-content/uploads/2021/10/18222845/unnamed-6.jpg",
        },
      ],
      tab: null,
      items: [
        'Sedang Berlangsung', 'Riwayat',
      ],
    };
  },
};
</script>
