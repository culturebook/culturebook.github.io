webpackJsonp([0x8d483908e459],{219:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=r(1),c=a(i),l=r(12),u=a(l),f=r(6),d=(a(f),r(52)),p=a(d),h=function(e){function t(r){n(this,t);var a=o(this,e.call(this,r));return a.renderItems=function(e){var t=a.state.exhibits,r=t[e];if(r)return c.default.createElement("li",{key:e},c.default.createElement(u.default,{to:{pathname:"/exhibit",state:{message:"parsed state"}}},c.default.createElement("div",{className:"card"},c.default.createElement("img",{className:"card-img-top",src:r.edmPreview,alt:r.title}),c.default.createElement("div",{className:"card-body"},c.default.createElement("h5",{className:"card-title"},r.title)))))},a.state={exhibits:[],exhibit:"",searchTerm:""},a}return s(t,e),t.prototype.componentDidMount=function(){var e=this,t="https://www.europeana.eu/api/v2/search.json?wskey=L6424KAMT&query="+this.props.location.state.key;fetch(t).then(function(e){return e.json()}).then(function(t){var r=Array.from(t.items);e.setState({exhibits:r})}).catch(function(e){console.error(e)})},t.prototype.render=function(){var e=Object.keys(this.state.exhibits);return c.default.createElement("div",{className:"page"},c.default.createElement(p.default,{title:"Results for: "+this.state.searchTerm}),c.default.createElement("h1",null,"Results"),c.default.createElement("ul",{id:"result"},e.map(this.renderItems)))},t}(c.default.Component);t.default=h,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-results-js-379373b81a21dc0ff8e1.js.map