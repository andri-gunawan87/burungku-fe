<template>
  <v-col cols="12" md="6" sm="12">
    <v-card light class="ma-2">
      <v-row align="center" justify="center">
        <v-col cols="3" md="3" sm="3">
          <v-list-item>
            <v-list-item-avatar
              tile
              size="80"
              color="grey"
            ></v-list-item-avatar>
          </v-list-item>
        </v-col>

        <v-col cols="9" md="9" sm="9">
          <v-row>
            <v-col cols="4" md="4" sm="4">
                <v-list-item-title class="text-h5 mb-1">
                  {{ data.judul }}
                </v-list-item-title>
            </v-col>
            <v-col cols="8" md="8" sm="8">
                <v-list-item-title class="text-h5 mb-1"> Peserta <span class="red--text">{{data.pendaftar}}</span>/<span class="green--text">{{data.jumlahKursi}}</span> </v-list-item-title>
            </v-col>

            <v-col cols="4" md="4" sm="4">
                <v-list-item-subtitle>Tanggal</v-list-item-subtitle>
            </v-col>
            <v-col cols="8" md="8" sm="8">
                <v-list-item-subtitle>{{ data.tanggal }}</v-list-item-subtitle>
            </v-col>

            <v-col cols="4" md="4" sm="4">
                <v-list-item-subtitle>Nomor Tiket</v-list-item-subtitle>
            </v-col>
            <v-col cols="8" md="8" sm="8">
                <v-list-item-subtitle>{{ data.nomorTiket }}</v-list-item-subtitle>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" sm="12">
          <v-card-actions class="justify-center">
            <nuxt-link
              style="text-decoration: none; color: inherit"
              :to="'/event-org/detail/' + data.id"
            >
              <v-btn color="orange" text> Detail </v-btn>
            </nuxt-link>

            <v-btn color="orange" text> Delete </v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
    },
  },
};
</script>