(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"0f91":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EmailJSResponseStatus=t.sendForm=t.send=t.init=void 0;var s=n("3245");Object.defineProperty(t,"EmailJSResponseStatus",{enumerable:!0,get:function(){return s.EmailJSResponseStatus}});var a=n("5129"),r=null,i="https://api.emailjs.com";function o(e,t,n){return void 0===n&&(n={}),new Promise((function(a,r){var i=new XMLHttpRequest;for(var o in i.addEventListener("load",(function(e){var t=new s.EmailJSResponseStatus(e.target);200===t.status||"OK"===t.text?a(t):r(t)})),i.addEventListener("error",(function(e){r(new s.EmailJSResponseStatus(e.target))})),i.open("POST",e,!0),n)i.setRequestHeader(o,n[o]);i.send(t)}))}function c(e){var t=document&&document.getElementById("g-recaptcha-response");return t&&t.value&&(e["g-recaptcha-response"]=t.value),t=null,e}function l(e){return"#"!==e[0]&&"."!==e[0]?"#"+e:e}function u(e,t){r=e,i=t||"https://api.emailjs.com"}function d(e,t,n,s){var a={lib_version:"2.6.4",user_id:s||r,service_id:e,template_id:t,template_params:c(n)};return o(i+"/api/v1.0/email/send",JSON.stringify(a),{"Content-type":"application/json"})}function m(e,t,n,s){if("string"===typeof n&&(n=document.querySelector(l(n))),!n||"FORM"!==n.nodeName)throw"Expected the HTML form element or the style selector of form";a.UI.progressState(n);var c=new FormData(n);return c.append("lib_version","2.6.4"),c.append("service_id",e),c.append("template_id",t),c.append("user_id",s||r),o(i+"/api/v1.0/email/send-form",c).then((function(e){return a.UI.successState(n),e}),(function(e){return a.UI.errorState(n),Promise.reject(e)}))}t.init=u,t.send=d,t.sendForm=m,t.default={init:u,send:d,sendForm:m}},"1b2f":function(e,t,n){"use strict";n("6a43")},"219f":function(e,t,n){e.exports=n.p+"img/dance.6ce5972a.jpg"},2342:function(e,t,n){e.exports=n.p+"media/coffin-dance-official-music-video-hd.9a8d3c47.mp3"},3245:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EmailJSResponseStatus=void 0;var s=function(){function e(e){this.status=e.status,this.text=e.responseText}return e}();t.EmailJSResponseStatus=s},"32c7":function(e,t,n){},3786:function(e,t,n){"use strict";n("dfbd")},"390a":function(e,t,n){},"4a12":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"content"}},[n("router-view"),n("Banner"),n("About"),n("Services"),n("Video"),n("login"),n("Arrow")],1)},a=[],r=n("84af"),i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{className:"us container-fluid",id:"about"}},[s("div",{staticClass:"container container-fluid"},[s("div",{staticClass:"row"},[e._m(0),s("div",{staticClass:"col-md-6 text-center"},[s("img",{attrs:{src:n("219f"),width:"450",alt:"service-image"}})])])])])},o=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"col-md-6"},[s("h2",[e._v("Contexte")]),s("article",[s("p",[e._v("En 10 ans, le nombre de freelances a augmenté de près de 120%. Ils sont désormais 830.000 en France, soit plus de 10% des actifs. Environ 60% des auto-entrepreneurs ont moins de 35 ans, mais ils se rendent compte que se lancer dans ce métier est plus difficile qu'auparavant. En effet, être son propre patron, ça fait rêver mais freelance c’est aussi ne plus compter ses heures... En moyenne, ces travailleurs indépendants dépassent (très) largement les 35 heures. Parmi ces jeunes indépendants, nombreux ceux qui souhaitent être accompagnés pour leur première mission afin de disposer de conseils auprès des plus expérimentés.")])]),s("audio",{attrs:{controls:"",preload:"auto",autoplay:"autoplay"}},[s("source",{attrs:{src:n("2342"),type:"audio/mpeg"}})]),s("button",{staticClass:"btn btn-dark",attrs:{type:"button"}},[e._v("Notre instagram")])])}],c={name:"About"},l=c,u=(n("3786"),n("2877")),d=Object(u["a"])(l,i,o,!1,null,"42298f34",null),m=d.exports,f=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"services container-fluid",attrs:{id:"services"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"row container"},[s("div",{staticClass:"icon col-md-4 text-center"},[s("img",{staticClass:"center-block",attrs:{src:n("5adc"),width:"150",alt:"service-image"}}),e._m(0)]),s("div",{staticClass:"icon col-md-4 text-center"},[s("img",{staticClass:"center-block",attrs:{src:n("78ec"),width:"150",alt:"service-image"}}),e._m(1)]),s("div",{staticClass:"icon col-md-4 text-center"},[s("img",{staticClass:"center-block",attrs:{src:n("8a8f"),width:"150",alt:"service-image"}}),e._m(2)])])])])},p=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",[n("h3",[e._v("Comment calculer son tarif horaire freelance ?")]),n("p",[e._v("Pour cela, partez du salaire net mensuel que vous aimeriez percevoir. Ajoutez-y le montant nécessaire pour couvrir vos charges sociales et fiscales, ainsi que vos frais d’activité. Divisez ensuite ce montant par le nombre d’heures travaillées en un mois, et vous obtenez votre taux horaire.")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",[n("h3",[e._v("Les statuts freelance")]),n("p",[e._v("Pour devenir freelance, la majorité des travailleurs indépendants optent soit pour le statut de SARL (ou la forme unipersonnelle EURL), soit pour celui de SAS (ou la forme unipersonnelle SASU), soit pour le régime d’auto-entrepreneur.")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",[n("h3",[e._v("Comment trouver des clients ?")]),n("p",[e._v("Il y a plusieurs choses qu’un jeune freelancer puisse faire pour trouver des clients, en créant un site web et des réseaux sociaux pour se construire une présence en ligne et se donner de la visibilité, en travaillant gratuitement au début pour gagner la confiance d’un potentiel client, ….")])])}],v={name:"Services"},h=v,_=(n("57d6"),Object(u["a"])(h,f,p,!1,null,"0ec27262",null)),b=_.exports,g=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},w=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"background container-fluid",attrs:{id:"video"}},[n("div",{staticClass:"banner_content container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6"},[n("h1",[e._v("Découvrez comment ça marche!")]),n("p",[e._v("Petite danse, déhanche énervé, pleureuse, que du plaisir en gros")]),n("button",{staticClass:"btn btn-dark",attrs:{type:"button"}},[e._v("Contacter l'équipe Coffee")])]),n("div",{staticClass:"col-md-6 text-center"},[n("div",{staticClass:"video"},[n("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/-icXGp0DhwA",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),n("iframe",{staticClass:"facebook text-center",staticStyle:{border:"none",overflow:"hidden"},attrs:{src:"https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FCoffinDanceMemes.FuneralDancingMemes&width=450&layout=standard&action=like&size=small&share=true&height=35&appId",width:"140",height:"25",scrolling:"no",frameborder:"0",allowTransparency:"true",allow:"encrypted-media"}})])])])])}],E={name:"Video"},S=E,C=(n("9656"),Object(u["a"])(S,g,w,!1,null,"344acfac",null)),x=C.exports,y=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},R=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"arrow"},[n("a",{attrs:{href:"#nav"}},[n("img",{attrs:{src:"http://i.stack.imgur.com/SBv4T.gif",alt:"pokemon"}})])])}],j={name:"Arrow"},O=j,L=(n("1b2f"),Object(u["a"])(O,y,R,!1,null,null,null)),k=L.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{staticClass:"contact-form",on:{submit:function(t){return t.preventDefault(),e.sendEmail.apply(null,arguments)}}},[n("label",[e._v("Name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",name:"From_name",placeholder:"Your Name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),n("label",[e._v("Email")]),n("input",{attrs:{type:"email",name:"From_email"}}),n("label",[e._v("Message")]),n("textarea",{attrs:{name:"message"}}),n("input",{attrs:{type:"submit",value:"Send"}}),n("iframe",{staticStyle:{display:"block","margin-left":"auto","margin-right":"auto","max-width":"100%"},attrs:{width:"540",height:"305",src:"https://f88e18e5.sibforms.com/serve/MUIEAFQ47CAgpX8AxaZitL47dXu3d028oQUZF1EbCoUX3ariIRgxC1vcLY1wGlLnSuWYIHNHoC3LOnBfdEwzgkgfmDpsevf6qk4OBovLo5QUHD6pnfpM5ycP96dGghQ84uT_BlCBJgEqeDGFe371hJkmNDUdvRf2ZvsURicIX_3ikH3MzO9l5mocpnvoRZdeevUW5WUFG7jbXt-Q",frameborder:"0",scrolling:"auto",allowfullscreen:""}})])},P=[],F=n("0f91"),D=n.n(F),U={methods:{sendEmail:function(e){D.a.sendForm("default_service","template_vlj2a4e",e.target,"user_v1mytDfMzcYesOlmdPxXg").then((function(e){alert("SUCCESS!",e.status,e.text)}),(function(e){alert("FAILED...",e)}))}}},I=U,$=(n("72cf"),Object(u["a"])(I,A,P,!1,null,"101122e8",null)),q=$.exports,M={name:"App",components:{Video:x,Login:q,Banner:r["a"],About:m,Services:b,Arrow:k}},N=M,J=(n("6228"),Object(u["a"])(N,s,a,!1,null,null,null));t["default"]=J.exports},5129:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UI=void 0;var s=function(){function e(){}return e.clearAll=function(e){e.classList.remove(this.PROGRESS),e.classList.remove(this.DONE),e.classList.remove(this.ERROR)},e.progressState=function(e){this.clearAll(e),e.classList.add(this.PROGRESS)},e.successState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.DONE)},e.errorState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.ERROR)},e.PROGRESS="emailjs-sending",e.DONE="emailjs-success",e.ERROR="emailjs-error",e}();t.UI=s},"57d6":function(e,t,n){"use strict";n("ce10")},"5adc":function(e,t,n){e.exports=n.p+"img/musicien.f01da97c.jpg"},6228:function(e,t,n){"use strict";n("f51f")},"6a43":function(e,t,n){},"72cf":function(e,t,n){"use strict";n("32c7")},"78ec":function(e,t,n){e.exports=n.p+"img/pleureuse.faaed59a.jpg"},"84af":function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"background container-fluid"},[n("div",{staticClass:"banner_content container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6"},[n("h1",[e._v("“Kea besoin d’aide ?”")]),n("p",[e._v("Kea est une plateforme web mettant en relation des freelance entre eux. L’objectif est de mettre en relation les auto-entrepreneurs avec un système de mentorat. Les freelance junior peuvent maintenant être accompagnés par ceux ayant déjà de l’expérience.")]),n("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[e._v("Découvrir")]),n("button",{staticClass:"btn btn-dark",attrs:{type:"button"}},[e._v("Nous contacter")])]),n("div",{staticClass:"col-md-6 text-center"})])])])}],r={name:"Banner"},i=r,o=(n("c479"),n("2877")),c=Object(o["a"])(i,s,a,!1,null,"002ec32d",null);t["a"]=c.exports},"8a8f":function(e,t,n){e.exports=n.p+"img/maxresdefault.6f2215f1.jpg"},9656:function(e,t,n){"use strict";n("ef3a")},c479:function(e,t,n){"use strict";n("390a")},ce10:function(e,t,n){},dfbd:function(e,t,n){},ef3a:function(e,t,n){},f51f:function(e,t,n){}}]);
//# sourceMappingURL=home.fd156ad2.js.map