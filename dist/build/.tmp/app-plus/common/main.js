(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"0a6b":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n("66fd"));n("3e3e");function o(t){return t&&t.__esModule?t:{default:t}}var u={onLaunch:function(){t.getSystemInfo({success:function(t){r.default.prototype.StatusBar=t.statusBarHeight,"android"==t.platform?r.default.prototype.CustomBar=t.statusBarHeight+50:r.default.prototype.CustomBar=t.statusBarHeight+45}}),t.getStorageSync("accessToken")?0==t.getStorageSync("cartNum")?t.removeTabBarBadge({index:2}):t.setTabBarBadge({index:2,text:t.getStorageSync("cartNum").toString()}):t.removeTabBarBadge({index:2})},onHide:function(){},methods:{}};e.default=u}).call(this,n("6e42")["default"])},2176:function(t,e,n){},"23be":function(t,e,n){"use strict";n.r(e);var r=n("0a6b"),o=n.n(r);for(var u in r)"default"!==u&&function(t){n.d(e,t,(function(){return r[t]}))}(u);e["default"]=o.a},"3dfd":function(t,e,n){"use strict";n.r(e);var r=n("23be");for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);n("5c0b");var u,a,f=n("2877"),c=Object(f["a"])(r["default"],u,a,!1,null,null,null);e["default"]=c.exports},"56d7":function(t,e,n){"use strict";(function(t,e){function r(t){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}n("6cdc"),n("921b");var o=l(n("66fd")),u=l(n("4360")),a=l(n("3dfd")),f=i(n("751a"));function c(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return c=function(){return t},t}function i(t){if(t&&t.__esModule)return t;if(null===t||"object"!==r(t)&&"function"!==typeof t)return{default:t};var e=c();if(e&&e.has(t))return e.get(t);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in t)if(Object.prototype.hasOwnProperty.call(t,u)){var a=o?Object.getOwnPropertyDescriptor(t,u):null;a&&(a.get||a.set)?Object.defineProperty(n,u,a):n[u]=t[u]}return n.default=t,e&&e.set(t,n),n}function l(t){return t&&t.__esModule?t:{default:t}}function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n("b3fd"),n("3390"),n("ac2d"),n("aab4"),n("bb45"),n("a9a4");var b=function(){return n.e("components/rf-image/rf-image").then(n.bind(null,"b19a"))},y=function(){return n.e("components/rf-empty/index").then(n.bind(null,"e006"))},g=function(){return n.e("components/rf-loading/rf-loading").then(n.bind(null,"a7c6"))},m=function(){return n.e("components/rf-load-progress/rf-load-progress").then(n.bind(null,"5cad"))},v=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1500,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"none";!1!==Boolean(e)&&t.showToast({title:e,duration:n,mask:r,icon:o})},O=function(t){var e=getCurrentPages(),n=e[e.length-(t||2)];return n.$vm};o.default.config.productionTip=!1,o.default.prototype.$store=u.default,o.default.prototype.$api={msg:v,prePage:O},o.default.prototype.$get=f.get,o.default.prototype.$post=f.default.post,o.default.prototype.$put=f.default.put,o.default.prototype.$del=f.default.delete,o.default.component("rfImage",b),o.default.component("rfEmpty",y),o.default.component("rfLoading",g),o.default.component("rfLoadProgress",m),a.default.mpType="app";var h=new o.default(p({},a.default));e(h).$mount()}).call(this,n("6e42")["default"],n("6e42")["createApp"])},"5c0b":function(t,e,n){"use strict";var r=n("2176"),o=n.n(r);o.a}},[["56d7","common/runtime","common/vendor"]]]);