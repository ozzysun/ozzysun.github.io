(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{2796:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return s})),a.d(e,"c",(function(){return i})),a.d(e,"d",(function(){return o})),a.d(e,"e",(function(){return r}));const n=t=>({id:t.id,product:t,qty:1,taste:{},toppings:[],capacity:""}),s=(t,e)=>{let a=null;return t.forEach((t=>{t.id===e.id&&(a=t)})),a},i=t=>t.add&&t.add>0?`${t.name}(+${t.add})`:t.name,o=(t,e,a)=>{let n=null;return t.taste.forEach((t=>{t.id===e&&t.items.forEach((t=>{t.id===a&&(n=t)}))})),null!==n?i(n):""},r=(t,e,a,n)=>{let i=!1;const o=s(t,e);return null!==o&&null!==o&&o[a]&&-1!==o[a].indexOf(n)&&(i=!0),i}},a3a5:function(t,e,a){"use strict";a.d(e,"b",(function(){return s})),a.d(e,"a",(function(){return i})),a.d(e,"e",(function(){return o})),a.d(e,"d",(function(){return r})),a.d(e,"c",(function(){return c}));var n=a("2796");const s=t=>{const e=[];for(const a in t.taste)t.product.taste.forEach((s=>{s.id===a&&e.push(`${s.name}(${Object(n["d"])(t.product,a,t.taste[a])})`)}));return t.toppings.length>0&&t.toppings.forEach((a=>{t.product.toppings.forEach((t=>{t.id===a&&e.push(t.name)}))})),""!==t.capacity&&t.product.capacity.forEach((a=>{a.id===t.capacity&&e.push(a.name)})),e.join(",")},i=t=>{let e=t.product.price;for(const a in t.taste){const n=t.taste[a];t.product.taste.forEach((t=>{t.id===a&&t.items.forEach((t=>{t.id===n&&void 0!==t.add&&t.add>0&&(e+=t.add)}))}))}return t.toppings.length>0&&t.toppings.forEach((a=>{t.product.toppings.forEach((t=>{t.id===a&&void 0!==t.add&&(e+=t.add)}))})),""!==t.capacity&&t.product.capacity.forEach((a=>{a.id===t.capacity&&void 0!==a.add&&(e+=a.add)})),e*t.qty},o=t=>{let e=0,a=0;return t.forEach((t=>{e+=i(t),a+=t.qty})),{totalPrice:e,count:t.length,itemsCount:a}},r=(t,e)=>{let a=null,n=null;return t.forEach((t=>{void 0!==e&&t.id===e&&(a=t),t.default&&(n=t)})),null===a&&null!==n&&(a=n),a},c=(t,e)=>{let a=null,n=null;return t.forEach((t=>{void 0!==e&&t.id===e&&(a=t),t.default&&(n=t)})),null===a&&null!==n&&(a=n),a}},a615:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[0===t.orders.length?a("div",{staticClass:"row"},[a("h6",[t._v("無訂單資料")])]):a("q-list",{staticClass:"q-gutter-sm",staticStyle:{width:"100%"},attrs:{bordered:"",separator:""}},[t._l(t.orders,(function(t){return a("history-item",{key:t.orderId,attrs:{item:t}})})),a("q-item",[a("q-space"),a("q-space")],1)],2)],1)},s=[],i=a("ded3"),o=a.n(i),r=a("efea"),c=a("2f62"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-expansion-item",{attrs:{"header-class":"bg-white text-black","dense-toggle":!0},scopedSlots:t._u([{key:"header",fn:function(){return[null!==t.info?a("q-item-section",{attrs:{avatar:""}},[a("q-item-label",{attrs:{caption:""}},[a("span",{class:"text-"+t.theme},[t._v(t._s(t.info.name))])]),a("q-avatar",{attrs:{color:t.theme,"text-color":"white"}},[t._v("\n        "+t._s(t.getTableItem(t.info.tables,t.item.clientInfo.tableId).name)+"\n      ")]),a("q-item-label",{staticClass:"q-pl-xs"},[t._v("\n        "+t._s(t.getWayItem(t.info.ways,t.item.clientInfo.way).name)+"\n      ")])],1):t._e(),a("q-item-section",[a("q-item-label",[t._v(t._s(t.dayjs(t.item.created).format("YYYY-MM-DD HH:mm")))]),a("q-item-label",{attrs:{caption:"",lines:"1"}},[t._v("單號："+t._s(t.item.orderId))]),a("q-item-label",{attrs:{caption:""}},[t._v("\n        "+t._s(t.item.completed?"餐點完成":"製作中")+"\n        "+t._s(t.item.checked?"已付款":"尚未付款")+"\n      ")])],1),a("q-item-section",{attrs:{side:""}},[t.isAllowReOrder(t.item)?a("q-btn",{attrs:{round:"",flat:"",dense:"",icon:"add",color:t.theme,label:"加點"},on:{click:function(e){return e.stopPropagation(),t.clickReOrder(t.item.orderId)}}}):t._e(),a("q-item-label",{staticClass:"text-bold",attrs:{lines:"1"}},[t._v("\n        金額："+t._s(t.orderInfo(t.item.items).totalPrice)+"\n      ")])],1)]},proxy:!0}])},[a("q-card",{class:"bg-grey-3"},[a("q-card-section",[a("q-list",[t._l(t.item.items,(function(e){return a("q-item",{key:e.id},[a("q-item-section",{staticClass:"q-ml-none",attrs:{top:"",thumbnail:""}},[a("img",{attrs:{src:e.product.img}})]),a("q-item-section",[a("q-item-label",[t._v("\n              "+t._s(e.product.name)+"\n            ")]),a("q-item-label",{attrs:{caption:""}},[t._v("\n              "+t._s(t.getSubItemInfo(e))+"\n            ")])],1),a("q-item-section",{attrs:{side:"",center:""}},[a("q-item-label",{attrs:{caption:""}},[t._v("$"+t._s(e.product.price)+"x"+t._s(e.qty))]),a("q-item-label",{attrs:{caption:""}},[t._v(t._s(t.getItemPrice(e)))])],1)],1)})),a("q-separator")],2)],1),a("q-card-section",[a("q-item-section",{attrs:{side:"",top:""}},[a("q-item-label",{attrs:{caption:""}},[a("q-checkbox",{attrs:{val:t.item.id,color:t.theme,label:"已完成"},model:{value:t.item.completed,callback:function(e){t.$set(t.item,"completed",e)},expression:"item.completed"}}),a("q-checkbox",{attrs:{val:t.item.id,color:t.theme,label:"已付款"},model:{value:t.item.checked,callback:function(e){t.$set(t.item,"checked",e)},expression:"item.checked"}})],1)],1)],1)],1)],1)},d=[],u=(a("e6cf"),a("5a0c")),h=a.n(u),m=a("a3a5"),p={name:"HistoryItem",extends:r["a"],props:{item:{type:Object,default:null}},data(){return{info:null}},computed:o()({},Object(c["b"])(["shop","branch","theme","theme"])),async created(){this.info=await this.getShopInfo(this.item.shop,this.item.branch)},watch:{},methods:{dayjs:h.a,orderInfo:m["e"],getWayItem:m["d"],getTableItem:m["c"],getItemPrice:m["a"],getSubItemInfo:m["b"],isAllowReOrder(t){const e=h()(t.created).format("YYYY-MM-DD"),a=h()(new Date).format("YYYY-MM-DD"),n=!t.checked&&e===a&&t.shop===this.shop&&t.branch===this.branch;return n},clickReOrder(t){this.dispatch("SetOrderId",t);const e=`/${this.shop}/${this.branch}`;this.to(e)},async getShopInfo(t,e){const a=await this.dispatch("GetShopInfo",{shop:t,branch:e});return a}}},f=p,b=a("2877"),g=a("3b73"),q=a("4074"),v=a("0170"),y=a("cb32"),_=a("9c40"),O=a("f09f"),I=a("a370"),$=a("1c1c"),w=a("66e5"),k=a("eb85"),D=a("8f8e"),x=a("eebe"),j=a.n(x),E=Object(b["a"])(f,l,d,!1,null,null,null),M=E.exports;j()(E,"components",{QExpansionItem:g["a"],QItemSection:q["a"],QItemLabel:v["a"],QAvatar:y["a"],QBtn:_["a"],QCard:O["a"],QCardSection:I["a"],QList:$["a"],QItem:w["a"],QSeparator:k["a"],QCheckbox:D["a"]});var S={name:"HistoryPage",extends:r["a"],components:{historyItem:M},data(){return{orders:[]}},computed:o()({},Object(c["b"])(["shop","branch","theme","shopInfo","historyOrders"])),watch:{historyOrders(t){this.updateOrders()}},created(){console.log("historyOrders=="),console.log(this.orders),this.updateOrders()},methods:{updateOrders(){this.orders=this.historyOrders}}},C=S,Q=a("2c91"),Y=Object(b["a"])(C,n,s,!1,null,null,null);e["default"]=Y.exports;j()(Y,"components",{QList:$["a"],QItem:w["a"],QSpace:Q["a"]})},efea:function(t,e,a){"use strict";a("ddb0"),a("e6cf");var n=a("2b0e");let s=null;null===s&&(s=new n["a"]({data(){return{classNames:[]}},methods:{on(t,e,a){if(Object.defineProperty(a,"fnName",{value:e}),void 0===this._events[t])this.$on(t,a);else{let n=!1;for(let s=0;s<this._events[t].length;s++)if(this._events[t][s].fnName===e){n=!0,this._events[t][s]=a;break}n||this.$on(t,a)}},emit(t,...e){this.$emit(t,...e)},off(t,e){this.$off(t)}}}));var i,o,r=s,c=a("71f5"),l=a("7b12"),d=a("2ef0"),u=a.n(d),h={name:"VComponent",data(){return{}},computed:{params(){return this.$route.params},uid(){return`uid_${this._uid}`},id(){let t=void 0===this.$el||void 0===this.$el.getAttribute?null:this.$el.getAttribute("id");return void 0!==this.$attrs&&this.$attrs.id&&(t=this.$attrs.id),t},query(){return this.$route.query}},methods:{addModalHandler(t=null){this.on("Modal.DispatchData",((e,a,n=null)=>{null!==n&&n!==this.id||(null===t?this.modalHandler(e,a):t(e,a))}))},modalHandler(t,e,a=null){},showModal(t,e=null,a=null,n=!1){null!==e&&this.setModalData(e),this.emit("Modal.CMD.Show",t,!0,a,n)},setModalData(t){Object(c["d"])("modalData",t,"tmp")},haveModalData(){return null!==Object(c["b"])("modalData","tmp")},getModalData(){const t=u.a.cloneDeep(Object(c["b"])("modalData","tmp"));return Object(c["c"])("modalData","tmp"),t},hideModal(t){this.emit("Modal.CMD.Show",t,!1)},on(t,...e){let a,n;const s=t.split(",");1===e.length?(a=e[0],n=this.id):2===e.length&&(n=e[0],a=e[1]);for(let i=0;i<s.length;i++)r.on(s[i],n,a)},emit(t,...e){r.emit(t,...e)},off(t,e){r.off(t,e)},async fetch(t,...e){const a=Object(l["b"])();return new Promise(((n,s)=>{a[t](...e).then((t=>{n(t)})).catch((t=>{s(t)}))}))},fetchSync(t,...e){const a=Object(l["b"])(),n=e.pop();a[t](...e).then((t=>{n(null,t)})).catch((t=>{n(t,t)}))},async fetchURL(t,e="GET",a=null){return new Promise(((n,s)=>{Object(l["a"])(t,e,a).then((t=>{n(t)})).catch((t=>{s(t)}))}))},async dispatch(t,...e){return new Promise(((a,n)=>{const s=1===e.length?e[0]:e;this.$store.dispatch(t,s).then((t=>{a(t)})).catch((t=>{n(t)}))}))},to(t){this.$router.push(t)},setReactive(t,e){this[t]=Object.assign({},e,e)},trace(t){console.log(t)},alert(t,e="",a=null){this.$q.dialog({title:e,message:t}).onOk((()=>{null!==a&&a()})).onCancel((()=>{})).onDismiss((()=>{}))},confirm(t,e="",a=null){this.$q.dialog({title:e,message:t,cancel:!0,persistent:!0}).onOk((()=>{null!==a&&a()})).onOk((()=>{})).onCancel((()=>{})).onDismiss((()=>{}))}}},m=h,p=a("2877"),f=Object(p["a"])(m,i,o,!1,null,null,null);e["a"]=f.exports}}]);