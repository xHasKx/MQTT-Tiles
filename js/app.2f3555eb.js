(function(e){function n(n){for(var o,r,c=n[0],l=n[1],d=n[2],s=0,u=[];s<c.length;s++)r=c[s],a[r]&&u.push(a[r][0]),a[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);f&&f(n);while(u.length)u.shift()();return i.push.apply(i,d||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],o=!0,r=1;r<t.length;r++){var c=t[r];0!==a[c]&&(o=!1)}o&&(i.splice(n--,1),e=l(l.s=t[0]))}return e}var o={},r={app:0},a={app:0},i=[];function c(e){return l.p+"js/"+({}[e]||e)+"."+{"02e96fcc":"ae1fe33a","607658c8":"2b110bee",c53347ac:"a01f506b","4b47640d":"21cfc388"}[e]+".js"}function l(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.e=function(e){var n=[],t={"607658c8":1,c53347ac:1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise(function(n,t){for(var o="css/"+({}[e]||e)+"."+{"02e96fcc":"31d6cfe0","607658c8":"516c1991",c53347ac:"763633d4","4b47640d":"31d6cfe0"}[e]+".css",r=l.p+o,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var c=a[i],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===o||d===r))return n()}var s=document.getElementsByTagName("style");for(i=0;i<s.length;i++){c=s[i],d=c.getAttribute("data-href");if(d===o||d===r)return n()}var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",u.onload=n,u.onerror=function(n){var o=n&&n.target&&n.target.src||r,a=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");a.request=o,t(a)},u.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(u)}).then(function(){r[e]=0}));var o=a[e];if(0!==o)if(o)n.push(o[2]);else{var i=new Promise(function(n,t){o=a[e]=[n,t]});n.push(o[2]=i);var d,s=document.getElementsByTagName("head")[0],u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=c(e),d=function(n){u.onerror=u.onload=null,clearTimeout(f);var t=a[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src,i=new Error("Loading chunk "+e+" failed.\n("+o+": "+r+")");i.type=o,i.request=r,t[1](i)}a[e]=void 0}};var f=setTimeout(function(){d({type:"timeout",target:u})},12e4);u.onerror=u.onload=d,s.appendChild(u)}return Promise.all(n)},l.m=e,l.c=o,l.d=function(e,n,t){l.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,n){if(1&n&&(e=l(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)l.d(t,o,function(n){return e[n]}.bind(null,o));return t},l.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(n,"a",n),n},l.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},l.p="",l.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],s=d.push.bind(d);d.push=n,d=d.slice();for(var u=0;u<d.length;u++)n(d[u]);var f=s;i.push([0,"vendor"]),t()})({0:function(e,n,t){e.exports=t("2f39")},"034f":function(e,n,t){"use strict";var o=t("fb1c"),r=t.n(o);r.a},"1e5d":function(e,n,t){},"2f39":function(e,n,t){"use strict";t.r(n);t("4a91"),t("a114"),t("d14b"),t("113c"),t("1e5d"),t("7e6d");var o=t("2b0e"),r=t("e84f"),a=t("7051"),i=t("2040"),c=t("cf12"),l=t("46a9"),d=t("32a1"),s=t("52b5"),u=t("f30c"),f=t("ce67"),p=t("0952"),v=t("2a70"),b=t("1180"),h=t("1e55"),g=t("506f"),m=t("b8d9"),w=t("7d43"),y=t("9541"),Q=t("91c8"),q=t("482e"),T=t("5d8b"),C=t("5931"),P=t("525b"),x=t("03d8"),E=t("b5b8"),S=t("7646"),j=t("6580"),k=t("3a08"),L=t("3054"),O=t("6ddb"),M=t("dc23"),A=t("bc9b"),_=t("4bf4"),B=t("09fa6"),N=t("e57e"),I=t("79e9"),R=t("363b"),D=t("ac83"),H=t("dd1f"),J=t("1526"),W=t("2bd2"),z=t("133b"),F=t("f9d8"),$=t("6780");o["default"].use(r["a"],{config:{},components:{QLayout:a["a"],QLayoutHeader:i["a"],QLayoutDrawer:c["a"],QPageContainer:l["a"],QPage:d["a"],QIcon:s["a"],QToolbar:u["a"],QToolbarTitle:f["a"],QModal:p["a"],QModalLayout:v["a"],QList:b["a"],QListHeader:h["a"],QItem:g["a"],QItemMain:m["a"],QItemSide:w["a"],QItemTile:y["a"],QItemSeparator:Q["a"],QBtn:q["a"],QInput:T["a"],QSelect:C["a"],QCheckbox:P["a"],QTooltip:x["a"],QPopover:E["a"],QCard:S["a"],QCardTitle:j["a"],QCardMain:k["a"],QCardSeparator:L["a"],QCardActions:O["a"],QCardMedia:M["a"],QToggle:A["a"],QChip:_["a"],QBtnToggle:B["a"],QChipsInput:N["a"],QField:I["a"],QResizeObservable:R["a"],QCollapsible:D["a"],QRadio:H["a"]},directives:{Ripple:J["a"],CloseOverlay:W["a"]},plugins:{Notify:z["a"],LocalStorage:F["a"],Dialog:$["a"]}});var G=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"q-app"}},[t("router-view")],1)},K=[];G._withStripped=!0;var U={name:"App"},V=U,X=(t("034f"),t("2877")),Y=Object(X["a"])(V,G,K,!1,null,null,null);Y.options.__file="App.vue";var Z=Y.exports,ee=t("8c4f"),ne=[{path:"/",component:function(){return Promise.all([t.e("02e96fcc"),t.e("607658c8")]).then(t.bind(null,"f241"))},children:[{path:"",component:function(){return Promise.all([t.e("02e96fcc"),t.e("c53347ac")]).then(t.bind(null,"8b24"))}}]}];ne.push({path:"*",component:function(){return t.e("4b47640d").then(t.bind(null,"e51e"))}});var te=ne;o["default"].use(ee["a"]);var oe=function(){var e=new ee["a"]({scrollBehavior:function(){return{y:0}},routes:te,mode:"hash",base:""});return e},re=function(){var e="function"===typeof oe?oe({}):oe,n={el:"#q-app",router:e,render:function(e){return e(Z)}};return{app:n,router:e}},ae=t("9483");Object(ae["a"])("service-worker.js",{ready:function(){console.log("App is being served from cache by a service worker.")},registered:function(e){console.log("Service worker has been registered.")},cached:function(e){console.log("Content has been cached for offline use.")},updatefound:function(e){console.log("New content is downloading.")},updated:function(e){var n=document.createElement("div");n.id="sw-notification",n.innerHTML='<div class="q-notification-list q-notification-list-bottom fixed column items-end absolute">\n                                              <div class="q-notification">\n                                                <div class="q-alert row no-wrap shadow-2 bg-amber-9 text-white">\n                                                  <div class="q-alert-side col-auto row flex-center">\n                                                    <i aria-hidden="true" class="q-icon material-icons">warning</i>\n                                                  </div>\n                                                  <div class="q-alert-content col self-center">\n                                                    <div>The new version of MQQT Tiles is available. Refresh the page to update?</div>\n                                                  </div>\n                                                  <div class="q-alert-actions col-auto gutter-xs column flex-center">\n                                                    <div class="full-width">\n                                                      <button tabindex="0" class="q-btn inline relative-position q-btn-item non-selectable full-width q-btn-rectangle q-btn-flat q-focusable q-hoverable q-btn-dense">\n                                                        <div class="q-focus-helper"></div>\n                                                        <div class="q-btn-inner row col items-center justify-start">\n                                                          <div>Agree</div>\n                                                        </div>\n                                                      </button>\n                                                    </div>\n                                                    <div class="full-width">\n                                                      <button tabindex="0" class="q-btn inline relative-position q-btn-item non-selectable full-width q-btn-rectangle q-btn-flat q-focusable q-hoverable q-btn-dense">\n                                                        <div class="q-focus-helper"></div>\n                                                        <div class="q-btn-inner row col items-center justify-start">\n                                                          <div>Abort</div>\n                                                        </div>\n                                                      </button>\n                                                    </div>\n                                                  </div>\n                                                </div>\n                                              </div>\n                                            </div>';var t=n.getElementsByTagName("button"),o=document.getElementsByTagName("body")[0];function r(){"serviceWorker"in navigator?navigator.serviceWorker.getRegistration().then(function(e){e?e.unregister().then(function(){window.location.reload(!0)}):window.location.reload(!0)}):window.location.reload(!0),setTimeout(function(){window.location.reload(!0)},1e3)}t[0].addEventListener("click",function(e){r()}),t[1].addEventListener("click",function(e){n.remove()}),o.appendChild(n)},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var ie=t("fe3c"),ce=t.n(ie),le=re(),de=le.app;le.router;/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&document.addEventListener("DOMContentLoaded",function(){ce.a.attach(document.body)},!1),new o["default"](de)},"7e6d":function(e,n,t){},fb1c:function(e,n,t){}});