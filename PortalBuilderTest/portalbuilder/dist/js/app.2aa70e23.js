(function(t){function e(e){for(var a,r,s=e[0],l=e[1],u=e[2],d=0,p=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);c&&c(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,s=1;s<n.length;s++){var l=n[s];0!==i[l]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},i={app:0},o=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var c=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"06d6":function(t,e,n){"use strict";var a=n("3648"),i=n.n(a);i.a},1956:function(t,e,n){},3648:function(t,e,n){},"61bd":function(t,e,n){},"8cf4":function(t,e,n){"use strict";var a=n("61bd"),i=n.n(a);i.a},cd49:function(t,e,n){"use strict";n.r(e);var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-view")},o=[],r=n("d225"),s=n("308d"),l=n("6bb5"),u=n("4e2b"),c=n("9ab4"),d=n("60a3"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"preview-container"},[n("div",[t._v("I am a preview page.")]),n("button",{on:{click:t.returnToEditor}},[t._v("Back to Editing")]),n("div",[t._v(t._s(this.$store.getters.getTitle))]),n("div",[t._v(t._s(this.$store.getters.getSubTitle))]),n("div",[t._v(t._s(this.$store.state))])])},b=[],m=(n("a481"),n("b0b4")),f=function(t){function e(){return Object(r["a"])(this,e),Object(s["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),Object(m["a"])(e,[{key:"returnToEditor",value:function(){this.$router.replace("/")}}]),e}(d["c"]);f=c["a"]([d["a"]],f);var v=f,h=v,g=n("2877"),y=Object(g["a"])(h,p,b,!1,null,"f34fe510",null),O=y.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"button-header"},[n("button",{on:{click:t.openPreview}},[t._v("\n            Preview\n        ")])]),n("div",{staticClass:"overall-container"},[n("div",{staticClass:"home"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.titleValue,expression:"titleValue"}],attrs:{placeholder:"Title",value:"titleValue"},domProps:{value:t.titleValue},on:{input:function(e){e.target.composing||(t.titleValue=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.subTitleValue,expression:"subTitleValue"}],attrs:{placeholder:"Sub Title",value:"subTitleValue"},domProps:{value:t.subTitleValue},on:{input:function(e){e.target.composing||(t.subTitleValue=e.target.value)}}}),n("p",[t._v("Homescreen, need to add components for the bits here!")]),n("draggable",{staticClass:"draggable-item-container",attrs:{list:t.portalElements,group:"sharedItems",handle:".handle"}},t._l(t.portalElements,function(e,a){return n("div",{key:a,staticClass:"draggable-item",on:{click:function(n){t.showModal(e.type)}}},[n("i",{staticClass:"handle draggable"},[t._v("HANDLE")]),n("DragItem",{attrs:{idNum:e.id,indexNum:a,deleteable:!0},on:{"delete-item":function(e){t.deleteItem(e)}}})],1)}))],1),n("div",{staticClass:"draggable-item-container"},[n("h2",{staticClass:"draggable-header"},[t._v("Layout Options")]),n("draggable",{attrs:{list:t.layoutItems,group:{name:"sharedItems",pull:"clone",put:!1}}},t._l(t.layoutItems,function(t){return n("div",{key:t.id,staticClass:"draggable-item draggable"},[n("DragItem",{attrs:{idNum:t.id,deleteable:!1}})],1)}))],1)]),n("modals-container")],1)},j=[],w=n("310e"),T=n.n(w),C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal-container"},[n("div",{staticClass:"title-row"},[n("h3",[t._v(t._s(t.title))])]),n("div",{staticClass:"description-container"},[t._v(t._s(t.description)),n("vue-dropzone",{ref:"myVueDropzone",attrs:{id:"dropzone",options:t.dropzoneOptions}})],1),n("div",{staticClass:"button-container"},[n("button",{staticClass:"button-style",on:{click:function(e){t.$emit("close")}}},[t._v(t._s(t.buttonText1))]),n("button",{staticClass:"button-style"},[t._v(t._s(t.buttonText2))])])])},I=[],x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal-container"},[n("div",{staticClass:"title-row"},[n("h3",[t._v(t._s(t.title))])]),n("div",{staticClass:"description-container"},[t._v(t._s(t.description))]),n("div",{staticClass:"button-container"},[n("button",{staticClass:"button-style",on:{click:function(e){t.$emit("close")}}},[t._v(t._s(t.buttonText1))]),n("button",{staticClass:"button-style"},[t._v(t._s(t.buttonText2))])])])},k=[],$=function(t){function e(){return Object(r["a"])(this,e),Object(s["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),e}(d["c"]);$=c["a"]([Object(d["a"])({})],$);var P=$,E=P,V=(n("06d6"),Object(g["a"])(E,x,k,!1,null,null,null)),S=V.exports,D=n("92c3"),N=n.n(D),M=(n("1e3f"),function(t){function e(){var t;return Object(r["a"])(this,e),t=Object(s["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.title="Image Carousel",t.description="A short text about what this all means",t.buttonText1="Close",t.buttonText2="Upload",t.hasTabs=!1,t.dropzoneOptions={url:"https://httpbin.org/post",thumbnailWidth:150,maxFilesize:.5,headers:{"My-Awesome-Header":"header value"}},t}return Object(u["a"])(e,t),e}(S));M=c["a"]([Object(d["a"])({components:{vueDropzone:N.a}})],M);var z=M,H=z,L=Object(g["a"])(H,C,I,!1,null,"faf96148",null),A=L.exports,F=function(t){function e(){var t;return Object(r["a"])(this,e),t=Object(s["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.itemsPlaced=[],t.layoutItems=[{name:"Image Carousel",id:5,type:"Carousel"},{name:"Form",id:6,type:"Form"},{name:"Description",id:7,type:"Description"}],t}return Object(u["a"])(e,t),Object(m["a"])(e,[{key:"openPreview",value:function(){this.$router.replace("preview")}},{key:"deleteItem",value:function(t){this.$store.dispatch("deletePortalItem",t)}},{key:"showModal",value:function(t){switch(console.log("showing modal",t),t){case"Carousel":this.$modal.show(A,{name:"dynamic-modal"});break;case"Description":break;case"Form":break}}},{key:"titleValue",get:function(){return this.$store.getters.getTitle},set:function(t){this.$store.commit("updateTitle",t)}},{key:"subTitleValue",get:function(){return this.$store.getters.getSubTitle},set:function(t){this.$store.commit("updateSubTitle",t)}},{key:"portalElements",get:function(){return this.$store.getters.getPortalItems},set:function(t){this.$store.dispatch("updatePortalItems",t)}}]),e}(d["c"]);F=c["a"]([Object(d["a"])({components:{draggable:T.a}})],F);var B=F,J=B,U=(n("edf7"),Object(g["a"])(J,_,j,!1,null,"afbe0184",null)),W=U.exports,X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item"},[n("div",{staticClass:"label"},[t._v("\n        I am item #"+t._s(t.idNum)+"\n    ")]),t.deleteable?n("div",[n("button",{on:{click:t.deleteItem}},[t._v("X")])]):t._e()])},q=[],G=function(t){function e(){return Object(r["a"])(this,e),Object(s["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),Object(m["a"])(e,[{key:"deleteItem",value:function(){this.$emit("delete-item",this.indexNum)}}]),e}(d["c"]);c["a"]([Object(d["b"])()],G.prototype,"idNum",void 0),c["a"]([Object(d["b"])()],G.prototype,"indexNum",void 0),c["a"]([Object(d["b"])()],G.prototype,"deleteable",void 0),G=c["a"]([d["a"]],G);var K=G,Q=K,R=(n("8cf4"),Object(g["a"])(Q,X,q,!1,null,"f417c2a8",null)),Y=R.exports,Z=function(t){function e(){return Object(r["a"])(this,e),Object(s["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),e}(d["c"]);Z=c["a"]([Object(d["a"])({components:{DragItem:Y,Home:W,Preview:O}})],Z);var tt=Z,et=tt,nt=Object(g["a"])(et,i,o,!1,null,null,null),at=nt.exports,it=(n("54ba"),n("2f62")),ot={state:{title:null,subTitle:null,portalItems:Array()},getters:{getTitle:function(t){return t.title||""},getSubTitle:function(t){return t.subTitle||""},getPortalItems:function(t){return t.portalItems||[]}},actions:{updatePortalItems:function(t,e){var n=t.commit;n("updatePortalItems",e)},deletePortalItem:function(t,e){var n=t.commit;n("deleteLayoutItem",e)}},mutations:{updateTitle:function(t,e){t.title=e},updateSubTitle:function(t,e){t.subTitle=e},updateLayoutItems:function(t,e){t.portalElements=e},deleteLayoutItem:function(t,e){t.portalItems.splice(e,1)}}},rt=ot;a["default"].use(it["a"]);var st=new it["a"].Store({modules:{home:rt}}),lt=n("8c4f"),ut=n("1881"),ct=n.n(ut);a["default"].config.productionTip=!0;var dt=[{path:"/",component:W},{path:"/preview",component:O}];a["default"].use(ct.a,{dynamic:!0,dynamicDefaults:{clickToClose:!1}}),a["default"].use(lt["a"]);var pt=new lt["a"]({routes:dt});a["default"].component("DragItem",Y),a["default"].component("Home",W),a["default"].component("Preview",O),a["default"].component("Carousel",A),a["default"].component("ModalContentsBase",S),new a["default"]({store:st,router:pt,render:function(t){return t(at)}}).$mount("#app")},edf7:function(t,e,n){"use strict";var a=n("1956"),i=n.n(a);i.a}});
//# sourceMappingURL=app.2aa70e23.js.map