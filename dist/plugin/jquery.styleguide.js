!function(e){var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,n){if(!w[e]||!y[e])return;for(var t in y[e]=!1,n)Object.prototype.hasOwnProperty.call(n,t)&&(h[t]=n[t]);0==--v&&0===m&&L()}(e,t),n&&n(e,t)};var t,r=!0,o="b52d7292a9e65c10a148",i=1e4,a={},s=[],u=[];function l(e){var n=O[e];if(!n)return A;var r=function(r){return n.hot.active?(O[r]?-1===O[r].parents.indexOf(e)&&O[r].parents.push(e):(s=[e],t=r),-1===n.children.indexOf(r)&&n.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),s=[]),A(r)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return A[e]},set:function(n){A[e]=n}}};for(var i in A)Object.prototype.hasOwnProperty.call(A,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(r,i,o(i));return r.e=function(e){return"ready"===d&&p("prepare"),m++,A.e(e).then(n,function(e){throw n(),e});function n(){m--,"prepare"===d&&(g[e]||R(e),0===m&&0===v&&L())}},r.t=function(e,n){return 1&n&&(e=r(e)),A.t(e,-2&n)},r}var c=[],d="idle";function p(e){d=e;for(var n=0;n<c.length;n++)c[n].call(null,e)}var f,h,_,v=0,m=0,g={},y={},w={};function b(e){return+e+""===e?+e:e}function E(e){if("idle"!==d)throw new Error("check() is only allowed in idle status");return r=e,p("check"),function(e){return e=e||1e4,new Promise(function(n,t){if("undefined"==typeof XMLHttpRequest)return t(new Error("No browser support"));try{var r=new XMLHttpRequest,i=A.p+""+o+".hot-update.json";r.open("GET",i,!0),r.timeout=e,r.send(null)}catch(e){return t(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)t(new Error("Manifest request to "+i+" timed out."));else if(404===r.status)n();else if(200!==r.status&&304!==r.status)t(new Error("Manifest request to "+i+" failed."));else{try{var e=JSON.parse(r.responseText)}catch(e){return void t(e)}n(e)}}})}(i).then(function(e){if(!e)return p("idle"),null;y={},g={},w=e.c,_=e.h,p("prepare");var n=new Promise(function(e,n){f={resolve:e,reject:n}});h={};return R(0),"prepare"===d&&0===m&&0===v&&L(),n})}function R(e){w[e]?(y[e]=!0,v++,function(e){var n=document.getElementsByTagName("head")[0],t=document.createElement("script");t.charset="utf-8",t.src=A.p+""+e+"."+o+".hot-update.js",n.appendChild(t)}(e)):g[e]=!0}function L(){p("ready");var e=f;if(f=null,e)if(r)Promise.resolve().then(function(){return H(r)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var t in h)Object.prototype.hasOwnProperty.call(h,t)&&n.push(b(t));e.resolve(n)}}function H(n){if("ready"!==d)throw new Error("apply() is only allowed in ready status");var t,r,i,u,l;function c(e){for(var n=[e],t={},r=n.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),i=o.id,a=o.chain;if((u=O[i])&&!u.hot._selfAccepted){if(u.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:i};if(u.hot._main)return{type:"unaccepted",chain:a,moduleId:i};for(var s=0;s<u.parents.length;s++){var l=u.parents[s],c=O[l];if(c){if(c.hot._declinedDependencies[i])return{type:"declined",chain:a.concat([l]),moduleId:i,parentId:l};-1===n.indexOf(l)&&(c.hot._acceptedDependencies[i]?(t[l]||(t[l]=[]),f(t[l],[i])):(delete t[l],n.push(l),r.push({chain:a.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:t}}function f(e,n){for(var t=0;t<n.length;t++){var r=n[t];-1===e.indexOf(r)&&e.push(r)}}n=n||{};var v={},m=[],g={},y=function(){console.warn("[HMR] unexpected require("+R.moduleId+") to disposed module")};for(var E in h)if(Object.prototype.hasOwnProperty.call(h,E)){var R;l=b(E);var L=!1,H=!1,P=!1,x="";switch((R=h[E]?c(l):{type:"disposed",moduleId:E}).chain&&(x="\nUpdate propagation: "+R.chain.join(" -> ")),R.type){case"self-declined":n.onDeclined&&n.onDeclined(R),n.ignoreDeclined||(L=new Error("Aborted because of self decline: "+R.moduleId+x));break;case"declined":n.onDeclined&&n.onDeclined(R),n.ignoreDeclined||(L=new Error("Aborted because of declined dependency: "+R.moduleId+" in "+R.parentId+x));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(R),n.ignoreUnaccepted||(L=new Error("Aborted because "+l+" is not accepted"+x));break;case"accepted":n.onAccepted&&n.onAccepted(R),H=!0;break;case"disposed":n.onDisposed&&n.onDisposed(R),P=!0;break;default:throw new Error("Unexception type "+R.type)}if(L)return p("abort"),Promise.reject(L);if(H)for(l in g[l]=h[l],f(m,R.outdatedModules),R.outdatedDependencies)Object.prototype.hasOwnProperty.call(R.outdatedDependencies,l)&&(v[l]||(v[l]=[]),f(v[l],R.outdatedDependencies[l]));P&&(f(m,[R.moduleId]),g[l]=y)}var j,k=[];for(r=0;r<m.length;r++)l=m[r],O[l]&&O[l].hot._selfAccepted&&k.push({module:l,errorHandler:O[l].hot._selfAccepted});p("dispose"),Object.keys(w).forEach(function(e){!1===w[e]&&function(e){delete installedChunks[e]}(e)});for(var M,D,S=m.slice();S.length>0;)if(l=S.pop(),u=O[l]){var I={},F=u.hot._disposeHandlers;for(i=0;i<F.length;i++)(t=F[i])(I);for(a[l]=I,u.hot.active=!1,delete O[l],delete v[l],i=0;i<u.children.length;i++){var T=O[u.children[i]];T&&((j=T.parents.indexOf(l))>=0&&T.parents.splice(j,1))}}for(l in v)if(Object.prototype.hasOwnProperty.call(v,l)&&(u=O[l]))for(D=v[l],i=0;i<D.length;i++)M=D[i],(j=u.children.indexOf(M))>=0&&u.children.splice(j,1);for(l in p("apply"),o=_,g)Object.prototype.hasOwnProperty.call(g,l)&&(e[l]=g[l]);var C=null;for(l in v)if(Object.prototype.hasOwnProperty.call(v,l)&&(u=O[l])){D=v[l];var N=[];for(r=0;r<D.length;r++)if(M=D[r],t=u.hot._acceptedDependencies[M]){if(-1!==N.indexOf(t))continue;N.push(t)}for(r=0;r<N.length;r++){t=N[r];try{t(D)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:l,dependencyId:D[r],error:e}),n.ignoreErrored||C||(C=e)}}}for(r=0;r<k.length;r++){var U=k[r];l=U.module,s=[l];try{A(l)}catch(e){if("function"==typeof U.errorHandler)try{U.errorHandler(e)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:l,error:t,originalError:e}),n.ignoreErrored||C||(C=t),C||(C=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:l,error:e}),n.ignoreErrored||C||(C=e)}}return C?(p("fail"),Promise.reject(C)):(p("idle"),new Promise(function(e){e(m)}))}var O={};function A(n){if(O[n])return O[n].exports;var r=O[n]={i:n,l:!1,exports:{},hot:function(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:t!==e,active:!0,accept:function(e,t){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._acceptedDependencies[e[r]]=t||function(){};else n._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);t>=0&&n._disposeHandlers.splice(t,1)},check:E,apply:H,status:function(e){if(!e)return d;c.push(e)},addStatusHandler:function(e){c.push(e)},removeStatusHandler:function(e){var n=c.indexOf(e);n>=0&&c.splice(n,1)},data:a[e]};return t=void 0,n}(n),parents:(u=s,s=[],u),children:[]};return e[n].call(r.exports,r,r.exports,l(n)),r.l=!0,r.exports}A.m=e,A.c=O,A.d=function(e,n,t){A.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},A.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},A.t=function(e,n){if(1&n&&(e=A(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(A.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)A.d(t,r,function(n){return e[n]}.bind(null,r));return t},A.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return A.d(n,"a",n),n},A.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},A.p="",A.h=function(){return o},l(12)(A.s=12)}([function(e,n,t){"use strict";t.r(n);var r=t(8),o=new(t.n(r).a)(null,!0,"#/"),i=t(7),a=t.n(i),s=t(6),u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},l=[{name:"text-input",render:a.a,defaults:s}].map(function(e){return u({page:"atoms"},e)}),c=t(5),d=t.n(c),p=t(4),f=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},h=[{name:"form",render:d.a,defaults:p}].map(function(e){return f({page:"molecules"},e)}),_=t(3),v=t.n(_),m=t(2),g=function(){return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,n){var t=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return t}(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();function y(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}var w={name:"page",render:v.a,defaults:m},b=[].concat(y(l),y(h),[w]),E={atoms:l,molecules:h},R=Object.keys(E),L={getAll:function(){return b},getPageNames:function(){return R},getByPath:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(!e)return[];var n=e.split("/"),t=g(n,2),r=t[0],o=t[1];if(!R.includes(r))return b.filter(function(e){return e.name==r}).shift();if(r&&!o)return b.filter(function(e){return e.page==r});var i=b.filter(function(e){return e.name==o}).shift();return i||[]}};t(1),n.default=function(){var e=document.getElementById("app");function n(n){e.innerHTML=L.getByPath("page").render({pages:L.getPageNames(),children:n})}o.on("/:page/",function(e){var t=L.getByPath(e.page);t?n(t.map(function(e){return e.render(e.defaults)}).join("<br><br>")):n("Not Found!")}).resolve(),o.on("/:page/:component",function(e){n(L.getByPath(e.page+"/"+e.component)())}),o.on(function(){n("Frontpage!")}).resolve(),o.notFound(function(){e.innerHTML="NOT FOUND!"}),o.hooks({after:function(e){o.updatePageLinks()}}),o.updatePageLinks()}},function(e,n,t){},function(e){e.exports={pages:["page1","page2"],children:"Hello world!"}},function(module,exports){module.exports=function anonymous(locals,escapeFn,include,rethrow){rethrow=rethrow||function(e,n,t,r,o){var i=n.split("\n"),a=Math.max(r-3,0),s=Math.min(i.length,r+3),u=o(t),l=i.slice(a,s).map(function(e,n){var t=n+a+1;return(t==r?" >> ":"    ")+t+"| "+e}).join("\n");throw e.path=u,e.message=(u||"ejs")+":"+r+"\n"+l+"\n\n"+e.message,e},escapeFn=escapeFn||function(e){return null==e?"":String(e).replace(_MATCH_HTML,encode_char)};var _ENCODE_HTML_RULES={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},_MATCH_HTML=/[&<>'"]/g;function encode_char(e){return _ENCODE_HTML_RULES[e]||e}var __line=1,__lines='<% include partials/menu.ejs %>\n\n<div class="content">\n  <%- children %>\n</div>',__filename="src/templates/page.ejs";try{var __output=[],__append=__output.push.bind(__output);with(locals||{})(function(){var e=1;try{__append('<div class="nav">\n  <ul>\n    '),e=3,pages.forEach(function(n){__append('\n      <li><a href="'),e=4,__append(escapeFn(n)),__append('" data-navigo>'),__append(escapeFn(n)),__append("</a></li>\n    "),e=5}),__append("\n  </ul>\n</div>"),e=7}catch(n){rethrow(n,'<div class="nav">\n  <ul>\n    <% pages.forEach(function(page) { %>\n      <li><a href="<%= page %>" data-navigo><%= page %></a></li>\n    <% }); %>\n  </ul>\n</div>',"/home/joanrufe/Proyectos/TUI/express-styleguide/src/templates/partials/menu.ejs",e,escapeFn)}}).call(this),__append('\n\n<div class="content">\n  '),__line=4,__append(children),__append("\n</div>"),__line=5;return __output.join("")}catch(e){rethrow(e,__lines,__filename,__line,escapeFn)}}},function(e){e.exports={}},function(module,exports){module.exports=function anonymous(locals,escapeFn,include,rethrow){rethrow=rethrow||function(e,n,t,r,o){var i=n.split("\n"),a=Math.max(r-3,0),s=Math.min(i.length,r+3),u=o(t),l=i.slice(a,s).map(function(e,n){var t=n+a+1;return(t==r?" >> ":"    ")+t+"| "+e}).join("\n");throw e.path=u,e.message=(u||"ejs")+":"+r+"\n"+l+"\n\n"+e.message,e},escapeFn=escapeFn||function(e){return null==e?"":String(e).replace(_MATCH_HTML,encode_char)};var _ENCODE_HTML_RULES={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},_MATCH_HTML=/[&<>'"]/g;function encode_char(e){return _ENCODE_HTML_RULES[e]||e}var __line=1,__lines='<form>\n    <div class="fieldset">\n        <div class="form-item">\n            <label for="input">First input</label>\n            <input type="text" name="input" value="">\n        </div>\n        <div class="form-item">\n            <label for="input">Second input</label>\n            <input type="text" name="input" value="">\n        </div>\n        <div class="form-item">\n            <label for="input">Third input</label>\n            <input type="text" name="input" value="">\n        </div>\n    </div>\n    <div class="form-item">\n        <input type="submit" name="input" value="Send">\n    </div>\n</form>',__filename="src/templates/molecules/form.ejs";try{var __output=[],__append=__output.push.bind(__output);with(locals||{})__append('<form>\n    <div class="fieldset">\n        <div class="form-item">\n            <label for="input">First input</label>\n            <input type="text" name="input" value="">\n        </div>\n        <div class="form-item">\n            <label for="input">Second input</label>\n            <input type="text" name="input" value="">\n        </div>\n        <div class="form-item">\n            <label for="input">Third input</label>\n            <input type="text" name="input" value="">\n        </div>\n    </div>\n    <div class="form-item">\n        <input type="submit" name="input" value="Send">\n    </div>\n</form>'),__line=19;return __output.join("")}catch(e){rethrow(e,__lines,__filename,__line,escapeFn)}}},function(e){e.exports={status:"enabled",name:"my_input",label:"My Input",value:"Write here..."}},function(module,exports){module.exports=function anonymous(locals,escapeFn,include,rethrow){rethrow=rethrow||function(e,n,t,r,o){var i=n.split("\n"),a=Math.max(r-3,0),s=Math.min(i.length,r+3),u=o(t),l=i.slice(a,s).map(function(e,n){var t=n+a+1;return(t==r?" >> ":"    ")+t+"| "+e}).join("\n");throw e.path=u,e.message=(u||"ejs")+":"+r+"\n"+l+"\n\n"+e.message,e},escapeFn=escapeFn||function(e){return null==e?"":String(e).replace(_MATCH_HTML,encode_char)};var _ENCODE_HTML_RULES={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},_MATCH_HTML=/[&<>'"]/g;function encode_char(e){return _ENCODE_HTML_RULES[e]||e}var __line=1,__lines='<% if (label) { %>\n    <div class="form-item textinput<%= \' \'+ status %>">\n        <label for="<%= label %>"><%= label %></label>\n        <input type="text" name="<%= name %>" value="<%= value %>">\n    </div>\n<% } %>',__filename="src/templates/atoms/text-input.ejs";try{var __output=[],__append=__output.push.bind(__output);with(locals||{})label&&(__append('\n    <div class="form-item textinput'),__line=2,__append(escapeFn(" "+status)),__append('">\n        <label for="'),__line=3,__append(escapeFn(label)),__append('">'),__append(escapeFn(label)),__append('</label>\n        <input type="text" name="'),__line=4,__append(escapeFn(name)),__append('" value="'),__append(escapeFn(value)),__append('">\n    </div>\n'),__line=6);return __output.join("")}catch(e){rethrow(e,__lines,__filename,__line,escapeFn)}}},function(e,n,t){e.exports=function(){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function n(){return!("undefined"==typeof window||!window.history||!window.history.pushState)}function t(e,t,r){this.root=null,this._routes=[],this._useHash=t,this._hash=void 0===r?"#":r,this._paused=!1,this._destroyed=!1,this._lastRouteResolved=null,this._notFoundHandler=null,this._defaultHandler=null,this._usePushState=!t&&n(),this._onLocationChange=this._onLocationChange.bind(this),this._genericHooks=null,this._historyAPIUpdateMethod="pushState",e?this.root=t?e.replace(/\/$/,"/"+this._hash):e.replace(/\/$/,""):t&&(this.root=this._cLoc().split(this._hash)[0].replace(/\/$/,"/"+this._hash)),this._listen(),this.updatePageLinks()}function r(e){return e instanceof RegExp?e:e.replace(/\/+$/,"").replace(/^\/+/,"^/")}function o(e){return e.replace(/\/$/,"").split("/").length}function i(e,n){return o(n)-o(e)}function a(e,n){return function(e){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).map(function(n){var o=function(e){var n=[];return{regexp:e instanceof RegExp?e:new RegExp(e.replace(t.PARAMETER_REGEXP,function(e,r,o){return n.push(o),t.REPLACE_VARIABLE_REGEXP}).replace(t.WILDCARD_REGEXP,t.REPLACE_WILDCARD)+t.FOLLOWED_BY_SLASH_REGEXP,t.MATCH_REGEXP_FLAGS),paramNames:n}}(r(n.route)),i=o.regexp,a=o.paramNames,s=e.replace(/^\/+/,"/").match(i),u=function(e,n){return 0===n.length?null:e?e.slice(1,e.length).reduce(function(e,t,r){return null===e&&(e={}),e[n[r]]=decodeURIComponent(t),e},null):null}(s,a);return!!s&&{match:s,route:n,params:u}}).filter(function(e){return e})}(e,n)[0]||!1}function s(e,n){var t=n.map(function(n){return""===n.route||"*"===n.route?e:e.split(new RegExp(n.route+"($|/)"))[0]}),o=r(e);return t.length>1?t.reduce(function(e,n){return e.length>n.length&&(e=n),e},t[0]):1===t.length?t[0]:o}function u(e,t,r){var o,i=function(e){return e.split(/\?(.*)?$/)[0]};return void 0===r&&(r="#"),n()&&!t?i(e).split(r)[0]:(o=e.split(r)).length>1?i(o[1]):i(o[0])}function l(n,t,r){if(t&&"object"===(void 0===t?"undefined":e(t))){if(t.before)return void t.before(function(){(!(arguments.length>0&&void 0!==arguments[0])||arguments[0])&&(n(),t.after&&t.after(r))},r);if(t.after)return n(),void(t.after&&t.after(r))}n()}return t.prototype={helpers:{match:a,root:s,clean:r,getOnlyURL:u},navigate:function(e,n){var t;return e=e||"",this._usePushState?(t=(t=(n?"":this._getRoot()+"/")+e.replace(/^\/+/,"/")).replace(/([^:])(\/{2,})/g,"$1/"),history[this._historyAPIUpdateMethod]({},"",t),this.resolve()):"undefined"!=typeof window&&(e=e.replace(new RegExp("^"+this._hash),""),window.location.href=window.location.href.replace(/#$/,"").replace(new RegExp(this._hash+".*$"),"")+this._hash+e),this},on:function(){for(var n=this,t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];if("function"==typeof r[0])this._defaultHandler={handler:r[0],hooks:r[1]};else if(r.length>=2)if("/"===r[0]){var a=r[1];"object"===e(r[1])&&(a=r[1].uses),this._defaultHandler={handler:a,hooks:r[2]}}else this._add(r[0],r[1],r[2]);else"object"===e(r[0])&&Object.keys(r[0]).sort(i).forEach(function(e){n.on(e,r[0][e])});return this},off:function(e){return null!==this._defaultHandler&&e===this._defaultHandler.handler?this._defaultHandler=null:null!==this._notFoundHandler&&e===this._notFoundHandler.handler&&(this._notFoundHandler=null),this._routes=this._routes.reduce(function(n,t){return t.handler!==e&&n.push(t),n},[]),this},notFound:function(e,n){return this._notFoundHandler={handler:e,hooks:n},this},resolve:function(e){var t,r,o=this,i=(e||this._cLoc()).replace(this._getRoot(),"");this._useHash&&(i=i.replace(new RegExp("^/"+this._hash),"/"));var s=function(e){return e.split(/\?(.*)?$/).slice(1).join("")}(e||this._cLoc()),c=u(i,this._useHash,this._hash);return!this._paused&&(this._lastRouteResolved&&c===this._lastRouteResolved.url&&s===this._lastRouteResolved.query?(this._lastRouteResolved.hooks&&this._lastRouteResolved.hooks.already&&this._lastRouteResolved.hooks.already(this._lastRouteResolved.params),!1):(r=a(c,this._routes))?(this._callLeave(),this._lastRouteResolved={url:c,query:s,hooks:r.route.hooks,params:r.params,name:r.route.name},t=r.route.handler,l(function(){l(function(){r.route.route instanceof RegExp?t.apply(void 0,r.match.slice(1,r.match.length)):t(r.params,s)},r.route.hooks,r.params,o._genericHooks)},this._genericHooks,r.params),r):this._defaultHandler&&(""===c||"/"===c||c===this._hash||function(e,t,r){if(n()&&!t)return!1;if(!e.match(r))return!1;var o=e.split(r);return o.length<2||""===o[1]}(c,this._useHash,this._hash))?(l(function(){l(function(){o._callLeave(),o._lastRouteResolved={url:c,query:s,hooks:o._defaultHandler.hooks},o._defaultHandler.handler(s)},o._defaultHandler.hooks)},this._genericHooks),!0):(this._notFoundHandler&&l(function(){l(function(){o._callLeave(),o._lastRouteResolved={url:c,query:s,hooks:o._notFoundHandler.hooks},o._notFoundHandler.handler(s)},o._notFoundHandler.hooks)},this._genericHooks),!1))},destroy:function(){this._routes=[],this._destroyed=!0,this._lastRouteResolved=null,this._genericHooks=null,clearTimeout(this._listeningInterval),"undefined"!=typeof window&&(window.removeEventListener("popstate",this._onLocationChange),window.removeEventListener("hashchange",this._onLocationChange))},updatePageLinks:function(){var e=this;"undefined"!=typeof document&&this._findLinks().forEach(function(n){n.hasListenerAttached||(n.addEventListener("click",function(t){if((t.ctrlKey||t.metaKey)&&"a"==t.target.tagName.toLowerCase())return!1;var r=e.getLinkPath(n);e._destroyed||(t.preventDefault(),e.navigate(r.replace(/\/+$/,"").replace(/^\/+/,"/")))}),n.hasListenerAttached=!0)})},generate:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=this._routes.reduce(function(t,r){var o;if(r.name===e)for(o in t=r.route,n)t=t.toString().replace(":"+o,n[o]);return t},"");return this._useHash?this._hash+t:t},link:function(e){return this._getRoot()+e},pause:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this._paused=e,this._historyAPIUpdateMethod=e?"replaceState":"pushState"},resume:function(){this.pause(!1)},historyAPIUpdateMethod:function(e){return void 0===e?this._historyAPIUpdateMethod:(this._historyAPIUpdateMethod=e,e)},disableIfAPINotAvailable:function(){n()||this.destroy()},lastRouteResolved:function(){return this._lastRouteResolved},getLinkPath:function(e){return e.getAttribute("href")},hooks:function(e){this._genericHooks=e},_add:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return"string"==typeof n&&(n=encodeURI(n)),this._routes.push("object"===(void 0===t?"undefined":e(t))?{route:n,handler:t.uses,name:t.as,hooks:r||t.hooks}:{route:n,handler:t,hooks:r}),this._add},_getRoot:function(){return null!==this.root?this.root:(this.root=s(this._cLoc().split("?")[0],this._routes),this.root)},_listen:function(){var e=this;if(this._usePushState)window.addEventListener("popstate",this._onLocationChange);else if("undefined"!=typeof window&&"onhashchange"in window)window.addEventListener("hashchange",this._onLocationChange);else{var n=this._cLoc(),t=void 0,r=void 0;(r=function(){t=e._cLoc(),n!==t&&(n=t,e.resolve()),e._listeningInterval=setTimeout(r,200)})()}},_cLoc:function(){return"undefined"!=typeof window?void 0!==window.__NAVIGO_WINDOW_LOCATION_MOCK__?window.__NAVIGO_WINDOW_LOCATION_MOCK__:r(window.location.href):""},_findLinks:function(){return[].slice.call(document.querySelectorAll("[data-navigo]"))},_onLocationChange:function(){this.resolve()},_callLeave:function(){var e=this._lastRouteResolved;e&&e.hooks&&e.hooks.leave&&e.hooks.leave(e.params)}},t.PARAMETER_REGEXP=/([:*])(\w+)/g,t.WILDCARD_REGEXP=/\*/g,t.REPLACE_VARIABLE_REGEXP="([^/]+)",t.REPLACE_WILDCARD="(?:.*)",t.FOLLOWED_BY_SLASH_REGEXP="(?:/$|$)",t.MATCH_REGEXP_FLAGS="",t}()},,,function(e,n,t){"use strict";t.r(n);var r=t(0);e.hot.accept(0,function(e){(r=t(0)).default(e)}),Object(r.default)()},function(e,n,t){t(11),e.exports=t(1)}]);