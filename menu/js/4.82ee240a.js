(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"0f10":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"flex flex-center"},[a("q-list",{staticClass:"q-gutter-sm",staticStyle:{width:"100%"},attrs:{bordered:"",separator:""}},[t._l(t.items,(function(e){return a("q-expansion-item",{key:"p_"+e.id,scopedSlots:t._u([{key:"header",fn:function(){return[a("q-item-section",{staticClass:"q-ml-none",attrs:{top:"",thumbnail:""}},[a("img",{attrs:{src:e.img}})]),a("q-item-section",[a("q-item-label",[t._v(t._s(e.name))]),a("q-item-label",{attrs:{caption:""}},[t._v("$"+t._s(e.price))])],1),a("q-item-section",{attrs:{side:"",top:""}},[a("q-item-label",{attrs:{caption:""}},[a("q-checkbox",{attrs:{val:e.id,color:t.theme},on:{input:function(a,s){return t.inputHandler(a,s,e)}},model:{value:t.selectedId,callback:function(e){t.selectedId=e},expression:"selectedId"}})],1)],1)]},proxy:!0}],null,!0)},[a("q-card",[a("q-card-section",[a("q-list",[a("q-item",{attrs:{clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[t._v("\n                數量\n              ")]),a("q-item-section",[a("q-input",{staticStyle:{"max-width":"100px"},attrs:{type:"number",filled:"",dense:""},model:{value:t.model,callback:function(e){t.model=t._n(e)},expression:"model"}})],1)],1),a("q-item",{attrs:{clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[t._v("\n                加料\n              ")]),a("q-item-section")],1)],1)],1)],1)],1)})),a("q-item",[a("q-space"),a("q-space")],1)],2),a("q-page-sticky",{attrs:{position:"bottom-right",offset:[20,10]}},[a("cart-btn")],1)],1)},i=[],n=a("ded3"),l=a.n(n),o=(a("e6cf"),a("efea")),c=a("2f62"),r=a("b75d"),d={name:"PageIndex",extends:o["a"],components:{cartBtn:r["a"]},data(){return{items:[],selectedId:[],model:1}},computed:l()({},Object(c["b"])(["shop","branch","orderItems","theme"])),async created(){this.selectedId=[],this.items=await this.loadData(),this.items.forEach((t=>{this.isSelected(t.id)&&this.selectedId.push(t.id)}))},watch:{orderItems(){this.selectedId=[],this.items.forEach((t=>{this.isSelected(t.id)&&this.selectedId.push(t.id)}))}},methods:{async loadData(){const t=await this.fetch("productList",this.shop,this.branch,this.params.cid);return t.data},inputHandler(t,e,a){-1===t.indexOf(a.id)?(console.log(`移除${a.id}`),this.dispatch("RemoveOrderItem",a)):(console.log(`加入${a.id}`),this.dispatch("AddOrderItem",a))},isSelected(t){let e=!1;return this.orderItems.forEach((a=>{a.id===t&&(e=!0)})),e}}},h=d,m=a("2877"),u=a("9989"),p=a("1c1c"),b=a("3b73"),f=a("4074"),v=a("0170"),q=a("8f8e"),g=a("f09f"),_=a("a370"),x=a("66e5"),I=a("27f9"),w=a("2c91"),Q=a("de5e"),y=a("9c40"),C=a("eebe"),D=a.n(C),S=Object(m["a"])(h,s,i,!1,null,null,null);e["default"]=S.exports;D()(S,"components",{QPage:u["a"],QList:p["a"],QExpansionItem:b["a"],QItemSection:f["a"],QItemLabel:v["a"],QCheckbox:q["a"],QCard:g["a"],QCardSection:_["a"],QItem:x["a"],QInput:I["a"],QSpace:w["a"],QPageSticky:Q["a"],QBtn:y["a"]})},b75d:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("q-btn",{attrs:{round:"",color:t.theme,icon:"shopping_cart"},on:{click:function(e){return t.showModal("cartModal")}}}),a("cart-modal",{attrs:{id:"cartModal",title:"購物車"}})],1)},i=[],n=a("ded3"),l=a.n(n),o=(a("e6cf"),a("efea")),c=a("2f62"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-dialog",{attrs:{persistent:"","full-width":t.fullscreen},model:{value:t.isVisible,callback:function(e){t.isVisible=e},expression:"isVisible"}},[a("q-card",{staticClass:"q-ma-xs",staticStyle:{"max-width":"80vw",width:"1000px"}},[a("q-card-section",[a("q-toolbar",{class:["bg-"+t.theme+"-4","text-"+t.theme+"-invert"]},[a("q-toolbar-title",[a("span",{staticClass:"text-weight-bold"},[t._v(t._s(t.title))])]),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",round:"",dense:"",icon:"close"}})],1)],1),a("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"60vh"}},[a("q-list",{staticClass:"q-gutter-sm",staticStyle:{width:"100%"},attrs:{bordered:"",separator:""}},t._l(t.orderItems,(function(e){return a("q-item",{key:"m_p_"+e.id},[a("q-item-section",{staticClass:"q-ml-none",attrs:{top:"",thumbnail:""}},[a("img",{attrs:{src:e.img}})]),a("q-item-section",[a("q-item-label",[t._v(t._s(e.name))]),a("q-item-label",{attrs:{caption:""}},[t._v("$"+t._s(e.price))])],1),a("q-item-section",{attrs:{side:"",top:""}},[a("q-btn",{attrs:{round:"",color:"deep-orange",icon:"delete_forever"},on:{click:function(a){return t.removeItem(e)}}})],1)],1)})),1)],1),a("q-card-section",[a("div",[t._v("品項："+t._s(t.countInfo.count)+"個 金額："+t._s(t.countInfo.total))])]),a("q-separator"),a("q-card-actions",{attrs:{align:"center"}},[a("q-btn",{attrs:{size:"sm"},on:{click:t.close}},[t._v("取消")]),a("q-btn",{attrs:{color:t.theme,size:"sm"},on:{click:t.save}},[t._v("送出")])],1)],1)],1)},d=[],h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-dialog",{attrs:{persistent:"","full-width":t.fullscreen},model:{value:t.isVisible,callback:function(e){t.isVisible=e},expression:"isVisible"}},[a("q-card",{staticClass:"q-ma-xs",staticStyle:{"max-width":"80vw",width:"1000px",height:"800px","mex-height":"80vh"}},[a("q-card-section",[a("q-toolbar",{class:["bg-"+t.theme+"-4","text-"+t.theme+"-invert"]},[a("q-toolbar-title",[a("span",{staticClass:"text-weight-bold"},[t._v(t._s(t.title))])]),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",round:"",dense:"",icon:"close"}})],1)],1),a("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"60vh"}})],1)],1)},m=[],u={name:"VModal",extends:o["a"],props:{title:{type:String,default:"title"},isAppend:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1}},data(){return{modalData:{},isVisible:!1,openerId:null}},watch:{isVisible(t){if(t){const t=this.haveModalData()?this.getModalData():{};this.$set(this,"modalData",t),this.dataReady(),setTimeout((()=>{}),100)}}},created(){},mounted(){this.addInsideModalHandler()},methods:{addInsideModalHandler(){this.on("Modal.CMD.Show",((t,e,a=null,s=!1)=>{t===this.id&&(null!==a&&(this.openerId=a),this.isVisible=e)}))},addEventHandler(){},dataReady(){},dispatchData(t=null,e=!0){null===t&&(t=this.modalData),this.emit("Modal.DispatchData",this.id,t,this.openerId),e&&this.close()},close(){this.isVisible=!1},modalBgClicked(){const t=document.querySelector(".v-modal");null!==t&&t.addEventListener("click",(t=>{this.close()}))}}},p=u,b=a("2877"),f=a("24e8"),v=a("f09f"),q=a("a370"),g=a("65c6"),_=a("6ac5"),x=a("9c40"),I=a("7f67"),w=a("eebe"),Q=a.n(w),y=Object(b["a"])(p,h,m,!1,null,"d7dab130",null),C=y.exports;Q()(y,"components",{QDialog:f["a"],QCard:v["a"],QCardSection:q["a"],QToolbar:g["a"],QToolbarTitle:_["a"],QBtn:x["a"]}),Q()(y,"directives",{ClosePopup:I["a"]});var D={name:"CartModal",extends:C,data(){return{columns:[]}},computed:l()(l()({},Object(c["b"])(["shop","branch","theme","orderItems"])),{},{countInfo(){let t=0;return this.orderItems.forEach((e=>{t+=e.price})),{total:t,count:this.orderItems.length}}}),watch:{},created(){this.columns=[{}]},mounted(){},methods:{removeItem(t){this.dispatch("RemoveOrderItem",t)},save(){this.alert(`訂單已送出 總金額${this.countInfo.total}`),this.afterSave()},afterSave(){console.log("do after send.."),this.dispatch("ResetOrder"),this.close()}}},S=D,$=a("1c1c"),k=a("66e5"),M=a("4074"),O=a("0170"),j=a("eb85"),E=a("4b7e"),V=Object(b["a"])(S,r,d,!1,null,"612f9c13",null),B=V.exports;Q()(V,"components",{QDialog:f["a"],QCard:v["a"],QCardSection:q["a"],QToolbar:g["a"],QToolbarTitle:_["a"],QBtn:x["a"],QList:$["a"],QItem:k["a"],QItemSection:M["a"],QItemLabel:O["a"],QSeparator:j["a"],QCardActions:E["a"]}),Q()(V,"directives",{ClosePopup:I["a"]});var P={name:"CartBtn",extends:o["a"],components:{cartModal:B},data(){return{items:[],selected:[],model:3}},computed:l()({},Object(c["b"])(["shop","branch","theme"])),async created(){},methods:{}},H=P,T=Object(b["a"])(H,s,i,!1,null,null,null);e["a"]=T.exports;Q()(T,"components",{QBtn:x["a"]})},efea:function(t,e,a){"use strict";a("ddb0"),a("e6cf");var s=a("2b0e");let i=null;null===i&&(i=new s["a"]({data(){return{classNames:[]}},methods:{on(t,e,a){if(Object.defineProperty(a,"fnName",{value:e}),void 0===this._events[t])this.$on(t,a);else{let s=!1;for(let i=0;i<this._events[t].length;i++)if(this._events[t][i].fnName===e){s=!0,this._events[t][i]=a;break}s||this.$on(t,a)}},emit(t,...e){this.$emit(t,...e)},off(t,e){this.$off(t)}}}));var n,l,o=i,c=a("71f5"),r=a("7b12"),d=a("2ef0"),h=a.n(d),m={name:"VComponent",data(){return{}},computed:{params(){return this.$route.params},uid(){return`uid_${this._uid}`},id(){let t=void 0===this.$el||void 0===this.$el.getAttribute?null:this.$el.getAttribute("id");return void 0!==this.$attrs&&this.$attrs.id&&(t=this.$attrs.id),t},query(){return this.$route.query}},methods:{addModalHandler(t=null){this.on("Modal.DispatchData",((e,a,s=null)=>{null!==s&&s!==this.id||(null===t?this.modalHandler(e,a):t(e,a))}))},modalHandler(t,e,a=null){},showModal(t,e=null,a=null,s=!1){null!==e&&this.setModalData(e),this.emit("Modal.CMD.Show",t,!0,a,s)},setModalData(t){Object(c["d"])("modalData",t,"tmp")},haveModalData(){return null!==Object(c["b"])("modalData","tmp")},getModalData(){const t=h.a.cloneDeep(Object(c["b"])("modalData","tmp"));return Object(c["c"])("modalData","tmp"),t},hideModal(t){this.emit("Modal.CMD.Show",t,!1)},on(t,...e){let a,s;const i=t.split(",");1===e.length?(a=e[0],s=this.id):2===e.length&&(s=e[0],a=e[1]);for(let n=0;n<i.length;n++)o.on(i[n],s,a)},emit(t,...e){o.emit(t,...e)},off(t,e){o.off(t,e)},async fetch(t,...e){const a=Object(r["b"])();return new Promise(((s,i)=>{a[t](...e).then((t=>{s(t)})).catch((t=>{i(t)}))}))},fetchSync(t,...e){const a=Object(r["b"])(),s=e.pop();a[t](...e).then((t=>{s(null,t)})).catch((t=>{s(t,t)}))},async fetchURL(t,e="GET",a=null){return new Promise(((s,i)=>{Object(r["a"])(t,e,a).then((t=>{s(t)})).catch((t=>{i(t)}))}))},async dispatch(t,...e){return new Promise(((a,s)=>{const i=1===e.length?e[0]:e;this.$store.dispatch(t,i).then((t=>{a(t)})).catch((t=>{s(t)}))}))},to(t){this.$router.push(t)},setReactive(t,e){this[t]=Object.assign({},e,e)},trace(t){console.log(t)},alert(t,e="",a=null){this.$q.dialog({title:e,message:t}).onOk((()=>{null!==a&&a()})).onCancel((()=>{})).onDismiss((()=>{}))},confirm(t,e="",a=null){this.$q.dialog({title:e,message:t,cancel:!0,persistent:!0}).onOk((()=>{null!==a&&a()})).onOk((()=>{})).onCancel((()=>{})).onDismiss((()=>{}))}}},u=m,p=a("2877"),b=Object(p["a"])(u,n,l,!1,null,null,null);e["a"]=b.exports}}]);