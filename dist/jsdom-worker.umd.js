!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("node-fetch")):"function"==typeof define&&define.amd?define(["node-fetch"],t):t((e||self).nodeFetch)}(this,function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=/*#__PURE__*/t(e);function o(e){return{all:e=e||new Map,on:function(t,n){var o=e.get(t);o?o.push(n):e.set(t,[n])},off:function(t,n){var o=e.get(t);o&&(n?o.splice(o.indexOf(n)>>>0,1):e.set(t,[]))},emit:function(t,n){var o=e.get(t);o&&o.slice().map(function(e){e(n)}),(o=e.get("*"))&&o.slice().map(function(e){e(t,n)})}}}var r=function(e){var t={exports:{}};return function(e,t){t=e.exports=function(){for(var e,n="",o=0;o<32;o++)e=16*t.random()|0,o>4&&o<21&&!(o%4)&&(n+="-"),n+=(12===o?4:16===o?3&e|8:e).toString(16);return n};var n=/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;t.isUUID=function(e){return n.test(e)},t.random=function(){return Math.random()}}(t,t.exports),t.exports}();const s="object"==typeof global?global:"object"==typeof globalThis?globalThis:void 0;s.URL||(s.URL={});let a=s.URL.$$objects;if(!a){a=new Map,s.URL.$$objects=a,s.URL.createObjectURL=e=>{let t=r();return a[t]=e,`blob:http://localhost/${t}`},s.URL.revokeObjectURL=e=>{let t=String(e).match(/^blob:http:\/\/localhost\/(.+)$/);t&&delete a[t[1]]};const e=Blob;s.Blob=function(t,n){const o=new e(t,n);return o._arr=t,o}}if(!s.fetch||!("jsdomWorker"in s.fetch)){let t=s.fetch||n.default;s.fetch=function(n,o){let r="object"==typeof n?n.url||n.href:n;if(r.match(/^blob:/)){const t=r.match(/[^/]+$/)[0],n=a[t];return n._arr?n._arr[0]:new Promise((t,o)=>{let r=new FileReader;r.onload=()=>{t(new(s.Response||e.Response)(r.result,{status:200,statusText:"OK"}))},r.onerror=()=>{o(r.error)},r.readAsText(n)})}return t.call(this,n,o)},Object.defineProperty(s.fetch,"jsdomWorker",{configurable:!0,value:!0})}function i(e){this.type=e}s.document||(s.document={}),i.prototype.initEvent=Object,s.document.createEvent||(s.document.createEvent=function(e){return new(global[e]||i)(e)}),s.Worker=function(e,t){let n,r=[],a=o(),i=o(),c=!1,l={onmessage:null,dispatchEvent:a.emit,addEventListener:a.on,removeEventListener:a.off,postMessage(e){i.emit("message",{data:e})},fetch:s.fetch,importScripts(){}};a.on("message",e=>{if(c)return;let t=l.onmessage||n("onmessage");t&&t.call(l,e)}),this.addEventListener=i.on,this.removeEventListener=i.off,this.dispatchEvent=i.emit,i.on("message",e=>{this.onmessage&&this.onmessage(e)}),this.onmessage=null,this.postMessage=e=>{c||(null!=r?r.push(e):a.emit("message",{data:e}))},this.terminate=()=>{console.warn("Worker.prototype.terminate() not supported in jsdom-worker."),c=!0,r=null};const f=e=>{let t="var self=this,global=self";for(let e in l)t+=`,${e}=self.${e}`;n=Function(t+";\n"+e+'\nreturn function(n){return n=="onmessage"?onmessage:null;}').call(l);let o=r;r=null,o&&o.forEach(this.postMessage)},u=s.fetch(e);"string"==typeof u?f(u):u.then(e=>e.text()).then(e=>{f(e)}).catch(e=>{i.emit("error",e),console.error(e)})}});
//# sourceMappingURL=jsdom-worker.umd.js.map