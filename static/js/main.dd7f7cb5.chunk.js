(this["webpackJsonpheads-or-tails"]=this["webpackJsonpheads-or-tails"]||[]).push([[0],{14:function(t,e,a){},16:function(t,e,a){},18:function(t,e,a){},19:function(t,e,a){"use strict";a.r(e);var n=a(1),s=a.n(n),c=a(4),r=a.n(c),i=(a(14),a(3)),o=a.n(i),h=a(5),l=a(6),u=a(7),d=a(9),j=a(8),m=(a(16),a(0)),f=function(t){Object(d.a)(a,t);var e=Object(j.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={data:{results:[]}},t.fetchApi=Object(h.a)(o.a.mark((function e(){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://rickandmortyapi.com/api/character");case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,t.setState({data:n,hash:Math.floor(2*Math.random())});case 7:case"end":return e.stop()}}),e)}))),t.handleClick=function(){t.setState({hash:Math.floor(2*Math.random())})},t}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.fetchApi()}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"coin-container",children:[Object(m.jsx)("figure",{className:"image-container",children:this.state.data.results[this.state.hash]?Object(m.jsx)("img",{className:"image-result",src:this.state.data.results[this.state.hash].image,alt:"Imagen de ".concat(this.state.data.results[this.state.hash].name)}):console.log("no veas la consola bro")}),Object(m.jsx)("div",{className:"text-container",children:this.state.data.results[this.state.hash]?Object(m.jsx)("h2",{className:"name-result",children:this.state.data.results[this.state.hash].name}):console.log("concentrate en el juego")})]}),Object(m.jsx)("button",{className:"button",onClick:this.handleClick,type:"button",children:"GOOD LUCK"})]})}}]),a}(s.a.Component);a(18);var b=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(f,{})})},p=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,20)).then((function(e){var a=e.getCLS,n=e.getFID,s=e.getFCP,c=e.getLCP,r=e.getTTFB;a(t),n(t),s(t),c(t),r(t)}))};r.a.render(Object(m.jsx)(b,{}),document.getElementById("root")),p()}},[[19,1,2]]]);
//# sourceMappingURL=main.dd7f7cb5.chunk.js.map