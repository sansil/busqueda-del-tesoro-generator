(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{a2e2:function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container"},[a("PistasGenerator",{attrs:{numpistas:t.numpistas}})],1)},o=[],e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{},[t.numpistas>0?a("div",[a("progress",{staticClass:"progress is-info",attrs:{max:t.numpistas},domProps:{value:t.contadorPistas}}),a("p",[t._v(t._s(t.contadorPistas)+"/"+t._s(t.numpistas))]),a("br"),t.numpistas>t.contadorPistas?a("div",[a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Pista")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.pista.pista,expression:"pista.pista"}],staticClass:"input",attrs:{type:"text",placeholder:"pista"},domProps:{value:t.pista.pista},on:{input:function(s){s.target.composing||t.$set(t.pista,"pista",s.target.value)}}})]),a("p",{staticClass:"help"},[t._v("La pista que se va a mostrar en la app.")])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Código")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.pista.codigo,expression:"pista.codigo"}],staticClass:"input",attrs:{type:"text",placeholder:"código"},domProps:{value:t.pista.codigo},on:{input:function(s){s.target.composing||t.$set(t.pista,"codigo",s.target.value)}}})]),a("p",{staticClass:"help"},[t._v("Código de la solución de la pista.")])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Ayuda extra")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.pista.footer,expression:"pista.footer"}],staticClass:"input",attrs:{type:"text",placeholder:"ayuda extra"},domProps:{value:t.pista.footer},on:{input:function(s){s.target.composing||t.$set(t.pista,"footer",s.target.value)}}})]),a("p",{staticClass:"help"},[t._v("Agrega éste campo si quieres dar una ayuda extra a la pista inicial.")])]),a("div",{staticClass:"field"},[a("input",{staticClass:"switch is-info",attrs:{id:"switchConImg",type:"checkbox",name:"switchConImg"},domProps:{checked:t.pista.con_img},on:{click:function(s){t.pista.con_img?t.pista.con_img=0:t.pista.con_img=1}}}),a("label",{staticClass:"label",attrs:{for:"switchConImg"}},[t._v("Con imágen")])]),t.pista.con_img?a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Imágen url")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.pista.img_url,expression:"pista.img_url"}],staticClass:"input",attrs:{type:"text",placeholder:"url"},domProps:{value:t.pista.img_url},on:{input:function(s){s.target.composing||t.$set(t.pista,"img_url",s.target.value)}}})]),a("p",{staticClass:"help"},[t._v("Link a la imagen a mostrar.")])]):t._e()]):t._e(),t.numpistas>t.contadorPistas?a("div",{staticClass:"buttons control"},[a("a",{staticClass:"button is-primary",on:{click:t.addPista}},[t._v("Siguiente pista")]),a("a",{staticClass:"button is-danger",on:{click:t.reset}},[t._v("Reiniciar")])]):a("div",[a("div",{staticClass:"buttons control"},[a("a",{staticClass:"button is-danger",attrs:{href:t.jsonUrl,download:"grupoRojo.json"}},[t._v("Descargar grupo Rojo")]),a("a",{staticClass:"button is-success",attrs:{href:t.jsonUrl,download:"grupoVerde.json"}},[t._v("Descargar grupo Verde")]),a("a",{staticClass:"button is-info",attrs:{href:t.jsonUrl,download:"grupoAzul.json"}},[t._v("Descargar grupo Azul")]),a("a",{staticClass:"button is is-primary",on:{click:t.reset}},[t._v("Reiniciar")])])])]):a("div",[a("h1",[t._v("Selecciona un número de pistas mayor a cero!")])]),a("div",{staticClass:"buttons control",staticStyle:{"margin-top":"1rem"}},[a("a",{staticClass:"button is-warning",on:{click:t.goToHome}},[t._v("Volver")])])])},n=[];a("9299");var r={name:"home",components:{},props:["numpistas"],data:function(){return{contadorPistas:0,nombreEquipo:"pistas",pista:{codigo:"",tituloPista:"",pista:"",con_img:0,img_url:"",footer:""},jsonUrl:"",pistas:{}}},mounted:function(){},methods:{goToHome:function(){this.$router.push("/")},reset:function(){this.pista.codigo="",this.pista.pista="",this.pista.con_img=0,this.pista.img_url="",this.pista.footer="",this.pista.tituloPista="",this.contadorPistas=0},addPista:function(){var t={codigo:this.pista.codigo,pista:this.pista.pista,con_img:this.pista.con_img,img_url:encodeURIComponent(this.pista.img_url),footer:this.pista.footer};this.pistas[this.contadorPistas]=t;var s="application/json",a=JSON.stringify(this.pistas,null,2),i=new Blob([a],{type:s}),o=window.URL.createObjectURL(i);this.jsonUrl=o,this.contadorPistas++,this.pista.codigo="",this.pista.pista="",this.pista.con_img=0,this.pista.img_url="",this.pista.footer="",this.pista.tituloPista=""}},watch:{jsonUrl:function(){}}},l=r,c=a("2877"),p=Object(c["a"])(l,e,n,!1,null,"5cd57b22",null),u=p.exports;a("9299");var d={name:"pistas",props:["numpistas"],components:{PistasGenerator:u},data:function(){return{}},computed:{}},m=d,g=Object(c["a"])(m,i,o,!1,null,"53478ced",null);s["default"]=g.exports},f820:function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"about"},[a("h1",[t._v("This is an about page")])])}],e=a("2877"),n={},r=Object(e["a"])(n,i,o,!1,null,null,null);s["default"]=r.exports}}]);
//# sourceMappingURL=about.17b1acd1.js.map