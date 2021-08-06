(this["webpackJsonpbox-office-react"]=this["webpackJsonpbox-office-react"]||[]).push([[0],{51:function(e,t,n){},59:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(20),r=n.n(i),s=n(23),o=(n(51),n(4)),a=n(10),l=n.n(a),j=n(15),h=n(19),d=n(76),u=n(42),f=n.n(u),b=n(1),O=[{to:"/",text:"Home"},{to:"/starred",text:"Starred"}],m=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("ul",{children:O.map((function(e){return Object(b.jsx)("li",{children:Object(b.jsx)(s.b,{to:e.to,children:e.text})},e.to)}))})})},x=function(e){var t=e.title,n=e.subtitle;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:t}),Object(b.jsx)("p",{children:n})]})},g=function(e){var t=e.children;return Object(b.jsxs)("div",{children:[Object(b.jsx)(x,{title:"Box Office",subtitle:"Are you looking for a movie or an actor?"}),Object(b.jsx)(m,{}),t]})},p="https://api.tvmaze.com";function w(){return(w=Object(j.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(p).concat(t)).then((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(59);var v=function(){var e=Object(j.a)(l.a.mark((function e(t,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("http://localhost:3001/api?".concat(n,"&method=").concat(t)));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();function y(e){var t=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return t?decodeURIComponent(t[1]):void 0}var k=function(){var e=Object(c.useState)(""),t=Object(h.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)(null),s=Object(h.a)(r,2),o=s[0],a=s[1],u=Object(c.useState)("shows"),O=Object(h.a)(u,2),m=O[0],x=O[1],p=Object(c.useState)(!0),k=Object(h.a)(p,2),N=k[0],S=k[1],C="shows"===m,F=function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v("blabla","id=null");case 2:t=e.sent,document.cookie="id=".concat(t),S(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){void 0===y("id")?(F(),console.log("Trying to get id")):(console.log("\u041a\u0443\u043a\u0438 \u0435\u0441\u0442\u044c ".concat(document.cookie)),S(!1))}),[]);var I=function(){(function(e){return w.apply(this,arguments)})("/search/".concat(m,"?q=").concat(n)).then((function(e){a(e)}))},L=function(e){x(e.target.value)};return N?Object(b.jsx)("div",{children:"Loading..."}):Object(b.jsxs)(g,{children:[Object(b.jsx)("input",{type:"text",onChange:function(e){i(e.target.value)},onKeyDown:function(e){13===e.keyCode&&I()},value:n,placeholder:"Search for something"}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("label",{htmlFor:"shows-search",children:["Shows",Object(b.jsx)("input",{id:"shows-search",type:"radio",value:"shows",checked:C,onChange:L})]}),Object(b.jsxs)("label",{htmlFor:"actors-search",children:["Actors",Object(b.jsx)("input",{id:"actors-search",type:"radio",value:"people",checked:!C,onChange:L})]})]}),Object(b.jsx)("button",{type:"button",onClick:I,children:"Search"}),o&&0===o.length?Object(b.jsx)("div",{children:"No results :("}):o&&o.length>0?o[0].show?o.map((function(e){return Object(b.jsxs)("div",{className:"Show",children:[Object(b.jsx)("div",{className:"Picture",children:e.show.image?Object(b.jsx)("img",{src:e.show.image.medium,alt:e.show.name,width:"200",height:"200",className:"showImg"}):Object(b.jsx)("strong",{children:"No image found :("})}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:e.show.name}),Object(b.jsxs)("li",{children:["Genres: ",e.show.genres.length?e.show.genres.join(" "):Object(b.jsx)("strong",{children:"No genres listed"})]}),Object(b.jsxs)("li",{children:["Rating: ",e.show.rating.average?e.show.rating.average:Object(b.jsx)("strong",{children:"No ratings specified"})]}),Object(b.jsxs)("li",{children:["Link: ",Object(b.jsx)("a",{href:e.show.officialSite,children:e.show.officialSite?e.show.name:Object(b.jsx)("strong",{children:"No link specified"})})]}),Object(b.jsx)("li",{children:Object(b.jsx)(d.a,{onClick:function(){!function(e){v("newFilm","id=".concat(y("id"),"&data=").concat(JSON.stringify(e))).then((function(e){return e.json()})).then((function(e){return alert(e)}))}(e)},children:Object(b.jsx)(f.a,{})})})]})]},e.show.id)})):o.map((function(e){return Object(b.jsxs)("div",{className:"Person",children:[Object(b.jsx)("div",{className:"Picture",children:e.person.image?Object(b.jsx)("img",{src:e.person.image.medium,alt:e.person.name,className:"personImg"}):Object(b.jsx)("strong",{children:"No image found :("})}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:e.person.name}),Object(b.jsxs)("li",{children:["Birthday:",e.person.birthday," | Deathday: ",e.person.deathday]}),Object(b.jsxs)("li",{children:["Country: ",e.person.country?e.person.country.name:null]}),Object(b.jsxs)("li",{children:["Gender: ",e.person.gender]}),Object(b.jsxs)("li",{children:["Link: ",Object(b.jsx)("a",{href:e.person.url,children:e.person.name})]})]})]},e.person.id)})):null]})},N=n(43),S=n.n(N),C=function(){var e=Object(c.useState)(!0),t=Object(h.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)(),s=Object(h.a)(r,2),o=s[0],a=s[1],u=function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v("listFilms","id=".concat(y("id")));case 2:return t=e.sent,e.t0=a,e.next=6,t.json();case 6:e.t1=e.sent,(0,e.t0)(e.t1),i(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){i(!0),u()}),[]),n?Object(b.jsx)("div",{children:"Loading..."}):Object(b.jsx)(g,{children:o.starred.map((function(e){return Object(b.jsxs)("div",{className:"Show",children:[Object(b.jsx)("div",{className:"Picture",children:e.film.film.show.image?Object(b.jsx)("img",{src:e.film.film.show.image.medium,alt:e.film.film.show.name,width:"200",height:"200",className:"showImg"}):Object(b.jsx)("strong",{children:"No image found :("})}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:e.film.film.show.name}),Object(b.jsxs)("li",{children:["Genres: ",e.film.film.show.genres.length?e.film.film.show.genres.join(" "):Object(b.jsx)("strong",{children:"No genres listed"})]}),Object(b.jsxs)("li",{children:["Rating: ",e.film.film.show.rating.average?e.film.film.show.rating.average:Object(b.jsx)("strong",{children:"No ratings specified"})]}),Object(b.jsxs)("li",{children:["Link: ",Object(b.jsx)("a",{href:e.film.film.show.officialSite,children:e.film.film.show.officialSite?e.film.film.show.name:Object(b.jsx)("strong",{children:"No link specified"})})]}),Object(b.jsx)("li",{children:Object(b.jsx)(d.a,{onClick:function(){var t;t=e.film.film.show.id,v("deleteFilm","id=".concat(y("id"),"&filmId=").concat(JSON.stringify(t))).then((function(e){return e.json()})).then((function(e){return alert(e)})),window.location.reload()},children:Object(b.jsx)(S.a,{})})})]})]},e.film.film.show.id)}))})};var F=function(){return Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{exact:!0,path:"/",children:Object(b.jsx)(k,{})}),Object(b.jsx)(o.a,{exact:!0,path:"/starred",children:Object(b.jsx)(C,{})}),Object(b.jsx)(o.a,{children:Object(b.jsx)("div",{children:"This is 404 page"})})]})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,77)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),r(e),s(e)}))};r.a.render(Object(b.jsx)(s.a,{children:Object(b.jsx)(F,{})}),document.getElementById("root")),I()}},[[62,1,2]]]);
//# sourceMappingURL=main.b9c9003a.chunk.js.map