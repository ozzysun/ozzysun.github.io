(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"50b4":function(t,e,s){"use strict";s.d(e,"d",(function(){return a})),s.d(e,"a",(function(){return i})),s.d(e,"f",(function(){return n})),s.d(e,"g",(function(){return o})),s.d(e,"e",(function(){return c})),s.d(e,"h",(function(){return r})),s.d(e,"b",(function(){return l})),s.d(e,"c",(function(){return d})),s.d(e,"i",(function(){return h}));const a=t=>t.add&&t.add>0?`${t.name}(+${t.add})`:t.name,i=t=>({id:t.id,product:t,qty:1,taste:{},toppings:[],capacity:""}),n=(t,e,s)=>{let i=null;return s.product.taste.forEach((s=>{s.id===t&&s.items.forEach((t=>{t.id===e&&(i=t)}))})),null!==i?a(i):""},o=t=>{const e=[];return t.items.forEach((s=>{const i={label:a(s),value:{key:t.id,value:s.id}};e.push(i)})),e},c=(t,e)=>{let s=null;return t.forEach((t=>{t.id===e.id&&(s=t)})),s},r=(t,e,s,a)=>{const i=s.id,n=a.id;let o=!1,c=null;return t.forEach((t=>{t.id===i&&(c=t)})),null!==c&&c[e]&&-1!==c[e].indexOf(n)&&(o=!0),o},l=t=>{const e=[];for(const s in t.taste)t.product.taste.forEach((a=>{a.id===s&&e.push(`${a.name}(${n(s,t.taste[s],t)})`)}));return t.toppings.length>0&&t.toppings.forEach((s=>{t.product.toppings.forEach((t=>{t.id===s&&e.push(t.name)}))})),""!==t.capacity&&t.product.capacity.forEach((s=>{s.id===t.capacity&&e.push(s.name)})),e.join(",")},d=t=>{let e=t.product.price;for(const s in t.taste){const a=t.taste[s];t.product.taste.forEach((t=>{t.id===s&&t.items.forEach((t=>{t.id===a&&void 0!==t.add&&t.add>0&&(e+=t.add)}))}))}return t.toppings.length>0&&t.toppings.forEach((s=>{t.product.toppings.forEach((t=>{t.id===s&&void 0!==t.add&&(e+=t.add)}))})),""!==t.capacity&&t.product.capacity.forEach((s=>{s.id===t.capacity&&void 0!==s.add&&(e+=s.add)})),e*t.qty},h=t=>{let e=0,s=0;return t.forEach((t=>{e+=d(t),s+=t.qty})),{totalPrice:e,count:t.length,itemsCount:s}}},"75c9":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("q-toolbar",{staticClass:"text-center"},[s("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"arrow_left"},on:{click:t.prevPage}}),s("q-toolbar-title",[s("span",{staticClass:"text-weight-bold"},[t._v(t._s(t.catTitle))])]),s("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"arrow_right"},on:{click:t.nextPage}})],1),s("q-carousel",{staticStyle:{height:"100%"},attrs:{"transition-prev":"slide-right","transition-next":"slide-left",animated:"",swipeable:"",infinite:"","control-color":"primary"},model:{value:t.cid,callback:function(e){t.cid=e},expression:"cid"}},t._l(t.catIds,(function(t){return s("q-carousel-slide",{key:"cat_"+t,attrs:{name:t}},[s("product-list",{attrs:{"category-id":t}})],1)})),1),s("q-page-sticky",{attrs:{position:"bottom-right",offset:[20,10]}},[s("cart-btn")],1)],1)},i=[],n=s("ded3"),o=s.n(n),c=(s("e6cf"),s("efea")),r=s("2f62"),l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",[s("q-list",{staticClass:"q-gutter-sm",staticStyle:{width:"100%"},attrs:{bordered:"",separator:""}},[t._l(t.items,(function(e){return s("product-item",{key:"p_"+e.id,attrs:{item:e,selected:-1!==t.selectedId.indexOf(e.id)}})})),s("q-item",[s("q-space"),s("q-space")],1)],2)],1)},d=[],h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-expansion-item",{scopedSlots:t._u([{key:"header",fn:function(){return[s("q-item-section",{staticClass:"q-ml-none",attrs:{top:"",thumbnail:""}},[s("img",{attrs:{src:t.item.product.img}})]),s("q-item-section",[s("q-item-label",[t._v(t._s(t.item.product.name))]),s("q-item-label",{attrs:{caption:""}},[t._v("$"+t._s(t.item.product.price))]),s("q-item-label",{attrs:{caption:""}},[t._v(t._s(t.getItemExtraInfo(t.item)))])],1),s("q-item-section",{attrs:{side:"",top:""}},[s("q-item-label",{attrs:{caption:""}},[t.isSelected&&t.item.qty>0?s("span",[t._v("x"+t._s(t.item.qty))]):t._e(),s("q-checkbox",{attrs:{val:t.item.id,color:t.theme},on:{input:function(e,s){return t.checkboxHandler(e,s,t.item)}},model:{value:t.isSelected,callback:function(e){t.isSelected=e},expression:"isSelected"}})],1)],1)]},proxy:!0}])},[s("q-card",[s("q-card-section",[s("q-list",[s("q-item",{attrs:{clickable:""}},[s("q-item-section",{attrs:{avatar:""}},[t._v("\n            數量\n          ")]),s("q-item-section",[s("q-input",{staticStyle:{"min-width":"100px","max-width":"150px"},attrs:{type:"number",filled:"",dense:""},on:{input:function(e){return t.inputQtyHandler(e,t.item)}},scopedSlots:t._u([{key:"before",fn:function(){return[s("q-icon",{attrs:{name:"remove_circle"},on:{click:function(e){t.item.qty=t.item.qty>1?t.item.qty-1:1}}})]},proxy:!0},{key:"after",fn:function(){return[s("q-icon",{attrs:{name:"add_circle"},on:{click:function(e){t.item.qty=t.item.qty+1}}})]},proxy:!0}]),model:{value:t.item.qty,callback:function(e){t.$set(t.item,"qty",t._n(e))},expression:"item.qty"}})],1)],1),t.item.product.taste&&t.item.product.taste.length>0?s("q-item",[s("q-item-section",{attrs:{avatar:""}},[t._v("\n            "+t._s(t.shopInfo.dict.taste)+"\n          ")]),s("q-item-section",[s("div",{staticClass:"q-pr-sm q-gutter-sm"},t._l(t.item.product.taste,(function(e){return s("q-select",{key:e.id,staticStyle:{width:"100px"},attrs:{dense:"",outline:"",options:t.getTasteOptions(e),label:t.getLabel(e)},on:{input:function(e){return t.selectTasteHandler(e,t.item)}},scopedSlots:t._u([{key:"selected",fn:function(){return[t._v("\n                  "+t._s(t.getTasteLabel(e.id,t.item.taste[e.id],t.item))+"\n                ")]},proxy:!0}],null,!0),model:{value:t.item.taste[e.id],callback:function(s){t.$set(t.item.taste,e.id,s)},expression:"item.taste[obj.id]"}})})),1)])],1):t._e(),t.item.product.toppings&&t.item.product.toppings.length>0?s("q-item",[s("q-item-section",{attrs:{avatar:""}},[t._v("\n            "+t._s(t.shopInfo.dict.toppings)+"\n          ")]),s("q-item-section",[s("div",{staticClass:"q-pr-sm q-gutter-sm"},t._l(t.item.product.toppings,(function(e){return s("q-btn",{key:e.id,attrs:{outline:!t.isActive(t.orderItems,"toppings",t.item,e),dense:"",color:"primary",label:t.getLabel(e)},on:{click:function(s){return t.toggle("toppings",t.item,e)}}})})),1)])],1):t._e(),t.item.product.capacity&&t.item.product.capacity.length>0?s("q-item",[s("q-item-section",{attrs:{avatar:""}},[t._v("\n            "+t._s(t.shopInfo.dict.capacity)+"\n          ")]),s("q-item-section",[s("div",{staticClass:"q-pr-sm q-gutter-sm"},t._l(t.item.product.capacity,(function(e){return s("q-btn",{key:e.id,attrs:{outline:!t.isActive(t.orderItems,"capacity",t.item,e),dense:"",color:"primary",label:t.getLabel(e)},on:{click:function(s){return t.toggle("capacity",t.item,e)}}})})),1)])],1):t._e(),t.item.product.capacity&&t.item.product.capacity.length>0?s("q-item",[s("q-item-section",{attrs:{avatar:""}},[t._v("\n            小計\n          ")]),s("q-item-section",[s("q-item-label",{attrs:{caption:""}},[t._v("$"+t._s(t.getItemPrice(t.item)))])],1)],1):t._e()],1)],1)],1)],1)},u=[],m=s("50b4"),p={name:"ProductItem",extends:c["a"],props:{item:{type:Object,default:null},selected:{type:Boolean,default:!1}},data(){return{isSelected:!1}},computed:o()({},Object(r["b"])(["orderItems","theme","shopInfo"])),created(){this.isSelected=this.selected},watch:{selected(t){this.isSelected=t}},methods:{getLabel:m["d"],getItemExtraInfo:m["b"],getItemPrice:m["c"],getTasteLabel:m["f"],getTasteOptions:m["g"],getSelectedOrderItem:m["e"],isActive:m["h"],selectTasteHandler(t,e){const s=t.value.key,a=t.value.value;e.product.taste.forEach((t=>{t.id===s&&t.items.forEach((t=>{t.id===a&&(e.taste[s]=a)}))}));const i=this.getSelectedOrderItem(this.orderItems,e.product);null!==i&&this.dispatch("UpdateOrderItem",e)},toggle(t,e,s){if(this.isActive(this.orderItems,t,e,s))if("toppings"===t){const a=e[t].indexOf(s.id);-1!==a&&e[t].splice(a,1)}else e[t]="";else"toppings"===t?e[t].push(s.id):e[t]=s.id;const a=this.getSelectedOrderItem(this.orderItems,e.product);null!==a&&this.dispatch("UpdateOrderItem",e)},checkboxHandler(t,e,s){t?this.dispatch("AddOrderItem",s):this.dispatch("RemoveOrderItem",s)},inputQtyHandler(t,e){const s=this.getSelectedOrderItem(this.orderItems,e.product);null!==s&&this.dispatch("UpdateOrderItem",e)}}},f=p,b=s("2877"),g=s("3b73"),v=s("4074"),q=s("0170"),I=s("8f8e"),y=s("f09f"),_=s("a370"),x=s("1c1c"),O=s("66e5"),$=s("27f9"),w=s("0016"),C=s("ddd8"),S=s("9c40"),k=s("eebe"),Q=s.n(k),E=Object(b["a"])(f,h,u,!1,null,null,null),D=E.exports;Q()(E,"components",{QExpansionItem:g["a"],QItemSection:v["a"],QItemLabel:q["a"],QCheckbox:I["a"],QCard:y["a"],QCardSection:_["a"],QList:x["a"],QItem:O["a"],QInput:$["a"],QIcon:w["a"],QSelect:C["a"],QBtn:S["a"]});var M={name:"ProductListPage",extends:c["a"],components:{productItem:D},props:{categoryId:{type:String,default:null}},data(){return{items:[],selectedId:[],model:1}},computed:o()(o()({},Object(r["b"])(["shop","branch","orderItems","theme","shopCats"])),{},{catIds(){const t=[];return this.shopCats.forEach((e=>{t.push(e.id)})),t},catTitle(){let t="";return this.shopCats.forEach((e=>{e.id===this.cid&&(t=e.name)})),t},cid(){return null!==this.categoryId?this.categoryId:this.params.cid}}),async created(){this.selectedId=[],await this.loadData()},watch:{orderItems(t){this.selectedId=[],t.forEach((t=>{this.selectedId.push(t.id)}))},async $route(t,e){await this.loadData()}},methods:{conver2OrderItem:m["a"],getSelectedOrderItem:m["e"],async loadData(){const t=await this.fetch("productList",this.shop,this.branch,this.cid),e=t.data,s=[];e.forEach((t=>{const e=this.getSelectedOrderItem(this.orderItems,t);if(null===e){const e=this.conver2OrderItem(t);s.push(e)}else s.push(e),this.selectedId.push(e.id)})),this.items=s},nextPage(t=!1){const e=this.catIds.indexOf(this.cid);let s=e+1;s>=this.catIds.length&&(s=t?0:this.catIds.length-1);const a=`/${this.shop}/${this.branch}/${this.catIds[s]}/list`;this.to(a)},prevPage(t=!1){const e=this.catIds.indexOf(this.cid);let s=e-1;s<0&&(s=t?this.catIds.length-1:0);const a=`/${this.shop}/${this.branch}/${this.catIds[s]}/list`;this.to(a)}}},P=M,j=s("9989"),T=s("2c91"),L=Object(b["a"])(P,l,d,!1,null,null,null),H=L.exports;Q()(L,"components",{QPage:j["a"],QList:x["a"],QItem:O["a"],QSpace:T["a"]});var V=s("b75d"),B={name:"SwipeCategoryPage",extends:c["a"],components:{productList:H,cartBtn:V["a"]},data(){return{items:[],cid:"hot"}},computed:o()(o()({},Object(r["b"])(["shop","branch","shopCats"])),{},{catIds(){const t=[];return this.shopCats.forEach((e=>{t.push(e.id)})),t},catTitle(){let t="";return this.shopCats.forEach((e=>{e.id===this.cid&&(t=e.name)})),t}}),async created(){this.cid=this.params.cid,this.items=await this.dispatch("GetshopCats",{shop:this.shop,branch:this.branch})},watch:{cid(t){const e=`/${this.shop}/${this.branch}/${t}/list`;this.$route.path!==e&&this.to(e)}},mounted(){},methods:{nextPage(t=!1){const e=this.catIds.indexOf(this.cid);let s=e+1;s>=this.catIds.length&&(s=t?0:this.catIds.length-1),this.cid=this.catIds[s]},prevPage(t=!1){const e=this.catIds.indexOf(this.cid);let s=e-1;s<0&&(s=t?this.catIds.length-1:0),this.cid=this.catIds[s]}}},A=B,R=s("65c6"),N=s("6ac5"),U=s("880c"),z=s("62cd"),G=s("de5e"),J=Object(b["a"])(A,a,i,!1,null,null,null);e["default"]=J.exports;Q()(J,"components",{QToolbar:R["a"],QBtn:S["a"],QToolbarTitle:N["a"],QCarousel:U["a"],QCarouselSlide:z["a"],QPageSticky:G["a"]})},b75d:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("q-btn",{attrs:{round:"",color:t.theme,icon:"shopping_cart"},on:{click:function(e){return t.showModal("cartModal")}}}),s("cart-modal",{attrs:{id:"cartModal",title:"購物車"}})],1)},i=[],n=s("ded3"),o=s.n(n),c=(s("e6cf"),s("efea")),r=s("2f62"),l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-dialog",{attrs:{persistent:"","full-width":t.fullscreen},model:{value:t.isVisible,callback:function(e){t.isVisible=e},expression:"isVisible"}},[s("q-card",{staticClass:"q-ma-xs",staticStyle:{"max-width":"80vw",width:"1000px"}},[s("q-card-section",[s("q-toolbar",{class:["bg-"+t.theme+"-4","text-"+t.theme+"-invert"]},[s("q-toolbar-title",[s("span",{staticClass:"text-weight-bold"},[t._v(t._s(t.title))])]),s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",round:"",dense:"",icon:"close"}})],1)],1),s("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"60vh"}},[s("q-list",{staticClass:"q-gutter-sm",staticStyle:{width:"100%"},attrs:{bordered:"",separator:""}},t._l(t.orderItems,(function(e){return s("q-item",{key:"m_p_"+e.id},[s("q-item-section",{staticClass:"q-ml-none",attrs:{top:"",thumbnail:""}},[s("img",{attrs:{src:e.product.img}})]),s("q-item-section",[s("q-item-label",[t._v(t._s(e.product.name)+"($"+t._s(e.product.price)+")* "+t._s(e.qty))]),s("q-item-label",{attrs:{caption:""}},[t._v("$"+t._s(t.getItemExtraInfo(e)))]),s("q-item-label",{attrs:{caption:""}},[t._v("$"+t._s(t.getItemPrice(e)))])],1),s("q-item-section",{attrs:{side:"",top:""}},[s("q-btn",{attrs:{round:"",color:"deep-orange",icon:"delete_forever"},on:{click:function(s){return t.removeItem(e)}}})],1)],1)})),1)],1),s("q-card-section",[s("div",[t._v("品項："+t._s(t.orderInfo(t.orderItems).count)+" 數量："+t._s(t.orderInfo(t.orderItems).itemsCount)+" 金額："+t._s(t.orderInfo(t.orderItems).totalPrice))])]),s("q-separator"),s("q-card-actions",{attrs:{align:"center"}},[s("q-btn",{attrs:{size:"sm"},on:{click:t.close}},[t._v("取消")]),s("q-btn",{attrs:{color:t.theme,size:"sm"},on:{click:t.save}},[t._v("送出")])],1)],1)],1)},d=[],h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-dialog",{attrs:{persistent:"","full-width":t.fullscreen},model:{value:t.isVisible,callback:function(e){t.isVisible=e},expression:"isVisible"}},[s("q-card",{staticClass:"q-ma-xs",staticStyle:{"max-width":"80vw",width:"1000px",height:"800px","mex-height":"80vh"}},[s("q-card-section",[s("q-toolbar",{class:["bg-"+t.theme+"-4","text-"+t.theme+"-invert"]},[s("q-toolbar-title",[s("span",{staticClass:"text-weight-bold"},[t._v(t._s(t.title))])]),s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",round:"",dense:"",icon:"close"}})],1)],1),s("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"60vh"}})],1)],1)},u=[],m={name:"VModal",extends:c["a"],props:{title:{type:String,default:"title"},isAppend:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1}},data(){return{modalData:{},isVisible:!1,openerId:null}},watch:{isVisible(t){if(t){const t=this.haveModalData()?this.getModalData():{};this.$set(this,"modalData",t),this.dataReady(),setTimeout((()=>{}),100)}}},created(){},mounted(){this.addInsideModalHandler()},methods:{addInsideModalHandler(){this.on("Modal.CMD.Show",((t,e,s=null,a=!1)=>{t===this.id&&(null!==s&&(this.openerId=s),this.isVisible=e)}))},addEventHandler(){},dataReady(){},dispatchData(t=null,e=!0){null===t&&(t=this.modalData),this.emit("Modal.DispatchData",this.id,t,this.openerId),e&&this.close()},close(){this.isVisible=!1},modalBgClicked(){const t=document.querySelector(".v-modal");null!==t&&t.addEventListener("click",(t=>{this.close()}))}}},p=m,f=s("2877"),b=s("24e8"),g=s("f09f"),v=s("a370"),q=s("65c6"),I=s("6ac5"),y=s("9c40"),_=s("7f67"),x=s("eebe"),O=s.n(x),$=Object(f["a"])(p,h,u,!1,null,"d7dab130",null),w=$.exports;O()($,"components",{QDialog:b["a"],QCard:g["a"],QCardSection:v["a"],QToolbar:q["a"],QToolbarTitle:I["a"],QBtn:y["a"]}),O()($,"directives",{ClosePopup:_["a"]});var C=s("50b4"),S={name:"CartModal",extends:w,data(){return{columns:[]}},computed:o()({},Object(r["b"])(["shop","branch","theme","orderItems"])),watch:{},created(){this.columns=[{}]},mounted(){},methods:{getItemPrice:C["c"],getItemExtraInfo:C["b"],orderInfo:C["i"],removeItem(t){this.dispatch("RemoveOrderItem",t)},save(){this.alert(`訂單已送出 總金額${this.orderInfo(this.orderItems).totalPrice}`),this.afterSave()},afterSave(){console.log("do after send.."),this.dispatch("ResetOrder"),this.close()}}},k=S,Q=s("1c1c"),E=s("66e5"),D=s("4074"),M=s("0170"),P=s("eb85"),j=s("4b7e"),T=Object(f["a"])(k,l,d,!1,null,"43f6769a",null),L=T.exports;O()(T,"components",{QDialog:b["a"],QCard:g["a"],QCardSection:v["a"],QToolbar:q["a"],QToolbarTitle:I["a"],QBtn:y["a"],QList:Q["a"],QItem:E["a"],QItemSection:D["a"],QItemLabel:M["a"],QSeparator:P["a"],QCardActions:j["a"]}),O()(T,"directives",{ClosePopup:_["a"]});var H={name:"CartBtn",extends:c["a"],components:{cartModal:L},data(){return{items:[],selected:[],model:3}},computed:o()({},Object(r["b"])(["shop","branch","theme"])),async created(){},methods:{}},V=H,B=Object(f["a"])(V,a,i,!1,null,null,null);e["a"]=B.exports;O()(B,"components",{QBtn:y["a"]})},efea:function(t,e,s){"use strict";s("ddb0"),s("e6cf");var a=s("2b0e");let i=null;null===i&&(i=new a["a"]({data(){return{classNames:[]}},methods:{on(t,e,s){if(Object.defineProperty(s,"fnName",{value:e}),void 0===this._events[t])this.$on(t,s);else{let a=!1;for(let i=0;i<this._events[t].length;i++)if(this._events[t][i].fnName===e){a=!0,this._events[t][i]=s;break}a||this.$on(t,s)}},emit(t,...e){this.$emit(t,...e)},off(t,e){this.$off(t)}}}));var n,o,c=i,r=s("71f5"),l=s("7b12"),d=s("2ef0"),h=s.n(d),u={name:"VComponent",data(){return{}},computed:{params(){return this.$route.params},uid(){return`uid_${this._uid}`},id(){let t=void 0===this.$el||void 0===this.$el.getAttribute?null:this.$el.getAttribute("id");return void 0!==this.$attrs&&this.$attrs.id&&(t=this.$attrs.id),t},query(){return this.$route.query}},methods:{addModalHandler(t=null){this.on("Modal.DispatchData",((e,s,a=null)=>{null!==a&&a!==this.id||(null===t?this.modalHandler(e,s):t(e,s))}))},modalHandler(t,e,s=null){},showModal(t,e=null,s=null,a=!1){null!==e&&this.setModalData(e),this.emit("Modal.CMD.Show",t,!0,s,a)},setModalData(t){Object(r["d"])("modalData",t,"tmp")},haveModalData(){return null!==Object(r["b"])("modalData","tmp")},getModalData(){const t=h.a.cloneDeep(Object(r["b"])("modalData","tmp"));return Object(r["c"])("modalData","tmp"),t},hideModal(t){this.emit("Modal.CMD.Show",t,!1)},on(t,...e){let s,a;const i=t.split(",");1===e.length?(s=e[0],a=this.id):2===e.length&&(a=e[0],s=e[1]);for(let n=0;n<i.length;n++)c.on(i[n],a,s)},emit(t,...e){c.emit(t,...e)},off(t,e){c.off(t,e)},async fetch(t,...e){const s=Object(l["b"])();return new Promise(((a,i)=>{s[t](...e).then((t=>{a(t)})).catch((t=>{i(t)}))}))},fetchSync(t,...e){const s=Object(l["b"])(),a=e.pop();s[t](...e).then((t=>{a(null,t)})).catch((t=>{a(t,t)}))},async fetchURL(t,e="GET",s=null){return new Promise(((a,i)=>{Object(l["a"])(t,e,s).then((t=>{a(t)})).catch((t=>{i(t)}))}))},async dispatch(t,...e){return new Promise(((s,a)=>{const i=1===e.length?e[0]:e;this.$store.dispatch(t,i).then((t=>{s(t)})).catch((t=>{a(t)}))}))},to(t){this.$router.push(t)},setReactive(t,e){this[t]=Object.assign({},e,e)},trace(t){console.log(t)},alert(t,e="",s=null){this.$q.dialog({title:e,message:t}).onOk((()=>{null!==s&&s()})).onCancel((()=>{})).onDismiss((()=>{}))},confirm(t,e="",s=null){this.$q.dialog({title:e,message:t,cancel:!0,persistent:!0}).onOk((()=>{null!==s&&s()})).onOk((()=>{})).onCancel((()=>{})).onDismiss((()=>{}))}}},m=u,p=s("2877"),f=Object(p["a"])(m,n,o,!1,null,null,null);e["a"]=f.exports}}]);