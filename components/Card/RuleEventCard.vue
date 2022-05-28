<template>
  <v-card light rounded="lg">
    <v-col>
      <v-row>
        <v-col cols="12" class="pa-5">
          <h2 class="font-weight-bold" v-text="'Aturan Event'" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="pa-5">
          <li v-for="(i, index) in data" :key="index" :data="data">
          {{i}}
          </li>
        </v-col>
      </v-row>
      <v-row>
      </v-row>
    </v-col>
  </v-card>
</template>

<script>
export default {
  props: {
    data: []
  },
};
</script>