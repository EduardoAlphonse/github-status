(this["webpackJsonpgithub-status"]=this["webpackJsonpgithub-status"]||[]).push([[0],{159:function(t,e,n){t.exports=n(374)},165:function(t,e,n){},166:function(t,e,n){},167:function(t,e,n){},183:function(t,e){},185:function(t,e){},215:function(t,e){},216:function(t,e){},281:function(t,e){},374:function(t,e,n){"use strict";n.r(e);var a=n(2),c=n.n(a),r=n(157),s=n.n(r),u=n(88),i=n.n(u),o=n(158),l=n(89),m=n(90),f=(n(165),function(){return c.a.createElement("div",{className:"operational status-icon"},c.a.createElement(m.a,{size:16}))}),p=function(){return c.a.createElement("div",{className:"warning status-icon"},c.a.createElement(m.b,{size:20}))},E=function(t){return"operational"===t.status?c.a.createElement(f,null):c.a.createElement(p,null)},d=(n(166),n(167),n(168));var b=function(){var t=Object(a.useState)([]),e=Object(l.a)(t,2),n=e[0],r=e[1],s=Object(a.useState)(!1),u=Object(l.a)(s,2),m=u[0],f=u[1],p=function(){var t=Object(o.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return f(!0),t.next=3,d("https://www.githubstatus.com/",{json:!0},(function(t,e,n){var a=n.components.filter((function(t){return t.name.indexOf("Visit")<0}));r(a),f(!1)}));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){p()}),[]),c.a.createElement("div",{className:"App"},c.a.createElement("h1",{className:"title"},"GitHub current status"),c.a.createElement("div",{className:"data-list-container"},c.a.createElement("div",{className:"data-list"},n.map((function(t){return c.a.createElement("div",{key:t.id,className:"data-component"},c.a.createElement("p",null,t.name),c.a.createElement(E,{status:t.status}))})))),c.a.createElement("button",{className:"refresh-button",onClick:p},m?"Refreshing...":"Refresh status"))};s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null)),document.getElementById("root"))}},[[159,1,2]]]);
//# sourceMappingURL=main.9c694953.chunk.js.map