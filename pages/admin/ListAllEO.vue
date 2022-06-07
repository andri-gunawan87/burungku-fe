<template>
  <div class="py-4">
    <v-row align="center" class="my-2 pl-2">
      <v-alert
        v-if="isConfirm == true"
        elevation="2"
        shaped
        dense
        type="success"
        >{{ namaEo }} Telah Terkonfirmasi
      </v-alert>
      <v-alert v-if="errStatus == true" elevation="2" dense type="error"
        >{{ errMessage }}
      </v-alert>
    </v-row>
    <v-data-table
      :headers="headers"
      :items="listAllEO"
      sort-by="Nama EO"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>List EO Belum Dikonfirmasi</v-toolbar-title>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              fab
              dark
              x-small
              v-bind="attrs"
              v-on="on"
              @click="confirmEo(item)"
            >
              <v-icon>mdi-check-circle</v-icon>
            </v-btn>
          </template>
        </v-tooltip>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  layout: "AdminLayout",
  data: () => ({
    headers: [
      {
        text: "Nama EO",
        align: "start",
        sortable: true,
        value: "nama",
      },
      { text: "Email", value: "email" },
      { text: "No Handphone", value: "no_hp" },
      { text: "Alamat", value: "alamat" },
      { text: "Terverivikasi", value: "is_verified" },
      { text: "Detail Event", value: "detail_event" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    listAllEO: [],
    isConfirm: false,
    emailEo: "",
    namaEo: "Bird Racer",
    editedIndex: -1,
    errStatus: false,
    errMessage: "",
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
    verified() {
      return this.editedIndex === 1 ? "verified" : "not verified";
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    async initialize() {
      const response = await this.$axios.get("/admin/nonconfirm");
      this.listAllEO = response.data;
    },
    async confirmEo(item) {
      this.namaEo = item.nama;
      await this.$axios
        .put("/admin/confirm", {
          email: item.email,
        })
        .then((res) => {
          if (res.status == 200) {
            this.isConfirm = true;
            setTimeout(() => {
              this.isConfirm = false;
              this.namaEo = "";
            }, 3000);
            this.initialize();
          } else {
            this.errStatus = true;
            this.errMessage = "Error ! Konfimasi Gagal";
            console.log(res.statusText);
          }
        });
    },
  },
};
</script>
