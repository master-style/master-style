!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Master=t():e.Master=t()}(self,(function(){return e={412:()=>{window.off=document.off=Element.prototype.off=function(e,t,o,n){var i,l;const s=this,r=s.listeners;if(!r)return s;if(e)if("string"==typeof e){"function"==typeof t?(n=o,o=t,t=null):t instanceof Object&&(n=t,t=void 0);const l=e.split(" ");for(const e of l){const l=e.split(".");let f,p;"."!==e[0]&&(p=l[0]),f=l.slice(1);for(let e=r.length-1;e>=0;e--){const l=r[e];let c=!1;if(p){if(c=p===l.type,f.length&&(c=c&&l.typeSet.has(f,".")),(null==n?void 0:n.id)&&(null===(i=l.option)||void 0===i?void 0:i.id)){let e=!0;for(let t=0;t<n.id.length;t++)if(n.id[t]!==l.option.id[t]){e=!1;break}c=c&&e}}else{if(!f.length)continue;c=l.typeSet.has(f,".")}o&&(c=c&&o===l.handle),t&&(c=c&&t===l.factorSelector),c&&(s.removeEventListener(l.type,l.listen,l.option||!1),r.splice(e,1))}}}else if("function"==typeof e){o=e;for(let e=r.length-1;e>=0;e--){const t=r[e];t.handle===o&&(s.removeEventListener(t.type,t.listen,t.option||!1),r.splice(e,1))}}else{n=e;for(let e=r.length-1;e>=0;e--){const t=r[e];if((null==n?void 0:n.id)&&(null===(l=t.option)||void 0===l?void 0:l.id)){let o=!0;for(let e=0;e<n.id.length;e++)if(n.id[e]!==t.option.id[e]){o=!1;break}o&&(s.removeEventListener(t.type,t.listen,t.option||!1),r.splice(e,1))}}}else{for(const e of s.listeners)s.removeEventListener(e.type,e.listen,e.option);s.listeners=null}return s}}},t={},function o(n){if(t[n])return t[n].exports;var i=t[n]={exports:{}};return e[n](i,i.exports,o),i.exports}(412);var e,t}));