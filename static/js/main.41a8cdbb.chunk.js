(this["webpackJsonpheads-or-tails"]=this["webpackJsonpheads-or-tails"]||[]).push([[0],{32:function(t,e,n){},34:function(t,e,n){},35:function(t,e,n){},95:function(t,e,n){},96:function(t,e,n){"use strict";n.r(e);var a=n(3),s=n.n(a),c=n(21),i=n.n(c),r=(n(32),n(10)),o=n.n(r),l=n(22),h=n(23),d=n(24),u=n(27),j=n(26),m=(n(34),n(35),n(25)),b=n(0),f=function(){return Object(b.jsx)("div",{className:"loader",children:Object(b.jsx)(m.Animated,{animationIn:"rotateIn",animationInDuration:"600",isVisible:!0,children:Object(b.jsx)("div",{className:"lds-circle",children:Object(b.jsx)("div",{className:"loader-child"})})})})},O=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(h.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={data:{results:[]},hash:1,loading:!0},t.handleClick=function(){t.setState((function(t){return{hash:Math.floor(2*Math.random()),loading:!0}})),setTimeout((function(){t.setState((function(t){return{hash:Math.floor(2*Math.random()),loading:!1}}))}),700)},t}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var t=Object(l.a)(o.a.mark((function t(){var e,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.handleClick(),t.next=3,fetch("https://rickandmortyapi.com/api/character");case 3:return e=t.sent,t.next=6,e.json();case 6:n=t.sent,this.setState((function(t){return{data:n,hash:Math.floor(2*Math.random())}}));case 8:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"coin-container",children:[Object(b.jsx)("figure",{className:"image-container",children:this.state.loading?Object(b.jsx)(f,{}):Object(b.jsx)("img",{className:"image-result",src:this.state.data.results[this.state.hash].image,alt:"Imagen de ".concat(this.state.data.results[this.state.hash].name)})}),Object(b.jsx)("div",{className:"text-container",children:this.state.loading?Object(b.jsx)("h2",{className:"name-result",children:Object(b.jsxs)("div",{class:"lds-ellipsis name-loader",children:[Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{})]})}):Object(b.jsx)("h2",{className:"name-result",children:this.state.data.results[this.state.hash].name})})]}),Object(b.jsx)("button",{className:"button",onClick:this.handleClick,type:"button",children:"GOOD LUCK"})]})}}]),n}(s.a.Component);n(95);var x=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(O,{})})},v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,97)).then((function(e){var n=e.getCLS,a=e.getFID,s=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),a(t),s(t),c(t),i(t)}))};i.a.render(Object(b.jsx)(x,{}),document.getElementById("root")),v()}},[[96,1,2]]]);
//# sourceMappingURL=main.41a8cdbb.chunk.js.map