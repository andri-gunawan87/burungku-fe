<template>
  <div>
    <div class="text-center d-flex pb-4">
      <v-btn @click="all">
        all
      </v-btn>
      <v-btn @click="none">
        none
      </v-btn>
    </div>

    <v-expansion-panels
      v-model="panel"
      multiple
    >
      <v-expansion-panel
        v-for="(item,i) in items"
        :key="i"
      >
        <v-expansion-panel-header>Header {{ item }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
  export default {
    layout: "AdminLayout",
    data () {
      return {
        panel: [],
        items: [],
        listEvent: [],
      }
    },
    methods: {
      async loadApiEvent() {
        const response = await this.$axios.get("/event");
        this.listEvent = response.data;
      },
      async loadApiEO() {
        const response = await this.$axios.get("/eo");
        this.items = response.data;
      },
      // Create an array the length of our items
      // with all values as true
      all () {
        this.panel = [...Array(this.items).keys()].map((k, i) => i)
      },
      // Reset the panel
      none () {
        this.panel = []
      },
    },
  
    mounted() {
      this.loadApiEvent();
      console.log("ini event : " + this.listEvent);
      this.loadApiEO();
      console.log("ini eo : " + this.items);
    },
  }
</script>