(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"713b":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-layout",{attrs:{view:"lHh Lpr lFf"}},[n("q-header",{attrs:{elevated:""}},[n("q-toolbar",[n("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}}),n("q-toolbar-title",[t._v("\n        Quasar App\n      ")]),n("div",[t._v("Quasar v"+t._s(t.$q.version))])],1)],1),n("q-drawer",{attrs:{"show-if-above":"",bordered:"","content-class":"bg-grey-1"},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[n("q-list",[n("q-item-label",{staticClass:"text-grey-8",attrs:{header:""}},[t._v("\n        oz\n      ")]),t._l(t.menuData,(function(e){return n("EssentialLink",t._b({key:e.title},"EssentialLink",e,!1))}))],2)],1),n("q-page-container",[n("router-view")],1)],1)},l=[],i=n("ded3"),s=n.n(i),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-item",{attrs:{clickable:""},on:{click:function(e){return t.clickLink(t.link)}}},[t.icon?n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:t.icon}})],1):t._e(),n("q-item-section",[n("q-item-label",[t._v(t._s(t.title))]),n("q-item-label",{attrs:{caption:""}},[t._v("\n      "+t._s(t.caption)+"\n    ")])],1)],1)},o=[],c=(n("5319"),n("2f62")),u=n("efea"),h={name:"EssentialLink",extends:u["a"],props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""},external:{type:Boolean,default:!1}},computed:s()({},Object(c["b"])(["shop","branch"])),methods:{getLink(t){const e=t.replace(":shop",this.shop).replace(":branch",this.branch);return e},clickLink(t){const e=t.replace(":shop",this.shop).replace(":branch",this.branch);this.to(e)}}},d=h,p=n("2877"),m=n("66e5"),b=n("4074"),f=n("0016"),v=n("0170"),g=n("eebe"),w=n.n(g),D=Object(p["a"])(d,r,o,!1,null,null,null),O=D.exports;w()(D,"components",{QItem:m["a"],QItemSection:b["a"],QIcon:f["a"],QItemLabel:v["a"]});var k={name:"MainLayout",components:{EssentialLink:O},data(){return{leftDrawerOpen:!1}},computed:s()({},Object(c["b"])(["menuData","shop","branch"]))},q=k,_=n("4d5a"),$=n("e359"),y=n("65c6"),Q=n("9c40"),j=n("6ac5"),L=n("9404"),M=n("1c1c"),S=n("09e3"),x=Object(p["a"])(q,a,l,!1,null,null,null);e["default"]=x.exports;w()(x,"components",{QLayout:_["a"],QHeader:$["a"],QToolbar:y["a"],QBtn:Q["a"],QToolbarTitle:j["a"],QDrawer:L["a"],QList:M["a"],QItemLabel:v["a"],QPageContainer:S["a"]})},efea:function(t,e,n){"use strict";n("ddb0"),n("e6cf");var a=n("2b0e");let l=null;null===l&&(l=new a["a"]({data(){return{classNames:[]}},methods:{on(t,e,n){if(Object.defineProperty(n,"fnName",{value:e}),void 0===this._events[t])this.$on(t,n);else{let a=!1;for(let l=0;l<this._events[t].length;l++)if(this._events[t][l].fnName===e){a=!0,this._events[t][l]=n;break}a||this.$on(t,n)}},emit(t,...e){this.$emit(t,...e)},off(t,e){this.$off(t)}}}));var i,s,r=l,o=n("71f5"),c=n("7b12"),u=n("2ef0"),h=n.n(u),d={name:"VComponent",data(){return{}},computed:{params(){return this.$route.params},uid(){return`uid_${this._uid}`},id(){let t=void 0===this.$el||void 0===this.$el.getAttribute?null:this.$el.getAttribute("id");return void 0!==this.$attrs&&this.$attrs.id&&(t=this.$attrs.id),t},query(){return this.$route.query}},methods:{addModalHandler(t=null){this.on("Modal.DispatchData",((e,n,a=null)=>{null!==a&&a!==this.id||(null===t?this.modalHandler(e,n):t(e,n))}))},modalHandler(t,e,n=null){},showModal(t,e=null,n=null,a=!1){null!==e&&this.setModalData(e),this.emit("Modal.CMD.Show",t,!0,n,a)},setModalData(t){Object(o["d"])("modalData",t,"tmp")},haveModalData(){return null!==Object(o["b"])("modalData","tmp")},getModalData(){const t=h.a.cloneDeep(Object(o["b"])("modalData","tmp"));return Object(o["c"])("modalData","tmp"),t},hideModal(t){this.emit("Modal.CMD.Show",t,!1)},on(t,...e){let n,a;const l=t.split(",");1===e.length?(n=e[0],a=this.id):2===e.length&&(a=e[0],n=e[1]);for(let i=0;i<l.length;i++)r.on(l[i],a,n)},emit(t,...e){r.emit(t,...e)},off(t,e){r.off(t,e)},async fetch(t,...e){const n=Object(c["b"])();return new Promise(((a,l)=>{n[t](...e).then((t=>{a(t)})).catch((t=>{l(t)}))}))},fetchSync(t,...e){const n=Object(c["b"])(),a=e.pop();n[t](...e).then((t=>{a(null,t)})).catch((t=>{a(t,t)}))},async fetchURL(t,e="GET",n=null){return new Promise(((a,l)=>{Object(c["a"])(t,e,n).then((t=>{a(t)})).catch((t=>{l(t)}))}))},async dispatch(t,...e){return new Promise(((n,a)=>{const l=1===e.length?e[0]:e;this.$store.dispatch(t,l).then((t=>{n(t)})).catch((t=>{a(t)}))}))},to(t){this.$router.push(t)},setReactive(t,e){this[t]=Object.assign({},e,e)},trace(t){console.log(t)},alert(t,e="",n=null){this.$q.dialog({title:e,message:t}).onOk((()=>{null!==n&&n()})).onCancel((()=>{})).onDismiss((()=>{}))},confirm(t,e="",n=null){this.$q.dialog({title:e,message:t,cancel:!0,persistent:!0}).onOk((()=>{null!==n&&n()})).onOk((()=>{})).onCancel((()=>{})).onDismiss((()=>{}))}}},p=d,m=n("2877"),b=Object(m["a"])(p,i,s,!1,null,null,null);e["a"]=b.exports}}]);