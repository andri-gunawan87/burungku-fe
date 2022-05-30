<template>
  
</template>
<script>
export default {
    data() {
    return {
      events: [],
    };
  },

    async fetch() {
      await this.$axios.get("/event").then((res) => (this.events = res));
      console.log("hasil : "+ this.events);
      console.log("test");
    },
}
</script>
