<template>
  <div>
      <div class="mb-4">
              <h2 class="text-h5 text-center">
          Daftar Tiket Saya
        </h2>
        <v-divider dark></v-divider>
      </div>
        
        <v-container>
        <v-row>
          <v-col
            v-for="(data, index) in listTiket"
            :key="index"
            cols="12"
            sm="12"
            md="6"
          >
            <MyEventCard
          :key="index"
          :data="data"
        />
          </v-col>
        </v-row>
      </v-container>
  </div>
</template>

<script>
import MyEventCard from "~/components/Card/MyEventCard.vue";

export default {
  layout: "UserLayout",
  name: "IndexPage",
  components: {
    MyEventCard,
  },

  data: () => ({
    valid: true,
    listTiket: [],
  }),

  async fetch() {
    await this.$axios.get("/bookTiket").then((res) => (this.listTiket = res.data));
  },

  // methods: {
  //   async search() {
  //     try {
  //       // await this.$axios
  //       //   .get("/search/?q=" + this.location)
  //       //   .then((res) => (this.datas = res.data.results));
  //     } catch (e) {
  //       this.error = e.response.data.message;
  //     }
  //   },
  // },

  mounted() {
    console.log(this.listTiket)
  }
};
</script>
