(function(t){function e(e){for(var a,r,l=e[0],u=e[1],s=e[2],d=0,b=[];d<l.length;d++)r=l[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&b.push(i[r][0]),i[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);c&&c(e);while(b.length)b.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,l=1;l<n.length;l++){var u=n[l];0!==i[u]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},i={app:0},o=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var s=0;s<l.length;s++)e(l[s]);var c=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"26f4":function(t,e,n){"use strict";var a=n("75ee"),i=n.n(a);i.a},"61bd":function(t,e,n){},"75ee":function(t,e,n){},"8cf4":function(t,e,n){"use strict";var a=n("61bd"),i=n.n(a);i.a},cd49:function(t,e,n){"use strict";n.r(e);var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-view")},o=[],r=n("d225"),l=n("308d"),u=n("6bb5"),s=n("4e2b"),c=n("9ab4"),d=n("60a3"),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"preview-container"},[n("div",[t._v("I am a preview page.")]),n("button",{on:{click:t.returnToEditor}},[t._v("Back to Editing")]),n("div",[t._v(t._s(this.$store.getters.getTitle))]),n("div",[t._v(t._s(this.$store.getters.getSubTitle))]),n("div",[t._v(t._s(this.$store.state))])])},p=[],m=(n("a481"),n("b0b4")),v=function(t){function e(){return Object(r["a"])(this,e),Object(l["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(s["a"])(e,t),Object(m["a"])(e,[{key:"returnToEditor",value:function(){this.$router.replace("/")}}]),e}(d["c"]);v=c["a"]([d["a"]],v);var f=v,h=f,g=n("2877"),_=Object(g["a"])(h,b,p,!1,null,"f34fe510",null),y=_.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"button-header"},[n("button",{on:{click:t.openPreview}},[t._v("\n            Preview\n        ")])]),n("div",{staticClass:"overall-container"},[n("div",{staticClass:"home"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.titleValue,expression:"titleValue"}],attrs:{placeholder:"Title",value:"titleValue"},domProps:{value:t.titleValue},on:{input:function(e){e.target.composing||(t.titleValue=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.subTitleValue,expression:"subTitleValue"}],attrs:{placeholder:"Sub Title",value:"subTitleValue"},domProps:{value:t.subTitleValue},on:{input:function(e){e.target.composing||(t.subTitleValue=e.target.value)}}}),n("p",[t._v("Homescreen, need to add components for the bits here!")]),n("draggable",{staticClass:"draggable-item-container",attrs:{list:t.portalElements,group:"sharedItems",handle:".handle"}},t._l(t.portalElements,function(e,a){return n("div",{key:a,staticClass:"draggable-item",on:{click:function(n){t.showModal(e.type)}}},[n("i",{staticClass:"handle draggable"},[t._v("HANDLE")]),n("DragItem",{attrs:{idNum:e.id,indexNum:a,deleteable:!0},on:{"delete-item":function(e){t.deleteItem(e)}}})],1)}))],1),n("div",{staticClass:"draggable-item-container"},[n("h2",{staticClass:"draggable-header"},[t._v("Layout Options")]),n("draggable",{attrs:{list:t.layoutItems,group:{name:"sharedItems",pull:"clone",put:!1}}},t._l(t.layoutItems,function(t){return n("div",{key:t.id,staticClass:"draggable-item draggable"},[n("DragItem",{attrs:{idNum:t.id,deleteable:!1}})],1)}))],1)]),n("modals-container")],1)},j=[],T=n("310e"),I=n.n(T),w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("h3",[t._v("I am a title")]),n("button",[t._v(t._s(t.tabTitle1))]),n("button",[t._v(t._s(t.tabTitle2))]),n("button",[t._v(t._s(t.tabTitle3))])]),n("div",[t._v(t._s(t.description))]),n("div"),n("input",{attrs:{type:"checkbox",name:"agreement",checked:""}}),n("button",[t._v(t._s(t.buttonText1))]),n("button",[t._v(t._s(t.buttonText2))])])},x=[],P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("h3",[t._v("I am a title")]),n("button",[t._v(t._s(t.tabTitle1))]),n("button",[t._v(t._s(t.tabTitle2))]),n("button",[t._v(t._s(t.tabTitle3))])]),n("div",[t._v(t._s(t.description))]),n("button",[t._v(t._s(t.buttonText1))]),n("button",[t._v(t._s(t.buttonText2))])])},k=[],$=function(t){function e(){var t;return Object(r["a"])(this,e),t=Object(l["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.title="",t.description="",t.buttonText1="Close",t.buttonText2="",t.tabTitle1="",t.tabTitle2="",t.tabTitle3="",t}return Object(s["a"])(e,t),e}(d["c"]);$=c["a"]([Object(d["a"])({})],$);var C=$,E=C,S=Object(g["a"])(E,P,k,!1,null,"65789606",null),V=S.exports,N=function(t){function e(){return Object(r["a"])(this,e),Object(l["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(s["a"])(e,t),e}(V);N=c["a"]([Object(d["a"])({})],N);var M=N,D=M,L=Object(g["a"])(D,w,x,!1,null,"89ee68be",null),H=L.exports,B=function(t){function e(){var t;return Object(r["a"])(this,e),t=Object(l["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.itemsPlaced=[],t.layoutItems=[{name:"Image Carousel",id:5,type:"carousel"},{name:"Form",id:6,type:"form"},{name:"Description",id:7,type:"description"}],t}return Object(s["a"])(e,t),Object(m["a"])(e,[{key:"openPreview",value:function(){this.$router.replace("preview")}},{key:"deleteItem",value:function(t){this.$store.dispatch("deletePortalItem",t)}},{key:"showModal",value:function(t){console.log("showing modal"),this.$modal.show(H,{title:"My Modal!",description:"a description of the modal",buttonText1:"Button is me",buttonText2:""})}},{key:"titleValue",get:function(){return this.$store.getters.getTitle},set:function(t){this.$store.commit("updateTitle",t)}},{key:"subTitleValue",get:function(){return this.$store.getters.getSubTitle},set:function(t){this.$store.commit("updateSubTitle",t)}},{key:"portalElements",get:function(){return this.$store.getters.getPortalItems},set:function(t){this.$store.dispatch("updatePortalItems",t)}}]),e}(d["c"]);B=c["a"]([Object(d["a"])({components:{draggable:I.a}})],B);var A=B,J=A,F=(n("26f4"),Object(g["a"])(J,O,j,!1,null,"6d64b0c4",null)),X=F.exports,q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item"},[n("div",{staticClass:"label"},[t._v("\n        I am item #"+t._s(t.idNum)+"\n    ")]),t.deleteable?n("div",[n("button",{on:{click:t.deleteItem}},[t._v("X")])]):t._e()])},z=[],G=function(t){function e(){return Object(r["a"])(this,e),Object(l["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(s["a"])(e,t),Object(m["a"])(e,[{key:"deleteItem",value:function(){this.$emit("delete-item",this.indexNum)}}]),e}(d["c"]);c["a"]([Object(d["b"])()],G.prototype,"idNum",void 0),c["a"]([Object(d["b"])()],G.prototype,"indexNum",void 0),c["a"]([Object(d["b"])()],G.prototype,"deleteable",void 0),G=c["a"]([d["a"]],G);var K=G,Q=K,R=(n("8cf4"),Object(g["a"])(Q,q,z,!1,null,"f417c2a8",null)),U=R.exports,W=function(t){function e(){return Object(r["a"])(this,e),Object(l["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(s["a"])(e,t),e}(d["c"]);W=c["a"]([Object(d["a"])({components:{DragItem:U,Home:X,Preview:y}})],W);var Y=W,Z=Y,tt=Object(g["a"])(Z,i,o,!1,null,null,null),et=tt.exports,nt=(n("54ba"),n("2f62")),at={state:{title:null,subTitle:null,portalItems:Array()},getters:{getTitle:function(t){return t.title||""},getSubTitle:function(t){return t.subTitle||""},getPortalItems:function(t){return t.portalItems||[]}},actions:{updatePortalItems:function(t,e){var n=t.commit;n("updatePortalItems",e)},deletePortalItem:function(t,e){var n=t.commit;n("deleteLayoutItem",e)}},mutations:{updateTitle:function(t,e){t.title=e},updateSubTitle:function(t,e){t.subTitle=e},updateLayoutItems:function(t,e){t.portalElements=e},deleteLayoutItem:function(t,e){t.portalItems.splice(e,1)}}},it=at;a["default"].use(nt["a"]);var ot=new nt["a"].Store({modules:{home:it}}),rt=n("8c4f"),lt=n("1881"),ut=n.n(lt);a["default"].config.productionTip=!0;var st=[{path:"/",component:X},{path:"/preview",component:y}];a["default"].use(ut.a,{dynamic:!0,dynamicDefaults:{clickToClose:!1}}),a["default"].use(rt["a"]);var ct=new rt["a"]({routes:st});a["default"].component("DragItem",U),a["default"].component("Home",X),a["default"].component("Preview",y),a["default"].component("Carousel",H),a["default"].component("ModalContentsBase",V),new a["default"]({store:ot,router:ct,render:function(t){return t(et)}}).$mount("#app")}});
//# sourceMappingURL=app.686bb23b.js.map