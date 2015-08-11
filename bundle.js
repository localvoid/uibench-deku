!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}var o=n(2),i=r(o),u=n(6),a=n(31);uibench.init("Deku","0.5.0"),document.addEventListener("DOMContentLoaded",function(t){var e=document.querySelector("#App"),n=u.deku();u.render(n,e,{batching:!1}),uibench.run(function(t){n.mount(i["default"](a.Main,{data:t}))},function(t){n.mount(i["default"]("pre",null,JSON.stringify(t,null," ")))})})},function(t,e,n){function r(t,e,n){if(!t)throw new TypeError("element() needs a type.");return 2!==arguments.length||"string"!=typeof e&&!Array.isArray(e)||(n=e,e={}),arguments.length>2&&Array.isArray(arguments[2])===!1&&(n=o(arguments,2)),n=n||[],e=e||{},Array.isArray(n)||(n=[n]),n=i(n,2),{type:t,children:n,attributes:e}}var o=n(3),i=n(5);t.exports=r},function(t,e,n){t.exports=e=n(4)},function(t,e){t.exports=function(t,e,n){var r=[],o=t.length;if(0===o)return r;var i=0>e?Math.max(0,e+o):e||0;for(void 0!==n&&(o=0>n?n+o:n);o-->i;)r[o-i]=t[o];return r}},function(t,e){"use strict";function n(t,e,r){for(var o=0;o<t.length;o++){var i=t[o];r>0&&Array.isArray(i)?n(i,e,r-1):e.push(i)}return e}function r(t,e){for(var n=0;n<t.length;n++){var o=t[n];Array.isArray(o)?r(o,e):e.push(o)}return e}function o(t,e){return null==e?r(t,[]):n(t,[],e)}t.exports=o},function(t,e,n){e.tree=e.scene=e.deku=n(7),"undefined"!=typeof document&&(e.render=n(9)),e.renderString=n(30)},function(t,e,n){function r(t){return this instanceof r?(this.options={},this.sources={},void(this.element=t)):new r(t)}var o=n(8);t.exports=r,o(r.prototype),r.prototype.use=function(t){return t(this),this},r.prototype.option=function(t,e){return this.options[t]=e,this},r.prototype.set=function(t,e){return this.sources[t]=e,this.emit("source",t,e),this},r.prototype.mount=function(t){return this.element=t,this.emit("mount",t),this},r.prototype.unmount=function(){return this.element?(this.element=null,this.emit("unmount"),this):void 0}},function(t,e){function n(t){return t?r(t):void 0}function r(t){for(var e in n.prototype)t[e]=n.prototype[e];return t}t.exports=n,n.prototype.on=n.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},n.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this},n.prototype.off=n.prototype.removeListener=n.prototype.removeAllListeners=n.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n=this._callbacks["$"+t];if(!n)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var r,o=0;o<n.length;o++)if(r=n[o],r===e||r.fn===e){n.splice(o,1);break}return this},n.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),n=this._callbacks["$"+t];if(n){n=n.slice(0);for(var r=0,o=n.length;o>r;++r)n[r].apply(this,e)}return this},n.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},n.prototype.hasListeners=function(t){return!!this.listeners(t).length}},function(t,e,n){function r(t,e,n){function r(){ct(),j(),t.off("unmount",y),t.off("mount",c),t.off("source",g)}function c(){_()}function y(){j(),mt=null}function g(t,e){bt[t]&&bt[t].forEach(function(t){t(e)})}function b(t){rt(t),ut(t),Et[t.id]={},wt[t.id]=t,et(t),V("beforeMount",t,[t.context]),V("beforeRender",t,[t.context]);var e=w(t),n=O(t.id,"0",e);return t.virtualElement=e,t.nativeElement=n,_t.push(t.id),n}function x(t){var e=wt[t];if(e){V("beforeUnmount",e,[e.context,e.nativeElement]),C(t),dt(t);var n=xt[t].entities;delete n[t],delete xt[t],delete wt[t],delete Et[t]}}function w(t){var e=t.component,n="function"==typeof e?e:e.render;if(!n)throw new Error("Component needs a render function");var r=n(t.context,k(t));if(!r)throw new Error("Render function must return an element.");return r}function k(t){return function(e){tt(t,e)}}function _(){Mt.batching?vt||(vt=u(E)):ht||E()}function E(){return A(),ht?void(vt=u(E)):(ht=!0,yt?mt!==t.element?(yt=L(gt,mt,t.element,yt),mt=t.element,S(gt)):S(gt):(mt=t.element,yt=O(gt,"0",mt),e.children.length>0&&console.info("deku: The container element is not empty. These elements will be removed. Read more: http://cl.ly/b0Sr"),e===document.body&&console.warn("deku: Using document.body is allowed but it can cause some issues. Read more: http://cl.ly/b0SC"),Q(e),e.appendChild(yt)),M(),void(ht=!1))}function M(){for(;_t.length>0;){var t=_t.shift(),e=wt[t];V("afterRender",e,[e.context,e.nativeElement]),X("afterMount",e,[e.context,e.nativeElement,k(e)])}}function A(){vt&&(u.cancel(vt),vt=0)}function T(t){var e=wt[t];if(ut(e),!nt(e))return et(e),S(t);var n=e.virtualElement,r=e.pendingProps,o=e.pendingState,i=e.context.state,u=e.context.props;V("beforeUpdate",e,[e.context,r,o]),V("beforeRender",e,[e.context]),et(e);var a=w(e);return a===n?S(t):(e.nativeElement=L(t,n,a,e.nativeElement),e.virtualElement=a,S(t),V("afterRender",e,[e.context,e.nativeElement]),void X("afterUpdate",e,[e.context,u,i]))}function S(t){p(Et[t],function(t){T(t)})}function C(t){p(Et[t],function(t){x(t)})}function j(){A(),H(gt,"0",yt),yt=null}function O(t,e,n){switch(m(n)){case"text":return N(n);case"empty":return U(t,e);case"element":return D(t,e,n);case"component":return P(t,e,n)}}function N(t){return document.createTextNode(t)}function D(t,e,n){var r,o=n.attributes,i=n.type,u=n.children;return r=f.isElement(i)?document.createElementNS(f.namespace,i):document.createElement(i),p(o,function(n,o){G(t,e,r,o,n)}),p(u,function(n,o){var i=O(t,e+"."+o,n);i.parentNode||r.appendChild(i)}),r.__entity__=t,r.__path__=e,r}function U(t,e){var n=document.createElement("noscript");return n.__entity__=t,n.__path__=e,n}function P(t,e,n){var r=new o(n.type,v({children:n.children},n.attributes),t);return Et[t][e]=r.id,b(r)}function L(t,e,n,r){return R("0",t,e,n,r)}function R(t,e,n,r,o){var i=m(n),u=m(r);if(i!==u)return z(e,t,o,r);switch(u){case"text":return F(n,r,o);case"empty":return o;case"element":return q(t,e,n,r,o);case"component":return $(t,e,n,r,o)}}function F(t,e,n){return e!==t&&(n.data=e),n}function I(t,e,n,r,o){function i(t,e,n){return e&&e.attributes&&null!=e.attributes.key&&(t[e.attributes.key]={element:e,index:n},a=!0),t}var u=[],a=!1,c=Array.prototype.slice.apply(o.childNodes),s=h(n.children,i,{}),l=h(r.children,i,{}),f=v({},Et[e]);if(a)p(s,function(n,r){if(null==l[r]){var o=t+"."+n.index;H(e,o,c[n.index])}}),p(l,function(n,r){var o=s[r];if(null!=o){var i=t+"."+o.index;u[n.index]=R(i,e,o.element,n.element,c[o.index])}}),p(l,function(n,r){var o=s[r];if(null!=o&&o.index!==n.index){var i=t+"."+n.index,u=t+"."+o.index;p(f,function(t,n){u===n&&(delete Et[e][n],Et[e][i]=t)})}}),p(l,function(n,r){var o=t+"."+n.index;null==s[r]&&(u[n.index]=O(e,o,n.element))});else for(var d=Math.max(n.children.length,r.children.length),m=0;d>m;m++){var y=n.children[m],g=r.children[m];void 0!==g?void 0!==y?u[m]=R(t+"."+m,e,y,g,c[m]):u[m]=O(e,t+"."+m,g):H(e,t+"."+m,c[m])}p(u,function(t,e){var n=o.childNodes[e];t&&t!==n&&(n?o.insertBefore(t,n):o.appendChild(t))})}function B(t,e,n,r,o){var i=e.attributes,u=t.attributes;p(i,function(t,e){!l[e]&&e in u&&u[e]===t||G(r,o,n,e,t)}),p(u,function(t,e){e in i||W(r,o,n,e)})}function $(t,e,n,r,o){if(r.type!==n.type)return z(e,t,o,r);var i=Et[e][t];return i&&Z(i,v({children:r.children},r.attributes)),o}function q(t,e,n,r,o){return r.type!==n.type?z(e,t,o,r):(B(n,r,o,e,t),I(t,e,n,r,o),o)}function H(t,e,n){var r=Et[t],o=r[e],i=kt[t]||{},u=[];if(o){var a=wt[o];n=a.nativeElement,x(o),u.push(e)}else{if(!Y(n))return n&&n.parentNode.removeChild(n);p(r,function(t,n){(n===e||J(e,n))&&(x(t),u.push(n))}),p(i,function(n,r){(r===e||J(e,r))&&ft(t,r)})}p(u,function(e){delete Et[t][e]}),n.parentNode.removeChild(n)}function z(t,e,n,r){var o=n.parentNode,i=Array.prototype.indexOf.call(o.childNodes,n);H(t,e,n);var u=O(t,e,r),a=o.childNodes[i];return a?o.insertBefore(u,a):o.appendChild(u),"root"!==t&&"0"===e&&K(t,u),u}function K(t,e){var n=wt[t];"root"!==n.ownerId&&Et[n.ownerId][0]===t&&(wt[n.ownerId].nativeElement=e,K(n.ownerId,e))}function G(t,e,n,r,o){if(!o)return void W(t,e,n,r);if(l[r])return void lt(t,e,l[r],o);switch(r){case"checked":case"disabled":case"selected":n[r]=!0;break;case"innerHTML":case"value":n[r]=o;break;case f.isAttribute(r):n.setAttributeNS(f.namespace,r,o);break;default:n.setAttribute(r,o)}}function W(t,e,n,r){if(l[r])return void ft(t,e,l[r]);switch(r){case"checked":case"disabled":case"selected":n[r]=!1;break;case"innerHTML":case"value":n[r]="";break;default:n.removeAttribute(r)}}function J(t,e){return 0===e.indexOf(t+".")}function Y(t){return!(!t||!t.tagName)}function Q(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function V(t,e,n){return"function"==typeof e.component[t]?e.component[t].apply(null,n):void 0}function X(t,e,n){var r=k(e);n.push(r),V(t,e,n)}function Z(t,e){var n=wt[t];n.pendingProps=d({},e,n.component.defaultProps||{}),n.dirty=!0,_()}function tt(t,e){t.pendingState=v(t.pendingState,e),t.dirty=!0,_()}function et(t){t.context={state:t.pendingState,props:t.pendingProps,id:t.id},t.pendingState=v({},t.context.state),t.pendingProps=v({},t.context.props),t.dirty=!1,"function"==typeof t.component.validate&&t.component.validate(t.context)}function nt(t){if(!t.dirty)return!1;if(!t.component.shouldUpdate)return!0;var e=t.pendingProps,n=t.pendingState,r=t.component.shouldUpdate(t.context,e,n);return r}function rt(t){ot(t);var e=t.component;e.registered||(it(t),e.registered=!0)}function ot(t){var e=t.component,n=e.entities=e.entities||{};n[t.id]=t,xt[t.id]=e}function it(t){var e=xt[t.id],n=e.sources;if(!n){var r=e.entities,o=e.sourceToPropertyName={};e.sources=n=[];var i=e.propTypes;for(var u in i){var a=i[u];a&&a.source&&(n.push(a.source),o[a.source]=u)}n.forEach(function(t){function e(e){var n=o[t];for(var i in r){var u=r[i],a={};a[n]=e,Z(i,v(u.pendingProps,a))}}bt[t]=bt[t]||[],bt[t].push(e)})}}function ut(e){var n=e.component,r=n.sourceToPropertyName,o=n.sources;o.forEach(function(n){var o=r[n];null==e.pendingProps[o]&&(e.pendingProps[o]=t.sources[n])})}function at(){p(l,function(t){At.addEventListener(t,st,!0)})}function ct(){p(l,function(t){At.removeEventListener(t,st,!0)})}function st(t){for(var e=t.target,n=t.type;e;){var r=s.get(kt,[e.__entity__,e.__path__,n]);if(r&&(t.delegateTarget=e,r(t)===!1))break;e=e.parentNode}}function lt(t,e,n,r){s.set(kt,[t,e,n],function(e){var n=wt[t];n?r.call(null,e,n.context,k(n)):r.call(null,e)})}function ft(t,e,n){var r=[t];e&&r.push(e),n&&r.push(n),s.del(kt,r)}function dt(t){s.del(kt,[t])}function pt(){return{entities:wt,handlers:kt,connections:bt,currentElement:mt,options:Mt,app:t,container:e,children:Et}}var vt,ht,mt,yt,gt="root",bt={},xt={},wt={},kt={},_t=[],Et={};if(Et[gt]={},!a(e))throw new Error("Container element must be a DOM element");var Mt=d(v({},t.options||{},n||{}),{batching:!0}),At=i(e);return at(),t.on("unmount",y),t.on("mount",c),t.on("source",g),t.element&&E(),{remove:r,inspect:pt}}function o(t,e,n){this.id=c(),this.ownerId=n,this.component=t,this.propTypes=t.propTypes||{},this.context={},this.context.id=this.id,this.context.props=d(e||{},t.defaultProps||{}),this.context.state=this.component.initialState?this.component.initialState(this.context.props):{},this.pendingProps=v({},this.context.props),this.pendingState=v({},this.context.state),this.dirty=!1,this.virtualElement=null,this.nativeElement=null,this.displayName=t.name||"Component"}function i(t){for(;t.parentElement;){if("BODY"===t.tagName||!t.parentElement)return t;t=t.parentElement}return t}var u=n(10),a=n(11),c=n(12),s=n(13),l=n(14),f=n(15),d=n(18),p=n(19),v=n(23),h=n(24),m=n(28);t.exports=r},function(t,e){function n(t){var e=(new Date).getTime(),n=Math.max(0,16-(e-r)),o=setTimeout(t,n);return r=e,o}e=t.exports=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||n;var r=(new Date).getTime(),o=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.clearTimeout;e.cancel=function(t){o.call(window,t)}},function(t,e){t.exports=function(t){return t&&"object"==typeof t?window&&"object"==typeof window.Node?t instanceof window.Node:"number"==typeof t.nodeType&&"string"==typeof t.nodeName:!1}},function(t,e){var n=Date.now()%1e9;t.exports=function(){return(1e9*Math.random()>>>0)+n++}},function(t,e,n){var r,o,i;!function(n,u){"use strict";"object"==typeof t&&"object"==typeof t.exports?t.exports=u():(o=[],r=u,i="function"==typeof r?r.apply(e,o):r,!(void 0!==i&&(t.exports=i)))}(this,function(){"use strict";function t(t){if(!t)return!0;if(i(t)&&0===t.length)return!0;if(!r(t)){for(var e in t)if(f.call(t,e))return!1;return!0}return!1}function e(t){return l.call(t)}function n(t){return"number"==typeof t||"[object Number]"===e(t)}function r(t){return"string"==typeof t||"[object String]"===e(t)}function o(t){return"object"==typeof t&&"[object Object]"===e(t)}function i(t){return"object"==typeof t&&"number"==typeof t.length&&"[object Array]"===e(t)}function u(t){return"boolean"==typeof t||"[object Boolean]"===e(t)}function a(t){var e=parseInt(t);return e.toString()===t?e:t}function c(e,o,i,u){if(n(o)&&(o=[o]),t(o))return e;if(r(o))return c(e,o.split(".").map(a),i,u);var s=o[0];if(1===o.length){var l=e[s];return void 0!==l&&u||(e[s]=i),l}return void 0===e[s]&&(n(o[1])?e[s]=[]:e[s]={}),c(e[s],o.slice(1),i,u)}function s(e,o){if(n(o)&&(o=[o]),t(e))return void 0;if(t(o))return e;if(r(o))return s(e,o.split("."));var u=a(o[0]),c=e[u];if(1===o.length)void 0!==c&&(i(e)?e.splice(u,1):delete e[u]);else if(void 0!==e[u])return s(e[u],o.slice(1));return e}var l=Object.prototype.toString,f=Object.prototype.hasOwnProperty,d=function(t){return Object.keys(d).reduce(function(e,n){return"function"==typeof d[n]&&(e[n]=d[n].bind(d,t)),e},{})};return d.has=function(e,u){if(t(e))return!1;if(n(u)?u=[u]:r(u)&&(u=u.split(".")),t(u)||0===u.length)return!1;for(var a=0;a<u.length;a++){var c=u[a];if(!o(e)&&!i(e)||!f.call(e,c))return!1;e=e[c]}return!0},d.ensureExists=function(t,e,n){return c(t,e,n,!0)},d.set=function(t,e,n,r){return c(t,e,n,r)},d.insert=function(t,e,n,r){var o=d.get(t,e);r=~~r,i(o)||(o=[],d.set(t,e,o)),o.splice(r,0,n)},d.empty=function(e,a){if(t(a))return e;if(t(e))return void 0;var c,s;if(!(c=d.get(e,a)))return e;if(r(c))return d.set(e,a,"");if(u(c))return d.set(e,a,!1);if(n(c))return d.set(e,a,0);if(i(c))c.length=0;else{if(!o(c))return d.set(e,a,null);for(s in c)f.call(c,s)&&delete c[s]}},d.push=function(t,e){var n=d.get(t,e);i(n)||(n=[],d.set(t,e,n)),n.push.apply(n,Array.prototype.slice.call(arguments,2))},d.coalesce=function(t,e,n){for(var r,o=0,i=e.length;i>o;o++)if(void 0!==(r=d.get(t,e[o])))return r;return n},d.get=function(e,o,i){if(n(o)&&(o=[o]),t(o))return e;if(t(e))return i;if(r(o))return d.get(e,o.split("."),i);var u=a(o[0]);return 1===o.length?void 0===e[u]?i:e[u]:d.get(e[u],o.slice(1),i)},d.del=function(t,e){return s(t,e)},d})},function(t,e){t.exports={onBlur:"blur",onChange:"change",onClick:"click",onContextMenu:"contextmenu",onCopy:"copy",onCut:"cut",onDoubleClick:"dblclick",onDrag:"drag",onDragEnd:"dragend",onDragEnter:"dragenter",onDragExit:"dragexit",onDragLeave:"dragleave",onDragOver:"dragover",onDragStart:"dragstart",onDrop:"drop",onFocus:"focus",onInput:"input",onKeyDown:"keydown",onKeyPress:"keypress",onKeyUp:"keyup",onMouseDown:"mousedown",onMouseEnter:"mouseenter",onMouseLeave:"mouseleave",onMouseMove:"mousemove",onMouseOut:"mouseout",onMouseOver:"mouseover",onMouseUp:"mouseup",onPaste:"paste",onScroll:"scroll",onSubmit:"submit",onTouchCancel:"touchcancel",onTouchEnd:"touchend",onTouchMove:"touchmove",onTouchStart:"touchstart",onWheel:"wheel"}},function(t,e,n){t.exports={isElement:n(16).isElement,isAttribute:n(17),namespace:"http://www.w3.org/2000/svg"}},function(t,e){e.elements={animate:!0,circle:!0,defs:!0,ellipse:!0,g:!0,line:!0,linearGradient:!0,mask:!0,path:!0,pattern:!0,polygon:!0,polyline:!0,radialGradient:!0,rect:!0,stop:!0,svg:!0,text:!0,tspan:!0},e.isElement=function(t){return t in e.elements}},function(t,e){e.attributes={cx:!0,cy:!0,d:!0,dx:!0,dy:!0,fill:!0,fillOpacity:!0,fontFamily:!0,fontSize:!0,fx:!0,fy:!0,gradientTransform:!0,gradientUnits:!0,markerEnd:!0,markerMid:!0,markerStart:!0,offset:!0,opacity:!0,patternContentUnits:!0,patternUnits:!0,points:!0,preserveAspectRatio:!0,r:!0,rx:!0,ry:!0,spreadMethod:!0,stopColor:!0,stopOpacity:!0,stroke:!0,strokeDasharray:!0,strokeLinecap:!0,strokeOpacity:!0,strokeWidth:!0,textAnchor:!0,transform:!0,version:!0,viewBox:!0,x1:!0,x2:!0,x:!0,y1:!0,y2:!0,y:!0},t.exports=function(t){return t in e.attributes}},function(t,e){"use strict";t.exports=function(t){t=t||{};for(var e=1;e<arguments.length;e++){var n=arguments[e];n&&Object.getOwnPropertyNames(n).forEach(function(e){void 0===t[e]&&(t[e]=n[e])})}return t}},function(t,e,n){"use strict";var r=n(20),o=n(22);t.exports=function(t,e,n){return t instanceof Array?r(t,e,n):o(t,e,n)}},function(t,e,n){"use strict";var r=n(21);t.exports=function(t,e,n){var o,i=t.length,u=void 0!==n?r(e,n):e;for(o=0;i>o;o++)u(t[o],o,t)}},function(t,e){"use strict";t.exports=function(t,e){return function(n,r,o){return t.call(e,n,r,o)}}},function(t,e,n){"use strict";var r=n(21);t.exports=function(t,e,n){var o,i,u=Object.keys(t),a=u.length,c=void 0!==n?r(e,n):e;for(i=0;a>i;i++)o=u[i],c(t[o],o,t)}},function(t,e){"use strict";t.exports=function(t){var e,n,r,o,i,u,a=arguments.length;for(n=1;a>n;n++)for(e=arguments[n],o=Object.keys(e),r=o.length,u=0;r>u;u++)i=o[u],t[i]=e[i];return t}},function(t,e,n){"use strict";var r=n(25),o=n(27);t.exports=function(t,e,n,i){return t instanceof Array?r(t,e,n,i):o(t,e,n,i)}},function(t,e,n){"use strict";var r=n(26);t.exports=function(t,e,n,o){var i,u,a=t.length,c=void 0!==o?r(e,o):e;for(void 0===n?(i=1,u=t[0]):(i=0,u=n);a>i;i++)u=c(u,t[i],i,t);return u}},function(t,e){"use strict";t.exports=function(t,e){return function(n,r,o,i){return t.call(e,n,r,o,i)}}},function(t,e,n){"use strict";var r=n(26);t.exports=function(t,e,n,o){var i,u,a,c=Object.keys(t),s=c.length,l=void 0!==o?r(e,o):e;for(void 0===n?(i=1,a=t[c[0]]):(i=0,a=n);s>i;i++)u=c[i],a=l(a,t[u],u,t);return a}},function(t,e,n){var r=n(29);t.exports=function(t){var e=r(t);return"null"===e||t===!1?"empty":"object"!==e?"text":"string"===r(t.type)?"element":"component"}},function(t,e){var n=Object.prototype.toString;t.exports=function(t){switch(n.call(t)){case"[object Date]":return"date";case"[object RegExp]":return"regexp";case"[object Arguments]":return"arguments";case"[object Array]":return"array";case"[object Error]":return"error"}return null===t?"null":void 0===t?"undefined":t!==t?"nan":t&&1===t.nodeType?"element":(t=t.valueOf?t.valueOf():Object.prototype.valueOf.apply(t),typeof t)}},function(t,e,n){function r(t){var e="";for(var n in t){var r=t[n];"innerHTML"!==n&&i(r)&&(e+=o(n,t[n]))}return e}function o(t,e){return" "+t+'="'+e+'"'}function i(t){var e=c(t);return"string"===e||"boolean"===e||"number"===e}var u=n(18),a=n(28),c=n(29);t.exports=function(t){function e(e,r){var o=e.propTypes||{},i=u(r||{},e.defaultProps||{}),a=e.initialState?e.initialState(i):{};for(var c in o){var s=o[c];s.source&&(i[c]=t.sources[s.source])}e.beforeMount&&e.beforeMount({props:i,state:a}),e.beforeRender&&e.beforeRender({props:i,state:a});var l=e.render({props:i,state:a});return n(l,"0")}function n(t,o){switch(a(t)){case"empty":return"<noscript />";case"text":return t;case"element":var i=t.children,u=t.attributes,c=t.type,s=u.innerHTML,l="<"+c+r(u)+">";if(s)l+=s;else for(var f=0,d=i.length;d>f;f++)l+=n(i[f],o+"."+f);return l+="</"+c+">";case"component":return e(t.type,t.attributes)}throw new Error("Invalid type")}if(!t.element)throw new Error("No element mounted");return n(t.element,"0")}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var o=n(2),i=r(o),u=n(32),a=n(33),c=n(34),s={shouldUpdate:function(t,e,n){return t.props.data!==e.data},render:function(t,e){var n,r=t.props.data,o=r.location;return"table"===o?n=i["default"](u.Table,{data:r.table}):"anim"===o?n=i["default"](a.Anim,{data:r.anim}):"tree"===o&&(n=i["default"](c.Tree,{data:r.tree})),i["default"]("div",{"class":"Main"},n)}};e.Main=s},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var o=n(2),i=r(o),u={initialState:function(t){return{onClick:function(e){console.log("Clicked"+t.text),e.stopPropagation()}}},shouldUpdate:function(t,e,n){return t.props.text!==e.text},render:function(t,e){return i["default"]("td",{"class":"TableCell",onClick:t.state.onClick},t.props.text)}},a={shouldUpdate:function(t,e,n){return t.props.data!==e.data},render:function(t,e){var n=t.props.data,r="TableRow";n.active&&(r="TableRow active");for(var o=n.props,a=[i["default"](u,{key:"-1",text:"#"+n.id})],c=0;c<o.length;c++)a.push(i["default"](u,{key:c,text:o[c]}));return i["default"]("tr",{"class":r,"data-id":n.id},a)}},c={shouldUpdate:function(t,e,n){return t.props.data!==e.data},render:function(t,e){for(var n=t.props.data.items,r=[],o=0;o<n.length;o++){var u=n[o];r.push(i["default"](a,{key:u.id,data:u}))}return i["default"]("table",{"class":"Table"},i["default"]("tbody",null,r))}};e.Table=c},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var o=n(2),i=r(o),u={shouldUpdate:function(t,e,n){return t.props.data!==e.data},render:function(t,e){var n=t.props.data,r=n.time,o={borderRadius:(r%10).toString()+"px",background:"rgba(0,0,0,"+(.5+r%10/10).toString()+")"};return i["default"]("div",{"class":"AnimBox","data-id":n.id,style:o})}},a={shouldUpdate:function(t,e,n){return t.props.data!==e.data},render:function(t,e){for(var n=t.props.data,r=n.items,o=[],a=0;a<r.length;a++){var c=r[a];o.push(i["default"](u,{key:c.id,data:c}))}return i["default"]("div",{"class":"Anim"},o)}};e.Anim=a},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var o=n(2),i=r(o),u={shouldUpdate:function(t,e,n){return t.props.data!==e.data},render:function(t,e){return i["default"]("li",{"class":"TreeLeaf"},t.props.data.id)}},a={shouldUpdate:function(t,e,n){return t.props.data!==e.data},render:function(t,e){for(var n=t.props.data,r=[],o=0;o<n.children.length;o++){var c=n.children[o];c.container?r.push(i["default"](a,{key:c.id,data:c})):r.push(i["default"](u,{key:c.id,data:c}))}return i["default"]("ul",{"class":"TreeNode"},r)}},c={shouldUpdate:function(t,e,n){return t.props.data!==e.data},render:function(t,e){return i["default"]("div",{"class":"Tree"},i["default"](a,{data:t.props.data.root}))}};e.Tree=c}]);