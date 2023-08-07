(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{37:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var n=c(26),a=(c(35),c(36),c(0)),s=c(8),r=c(3),j=(c(37),c(13)),i=c.n(j),l=c(2),o=function(e){var t=e.isActive;return i()("navbar-item",{"has-background-grey-lighter":t})},b=function(){return Object(l.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"navbar-brand",children:[Object(l.jsx)(s.c,{className:o,to:"/",children:"Home"}),Object(l.jsx)(s.c,{className:o,to:"/people",children:"People"})]})})})},h=function(){return Object(l.jsxs)("div",{"data-cy":"app",children:[Object(l.jsx)(b,{}),Object(l.jsx)("main",{className:"section",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsx)(r.b,{})})})]})},d=function(){return Object(l.jsx)("h1",{className:"title",children:"Page not found"})},u=function(){return Object(l.jsx)("h1",{className:"title",children:"Home Page"})},O=c(4),x=c(24),p=(c(39),function(){return Object(l.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(l.jsx)("div",{className:"Loader__content"})})});function m(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var f=function(e){var t=e.person;return Object(l.jsx)(s.b,{to:"../people/".concat(t.slug),className:i()({"has-text-danger":"f"===t.sex}),children:t.name})},g=function(e){var t=e.person,c=e.slug;return Object(l.jsxs)("tr",{"data-cy":"person",className:i()({"has-background-warning":c===t.slug}),children:[Object(l.jsx)("td",{children:Object(l.jsx)(f,{person:t})}),Object(l.jsx)("td",{children:t.sex}),Object(l.jsx)("td",{children:t.born}),Object(l.jsx)("td",{children:t.died}),Object(l.jsx)("td",{children:t.mother?Object(l.jsx)(f,{person:t.mother}):t.motherName||"-"}),Object(l.jsx)("td",{children:t.father?Object(l.jsx)(f,{person:t.father}):t.fatherName||"-"})]})},v=function(e){var t=e.people,c=e.slug;return Object(l.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Name"}),Object(l.jsx)("th",{children:"Sex"}),Object(l.jsx)("th",{children:"Born"}),Object(l.jsx)("th",{children:"Died"}),Object(l.jsx)("th",{children:"Mother"}),Object(l.jsx)("th",{children:"Father"})]})}),Object(l.jsx)("tbody",{children:t.map((function(e){return Object(l.jsx)(g,{person:e,slug:c},e.slug)}))})]})},N=function(){var e=Object(a.useState)([]),t=Object(O.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(!1),j=Object(O.a)(s,2),i=j[0],o=j[1],b=Object(a.useState)(!1),h=Object(O.a)(b,2),d=h[0],u=h[1],f=Object(a.useState)(""),g=Object(O.a)(f,2),N=g[0],y=g[1],w=Object(r.r)().slug;return Object(a.useEffect)((function(){o(!0),m().then((function(e){e.length?y(""):y("There are no people on the server"),n(function(e){return e.map((function(t){return Object(x.a)(Object(x.a)({},t),{},{father:e.find((function(e){return e.name===t.fatherName})),mother:e.find((function(e){return e.name===t.motherName}))})}))}(e))})).catch((function(){return u(!0)})).finally((function(){return o(!1)}))}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{className:"title",children:"People Page"}),Object(l.jsx)("div",{className:"block",children:Object(l.jsxs)("div",{className:"box table-container",children:[i&&Object(l.jsx)(p,{}),d&&Object(l.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),c.length?Object(l.jsx)(v,{people:c,slug:w}):Object(l.jsx)("p",{"data-cy":"noPeopleMessage",children:N})]})})]})},y=function(){return Object(l.jsx)(s.a,{children:Object(l.jsx)(r.e,{children:Object(l.jsxs)(r.c,{path:"/",element:Object(l.jsx)(h,{}),children:[Object(l.jsx)(r.c,{index:!0,element:Object(l.jsx)(u,{})}),Object(l.jsx)(r.c,{path:"home",element:Object(l.jsx)(r.a,{to:"/"})}),Object(l.jsx)(r.c,{path:"people",element:Object(l.jsx)(N,{})}),Object(l.jsx)(r.c,{path:"people/:slug",element:Object(l.jsx)(N,{})}),Object(l.jsx)(r.c,{path:"*",element:Object(l.jsx)(d,{})})]})})})};Object(n.createRoot)(document.getElementById("root")).render(Object(l.jsx)(y,{}))}},[[40,1,2]]]);
//# sourceMappingURL=main.e2580882.chunk.js.map