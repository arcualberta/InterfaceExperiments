(function(t){function e(e){for(var n,i,l=e[0],u=e[1],s=e[2],p=0,d=[];p<l.length;p++)i=l[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);c&&c(e);while(d.length)d.shift()();return r.push.apply(r,s||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,l=1;l<a.length;l++){var u=a[l];0!==o[u]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},o={app:0},r=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var s=0;s<l.length;s++)e(l[s]);var c=u;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"1a37":function(t,e,a){},"61bd":function(t,e,a){},"8cf4":function(t,e,a){"use strict";var n=a("61bd"),o=a.n(n);o.a},cb76:function(t,e,a){"use strict";var n=a("1a37"),o=a.n(n);o.a},cd49:function(t,e,a){"use strict";a.r(e);var n=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("router-view")},r=[],i=a("d225"),l=a("308d"),u=a("6bb5"),s=a("4e2b"),c=a("9ab4"),p=a("60a3"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"preview-container"},[a("div",[t._v("I am a preview page.")]),a("button",{on:{click:t.returnToEditor}},[t._v("Back to Editing")]),a("div",[t._v(t._s(this.$store.getters.getTitle))]),a("div",[t._v(t._s(this.$store.getters.getSubTitle))]),a("div",[t._v(t._s(this.$store.state))])])},b=[],m=(a("a481"),a("b0b4")),f=function(t){function e(){return Object(i["a"])(this,e),Object(l["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(s["a"])(e,t),Object(m["a"])(e,[{key:"returnToEditor",value:function(){this.$router.replace("/")}}]),e}(p["c"]);f=c["a"]([p["a"]],f);var v=f,h=v,g=a("2877"),O=Object(g["a"])(h,d,b,!1,null,"f34fe510",null),y=O.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"button-header"},[a("button",{on:{click:t.openPreview}},[t._v("\n            Preview\n        ")])]),a("div",{staticClass:"overall-container"},[a("div",{staticClass:"home"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.titleValue,expression:"titleValue"}],attrs:{placeholder:"Title",value:"titleValue"},domProps:{value:t.titleValue},on:{input:function(e){e.target.composing||(t.titleValue=e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.subTitleValue,expression:"subTitleValue"}],attrs:{placeholder:"Sub Title",value:"subTitleValue"},domProps:{value:t.subTitleValue},on:{input:function(e){e.target.composing||(t.subTitleValue=e.target.value)}}}),a("p",[t._v("Homescreen, need to add components for the bits here!")]),a("draggable",{staticClass:"draggable-item-container",attrs:{list:t.portalElements,group:"sharedItems",handle:".handle"}},t._l(t.portalElements,function(e,n){return a("div",{key:n,staticClass:"draggable-item",on:{click:function(a){t.showModal(e.type)}}},[a("i",{staticClass:"handle draggable"},[t._v("HANDLE")]),a("DragItem",{attrs:{idNum:e.id,indexNum:n,deleteable:!0},on:{"delete-item":function(e){t.deleteItem(e)}}})],1)}))],1),a("div",{staticClass:"draggable-item-container"},[a("h2",{staticClass:"draggable-header"},[t._v("Layout Options")]),a("draggable",{attrs:{list:t.layoutItems,group:{name:"sharedItems",pull:"clone",put:!1}}},t._l(t.layoutItems,function(t){return a("div",{key:t.id,staticClass:"draggable-item draggable"},[a("DragItem",{attrs:{idNum:t.id,deleteable:!1}})],1)}))],1)])])},_=[],T=a("310e"),I=a.n(T),w=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(l["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.itemsPlaced=[],t.layoutItems=[{name:"Image Carousel",id:5,type:"carousel"},{name:"Form",id:6,type:"form"},{name:"Description",id:7,type:"description"}],t}return Object(s["a"])(e,t),Object(m["a"])(e,[{key:"openPreview",value:function(){this.$router.replace("preview")}},{key:"deleteItem",value:function(t){this.$store.dispatch("deletePortalItem",t)}},{key:"showModal",value:function(t){console.log("showing modal"),this.$modal.show("Carousel")}},{key:"titleValue",get:function(){return this.$store.getters.getTitle},set:function(t){this.$store.commit("updateTitle",t)}},{key:"subTitleValue",get:function(){return this.$store.getters.getSubTitle},set:function(t){this.$store.commit("updateSubTitle",t)}},{key:"portalElements",get:function(){return this.$store.getters.getPortalItems},set:function(t){this.$store.dispatch("updatePortalItems",t)}}]),e}(p["c"]);w=c["a"]([Object(p["a"])({components:{draggable:I.a}})],w);var P=w,x=P,$=(a("cb76"),Object(g["a"])(x,j,_,!1,null,"2559d8b6",null)),C=$.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"item"},[a("div",{staticClass:"label"},[t._v("\n        I am item #"+t._s(t.idNum)+"\n    ")]),t.deleteable?a("div",[a("button",{on:{click:t.deleteItem}},[t._v("X")])]):t._e()])},E=[],S=function(t){function e(){return Object(i["a"])(this,e),Object(l["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(s["a"])(e,t),Object(m["a"])(e,[{key:"deleteItem",value:function(){this.$emit("delete-item",this.indexNum)}}]),e}(p["c"]);c["a"]([Object(p["b"])()],S.prototype,"idNum",void 0),c["a"]([Object(p["b"])()],S.prototype,"indexNum",void 0),c["a"]([Object(p["b"])()],S.prototype,"deleteable",void 0),S=c["a"]([p["a"]],S);var V=S,N=V,M=(a("8cf4"),Object(g["a"])(N,k,E,!1,null,"f417c2a8",null)),D=M.exports,H=function(t){function e(){return Object(i["a"])(this,e),Object(l["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(s["a"])(e,t),e}(p["c"]);H=c["a"]([Object(p["a"])({components:{DragItem:D,Home:C,Preview:y}})],H);var L=H,A=L,B=Object(g["a"])(A,o,r,!1,null,null,null),J=B.exports,F=(a("54ba"),a("2f62")),X={state:{title:null,subTitle:null,portalItems:Array()},getters:{getTitle:function(t){return t.title||""},getSubTitle:function(t){return t.subTitle||""},getPortalItems:function(t){return t.portalItems||[]}},actions:{updatePortalItems:function(t,e){var a=t.commit;a("updatePortalItems",e)},deletePortalItem:function(t,e){var a=t.commit;a("deleteLayoutItem",e)}},mutations:{updateTitle:function(t,e){t.title=e},updateSubTitle:function(t,e){t.subTitle=e},updateLayoutItems:function(t,e){t.portalElements=e},deleteLayoutItem:function(t,e){t.portalItems.splice(e,1)}}},q=X;n["default"].use(F["a"]);var z=new F["a"].Store({modules:{home:q}}),G=a("8c4f"),K=a("1881"),Q=a.n(K),R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("modal",{staticClass:"popup-modal"})},U=[],W=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(l["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.title="",t.description="",t.buttonText1="Close",t.buttonText2="",t.tabTitle1="",t.tabTitle2="",t.tabTitle3="",t}return Object(s["a"])(e,t),e}(p["c"]);c["a"]([Object(p["b"])()],W.prototype,"title",void 0),c["a"]([Object(p["b"])()],W.prototype,"description",void 0),c["a"]([Object(p["b"])()],W.prototype,"buttonText1",void 0),c["a"]([Object(p["b"])()],W.prototype,"buttonText2",void 0),c["a"]([Object(p["b"])()],W.prototype,"tabTitle1",void 0),c["a"]([Object(p["b"])()],W.prototype,"tabTitle2",void 0),c["a"]([Object(p["b"])()],W.prototype,"tabTitle3",void 0),W=c["a"]([Object(p["a"])({})],W);var Y=W,Z=Y,tt=Object(g["a"])(Z,R,U,!1,null,"ff353ae6",null),et=tt.exports,at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("modal",{staticClass:"popup-modal"},[a("Hey",[t._v("Im the child component")])],1)},nt=[],ot=function(t){function e(){return Object(i["a"])(this,e),Object(l["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(s["a"])(e,t),e}(et);ot=c["a"]([p["a"]],ot);var rt=ot,it=rt,lt=Object(g["a"])(it,at,nt,!1,null,"caa651e4",null),ut=lt.exports;n["default"].config.productionTip=!0;var st=[{path:"/",component:C},{path:"/preview",component:y}];n["default"].use(Q.a),n["default"].use(G["a"]);var ct=new G["a"]({routes:st});n["default"].component("DragItem",D),n["default"].component("Home",C),n["default"].component("Preview",y),n["default"].component("Carousel",ut),n["default"].component("ModalContentsBase",et),new n["default"]({store:z,router:ct,render:function(t){return t(J)}}).$mount("#app")}});
//# sourceMappingURL=app.a774cdc3.js.map