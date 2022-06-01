<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" sm="12" md="12">
          <v-card>
            <MapBox />
          </v-card>
          <v-card>
            <v-card-text class="text-center">
              <div
                class="
                  display-2
                  font-weight-light
                  col col-12
                  text--primary
                  pa-0
                  mb-8
                "
              >
                <h5 class="font-weight-light">Add Location</h5>
              </div>
              <v-row class="text-left">
                <v-col cols="12">
                  <form @submit.prevent="submit" ref="form">
                    <v-row>
                      <v-col cols="12">
                        <v-text-field
                          v-model="locationName"
                          :counter="25"
                          label="Nama Lokasi"
                          required
                          filled
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="6">
                        <v-select
                          v-model="birdTypeSelect"
                          :items="birdType"
                          :item-text="'nama'"
                          :item-value="'id'"
                          label="Kota/Kabupaten"
                          data-vv-name="select.nama"
                          required
                          filled
                        ></v-select>
                        <v-text-field
                          v-model="locationLong"
                          label="Longatitude"
                          required
                          filled
                        ></v-text-field>
                        <v-textarea
                          v-model="locationaddress"
                          auto-grow
                          label="Alamat"
                          filled
                        ></v-textarea>
                      </v-col>

                      <v-col cols="6">
                        <v-select
                          v-model="birdTypeSelect"
                          :items="birdType"
                          :item-text="'nama'"
                          :item-value="'id'"
                          label="Provinsi"
                          data-vv-name="select.nama"
                          required
                          filled
                        ></v-select>

                        <v-text-field
                          v-model="locationAlt"
                          label="Altitude"
                          filled
                          required
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-card-actions class="justify-center">
                      <v-btn color="orange" text @click="clear"> Clear </v-btn>

                      <v-btn color="orange" type="submit" text> Submit </v-btn>
                    </v-card-actions>
                  </form>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import MapBox from "@/components/MapBox.vue";
export default {
  layout: "EoLayout",
  components: {
    MapBox,
  },
  data: () => ({
    locationName: "",
    locationAddress: "",
    locationLong: "",
    locationAlt: "",
    birdType: [],
    birdTypeSelect: "",
  }),

  async fetch() {
    await this.$axios
      .get("/jenisBurung")
      .then((res) => (this.birdType = res.data));
  },

  methods: {
    clear() {
      this.birdTypeSelect = "";
      this.$refs.form.reset();
    },
    // async submit() {
    //   try {
    //     await this.$axios.post("/event/add", {
    //       judul: this.eventName,
    //       deskripsi: this.description,
    //       tanggal: this.date,
    //       jam: this.eventTime,
    //       jml_tiket: this.numberOfTicket,
    //       jml_sesi: this.numberOfSession,
    //       harga_tiket: this.ticketPrice,
    //       aturan: this.eventRules,
    //       jenisburung_id: this.birdTypeSelect,
    //       lokasi: this.location,
    //       jenislomba_id: 1,
    //       jml_kol: this.numberOfCol,
    //       jml_baris: this.numberOfRow,
    //     });
    //     this.$router.push("/");
    //   } catch (e) {
    //     this.error = e.response;
    //     console.log(this.error);
    //   }
    // },
  },
};
</script>
