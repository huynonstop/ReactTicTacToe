(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],[,,,,,function(e,a,t){e.exports=t(13)},,,,,function(e,a,t){},,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(4),i=t.n(c),s=(t(10),t(1)),u=t.n(s),o=t(2),l=function(e){var a=e.value,t=e.onClick;return n.a.createElement("div",{className:"square",onClick:t},a)},f=function(e){var a=e.board,t=e.onClick;return n.a.createElement("div",{className:"board"},a.map((function(e,a){return n.a.createElement(l,{value:e,onClick:function(){return t(a)}})})))},v=function(e){var a=e.width,t=e.height,c=Object(r.useState)([{squares:Array(a*t).fill(null)}]),i=Object(o.a)(c,2),s=i[0],l=i[1],v=Object(r.useState)(0),b=Object(o.a)(v,2),m=b[0],p=b[1],d=Object(r.useState)(!0),O=Object(o.a)(d,2),k=O[0],w=O[1],h=Object(r.useState)({isOver:!1,winner:void 0}),E=Object(o.a)(h,2),j=E[0],x=E[1],g=function(e,r,n){var c=!1,i=a,s=r%a,u=Math.floor(r/a);if(m===a*t-1&&alert("Draw"),!1===c)for(var o=0;o<a;o++){if(e[u*a+o]!==n)break;o===a-1&&(c=!0)}if(!1===c)for(var l=0;l<t;l++){if(e[l*a+s]!==n)break;l===a-1&&(c=!0)}if(!1===c&&s===u)for(var f=0;f<i;f++){if(e[f*i+f]!==n)break;f===i-1&&(c=!0)}if(!1===c&&u+s===i-1)for(var v=0;v<i;v++){if(e[v*i+(i-1-v)]!==n)break;v===i-1&&(c=!0)}!0===c&&x({isOver:!0,winner:n})};return n.a.createElement("div",{className:"game"},n.a.createElement(f,{board:s[m].squares,onClick:function(e){var a,t;return u.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(!0!==j.isOver){r.next=2;break}return r.abrupt("return");case 2:if(a=s[m],null===(t=a.squares.slice())[e]){r.next=6;break}return r.abrupt("return");case 6:return t[e]=k?"X":"O",r.next=9,u.a.awrap(l(s.concat([{squares:t}])));case 9:return r.next=11,u.a.awrap(w(!k));case 11:return r.next=13,u.a.awrap(p(m+1));case 13:g(t,e,t[e]);case 14:case"end":return r.stop()}}))}}),n.a.createElement("div",{className:"game-info"},j.isOver?"Winner is "+j.winner:k?"X":"O"))},b=(t(12),function(){return n.a.createElement("div",{className:"App"},n.a.createElement(v,{width:3,height:3}))});i.a.render(n.a.createElement(b,null),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.e524703e.chunk.js.map