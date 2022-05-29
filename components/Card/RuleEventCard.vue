<template>
  <v-card light rounded="lg">
    <v-col>
      <v-row>
        <v-col cols="12" class="pa-5">
          <h2 class="font-weight-bold text_main_color" v-text="'Aturan Event'" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="remove-padding-col px-5 pb-5">
          <li class="remove-padding-col mx-4 text_main_color" v-for="(i, index) in data" :key="index" :data="data">
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