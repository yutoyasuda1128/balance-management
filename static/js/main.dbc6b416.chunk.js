(this["webpackJsonpbalance-management"]=this["webpackJsonpbalance-management"]||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(6),l=n.n(s),i=(n(12),n(3)),o=n(7),d=(n(13),n(14),n(2));function j(e){var t,n=Object(a.useState)(0),c=Object(i.a)(n,2),s=c[0],l=c[1],o=Object(a.useState)(""),j=Object(i.a)(o,2),b=j[0],u=j[1];return Object(d.jsxs)("div",{className:"ModalWindow-Content",children:[Object(d.jsxs)("div",{className:"ModalWindow-ButtonArea",children:[(t=e.date,t.getFullYear()+"-"+("00"+(t.getMonth()+1)).slice(-2)+"-"+("00"+t.getDate()).slice(-2)),"\u3000",Object(d.jsxs)("div",{className:"Expenditureincome",children:[Object(d.jsx)("button",{onClick:function(){var e={type:"expense",price:s,category:b};window.localStorage.setItem("balance-management",JSON.stringify([e]))},children:"\u652f\u51fa"}),Object(d.jsx)("button",{children:"\u53ce\u5165"})]})]}),Object(d.jsxs)("div",{className:"ModalWindow-InputArea",children:[Object(d.jsxs)("select",{className:"ModalWindow-CategoryArea",onChange:function(e){u(e.target.value)},children:[Object(d.jsx)("option",{value:"",children:"\u30ab\u30c6\u30b4\u30ea"}),Object(d.jsx)("option",{value:"food",children:"\u98df\u8cbb"}),Object(d.jsx)("option",{value:"miscellaneous",children:"\u96d1\u8cbb"})]}),Object(d.jsx)("input",{className:"ModalWindow-Input",type:"number",placeholder:"\u91d1\u984d",onChange:function(e){l(e.target.value)}})]}),Object(d.jsxs)("div",{className:"ModalWindow-total-amount",children:[Object(d.jsx)("input",{className:"ModalWindow-total",type:"text",value:"\u5408\u8a08\u984d",disabled:!0}),Object(d.jsx)("input",{className:"ModalWindow-expense",type:"text",value:"\u652f\u51fa",disabled:!0}),Object(d.jsx)("input",{className:"ModalWindow-expense-total",type:"number",disabled:!0}),Object(d.jsx)("input",{className:"ModalWindow-income",type:"text",value:"\u53ce\u5165",disabled:!0}),Object(d.jsx)("input",{className:"ModalWindow-income-total",type:"number",disabled:!0})]}),Object(d.jsx)("p",{children:Object(d.jsx)("button",{onClick:e.onClose,children:"close"})})]})}function b(){var e=Object(a.useState)(new Date),t=Object(i.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(!1),l=Object(i.a)(s,2),b=l[0],u=l[1],r=Object(a.useState)(null),O=Object(i.a)(r,2),x=O[0],p=O[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)(o.a,{onChange:c,value:n,onClickDay:function(e,t){p(e),u(!0)}}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{onClick:u,children:"\u5168\u4f53\u306e\u53ce\u652f"})}),b&&Object(d.jsx)("div",{id:"overlay",children:Object(d.jsx)(j,{onClose:function(){p(null),u(!1)},date:x})})]})}var u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,l=t.getTTFB;n(e),a(e),c(e),s(e),l(e)}))};l.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(b,{})}),document.getElementById("root")),u()}},[[18,1,2]]]);
//# sourceMappingURL=main.dbc6b416.chunk.js.map