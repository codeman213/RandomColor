(this["webpackJsonprandom-app"]=this["webpackJsonprandom-app"]||[]).push([[0],{14:function(t,e,o){"use strict";o.r(e);var n=o(1),a=o(2),r=o(5),i=o(4),c=o(3),l=o(6),u=o(0),s=o.n(u),h=o(8),p=o.n(h),d=function(t){function e(){return Object(n.a)(this,e),Object(r.a)(this,Object(i.a)(e).apply(this,arguments))}return Object(l.a)(e,t),Object(a.a)(e,[{key:"render",value:function(){return s.a.createElement("button",{className:this.props.light?"light-button":"dark-button",onClick:this.props.onClick},"Refresh")}}]),e}(s.a.Component),f=function(t){function e(t){var o;return Object(n.a)(this,e),(o=Object(r.a)(this,Object(i.a)(e).call(this,t))).state={color:[223,5,7]},o.handleClick=o.handleClick.bind(Object(c.a)(o)),o}return Object(l.a)(e,t),Object(a.a)(e,[{key:"componentDidMount",value:function(){this.applyColor()}},{key:"componentDidUpdate",value:function(t,e){this.applyColor()}},{key:"formatColor",value:function(t){return"rgb("+t.join(", ")+")"}},{key:"isLight",value:function(){return this.state.color.reduce((function(t,e){return t+e}))<381}},{key:"applyColor",value:function(){var t=this.formatColor(this.state.color);document.body.style.background=t}},{key:"chooseColor",value:function(){for(var t=[],e=0;e<3;e++)t.push(Math.floor(256*Math.random()));return t}},{key:"handleClick",value:function(){this.setState({color:this.chooseColor()})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h1",{className:this.isLight()?"white":"black"}," your color is ",this.formatColor(this.state.color)),s.a.createElement(d,{light:this.isLight(),onClick:this.handleClick}))}}]),e}(s.a.Component);p.a.render(s.a.createElement(f,null),document.getElementById("root"))},9:function(t,e,o){t.exports=o(14)}},[[9,1,2]]]);
//# sourceMappingURL=main.0cfadc6e.chunk.js.map