!function(e){var n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(r,i,function(n){return e[n]}.bind(null,i));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=16)}([function(e,n,t){},function(e,n,t){var r=t(3),i=t(4),o=t(2);function s(e){var n=[],t=r.readdirSync(e).map(function(n){return o.join(e,n)}).map(function(e,t,r){if(function(e){return/.*\.ejs$/.test(e)}(e)){if(!(r.filter(function(n){return n==e.replace(".ejs",".json")}).length>0))return{ejs:e};n.push({ejs:e})}if(function(e){return/.*\.json/.test(e)}(e)&&(t=n.findIndex(function(n){return e==n.ejs.replace(".ejs",".json")}))>=0)return{ejs:n[t].ejs,json:e}}).filter(Boolean);return{dir:e.replace(/^.*[\\\/]/,""),renderArray:t}}function a(e){var n=r.readFileSync(e.ejs,"utf-8"),t=e.ejs.replace(/^.*[\\\/]/,"");if(e.json){var o=r.readFileSync(e.json,"utf-8"),s=JSON.parse(o);return{filename:t.replace(".ejs",""),render:i.compile(n),defaultArguments:s}}return{filename:t.replace(".ejs",""),render:i.compile(n)}}function c(e){return e.render(e.defaultArguments)}e.exports=function(e){var n=function(e){var n=r.readdirSync(e);return console.log(n),n.filter(function(n){return!!r.statSync(e+n).isDirectory()}).map(function(n){return console.log(n),e+n})}(e),t=function(e){return e.map(function(e){var n=e.renderArray.map(a);return{name:e.dir,menuElem:`<li><a href="/${e.dir}">${e.dir}</a></li>`,page:n}})}(n.map(s));return{render:function(){return`<div class="menu">${function(e){return`<ul>${e.map(function(e){return e}).join("")}</ul>`}(t.map(function(e){return e.menuElem}))}</div>`},renderPage:function(e){var n=t.filter(function(n){return n.name==e}).shift();return n?function(e){return e.page.map(c)}(n):"Page not found"},getPages:function(){return n}}}},function(e,n,t){(function(e){function t(e,n){for(var t=0,r=e.length-1;r>=0;r--){var i=e[r];"."===i?e.splice(r,1):".."===i?(e.splice(r,1),t++):t&&(e.splice(r,1),t--)}if(n)for(;t--;t)e.unshift("..");return e}var r=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,i=function(e){return r.exec(e).slice(1)};function o(e,n){if(e.filter)return e.filter(n);for(var t=[],r=0;r<e.length;r++)n(e[r],r,e)&&t.push(e[r]);return t}n.resolve=function(){for(var n="",r=!1,i=arguments.length-1;i>=-1&&!r;i--){var s=i>=0?arguments[i]:e.cwd();if("string"!=typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(n=s+"/"+n,r="/"===s.charAt(0))}return n=t(o(n.split("/"),function(e){return!!e}),!r).join("/"),(r?"/":"")+n||"."},n.normalize=function(e){var r=n.isAbsolute(e),i="/"===s(e,-1);return(e=t(o(e.split("/"),function(e){return!!e}),!r).join("/"))||r||(e="."),e&&i&&(e+="/"),(r?"/":"")+e},n.isAbsolute=function(e){return"/"===e.charAt(0)},n.join=function(){var e=Array.prototype.slice.call(arguments,0);return n.normalize(o(e,function(e,n){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e}).join("/"))},n.relative=function(e,t){function r(e){for(var n=0;n<e.length&&""===e[n];n++);for(var t=e.length-1;t>=0&&""===e[t];t--);return n>t?[]:e.slice(n,t-n+1)}e=n.resolve(e).substr(1),t=n.resolve(t).substr(1);for(var i=r(e.split("/")),o=r(t.split("/")),s=Math.min(i.length,o.length),a=s,c=0;c<s;c++)if(i[c]!==o[c]){a=c;break}var u=[];for(c=a;c<i.length;c++)u.push("..");return(u=u.concat(o.slice(a))).join("/")},n.sep="/",n.delimiter=":",n.dirname=function(e){var n=i(e),t=n[0],r=n[1];return t||r?(r&&(r=r.substr(0,r.length-1)),t+r):"."},n.basename=function(e,n){var t=i(e)[2];return n&&t.substr(-1*n.length)===n&&(t=t.substr(0,t.length-n.length)),t},n.extname=function(e){return i(e)[3]};var s="b"==="ab".substr(-1)?function(e,n,t){return e.substr(n,t)}:function(e,n,t){return n<0&&(n=e.length+n),e.substr(n,t)}}).call(this,t(15))},function(e,n){},function(e,n,t){"use strict";
/**
 * @file Embedded JavaScript templating engine. {@link http://ejs.co}
 * @author Matthew Eernisse <mde@fleegix.org>
 * @author Tiancheng "Timothy" Gu <timothygu99@gmail.com>
 * @project EJS
 * @license {@link http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0}
 */var r=t(3),i=t(2),o=t(14),s=!1,a=t(13).version,c="%",u="locals",l=["delimiter","scope","context","debug","compileDebug","client","_with","rmWhitespace","strict","filename","async"],p=l.concat("cache"),f=/^\uFEFF/;function m(e,t){var i,o,s=t.views;if("/"==e.charAt(0))i=n.resolveInclude(e.replace(/^\/*/,""),t.root||"/",!0);else if(t.filename&&(o=n.resolveInclude(e,t.filename),r.existsSync(o)&&(i=o)),i||Array.isArray(s)&&s.some(function(t){return o=n.resolveInclude(e,t,!0),r.existsSync(o)})&&(i=o),!i)throw new Error('Could not find the include file "'+t.escapeFunction(e)+'"');return i}function d(e,t){var r,i=e.filename,o=arguments.length>1;if(e.cache){if(!i)throw new Error("cache option requires a filename");if(r=n.cache.get(i))return r;o||(t=h(i).toString().replace(f,""))}else if(!o){if(!i)throw new Error("Internal EJS error: no file name or template provided");t=h(i).toString().replace(f,"")}return r=n.compile(t,e),e.cache&&n.cache.set(i,r),r}function h(e){return n.fileLoader(e)}function _(e,n,t,r,i){var o=n.split("\n"),s=Math.max(r-3,0),a=Math.min(o.length,r+3),c=i(t),u=o.slice(s,a).map(function(e,n){var t=n+s+1;return(t==r?" >> ":"    ")+t+"| "+e}).join("\n");throw e.path=c,e.message=(c||"ejs")+":"+r+"\n"+u+"\n\n"+e.message,e}function v(e){return e.replace(/;(\s*$)/,"$1")}function g(e,t){t=t||{};var r={};this.templateText=e,this.mode=null,this.truncate=!1,this.currentLine=1,this.source="",this.dependencies=[],r.client=t.client||!1,r.escapeFunction=t.escape||o.escapeXML,r.compileDebug=!1!==t.compileDebug,r.debug=!!t.debug,r.filename=t.filename,r.delimiter=t.delimiter||n.delimiter||c,r.strict=t.strict||!1,r.context=t.context,r.cache=t.cache||!1,r.rmWhitespace=t.rmWhitespace,r.root=t.root,r.outputFunctionName=t.outputFunctionName,r.localsName=t.localsName||n.localsName||u,r.views=t.views,r.async=t.async,r.strict?r._with=!1:r._with=void 0===t._with||t._with,this.opts=r,this.regex=this.createRegex()}n.cache=o.cache,n.fileLoader=r.readFileSync,n.localsName=u,n.promiseImpl=new Function("return this;")().Promise,n.resolveInclude=function(e,n,t){var r=i.dirname,o=i.extname,s=(0,i.resolve)(t?n:r(n),e);return o(e)||(s+=".ejs"),s},n.compile=function(e,n){return n&&n.scope&&(s||(console.warn("`scope` option is deprecated and will be removed in EJS 3"),s=!0),n.context||(n.context=n.scope),delete n.scope),new g(e,n).compile()},n.render=function(e,n,t){var r=n||{},i=t||{};return 2==arguments.length&&o.shallowCopyFromList(i,r,l),d(i,e)(r)},n.renderFile=function(){var e,t,r,i=Array.prototype.slice.call(arguments),s=i.shift(),a={filename:s};return"function"==typeof arguments[arguments.length-1]&&(e=i.pop()),i.length?(t=i.shift(),i.length?o.shallowCopy(a,i.pop()):(t.settings&&(t.settings.views&&(a.views=t.settings.views),t.settings["view cache"]&&(a.cache=!0),(r=t.settings["view options"])&&o.shallowCopy(a,r)),o.shallowCopyFromList(a,t,p)),a.filename=s):t={},function(e,t,r){var i;if(!r){if("function"==typeof n.promiseImpl)return new n.promiseImpl(function(n,r){try{n(i=d(e)(t))}catch(e){r(e)}});throw new Error("Please provide a callback function")}try{i=d(e)(t)}catch(e){return r(e)}r(null,i)}(a,t,e)},n.clearCache=function(){n.cache.reset()},g.modes={EVAL:"eval",ESCAPED:"escaped",RAW:"raw",COMMENT:"comment",LITERAL:"literal"},g.prototype={createRegex:function(){var e="(<%%|%%>|<%=|<%-|<%_|<%#|<%|%>|-%>|_%>)",n=o.escapeRegExpChars(this.opts.delimiter);return e=e.replace(/%/g,n),new RegExp(e)},compile:function(){var e,n,t,r=this.opts,i="",s="",a=r.escapeFunction;this.source||(this.generateSource(),i+="  var __output = [], __append = __output.push.bind(__output);\n",r.outputFunctionName&&(i+="  var "+r.outputFunctionName+" = __append;\n"),!1!==r._with&&(i+="  with ("+r.localsName+" || {}) {\n",s+="  }\n"),s+='  return __output.join("");\n',this.source=i+this.source+s),e=r.compileDebug?"var __line = 1\n  , __lines = "+JSON.stringify(this.templateText)+"\n  , __filename = "+(r.filename?JSON.stringify(r.filename):"undefined")+";\ntry {\n"+this.source+"} catch (e) {\n  rethrow(e, __lines, __filename, __line, escapeFn);\n}\n":this.source,r.client&&(e="escapeFn = escapeFn || "+a.toString()+";\n"+e,r.compileDebug&&(e="rethrow = rethrow || "+_.toString()+";\n"+e)),r.strict&&(e='"use strict";\n'+e),r.debug&&console.log(e);try{if(r.async)try{t=new Function("return (async function(){}).constructor;")()}catch(e){throw e instanceof SyntaxError?new Error("This environment does not support async/await"):e}else t=Function;n=new t(r.localsName+", escapeFn, include, rethrow",e)}catch(e){throw e instanceof SyntaxError&&(r.filename&&(e.message+=" in "+r.filename),e.message+=" while compiling ejs\n\n",e.message+="If the above error is not helpful, you may want to try EJS-Lint:\n",e.message+="https://github.com/RyanZim/EJS-Lint",e.async||(e.message+="\n",e.message+="Or, if you meant to create an async function, pass async: true as an option.")),e}if(r.client)return n.dependencies=this.dependencies,n;var c=function(e){return n.apply(r.context,[e||{},a,function(n,t){var i=o.shallowCopy({},e);return t&&(i=o.shallowCopy(i,t)),function(e,n){var t=o.shallowCopy({},n);return t.filename=m(e,t),d(t)}(n,r)(i)},_])};return c.dependencies=this.dependencies,c},generateSource:function(){this.opts.rmWhitespace&&(this.templateText=this.templateText.replace(/\r/g,"").replace(/^\s+|\s+$/gm,"")),this.templateText=this.templateText.replace(/[ \t]*<%_/gm,"<%_").replace(/_%>[ \t]*/gm,"_%>");var e=this,t=this.parseTemplateText(),r=this.opts.delimiter;t&&t.length&&t.forEach(function(i,s){var a,c,u,l,p,d;if(0===i.indexOf("<"+r)&&0!==i.indexOf("<"+r+r)&&(c=t[s+2])!=r+">"&&c!="-"+r+">"&&c!="_"+r+">")throw new Error('Could not find matching close tag for "'+i+'".');if((u=i.match(/^\s*include\s+(\S+)/))&&(a=t[s-1])&&(a=="<"+r||a=="<"+r+"-"||a=="<"+r+"_"))return l=o.shallowCopy({},e.opts),p=function(e,n){var t,r,i=o.shallowCopy({},n);r=h(t=m(e,i)).toString().replace(f,""),i.filename=t;var s=new g(r,i);return s.generateSource(),{source:s.source,filename:t,template:r}}(u[1],l),d=e.opts.compileDebug?"    ; (function(){\n      var __line = 1\n      , __lines = "+JSON.stringify(p.template)+"\n      , __filename = "+JSON.stringify(p.filename)+";\n      try {\n"+p.source+"      } catch (e) {\n        rethrow(e, __lines, __filename, __line, escapeFn);\n      }\n    ; }).call(this)\n":"    ; (function(){\n"+p.source+"    ; }).call(this)\n",e.source+=d,void e.dependencies.push(n.resolveInclude(u[1],l.filename));e.scanLine(i)})},parseTemplateText:function(){for(var e,n=this.templateText,t=this.regex,r=t.exec(n),i=[];r;)0!==(e=r.index)&&(i.push(n.substring(0,e)),n=n.slice(e)),i.push(r[0]),n=n.slice(r[0].length),r=t.exec(n);return n&&i.push(n),i},_addOutput:function(e){if(this.truncate?(e=e.replace(/^(?:\r\n|\r|\n)/,""),this.truncate=!1):this.opts.rmWhitespace&&(e=e.replace(/^\n/,"")),!e)return e;e=(e=(e=(e=e.replace(/\\/g,"\\\\")).replace(/\n/g,"\\n")).replace(/\r/g,"\\r")).replace(/"/g,'\\"'),this.source+='    ; __append("'+e+'")\n'},scanLine:function(e){var n,t=this.opts.delimiter;switch(n=e.split("\n").length-1,e){case"<"+t:case"<"+t+"_":this.mode=g.modes.EVAL;break;case"<"+t+"=":this.mode=g.modes.ESCAPED;break;case"<"+t+"-":this.mode=g.modes.RAW;break;case"<"+t+"#":this.mode=g.modes.COMMENT;break;case"<"+t+t:this.mode=g.modes.LITERAL,this.source+='    ; __append("'+e.replace("<"+t+t,"<"+t)+'")\n';break;case t+t+">":this.mode=g.modes.LITERAL,this.source+='    ; __append("'+e.replace(t+t+">",t+">")+'")\n';break;case t+">":case"-"+t+">":case"_"+t+">":this.mode==g.modes.LITERAL&&this._addOutput(e),this.mode=null,this.truncate=0===e.indexOf("-")||0===e.indexOf("_");break;default:if(this.mode){switch(this.mode){case g.modes.EVAL:case g.modes.ESCAPED:case g.modes.RAW:e.lastIndexOf("//")>e.lastIndexOf("\n")&&(e+="\n")}switch(this.mode){case g.modes.EVAL:this.source+="    ; "+e+"\n";break;case g.modes.ESCAPED:this.source+="    ; __append(escapeFn("+v(e)+"))\n";break;case g.modes.RAW:this.source+="    ; __append("+v(e)+")\n";break;case g.modes.COMMENT:break;case g.modes.LITERAL:this._addOutput(e)}}else this._addOutput(e)}this.opts.compileDebug&&n&&(this.currentLine+=n,this.source+="    ; __line = "+this.currentLine+"\n")}},n.escapeXML=o.escapeXML,n.__express=n.renderFile,n.VERSION=a,n.name="ejs","undefined"!=typeof window&&(window.ejs=n)},function(e,n,t){"use strict";t.r(n);t(4),t(1);t(0);const r=document.getElementById("app"),i=function(e,n){const r=t(12)(`./${e}.ejs`),i=t(9)(`./${e}.json`);if(r)return r(n||i)}("atoms/text-input");r.innerHTML=i},,function(e){e.exports={}},function(e){e.exports={status:"enabled",name:"my_input",label:"My Input",value:"Write here..."}},function(e,n,t){var r={"./atoms/text-input.json":8,"./molecules/form.json":7};function i(e){var n=o(e);return t(n)}function o(e){var n=r[e];if(!(n+1)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n}i.keys=function(){return Object.keys(r)},i.resolve=o,e.exports=i,i.id=9},function(module,exports){module.exports=function anonymous(locals,escapeFn,include,rethrow){rethrow=rethrow||function(e,n,t,r,i){var o=n.split("\n"),s=Math.max(r-3,0),a=Math.min(o.length,r+3),c=i(t),u=o.slice(s,a).map(function(e,n){var t=n+s+1;return(t==r?" >> ":"    ")+t+"| "+e}).join("\n");throw e.path=c,e.message=(c||"ejs")+":"+r+"\n"+u+"\n\n"+e.message,e},escapeFn=escapeFn||function(e){return void 0==e?"":String(e).replace(_MATCH_HTML,encode_char)};var _ENCODE_HTML_RULES={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},_MATCH_HTML=/[&<>'"]/g;function encode_char(e){return _ENCODE_HTML_RULES[e]||e}var __line=1,__lines='<form>\r\n    <div class="fieldset">\r\n        <div class="form-item">\r\n            <label for="input">First input</label>\r\n            <input type="text" name="input" value="">\r\n        </div>\r\n        <div class="form-item">\r\n            <label for="input">Second input</label>\r\n            <input type="text" name="input" value="">\r\n        </div>\r\n        <div class="form-item">\r\n            <label for="input">Third input</label>\r\n            <input type="text" name="input" value="">\r\n        </div>\r\n    </div>\r\n    <div class="form-item">\r\n        <input type="submit" name="input" value="Send">\r\n    </div>\r\n</form>',__filename="src\\templates\\molecules\\form.ejs";try{var __output=[],__append=__output.push.bind(__output);with(locals||{})__append('<form>\r\n    <div class="fieldset">\r\n        <div class="form-item">\r\n            <label for="input">First input</label>\r\n            <input type="text" name="input" value="">\r\n        </div>\r\n        <div class="form-item">\r\n            <label for="input">Second input</label>\r\n            <input type="text" name="input" value="">\r\n        </div>\r\n        <div class="form-item">\r\n            <label for="input">Third input</label>\r\n            <input type="text" name="input" value="">\r\n        </div>\r\n    </div>\r\n    <div class="form-item">\r\n        <input type="submit" name="input" value="Send">\r\n    </div>\r\n</form>'),__line=19;return __output.join("")}catch(e){rethrow(e,__lines,__filename,__line,escapeFn)}}},function(module,exports){module.exports=function anonymous(locals,escapeFn,include,rethrow){rethrow=rethrow||function(e,n,t,r,i){var o=n.split("\n"),s=Math.max(r-3,0),a=Math.min(o.length,r+3),c=i(t),u=o.slice(s,a).map(function(e,n){var t=n+s+1;return(t==r?" >> ":"    ")+t+"| "+e}).join("\n");throw e.path=c,e.message=(c||"ejs")+":"+r+"\n"+u+"\n\n"+e.message,e},escapeFn=escapeFn||function(e){return void 0==e?"":String(e).replace(_MATCH_HTML,encode_char)};var _ENCODE_HTML_RULES={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},_MATCH_HTML=/[&<>'"]/g;function encode_char(e){return _ENCODE_HTML_RULES[e]||e}var __line=1,__lines='<% if (label) { %>\r\n    <div class="form-item textinput<%= \' \'+ status %>">\r\n        <label for="<%= label %>"><%= label %></label>\r\n        <input type="text" name="<%= name %>" value="<%= value %>">\r\n    </div>\r\n<% } %>',__filename="src\\templates\\atoms\\text-input.ejs";try{var __output=[],__append=__output.push.bind(__output);with(locals||{})label&&(__append('\r\n    <div class="form-item textinput'),__line=2,__append(escapeFn(" "+status)),__append('">\r\n        <label for="'),__line=3,__append(escapeFn(label)),__append('">'),__append(escapeFn(label)),__append('</label>\r\n        <input type="text" name="'),__line=4,__append(escapeFn(name)),__append('" value="'),__append(escapeFn(value)),__append('">\r\n    </div>\r\n'),__line=6);return __output.join("")}catch(e){rethrow(e,__lines,__filename,__line,escapeFn)}}},function(e,n,t){var r={"./atoms/text-input.ejs":11,"./molecules/form.ejs":10};function i(e){var n=o(e);return t(n)}function o(e){var n=r[e];if(!(n+1)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n}i.keys=function(){return Object.keys(r)},i.resolve=o,e.exports=i,i.id=12},function(e){e.exports={_from:"ejs",_id:"ejs@2.6.1",_inBundle:!1,_integrity:"sha512-0xy4A/twfrRCnkhfk8ErDi5DqdAsAqeGxht4xkCUrsvhhbQNs7E+4jV0CN7+NKIY0aHE72+XvqtBIXzD31ZbXQ==",_location:"/ejs",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"ejs",name:"ejs",escapedName:"ejs",rawSpec:"",saveSpec:null,fetchSpec:"latest"},_requiredBy:["#DEV:/","#USER"],_resolved:"https://registry.npmjs.org/ejs/-/ejs-2.6.1.tgz",_shasum:"498ec0d495655abc6f23cd61868d926464071aa0",_spec:"ejs",_where:"C:\\Users\\jferna01\\Proyectos\\styleguide",author:{name:"Matthew Eernisse",email:"mde@fleegix.org",url:"http://fleegix.org"},bugs:{url:"https://github.com/mde/ejs/issues"},bundleDependencies:!1,contributors:[{name:"Timothy Gu",email:"timothygu99@gmail.com",url:"https://timothygu.github.io"}],dependencies:{},deprecated:!1,description:"Embedded JavaScript templates",devDependencies:{browserify:"^13.1.1",eslint:"^4.14.0","git-directory-deploy":"^1.5.1",istanbul:"~0.4.3",jake:"^8.0.16",jsdoc:"^3.4.0","lru-cache":"^4.0.1",mocha:"^5.0.5","uglify-js":"^3.3.16"},engines:{node:">=0.10.0"},homepage:"https://github.com/mde/ejs",keywords:["template","engine","ejs"],license:"Apache-2.0",main:"./lib/ejs.js",name:"ejs",repository:{type:"git",url:"git://github.com/mde/ejs.git"},scripts:{coverage:"istanbul cover node_modules/mocha/bin/_mocha",devdoc:"jake doc[dev]",doc:"jake doc",lint:'eslint "**/*.js" Jakefile',test:"jake test"},version:"2.6.1"}},function(e,n,t){"use strict";var r=/[|\\{}()[\]^$+*?.]/g;n.escapeRegExpChars=function(e){return e?String(e).replace(r,"\\$&"):""};var i={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},o=/[&<>'"]/g;function s(e){return i[e]||e}n.escapeXML=function(e){return void 0==e?"":String(e).replace(o,s)},n.escapeXML.toString=function(){return Function.prototype.toString.call(this)+';\nvar _ENCODE_HTML_RULES = {\n      "&": "&amp;"\n    , "<": "&lt;"\n    , ">": "&gt;"\n    , \'"\': "&#34;"\n    , "\'": "&#39;"\n    }\n  , _MATCH_HTML = /[&<>\'"]/g;\nfunction encode_char(c) {\n  return _ENCODE_HTML_RULES[c] || c;\n};\n'},n.shallowCopy=function(e,n){for(var t in n=n||{})e[t]=n[t];return e},n.shallowCopyFromList=function(e,n,t){for(var r=0;r<t.length;r++){var i=t[r];void 0!==n[i]&&(e[i]=n[i])}return e},n.cache={_data:{},set:function(e,n){this._data[e]=n},get:function(e){return this._data[e]},reset:function(){this._data={}}}},function(e,n){var t,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var c,u=[],l=!1,p=-1;function f(){l&&c&&(l=!1,c.length?u=c.concat(u):p=-1,u.length&&m())}function m(){if(!l){var e=a(f);l=!0;for(var n=u.length;n;){for(c=u,u=[];++p<n;)c&&c[p].run();p=-1,n=u.length}c=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(n){try{return r.call(null,e)}catch(n){return r.call(this,e)}}}(e)}}function d(e,n){this.fun=e,this.array=n}function h(){}i.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];u.push(new d(e,n)),1!==u.length||l||a(m)},d.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=h,i.addListener=h,i.once=h,i.off=h,i.removeListener=h,i.removeAllListeners=h,i.emit=h,i.prependListener=h,i.prependOnceListener=h,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(e,n,t){t(5),e.exports=t(0)}]);
//# sourceMappingURL=module.bundle.js.map