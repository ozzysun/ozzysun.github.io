(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{c08d:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"q-pa-md"},[a("q-card",{staticClass:"my-card"},[a("q-card-section",{class:[t.bgColor,t.textColor]},[a("div",{staticClass:"text-h6"},[t._v("設定主題顏色")])]),a("q-card-actions",{attrs:{vertical:"",align:"center"}},[a("q-table",{attrs:{grid:"",title:"",columns:t.columns,data:t.items,"row-key":function(t){return"color_"+t},pagination:t.pagination,"hide-header":"","hide-bottom":""},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"item",fn:function(e){return[a("div",{staticStyle:{margin:"10px"}},[a("q-btn",{staticStyle:{width:"120px",height:"60px"},attrs:{push:"",color:e.row,label:e.row},on:{click:function(a){return t.clickBtn(e.row)}}})],1)]}}])})],1)],1),a("q-card",{staticClass:"my-card"},[a("q-card-section",[a("h6",[t._v("目前選取["),a("span",{class:"text-"+t.theme},[t._v(t._s(t.theme))]),t._v("]色票")])]),a("q-card-actions",{attrs:{align:"left"}},[a("q-chip",{attrs:{square:"",color:t.theme,"text-color":"white"}},[t._v("\n        "+t._s(t.theme)+"\n      ")]),t._l(14,(function(e){return a("q-chip",{key:e,attrs:{square:"",color:t.theme+"-"+e,"text-color":"white"}},[t._v("\n        "+t._s(t.theme+"-"+e)+"\n      ")])})),a("q-chip",{attrs:{square:"",color:t.theme,"text-color":t.theme+"-invert"}},[t._v("\n        invert\n      ")])],2)],1)],1)},i=[],l=a("ded3"),s=a.n(l),o=a("efea"),r=a("2f62"),c={name:"SettingPage",extends:o["a"],data(){return{inputVal:"",columns:[],items:["red","pink","purple","deep-purple","indigo","blue","light-blue","cyan","teal","green","light-green","lime","yellow","amber","orange","deep-orange","brown","grey","blue-grey"],pagination:{page:1,rowsPerPage:50}}},computed:s()(s()({},Object(r["b"])(["branch","theme"])),{},{bgColor(){return`bg-${this.theme}-5`},textColor(){return"text-white"}}),created(){},mounted(){},methods:{clickBtn(t){this.dispatch("SetTheme",t)},alert(t="",e){this.$q.dialog({title:t,message:e}).onOk((()=>{})).onCancel((()=>{})).onDismiss((()=>{}))}}},h=c,d=a("2877"),u=a("f09f"),m=a("a370"),p=a("4b7e"),b=a("eaac"),g=a("9c40"),f=a("b047"),v=a("eebe"),w=a.n(v),_=Object(d["a"])(h,n,i,!1,null,"e6249272",null);e["default"]=_.exports;w()(_,"components",{QCard:u["a"],QCardSection:m["a"],QCardActions:p["a"],QTable:b["a"],QBtn:g["a"],QChip:f["a"]})},efea:function(t,e,a){"use strict";a("ddb0"),a("e6cf");var n=a("2b0e");let i=null;null===i&&(i=new n["a"]({data(){return{classNames:[]}},methods:{on(t,e,a){if(Object.defineProperty(a,"fnName",{value:e}),void 0===this._events[t])this.$on(t,a);else{let n=!1;for(let i=0;i<this._events[t].length;i++)if(this._events[t][i].fnName===e){n=!0,this._events[t][i]=a;break}n||this.$on(t,a)}},emit(t,...e){this.$emit(t,...e)},off(t,e){this.$off(t)}}}));var l,s,o=i,r=a("71f5"),c=a("7b12"),h=a("2ef0"),d=a.n(h),u={name:"VComponent",data(){return{}},computed:{params(){return this.$route.params},uid(){return`uid_${this._uid}`},id(){let t=void 0===this.$el||void 0===this.$el.getAttribute?null:this.$el.getAttribute("id");return void 0!==this.$attrs&&this.$attrs.id&&(t=this.$attrs.id),t},query(){return this.$route.query}},methods:{addModalHandler(t=null){this.on("Modal.DispatchData",((e,a,n=null)=>{null!==n&&n!==this.id||(null===t?this.modalHandler(e,a):t(e,a))}))},modalHandler(t,e,a=null){},showModal(t,e=null,a=null,n=!1){null!==e&&this.setModalData(e),this.emit("Modal.CMD.Show",t,!0,a,n)},setModalData(t){Object(r["d"])("modalData",t,"tmp")},haveModalData(){return null!==Object(r["b"])("modalData","tmp")},getModalData(){const t=d.a.cloneDeep(Object(r["b"])("modalData","tmp"));return Object(r["c"])("modalData","tmp"),t},hideModal(t){this.emit("Modal.CMD.Show",t,!1)},on(t,...e){let a,n;const i=t.split(",");1===e.length?(a=e[0],n=this.id):2===e.length&&(n=e[0],a=e[1]);for(let l=0;l<i.length;l++)o.on(i[l],n,a)},emit(t,...e){o.emit(t,...e)},off(t,e){o.off(t,e)},async fetch(t,...e){const a=Object(c["b"])();return new Promise(((n,i)=>{a[t](...e).then((t=>{n(t)})).catch((t=>{i(t)}))}))},fetchSync(t,...e){const a=Object(c["b"])(),n=e.pop();a[t](...e).then((t=>{n(null,t)})).catch((t=>{n(t,t)}))},async fetchURL(t,e="GET",a=null){return new Promise(((n,i)=>{Object(c["a"])(t,e,a).then((t=>{n(t)})).catch((t=>{i(t)}))}))},async dispatch(t,...e){return new Promise(((a,n)=>{const i=1===e.length?e[0]:e;this.$store.dispatch(t,i).then((t=>{a(t)})).catch((t=>{n(t)}))}))},to(t){this.$router.push(t)},setReactive(t,e){this[t]=Object.assign({},e,e)},trace(t){console.log(t)},alert(t,e="",a=null){this.$q.dialog({title:e,message:t}).onOk((()=>{null!==a&&a()})).onCancel((()=>{})).onDismiss((()=>{}))},confirm(t,e="",a=null){this.$q.dialog({title:e,message:t,cancel:!0,persistent:!0}).onOk((()=>{null!==a&&a()})).onOk((()=>{})).onCancel((()=>{})).onDismiss((()=>{}))}}},m=u,p=a("2877"),b=Object(p["a"])(m,l,s,!1,null,null,null);e["a"]=b.exports}}]);