<template>
  <div class="container">
    <ConfiguracionGenerator></ConfiguracionGenerator>
  </div>
</template>

<script>
// @ is an alias to /src
//import PistasGenerator from "@/components/PistasGenerator.vue";
import ConfiguracionGenerator from "@/components/ConfiguracionGenerator.vue";
require("@/assets/sass/main.scss");

export default {
  name: "home",
  components: {
    // PistasGenerator,
    ConfiguracionGenerator
  },
  data() {
    return {};
  },
  computed: {}
};
</script>

<style lang="scss" scoped>
</style>


