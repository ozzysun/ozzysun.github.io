(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"50b4":function(t,e,a){"use strict";a.d(e,"d",(function(){return n})),a.d(e,"a",(function(){return s})),a.d(e,"f",(function(){return o})),a.d(e,"g",(function(){return i})),a.d(e,"e",(function(){return r})),a.d(e,"h",(function(){return l})),a.d(e,"b",(function(){return c})),a.d(e,"c",(function(){return d})),a.d(e,"i",(function(){return u}));const n=t=>t.add&&t.add>0?`${t.name}(+${t.add})`:t.name,s=t=>({id:t.id,product:t,qty:1,taste:{},toppings:[],capacity:""}),o=(t,e,a)=>{let s=null;return a.product.taste.forEach((a=>{a.id===t&&a.items.forEach((t=>{t.id===e&&(s=t)}))})),null!==s?n(s):""},i=t=>{const e=[];return t.items.forEach((a=>{const s={label:n(a),value:{key:t.id,value:a.id}};e.push(s)})),e},r=(t,e)=>{let a=null;return t.forEach((t=>{t.id===e.id&&(a=t)})),a},l=(t,e,a,n)=>{const s=a.id,o=n.id;let i=!1,r=null;return t.forEach((t=>{t.id===s&&(r=t)})),null!==r&&r[e]&&-1!==r[e].indexOf(o)&&(i=!0),i},c=t=>{const e=[];for(const a in t.taste)t.product.taste.forEach((n=>{n.id===a&&e.push(`${n.name}(${o(a,t.taste[a],t)})`)}));return t.toppings.length>0&&t.toppings.forEach((a=>{t.product.toppings.forEach((t=>{t.id===a&&e.push(t.name)}))})),""!==t.capacity&&t.product.capacity.forEach((a=>{a.id===t.capacity&&e.push(a.name)})),e.join(",")},d=t=>{let e=t.product.price;for(const a in t.taste){const n=t.taste[a];t.product.taste.forEach((t=>{t.id===a&&t.items.forEach((t=>{t.id===n&&void 0!==t.add&&t.add>0&&(e+=t.add)}))}))}return t.toppings.length>0&&t.toppings.forEach((a=>{t.product.toppings.forEach((t=>{t.id===a&&void 0!==t.add&&(e+=t.add)}))})),""!==t.capacity&&t.product.capacity.forEach((a=>{a.id===t.capacity&&void 0!==a.add&&(e+=a.add)})),e*t.qty},u=t=>{let e=0,a=0;return t.forEach((t=>{e+=d(t),a+=t.qty})),{totalPrice:e,count:t.length,itemsCount:a}}},"713b":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-header",{class:"glossy bg-"+t.theme,attrs:{elevated:""}},[a("q-toolbar",[a("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}}),a("q-toolbar-title",[t._v("\n        "+t._s(t.title)+"\n      ")]),a("q-btn",{staticClass:"q-mr-sm",attrs:{flat:"",icon:"colorize",size:"sm"},on:{click:t.openSetting}}),a("cart-btn")],1)],1),a("q-drawer",{attrs:{"show-if-above":"",bordered:"","content-class":"bg-"+t.theme+"-4"},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[a("q-list",[a("q-item-label",{staticClass:"text-grey-8",attrs:{header:""}},[a("img",{attrs:{src:t.logoSrc}})]),t._l(t.menuData,(function(e){return a("EssentialLink",t._b({key:e.title},"EssentialLink",e,!1))}))],2)],1),a("q-page-container",[a("router-view")],1)],1)},s=[],o=a("ded3"),i=a.n(o),r=a("efea"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-item",{attrs:{clickable:""},on:{click:function(e){return t.clickLink(t.link)}}},[t.icon?a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:t.icon}})],1):t._e(),a("q-item-section",[a("q-item-label",[t._v(t._s(t.title))]),a("q-item-label",{attrs:{caption:""}},[t._v("\n      "+t._s(t.caption)+"\n    ")])],1)],1)},c=[],d=(a("5319"),a("2f62")),u={name:"EssentialLink",extends:r["a"],props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""},external:{type:Boolean,default:!1}},computed:i()({},Object(d["b"])(["shop","branch"])),methods:{getLink(t){const e=t.replace(":shop",this.shop).replace(":branch",this.branch);return e},clickLink(t){const e=t.replace(":shop",this.shop).replace(":branch",this.branch);this.to(e)}}},h=u,m=a("2877"),p=a("66e5"),f=a("4074"),b=a("0016"),v=a("0170"),g=a("eebe"),q=a.n(g),_=Object(m["a"])(h,l,c,!1,null,null,null),w=_.exports;q()(_,"components",{QItem:p["a"],QItemSection:f["a"],QIcon:b["a"],QItemLabel:v["a"]});var y=a("b75d"),I={name:"MainLayout",extends:r["a"],components:{EssentialLink:w,cartBtn:y["a"]},data(){return{leftDrawerOpen:!1}},computed:i()(i()({},Object(d["b"])(["menuData","shop","branch","storeInfo","theme"])),{},{title(){return null!==this.storeInfo?this.storeInfo.name:"menu"},logoSrc(){return null!==this.storeInfo?this.storeInfo.logo:"https://lh3.googleusercontent.com/ompOJ7JFwgEs_th7oJ_rvDQTzzN3gPSuF7JwejLEsXFi-GYWC9MW-JNwb06DIXwL3DQBG760d3TWG0zfjA=s239-c"}}),methods:{openSetting(){const t=`/${this.shop}/${this.branch}/setting`;this.to(t)}}},D=I,Q=a("4d5a"),k=a("e359"),x=a("65c6"),$=a("9c40"),O=a("6ac5"),E=a("9404"),C=a("1c1c"),M=a("09e3"),S=Object(m["a"])(D,n,s,!1,null,null,null);e["default"]=S.exports;q()(S,"components",{QLayout:Q["a"],QHeader:k["a"],QToolbar:x["a"],QBtn:$["a"],QToolbarTitle:O["a"],QDrawer:E["a"],QList:C["a"],QItemLabel:v["a"],QPageContainer:M["a"]})},b75d:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("q-btn",{attrs:{round:"",color:t.theme,icon:"shopping_cart"},on:{click:function(e){return t.showModal("cartModal")}}}),a("cart-modal",{attrs:{id:"cartModal",title:"購物車"}})],1)},s=[],o=a("ded3"),i=a.n(o),r=(a("e6cf"),a("efea")),l=a("2f62"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-dialog",{attrs:{persistent:"","full-width":t.fullscreen},model:{value:t.isVisible,callback:function(e){t.isVisible=e},expression:"isVisible"}},[a("q-card",{staticClass:"q-ma-xs",staticStyle:{"max-width":"80vw",width:"1000px"}},[a("q-card-section",[a("q-toolbar",{class:["bg-"+t.theme+"-4","text-"+t.theme+"-invert"]},[a("q-toolbar-title",[a("span",{staticClass:"text-weight-bold"},[t._v(t._s(t.title))])]),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",round:"",dense:"",icon:"close"}})],1)],1),a("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"60vh"}},[a("q-list",{staticClass:"q-gutter-sm",staticStyle:{width:"100%"},attrs:{bordered:"",separator:""}},t._l(t.orderItems,(function(e){return a("q-item",{key:"m_p_"+e.id},[a("q-item-section",{staticClass:"q-ml-none",attrs:{top:"",thumbnail:""}},[a("img",{attrs:{src:e.product.img}})]),a("q-item-section",[a("q-item-label",[t._v(t._s(e.product.name)+"($"+t._s(e.product.price)+")* "+t._s(e.qty))]),a("q-item-label",{attrs:{caption:""}},[t._v("$"+t._s(t.getItemExtraInfo(e)))]),a("q-item-label",{attrs:{caption:""}},[t._v("$"+t._s(t.getItemPrice(e)))])],1),a("q-item-section",{attrs:{side:"",top:""}},[a("q-btn",{attrs:{round:"",color:"deep-orange",icon:"delete_forever"},on:{click:function(a){return t.removeItem(e)}}})],1)],1)})),1)],1),a("q-card-section",[a("div",[t._v("品項："+t._s(t.orderInfo(t.orderItems).count)+" 數量："+t._s(t.orderInfo(t.orderItems).itemsCount)+" 金額："+t._s(t.orderInfo(t.orderItems).totalPrice))])]),a("q-separator"),a("q-card-actions",{attrs:{align:"center"}},[a("q-btn",{attrs:{size:"sm"},on:{click:t.close}},[t._v("取消")]),a("q-btn",{attrs:{color:t.theme,size:"sm"},on:{click:t.save}},[t._v("送出")])],1)],1)],1)},d=[],u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-dialog",{attrs:{persistent:"","full-width":t.fullscreen},model:{value:t.isVisible,callback:function(e){t.isVisible=e},expression:"isVisible"}},[a("q-card",{staticClass:"q-ma-xs",staticStyle:{"max-width":"80vw",width:"1000px",height:"800px","mex-height":"80vh"}},[a("q-card-section",[a("q-toolbar",{class:["bg-"+t.theme+"-4","text-"+t.theme+"-invert"]},[a("q-toolbar-title",[a("span",{staticClass:"text-weight-bold"},[t._v(t._s(t.title))])]),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",round:"",dense:"",icon:"close"}})],1)],1),a("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"60vh"}})],1)],1)},h=[],m={name:"VModal",extends:r["a"],props:{title:{type:String,default:"title"},isAppend:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1}},data(){return{modalData:{},isVisible:!1,openerId:null}},watch:{isVisible(t){if(t){const t=this.haveModalData()?this.getModalData():{};this.$set(this,"modalData",t),this.dataReady(),setTimeout((()=>{}),100)}}},created(){},mounted(){this.addInsideModalHandler()},methods:{addInsideModalHandler(){this.on("Modal.CMD.Show",((t,e,a=null,n=!1)=>{t===this.id&&(null!==a&&(this.openerId=a),this.isVisible=e)}))},addEventHandler(){},dataReady(){},dispatchData(t=null,e=!0){null===t&&(t=this.modalData),this.emit("Modal.DispatchData",this.id,t,this.openerId),e&&this.close()},close(){this.isVisible=!1},modalBgClicked(){const t=document.querySelector(".v-modal");null!==t&&t.addEventListener("click",(t=>{this.close()}))}}},p=m,f=a("2877"),b=a("24e8"),v=a("f09f"),g=a("a370"),q=a("65c6"),_=a("6ac5"),w=a("9c40"),y=a("7f67"),I=a("eebe"),D=a.n(I),Q=Object(f["a"])(p,u,h,!1,null,"d7dab130",null),k=Q.exports;D()(Q,"components",{QDialog:b["a"],QCard:v["a"],QCardSection:g["a"],QToolbar:q["a"],QToolbarTitle:_["a"],QBtn:w["a"]}),D()(Q,"directives",{ClosePopup:y["a"]});var x=a("50b4"),$={name:"CartModal",extends:k,data(){return{columns:[]}},computed:i()({},Object(l["b"])(["shop","branch","theme","orderItems"])),watch:{},created(){this.columns=[{}]},mounted(){},methods:{getItemPrice:x["c"],getItemExtraInfo:x["b"],orderInfo:x["i"],removeItem(t){this.dispatch("RemoveOrderItem",t)},save(){this.alert(`訂單已送出 總金額${this.orderInfo(this.orderItems).totalPrice}`),this.afterSave()},afterSave(){console.log("do after send.."),this.dispatch("ResetOrder"),this.close()}}},O=$,E=a("1c1c"),C=a("66e5"),M=a("4074"),S=a("0170"),j=a("eb85"),L=a("4b7e"),P=Object(f["a"])(O,c,d,!1,null,"43f6769a",null),T=P.exports;D()(P,"components",{QDialog:b["a"],QCard:v["a"],QCardSection:g["a"],QToolbar:q["a"],QToolbarTitle:_["a"],QBtn:w["a"],QList:E["a"],QItem:C["a"],QItemSection:M["a"],QItemLabel:S["a"],QSeparator:j["a"],QCardActions:L["a"]}),D()(P,"directives",{ClosePopup:y["a"]});var V={name:"CartBtn",extends:r["a"],components:{cartModal:T},data(){return{items:[],selected:[],model:3}},computed:i()({},Object(l["b"])(["shop","branch","theme"])),async created(){},methods:{}},B=V,H=Object(f["a"])(B,n,s,!1,null,null,null);e["a"]=H.exports;D()(H,"components",{QBtn:w["a"]})},efea:function(t,e,a){"use strict";a("ddb0"),a("e6cf");var n=a("2b0e");let s=null;null===s&&(s=new n["a"]({data(){return{classNames:[]}},methods:{on(t,e,a){if(Object.defineProperty(a,"fnName",{value:e}),void 0===this._events[t])this.$on(t,a);else{let n=!1;for(let s=0;s<this._events[t].length;s++)if(this._events[t][s].fnName===e){n=!0,this._events[t][s]=a;break}n||this.$on(t,a)}},emit(t,...e){this.$emit(t,...e)},off(t,e){this.$off(t)}}}));var o,i,r=s,l=a("71f5"),c=a("7b12"),d=a("2ef0"),u=a.n(d),h={name:"VComponent",data(){return{}},computed:{params(){return this.$route.params},uid(){return`uid_${this._uid}`},id(){let t=void 0===this.$el||void 0===this.$el.getAttribute?null:this.$el.getAttribute("id");return void 0!==this.$attrs&&this.$attrs.id&&(t=this.$attrs.id),t},query(){return this.$route.query}},methods:{addModalHandler(t=null){this.on("Modal.DispatchData",((e,a,n=null)=>{null!==n&&n!==this.id||(null===t?this.modalHandler(e,a):t(e,a))}))},modalHandler(t,e,a=null){},showModal(t,e=null,a=null,n=!1){null!==e&&this.setModalData(e),this.emit("Modal.CMD.Show",t,!0,a,n)},setModalData(t){Object(l["d"])("modalData",t,"tmp")},haveModalData(){return null!==Object(l["b"])("modalData","tmp")},getModalData(){const t=u.a.cloneDeep(Object(l["b"])("modalData","tmp"));return Object(l["c"])("modalData","tmp"),t},hideModal(t){this.emit("Modal.CMD.Show",t,!1)},on(t,...e){let a,n;const s=t.split(",");1===e.length?(a=e[0],n=this.id):2===e.length&&(n=e[0],a=e[1]);for(let o=0;o<s.length;o++)r.on(s[o],n,a)},emit(t,...e){r.emit(t,...e)},off(t,e){r.off(t,e)},async fetch(t,...e){const a=Object(c["b"])();return new Promise(((n,s)=>{a[t](...e).then((t=>{n(t)})).catch((t=>{s(t)}))}))},fetchSync(t,...e){const a=Object(c["b"])(),n=e.pop();a[t](...e).then((t=>{n(null,t)})).catch((t=>{n(t,t)}))},async fetchURL(t,e="GET",a=null){return new Promise(((n,s)=>{Object(c["a"])(t,e,a).then((t=>{n(t)})).catch((t=>{s(t)}))}))},async dispatch(t,...e){return new Promise(((a,n)=>{const s=1===e.length?e[0]:e;this.$store.dispatch(t,s).then((t=>{a(t)})).catch((t=>{n(t)}))}))},to(t){this.$router.push(t)},setReactive(t,e){this[t]=Object.assign({},e,e)},trace(t){console.log(t)},alert(t,e="",a=null){this.$q.dialog({title:e,message:t}).onOk((()=>{null!==a&&a()})).onCancel((()=>{})).onDismiss((()=>{}))},confirm(t,e="",a=null){this.$q.dialog({title:e,message:t,cancel:!0,persistent:!0}).onOk((()=>{null!==a&&a()})).onOk((()=>{})).onCancel((()=>{})).onDismiss((()=>{}))}}},m=h,p=a("2877"),f=Object(p["a"])(m,o,i,!1,null,null,null);e["a"]=f.exports}}]);