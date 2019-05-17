<template>
  <div class>
    <div v-if="numpistas>0">
      <progress class="progress is-info" :value="contadorPistas" :max="numpistas"></progress>
      <p>{{contadorPistas}}/{{numpistas}}</p>
      <br>
      <div v-if="numpistas > contadorPistas">
        <div class="field">
          <label class="label">Pista</label>
          <div class="control">
            <input class="input" type="text" placeholder="pista" v-model="pista.pista">
          </div>
          <p class="help">La pista que se va a mostrar en la app.</p>
        </div>
        <!-- <div class="field">
          <label class="label">Título pista</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Titutlo pista"
              v-model="pista.tituloPista"
            >
          </div>
          <p class="help">La pista que se va a mostrar en la app.</p>
        </div>-->
        <div class="field">
          <label class="label">Código</label>
          <div class="control">
            <input class="input" type="text" placeholder="código" v-model="pista.codigo">
          </div>
          <p class="help">Código de la solución de la pista.</p>
        </div>

        <div class="field">
          <label class="label">Ayuda extra</label>
          <div class="control">
            <input class="input" type="text" placeholder="ayuda extra" v-model="pista.footer">
          </div>
          <p class="help">Agrega éste campo si quieres dar una ayuda extra a la pista inicial.</p>
        </div>

        <div class="field">
          <input
            id="switchConImg"
            type="checkbox"
            name="switchConImg"
            class="switch is-info"
            :checked="pista.con_img"
            @click="pista.con_img?pista.con_img=0:pista.con_img=1"
          >
          <label class="label" for="switchConImg">Con imágen</label>
        </div>
        <div class="field" v-if="pista.con_img">
          <label class="label">Imágen url</label>
          <div class="control">
            <input class="input" type="text" placeholder="url" v-model="pista.img_url">
          </div>
          <p class="help">Link a la imagen a mostrar.</p>
        </div>
      </div>
      <div class="buttons control" v-if="numpistas > contadorPistas">
        <a class="button is-primary" @click="addPista">Siguiente pista</a>
        <a class="button is-danger" @click="reset">Reiniciar</a>
      </div>
      <div v-else>
        <!-- <div class="field">
          <label class="label">Nombre del equipo</label>
          <div class="control">
            <input class="input" type="text" placeholder="nombre equipo" v-model="nombreEquipo">
          </div>
          <p class="help">Ejemplo: equipoRojo</p>
        </div>-->
        <div class="buttons control">
          <a class="button is-danger" :href="jsonUrl" download="grupoRojo.json">Descargar grupo Rojo</a>
          <a
            class="button is-success"
            :href="jsonUrl"
            download="grupoVerde.json"
          >Descargar grupo Verde</a>
          <a class="button is-info" :href="jsonUrl" download="grupoAzul.json">Descargar grupo Azul</a>
          <a class="button is is-primary" @click="reset">Reiniciar</a>
        </div>
      </div>
    </div>

    <div v-else>
      <h1>Selecciona un número de pistas mayor a cero!</h1>
    </div>
    <div class="buttons control" style="margin-top:1rem;">
      <a class="button is-warning" @click="goToHome">Volver</a>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
require("@/assets/sass/main.scss");

export default {
  name: "home",
  components: {
    //HelloWorld
  },
  props: ["numpistas"],
  data() {
    return {
      contadorPistas: 0,
      nombreEquipo: "pistas",
      pista: {
        codigo: "",
        tituloPista: "",
        pista: "",
        con_img: 0,
        img_url: "",
        footer: ""
      },
      jsonUrl: "",
      pistas: {}
    };
  },
  mounted() {},
  methods: {
    goToHome() {
      this.$router.push("/");
    },
    reset() {
      this.pista.codigo = "";
      this.pista.pista = "";
      this.pista.con_img = 0;
      this.pista.img_url = "";
      this.pista.footer = "";
      this.pista.tituloPista = "";
      this.contadorPistas = 0;
    },
    addPista() {
      const newPista = {
        codigo: this.pista.codigo,
        pista: this.pista.pista,
        con_img: this.pista.con_img,
        img_url: encodeURIComponent(this.pista.img_url),
        footer: this.pista.footer
      };
      this.pistas[this.contadorPistas] = newPista;
      let contentType = "application/json";
      let dData = JSON.stringify(this.pistas, null, 2);
      let blob = new Blob([dData], { type: contentType });
      let url = window.URL.createObjectURL(blob);
      this.jsonUrl = url;
      this.contadorPistas++;

      this.pista.codigo = "";
      this.pista.pista = "";
      this.pista.con_img = 0;
      this.pista.img_url = "";
      this.pista.footer = "";
      this.pista.tituloPista = "";
    }
  },
  watch: {
    jsonUrl: function() {}
  }
};
</script>

<style lang="scss" scoped>
</style>
