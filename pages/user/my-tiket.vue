<template>
  <div>
      <div class="mb-4">
              <h2 class="text-h5 text-center">
          Daftar Tiket Saya
        </h2>
        <v-divider dark></v-divider>
      </div>
        
      <v-row
      align="center"
      justify="center">
        <TiketCard
          v-for="(data, index) in listTiket"
          :key="index"
          :data="data"
        />
      </v-row>
  </div>
</template>

<script>
import TiketCard from "@/components/Card/TiketCard.vue";

export default {
  name: "IndexPage",
  components: {
    TiketCard,
  },

  data: () => ({
    valid: true,
    listTiket: [
      {
        id: 1,
        judul: "Event 1",
        nomorTiket: "20220516-321-111",
        tanggal: "23 Oktober 2022",
      },
      {
        id: 2,
        judul: "Event 2",
        nomorTiket: "20220516-321-112",
        tanggal: "23 Oktober 2022",
      },
      {
        id: 3,
        judul: "Event 3",
        nomorTiket: "20220516-321-113",
        tanggal: "23 Oktober 2022",
      },
    ],
  }),

  methods: {
    async search() {
      try {
        // await this.$axios
        //   .get("/search/?q=" + this.location)
        //   .then((res) => (this.datas = res.data.results));
      } catch (e) {
        this.error = e.response.data.message;
      }
    },
  },
};
</script>
