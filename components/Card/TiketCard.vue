<template>
<div>
  <v-card
  light
  class="ma-2 ">
    <v-list-item>
      <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="text-h5 mb-1">
          {{data.judul}}
        </v-list-item-title>
        <v-list-item-subtitle>Tanggal</v-list-item-subtitle>
        <v-list-item-subtitle>Nomor Tiket</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-content>
        <v-list-item-title class="text-h5 mb-1">[[]]
        </v-list-item-title>
        <v-list-item-subtitle>{{data.tanggal}}</v-list-item-subtitle>
        <v-list-item-subtitle>{{data.nomorTiket}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-card-actions
    class="justify-center">
    <nuxt-link style="text-decoration: none; color: inherit;" :to="'/detail-event/' + data.id">
      <v-btn
        color="orange"
        text
      >
        Detail
      </v-btn>
    </nuxt-link>

      <v-btn
        color="orange"
        text
      >
        Delete
      </v-btn>
    </v-card-actions>
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