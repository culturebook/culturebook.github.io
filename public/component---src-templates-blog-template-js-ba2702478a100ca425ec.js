webpackJsonp([0x6f26da274c7e],{56:function(e,t,n){var r,a;!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var l=n.apply(null,r);l&&e.push(l)}else if("object"===a)for(var s in r)o.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}var o={}.hasOwnProperty;"undefined"!=typeof e&&e.exports?(n.default=n,e.exports=n):(r=[],a=function(){return n}.apply(t,r),!(void 0!==a&&(e.exports=a)))}()},443:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}function a(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}function s(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}t.__esModule=!0,t.default=void 0;var i=(a(n(6)),r(n(1))),u=a(n(56)),c="react-tabs__tab",d=function(e){function t(){return e.apply(this,arguments)||this}s(t,e);var n=t.prototype;return n.componentDidMount=function(){this.checkFocus()},n.componentDidUpdate=function(){this.checkFocus()},n.checkFocus=function(){var e=this.props,t=e.selected,n=e.focus;t&&n&&this.node.focus()},n.render=function(){var e,t=this,n=this.props,r=n.children,a=n.className,s=n.disabled,c=n.disabledClassName,d=(n.focus,n.id),f=n.panelId,p=n.selected,b=n.selectedClassName,h=n.tabIndex,y=n.tabRef,v=l(n,["children","className","disabled","disabledClassName","focus","id","panelId","selected","selectedClassName","tabIndex","tabRef"]);return i.default.createElement("li",o({},v,{className:(0,u.default)(a,(e={},e[b]=p,e[c]=s,e)),ref:function(e){t.node=e,y&&y(e)},role:"tab",id:d,"aria-selected":p?"true":"false","aria-disabled":s?"true":"false","aria-controls":f,tabIndex:h||(p?"0":null)}),r)},t}(i.Component);t.default=d,d.defaultProps={className:c,disabledClassName:c+"--disabled",focus:!1,id:null,panelId:null,selected:!1,selectedClassName:c+"--selected"},d.propTypes={},d.tabsRole="Tab"},444:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}function a(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}function s(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}t.__esModule=!0,t.default=void 0;var i=(a(n(6)),r(n(1))),u=a(n(56)),c=function(e){function t(){return e.apply(this,arguments)||this}s(t,e);var n=t.prototype;return n.render=function(){var e=this.props,t=e.children,n=e.className,r=l(e,["children","className"]);return i.default.createElement("ul",o({},r,{className:(0,u.default)(n),role:"tablist"}),t)},t}(i.Component);t.default=c,c.defaultProps={className:"react-tabs__tab-list"},c.propTypes={},c.tabsRole="TabList"},445:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}function a(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}function s(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}t.__esModule=!0,t.default=void 0;var i=(a(n(6)),r(n(1))),u=a(n(56)),c="react-tabs__tab-panel",d=function(e){function t(){return e.apply(this,arguments)||this}s(t,e);var n=t.prototype;return n.render=function(){var e,t=this.props,n=t.children,r=t.className,a=t.forceRender,s=t.id,c=t.selected,d=t.selectedClassName,f=t.tabId,p=l(t,["children","className","forceRender","id","selected","selectedClassName","tabId"]);return i.default.createElement("div",o({},p,{className:(0,u.default)(r,(e={},e[d]=c,e)),role:"tabpanel",id:s,"aria-labelledby":f}),a||c?n:null)},t}(i.Component);t.default=d,d.defaultProps={className:c,forceRender:!1,selectedClassName:c+"--selected"},d.propTypes={},d.tabsRole="TabPanel"},446:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}function l(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}t.__esModule=!0,t.default=void 0;var s=(a(n(6)),r(n(1))),i=(n(186),a(n(447))),u=n(185),c=function(e){function t(n){var r;return r=e.call(this,n)||this,r.handleSelected=function(e,n,a){var o=r.props.onSelect;if("function"!=typeof o||o(e,n,a)!==!1){var l={focus:"keydown"===a.type};t.inUncontrolledMode(r.props)&&(l.selectedIndex=e),r.setState(l)}},r.state=t.copyPropsToState(r.props,{},n.defaultFocus),r}l(t,e);var n=t.prototype;return n.componentWillReceiveProps=function(e){this.setState(function(n){return t.copyPropsToState(e,n)})},t.inUncontrolledMode=function(e){return null===e.selectedIndex},t.copyPropsToState=function(e,n,r){void 0===r&&(r=!1);var a={focus:r};if(t.inUncontrolledMode(e)){var o=(0,u.getTabsCount)(e.children)-1,l=null;l=null!=n.selectedIndex?Math.min(n.selectedIndex,o):e.defaultIndex||0,a.selectedIndex=l}return a},n.render=function(){var e=this.props,t=e.children,n=(e.defaultIndex,e.defaultFocus,o(e,["children","defaultIndex","defaultFocus"])),r=this.state,a=r.focus,l=r.selectedIndex;return n.focus=a,n.onSelect=this.handleSelected,null!=l&&(n.selectedIndex=l),s.default.createElement(i.default,n,t)},t}(s.Component);t.default=c,c.defaultProps={defaultFocus:!1,forceRenderTabPanel:!1,selectedIndex:null,defaultIndex:null},c.propTypes={},c.tabsRole="Tabs"},447:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}function a(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}function s(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function i(e){return e&&"getAttribute"in e}function u(e){return i(e)&&"tab"===e.getAttribute("role")}function c(e){return i(e)&&"true"===e.getAttribute("aria-disabled")}t.__esModule=!0,t.default=void 0;var d,f=(a(n(6)),r(n(1))),p=a(n(56)),b=a(n(187)),h=(n(186),n(185)),y=n(126),v=n(76);try{d=!("undefined"==typeof window||!window.document||!window.document.activeElement)}catch(e){d=!1}var m=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return t=e.call.apply(e,[this].concat(r))||this,t.tabNodes=[],t.handleKeyDown=function(e){if(t.isTabFromContainer(e.target)){var n=t.props.selectedIndex,r=!1,a=!1;32!==e.keyCode&&13!==e.keyCode||(r=!0,a=!1,t.handleClick(e)),37===e.keyCode||38===e.keyCode?(n=t.getPrevTab(n),r=!0,a=!0):39===e.keyCode||40===e.keyCode?(n=t.getNextTab(n),r=!0,a=!0):35===e.keyCode?(n=t.getLastTab(),r=!0,a=!0):36===e.keyCode&&(n=t.getFirstTab(),r=!0,a=!0),r&&e.preventDefault(),a&&t.setSelected(n,e)}},t.handleClick=function(e){var n=e.target;do if(t.isTabFromContainer(n)){if(c(n))return;var r=[].slice.call(n.parentNode.children).filter(u).indexOf(n);return void t.setSelected(r,e)}while(null!=(n=n.parentNode))},t}s(t,e);var n=t.prototype;return n.setSelected=function(e,t){if(!(e<0||e>=this.getTabsCount())){var n=this.props,r=n.onSelect,a=n.selectedIndex;r(e,a,t)}},n.getNextTab=function(e){for(var t=this.getTabsCount(),n=e+1;n<t;n++)if(!c(this.getTab(n)))return n;for(var r=0;r<e;r++)if(!c(this.getTab(r)))return r;return e},n.getPrevTab=function(e){for(var t=e;t--;)if(!c(this.getTab(t)))return t;for(t=this.getTabsCount();t-- >e;)if(!c(this.getTab(t)))return t;return e},n.getFirstTab=function(){for(var e=this.getTabsCount(),t=0;t<e;t++)if(!c(this.getTab(t)))return t;return null},n.getLastTab=function(){for(var e=this.getTabsCount();e--;)if(!c(this.getTab(e)))return e;return null},n.getTabsCount=function(){var e=this.props.children;return(0,h.getTabsCount)(e)},n.getPanelsCount=function(){var e=this.props.children;return(0,h.getPanelsCount)(e)},n.getTab=function(e){return this.tabNodes["tabs-"+e]},n.getChildren=function(){var e=this,t=0,n=this.props,r=n.children,a=n.disabledTabClassName,o=n.focus,l=n.forceRenderTabPanel,s=n.selectedIndex,i=n.selectedTabClassName,u=n.selectedTabPanelClassName;this.tabIds=this.tabIds||[],this.panelIds=this.panelIds||[];for(var c=this.tabIds.length-this.getTabsCount();c++<0;)this.tabIds.push((0,b.default)()),this.panelIds.push((0,b.default)());return(0,y.deepMap)(r,function(n){var r=n;if((0,v.isTabList)(n)){var c=0,p=!1;d&&(p=f.default.Children.toArray(n.props.children).filter(v.isTab).some(function(t,n){return document.activeElement===e.getTab(n)})),r=(0,f.cloneElement)(n,{children:(0,y.deepMap)(n.props.children,function(t){var n="tabs-"+c,r=s===c,l={tabRef:function(t){e.tabNodes[n]=t},id:e.tabIds[c],panelId:e.panelIds[c],selected:r,focus:r&&(o||p)};return i&&(l.selectedClassName=i),a&&(l.disabledClassName=a),c++,(0,f.cloneElement)(t,l)})})}else if((0,v.isTabPanel)(n)){var b={id:e.panelIds[t],tabId:e.tabIds[t],selected:s===t};l&&(b.forceRender=l),u&&(b.selectedClassName=u),t++,r=(0,f.cloneElement)(n,b)}return r})},n.isTabFromContainer=function(e){if(!u(e))return!1;var t=e.parentElement;do{if(t===this.node)return!0;if(t.getAttribute("data-tabs"))break;t=t.parentElement}while(t);return!1},n.render=function(){var e=this,t=this.props,n=(t.children,t.className),r=(t.disabledTabClassName,t.domRef),a=(t.focus,t.forceRenderTabPanel,t.onSelect,t.selectedIndex,t.selectedTabClassName,t.selectedTabPanelClassName,l(t,["children","className","disabledTabClassName","domRef","focus","forceRenderTabPanel","onSelect","selectedIndex","selectedTabClassName","selectedTabPanelClassName"]));return f.default.createElement("div",o({},a,{className:(0,p.default)(n),onClick:this.handleClick,onKeyDown:this.handleKeyDown,ref:function(t){e.node=t,r&&r(t)},"data-tabs":!0}),this.getChildren())},t}(f.Component);t.default=m,m.defaultProps={className:"react-tabs",focus:!1},m.propTypes={}},126:function(e,t,n){"use strict";function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){a(e,t,n[t])})}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){return(0,u.isTab)(e)||(0,u.isTabList)(e)||(0,u.isTabPanel)(e)}function l(e,t){return i.Children.map(e,function(e){return null===e?null:o(e)?t(e):e.props&&e.props.children&&"object"==typeof e.props.children?(0,i.cloneElement)(e,r({},e.props,{children:l(e.props.children,t)})):e})}function s(e,t){return i.Children.forEach(e,function(e){null!==e&&((0,u.isTab)(e)||(0,u.isTabPanel)(e)?t(e):e.props&&e.props.children&&"object"==typeof e.props.children&&((0,u.isTabList)(e)&&t(e),s(e.props.children,t)))})}t.__esModule=!0,t.deepMap=l,t.deepForEach=s;var i=n(1),u=n(76)},185:function(e,t,n){"use strict";function r(e){var t=0;return(0,o.deepForEach)(e,function(e){(0,l.isTab)(e)&&t++}),t}function a(e){var t=0;return(0,o.deepForEach)(e,function(e){(0,l.isTabPanel)(e)&&t++}),t}t.__esModule=!0,t.getTabsCount=r,t.getPanelsCount=a;var o=n(126),l=n(76)},76:function(e,t){"use strict";function n(e){return e.type&&"Tab"===e.type.tabsRole}function r(e){return e.type&&"TabPanel"===e.type.tabsRole}function a(e){return e.type&&"TabList"===e.type.tabsRole}t.__esModule=!0,t.isTab=n,t.isTabPanel=r,t.isTabList=a},186:function(e,t,n){"use strict";function r(e,t,n){var r,a=0,o=0,i=!1,u=[],c=e[t];return(0,l.deepForEach)(c,function(e){(0,s.isTabList)(e)&&(e.props&&e.props.children&&"object"==typeof e.props.children&&(0,l.deepForEach)(e.props.children,function(e){return u.push(e)}),i&&(r=new Error("Found multiple 'TabList' components inside 'Tabs'. Only one is allowed.")),i=!0),(0,s.isTab)(e)?(i&&u.indexOf(e)!==-1||(r=new Error("Found a 'Tab' component outside of the 'TabList' component. 'Tab' components have to be inside the 'TabList' component.")),a++):(0,s.isTabPanel)(e)&&o++}),r||a===o||(r=new Error("There should be an equal number of 'Tab' and 'TabPanel' in `"+n+"`. "+("Received "+a+" 'Tab' and "+o+" 'TabPanel'."))),r}function a(e,t,n,r,a){var o=e[t],l=a||t,s=null;return o&&"function"!=typeof o?s=new Error("Invalid "+r+" `"+l+"` of type `"+typeof o+"` supplied "+("to `"+n+"`, expected `function`.")):null!=e.selectedIndex&&null==o&&(s=new Error("The "+r+" `"+l+"` is marked as required in `"+n+"`, but its value is `undefined` or `null`.\n`onSelect` is required when `selectedIndex` is also set. Not doing so will make the tabs not do anything, as `selectedIndex` indicates that you want to handle the selected tab yourself.\nIf you only want to set the inital tab replace `selectedIndex` with `defaultIndex`.")),s}function o(e,t,n,r,a){var o=e[t],l=a||t,s=null;if(null!=o&&"number"!=typeof o)s=new Error("Invalid "+r+" `"+l+"` of type `"+typeof o+"` supplied to "+("`"+n+"`, expected `number`."));else if(null!=e.defaultIndex&&null!=o)return new Error("The "+r+" `"+l+"` cannot be used together with `defaultIndex` "+("in `"+n+"`.\n")+("Either remove `"+l+"` to let `"+n+"` handle the selected ")+"tab internally or remove `defaultIndex` to handle it yourself.");return s}t.__esModule=!0,t.childrenPropType=r,t.onSelectPropType=a,t.selectedIndexPropType=o;var l=n(126),s=n(76)},187:function(e,t){"use strict";function n(){return"react-tabs-"+a++}function r(){a=0}t.__esModule=!0,t.default=n,t.reset=r;var a=0},448:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.resetIdCounter=t.TabPanel=t.Tab=t.TabList=t.Tabs=void 0;var a=r(n(446));t.Tabs=a.default;var o=r(n(444));t.TabList=o.default;var l=r(n(443));t.Tab=l.default;var s=r(n(445));t.TabPanel=s.default;var i=n(187);t.resetIdCounter=i.reset},201:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=n(1),i=r(s),u=n(448),c=function(e){function t(){return a(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.prototype.cleanerContent=function(){return this.props.sendContent},t.prototype.render=function(){return i.default.createElement("div",null,i.default.createElement(u.Tabs,{className:"exhibitTabs"},i.default.createElement(u.TabList,null,i.default.createElement(u.Tab,null,"About"),i.default.createElement(u.Tab,null,"More"),i.default.createElement(u.Tab,null,"Media"),i.default.createElement(u.Tab,null,"Contribute")),i.default.createElement(u.TabPanel,null,i.default.createElement("h1",null,this.props.sendSelection.title),i.default.createElement("div",{className:"blog-post-content",dangerouslySetInnerHTML:{__html:this.cleanerContent()}})),i.default.createElement(u.TabPanel,null,i.default.createElement("h2",null,"Any content 2")),i.default.createElement(u.TabPanel,null,i.default.createElement("h2",null,"Any content 3")),i.default.createElement(u.TabPanel,null,i.default.createElement("h2",null,"Any content 4"))))},t}(i.default.Component);t.default=c,e.exports=t.default},215:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e){var t=e.data,n=t.markdownRemark,r=n.frontmatter,a=n.html;return l.default.createElement("div",{className:"page__exhibit"},l.default.createElement(c.default,{title:r.title+" "}),l.default.createElement("article",{className:"exhibit"},l.default.createElement("div",{className:"row"},l.default.createElement("div",{className:"col-sm-4 exhibit-feature"},l.default.createElement("img",{src:r.photo,alt:r.title,width:"600"})),l.default.createElement("div",{className:"col-sm-8 exhibit-content"},l.default.createElement(i.default,{sendSelection:r,sendContent:a})))))}t.__esModule=!0,t.pageQuery=void 0,t.default=a;var o=n(1),l=r(o),s=n(201),i=r(s),u=n(52),c=r(u);t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-blog-template-js-ba2702478a100ca425ec.js.map