(this.webpackJsonpunsplash=this.webpackJsonpunsplash||[]).push([[0],{20:function(e,t,c){},38:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(1),a=c.n(n),i=c(14),r=c.n(i),l=(c(20),c(3)),o=function(e){var t=e.text,c=e.inputChange,n=e.status,a=e.setStatus,i=e.search;return Object(s.jsxs)("div",{className:"hero-div",children:[0!==n?Object(s.jsx)("p",{className:"t-white home-link",onClick:function(){return a(0)},children:" Home"}):"",0===n?Object(s.jsxs)("div",{className:"container hero-search",children:[Object(s.jsx)("button",{className:"search-icon",children:Object(s.jsx)("i",{className:"fa fa-search"})}),Object(s.jsx)("input",{onChange:function(e){return c(e.target.value)},onKeyDown:function(e){return i(e)},type:"text",className:"form-control br-12",placeholder:"Search for photo"})]}):1===n?Object(s.jsx)("div",{className:"hero-text",children:Object(s.jsxs)("h1",{children:[" ","Searching for ",Object(s.jsxs)("span",{className:"dark-white",children:['"',t,'"']})]})}):Object(s.jsx)("div",{className:"hero-text",children:Object(s.jsxs)("h1",{children:[" ","Search Results for ",Object(s.jsxs)("span",{className:"dark-white",children:['"',t,'"']})]})})]})},j=function(e){var t=e.img,c=e.description,n=e.name,a=e.location;return Object(s.jsxs)("div",{className:"image-container br-12",children:[Object(s.jsx)("img",{src:t,className:"br-12 card-img",alt:c,width:"100%"}),Object(s.jsxs)("div",{className:"t-white mast",children:[Object(s.jsx)("p",{className:"t-14 mb-0",children:n}),Object(s.jsxs)("p",{className:"t-12",children:[" ",a]})]})]})},h=["250px","340px","270px","320px","300px","280px"],u=function(e){var t=e.photos,c=e.getImageDetail,n=e.status;return Object(s.jsx)("div",{className:"container gallery",children:Object(s.jsx)("div",{className:"card-columns",children:!t.length>0&2===n?Object(s.jsxs)("div",{className:"t-center dark-white",children:[" ",Object(s.jsx)("p",{children:" *No Images found"})]}):!t.length>0&2!==n?h.map((function(e,t){return Object(s.jsx)("div",{className:"card",children:Object(s.jsx)("div",{className:"skeleton",style:{height:e},children:Object(s.jsxs)("div",{className:"t-white mast",children:[Object(s.jsx)("p",{className:"skeleton-name"}),Object(s.jsx)("p",{className:"skeleton-location"})]})})},t)})):t.map((function(e,t){return Object(s.jsx)("div",{className:"card br-12",onClick:function(){return c(e.id)},children:Object(s.jsx)(j,{img:e.urls.regular,description:e.alt_description,name:null!==e.user.first_name?e.user.first_name:" "+e.user.last_name!==null?e.user.last_name:" ",location:e.user.location})},t)}))})})},d=function(e){var t=e.closebtn,c=e.photo;return Object(s.jsxs)("div",{className:"my-modal",onClick:function(){return t(!1)},children:[Object(s.jsx)("div",{className:"close-modal",children:Object(s.jsx)("span",{onClick:function(){return t(!1)},children:"\xd7"})}),void 0===c.user?Object(s.jsxs)("div",{className:"my-modal-content br-12 skeleton",children:[Object(s.jsx)("div",{className:"skeleton-image",children:" "}),Object(s.jsxs)("div",{className:"p-20",children:[Object(s.jsx)("p",{className:"skeleton-name"}),Object(s.jsx)("p",{className:"skeleton-location"})]})]}):Object(s.jsxs)("div",{className:"my-modal-content br-12",children:[Object(s.jsx)("img",{src:c.urls.regular,className:"object-fit",alt:c.alt_description,width:"100%",height:"450px"}),Object(s.jsxs)("div",{className:"p-20",children:[Object(s.jsxs)("h6",{children:[" ",null!==c.user.first_name?c.user.first_name:" "+c.user.last_name!==null?c.user.last_name:""]}),Object(s.jsxs)("p",{className:"t-12",children:[" ",c.user.location]})]})]})]})},m=c(4),b=c.n(m),x="13gmvia8k-c3R0BGJkW1qpOp8jjJb0T3Nr8tEqyzDhE",O="https://api.unsplash.com",p=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)({}),r=Object(l.a)(i,2),j=r[0],h=r[1],m=Object(n.useState)(""),p=Object(l.a)(m,2),f=p[0],g=p[1],N=Object(n.useState)(0),v=Object(l.a)(N,2),k=v[0],_=v[1],y=Object(n.useState)(!1),S=Object(l.a)(y,2),w=S[0],C=S[1];Object(n.useEffect)((function(){b.a.get("".concat(O,"/search/photos/?client_id=").concat(x,"&query=Africa&page=10&per_page=8&order_by=latest")).then((function(e){a(e.data.results)})).catch((function(e){console.log(e)}))}),[]);return Object(s.jsxs)("div",{children:[w?Object(s.jsx)(d,{closebtn:C,photo:j}):"",Object(s.jsx)(o,{text:f,inputChange:g,status:k,setStatus:_,search:function(e){"Enter"===e.key&&(_(1),a([]),e.target.blur(),b.a.get("".concat(O,"/search/photos/?client_id=").concat(x,"&query=").concat(f)).then((function(e){_(2),a(e.data.results)})).catch((function(e){console.log(e)})))}}),Object(s.jsx)(u,{photos:c,getImageDetail:function(e){h({}),C(!0),b.a.get("".concat(O,"/photos/").concat(e,"?client_id=").concat(x)).then((function(e){h(e.data)})).catch((function(e){console.log(e)}))},status:k})]})};c(38);var f=function(){return Object(s.jsx)(p,{})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,41)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),a(e),i(e)}))};c(39);r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(f,{})}),document.getElementById("root")),g()}},[[40,1,2]]]);
//# sourceMappingURL=main.35feb623.chunk.js.map