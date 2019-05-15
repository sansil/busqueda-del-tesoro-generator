<template>
  <div class>
    <div class="field">
      <label class="label">Título</label>
      <div class="control">
        <input class="input" type="text" placeholder="Título" v-model="configuracion.titulo">
      </div>
      <p class="help">Ejemplo: Búesqueda del tesoro</p>
    </div>
    <div class="field">
      <label class="label">Subtitulo</label>
      <div class="control">
        <input class="input" type="text" placeholder="Subtitulo" v-model="configuracion.subtitulo">
      </div>
      <p class="help">Ejemplo: Cumple de 30!</p>
    </div>
    <div class="field">
      <label class="label">Número de pistas</label>
      <div class="control">
        <input class="input" type="number" placeholder="pistas" v-model="configuracion.numPistas">
      </div>
      <p class="help">Ejemplo: 10</p>
    </div>
    <div class="control">
      <a
        @click="goToPistas"
        class="button is-primary"
        :href="downloadToJson"
        download="Configuracion.json"
      >Descargar y seguir!</a>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
require("@/assets/sass/main.scss");

export default {
  name: "home",
  components: {},
  data() {
    return {
      configuracion: {
        titulo: "",
        subtitulo: "",
        numPistas: 0
      }
    };
  },
  methods: {
    goToPistas() {
      this.$router.push("/pistas/" + this.configuracion.numPistas);
    }
  },
  computed: {
    downloadToJson() {
      console.log("downloading...");
      // const jsonObj = { hola: "manola" };
      //const blob = new Blob([data], { type: "text/plain" });
      let contentType = "application/json";
      let dData = JSON.stringify(this.configuracion, null, 2);
      let blob = new Blob([dData], { type: contentType });
      let url = window.URL.createObjectURL(blob);
      return url;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>


