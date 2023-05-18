(function(){"use strict";var e={8136:function(e,t,o){var n=o(9963),r=o(6252);const i=(0,r._)("link",{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.15.4/css/all.css"},null,-1),a={class:"d-flex flex-column justify-content-center align-items-center",style:{"min-height":"calc(100vh - 200px)"}};function s(e,t,o,n,s,l){const c=(0,r.up)("Navbar"),d=(0,r.up)("router-view"),u=(0,r.up)("Footer");return(0,r.wg)(),(0,r.iD)(r.HY,null,[i,(0,r.Wm)(c),(0,r._)("div",a,[(0,r.Wm)(d)]),(0,r.Wm)(u)],64)}var l=o(1637),c=o(9493),d=o(6645);const u=e=>((0,r.dD)("data-v-5178fa4e"),e=e(),(0,r.Cn)(),e),p={class:"navbar navbar-expand-xl navbar-ligth fondoImg"},m={class:"container-fluid"},f=u((()=>(0,r._)("img",{id:"logo",style:{width:"100%",height:"auto"},src:l},null,-1))),g=[f],h={class:"nav-item dropdown d-flex perfil me-2 background"},v=u((()=>(0,r._)("a",{class:"nav-link dropdown-toggle",href:"#",id:"navbarDropdownMenuLink",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},[(0,r._)("img",{src:c,alt:"username-icon",style:{width:"100%",height:"auto"}})],-1))),b={class:"dropdown-menu dropdown-menu-end","aria-labelledby":"navbarDropdownMenuLink"},w={key:0},y=u((()=>(0,r._)("a",{href:"#",class:"dropdown-item"},"Iniciar sesión",-1))),_=[y],k=u((()=>(0,r._)("img",{src:d,alt:"Logout Icon",width:"16",height:"16"},null,-1)));function x(e,t,o,n,i,a){const s=(0,r.up)("Modal");return(0,r.wg)(),(0,r.iD)("nav",p,[(0,r._)("div",m,[(0,r._)("a",{class:"navbar-brand logo",onClick:t[0]||(t[0]=(...e)=>a.goTo&&a.goTo(...e)),type:"button"},g),(0,r._)("li",h,[v,(0,r._)("ul",b,[e.$store.state.rol?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("li",w,_)),(0,r._)("li",null,[e.$store.state.rol?((0,r.wg)(),(0,r.iD)("a",{key:0,onClick:t[1]||(t[1]=(...e)=>a.logout&&a.logout(...e)),class:"dropdown-item"},[(0,r.Uk)("Logout "),k])):(0,r.kq)("",!0)]),(0,r._)("li",null,[(0,r._)("a",{onClick:t[2]||(t[2]=(...e)=>a.openModal&&a.openModal(...e)),class:"dropdown-item"},"Mi perfil")]),(0,r._)("li",null,[(0,r._)("a",{onClick:t[3]||(t[3]=(...e)=>a.openModal&&a.openModal(...e)),class:"dropdown-item"},"Configuración")]),(0,r._)("li",null,[(0,r._)("a",{onClick:t[4]||(t[4]=(...e)=>a.openModal&&a.openModal(...e)),class:"dropdown-item"},"Preguntas Frecuentes")])]),(0,r.Wm)(s,{show:i.showModal,onClose:a.closeModal},null,8,["show","onClose"])])])])}o(7658);var C=o(543),M={name:"AppNavbar",data(){return{showModal:!1}},components:{Modal:C.Z},methods:{goTo(){this.$store.state.rol?this.$router.push("/MainPage"):this.$router.push("/")},openModal(){this.showModal=!0},closeModal(){this.showModal=!1},logout(){this.$store.commit("logout")}}},T=o(3744);const S=(0,T.Z)(M,[["render",x],["__scopeId","data-v-5178fa4e"]]);var j=S;const D={class:"footer mt-auto py-3",style:{background:"rgb(6 156 198)"}},I=(0,r._)("div",{class:"container"},[(0,r._)("span",{class:"text-white"},"© 2023 SwimOrg")],-1),E=[I];function O(e,t,o,n,i,a){return(0,r.wg)(),(0,r.iD)("footer",D,E)}var P={name:"AppFooter"};const A=(0,T.Z)(P,[["render",O]]);var L=A,N={name:"App",components:{Navbar:j,Footer:L},mounted(){this.$store.commit("initialiseStore")}};const $=(0,T.Z)(N,[["render",s]]);var q=$,F=(o(3734),o(9755)),Z=o.n(F),B=o(2201),V=o(6447),U=o(1944),W=o(890),z=o(9279),H=o(7178);const J={class:"container d-flex justify-content-center"},Y={class:"bg-white my-5 py-1 card rounded-5 text-secondary"},K={class:"card-body"},Q=(0,r._)("div",{class:"d-flex justify-content-center"},[(0,r._)("img",{src:V,alt:"login-icon",style:{height:"7rem"}})],-1),G={class:"input-group mt-4"},R=(0,r._)("div",{class:"input-group-text globalColor"},[(0,r._)("img",{src:U,alt:"username-icon",style:{height:"1rem"}})],-1),X={key:0,class:"error-message text-danger"},ee={class:"input-group mt-1"},te=(0,r._)("div",{class:"input-group-text globalColor"},[(0,r._)("img",{src:W,alt:"password-icon",style:{height:"1rem"}})],-1),oe=["type"],ne={key:0,src:z,alt:"password-icon",style:{height:"1rem"}},re={key:1,src:H,alt:"password-icon",style:{height:"1rem"}},ie=(0,r._)("div",{class:"d-flex justify-content-around mt-1"},[(0,r._)("div",{class:"pt-1"},[(0,r._)("a",{href:"#",class:"text-decoration-none text-info fw-semibold fst-italic",style:{"font-size":"0.9rem"}},"¿Olvido la contraseña?")])],-1),ae=(0,r._)("button",{class:"btn btn-primary btn-lg globalColor w-100 mt-4 fw-semibold shadow-sm",type:"submit"}," Iniciar Sesión ",-1),se=(0,r._)("div",{id:"messageContainer"},null,-1);function le(e,t,o,i,a,s){return(0,r.wg)(),(0,r.iD)("div",J,[(0,r._)("div",Y,[(0,r._)("div",K,[Q,(0,r._)("form",{onSubmit:t[4]||(t[4]=(...e)=>s.Submit&&s.Submit(...e)),method:"post"},[(0,r._)("div",G,[R,(0,r.wy)((0,r._)("input",{class:"form-control bg-light",type:"text",placeholder:"ID","onUpdate:modelValue":t[0]||(t[0]=e=>a.form.id=e),required:"",onInput:t[1]||(t[1]=(...e)=>s.checkInputLength&&s.checkInputLength(...e))},null,544),[[n.nr,a.form.id]])]),a.showError?((0,r.wg)(),(0,r.iD)("div",X," Error: Máximo 8 caracteres. ")):(0,r.kq)("",!0),(0,r._)("div",ee,[te,(0,r.wy)((0,r._)("input",{class:"form-control bg-light","onUpdate:modelValue":t[2]||(t[2]=e=>a.form.password=e),required:"",type:a.passwordType,placeholder:"Contraseña"},null,8,oe),[[n.YZ,a.form.password]]),(0,r._)("div",{class:"input-group-text",type:"button",onClick:t[3]||(t[3]=(...e)=>s.switchVisibility&&s.switchVisibility(...e))},["password"!=a.passwordType?((0,r.wg)(),(0,r.iD)("img",ne)):(0,r.kq)("",!0),"password"==a.passwordType?((0,r.wg)(),(0,r.iD)("img",re)):(0,r.kq)("",!0)])]),ie,ae],32),se])])])}var ce={name:"AppLogin",data(){return{passwordType:"password",eye:!1,maxInputLength:8,showError:!1,form:{email:"",password:""},users:{0:{id:"12345A",password:"crono1234.",rol:"cronometrador"},1:{id:"12345B",password:"juez987.",rol:"juez de recorrido"}}}},methods:{checkInputLength(){this.form.id.length>this.maxInputLength?this.showError=!0:this.showError=!1},Submit(e){e.preventDefault();for(let t=0;t<Object.keys(this.users).length;t++)this.form.id===this.users[t].id&&this.form.password===this.users[t].password?(this.$store.commit("login",this.users[t].rol),this.$router.push("/MainPage")):this.showAlert()},switchVisibility(){this.passwordType="password"===this.passwordType?"text":"password"},showAlert(){const e='<div class="alert alert-danger my-3" role="alert">\n        <strong>¡Error!</strong><p>Los datos introducidos no son </br> correctos.</p> \n        </div>\n        ';document.getElementById("messageContainer").innerHTML=e}}};const de=(0,T.Z)(ce,[["render",le]]);var ue=de;const pe=[{path:"/",name:"login",component:ue},{path:"/MainPage",name:"MainPage",component:()=>o.e(443).then(o.bind(o,8581))},{path:"/CompetitionMainPage",name:"CompetitionMainPage",component:()=>o.e(443).then(o.bind(o,1863)),children:[{path:"/ChronoTool",name:"ChronoTool",component:()=>o.e(443).then(o.bind(o,6272))},{path:"/JudgeTool",name:"JudgeTool",component:()=>o.e(443).then(o.bind(o,1683))},{path:"/Descalificaciones",name:"Descalificaciones",component:()=>o.e(443).then(o.bind(o,4351))}]},{path:"/Chronomether_item",name:"Chronomether_item",component:()=>o.e(443).then(o.bind(o,8977))}],me=(0,B.p7)({history:(0,B.r5)(),routes:pe});var fe=me,ge=o(3907),he=(0,ge.MT)({state:{rol:""},getters:{},mutations:{login(e,t){e.rol=t,localStorage.setItem("rol",t),fe.push("/MainPage")},logout(e){e.rol="",localStorage.removeItem("rol"),fe.push("/")},initialiseStore(e){localStorage.getItem("rol")&&(e.rol=localStorage.getItem("rol"),alert("estas logeado"),fe.push("/MainPage"))}},actions:{},modules:{}});window.jQuery=Z(),window.$=Z(),(0,n.ri)(q).use(he).use(fe).mount("#app")},543:function(e,t,o){o.d(t,{Z:function(){return v}});var n=o(6252),r=o(5996);const i=e=>((0,n.dD)("data-v-5bca2da6"),e=e(),(0,n.Cn)(),e),a={key:0,class:"modal fade show d-block",tabindex:"-1"},s={class:"modal-dialog modal-dialog-centered"},l={class:"modal-content"},c={class:"modal-header"},d=i((()=>(0,n._)("h5",{class:"modal-title titulo",style:{"font-weight":"bold",color:"#069cc6"}}," Página en construcción ",-1))),u=(0,n.uE)('<div class="modal-body" data-v-5bca2da6><div class="container-fluid" data-v-5bca2da6><div class="row" data-v-5bca2da6><div class="col-md-6" data-v-5bca2da6><img src="'+r+'" width="70%" alt="My Image" class="img-fluid" data-v-5bca2da6></div><div class="col-md-6 ms-auto general" style="display:flex;align-items:center;" data-v-5bca2da6> Proximamente podrás disfrutar de este espacio. </div></div></div></div>',1),p={class:"modal-footer"};function m(e,t,o,r,i,m){return o.show?((0,n.wg)(),(0,n.iD)("div",a,[(0,n._)("div",s,[(0,n._)("div",l,[(0,n._)("div",c,[d,(0,n._)("button",{type:"button",class:"btn-close",onClick:t[0]||(t[0]=(...e)=>m.close&&m.close(...e))})]),u,(0,n._)("div",p,[(0,n._)("button",{type:"button",class:"btn btn-secondary",onClick:t[1]||(t[1]=(...e)=>m.close&&m.close(...e))},"Cerrar")])])])])):(0,n.kq)("",!0)}var f={name:"AppModal",props:["show"],methods:{close(){this.$emit("close")}}},g=o(3744);const h=(0,g.Z)(f,[["render",m],["__scopeId","data-v-5bca2da6"]]);var v=h},7178:function(e,t,o){e.exports=o.p+"img/eye-off.7e855638.svg"},9279:function(e,t,o){e.exports=o.p+"img/eye.65efb4a8.svg"},6447:function(e,t,o){e.exports=o.p+"img/login-icon.6019246f.svg"},890:function(e,t,o){e.exports=o.p+"img/password-icon.a94ca40f.svg"},1944:function(e,t,o){e.exports=o.p+"img/username-icon.ad748b06.svg"},5996:function(e,t,o){e.exports=o.p+"img/constructor.3911db91.jpg"},1637:function(e,t,o){e.exports=o.p+"img/logo2.c7c11b7c.png"},6645:function(e,t,o){e.exports=o.p+"img/logout.98207c23.png"},9493:function(e,t,o){e.exports=o.p+"img/perfil.bf8c78f5.png"}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,o),i.exports}o.m=e,function(){var e=[];o.O=function(t,n,r,i){if(!n){var a=1/0;for(d=0;d<e.length;d++){n=e[d][0],r=e[d][1],i=e[d][2];for(var s=!0,l=0;l<n.length;l++)(!1&i||a>=i)&&Object.keys(o.O).every((function(e){return o.O[e](n[l])}))?n.splice(l--,1):(s=!1,i<a&&(a=i));if(s){e.splice(d--,1);var c=r();void 0!==c&&(t=c)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[n,r,i]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,n){return o.f[n](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/about.3772c96a.js"}}(),function(){o.miniCssF=function(e){return"css/about.0b36fc0a.css"}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="swim-org:";o.l=function(n,r,i,a){if(e[n])e[n].push(r);else{var s,l;if(void 0!==i)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+i){s=u;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.setAttribute("data-webpack",t+i),s.src=n),e[n]=[r];var p=function(t,o){s.onerror=s.onload=null,clearTimeout(m);var r=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(o)})),t)return t(o)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/swim-org/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,o,n,r){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(o){if(i.onerror=i.onload=null,"load"===o.type)n();else{var a=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=a,l.request=s,i.parentNode&&i.parentNode.removeChild(i),r(l)}};return i.onerror=i.onload=a,i.href=t,o?o.parentNode.insertBefore(i,o.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var o=document.getElementsByTagName("link"),n=0;n<o.length;n++){var r=o[n],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===t))return r}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){r=a[n],i=r.getAttribute("data-href");if(i===e||i===t)return r}},n=function(n){return new Promise((function(r,i){var a=o.miniCssF(n),s=o.p+a;if(t(a,s))return r();e(n,s,null,r,i)}))},r={143:0};o.f.miniCss=function(e,t){var o={443:1};r[e]?t.push(r[e]):0!==r[e]&&o[e]&&t.push(r[e]=n(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){var e={143:0};o.f.j=function(t,n){var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var i=new Promise((function(o,n){r=e[t]=[o,n]}));n.push(r[2]=i);var a=o.p+o.u(t),s=new Error,l=function(n){if(o.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,r[1](s)}};o.l(a,l,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,i,a=n[0],s=n[1],l=n[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(l)var d=l(o)}for(t&&t(n);c<a.length;c++)i=a[c],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(d)},n=self["webpackChunkswim_org"]=self["webpackChunkswim_org"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(8136)}));n=o.O(n)})();
//# sourceMappingURL=app.d3df97a2.js.map