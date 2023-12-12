(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s=c(6),a=c.n(s),n=c(2),l=c(1),i=(c(12),c(13),c(14),c(0)),o=function(e){var t=e.todos,c=e.onSelectTodo,s=e.todoSelected;return Object(i.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"#"}),Object(i.jsx)("th",{children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:"fas fa-check"})})}),Object(i.jsx)("th",{children:"Title"}),Object(i.jsx)("th",{children:" "})]})}),Object(i.jsx)("tbody",{children:t.map((function(e){return Object(i.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(i.jsx)("td",{className:"is-vcentered",children:e.id}),Object(i.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(i.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(i.jsx)("i",{className:"fas fa-check"})})}),Object(i.jsx)("td",{className:"is-vcentered is-expanded",children:Object(i.jsx)("p",{className:e.completed?"has-text-success":"has-text-danger",children:e.title})}),Object(i.jsx)("td",{className:"has-text-right is-vcentered",children:Object(i.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(e)},children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:(null===s||void 0===s?void 0:s.id)!==e.id?"far fa-eye":"far fa-eye-slash"})})})})]})}))})]})},r=function(e){var t=e.onQuery,c=e.query,s=e.onStatus,a=e.status;return Object(i.jsxs)("form",{className:"field has-addons",children:[Object(i.jsx)("p",{className:"control",children:Object(i.jsx)("span",{className:"select",children:Object(i.jsxs)("select",{"data-cy":"statusSelect",value:a,onChange:function(e){return s(e.target.value)},children:[Object(i.jsx)("option",{value:"all",children:"All"}),Object(i.jsx)("option",{value:"active",children:"Active"}),Object(i.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(i.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(i.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:c,onChange:function(e){return t(null===e||void 0===e?void 0:e.target.value)}}),Object(i.jsx)("span",{className:"icon is-left",children:Object(i.jsx)("i",{className:"fas fa-magnifying-glass"})}),c&&Object(i.jsx)("span",{className:"icon is-right",children:Object(i.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return t("")},children:"Clear"})})]})]})},d=(c(16),function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})});function j(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var u,b=function(e){var t=e.todo,c=e.onClose,s=Object(l.useState)(!1),a=Object(n.a)(s,2),o=a[0],r=a[1],u=Object(l.useState)(null),b=Object(n.a)(u,2),h=b[0],m=b[1];return Object(l.useEffect)((function(){var e;(e=t.userId,j("/users/".concat(e))).then((function(e){return m(e)})).finally((function(){return r(!0)}))})),Object(i.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(i.jsx)("div",{className:"modal-background"}),o?h&&Object(i.jsxs)("div",{className:"modal-card",children:[Object(i.jsxs)("header",{className:"modal-card-head",children:[Object(i.jsxs)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:["Todo #",t.id]}),Object(i.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:c,children:"Close"})]}),Object(i.jsxs)("div",{className:"modal-card-body",children:[Object(i.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(i.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(i.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(i.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(i.jsx)("a",{href:h.email,children:h.name})]})]})]}):Object(i.jsx)(d,{})]})},h=c(7);!function(e){e.ALL="all",e.COMPLETED="completed",e.ACTIVE="active"}(u||(u={}));var m=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(l.useState)(!1),m=Object(n.a)(a,2),O=m[0],x=m[1],f=Object(l.useState)(null),v=Object(n.a)(f,2),N=v[0],p=v[1],y=Object(l.useState)(""),g=Object(n.a)(y,2),C=g[0],S=g[1],k=Object(l.useState)(""),T=Object(n.a)(k,2),w=T[0],E=T[1];Object(l.useEffect)((function(){j("/todos").then((function(e){s(e)})).finally((function(){return x(!0)}))}),[]);var L=Object(l.useMemo)((function(){return function(e,t,c){var s=Object(h.a)(e);if(t&&(s=s.filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase().trim())}))),c)switch(c){case u.ACTIVE:s=s.filter((function(e){return!e.completed}));break;case u.COMPLETED:s=s.filter((function(e){return e.completed}));break;default:return s}return s}(c,C,w)}),[c,C,w]);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"box",children:[Object(i.jsx)("h1",{className:"title",children:"Todos:"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsx)(r,{onQuery:function(e){S(e)},query:C,onStatus:function(e){E(e)},status:w})}),Object(i.jsx)("div",{className:"block",children:O?Object(i.jsx)(o,{todos:L,onSelectTodo:p,todoSelected:N}):Object(i.jsx)(d,{})})]})})}),N&&Object(i.jsx)(b,{todo:N,onClose:function(){p(null)}})]})};a.a.render(Object(i.jsx)(m,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.265df228.chunk.js.map