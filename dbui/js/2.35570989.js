(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"713b":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-layout",{attrs:{view:"lHh Lpr lFf"}},[n("q-header",{class:"glossy bg-"+t.theme,attrs:{elevated:""}},[n("q-toolbar",[n("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}}),n("q-toolbar-title",[t._v("\n        "+t._s(t.title)+"\n      ")]),n("q-btn",{staticClass:"q-mr-sm",attrs:{flat:"",icon:"settings",size:"sm"},on:{click:t.openSetting}})],1)],1),n("q-drawer",{attrs:{"show-if-above":"",bordered:"","content-class":"bg-"+t.theme+"-4"},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[n("q-list",[n("q-item-label",{staticClass:"text-grey-8",attrs:{header:""}},[n("img",{attrs:{src:t.logoSrc}})]),t._l(t.menuData,(function(e){return n("EssentialLink",t._b({key:e.title},"EssentialLink",e,!1))}))],2)],1),n("q-page-container",[n("router-view")],1)],1)},l=[],s=n("ded3"),i=n.n(s),o=n("efea"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-item",{attrs:{clickable:""},on:{click:function(e){return t.clickLink(t.link)}}},[t.icon?n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:t.icon}})],1):t._e(),n("q-item-section",[n("q-item-label",[t._v(t._s(t.title))]),n("q-item-label",{attrs:{caption:""}},[t._v("\n      "+t._s(t.caption)+"\n    ")])],1)],1)},c=[],u=n("2f62"),d={name:"EssentialLink",extends:o["a"],props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""},external:{type:Boolean,default:!1}},computed:i()({},Object(u["b"])([])),methods:{getLink(t){const e=t;return e},clickLink(t){const e=t;this.to(e)}}},h=d,m=n("2877"),p=n("66e5"),f=n("4074"),b=n("0016"),g=n("0170"),w=n("eebe"),v=n.n(w),D=Object(m["a"])(h,r,c,!1,null,null,null),O=D.exports;v()(D,"components",{QItem:p["a"],QItemSection:f["a"],QIcon:b["a"],QItemLabel:g["a"]});var k={name:"MainLayout",extends:o["a"],components:{EssentialLink:O},data(){return{leftDrawerOpen:!1}},computed:i()(i()({},Object(u["b"])(["menuData","theme"])),{},{title(){return"menu"},logoSrc(){return"https://lh3.googleusercontent.com/ompOJ7JFwgEs_th7oJ_rvDQTzzN3gPSuF7JwejLEsXFi-GYWC9MW-JNwb06DIXwL3DQBG760d3TWG0zfjA=s239-c"}}),created(){},methods:{openSetting(){const t="/setting";this.to(t)}}},q=k,_=n("4d5a"),$=n("e359"),y=n("65c6"),j=n("9c40"),L=n("6ac5"),M=n("9404"),Q=n("1c1c"),S=n("09e3"),C=Object(m["a"])(q,a,l,!1,null,null,null);e["default"]=C.exports;v()(C,"components",{QLayout:_["a"],QHeader:$["a"],QToolbar:y["a"],QBtn:j["a"],QToolbarTitle:L["a"],QDrawer:M["a"],QList:Q["a"],QItemLabel:g["a"],QPageContainer:S["a"]})},efea:function(t,e,n){"use strict";n("ddb0"),n("e6cf");var a=n("2b0e");let l=null;null===l&&(l=new a["a"]({data(){return{classNames:[]}},methods:{on(t,e,n){if(Object.defineProperty(n,"fnName",{value:e}),void 0===this._events[t])this.$on(t,n);else{let a=!1;for(let l=0;l<this._events[t].length;l++)if(this._events[t][l].fnName===e){a=!0,this._events[t][l]=n;break}a||this.$on(t,n)}},emit(t,...e){this.$emit(t,...e)},off(t,e){this.$off(t)}}}));var s,i,o=l,r=n("71f5"),c=n("7b12"),u=n("2ef0"),d=n.n(u),h={name:"VComponent",data(){return{}},computed:{params(){return this.$route.params},uid(){return`uid_${this._uid}`},id(){let t=void 0===this.$el||void 0===this.$el.getAttribute?null:this.$el.getAttribute("id");return void 0!==this.$attrs&&this.$attrs.id&&(t=this.$attrs.id),t},query(){return this.$route.query}},methods:{addModalHandler(t=null){this.on("Modal.DispatchData",((e,n,a=null)=>{null!==a&&a!==this.id||(null===t?this.modalHandler(e,n):t(e,n))}))},modalHandler(t,e,n=null){},showModal(t,e=null,n=null,a=!1){null!==e&&this.setModalData(e),this.emit("Modal.CMD.Show",t,!0,n,a)},setModalData(t){Object(r["d"])("modalData",t,"tmp")},haveModalData(){return null!==Object(r["b"])("modalData","tmp")},getModalData(){const t=d.a.cloneDeep(Object(r["b"])("modalData","tmp"));return Object(r["c"])("modalData","tmp"),t},hideModal(t){this.emit("Modal.CMD.Show",t,!1)},on(t,...e){let n,a;const l=t.split(",");1===e.length?(n=e[0],a=this.id):2===e.length&&(a=e[0],n=e[1]);for(let s=0;s<l.length;s++)o.on(l[s],a,n)},emit(t,...e){o.emit(t,...e)},off(t,e){o.off(t,e)},async fetch(t,...e){const n=Object(c["b"])();return new Promise(((a,l)=>{n[t](...e).then((t=>{a(t)})).catch((t=>{l(t)}))}))},fetchSync(t,...e){const n=Object(c["b"])(),a=e.pop();n[t](...e).then((t=>{a(null,t)})).catch((t=>{a(t,t)}))},async fetchURL(t,e="GET",n=null){return new Promise(((a,l)=>{Object(c["a"])(t,e,n).then((t=>{a(t)})).catch((t=>{l(t)}))}))},async dispatch(t,...e){return new Promise(((n,a)=>{const l=1===e.length?e[0]:e;this.$store.dispatch(t,l).then((t=>{n(t)})).catch((t=>{a(t)}))}))},to(t){this.$router.push(t)},setReactive(t,e){this[t]=Object.assign({},e,e)},trace(t){console.log(t)},alert(t,e="",n=null){this.$q.dialog({title:e,message:t}).onOk((()=>{null!==n&&n()})).onCancel((()=>{})).onDismiss((()=>{}))},confirm(t,e="",n=null){this.$q.dialog({title:e,message:t,cancel:!0,persistent:!0}).onOk((()=>{null!==n&&n()})).onOk((()=>{})).onCancel((()=>{})).onDismiss((()=>{}))}}},m=h,p=n("2877"),f=Object(p["a"])(m,s,i,!1,null,null,null);e["a"]=f.exports}}]);