(function(){"use strict";var t={240:function(t,i,r){var e=r(144),a=function(){var t=this,i=t._self._c;return i("div",{attrs:{id:"app"}},[i("Login")],1)},o=[],n=function(){var t=this,i=t._self._c;return i("div",{staticClass:"Login"},[1==t.mostrarInicio?i("button",{staticClass:"btn btn-success",attrs:{type:"button",id:"btnDatos"},on:{click:t.mostrarForm}},[t._v("INGRESAR DATOS")]):t._e(),1==t.mostrar?i("form",{ref:"formulario"},[i("label",{staticClass:"form-label",attrs:{for:"nombre"}},[t._v("NOMBRE:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.nombre,expression:"nombre"}],staticClass:"form-control",attrs:{type:"text",id:"nombre",placeholder:"INGRESE NOMBRE"},domProps:{value:t.nombre},on:{input:function(i){i.target.composing||(t.nombre=i.target.value)}}}),i("br"),i("label",{staticClass:"form-label",attrs:{for:"apellido"}},[t._v("APELLIDO:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.apellido,expression:"apellido"}],staticClass:"form-control",attrs:{type:"text",id:"apellido",placeholder:"INGRESE APELLIDO"},domProps:{value:t.apellido},on:{input:function(i){i.target.composing||(t.apellido=i.target.value)}}}),i("br"),i("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:t.mostrarInfo}},[t._v("INGRESAR")])]):t._e(),1==t.mostrarTarjeta?i("div",{staticClass:"tarjeta"},[i("h1",[t._v("Bienvenid@ "+t._s(t.getFullName))]),i("p",[t._v("Aquí podrás encontrar información de peliculas de anime de Studio Ghibli")]),i("button",{staticClass:"btn btn-warning mt-5",attrs:{type:"button",id:"btnLimpiar"},on:{click:t.limpiarBusqueda}},[t._v("LIMPIAR INFORMACIÓN")])]):t._e(),1==t.mostrarPeliculas?i("div",{staticClass:"movies"},[i("Peliculas")],1):t._e()])},s=[],l=function(){var t=this,i=t._self._c;return i("div",{staticClass:"Peliculas"},[i("div",{staticClass:"alert alert-primary d-flex align-items-center mt-5",attrs:{role:"alert",id:"alerta"}},[i("svg",{staticClass:"bi bi-film",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[i("path",{attrs:{d:"M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z"}})]),i("div",{attrs:{id:"msjAlert"}},[t._v("A continuación hay un listado con los nombres de las peliculas")])]),i("select",{staticClass:"form-select",attrs:{id:"selectPeliculas"},on:{change:function(i){return t.onChange(i)}}},[i("option",{attrs:{selected:""}},[t._v("Selecciona...")]),t._l(t.arrayPeliculas,(function(r){return i("option",{domProps:{value:r.id}},[t._v(t._s(r.title))])}))],2),1==t.mostrarCard?i("div",{staticClass:"card mt-5"},[i("img",{staticClass:"card-img-top",attrs:{src:t.foto,alt:t.tituloI}}),i("div",{staticClass:"card-body"},[i("h3",{staticClass:"card-title"},[i("strong",[t._v("Titulo Originial: ")]),t._v(t._s(t.tituloR))]),i("h4",{staticClass:"card-title"},[i("strong",[t._v("Titulo en ingles: ")]),t._v(t._s(t.tituloI))]),i("p",{staticClass:"card-text"},[i("strong",[t._v("Descripción ")]),t._v(t._s(t.descripcion))]),i("div",{staticClass:"marco"},[i("p",[i("strong",[t._v("Director: ")]),t._v(t._s(t.director))])]),i("div",{staticClass:"marco mt-2"},[i("p",[i("strong",[t._v("Duración: ")]),t._v(t._s(t.duracion)+" minutos")])])])]):t._e()])},c=[],u={name:"Peliculas",props:{},data:function(){return{arrayPeliculas:{type:Array},tituloR:"",tituloI:"",foto:"",director:"",descripcion:"",duracion:"",mostrarCard:!1}},mounted(){this.getData()},methods:{getData:function(){fetch("https://ghibli.rest/films").then((t=>t.json())).then((t=>{this.arrayPeliculas=t}))},onChange:function(t){let i=t.target.value,r=this.arrayPeliculas.find((function(t){return t.id===i}));this.tituloI=r.title,this.tituloR=r.original_title_romanised,this.foto=r.image,this.director=r.director,this.descripcion=r.description,this.duracion=r.running_time,this.mostrarCard=!0}}},m=u,d=r(1),v=(0,d.Z)(m,l,c,!1,null,"6a68ac7a",null),p=v.exports,h={name:"Login",components:{Peliculas:p},data:function(){return{mostrar:!1,mostrarTarjeta:!1,mostrarPeliculas:!1,mostrarInicio:!0,nombre:"",apellido:""}},methods:{mostrarForm:function(){this.mostrar=!0,this.mostrarInicio=!1},mostrarInfo:function(){let t=document.getElementById("nombre").value,i=document.getElementById("apellido").value;this.nombre=t,this.apellido=i,this.mostrar=!1,this.mostrarTarjeta=!0,this.mostrarPeliculas=!0},limpiarBusqueda:function(){this.mostrar=!1,this.mostrarTarjeta=!1,this.mostrarPeliculas=!1,this.mostrarInicio=!0,this.nombre="",this.apellido=""}},computed:{getFullName(){let t=this.nombre+" "+this.apellido;return t}}},f=h,b=(0,d.Z)(f,n,s,!1,null,"b95c19ae",null),g=b.exports,_={name:"App",components:{Login:g}},C=_,y=(0,d.Z)(C,a,o,!1,null,null,null),P=y.exports;e.ZP.config.productionTip=!1,new e.ZP({render:function(t){return t(P)}}).$mount("#app")}},i={};function r(e){var a=i[e];if(void 0!==a)return a.exports;var o=i[e]={exports:{}};return t[e](o,o.exports,r),o.exports}r.m=t,function(){var t=[];r.O=function(i,e,a,o){if(!e){var n=1/0;for(u=0;u<t.length;u++){e=t[u][0],a=t[u][1],o=t[u][2];for(var s=!0,l=0;l<e.length;l++)(!1&o||n>=o)&&Object.keys(r.O).every((function(t){return r.O[t](e[l])}))?e.splice(l--,1):(s=!1,o<n&&(n=o));if(s){t.splice(u--,1);var c=a();void 0!==c&&(i=c)}}return i}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[e,a,o]}}(),function(){r.d=function(t,i){for(var e in i)r.o(i,e)&&!r.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:i[e]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)}}(),function(){var t={143:0};r.O.j=function(i){return 0===t[i]};var i=function(i,e){var a,o,n=e[0],s=e[1],l=e[2],c=0;if(n.some((function(i){return 0!==t[i]}))){for(a in s)r.o(s,a)&&(r.m[a]=s[a]);if(l)var u=l(r)}for(i&&i(e);c<n.length;c++)o=n[c],r.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return r.O(u)},e=self["webpackChunkstudio_ghibli"]=self["webpackChunkstudio_ghibli"]||[];e.forEach(i.bind(null,0)),e.push=i.bind(null,e.push.bind(e))}();var e=r.O(void 0,[998],(function(){return r(240)}));e=r.O(e)})();
//# sourceMappingURL=app.bfc2fb7a.js.map