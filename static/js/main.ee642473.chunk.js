(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{149:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),c=t(21),l=t.n(c),o=(t(62),t(29)),i=t.n(o),d=t(49),s=t(56),u=t(50).initializeApp({apiKey:"AIzaSyDJ13jFF3v2QTVydXZ5vCVy8AsdCdqQwCk",authDomain:"benri-2c1bb.firebaseapp.com",databaseURL:"https://benri-2c1bb.firebaseio.com",projectId:"benri-2c1bb",storageBucket:"benri-2c1bb.appspot.com",messagingSenderId:"337467238662",appId:"1:337467238662:web:2bd727115d6d4b4f"}),m=t(151),h=t(152),b=t(153),g=t(154),p=t(52),f=t.n(p),v=t(22),E=t.n(v),k=t(53),y=t.n(k),C=t(54),w=t.n(C);var x=function(){var e=Object(n.useState)([]),a=Object(s.a)(e,2),t=a[0],c=a[1],l=function(){var e=Object(d.a)(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.database().ref().child("words");case 2:e.sent.on("value",function(e){var a=e.val();c(a)});case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)(function(){l()},[]);var o=v.Search.SearchBar,p=v.ColumnToggle.ToggleList,k={paginationSize:4,pageStartIndex:1,firstPageText:"<<",prePageText:"<",nextPageText:">",lastPageText:">>",sizePerPageList:[{text:"50",value:50},{text:"100",value:100}]};return r.a.createElement(m.a,{className:"mt-4"},r.a.createElement(h.a,null,r.a.createElement(b.a,null,r.a.createElement(g.a,{className:"shadow-sm p-4 mb-4 bg-white rounded"},r.a.createElement("h1",null,"Ch\xe0o b\u1ea1n h\u1eefu!"),r.a.createElement("br",null),r.a.createElement("div",{className:"alert alert-primary"},r.a.createElement("a",{href:"null",className:"alert-link"},"N\u1ebfu b\u1ea1n \u0111ang loay hoay "),r.a.createElement("a",{href:"null"},"tra ngh\u0129a t\u1eeb v\u1ef1ng theo \xe2m h\xe1n vi\u1ec7t. "),r.a.createElement("a",{href:"null"},"Tra ngh\u0129a t\u1eeb v\u1ef1ng theo c\u1ea5p N2-N3-N4-N5. "),r.a.createElement("a",{href:"null"},"Kh\xf3 nh\u1edb 2136 h\xe1n t\u1ef1. "),r.a.createElement("a",{href:"null",className:"alert-link"},"Th\xec \u0111\xe2y l\xe0 ti\u1ec7n \xedch b\u1ea1n c\u1ea7n!"))))),r.a.createElement(h.a,{className:"mb-5"},r.a.createElement(b.a,{className:"mb-5"},r.a.createElement(E.a,{keyField:"jp",data:t,columns:[{text:"T\u1eeb v\u1ef1ng",dataField:"jp",headerStyle:function(e,a){return a%2===0?{backgroundColor:"#81c784"}:{backgroundColor:"#c8e6c9"}}},{text:"\xc2m h\xe1n vi\u1ec7t",dataField:"vn",headerStyle:function(e,a){return a%2===0?{backgroundColor:"#81c784"}:{backgroundColor:"#c8e6c9"}}},{text:"C\xe1ch \u0111\u1ecdc",dataField:"read",hidden:!0,headerStyle:function(e,a){return a%2===0?{backgroundColor:"#81c784"}:{backgroundColor:"#c8e6c9"}}},{text:"\xdd ngh\u0129a",dataField:"meaning",headerStyle:function(e,a){return a%2===0?{backgroundColor:"#81c784"}:{backgroundColor:"#c8e6c9"}}},{text:"C\xe1ch nh\u1edb",dataField:"note",hidden:!0,headerStyle:function(e,a){return a%2===0?{backgroundColor:"#81c784"}:{backgroundColor:"#c8e6c9"}}},{text:"Tr\xecnh \u0111\u1ed9",dataField:"level",hidden:!0,headerStyle:function(e,a){return a%2===0?{backgroundColor:"#81c784"}:{backgroundColor:"#c8e6c9"}}},{text:"Lo\u1ea1i t\u1eeb",dataField:"type",hidden:!0,headerStyle:function(e,a){return a%2===0?{backgroundColor:"#81c784"}:{backgroundColor:"#c8e6c9"}}}],columnToggle:!0,search:!0},function(e){return r.a.createElement("div",null,r.a.createElement("p",{className:"text-muted font-weight-light"},"(*) \u1ea4n v\xe0o t\xean c\u1ed9t \u0111\u1ec3 \u1ea9n b\u1edbt c\u1ed9t",r.a.createElement("em",null,"(hi\u1ec3n th\u1ecb t\u1ed1t h\u01a1n \u0111\u1ed1i v\u1edbi c\xe1c thi\u1ebft b\u1ecb di \u0111\u1ed9ng).")),r.a.createElement(p,Object.assign({},e.columnToggleProps,{className:"customToggleList"})),r.a.createElement("br",null),r.a.createElement("hr",{className:"my-2"}),r.a.createElement("br",null),r.a.createElement(o,Object.assign({},e.searchProps,{className:"custome-search-field mb-4",placeholder:"Nh\u1eadp t\u1eeb c\u1ea7n t\xecm...",style:{padding:"1.5rem",fontWeight:"bold"}})),r.a.createElement(f.a,Object.assign({responsive:!0,striped:!0,hover:!0},e.baseProps,{pagination:y()(k),noDataIndication:"L\u1ea5y d\u1eef li\u1ec7u...",filter:w()()})))}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(147),t(148);l.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},57:function(e,a,t){e.exports=t(149)},62:function(e,a,t){}},[[57,1,2]]]);
//# sourceMappingURL=main.ee642473.chunk.js.map