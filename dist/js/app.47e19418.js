(function(e){function t(t){for(var n,a,i=t[0],s=t[1],u=t[2],l=0,d=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,a=1;a<r.length;a++){var i=r[a];0!==o[i]&&(n=!1)}n&&(c.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},o={app:0},c=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-10b86dd9":"a437d45e","chunk-2d0d05dc":"01331910","chunk-2d217a99":"d3137e8e","chunk-2d21a3d2":"f22f8b27","chunk-4c6677a3":"56e20ce4","chunk-53c8ec65":"3df9d86c","chunk-5f4ad635":"a0162105","chunk-87dccdcc":"d9bc727a","chunk-c420df12":"d03dcd31"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r={"chunk-87dccdcc":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-10b86dd9":"31d6cfe0","chunk-2d0d05dc":"31d6cfe0","chunk-2d217a99":"31d6cfe0","chunk-2d21a3d2":"31d6cfe0","chunk-4c6677a3":"31d6cfe0","chunk-53c8ec65":"31d6cfe0","chunk-5f4ad635":"31d6cfe0","chunk-87dccdcc":"21eb15de","chunk-c420df12":"31d6cfe0"}[e]+".css",o=s.p+n,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===n||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete a[e],f.parentNode.removeChild(f),r(c)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,r[1](d)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},2805:function(e,t,r){},"32d1":function(e,t,r){},4360:function(e,t,r){"use strict";var n=r("1da1"),a=(r("96cf"),r("d3b7"),r("2b0e")),o=r("2f62"),c=(r("b0c0"),r("260b")),i={actions:{login:function(e,t){return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.dispatch,n=e.commit,a=t.email,o=t.password,r.prev=2,r.next=5,c["a"].auth().signInWithEmailAndPassword(a,o);case 5:r.next=11;break;case 7:throw r.prev=7,r.t0=r["catch"](2),n("setError",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[2,7]])})))()},register:function(e,t){return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a,o,i,s,u;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.dispatch,a=e.commit,o=t.email,i=t.password,s=t.name,r.prev=2,r.next=5,c["a"].auth().createUserWithEmailAndPassword(o,i);case 5:return r.next=7,n("getUid");case 7:return u=r.sent,r.next=10,c["a"].database().ref("/users/".concat(u,"/info")).set({bill:1e4,name:s});case 10:r.next=16;break;case 12:throw r.prev=12,r.t0=r["catch"](2),a("setError",r.t0),r.t0;case 16:case"end":return r.stop()}}),r,null,[[2,12]])})))()},getUid:function(){var e=c["a"].auth().currentUser;return e?e.uid:null},logout:function(e){return Object(n["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,c["a"].auth().signOut();case 3:r("clearInfo");case 4:case"end":return t.stop()}}),t)})))()}}},s=r("5530"),u={state:{info:{}},mutations:{setInfo:function(e,t){e.info=t},clearInfo:function(e){e.info={locale:e.info.locale}}},actions:{updateInfo:function(e,t){return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a,o,i,u;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.dispatch,a=e.commit,o=e.getters,r.prev=1,r.next=4,n("getUid");case 4:return i=r.sent,u=Object(s["a"])(Object(s["a"])({},o.info),t),r.next=8,c["a"].database().ref("/users/".concat(i,"/info")).update(u);case 8:a("setInfo",u),r.next=15;break;case 11:throw r.prev=11,r.t0=r["catch"](1),a("setError",r.t0),r.t0;case 15:case"end":return r.stop()}}),r,null,[[1,11]])})))()},fetchInfo:function(e){return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,n,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.dispatch,n=e.commit,t.prev=1,t.next=4,r("getUid");case 4:return a=t.sent,t.next=7,c["a"].database().ref("/users/".concat(a,"/info")).once("value");case 7:o=t.sent.val(),n("setInfo",o),t.next=15;break;case 11:throw t.prev=11,t.t0=t["catch"](1),n("setError",t.t0),t.t0;case 15:case"end":return t.stop()}}),t,null,[[1,11]])})))()}},getters:{info:function(e){return e.info}}},l=(r("d81d"),r("b64b"),{actions:{fetchCategories:function(e){return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,n,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,n=e.dispatch,t.prev=1,t.next=4,n("getUid");case 4:return a=t.sent,t.next=7,c["a"].database().ref("/users/".concat(a,"/categories")).once("value");case 7:if(t.t0=t.sent.val(),t.t0){t.next=10;break}t.t0={};case 10:return o=t.t0,t.abrupt("return",Object.keys(o).map((function(e){return Object(s["a"])(Object(s["a"])({},o[e]),{},{id:e})})));case 14:throw t.prev=14,t.t1=t["catch"](1),r("setError",t.t1),t.t1;case 18:case"end":return t.stop()}}),t,null,[[1,14]])})))()},fetchCategoryById:function(e,t){return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a,o,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,a=e.dispatch,r.prev=1,r.next=4,a("getUid");case 4:return o=r.sent,r.next=7,c["a"].database().ref("/users/".concat(o,"/categories")).child(t).once("value");case 7:if(r.t0=r.sent.val(),r.t0){r.next=10;break}r.t0={};case 10:return i=r.t0,r.abrupt("return",Object(s["a"])(Object(s["a"])({},i),{},{id:t}));case 14:throw r.prev=14,r.t1=r["catch"](1),n("setError",r.t1),r.t1;case 18:case"end":return r.stop()}}),r,null,[[1,14]])})))()},updateCategory:function(e,t){return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a,o,i,s,u;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,a=e.dispatch,o=t.title,i=t.limit,s=t.id,r.prev=2,r.next=5,a("getUid");case 5:return u=r.sent,r.next=8,c["a"].database().ref("/users/".concat(u,"/categories")).child(s).update({title:o,limit:i});case 8:r.next=14;break;case 10:throw r.prev=10,r.t0=r["catch"](2),n("setError",r.t0),r.t0;case 14:case"end":return r.stop()}}),r,null,[[2,10]])})))()},createCategory:function(e,t){return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a,o,i,s,u;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,a=e.dispatch,o=t.title,i=t.limit,r.prev=2,r.next=5,a("getUid");case 5:return s=r.sent,r.next=8,c["a"].database().ref("/users/".concat(s,"/categories")).push({title:o,limit:i});case 8:return u=r.sent,r.abrupt("return",{title:o,limit:i,id:u.key});case 12:throw r.prev=12,r.t0=r["catch"](2),n("setError",r.t0),r.t0;case 16:case"end":return r.stop()}}),r,null,[[2,12]])})))()}}}),d={actions:{createRecord:function(e,t){return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.dispatch,a=e.commit,r.prev=1,r.next=4,n("getUid");case 4:return o=r.sent,r.next=7,c["a"].database().ref("/users/".concat(o,"/records")).push(t);case 7:return r.abrupt("return",r.sent);case 10:throw r.prev=10,r.t0=r["catch"](1),a("setError",r.t0),r.t0;case 14:case"end":return r.stop()}}),r,null,[[1,10]])})))()},fetchRecords:function(e){return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,n,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.dispatch,n=e.commit,t.prev=1,t.next=4,r("getUid");case 4:return a=t.sent,t.next=7,c["a"].database().ref("/users/".concat(a,"/records")).once("value");case 7:if(t.t0=t.sent.val(),t.t0){t.next=10;break}t.t0={};case 10:return o=t.t0,t.abrupt("return",Object.keys(o).map((function(e){return Object(s["a"])(Object(s["a"])({},o[e]),{},{id:e})})));case 14:throw t.prev=14,t.t1=t["catch"](1),n("setError",t.t1),t.t1;case 18:case"end":return t.stop()}}),t,null,[[1,14]])})))()},fetchRecordById:function(e,t){return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a,o,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.dispatch,a=e.commit,r.prev=1,r.next=4,n("getUid");case 4:return o=r.sent,r.next=7,c["a"].database().ref("/users/".concat(o,"/records")).child(t).once("value");case 7:if(r.t0=r.sent.val(),r.t0){r.next=10;break}r.t0={};case 10:return i=r.t0,r.abrupt("return",Object(s["a"])(Object(s["a"])({},i),{},{id:t}));case 14:throw r.prev=14,r.t1=r["catch"](1),a("setError",r.t1),r.t1;case 18:case"end":return r.stop()}}),r,null,[[1,14]])})))()}}};a["a"].use(o["a"]);t["a"]=new o["a"].Store({state:{error:null},mutations:{setError:function(e,t){e.error=t},clearError:function(e){e.error=null}},actions:{fetchCurrency:function(){return Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="49656929fa6f6834e9007f4334997cd3",e.next=3,fetch("http://data.fixer.io/api/latest?access_key=".concat(t,"&symbols=USD,EUR,RUB"));case 3:return r=e.sent,e.next=6,r.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})))()}},getters:{error:function(e){return e.error}},modules:{auth:i,info:u,category:l,record:d}})},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("4de4");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("transition",{attrs:{name:"fade",mode:"out-in"}},[r(e.layout,{tag:"component"},[r("router-view")],1)],1)],1)},o=[],c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"empty-layout"},[r("router-view")],1)},i=[],s=r("b444"),u={computed:{error:function(){return this.$store.getters.error}},watch:{error:function(e){this.$error(s["a"][e.code]||"Что-то пошло не так")}}},l=u,d=r("2877"),f=Object(d["a"])(l,c,i,!1,null,null,null),p=f.exports,m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.loading?r("Loader"):r("div",{staticClass:"app-main-layout"},[r("div",{staticClass:"logo"},[e._v("FINPLAN")]),r("Navbar"),r("Sidebar",{key:e.locale}),r("main",{staticClass:"app-content"},[r("div",{staticClass:"app-page"},[r("router-view")],1)]),r("div",{key:e.locale+"1",staticClass:"fixed-action-btn"},[r("router-link",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"CreateNewRecord",expression:"'CreateNewRecord'"}],staticClass:"btn-floating btn-large",attrs:{to:"/record"}},[r("i",{staticClass:"large material-icons"},[e._v("add")])])],1)],1)],1)},h=[],g=r("1da1"),v=(r("96cf"),r("b0c0"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nav",{staticClass:"navbar"},[r("div",{staticClass:"nav-wrapper"},[r("div",{staticClass:"navbar-left"},[r("span",[e._v(e._s(e._f("date")(e.date,"datetime")))])]),r("ul",{staticClass:"right hide-on-small-and-down"},[r("li",[r("a",{ref:"dropdown",staticClass:"dropdown-trigger",attrs:{href:"#","data-target":"dropdown"}},[e._v(" "+e._s(e.name)+" "),r("i",{staticClass:"material-icons right"},[e._v("arrow_drop_down")])]),r("ul",{staticClass:"dropdown-content",attrs:{id:"dropdown"}},[r("li",[r("router-link",{attrs:{to:"/profile"}},[r("i",{staticClass:"material-icons"},[e._v("account_circle")]),e._v(" "+e._s(e._f("localize")("ProfileTitle"))+" ")])],1),r("li",[r("a",{attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.logout.apply(null,arguments)}}},[r("i",{staticClass:"material-icons"},[e._v("assignment_return")]),e._v(" "+e._s(e._f("localize")("Exit"))+" ")])])])])])])])}),b=[],y={data:function(){return{date:new Date}},methods:{logout:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("logout");case 2:e.$router.push("/login?message=logout");case 3:case"end":return t.stop()}}),t)})))()}},computed:{name:function(){return this.$store.getters.info.name}},mounted:function(){var e=this,t=setInterval((function(){e.date=new Date}),6e4),r=M.Dropdown.init(this.$refs.dropdown,{constrainWidth:!1});this.$once("hook:beforeDestroy",(function(){clearInterval(t),r&&r.destroy&&r.destroy()}))}},w=y,C=(r("984d"),Object(d["a"])(w,v,b,!1,null,null,null)),_=C.exports,k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",{staticClass:"sidenav app-sidenav open"},e._l(e.links,(function(t){return r("router-link",{key:t.url,attrs:{tag:"li","active-class":"active",to:t.url,exact:t.exact}},[r("a",{staticClass:"waves-effect pointer",attrs:{href:"#"}},[e._v(e._s(t.title))])])})),1)},x=[],E=r("e977"),O={props:["value"],data:function(){return{links:[{title:Object(E["a"])("Menu_Bill"),url:"/",exact:!0},{title:Object(E["a"])("Menu_History"),url:"/history"},{title:Object(E["a"])("Menu_Planning"),url:"/planning"},{title:Object(E["a"])("Menu_NewRecord"),url:"/record"},{title:Object(E["a"])("Menu_Categories"),url:"/categories"}]}}},R=O,j=(r("c0f4"),Object(d["a"])(R,k,x,!1,null,null,null)),N=j.exports,U={name:"main-layout",data:function(){return{isOpen:!0,loading:!0}},mounted:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.$store.getters.info.bill&&e.$store.getters.info.name){t.next=3;break}return t.next=3,e.$store.dispatch("fetchInfo");case 3:e.loading=!1;case 4:case"end":return t.stop()}}),t)})))()},components:{Navbar:_,Sidebar:N},computed:{error:function(){return this.$store.getters.error},locale:function(){return this.$store.getters.info.locale}},watch:{error:function(e){this.$error(s["a"][e.code]||"Что-то пошло не так")}}},T=U,I=Object(d["a"])(T,m,h,!1,null,null,null),P=I.exports,A={components:{EmptyLayout:p,MainLayout:P},computed:{layout:function(){return(this.$route.meta.layout||"empty")+"-layout"}}},L=A,B=(r("5c0b"),Object(d["a"])(L,a,o,!1,null,null,null)),$=B.exports,S=(r("d3b7"),r("3ca3"),r("ddb0"),r("8c4f")),D=r("260b");n["a"].use(S["a"]);var H=new S["a"]({mode:"history",base:"/",routes:[{path:"/login",name:"login",meta:{layout:"empty"},component:function(){return r.e("chunk-5f4ad635").then(r.bind(null,"a55b"))}},{path:"/register",name:"register",meta:{layout:"empty"},component:function(){return r.e("chunk-c420df12").then(r.bind(null,"73cf"))}},{path:"/",name:"home",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-2d21a3d2").then(r.bind(null,"bb51"))}},{path:"/categories",name:"categories",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-10b86dd9").then(r.bind(null,"58c2"))}},{path:"/detail/:id",name:"detail",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-2d217a99").then(r.bind(null,"c84b"))}},{path:"/history",name:"history",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-4c6677a3").then(r.bind(null,"e4bb"))}},{path:"/planning",name:"planning",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-2d0d05dc").then(r.bind(null,"6859"))}},{path:"/profile",name:"profile",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-87dccdcc").then(r.bind(null,"c66d"))}},{path:"/record",name:"record",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-53c8ec65").then(r.bind(null,"43ef"))}}]});H.beforeEach((function(e,t,r){var n=D["a"].auth().currentUser,a=e.matched.some((function(e){return e.meta.auth}));a&&!n?r("/login?message=login"):r()}));var F=H,z=r("4360"),W=r("1dce"),J=r.n(W),q=r("58ca");r("caad"),r("2532");function K(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"date",r={};t.includes("date")&&(r.day="2-digit",r.month="long",r.year="numeric"),t.includes("time")&&(r.hour="2-digit",r.minute="2-digit");var n=z["a"].getters.info.locale||"ru-RU";return new Intl.DateTimeFormat(n,r).format(new Date(e))}r("99af");var V,Y={install:function(e){e.prototype.$message=function(e){M.toast({html:e})},e.prototype.$error=function(e){M.toast({html:"[".concat(Object(E["a"])("Error"),"]: ").concat(e)})}}},G={install:function(e){e.prototype.$title=function(e){var t="Finplan";return"".concat(Object(E["a"])(e)," | ").concat(t)}}},Q=r("5bb3"),X={bind:function(e,t){var r=t.value,n=t.modifiers;M.Tooltip.init(e,{html:n.noloc?r:Object(E["a"])(r),position:"left"})},unbind:function(e){var t=M.Tooltip.getInstance(e);t&&t.destroy&&t.destroy()}},Z=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ee=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-loader"},[r("div",{staticClass:"loader-ring"},[r("div",{staticClass:"loader-ring-light"},[r("div",{staticClass:"loader-ring-track"})])])])}],te=(r("bc71"),{}),re=Object(d["a"])(te,Z,ee,!1,null,null,null),ne=re.exports;r("6885"),r("ea7b"),r("66ce");n["a"].config.productionTip=!1,n["a"].use(Y),n["a"].use(G),n["a"].use(J.a),n["a"].use(q["a"]),n["a"].filter("date",K),n["a"].filter("localize",E["a"]),n["a"].filter("currency",Q["a"]),n["a"].directive("tooltip",X),n["a"].component("Loader",ne),D["a"].initializeApp({apiKey:"AIzaSyAJ7zeJzd_yrTzCkVH00KgfDTenLzeUwtc",authDomain:"vue-crm-941f2.firebaseapp.com",databaseURL:"https://vue-crm-941f2-default-rtdb.europe-west1.firebasedatabase.app",projectId:"vue-crm-941f2",storageBucket:"vue-crm-941f2.appspot.com",messagingSenderId:"603388644633",appId:"1:603388644633:web:2ee0772392d36a76580988"}),D["a"].auth().onAuthStateChanged((function(){V||(V=new n["a"]({router:F,store:z["a"],render:function(e){return e($)}}).$mount("#app"))}))},"5bb3":function(e,t,r){"use strict";function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"RUB";return new Intl.NumberFormat("ru-RU",{style:"currency",currency:t}).format(e)}r.d(t,"a",(function(){return n}))},"5c0b":function(e,t,r){"use strict";r("9c0c")},7704:function(e){e.exports=JSON.parse('{"ProfileTitle":"Профиль","Message_EnterName":"Введите имя","Update":"Обновить","Create":"Создать","Bill":"Счет","Name":"Имя","Exit":"Выйти","Edit":"Редактировать","Menu_Bill":"Счет","Detail_Title":"Запись","Menu_History":"История","Menu_Planning":"Планирование","Menu_NewRecord":"Новая запись","Menu_Categories":"Категории","Выйти":"Выйти","Title":"Название","Limit":"Лимит","Message_EnterDescription":"Введите описание","Message_CategoryTitle":"Введите название категории","Message_MinLength":"Минимальное значение","Category_HasBeenCreated":"Категория создана","Category_HasBeenUpdated":"Категория упешно обновлена","SelectCategory":"Выберите категорию","Amount":"Сумма","Date":"Дата","Description":"Описание","Category":"Категория","Categories":"Категории","NoCategories":"Категорий пока нет","Type":"Тип","Open":"Открыть","OpenRecord":"Посмотреть запись","BillInCurrency":"Счет в валюте","Currency":"Валюта","CurrencyType":"Курс","CurrencyAmountTitle":"Курс валют","Income":"Доход","Outcome":"Расход","Of":"из","History_Title":"История записей","NoRecords":"Записей пока нет","AddFirst":"Добавьте первую","Back":"Назад","Forward":"Вперед","CostsForCategories":"Расходы по категориям","MoreThan":"Превышение на","Stayed":"Осталось","RecordHasBeenCreated":"Запись успешно создана","NotEnoughMoney":"Недостаточно средств на счете","Message_EmailRequired":"Поле Email не должно быть пустым","Message_EmailValid":"Введите корретный Email","Password":"Пароль","Message_EnterPassword":"Введите пароль","Login":"Войти","NoAccount":"Нет аккаунта?","HasAccount":"Уже есть аккаунт?","Register":"Зарегистрироваться","AcceptRules":"С правилами согласен","CreateNewRecord":"Создать новую запись","Logout":"Вы вышли из системы","FirstLogin":"Для начала войдите в систему","NoUserWithEmail":"Пользователя с таким email не существует","WrongPassword":"Неверный пароль","EmailInUse":"Email уже занят","Error":"Ошибка"}')},"984d":function(e,t,r){"use strict";r("2805")},"9c0c":function(e,t,r){},b444:function(e,t,r){"use strict";t["a"]={logout:"Logout",login:"FirstLogin","auth/user-not-found":"NoUserWithEmail","auth/wrong-password":"WrongPassword","auth/email-already-in-use":"EmailInUse"}},bc71:function(e,t,r){"use strict";r("f022")},c0f4:function(e,t,r){"use strict";r("32d1")},e977:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r("4360"),a=r("7704"),o=r("edd4"),c={"ru-RU":a,"en-US":o};function i(e){var t=n["a"].getters.info.locale||"ru-RU";return c[t][e]||"[Localize error]: key ".concat(e," not found")}},edd4:function(e){e.exports=JSON.parse('{"ProfileTitle":"Profile","Message_EnterName":"Enter name","Update":"Update","Create":"Create","Bill":"Bill","Name":"Name","Exit":"Exit","Edit":"Edit","Menu_Bill":"Bill","Detail_Title":"Detail","Menu_History":"History","Menu_Planning":"Planning","Menu_NewRecord":"New record","Menu_Categories":"Categories","Title":"Title","Limit":"Limit","Message_EnterDescription":"Enter description","Message_CategoryTitle":"Enter category name","Message_MinLength":"Mininum length is","Category_HasBeenCreated":"Category has been created","Category_HasBeenUpdated":"Category has been updated","SelectCategory":"Select category","Amount":"Amount","Date":"Date","Description":"Description","Category":"Category","Categories":"Categories","NoCategories":"No categories","Type":"Type","Open":"Open","OpenRecord":"Open record","BillInCurrency":"Bill in currencies","Currency":"Currency","CurrencyType":"Rate","CurrencyAmountTitle":"Currencies rates","Income":"Income","Outcome":"Outcome","Of":"of","History_Title":"Records history","NoRecords":"No records","AddFirst":"Add first","Back":"Back","Forward":"Forward","CostsForCategories":"Categories costs","MoreThan":"Excess on","Stayed":"Left","RecordHasBeenCreated":"Record has been created","NotEnoughMoney":"Not enough money","Message_EmailRequired":"Email field is required","Message_EmailValid":"Enter valid email","Password":"Password","Message_EnterPassword":"Enter password","Login":"Login","NoAccount":"Has no account?","HasAccount":"Has account?","Register":"Register","AcceptRules":"Agree with rules","CreateNewRecord":"Create new record","Logout":"You have logged out","FirstLogin":"First login","NoUserWithEmail":"No user with email","WrongPassword":"Invalid password","EmailInUse":"Email is already in use","Error":"Error"}')},f022:function(e,t,r){}});
//# sourceMappingURL=app.47e19418.js.map