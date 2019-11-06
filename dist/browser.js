!function(e,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r(require("react-cookie"));else if("function"==typeof define&&define.amd)define(["react-cookie"],r);else{var t="object"==typeof exports?r(require("react-cookie")):r(e["react-cookie"]);for(var o in t)("object"==typeof exports?exports:e)[o]=t[o]}}(window,(function(e){return function(e){var r={};function t(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,t),n.l=!0,n.exports}return t.m=e,t.c=r,t.d=function(e,r,o){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)t.d(o,n,function(r){return e[r]}.bind(null,n));return o},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="/",t(t.s=1)}([function(r,t){r.exports=e},function(e,r,t){"use strict";t.r(r);const o={};var n={getItem:async(e,r=!1)=>{try{if(!e)throw new Error("Invalid storage key");const t=o[e];return r&&t?JSON.parse(t):t}catch(e){console.error(`MemoryStorage getItem Error: ${e.message}`)}},setItem:async(e,r,t=!1)=>{try{if(!e)throw new Error("Invalid storage key");const n=t&&r?JSON.stringify(r):r;if("string"!=typeof n||!n||"null"===n||"undefined"===n)throw new Error("Invalid storage value");o[e]=n}catch(e){console.error(`MemoryStorage setItem Error: ${e.message}`)}},removeItem:async e=>{try{if(!e)throw new Error("Invalid storage key");delete o[e]}catch(e){console.error(`MemoryStorage removeItem Error: ${e.message}`)}},getAll:async()=>{try{return o}catch(e){console.error(`MemoryStorage getAll Error: ${e.message}`)}},getAllKeys:async()=>{try{return Object.keys(o)}catch(e){console.error(`MemoryStorage getAllKeys Error: ${e.message}`)}}};const a=new(t(0).Cookies);var s={getItem:async(e,r=!1,t={})=>{try{if(!e)throw new Error("Invalid storage key");const o=a.get(e,t);return r&&o?JSON.parse(o):o}catch(e){console.error(`CookieStorage getItem Error: ${e.message}`)}},setItem:async(e,r,t=!1,o={})=>{try{if(!e)throw new Error("Invalid storage key");const n=t&&r?JSON.stringify(r):r;if("string"!=typeof n||!n||"null"===n||"undefined"===n)throw new Error("Invalid storage value");a.set(e,n,o)}catch(e){console.error(`CookieStorage setItem Error: ${e.message}`)}},removeItem:async(e,r={})=>{try{if(!e)throw new Error("Invalid storage key");a.remove(e,r)}catch(e){console.error(`CookieStorage removeItem Error: ${e.message}`)}},getAllKeys:async(e={})=>{try{return Object.keys(a.getAll(e))}catch(e){console.error(`CookieStorage getAllKeys Error: ${e.message}`)}},getAll:async(e={})=>{try{return a.getAll(e)}catch(e){console.error(`CookieStorage getAll Error: ${e.message}`)}}};const c=localStorage;var l={getItem:async(e,r=!1)=>{try{if(!e)throw new Error("Invalid storage key");const t=c[e];return r&&t?JSON.parse(t):t}catch(e){console.error(`LocalStorage getItem Error: ${e.message}`)}},setItem:async(e,r,t=!1)=>{try{if(!e)throw new Error("Invalid storage key");const o=t&&r?JSON.stringify(r):r;if("string"!=typeof o||!o||"null"===o||"undefined"===o)throw new Error("Invalid storage value");c[e]=o}catch(e){console.error(`LocalStorage setItem Error: ${e.message}`)}},removeItem:async e=>{try{if(!e)throw new Error("Invalid storage key");delete c[e]}catch(e){console.error(`LocalStorage removeItem Error: ${e.message}`)}},getAllItems:async()=>{try{return c}catch(e){console.error(`LocalStorage getAllItems Error: ${e.message}`)}}};t.d(r,"secureStorage",(function(){return i})),t.d(r,"asyncStorage",(function(){return g})),t.d(r,"memoryStorage",(function(){return n})),t.d(r,"cookieStorage",(function(){return s}));const i=l,g=l,y={memoryStorage:n,cookieStorage:s,secureStorage:i,asyncStorage:g};r.default=y}])}));