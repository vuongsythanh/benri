(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,n){e.exports=n(41)},41:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(14),c=n.n(r),o=n(11),i=n.n(o),u=n(15),m=n(20),s=n(16).initializeApp({apiKey:"AIzaSyDJ13jFF3v2QTVydXZ5vCVy8AsdCdqQwCk",authDomain:"benri-2c1bb.firebaseapp.com",databaseURL:"https://benri-2c1bb.firebaseio.com",projectId:"benri-2c1bb",storageBucket:"benri-2c1bb.appspot.com",messagingSenderId:"337467238662",appId:"1:337467238662:web:2bd727115d6d4b4f"}),d=n(43),h=n(44),E=n(45),b=n(46),p=n(48),v=n(50),f=n(49),w=n(47);var g=function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),n=t[0],r=t[1],c=Object(a.useRef)(null),o=function(){var e=Object(u.a)(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.database().ref().child("words");case 2:e.sent.on("value",function(e){var t=e.val();r(t)});case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)(function(){o()},[]),l.a.createElement(d.a,{className:"mt-4"},l.a.createElement(h.a,null,l.a.createElement(E.a,null,l.a.createElement(b.a,null,l.a.createElement("h1",null,"Ch\xe0o b\u1ea1n!"),l.a.createElement("p",null,"N\u1ebfu b\u1ea1n \u0111ang g\u1eb7p kh\xf3 kh\u0103n trong vi\u1ec7c loay hoay tra ngh\u0129a t\u1eeb v\u1ef1ng h\xe1n vi\u1ec7t th\xec \u0111\xe2y l\xe0 ti\u1ec7n \xedch b\u1ea1n c\u1ea7n!"),l.a.createElement("p",null,l.a.createElement(p.a,{variant:"primary"},"Xem v\u1ec1 m\xecnh"))))),l.a.createElement(h.a,null,l.a.createElement(E.a,null,l.a.createElement(v.a,{className:"mb-3"},l.a.createElement(f.a,{placeholder:"Nh\u1eadp t\u1eeb h\xe1n vi\u1ec7t...","aria-label":"Nh\u1eadp t\u1eeb h\xe1n vi\u1ec7t...","aria-describedby":"basic-addon2",ref:c,onChange:function(){var e=c.current.value;if(""!==e){var t=n.filter(function(t){return t.vn.toLowerCase().includes(e)});setTimeout(function(){r(t)},1e3)}else setTimeout(function(){o()},1100)}}),l.a.createElement(v.a.Append,null,l.a.createElement(v.a.Text,{id:"basic-addon2"},"T\xecm ki\u1ebfm"))))),l.a.createElement(h.a,null,l.a.createElement(E.a,null,l.a.createElement(w.a,{striped:!0,bordered:!0,hover:!0,responsive:"sm",variant:"dark"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"T\u1eeb v\u1ef1ng"),l.a.createElement("th",null,"\xc2m h\xe1n vi\u1ec7t"),l.a.createElement("th",null,"C\xe1ch \u0111\u1ecdc"),l.a.createElement("th",null,"\xdd ngh\u0129a"),l.a.createElement("th",null,"C\xe1ch nh\u1edb"),l.a.createElement("th",null,"Tr\xecnh \u0111\u1ed9"),l.a.createElement("th",null,"Lo\u1ea1i t\u1eeb"))),l.a.createElement("tbody",null,n.map(function(e){return l.a.createElement("tr",{key:e.jp},l.a.createElement("td",null,e.jp),l.a.createElement("td",null,e.vn),l.a.createElement("td",null,e.read),l.a.createElement("td",null,e.meaning),l.a.createElement("td",null,e.note),l.a.createElement("td",null,e.level),l.a.createElement("td",null,e.rank))}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(40);c.a.render(l.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,1,2]]]);
//# sourceMappingURL=main.fc6c620c.chunk.js.map