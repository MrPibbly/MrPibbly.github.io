(()=>{"use strict";var e,a,t,r,f,c={},b={};function d(e){var a=b[e];if(void 0!==a)return a.exports;var t=b[e]={id:e,loaded:!1,exports:{}};return c[e].call(t.exports,t,t.exports,d),t.loaded=!0,t.exports}d.m=c,d.c=b,e=[],d.O=(a,t,r,f)=>{if(!t){var c=1/0;for(i=0;i<e.length;i++){t=e[i][0],r=e[i][1],f=e[i][2];for(var b=!0,o=0;o<t.length;o++)(!1&f||c>=f)&&Object.keys(d.O).every((e=>d.O[e](t[o])))?t.splice(o--,1):(b=!1,f<c&&(c=f));if(b){e.splice(i--,1);var n=r();void 0!==n&&(a=n)}}return a}f=f||0;for(var i=e.length;i>0&&e[i-1][2]>f;i--)e[i]=e[i-1];e[i]=[t,r,f]},d.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return d.d(a,{a:a}),a},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,d.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var f=Object.create(null);d.r(f);var c={};a=a||[null,t({}),t([]),t(t)];for(var b=2&r&&e;"object"==typeof b&&!~a.indexOf(b);b=t(b))Object.getOwnPropertyNames(b).forEach((a=>c[a]=()=>e[a]));return c.default=()=>e,d.d(f,c),f},d.d=(e,a)=>{for(var t in a)d.o(a,t)&&!d.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((a,t)=>(d.f[t](e,a),a)),[])),d.u=e=>"assets/js/"+({497:"a80da1cf",1398:"096bfee4",1497:"e16015ca",1724:"dff1c289",1953:"1e4232ab",1972:"73664a40",1974:"5c868d36",1991:"b2b675dd",2161:"4c9e35b1",2711:"9e4087bc",2748:"822bd8ab",3098:"533a09ca",3249:"ccc49370",3587:"ea88f2a1",3637:"f4f34a3a",3669:"30a24c52",3694:"8717b14a",3976:"0e384e19",4134:"393be207",4374:"66406991",4583:"1df93b7f",4722:"608ae6a4",4736:"e44a2883",4813:"6875c492",5557:"d9f32620",5894:"b2f554cd",6061:"1f391b9e",6107:"8b1a6cbc",6334:"031793e1",6969:"14eb3368",7098:"a7bd4aaa",7177:"28123615",7472:"814f3328",7643:"a6aa9e1f",8209:"01a85c17",8401:"17896441",8581:"935f2afb",8609:"925b3f96",8737:"7661071f",8863:"f55d3e7a",9011:"1945be84",9048:"a94703ab",9262:"18c41134",9267:"a7023ddc",9325:"59362658",9328:"e273c56f",9517:"0a40e68b",9558:"c844b82d",9589:"8f78d140",9647:"5e95c892"}[e]||e)+"."+{497:"e63e1b3a",1398:"f88c26ac",1497:"2b599b89",1724:"dbb6b16f",1953:"1a889987",1972:"1a51da41",1974:"56cf1a3b",1991:"7bb09093",2161:"c07193cb",2237:"ea2d58fa",2711:"708d126a",2748:"ffe7b0ba",3098:"d32a3657",3249:"590cc503",3587:"128b1648",3637:"c24d5a74",3669:"6dfd99ca",3694:"de77528f",3976:"c8cee03f",4134:"04548e02",4374:"c12925e4",4583:"1d5b8bce",4722:"d64d2634",4736:"2c327d59",4813:"b265e2c9",5533:"124e3431",5557:"3acd0196",5894:"d1431307",6061:"0f231ab9",6107:"853bfe1a",6334:"7d8a4cb7",6969:"26e9a066",7098:"d523748d",7177:"adb9ca87",7472:"e6bddc7e",7643:"414df903",8209:"ed2e274e",8401:"a9a8097b",8581:"e7db7975",8609:"8597ff52",8737:"46bba813",8747:"adec7066",8863:"279b0bc1",9011:"275bae4c",9048:"f5ef6ed6",9262:"adee05d7",9267:"917b52b5",9325:"9ffd63d9",9328:"ffb3e42d",9517:"824b5370",9558:"dc7a73b4",9589:"e0a0ea03",9647:"a342ae03"}[e]+".js",d.miniCssF=e=>{},d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),r={},f="swyft-wiki:",d.l=(e,a,t,c)=>{if(r[e])r[e].push(a);else{var b,o;if(void 0!==t)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==f+t){b=u;break}}b||(o=!0,(b=document.createElement("script")).charset="utf-8",b.timeout=120,d.nc&&b.setAttribute("nonce",d.nc),b.setAttribute("data-webpack",f+t),b.src=e),r[e]=[a];var l=(a,t)=>{b.onerror=b.onload=null,clearTimeout(s);var f=r[e];if(delete r[e],b.parentNode&&b.parentNode.removeChild(b),f&&f.forEach((e=>e(t))),a)return a(t)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:b}),12e4);b.onerror=l.bind(null,b.onerror),b.onload=l.bind(null,b.onload),o&&document.head.appendChild(b)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.p="/",d.gca=function(e){return e={17896441:"8401",28123615:"7177",59362658:"9325",66406991:"4374",a80da1cf:"497","096bfee4":"1398",e16015ca:"1497",dff1c289:"1724","1e4232ab":"1953","73664a40":"1972","5c868d36":"1974",b2b675dd:"1991","4c9e35b1":"2161","9e4087bc":"2711","822bd8ab":"2748","533a09ca":"3098",ccc49370:"3249",ea88f2a1:"3587",f4f34a3a:"3637","30a24c52":"3669","8717b14a":"3694","0e384e19":"3976","393be207":"4134","1df93b7f":"4583","608ae6a4":"4722",e44a2883:"4736","6875c492":"4813",d9f32620:"5557",b2f554cd:"5894","1f391b9e":"6061","8b1a6cbc":"6107","031793e1":"6334","14eb3368":"6969",a7bd4aaa:"7098","814f3328":"7472",a6aa9e1f:"7643","01a85c17":"8209","935f2afb":"8581","925b3f96":"8609","7661071f":"8737",f55d3e7a:"8863","1945be84":"9011",a94703ab:"9048","18c41134":"9262",a7023ddc:"9267",e273c56f:"9328","0a40e68b":"9517",c844b82d:"9558","8f78d140":"9589","5e95c892":"9647"}[e]||e,d.p+d.u(e)},(()=>{var e={5354:0,1869:0};d.f.j=(a,t)=>{var r=d.o(e,a)?e[a]:void 0;if(0!==r)if(r)t.push(r[2]);else if(/^(1869|5354)$/.test(a))e[a]=0;else{var f=new Promise(((t,f)=>r=e[a]=[t,f]));t.push(r[2]=f);var c=d.p+d.u(a),b=new Error;d.l(c,(t=>{if(d.o(e,a)&&(0!==(r=e[a])&&(e[a]=void 0),r)){var f=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;b.message="Loading chunk "+a+" failed.\n("+f+": "+c+")",b.name="ChunkLoadError",b.type=f,b.request=c,r[1](b)}}),"chunk-"+a,a)}},d.O.j=a=>0===e[a];var a=(a,t)=>{var r,f,c=t[0],b=t[1],o=t[2],n=0;if(c.some((a=>0!==e[a]))){for(r in b)d.o(b,r)&&(d.m[r]=b[r]);if(o)var i=o(d)}for(a&&a(t);n<c.length;n++)f=c[n],d.o(e,f)&&e[f]&&e[f][0](),e[f]=0;return d.O(i)},t=self.webpackChunkswyft_wiki=self.webpackChunkswyft_wiki||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})()})();