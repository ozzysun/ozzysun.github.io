(function(e){function t(t){for(var c,n,s=t[0],r=t[1],p=t[2],m=0,d=[];m<s.length;m++)n=s[m],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&d.push(a[n][0]),a[n]=0;for(c in r)Object.prototype.hasOwnProperty.call(r,c)&&(e[c]=r[c]);l&&l(t);while(d.length)d.shift()();return i.push.apply(i,p||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],c=!0,n=1;n<o.length;n++){var s=o[n];0!==a[s]&&(c=!1)}c&&(i.splice(t--,1),e=r(r.s=o[0]))}return e}var c={},n={3:0},a={3:0},i=[];function s(e){return r.p+"js/"+({}[e]||e)+"."+{1:"39b322f0",2:"b72f7628",4:"55275c05",5:"87db7ad5",6:"52a73c91",7:"8089f082",8:"3a1c612c",9:"d32312b5"}[e]+".js"}function r(t){if(c[t])return c[t].exports;var o=c[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.e=function(e){var t=[],o={4:1};n[e]?t.push(n[e]):0!==n[e]&&o[e]&&t.push(n[e]=new Promise((function(t,o){for(var c="css/"+({}[e]||e)+"."+{1:"31d6cfe0",2:"31d6cfe0",4:"e972761e",5:"31d6cfe0",6:"31d6cfe0",7:"31d6cfe0",8:"31d6cfe0",9:"31d6cfe0"}[e]+".css",a=r.p+c,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var p=i[s],m=p.getAttribute("data-href")||p.getAttribute("href");if("stylesheet"===p.rel&&(m===c||m===a))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){p=d[s],m=p.getAttribute("data-href");if(m===c||m===a)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var c=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=c,delete n[e],l.parentNode.removeChild(l),o(i)},l.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(l)})).then((function(){n[e]=0})));var c=a[e];if(0!==c)if(c)t.push(c[2]);else{var i=new Promise((function(t,o){c=a[e]=[t,o]}));t.push(c[2]=i);var p,m=document.createElement("script");m.charset="utf-8",m.timeout=120,r.nc&&m.setAttribute("nonce",r.nc),m.src=s(e);var d=new Error;p=function(t){m.onerror=m.onload=null,clearTimeout(l);var o=a[e];if(0!==o){if(o){var c=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+c+": "+n+")",d.name="ChunkLoadError",d.type=c,d.request=n,o[1](d)}a[e]=void 0}};var l=setTimeout((function(){p({type:"timeout",target:m})}),12e4);m.onerror=m.onload=p,document.head.appendChild(m)}return Promise.all(t)},r.m=e,r.c=c,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)r.d(o,c,function(t){return e[t]}.bind(null,c));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r.oe=function(e){throw console.error(e),e};var p=window["webpackJsonp"]=window["webpackJsonp"]||[],m=p.push.bind(p);p.push=t,p=p.slice();for(var d=0;d<p.length;d++)t(p[d]);var l=m;i.push([0,0]),o()})({0:function(e,t,o){e.exports=o("2f39")},"0000":function(e){e.exports=JSON.parse('{"result":"OK","data":[{"id":"H001","name":"香煎白帶魚","memo":"","img":"https://lh3.googleusercontent.com/p/AF1QipNpP8LyD-tX9hFOTJbI80DdlWMxN5cGqREe-gfd=s239-c","price":220,"cid":["hot"],"taste":[{"id":"spice","name":"辣度","items":[{"id":"spice_00","name":"不加"},{"id":"spice_01","name":"小辣"},{"id":"spice_02","name":"中辣","add":5},{"id":"spice_03","name":"大辣","add":10}]},{"id":"ice","name":"冰塊","items":[{"id":"ice_00","name":"去冰"},{"id":"ice_01","name":"微冰"},{"id":"ice_02","name":"少冰"},{"id":"ice_03","name":"正常冰"}]}],"toppings":[{"id":"to_01","name":"滷蛋","add":10},{"id":"to_02","name":"油豆腐","add":10}],"capacity":[{"id":"ca_01","name":"正常","add":0,"default":true},{"id":"ca_02","name":"大份","add":100}]},{"id":"H002","name":"菲力鮭魚莎莎醬","memo":"","img":"https://lh3.googleusercontent.com/p/AF1QipPga7Bryz22CAUM4badh6iwTUcBetTMiYyOKaeu=s239-c","price":280,"cid":["hot"],"taste":[],"toppings":[],"capacity":[{"id":"ca_01","name":"正常","add":0,"default":true},{"id":"ca_02","name":"大份","add":100}]},{"id":"H003","name":"泡菜炒肉片","memo":"","img":"https://lh3.googleusercontent.com/p/AF1QipM_OLX0KJcRI3UOv9OHewJsvVNex0-yItjs0sKE=s239-c","price":250,"cid":["hot"],"taste":[],"toppings":[],"capacity":[{"id":"ca_01","name":"正常","add":0,"default":true},{"id":"ca_02","name":"大份","add":100}]},{"id":"H004","name":"胡麻醬過貓","memo":"","img":"https://lh3.googleusercontent.com/p/AF1QipOM1PdD0gRGDnt6YSrNImm7ivs7F1a3cO4kjgnn=s239-c","price":150,"cid":["hot"],"taste":[],"toppings":[],"capacity":[{"id":"ca_01","name":"正常","add":0,"default":true},{"id":"ca_02","name":"大份","add":50}]},{"id":"H005","name":"三杯小卷","memo":"","img":"https://lh3.googleusercontent.com/p/AF1QipMowSxj35tkTPgIs_ecWtJlIBXYxsNp2AlVLQF3=s239-c","price":250,"cid":["hot"],"taste":[],"toppings":[],"capacity":[]},{"id":"H006","name":"酸筍龍鬚菜","memo":"","img":"https://lh3.googleusercontent.com/p/AF1QipPNhO8jkJ0dJ6Y5NHsFEQLMxcxc7HNyPbUakCxl=s239-c","price":150,"cid":["hot"],"taste":[],"toppings":[],"capacity":[]},{"id":"H007","name":"香煎菜脯蛋","memo":"","img":"https://lh3.googleusercontent.com/p/AF1QipN6nygB7f7ArGYYrPYvoFrVIENNauRCjyI3SBUq=s239-c","price":120,"cid":["hot"],"taste":[],"toppings":[],"capacity":[]},{"id":"H008","name":"香料椒麻雞","memo":"","img":"https://lh3.googleusercontent.com/p/AF1QipPrCj9cHRT5taC6bow3HwGlOuMiUwi_0Ari3GsK=s239-c","price":250,"cid":["hot"],"taste":[{"id":"spice","name":"辣度","items":[{"id":"spice_01","name":"小辣"},{"id":"spice_02","name":"中辣","add":0},{"id":"spice_03","name":"大辣","add":0}]}],"toppings":[],"capacity":[]},{"id":"H009","name":"私房鹹豬肉","memo":"","img":"https://lh3.googleusercontent.com/p/AF1QipPVxpyVGnGkvBVBJym0dASJviHE98YSmU2YpMYI=s239-c","price":220,"cid":["hot"],"taste":[],"toppings":[],"capacity":[{"id":"ca_01","name":"正常","add":0,"default":true},{"id":"ca_02","name":"大份","add":100}]},{"id":"H010","name":"鮮甜大蝦","memo":"","img":"https://lh3.googleusercontent.com/p/AF1QipNnULwh9z-LapNei8izjc2HcGoLIG4SnZbdCjD1=s239-c","price":300,"cid":["hot"],"taste":[],"toppings":[],"capacity":[{"id":"ca_01","name":"正常","add":0,"default":true},{"id":"ca_02","name":"大份","add":200}]},{"id":"H011","name":"塔香雙茄","memo":"","img":"https://lh3.googleusercontent.com/p/AF1QipPzJAJFrITuTpGuTlOZz6nFZhOq994AKkHmUyt2=s239-c","price":180,"cid":["hot"],"taste":[],"toppings":[],"capacity":[]}]}')},"07b2":function(e){e.exports=JSON.parse('{"result":"OK","data":[{"id":"001","name":"醉雞","memo":"","img":"https://lh3.googleusercontent.com/p/AF1QipNzT57Kb9hHiPwnVx_qlHA-jJbND-yYnbrcep7s=s239-c","price":250,"cid":["groupon"]}]}')},1417:function(e){e.exports=JSON.parse('{"data":[{"id":"A001","name":"招牌控肉飯","memo":"","img":"https://lh3.googleusercontent.com/p/AF1QipN_AuHnD84FNySPXj0jmTC2FgptvsYk11CGTnoi=s239-c","price":85,"cid":["001"]},{"id":"A002","name":"梅干肉丸飯","memo":"","img":"https://lh3.googleusercontent.com/p/AF1QipNoGFEEF8MsOLksSYGuVR5CxedvmBo_WxoG6qvp=s239-c","price":90,"cid":["001"]},{"id":"A003","name":"鯖魚飯","memo":"","img":"https://lh3.googleusercontent.com/p/AF1QipNpP8LyD-tX9hFOTJbI80DdlWMxN5cGqREe-gfd=s239-c","price":100,"cid":["001"]},{"id":"A004","name":"雞排飯","memo":"","img":"https://lh3.googleusercontent.com/p/AF1QipO5hVDIKknA42krYiNEaJQ8Buy5Nhw4lg1PrXbr=s239-c","price":75,"cid":["001"]},{"id":"A005","name":"澎湖花枝排飯","memo":"","img":"https://lh3.googleusercontent.com/p/AF1QipPsl2DdElS0pMdKQKwVKqEW7p7Br2abdVpBxqLj=s239-c","price":120,"cid":["001"]},{"id":"A006","name":"豬排飯","memo":"","img":"https://lh3.googleusercontent.com/p/AF1QipPQdaDInci4UmyOQZgjfpUCn6dp_hHxz8nP88J6=s239-c","price":85,"cid":["001"]},{"id":"A007","name":"魯肉飯","memo":"","img":"https://lh3.googleusercontent.com/p/AF1QipMbAmAUepOF9WThDzwN2Iat8BXcDiuMrm8vXpDn=s239-c","price":35,"cid":["001"]},{"id":"A008","name":"素食套餐","memo":"","img":"https://lh3.googleusercontent.com/p/AF1QipM3qyWx9VeDCnqLrWSAcsCMYGK_3LUvEPni0bh5=s239-c","price":120,"cid":["001"]},{"id":"A009","name":"精緻套餐","memo":"","img":"https://lh3.googleusercontent.com/p/AF1QipPckzEw14xKQkKjCDuDbrO2FGgF_tlN6EHPuJbL=s239-c","price":120,"cid":["001"]}]}')},"22cd":function(e){e.exports=JSON.parse('{"result":"OK","data":[{"id":"001","name":"醉雞","memo":"","img":"https://lh3.googleusercontent.com/p/AF1QipNzT57Kb9hHiPwnVx_qlHA-jJbND-yYnbrcep7s=s239-c","price":250,"capacity":[{"id":"ca_01","name":"正常","add":0,"default":true},{"id":"ca_02","name":"大份","add":250},{"id":"ca_03","name":"100顆","add":225}],"cid":["hot"]},{"id":"002","name":"大白蝦","memo":"","img":"https://lh3.googleusercontent.com/p/AF1QipNWIMenrMjZylPKmyxjo24hOhdX5XZIutVolNH5=s239-c","price":500,"cid":["hot"]}]}')},"2f39":function(e,t,o){"use strict";o.r(t);o("e6cf"),o("5319"),o("7d6e"),o("e54f"),o("985d"),o("31cd");var c=o("2b0e"),n=o("1f91"),a=o("42d2"),i=o("b05d"),s=o("2a19"),r=o("436b"),p=o("b12a");c["a"].use(i["a"],{config:{notify:{}},lang:n["a"],iconSet:a["a"],plugins:{Notify:s["a"],Dialog:r["a"],AppFullscreen:p["a"]}});var m=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"q-app"}},[o("router-view")],1)},d=[],l={name:"App"},h=l,u=o("2877"),g=Object(u["a"])(h,m,d,!1,null,null,null),f=g.exports,_=o("2f62"),b=o("71f5"),O=o("7b12");const E={namespace:!0,state:{language:Object(b["b"])("language",null,"zh"),stageData:"",apiData:"",menuData:"",shop:"",branch:"",env:"",shopList:[],shopInfo:Object(b["b"])("shopInfo",null,null),shopCats:Object(b["b"])("shopCats",null,[]),theme:Object(b["b"])("theme",null,"teal"),shopPool:[]},mutations:{SET_LANGUAGE:(e,t)=>{e.language=t,Object(b["d"])("language",t)},SET_APIDATA:(e,t)=>{e.apiData=t},SET_STAGEDATA:(e,t)=>{e.stageData=t},SET_MENUDATA:(e,t)=>{e.menuData=t},SET_SHOP:(e,t)=>{e.shop=t},SET_BRANCH:(e,t)=>{e.branch=t},SET_SHOP_LIST:(e,t)=>{e.shopList=t},SET_SHOP_INFO:(e,t)=>{e.shopInfo=t,Object(b["d"])("shopInfo",t)},SET_SHOP_CATS:(e,t)=>{e.shopCats=t,Object(b["d"])("shopCats",t)},SET_ENV:(e,t)=>{e.env=t},SET_THEME:(e,t)=>{e.theme=t,Object(b["d"])("theme",t)}},actions:{SetLanguage({commit:e},t){e("SET_LANGUAGE",t)},SetAPIData({commit:e},t){e("SET_APIDATA",t)},SetStageData({commit:e},t){e("SET_STAGEDATA",t)},SetMenuData({commit:e},t){e("SET_MENUDATA",t)},SetShop({commit:e},t){e("SET_SHOP",t)},SetBranch({commit:e},t){e("SET_BRANCH",t)},SetshopInfo({commit:e},t){e("SET_SHOP_INFO",t)},GetShopList({commit:e},t){const o=Object(O["b"])();return new Promise(((t,c)=>{o.shopList().then((o=>{if("OK"===o.result){const c=o.data;e("SET_SHOP_LIST",c),t(c)}else c(o.msg)})).catch((e=>{c(e.msg)}))}))},GetShopInfo({commit:e,state:t},o){const c=Object(O["b"])(),n=o.shop,a=o.branch,i=o.setCurrent;return new Promise(((o,s)=>{let r=null;if(t.shopPool.forEach((e=>{e.shop===n&&e.branch===a&&(r=e)})),null!==r)return i&&e("SET_SHOP_INFO",r),void o(r);c.shopInfo(n,a).then((c=>{if(console.log("response=="),console.log(c),"OK"===c.result){const n=c.data;t.shopPool.push(n),i&&e("SET_SHOP_INFO",n),o(n)}else s(c.msg)})).catch((e=>{s(e.msg)}))}))},GetshopCats({commit:e},t){const o=Object(O["b"])(),c=t.shop,n=t.branch;return new Promise(((t,a)=>{o.category(c,n).then((o=>{if("OK"===o.result){const c=o.data;e("SET_SHOP_CATS",c),t(c)}else a(o.msg)})).catch((e=>{a(e.msg)}))}))},SetEnv({commit:e},t){e("SET_ENV",t)},SetTheme({commit:e},t){e("SET_THEME",t)}}};var y=E,A=o("e1bd");const S={namespace:!0,state:{orderItems:Object(b["b"])("orderItems",null,[]),clientInfo:Object(b["b"])("clientInfo",null,{}),orderId:null,historyOrders:Object(b["b"])("historyOrders",null,[])},mutations:{SET_CLIENT_INFO:(e,t)=>{e.clientInfo=t,Object(b["d"])("clientInfo",t)},RESET_CLIENT:(e,t)=>{e.clientInfo={},Object(b["c"])("clientInfo")},SET_ORDER_ID:(e,t)=>{e.orderId=t,Object(b["d"])("orderId",t)},RESET_ORDER_ID:(e,t)=>{e.orderId=null,Object(b["c"])("orderId")},SET_ORDER_ITEMS:(e,t)=>{e.orderItems=t,Object(b["d"])("orderItems",e.orderItems)},ADD_ORDER_ITEMS:(e,t)=>{Array.isArray(t)||(t=[t]),e.orderItems=e.orderItems.concat(t),Object(b["d"])("orderItems",e.orderItems)},REMOVE_ORDER_ITEMS:(e,t)=>{Array.isArray(t)||(t=[t]),t.forEach((t=>{let o=-1;e.orderItems.forEach(((e,c)=>{e.id===t.id&&(o=c)})),-1!==o&&e.orderItems.splice(o,1)})),Object(b["d"])("orderItems",e.orderItems)},UPDATE_ORDER_ITEMS:(e,t)=>{Array.isArray(t)||(t=[t]),t.forEach((t=>{e.orderItems.forEach(((o,c)=>{o.id===t.id&&(e.orderItems[c]=t)}))})),Object(b["d"])("orderItems",e.orderItems)},RESET_ORDER_ITEMS:(e,t)=>{e.orderItems=[],Object(b["c"])("orderItems")},SAVE_ORDER:(e,t)=>{e.historyOrders.unshift(t),Object(b["d"])("historyOrders",e.historyOrders),e.orderItems=[],Object(b["c"])("orderItems")},UPDATE_HISTORY_ORDER:(e,t)=>{e.historyOrders.forEach((t=>{t.orderId===e.orderId&&(t.items=t.items.concat(e.orderItems))})),Object(b["d"])("historyOrders",e.historyOrders),e.orderId=null,e.orderItems=[],Object(b["c"])("orderItems")}},actions:{SetClientInfo({commit:e},t){e("SET_CLIENT_INFO",t)},ResetClient({commit:e},t){e("RESET_CLIENT",t)},SetOrderId({commit:e},t){e("SET_ORDER_ID",t)},ResetOrderId({commit:e},t){e("RESET_ORDER_ID",t)},GetProductList({commit:e},t){const o=Object(O["b"])(),c=t.shop,n=t.branch,a=t.cid;return new Promise(((e,t)=>{o.productList(c,n,a).then((o=>{if("OK"===o.result){const t=o.data;e(t)}else t(o.msg)})).catch((e=>{t(e.msg)}))}))},SetOrderItems({commit:e},t){e("SET_ORDER_ITEMS",t)},AddOrderItem({commit:e},t){e("ADD_ORDER_ITEMS",t)},RemoveOrderItem({commit:e},t){e("REMOVE_ORDER_ITEMS",t)},UpdateOrderItem({commit:e},t){e("UPDATE_ORDER_ITEMS",t)},ResetOrderItems({commit:e},t){e("RESET_ORDER_ITEMS",t)},SaveOrder({commit:e,state:t},o){const c={clientInfo:t.clientInfo,items:t.orderItems,created:new Date,orderId:Object(A["a"])(6),completed:!1,checked:!1,shop:o.shop,branch:o.branch};e("SAVE_ORDER",c)},UpdateHistoryOrder({commit:e,state:t},o){e("UPDATE_HISTORY_ORDER",o)}}};var I=S,T={app:y,order:I};const F={stageData:e=>e.app.stageData,apiData:e=>e.app.apiData,menuData:e=>e.app.menuData,shop:e=>e.app.shop,branch:e=>e.app.branch,theme:e=>e.app.theme,shopInfo:e=>e.app.shopInfo,shopCats:e=>e.app.shopCats,orderInfo:e=>e.order.orderInfo,orderItems:e=>e.order.orderItems,clientInfo:e=>e.order.clientInfo,historyOrders:e=>e.order.historyOrders,orderId:e=>e.order.orderId};var D=F;c["a"].use(_["a"]);let P=null;var w=function(){return null===P&&(P=new _["a"].Store({getters:D,modules:T,strict:!1})),P},N=o("8c4f");o("ddb0");const j=[{path:"/",component:()=>Promise.all([o.e(0),o.e(2)]).then(o.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([o.e(0),o.e(4)]).then(o.bind(null,"8b24"))}]},{path:"/:shop/:branch",component:()=>Promise.all([o.e(0),o.e(2)]).then(o.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([o.e(0),o.e(6)]).then(o.bind(null,"96d7"))},{path:"all",component:()=>Promise.all([o.e(0),o.e(1)]).then(o.bind(null,"75c9"))},{path:":cid/list",component:()=>Promise.all([o.e(0),o.e(1)]).then(o.bind(null,"75c9"))},{path:"history",component:()=>Promise.all([o.e(0),o.e(5)]).then(o.bind(null,"a615"))},{path:"about",component:()=>Promise.all([o.e(0),o.e(9)]).then(o.bind(null,"7dd8"))},{path:"setting",component:()=>Promise.all([o.e(0),o.e(7)]).then(o.bind(null,"c08d"))}]},{path:"*",component:()=>Promise.all([o.e(0),o.e(8)]).then(o.bind(null,"e51e"))}];var v=j;c["a"].use(N["a"]);let Q,x=null;var R=function(){return null===x&&(Q=new w,x=new N["a"]({scrollBehavior:()=>({x:0,y:0}),routes:v,mode:"hash",base:""}),x.beforeEach((async(e,t,o)=>{e.params.shop&&Q.dispatch("SetShop",e.params.shop),e.params.branch&&Q.dispatch("SetBranch",e.params.branch),e.params.shop&&e.params.branch&&null===Q.getters.shopInfo&&await Q.dispatch("GetShopInfo",{shop:e.params.shop,branch:e.params.branch,setCurrent:!0});const c=e.fullPath;"/"===c||c.lastIndexOf("/")!==c.length-1?o():o({path:c.substr(0,c.length-1)})})),x.afterEach(((e,t)=>{}))),x},k=async function(){const e="function"===typeof w?await w({Vue:c["a"]}):w,t="function"===typeof R?await R({Vue:c["a"],store:e}):R;e.$router=t;const o={router:t,store:e,render:e=>e(f),el:"#q-app"};return{app:o,store:e,router:t}},C=o("a925"),M={failed:"Action failed",success:"Action was successful"},L={"en-us":M};c["a"].use(C["a"]);const H=new C["a"]({locale:"en-us",fallbackLocale:"en-us",messages:L});var Y=({app:e})=>{e.i18n=H},z=o("bc3a"),G=o.n(z);c["a"].prototype.$axios=G.a;var J=o("be83"),K=o.n(J),V=o("cf45"),U=o.n(V),B=o("80fa"),W=o.n(B);const X=Object(b["a"])("VUE_APP_STAGE")?Object(b["a"])("VUE_APP_STAGE"):"develop";Object(O["c"])(U.a,K.a,X);const q=w();q.dispatch("SetAPIData",U.a),q.dispatch("SetStageData",K.a),q.dispatch("SetMenuData",W.a);const Z="";async function $(){const{app:e,store:t,router:o}=await k();let n=!1;const a=e=>{n=!0;const t=Object(e)===e?o.resolve(e).route.fullPath:e;window.location.href=t},i=window.location.href.replace(window.location.origin,""),s=[Y,void 0,void 0];for(let p=0;!1===n&&p<s.length;p++)if("function"===typeof s[p])try{await s[p]({app:e,router:o,store:t,Vue:c["a"],ssrContext:null,redirect:a,urlPath:i,publicPath:Z})}catch(r){return r&&r.url?void(window.location.href=r.url):void console.error("[Quasar] boot error:",r)}!0!==n&&new c["a"](e)}$()},"2fa9":function(e){e.exports=JSON.parse('{"result":"OK","code":"000","msgCode":"000","data":[{"id":"hot","name":"熱門","img":"https://lh3.googleusercontent.com/p/AF1QipMRf8dIMdxnhNJEgiVFwZTdjYAH2AODk9v2KDKf=s239-c"},{"id":"001","name":"飯類/套餐","img":"https://lh3.googleusercontent.com/p/AF1QipPyVNLfSNPCE9DciGMeiCQ4wfhLemZvlPG2QXdu=s239-c"},{"id":"002","name":"麵類","img":"https://lh3.googleusercontent.com/p/AF1QipPHYvINCPXm4ZkFTCU_WaQTS_UieJMFaj8cQCoy=s239-c"},{"id":"003","name":"小菜/其他","img":"https://lh3.googleusercontent.com/p/AF1QipM5SsnzpaLI1oudzLL9xZBkQ3fWyshFbQr3YSLj=s239-c"}],"msg":"Successful!"}')},"31cd":function(e,t,o){},"325e":function(e,t,o){var c={"./eyes_studio/000/001":"1417","./eyes_studio/000/001.json":"1417","./eyes_studio/000/002":"ee40","./eyes_studio/000/002.json":"ee40","./eyes_studio/000/003":"f2b9","./eyes_studio/000/003.json":"f2b9","./eyes_studio/000/category":"d0ae","./eyes_studio/000/category.json":"d0ae","./eyes_studio/000/hot":"ac81","./eyes_studio/000/hot.json":"ac81","./eyes_studio/000/shopInfo":"39c6","./eyes_studio/000/shopInfo.json":"39c6","./how7100/000/001":"54fb","./how7100/000/001.json":"54fb","./how7100/000/002":"8f40","./how7100/000/002.json":"8f40","./how7100/000/003":"5edc","./how7100/000/003.json":"5edc","./how7100/000/category":"2fa9","./how7100/000/category.json":"2fa9","./how7100/000/hot":"0000","./how7100/000/hot.json":"0000","./how7100/000/shopInfo":"c283","./how7100/000/shopInfo.json":"c283","./mei123/000/category":"8ddf","./mei123/000/category.json":"8ddf","./mei123/000/groupon":"07b2","./mei123/000/groupon.json":"07b2","./mei123/000/hot":"22cd","./mei123/000/hot.json":"22cd","./mei123/000/ice":"60c8","./mei123/000/ice.json":"60c8","./mei123/000/shopInfo":"386e","./mei123/000/shopInfo.json":"386e","./shopList":"91d5","./shopList.json":"91d5"};function n(e){var t=a(e);return o(t)}function a(e){if(!o.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}n.keys=function(){return Object.keys(c)},n.resolve=a,e.exports=n,n.id="325e"},"386e":function(e){e.exports=JSON.parse('{"result":"OK","data":{"name":"今馨水餃","shop":"mei123","branch":"000","img":"https://lh3.googleusercontent.com/p/AF1QipMPiwjcf7YyqDE832zRPobNBFqSzMTkISTRcpos=s239-c","memo":"今馨水餃","logo":"https://lh3.googleusercontent.com/p/AF1QipMPiwjcf7YyqDE832zRPobNBFqSzMTkISTRcpos=s239-c","ways":[{"id":"inside","name":"內用"},{"id":"togo","name":"外帶"}],"tables":[{"id":"a00","name":"00"},{"id":"a01","name":"01"},{"id":"a02","name":"02"},{"id":"a03","name":"03"},{"id":"a04","name":"04"}],"dict":{"taste":"口味","toppings":"加料","capacity":"容量"}}}')},"39c6":function(e){e.exports=JSON.parse('{"result":"OK","data":{"name":"斯敦眼鏡","shop":"eyes_studio","branch":"000","img":"https://lh3.googleusercontent.com/3YuKe5LRRpnM0yCXDBmct-QTCgHLrDquVuoHyuKqreHV9S2yIXL3fzUSEWnbd2QvNgmZaR8XXWeYIytY=s239-c","memo":"斯敦眼鏡行-平價眼鏡 太陽眼鏡 推薦隱形眼鏡 濾藍光 全視線 專業配鏡 配鏡片 驗光","logo":"https://lh3.googleusercontent.com/2mFdUN_KBm4QYNMJ4v6W6YPg58R8fca0PdEPFNc8Div9iqykhTCa4ESZpFXPBlVWAqCdP2chyp8ySSxY=s239-c","ways":[{"id":"togo","name":"外帶"}],"tables":[],"dict":{"taste":"規格","toppings":"加購","capacity":"包裝"}}}')},"54fb":function(e){e.exports=JSON.parse('{"result":"OK","data":[{"id":"A001","name":"招牌控肉飯","memo":"","img":"https://lh3.googleusercontent.com/p/AF1QipN_AuHnD84FNySPXj0jmTC2FgptvsYk11CGTnoi=s239-c","price":85,"cid":["001"],"taste":[],"toppings":[{"id":"to_01","name":"滷蛋","add":10},{"id":"to_02","name":"油豆腐","add":10}],"capacity":[{"id":"ca_01","name":"中碗","add":0,"default":true},{"id":"ca_02","name":"大碗","add":10}]},{"id":"A002","name":"梅干肉丸飯","memo":"","img":"https://lh3.googleusercontent.com/p/AF1QipNoGFEEF8MsOLksSYGuVR5CxedvmBo_WxoG6qvp=s239-c","price":90,"cid":[],"taste":[],"toppings":[{"id":"to_01","name":"滷蛋","add":10},{"id":"to_02","name":"油豆腐","add":10}],"capacity":[{"id":"ca_01","name":"中碗","add":0,"default":true},{"id":"ca_02","name":"大碗","add":10}]},{"id":"A003","name":"鯖魚飯","memo":"","img":"https://lh3.googleusercontent.com/p/AF1QipNpP8LyD-tX9hFOTJbI80DdlWMxN5cGqREe-gfd=s239-c","price":100,"cid":["001"],"taste":[],"toppings":[],"capacity":[]},{"id":"A004","name":"雞排飯","memo":"","img":"https://lh3.googleusercontent.com/p/AF1QipO5hVDIKknA42krYiNEaJQ8Buy5Nhw4lg1PrXbr=s239-c","price":75,"cid":["001"],"taste":[{"id":"spice","name":"辣粉","items":[{"id":"spice_00","name":"不加"},{"id":"spice_01","name":"小辣"},{"id":"spice_02","name":"中辣","add":5},{"id":"spice_03","name":"大辣","add":10}]},{"id":"pepper","name":"胡椒","items":[{"id":"pepper_00","name":"不加"},{"id":"pepper_01","name":"少量"}]}],"toppings":[],"capacity":[]},{"id":"A005","name":"澎湖花枝排飯","memo":"","img":"https://lh3.googleusercontent.com/p/AF1QipPsl2DdElS0pMdKQKwVKqEW7p7Br2abdVpBxqLj=s239-c","price":120,"cid":["001"],"taste":[],"toppings":[],"capacity":[]},{"id":"A006","name":"豬排飯","memo":"","img":"https://lh3.googleusercontent.com/p/AF1QipPQdaDInci4UmyOQZgjfpUCn6dp_hHxz8nP88J6=s239-c","price":85,"cid":["001"],"taste":[{"id":"spice","name":"辣粉","items":[{"id":"spice_00","name":"不加"},{"id":"spice_01","name":"小辣"},{"id":"spice_02","name":"中辣","add":5},{"id":"spice_03","name":"大辣","add":10}]},{"id":"pepper","name":"胡椒","items":[{"id":"pepper_00","name":"不加"},{"id":"pepper_01","name":"少量"}]}],"toppings":[],"capacity":[]},{"id":"A007","name":"魯肉飯","memo":"","img":"https://lh3.googleusercontent.com/p/AF1QipMbAmAUepOF9WThDzwN2Iat8BXcDiuMrm8vXpDn=s239-c","price":35,"cid":["001"],"taste":[],"toppings":[{"id":"to_01","name":"滷蛋","add":10},{"id":"to_02","name":"油豆腐","add":10}],"capacity":[{"id":"ca_01","name":"中碗","add":0,"default":true},{"id":"ca_02","name":"大碗","add":10}]},{"id":"A008","name":"素食套餐","memo":"","img":"https://lh3.googleusercontent.com/p/AF1QipM3qyWx9VeDCnqLrWSAcsCMYGK_3LUvEPni0bh5=s239-c","price":120,"cid":["001"],"taste":[],"toppings":[{"id":"to_01","name":"滷蛋","add":10},{"id":"to_02","name":"油豆腐","add":10}],"capacity":[]},{"id":"A009","name":"精緻套餐","memo":"","img":"https://lh3.googleusercontent.com/p/AF1QipPckzEw14xKQkKjCDuDbrO2FGgF_tlN6EHPuJbL=s239-c","price":120,"cid":["001"],"taste":[],"toppings":[{"id":"to_01","name":"滷蛋","add":10},{"id":"to_02","name":"油豆腐","add":10}],"capacity":[]}]}')},"5edc":function(e){e.exports=JSON.parse('{"result":"OK","data":[{"id":"C001","name":"水餃一份","memo":"","img":"https://lh3.googleusercontent.com/p/AF1QipOiLAwWWTHNX4DEqVfuRxqHcit8yAhcRUTdsD87=s239-c","price":70,"cid":["003"],"taste":[],"toppings":[],"capacity":[{"id":"ca_01","name":"10顆","add":0,"default":true},{"id":"ca_02","name":"15顆","add":30},{"id":"ca_03","name":"20顆","add":60}]},{"id":"C002","name":"紅燒素獅子頭","memo":"","img":"https://lh3.googleusercontent.com/p/AF1QipMdhnvHEs8wv6yeMifdzp5KcxlKYgxYxYkCF8zS=s239-c","price":120,"cid":["003"],"taste":[],"toppings":[],"capacity":[]},{"id":"C003","name":"炒青菜","memo":"","img":"https://lh3.googleusercontent.com/p/AF1QipNyL2hAb5RYQmmyglh0HjnlvkpKgsnEOzgyMNNj=s239-c","price":100,"cid":["003"],"taste":[],"toppings":[],"capacity":[]},{"id":"C004","name":"香煎鯖魚","memo":"","img":"https://lh3.googleusercontent.com/p/AF1QipOev4G7fc2mbKeBsiZZ_ehZWzU3PYuhHjbiPkEp=s239-c","price":100,"cid":["003"],"taste":[],"toppings":[],"capacity":[]},{"id":"C005","name":"各式小菜","memo":"","img":"https://lh3.googleusercontent.com/p/AF1QipPltuH1G4ElEix9xdi2jZBWLD-iUYjYEvnzGA0w=s239-c","price":35,"cid":["003"],"taste":[],"toppings":[],"capacity":[]},{"id":"C006","name":"每日例湯","memo":"","img":"https://lh3.googleusercontent.com/p/AF1QipP8V5Xz6N_GV5bpEMCd5L7N-Jz_qrI2hNUyHWhk=s239-c","price":35,"cid":["003"],"taste":[],"toppings":[],"capacity":[]}]}')},"60c8":function(e){e.exports=JSON.parse('{"result":"OK","data":[{"id":"001","name":"高麗菜水餃","memo":"","img":"https://lh3.googleusercontent.com/p/AF1QipOf0DlSW50fsr_la4BL-R_7ikYDowh4VUnE9OFx=s239-c","price":75,"capacity":[{"id":"ca_01","name":"25顆","add":0,"default":true},{"id":"ca_02","name":"50顆","add":75},{"id":"ca_03","name":"100顆","add":225}],"cid":["ice"]},{"id":"002","name":"韭菜水餃","memo":"","img":"https://lh3.googleusercontent.com/p/AF1QipOeKYevRXYqvwbnvwIXr56LnTy8ZiB9GkH9inZZ=s239-c","price":75,"capacity":[{"id":"ca_01","name":"25顆","add":0,"default":true},{"id":"ca_02","name":"50顆","add":75},{"id":"ca_03","name":"100顆","add":225}],"cid":["ice"]},{"id":"003","name":"蝦仁水餃","memo":"","img":"https://lh3.googleusercontent.com/p/AF1QipOiLAwWWTHNX4DEqVfuRxqHcit8yAhcRUTdsD87=s239-c","price":160,"capacity":[{"id":"ca_01","name":"20顆","add":0,"default":true},{"id":"ca_02","name":"50顆","add":240},{"id":"ca_03","name":"100顆","add":640}],"cid":["ice"]},{"id":"004","name":"菜肉餛飩","memo":"","img":"https://lh3.googleusercontent.com/HgB31VacSSbPwe3sQc6M3RrXX-zLM_EkiVbhZ_kUEgX076Gk0YIvsKJhaSzk1qqSrOaX2T3kuINmrCi0=s239-c","price":100,"capacity":[{"id":"ca_01","name":"10顆","add":0,"default":true},{"id":"ca_02","name":"20顆","add":100},{"id":"ca_03","name":"50顆","add":400}],"cid":["ice"]},{"id":"005","name":"蝦仁餛飩","memo":"","img":"https://lh3.googleusercontent.com/HgB31VacSSbPwe3sQc6M3RrXX-zLM_EkiVbhZ_kUEgX076Gk0YIvsKJhaSzk1qqSrOaX2T3kuINmrCi0=s239-c","price":150,"capacity":[{"id":"ca_01","name":"10顆","add":0,"default":true},{"id":"ca_02","name":"20顆","add":150},{"id":"ca_03","name":"50顆","add":600}],"cid":["ice"]}]}')},"71f5":function(e,t,o){"use strict";(function(e){o.d(t,"d",(function(){return r})),o.d(t,"b",(function(){return p})),o.d(t,"c",(function(){return m})),o.d(t,"a",(function(){return l}));var c=o("cff8"),n=o.n(c);const a="oz",i="local";let s=a;const r=(e,t,o=null)=>{switch(null===o&&(o=i),e=d(e),o){case"local":n.a.set(e,t);break;case"tmp":void 0===window.__tmp__&&(window.__tmp__={}),window.__tmp__[e]=t;break}},p=(e,t=null,o=null)=>{null===t&&(t=i),e=d(e);let c=null;switch(t){case"local":c=n.a.get(e);break;case"tmp":void 0===window.__tmp__&&(window.__tmp__={}),c=void 0!==window.__tmp__[e]?window.__tmp__[e]:null}return c&&null!==c?c:(r(e,o),o)},m=(e,t=null)=>{switch(null===t&&(t=i),e=d(e),t){case"local":n.a.remove(e);break;case"tmp":window.__tmp__&&window.__tmp__[e]&&delete window.__tmp__[e];break}},d=(e,t=null)=>(null===t&&(t=i),-1===e.indexOf(s)?`${s}/${e}`:e),l=t=>e.env[t]}).call(this,o("4362"))},"7b12":function(e,t,o){"use strict";o.d(t,"c",(function(){return E})),o.d(t,"b",(function(){return y})),o.d(t,"a",(function(){return A}));o("498a"),o("e6cf"),o("2b3d"),o("ddb0");var c=o("bc3a"),n=o.n(c);const a=n.a.create({timeout:15e3});a.interceptors.request.use((e=>e),(e=>(console.log(e),Promise.reject(e)))),a.interceptors.response.use((e=>{const t=e.data;return t.errors?Promise.reject(t):t}),(e=>Promise.reject(e)));var i=a;var s=o("2ef0"),r=o.n(s);o("5319");const p=e=>{e=e.replace(/[[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)"),o=t.exec(location.search);return null===o?"":decodeURIComponent(o[1].replace(/\+/g," "))};let m=null,d=null,l=null,h=null,u=null;const g=()=>{h=b(l),console.log(`branch=${l} apiData==`),console.log(h);const e={},t=O();for(const c in h){let n=h[c].host;""!==t&&(n=t);const a=h[c].api;for(const t in a){let c=[];c=-1!==a[t].method.indexOf(",")?a[t].method.trim().toLocaleUpperCase().split(","):[a[t].method.trim().toLocaleUpperCase()];let s=t;c.forEach((r=>{if(c.length>1&&"GET"!==r)switch(r){case"POST":s=`${t}Create`;break;case"PUT":s=`${t}Update`;break;case"DELETE":s=`${t}Delete`;break}if(a[t].useFake&&void 0!==a[t].fakeData)return e[s]=function(...e){let c=_(a[t].fakeData,e);-1===c.indexOf(".json")&&(c=`${c}.json`);const n=o("325e")(`./${c}`);return new Promise(((e,t)=>{e(n)}))},void(e[s].URL=n+a[t].url);e[s]=function(...e){const o={url:a[t].url,method:r};if(e.length>0){const t=e[e.length-1],c=null!==t&&"number"!==typeof t&&"string"!==typeof t;if(c){const t=e.pop();"GET"===r?o.params=t:o.data=t}o.url=f(n,o.url,e)}else o.url=`${n}${a[s].url}`;return i(o)},e[s].URL=n+a[t].url}))}}return e},f=(e,t,o=null)=>{if(-1===t.indexOf("http")){let c=`${e}/${_(t,o)}`;return t.endsWith("/")&&(c=`${c}/`),c}return t},_=(e,t)=>{let o=e.split("/").filter((e=>""!==e)),c=0;return null!==t&&t!==[]&&(o.forEach(((e,n)=>{-1!==e.indexOf(":")&&(o[n]=t[c],c++)})),o=r.a.without(o,void 0)),`${o.join("/")}`},b=e=>{const t=d[e].host,o={};return m.forEach((e=>{const c=e.host;o[c]={},o[c].api=e.api,o[c].host=t[c]})),o},O=(e="a")=>{let t=p(e);return""!==t&&-1===t.indexOf("http")&&(t=`http://${t}`),t},E=(e,t,o)=>{m=e,d=t,l=o,u=g()},y=()=>(null===u&&(u=g()),u),A=async(e,t="GET",o=null)=>{-1===e.indexOf("http")&&(e=`http://${e}`),t=t.toUpperCase();const c={url:e,method:t};return null!==o&&("GET"===t?c.params=o:c.data=o),new Promise(((e,t)=>{i(c).then((t=>{e(t)})).catch((e=>{t(e)}))}))}},"80fa":function(e,t){const o=[[{title:"首頁",caption:"首頁店家列表",icon:"home",link:"/"},{title:"點餐",caption:"點餐",icon:"restaurant_menu",link:"/:shop/:branch"},{title:"訂單記錄",caption:"查詢訂單記錄",icon:"colorize",link:"/:shop/:branch/history",external:!1},{title:"about",caption:"關於我們",icon:"chat",link:"/:shop/:branch/about",external:!1},{title:"設定",caption:"設定主題顏色",icon:"colorize",link:"/:shop/:branch/setting",external:!1}]];e.exports=o.length<=1?o[0]:o},"8ddf":function(e){e.exports=JSON.parse('{"result":"OK","code":"000","data":[{"id":"hot","name":"熱門","img":"https://lh3.googleusercontent.com/p/AF1QipNzT57Kb9hHiPwnVx_qlHA-jJbND-yYnbrcep7s=s239-c"},{"id":"ice","name":"手工水餃","img":"https://lh3.googleusercontent.com/6vDOzxlU50VXmVLMfmoVw1E00Fs7UTDyLBFI6sho-_sJ3mUvxHQORQmpD1tkimM4BNA7dzrMAem47ysQ=s239-c"},{"id":"groupon","name":"團購","img":"https://lh3.googleusercontent.com/p/AF1QipMjoaQDnqiGnm3zxOxl1hL-zqPFWiUWY4aKgdBO=s239-c"}],"msg":"Successful!"}')},"8f40":function(e){e.exports=JSON.parse('{"result":"OK","data":[{"id":"B001","name":"泡菜海鮮麵","memo":"","img":"https://lh3.googleusercontent.com/p/AF1QipMKYRc8btBPL6qVeFfEY_Y5bXK2mrXKW2R93ZoQ=s239-c","price":120,"cid":["002"],"taste":[],"toppings":[],"capacity":[{"id":"ca_01","name":"正常","add":0,"default":true},{"id":"ca_02","name":"加麵","add":10}]},{"id":"B002","name":"海鮮麵","memo":"","img":"https://lh3.googleusercontent.com/p/AF1QipONQiVNdF_b_o4tbmd4ZUicXZ4yl3YVE48ffOmd=s239-c","price":100,"cid":["002"],"taste":[],"toppings":[],"capacity":[{"id":"ca_01","name":"正常","add":0,"default":true},{"id":"ca_02","name":"加麵","add":10}]},{"id":"B003","name":"蔬食麵","memo":"","img":"https://lh3.googleusercontent.com/p/AF1QipN4v0cD3WhCSD87hKpX8VLej0dTlMBPa8QasHWz=s239-c","price":100,"cid":["002"],"taste":[],"toppings":[],"capacity":[{"id":"ca_01","name":"正常","add":0,"default":true},{"id":"ca_02","name":"加麵","add":10}]},{"id":"B004","name":"素食湯麵","memo":"","img":"https://lh3.googleusercontent.com/p/AF1QipP1oza2eMbDxcQk_PBkrGJAZfYg_WIITVqXuijf=s239-c","price":100,"cid":["002"],"taste":[],"toppings":[],"capacity":[{"id":"ca_01","name":"正常","add":0,"default":true},{"id":"ca_02","name":"加麵","add":10}]}]}')},"91d5":function(e){e.exports=JSON.parse('{"result":"OK","data":[{"name":"馨家小廚","shop":"how7100","branch":"000","img":"https://lh3.googleusercontent.com/ompOJ7JFwgEs_th7oJ_rvDQTzzN3gPSuF7JwejLEsXFi-GYWC9MW-JNwb06DIXwL3DQBG760d3TWG0zfjA=s239-c","memo":"馨家小廚 memo","logo":"https://lh3.googleusercontent.com/ompOJ7JFwgEs_th7oJ_rvDQTzzN3gPSuF7JwejLEsXFi-GYWC9MW-JNwb06DIXwL3DQBG760d3TWG0zfjA=s239-c"},{"name":"今馨水餃","shop":"mei123","branch":"000","img":"https://lh3.googleusercontent.com/p/AF1QipMPiwjcf7YyqDE832zRPobNBFqSzMTkISTRcpos=s239-c","memo":"今馨水餃","logo":"https://lh3.googleusercontent.com/p/AF1QipMPiwjcf7YyqDE832zRPobNBFqSzMTkISTRcpos=s239-c"},{"name":"斯敦眼鏡","shop":"eyes_studio","branch":"000","img":"https://lh3.googleusercontent.com/3YuKe5LRRpnM0yCXDBmct-QTCgHLrDquVuoHyuKqreHV9S2yIXL3fzUSEWnbd2QvNgmZaR8XXWeYIytY=s239-c","memo":"斯敦眼鏡行-平價眼鏡 太陽眼鏡 推薦隱形眼鏡 濾藍光 全視線 專業配鏡 配鏡片 驗光","logo":"https://lh3.googleusercontent.com/2mFdUN_KBm4QYNMJ4v6W6YPg58R8fca0PdEPFNc8Div9iqykhTCa4ESZpFXPBlVWAqCdP2chyp8ySSxY=s239-c"}]}')},ac81:function(e){e.exports=JSON.parse('{"data":[{"id":"001","name":"香煎白帶魚","memo":"","img":"https://lh3.googleusercontent.com/p/AF1QipNpP8LyD-tX9hFOTJbI80DdlWMxN5cGqREe-gfd=s239-c","price":220,"cid":["hot"]},{"id":"002","name":"菲力鮭魚莎莎醬","memo":"","img":"https://lh3.googleusercontent.com/p/AF1QipPga7Bryz22CAUM4badh6iwTUcBetTMiYyOKaeu=s239-c","price":280,"cid":["hot"]},{"id":"003","name":"泡菜炒肉片","memo":"","img":"https://lh3.googleusercontent.com/p/AF1QipM_OLX0KJcRI3UOv9OHewJsvVNex0-yItjs0sKE=s239-c","price":250,"cid":["hot"]},{"id":"004","name":"胡麻醬過貓","memo":"","img":"https://lh3.googleusercontent.com/p/AF1QipOM1PdD0gRGDnt6YSrNImm7ivs7F1a3cO4kjgnn=s239-c","price":150,"cid":["hot"]},{"id":"005","name":"三杯小卷","memo":"","img":"https://lh3.googleusercontent.com/p/AF1QipMowSxj35tkTPgIs_ecWtJlIBXYxsNp2AlVLQF3=s239-c","price":250,"cid":["hot"]},{"id":"006","name":"酸筍龍鬚菜","memo":"","img":"https://lh3.googleusercontent.com/p/AF1QipPNhO8jkJ0dJ6Y5NHsFEQLMxcxc7HNyPbUakCxl=s239-c","price":150,"cid":["hot"]},{"id":"007","name":"香煎菜脯蛋","memo":"","img":"https://lh3.googleusercontent.com/p/AF1QipN6nygB7f7ArGYYrPYvoFrVIENNauRCjyI3SBUq=s239-c","price":120,"cid":["hot"]},{"id":"008","name":"香料椒麻雞","memo":"","img":"https://lh3.googleusercontent.com/p/AF1QipPrCj9cHRT5taC6bow3HwGlOuMiUwi_0Ari3GsK=s239-c","price":250,"cid":["hot"]},{"id":"009","name":"私房鹹豬肉","memo":"","img":"https://lh3.googleusercontent.com/p/AF1QipPVxpyVGnGkvBVBJym0dASJviHE98YSmU2YpMYI=s239-c","price":220,"cid":["hot"]},{"id":"010","name":"鮮甜大蝦","memo":"","img":"https://lh3.googleusercontent.com/p/AF1QipNnULwh9z-LapNei8izjc2HcGoLIG4SnZbdCjD1=s239-c","price":300,"cid":["hot"]},{"id":"011","name":"塔香雙茄","memo":"","img":"https://lh3.googleusercontent.com/p/AF1QipPzJAJFrITuTpGuTlOZz6nFZhOq994AKkHmUyt2=s239-c","price":180,"cid":["hot"]}]}')},be83:function(e,t){const o=[{master:{host:{default:"https://ec.jabezpos.com/api",crm:"http://59.127.8.37:12345",cmd:"http://ecsrv.jabezpos.com:13579"},socket:{url:"https://ec.jabezpos.com",path:"/socket/socket.io",reconnectDelay:5e3,reconnectAttemps:20}},develop:{host:{default:"https://rd.jabezpos.com/api",crm:"http://rd.jabezpos.com/api",cmd:"http://rd.jabezpos.com:13579"},socket:{url:"https://rd.jabezpos.com",path:"/socket/socket.io",reconnectDelay:5e3,reconnectAttemps:20}},local:{host:{default:"http://localhost:12345",crm:"http://localhost:12345",cmd:"http://localhost:13579"},socket:{url:"http://localhost:54321",path:"/socket.io",reconnectDelay:5e3,reconnectAttemps:20}}}];e.exports=o.length<=1?o[0]:o},c283:function(e){e.exports=JSON.parse('{"result":"OK","data":{"name":"馨家小廚","shop":"how7100","branch":"000","img":"https://lh3.googleusercontent.com/ompOJ7JFwgEs_th7oJ_rvDQTzzN3gPSuF7JwejLEsXFi-GYWC9MW-JNwb06DIXwL3DQBG760d3TWG0zfjA=s239-c","memo":"馨家小廚 memo","logo":"https://lh3.googleusercontent.com/ompOJ7JFwgEs_th7oJ_rvDQTzzN3gPSuF7JwejLEsXFi-GYWC9MW-JNwb06DIXwL3DQBG760d3TWG0zfjA=s239-c","ways":[{"id":"inside","name":"內用"},{"id":"togo","name":"外帶"}],"tables":[{"id":"a00","name":""},{"id":"a01","name":"01"},{"id":"a02","name":"02"},{"id":"a03","name":"03"},{"id":"a04","name":"04"}],"dict":{"taste":"口味","toppings":"加料","capacity":"容量"}}}')},cf45:function(e,t){const o=[[{host:"default",api:{shopList:{common:"店家列表",url:"/menu/shopList",method:"GET",useFake:!0,fakeData:"shopList.json"},shopInfo:{common:"店家詳細資料",url:"/menu/store/:shop/:branch",method:"GET",useFake:!0,fakeData:":shop/:branch/shopInfo.json"},category:{common:"分類",url:"/menu/menu/:shop/:branch",method:"GET",useFake:!0,fakeData:":shop/:branch/category.json"},productList:{common:"取得店家菜單",url:"/menu/:shop/:branch/:cid",method:"GET",useFake:!0,fakeData:":shop/:branch/:cid"}}}]];e.exports=o.length<=1?o[0]:o},d0ae:function(e){e.exports=JSON.parse('{"result":"OK","code":"000","msgCode":"000","data":[{"id":"hot","name":"熱門","img":"https://lh3.googleusercontent.com/p/AF1QipP5GzAliST3-037fdtxChcvKtcHznyhThNWN_o_=s239-c"},{"id":"001","name":"太陽眼鏡","img":"https://lh3.googleusercontent.com/n9yvhm1eo8VQmx8V6qS-4Gvzwf5NV-qocrly7TjFo06OnxRlCaWEHszXWJd3omYsXSYiPON9WDmIj84z=s239-c"},{"id":"002","name":"隱形眼鏡","img":"https://lh3.googleusercontent.com/NLY_o-NHzK1c-V4IgePkbUGZGPhYS_czjUtTwASESyxHyg-VxZUHlJdYRzJlHHmpvWAKfKTwHkfVoonG=s239-c"},{"id":"003","name":"專業配鏡鏡框","img":"https://lh3.googleusercontent.com/NbavNhFtwbRrX8x-9b-ua_oT52kWT-CemThdJBuDn2k33XVxZyoHvgZFuJkrgS8jRPMt33S5xlRaQowQ=s239-c"}],"msg":"Successful!"}')},ee40:function(e){e.exports=JSON.parse('{"data":[{"id":"B001","name":"泡菜海鮮麵","memo":"","img":"https://lh3.googleusercontent.com/p/AF1QipMKYRc8btBPL6qVeFfEY_Y5bXK2mrXKW2R93ZoQ=s239-c","price":120,"cid":["002"]},{"id":"B002","name":"海鮮麵","memo":"","img":"https://lh3.googleusercontent.com/p/AF1QipONQiVNdF_b_o4tbmd4ZUicXZ4yl3YVE48ffOmd=s239-c","price":100,"cid":["002"]},{"id":"B003","name":"蔬食麵","memo":"","img":"https://lh3.googleusercontent.com/p/AF1QipN4v0cD3WhCSD87hKpX8VLej0dTlMBPa8QasHWz=s239-c","price":100,"cid":["002"]},{"id":"B004","name":"素食湯麵","memo":"","img":"https://lh3.googleusercontent.com/p/AF1QipP1oza2eMbDxcQk_PBkrGJAZfYg_WIITVqXuijf=s239-c","price":100,"cid":["002"]}]}')},f2b9:function(e){e.exports=JSON.parse('{"data":[{"id":"C001","name":"水餃一份(10顆)","memo":"","img":"https://lh3.googleusercontent.com/p/AF1QipOiLAwWWTHNX4DEqVfuRxqHcit8yAhcRUTdsD87=s239-c","price":70,"cid":["003"]},{"id":"C002","name":"紅燒素獅子頭","memo":"","img":"https://lh3.googleusercontent.com/p/AF1QipMdhnvHEs8wv6yeMifdzp5KcxlKYgxYxYkCF8zS=s239-c","price":120,"cid":["003"]},{"id":"C003","name":"炒青菜","memo":"","img":"https://lh3.googleusercontent.com/p/AF1QipNyL2hAb5RYQmmyglh0HjnlvkpKgsnEOzgyMNNj=s239-c","price":100,"cid":["003"]},{"id":"C004","name":"香煎鯖魚","memo":"","img":"https://lh3.googleusercontent.com/p/AF1QipOev4G7fc2mbKeBsiZZ_ehZWzU3PYuhHjbiPkEp=s239-c","price":100,"cid":["003"]},{"id":"C005","name":"各式小菜","memo":"","img":"https://lh3.googleusercontent.com/p/AF1QipPltuH1G4ElEix9xdi2jZBWLD-iUYjYEvnzGA0w=s239-c","price":35,"cid":["003"]},{"id":"C006","name":"每日例湯","memo":"","img":"https://lh3.googleusercontent.com/p/AF1QipP8V5Xz6N_GV5bpEMCd5L7N-Jz_qrI2hNUyHWhk=s239-c","price":35,"cid":["003"]}]}')}});