(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"/EDR":function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("23aj")}])},"0tVQ":function(n,e,t){t("FlQf"),t("VJsP"),n.exports=t("WEpk").Array.from},"23aj":function(n,e,t){"use strict";t.r(e);var r=t("p0XB"),a=t.n(r);var o=t("d04V"),u=t.n(o),s=t("yLu3"),i=t.n(s);function c(n){return function(n){if(a()(n)){for(var e=0,t=new Array(n.length);e<n.length;e++)t[e]=n[e];return t}}(n)||function(n){if(i()(Object(n))||"[object Arguments]"===Object.prototype.toString.call(n))return u()(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var l=t("2wwy"),p=t.n(l);var f=t("XXOK"),d=t.n(f);function m(n,e){return function(n){if(a()(n))return n}(n)||function(n,e){if(i()(Object(n))||"[object Arguments]"===Object.prototype.toString.call(n)){var t=[],r=!0,a=!1,o=void 0;try{for(var u,s=d()(n);!(r=(u=s.next()).done)&&(t.push(u.value),!e||t.length!==e);r=!0);}catch(c){a=!0,o=c}finally{try{r||null==s.return||s.return()}finally{if(a)throw o}}return t}}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var v,h=t("eVuF"),N=t.n(h),_=t("ln6h"),y=t.n(_),S=t("q1tI"),w=t.n(S),E=t("vcXL"),b=t.n(E);!function(n){n.FREE="free",n.PLUS="plus",n.PROFESSIONAL="professional",n.VISIONARY="visionary"}(v||(v={}));var x=t("r14L"),A=t.n(x),P=w.a.createElement;function g(n){var e=n.plan,t=n.period;return P("div",{className:A.a.container},P("div",{className:A.a.main},P("div",{className:A.a.color},e.Name===v.PLUS&&"Most popular"),P("div",{className:A.a.title},function(n){return n.Name}(e)),P("div",{className:A.a.pricingContainer},P("span",null,M(e)),P("span",{className:A.a.price},O(e,t)),P("span",null,"/",function(n,e){var t=I[e];n.Name===v.PROFESSIONAL&&(t+="/user");return t}(e,t))),1===t&&P("div",{className:A.a.billedAs},"Billed as ",M(e),12*O(e,t)," per year"),P("div",{className:A.a.descriptionAndFeatures},P("div",{className:A.a.description},function(n){switch(n.Name){case v.FREE:return"The basics for private and secure communication";case v.PLUS:return"Full-featured mailbox with advanced protection";case v.PROFESSIONAL:return"ProtonMail for professionals and businesses";case v.VISIONARY:return"ProtonMail for families and small businesses"}}(e)),P("ul",{className:A.a.planFeatures},P("li",null,function(n){return n.Name===v.PROFESSIONAL?"1 - 5000 users":n.MaxMembers>1?"".concat(n.MaxMembers," users"):"1 user"}(e)),P("li",null,function(n){var e=n.MaxSpace,t=e/1e9<1,r=e/1e9>=1,a="".concat(e," bytes storage");if(t){var o=Math.trunc(e/1e6);a="".concat(o=o-o%100||o," MB storage")}else if(r){var u=Math.trunc(e/1e9);a="".concat(u=u-u%5||u," GB storage")}n.Name===v.PROFESSIONAL&&(a+=" per user");return a}(e)),P("li",null,function(n){var e=n.MaxAddresses>1?"".concat(n.MaxAddresses," addresses"):"1 address";n.Name===v.PROFESSIONAL&&(e+=" per user");return e}(e)),P("li",null,function(n){return n.MaxDomains>1?"".concat(n.MaxDomains," domains"):1===n.MaxDomains?"1 domain":"No domain support"}(e)),R(e)&&P("li",{className:A.a.otherFeatures},R(e)),e.Name===v.VISIONARY&&P("li",null,"Priority support"),P("li",null,function(n){return n.MaxVPN>0?"Includes ProtonVPN":P("span",null,"ProtonVPN (optional)")}(e))))),P("div",{className:A.a.footer},P("button",{className:A.a.button},"Select")))}var F={EUR:"\u20ac",USD:"$"};function M(n){return F[n.Currency]||"".concat(n.Currency," ")}function O(n,e){return n.Pricing[e]/100}var I={1:"mo",12:"yr",24:"2yr"};function R(n){switch(n.Name){case v.PLUS:return"Supports folders, labels, filters, auto-reply, IMAP/SMTP and more";case v.PROFESSIONAL:return"Catch-all email, multi-user management, priority support and more";case v.VISIONARY:return"Includes all features"}}t.d(e,"default",(function(){return V}));var C=w.a.createElement;function V(n){var e=n.plansByCurrency,t=n.currency,r=m(w.a.useState([]),2),a=r[0],o=r[1],u=m(w.a.useState(""),2),s=u[0],i=u[1],c=m(w.a.useState(1),2),l=c[0],p=c[1],f=m(w.a.useState(t),2),d=f[0],v=f[1],h=a&&a.length>0?a:e[d];return w.a.useEffect((function(){o([]),U(d).then(o).catch((function(){i("Note: Unable to fetch latest data. Prices and plan details may be out of date.")}))}),[U,d]),C("div",null,C("h1",null,"Plans & prices"),C("div",{className:"plan-filters"},C("select",{value:l,onChange:function(n){console.log(typeof n.currentTarget.value,n.currentTarget.value),p(Number(n.currentTarget.value))},className:"plan-filter"},C("option",{value:1},"Monthly"),C("option",{value:12},"Annually"),C("option",{value:24},"Two years")),C("select",{value:d,onChange:function(n){v(n.currentTarget.value)},className:"plan-filter"},C("option",{title:"Euros"},"EUR"),C("option",{title:"US dollars"},"USD"),C("option",{title:"Swiss francs"},"CHF"))),s&&C("div",null,s),C("ul",{className:"plan-list"},h.filter(L).sort((function(n,e){return n.Amount-e.Amount})).map((function(n){return C("li",{key:n.ID},C(g,{plan:n,period:l}))}))),C("input",{type:"hidden",name:"release-tag",value:"hydration-fix"}))}function T(n){return{ID:"free",Name:v.FREE,MaxMembers:1,MaxSpace:5e8,MaxAddresses:1,MaxDomains:0,MaxVPN:0,Pricing:{1:0,12:0,24:0},Currency:n,Amount:0}}function L(n){return p()(v).includes(n.Name)}function U(n){return y.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",j(n).then((function(e){if(e.ok)return e.json().then((function(e){return[T(n)].concat(c(e.Plans))}));throw new Error})));case 1:case"end":return e.stop()}}),null,null,null,N.a)}function j(n){var e;return y.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return e={method:"GET",headers:{"Content-Type":"application/json;charset=utf-8","x-pm-appversion":"Other","x-pm-apiversion":"3",Accept:"application/vnd.protonmail.v1+json"},mode:"cors",cache:"default"},t.abrupt("return",b()("https://api.protonmail.ch/payments/plans?Currency=".concat(n),e));case 3:case"end":return t.stop()}}),null,null,null,N.a)}V.getInitialProps=function(){var n;return y.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.awrap(U("EUR"));case 2:return e.t0=e.sent,e.next=5,y.a.awrap(U("USD"));case 5:return e.t1=e.sent,e.next=8,y.a.awrap(U("CHF"));case 8:return e.t2=e.sent,n={EUR:e.t0,USD:e.t1,CHF:e.t2},e.abrupt("return",{plansByCurrency:n,currency:"EUR"});case 11:case"end":return e.stop()}}),null,null,null,N.a)}},"2wwy":function(n,e,t){n.exports=t("nhzr")},E8gZ:function(n,e,t){var r=t("jmDH"),a=t("w6GO"),o=t("NsO/"),u=t("NV0k").f;n.exports=function(n){return function(e){for(var t,s=o(e),i=a(s),c=i.length,l=0,p=[];c>l;)t=i[l++],r&&!u.call(s,t)||p.push(n?[t,s[t]]:s[t]);return p}}},IP1Z:function(n,e,t){"use strict";var r=t("2faE"),a=t("rr1i");n.exports=function(n,e,t){e in n?r.f(n,e,a(0,t)):n[e]=t}},VJsP:function(n,e,t){"use strict";var r=t("2GTP"),a=t("Y7ZC"),o=t("JB68"),u=t("sNwI"),s=t("NwJ3"),i=t("tEej"),c=t("IP1Z"),l=t("fNZA");a(a.S+a.F*!t("TuGD")((function(n){Array.from(n)})),"Array",{from:function(n){var e,t,a,p,f=o(n),d="function"==typeof this?this:Array,m=arguments.length,v=m>1?arguments[1]:void 0,h=void 0!==v,N=0,_=l(f);if(h&&(v=r(v,m>2?arguments[2]:void 0,2)),void 0==_||d==Array&&s(_))for(t=new d(e=i(f.length));e>N;N++)c(t,N,h?v(f[N],N):f[N]);else for(p=_.call(f),t=new d;!(a=p.next()).done;N++)c(t,N,h?u(p,v,[a.value,N],!0):a.value);return t.length=N,t}})},d04V:function(n,e,t){n.exports=t("0tVQ")},fW1p:function(n,e,t){var r=t("Y7ZC"),a=t("E8gZ")(!1);r(r.S,"Object",{values:function(n){return a(n)}})},nhzr:function(n,e,t){t("fW1p"),n.exports=t("WEpk").Object.values},r14L:function(n,e,t){n.exports={container:"plan_container__2t54o",main:"plan_main__bXMcd",color:"plan_color__1iZ58",title:"plan_title__eHvM_",pricingContainer:"plan_pricingContainer__35fTS",price:"plan_price__2gBBr",billedAs:"plan_billedAs__2HCmf",descriptionAndFeatures:"plan_descriptionAndFeatures__3Fieh",description:"plan_description__3wzCq",planFeatures:"plan_planFeatures__2TEFV",otherFeatures:"plan_otherFeatures__3h4X_",protonVpn:"plan_protonVpn__EcU6i",footer:"plan_footer__3rmE8",button:"plan_button__2V8Hc"}},vcXL:function(n,e,t){"use strict";var r=self.fetch.bind(self);n.exports=r,n.exports.default=n.exports}},[["/EDR",1,2,0]]]);