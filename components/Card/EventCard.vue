<template>
  <div>
    <v-card light class="ma-2 rounded-lg pa-4">
      <v-row align="center" class="mb-2">
        <v-col cols="3" class="py-0 pr-0">
          <v-img
            src="https://images.unsplash.com/photo-1518001589401-1743b61d1def?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bG92ZSUyMGJpcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=600"
            width="100%"
            height="100%"
            class="rounded-lg mr-1"
          ></v-img>
        </v-col>
        <v-col cols="9" class="pa-2">
          <h4 class="text-title">{{ data.judul }}</h4>
          <v-row>
            <v-col cols="5">
              <v-list-item-subtitle class="text-subtitle">{{
                data.tanggal
              }}</v-list-item-subtitle>
            </v-col>
            <v-col cols="7">
              <v-list-item-subtitle class="text-subtitle">{{
                data.lokasi
              }}</v-list-item-subtitle>
            </v-col>
          </v-row>
          <h5 class="text-title">Rp.{{ data.biaya }}</h5>
        </v-col>
      </v-row>
      <!-- <v-list-item>
        <v-img
          src="https://images.unsplash.com/photo-1518001589401-1743b61d1def?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bG92ZSUyMGJpcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=600"
          max-width="80px"
          max-height="80px"
          class="rounded-lg mr-1"
        ></v-img>
        <v-list-item-content>
          <v-list-item-title class="text-h5 text-title mb-1">
            {{ data.judul }}
          </v-list-item-title>
          <v-row align="center">
            <v-col cols="5">
              <v-list-item-subtitle class="text-subtitle">{{
                data.tanggal
              }}</v-list-item-subtitle>
            </v-col>
            <v-col cols="7">
              <v-list-item-subtitle class="text-subtitle">{{
                data.lokasi
              }}</v-list-item-subtitle>
            </v-col>
          </v-row>
          <v-list-item-subtitle>Tanggal</v-list-item-subtitle>
          <v-list-item-subtitle>Lokasi</v-list-item-subtitle>
          <v-list-item-subtitle>Biaya</v-list-item-subtitle>
        </v-list-item-content> -->
      <!-- <v-list-item-content>
          <v-list-item-title class="text-h5 mb-1"> </v-list-item-title>
          <v-list-item-subtitle>{{ data.tanggal }}</v-list-item-subtitle>
          <v-list-item-subtitle>{{ data.lokasi }}</v-list-item-subtitle>
          <v-list-item-subtitle>{{ data.biaya }}</v-list-item-subtitle>
        </v-list-item-content> -->
      <!-- </v-list-item> -->
      <v-col cols="12" class="my-border pa-0 my-2" align-self="center">
        <nuxt-link
          style="text-decoration: none; color: inherit"
          :to="'/detail-event/' + data.id"
        >
          <v-btn color="orange" text> Detail </v-btn>
        </nuxt-link>

        <!-- <nuxt-link
          style="text-decoration: none; color: inherit"
          :to="'/booking/' + data.id"
        >
          <v-btn color="orange" text> Booking </v-btn>
        </nuxt-link> -->
      </v-col>
    </v-card>
    <v-divider dark inset></v-divider>
  </div>
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
