(this["webpackJsonpheads-or-tails"]=this["webpackJsonpheads-or-tails"]||[]).push([[0],{14:function(t,e,a){},16:function(t,e,a){},17:function(t,e,a){},19:function(t,e,a){},20:function(t,e,a){"use strict";a.r(e);var n=a(1),s=a.n(n),c=a(4),i=a.n(c),r=(a(14),a(3)),o=a.n(r),l=a(5),h=a(6),d=a(7),u=a(9),j=a(8),m=(a(16),a(17),a(0)),b=function(){return Object(m.jsx)("div",{className:"loader",children:Object(m.jsx)("div",{className:"lds-circle",children:Object(m.jsx)("div",{className:"loader-child"})})})},f=function(t){Object(u.a)(a,t);var e=Object(j.a)(a);function a(){var t;Object(h.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={data:{results:[]},hash:1,loading:!0},t.handleClick=function(){t.setState((function(t){return{hash:Math.floor(2*Math.random()),loading:!0}})),setTimeout((function(){t.setState((function(t){return{hash:Math.floor(2*Math.random()),loading:!1}}))}),700)},t}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var t=Object(l.a)(o.a.mark((function t(){var e,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.handleClick(),t.next=3,fetch("https://rickandmortyapi.com/api/character");case 3:return e=t.sent,t.next=6,e.json();case 6:a=t.sent,this.setState((function(t){return{data:a,hash:Math.floor(2*Math.random())}}));case 8:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"coin-container",children:[Object(m.jsx)("figure",{className:"image-container",children:this.state.loading?Object(m.jsx)(b,{}):Object(m.jsx)("img",{className:"image-result",src:this.state.data.results[this.state.hash].image,alt:"Imagen de ".concat(this.state.data.results[this.state.hash].name)})}),Object(m.jsx)("div",{className:"text-container",children:this.state.loading?Object(m.jsx)("h2",{className:"name-result",children:Object(m.jsxs)("div",{class:"lds-ellipsis name-loader",children:[Object(m.jsx)("div",{}),Object(m.jsx)("div",{}),Object(m.jsx)("div",{}),Object(m.jsx)("div",{})]})}):Object(m.jsx)("h2",{className:"name-result",children:this.state.data.results[this.state.hash].name})})]}),Object(m.jsx)("button",{className:"button",onClick:this.handleClick,type:"button",children:"GOOD LUCK"})]})}}]),a}(s.a.Component);a(19);var O=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(f,{})})},x=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,21)).then((function(e){var a=e.getCLS,n=e.getFID,s=e.getFCP,c=e.getLCP,i=e.getTTFB;a(t),n(t),s(t),c(t),i(t)}))};i.a.render(Object(m.jsx)(O,{}),document.getElementById("root")),x()}},[[20,1,2]]]);
//# sourceMappingURL=main.41d5d3a1.chunk.js.map