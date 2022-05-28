<template>
  <v-card light rounded="lg">
    <v-col>
      <v-row>
        <v-col cols="7" class="pa-5">
          <h2 class="font-weight-bold">
      Rp. {{ data }}
      <template>
        <span
          class="font-weight-light"
          v-text="'/ burung'"
        />
      </template>
    </h2>
        </v-col>
        <v-col cols="5" class="pa-5">
          <v-btn color="#3F3937"  width="90%" class="mx-auto white--text">Pesan Tiket</v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-card>
</template>

<script>
export default {
  props: {
    data: 0
  },
};
</script>