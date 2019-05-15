<template>
  <div class="container">
    <PistasGenerator :numpistas="numpistas"></PistasGenerator>
  </div>
</template>

<script>
// @ is an alias to /src
import PistasGenerator from "@/components/PistasGenerator.vue";
require("@/assets/sass/main.scss");

export default {
  name: "pistas",
  props: ["numpistas"],
  components: {
    PistasGenerator
  },
  data() {
    return {};
  },
  computed: {}
};
</script>

<style lang="scss" scoped>
</style>


