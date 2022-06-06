<template>
  <div>
    <div v-if="$fetchState.pending"><img  width="100%" src="~/static/assets/loading.gif" /></div>
    <v-row class="mb-4">
      <v-col cols="2">
        <v-btn @click="goToPrev()" icon>
          <v-icon size="32">mdi-chevron-left</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="8" class="my-auto text_center text_main_color">
        <h2>Profile</h2>
      </v-col>
    </v-row>
    <div class="box-profile">
      <h1 class="text-600 sub-judul">AKUN ANDA</h1>
      <p class="text-400 desk-sub-judul">Edit dan atur detail akun anda</p>
      <hr class="garis" />
      <v-row no-gutters>
        <v-col cols="6" md="4">
          <label class="text-500 label">NAMA</label>
        </v-col>
        <v-col cols="12" sm="6" md="8">
          <P class="text-500 isi-label">{{ profile.nama }}</P>
        </v-col>
      </v-row>
      <hr class="garis" />
      <v-row no-gutters>
        <v-col cols="6" md="4">
          <label class="text-500 label">EMAIL</label>
        </v-col>
        <v-col cols="12" sm="6" md="8">
          <P class="text-500 isi-label">{{ profile.email }}</P>
        </v-col>
      </v-row>
      <hr class="garis" />
      <v-row no-gutters>
        <v-col cols="6" md="4">
          <label class="text-500 label">NO TELP</label>
        </v-col>
        <v-col cols="12" sm="6" md="8">
          <P class="text-500 isi-label">{{ profile.no_hp }}</P>
        </v-col>
      </v-row>
    </div>
    <div class="box-profile">
      <h1 class="text-600 sub-judul">BANTUAN & MASUKAN</h1>
      <p class="text-400 desk-sub-judul">
        Kami menyambut umpan balik, pertayaan, dan komentar Anda! Hubungi kami
        dibawah ini.
      </p>
      <v-row no-gutters>
        <v-col cols="2">
          <img src="/assets/help.svg" />
        </v-col>
        <v-col cols="8">
          <p class="text-500 isi-label" style="margin-top: 7px">
            FAQ dan Tutorial
          </p>
        </v-col>
        <v-col cols="2">
          <img src="/assets/arrow-right.svg" alt="" style="margin-top: 9px" />
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="2">
          <img src="/assets/mail.svg" />
        </v-col>
        <v-col cols="8">
          <p class="text-500 isi-label" style="margin-top: 7px">Hubungi Kami</p>
        </v-col>
        <v-col cols="2">
          <img src="/assets/arrow-right.svg" alt="" style="margin-top: 9px" />
        </v-col>
      </v-row>
    </div>
    <div class="box-profile">
      <center>
        <a @click="logout" class="text-600 keluar remove-hyperlink">Keluar</a>
      </center>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profile: [],
    };
  },

  async fetch() {
    await this.$axios
      .get("/profil/" + this.$route.params.id)
      .then((res) => (this.profile = res.data));
  },

  methods: {
    goToPrev() {
      this.$router.go(-1);
    },

    async logout() {
      await this.$auth.logout();
      this.$router.push("/account/login");
    },

    // async loadApi() {
    //   const response = await this.$axios.get(
    //     "/profil/" + this.$route.params.id
    //   );
    //   this.profile = response.data;
    // },
  },

  mounted() {
    // this.loadApi();
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  },
};
</script>
