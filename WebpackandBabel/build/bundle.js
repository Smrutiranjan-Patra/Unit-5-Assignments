(()=>{var e,t,n={},r={};function o(e){var t=r[e];if(void 0!==t)return t.exports;var a=r[e]={id:e,exports:{}};return n[e](a,a.exports,o),a.exports}o.m=n,o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,n)=>(o.f[n](e,t),t)),[])),o.u=e=>e+".bundle.js",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="webpackandbabel:",o.l=(n,r,a,i)=>{if(e[n])e[n].push(r);else{var l,c;if(void 0!==a)for(var d=document.getElementsByTagName("script"),u=0;u<d.length;u++){var s=d[u];if(s.getAttribute("src")==n||s.getAttribute("data-webpack")==t+a){l=s;break}}l||(c=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.setAttribute("data-webpack",t+a),l.src=n),e[n]=[r];var p=(t,r)=>{l.onerror=l.onload=null,clearTimeout(b);var o=e[n];if(delete e[n],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((e=>e(r))),t)return t(r)},b=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),c&&document.head.appendChild(l)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{var e={179:0};o.f.j=(t,n)=>{var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var a=new Promise(((n,o)=>r=e[t]=[n,o]));n.push(r[2]=a);var i=o.p+o.u(t),l=new Error;o.l(i,(n=>{if(o.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,r[1](l)}}),"chunk-"+t,t)}};var t=(t,n)=>{var r,a,[i,l,c]=n,d=0;if(i.some((t=>0!==e[t]))){for(r in l)o.o(l,r)&&(o.m[r]=l[r]);c&&c(o)}for(t&&t(n);d<i.length;d++)a=i[d],o.o(e,a)&&e[a]&&e[a][0](),e[i[d]]=0},n=self.webpackChunkwebpackandbabel=self.webpackChunkwebpackandbabel||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),o.e(548).then(o.bind(o,548)),document.getElementById("logo");let a=document.getElementById("task");document.getElementById("submit-btn").addEventListener("click",(function(){let e=document.getElementById("inputbox").value;i(e),console.log(e)}));const i=e=>{let t=document.createElement("div"),n=document.createElement("p"),r=document.createElement("button"),o=document.createElement("button");n.innerText=e,r.innerText="Done",r.classList.add("Done-btn"),o.innerText="Cancel",o.classList.add("Cancel-btn"),t.append(n,r,o),a.append(t)}})();