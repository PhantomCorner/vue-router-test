<template>
  <h1>Content</h1>
  {{ dataEgg }}
</template>
<script>
import data from "../data.json";
export default {
  //   data() {
  //     console.log(this.$route);
  //   },
  computed: {
    eggType() {
      return this.$route.params.eggType;
    },
    dataEgg() {
      return data.find((data) => data.type === this.eggType);
    },
  },
};
</script>
