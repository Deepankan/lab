/*! jQuery v1.12.3 | (c) jQuery Foundation | jquery.org/license */

!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="1.12.3",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(!l.ownFirst)for(b in a)return k.call(a,b);for(b in a);return void 0===b||k.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(h)return h.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=e.call(arguments,2),d=function(){return a.apply(b||this,c.concat(e.call(arguments)))},d.guid=a.guid=a.guid||n.guid++,d):void 0},now:function(){return+new Date},support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}if(f=d.getElementById(e[2]),f&&f.parentNode){if(f.id!==e[2])return A.find(a);this.length=1,this[0]=f}return this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||(e=n.uniqueSort(e)),D.test(a)&&(e=e.reverse())),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=!0,c||j.disable(),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.addEventListener?(d.removeEventListener("DOMContentLoaded",K),a.removeEventListener("load",K)):(d.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(d.addEventListener||"load"===a.event.type||"complete"===d.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll)a.setTimeout(n.ready);else if(d.addEventListener)d.addEventListener("DOMContentLoaded",K),a.addEventListener("load",K);else{d.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&d.documentElement}catch(e){}c&&c.doScroll&&!function f(){if(!n.isReady){try{c.doScroll("left")}catch(b){return a.setTimeout(f,50)}J(),n.ready()}}()}return I.promise(b)},n.ready.promise();var L;for(L in n(l))break;l.ownFirst="0"===L,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c,e;c=d.getElementsByTagName("body")[0],c&&c.style&&(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",l.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(e))}),function(){var a=d.createElement("div");l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}a=null}();var M=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b},N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0;
}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(M(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),"object"!=typeof b&&"function"!=typeof b||(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f}}function S(a,b,c){if(M(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=void 0)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}}),function(){var a;l.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,e;return c=d.getElementsByTagName("body")[0],c&&c.style?(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(d.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(e),a):void 0}}();var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),V=["Top","Right","Bottom","Left"],W=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function X(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&U.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var Y=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)Y(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},Z=/^(?:checkbox|radio)$/i,$=/<([\w:-]+)/,_=/^$|\/(?:java|ecma)script/i,aa=/^\s+/,ba="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";function ca(a){var b=ba.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}!function(){var a=d.createElement("div"),b=d.createDocumentFragment(),c=d.createElement("input");a.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",l.leadingWhitespace=3===a.firstChild.nodeType,l.tbody=!a.getElementsByTagName("tbody").length,l.htmlSerialize=!!a.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==d.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,b.appendChild(c),l.appendChecked=c.checked,a.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,b.appendChild(a),c=d.createElement("input"),c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),a.appendChild(c),l.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!!a.addEventListener,a[n.expando]=1,l.attributes=!a.getAttribute(n.expando)}();var da={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};da.optgroup=da.option,da.tbody=da.tfoot=da.colgroup=da.caption=da.thead,da.th=da.td;function ea(a,b){var c,d,e=0,f="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,ea(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function fa(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}var ga=/<|&#?\w+;/,ha=/<tbody/i;function ia(a){Z.test(a.type)&&(a.defaultChecked=a.checked)}function ja(a,b,c,d,e){for(var f,g,h,i,j,k,m,o=a.length,p=ca(b),q=[],r=0;o>r;r++)if(g=a[r],g||0===g)if("object"===n.type(g))n.merge(q,g.nodeType?[g]:g);else if(ga.test(g)){i=i||p.appendChild(b.createElement("div")),j=($.exec(g)||["",""])[1].toLowerCase(),m=da[j]||da._default,i.innerHTML=m[1]+n.htmlPrefilter(g)+m[2],f=m[0];while(f--)i=i.lastChild;if(!l.leadingWhitespace&&aa.test(g)&&q.push(b.createTextNode(aa.exec(g)[0])),!l.tbody){g="table"!==j||ha.test(g)?"<table>"!==m[1]||ha.test(g)?0:i:i.firstChild,f=g&&g.childNodes.length;while(f--)n.nodeName(k=g.childNodes[f],"tbody")&&!k.childNodes.length&&g.removeChild(k)}n.merge(q,i.childNodes),i.textContent="";while(i.firstChild)i.removeChild(i.firstChild);i=p.lastChild}else q.push(b.createTextNode(g));i&&p.removeChild(i),l.appendChecked||n.grep(ea(q,"input"),ia),r=0;while(g=q[r++])if(d&&n.inArray(g,d)>-1)e&&e.push(g);else if(h=n.contains(g.ownerDocument,g),i=ea(p.appendChild(g),"script"),h&&fa(i),c){f=0;while(g=i[f++])_.test(g.type||"")&&c.push(g)}return i=null,p}!function(){var b,c,e=d.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b]=c in a)||(e.setAttribute(c,"t"),l[b]=e.attributes[c].expando===!1);e=null}();var ka=/^(?:input|select|textarea)$/i,la=/^key/,ma=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,na=/^(?:focusinfocus|focusoutblur)$/,oa=/^([^.]*)(?:\.(.+)|)/;function pa(){return!0}function qa(){return!1}function ra(){try{return d.activeElement}catch(a){}}function sa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)sa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=qa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return"undefined"==typeof n||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(G)||[""],h=b.length;while(h--)f=oa.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=oa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(i=m=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!na.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),h=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),l=n.event.special[q]||{},f||!l.trigger||l.trigger.apply(e,c)!==!1)){if(!f&&!l.noBubble&&!n.isWindow(e)){for(j=l.delegateType||q,na.test(j+q)||(i=i.parentNode);i;i=i.parentNode)p.push(i),m=i;m===(e.ownerDocument||d)&&p.push(m.defaultView||m.parentWindow||a)}o=0;while((i=p[o++])&&!b.isPropagationStopped())b.type=o>1?j:l.bindType||q,g=(n._data(i,"events")||{})[b.type]&&n._data(i,"handle"),g&&g.apply(i,c),g=h&&i[h],g&&g.apply&&M(i)&&(b.result=g.apply(i,c),b.result===!1&&b.preventDefault());if(b.type=q,!f&&!b.isDefaultPrevented()&&(!l._default||l._default.apply(p.pop(),c)===!1)&&M(e)&&h&&e[q]&&!n.isWindow(e)){m=e[h],m&&(e[h]=null),n.event.triggered=q;try{e[q]()}catch(s){}n.event.triggered=void 0,m&&(e[h]=m)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ma.test(f)?this.mouseHooks:la.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=g.srcElement||d),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,h.filter?h.filter(a,g):a},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button,h=b.fromElement;return null==a.pageX&&null!=b.clientX&&(e=a.target.ownerDocument||d,f=e.documentElement,c=e.body,a.pageX=b.clientX+(f&&f.scrollLeft||c&&c.scrollLeft||0)-(f&&f.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(f&&f.scrollTop||c&&c.scrollTop||0)-(f&&f.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&h&&(a.relatedTarget=h===a.target?b.toElement:h),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ra()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ra()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=d.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)}:function(a,b,c){var d="on"+b;a.detachEvent&&("undefined"==typeof a[d]&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?pa:qa):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:qa,isPropagationStopped:qa,isImmediatePropagationStopped:qa,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=pa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=pa,a&&!this.isSimulated&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=pa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submit||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?n.prop(b,"form"):void 0;c&&!n._data(c,"submit")&&(n.event.add(c,"submit._submit",function(a){a._submitBubble=!0}),n._data(c,"submit",!0))})},postDispatch:function(a){a._submitBubble&&(delete a._submitBubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.change||(n.event.special.change={setup:function(){return ka.test(this.nodeName)?("checkbox"!==this.type&&"radio"!==this.type||(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._justChanged=!0)}),n.event.add(this,"click._change",function(a){this._justChanged&&!a.isTrigger&&(this._justChanged=!1),n.event.simulate("change",this,a)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;ka.test(b.nodeName)&&!n._data(b,"change")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a)}),n._data(b,"change",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!ka.test(this.nodeName)}}),l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d){return sa(this,a,b,c,d)},one:function(a,b,c,d){return sa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=qa),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ta=/ jQuery\d+="(?:null|\d+)"/g,ua=new RegExp("<(?:"+ba+")[\\s/>]","i"),va=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,wa=/<script|<style|<link/i,xa=/checked\s*(?:[^=]|=\s*.checked.)/i,ya=/^true\/(.*)/,za=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Aa=ca(d),Ba=Aa.appendChild(d.createElement("div"));function Ca(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function Da(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function Ea(a){var b=ya.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Ga(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(Da(b).text=a.text,Ea(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Z.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}}function Ha(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&xa.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(o&&(k=ja(b,a[0].ownerDocument,!1,a,d),e=k.firstChild,1===k.childNodes.length&&(k=e),e||d)){for(i=n.map(ea(k,"script"),Da),h=i.length;o>m;m++)g=k,m!==p&&(g=n.clone(g,!0,!0),h&&n.merge(i,ea(g,"script"))),c.call(a[m],g,m);if(h)for(j=i[i.length-1].ownerDocument,n.map(i,Ea),m=0;h>m;m++)g=i[m],_.test(g.type||"")&&!n._data(g,"globalEval")&&n.contains(j,g)&&(g.src?n._evalUrl&&n._evalUrl(g.src):n.globalEval((g.text||g.textContent||g.innerHTML||"").replace(za,"")));k=e=null}return a}function Ia(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(ea(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&fa(ea(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(va,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!ua.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(Ba.innerHTML=a.outerHTML,Ba.removeChild(f=Ba.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=ea(f),h=ea(a),g=0;null!=(e=h[g]);++g)d[g]&&Ga(e,d[g]);if(b)if(c)for(h=h||ea(a),d=d||ea(f),g=0;null!=(e=h[g]);g++)Fa(e,d[g]);else Fa(a,f);return d=ea(f,"script"),d.length>0&&fa(d,!i&&ea(a,"script")),d=h=e=null,f},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.attributes,m=n.event.special;null!=(d=a[h]);h++)if((b||M(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k||"undefined"==typeof d.removeAttribute?d[i]=void 0:d.removeAttribute(i),c.push(f))}}}),n.fn.extend({domManip:Ha,detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return Y(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||d).createTextNode(a))},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(ea(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return Y(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(ta,""):void 0;if("string"==typeof a&&!wa.test(a)&&(l.htmlSerialize||!ua.test(a))&&(l.leadingWhitespace||!aa.test(a))&&!da[($.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ea(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(ea(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],f=n(a),h=f.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(f[d])[b](c),g.apply(e,c.get());return this.pushStack(e)}});var Ja,Ka={HTML:"block",BODY:"block"};function La(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function Ma(a){var b=d,c=Ka[a];return c||(c=La(a,b),"none"!==c&&c||(Ja=(Ja||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ja[0].contentWindow||Ja[0].contentDocument).document,b.write(),b.close(),c=La(a,b),Ja.detach()),Ka[a]=c),c}var Na=/^margin/,Oa=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Pa=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Qa=d.documentElement;!function(){var b,c,e,f,g,h,i=d.createElement("div"),j=d.createElement("div");if(j.style){j.style.cssText="float:left;opacity:.5",l.opacity="0.5"===j.style.opacity,l.cssFloat=!!j.style.cssFloat,j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===j.style.backgroundClip,i=d.createElement("div"),i.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",j.innerHTML="",i.appendChild(j),l.boxSizing=""===j.style.boxSizing||""===j.style.MozBoxSizing||""===j.style.WebkitBoxSizing,n.extend(l,{reliableHiddenOffsets:function(){return null==b&&k(),f},boxSizingReliable:function(){return null==b&&k(),e},pixelMarginRight:function(){return null==b&&k(),c},pixelPosition:function(){return null==b&&k(),b},reliableMarginRight:function(){return null==b&&k(),g},reliableMarginLeft:function(){return null==b&&k(),h}});function k(){var k,l,m=d.documentElement;m.appendChild(i),j.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",b=e=h=!1,c=g=!0,a.getComputedStyle&&(l=a.getComputedStyle(j),b="1%"!==(l||{}).top,h="2px"===(l||{}).marginLeft,e="4px"===(l||{width:"4px"}).width,j.style.marginRight="50%",c="4px"===(l||{marginRight:"4px"}).marginRight,k=j.appendChild(d.createElement("div")),k.style.cssText=j.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",k.style.marginRight=k.style.width="0",j.style.width="1px",g=!parseFloat((a.getComputedStyle(k)||{}).marginRight),j.removeChild(k)),j.style.display="none",f=0===j.getClientRects().length,f&&(j.style.display="",j.innerHTML="<table><tr><td></td><td>t</td></tr></table>",k=j.getElementsByTagName("td"),k[0].style.cssText="margin:0;border:0;padding:0;display:none",f=0===k[0].offsetHeight,f&&(k[0].style.display="",k[1].style.display="none",f=0===k[0].offsetHeight)),m.removeChild(i)}}}();var Ra,Sa,Ta=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ra=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Oa.test(g)&&Na.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0===g?g:g+""}):Qa.currentStyle&&(Ra=function(a){return a.currentStyle},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Oa.test(g)&&!Ta.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Ua(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Va=/alpha\([^)]*\)/i,Wa=/opacity\s*=\s*([^)]*)/i,Xa=/^(none|table(?!-c[ea]).+)/,Ya=new RegExp("^("+T+")(.*)$","i"),Za={position:"absolute",visibility:"hidden",display:"block"},$a={letterSpacing:"0",fontWeight:"400"},_a=["Webkit","O","Moz","ms"],ab=d.createElement("div").style;function bb(a){if(a in ab)return a;var b=a.charAt(0).toUpperCase()+a.slice(1),c=_a.length;while(c--)if(a=_a[c]+b,a in ab)return a}function cb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&W(d)&&(f[g]=n._data(d,"olddisplay",Ma(d.nodeName)))):(e=W(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function db(a,b,c){var d=Ya.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function eb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+V[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+V[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+V[f]+"Width",!0,e))):(g+=n.css(a,"padding"+V[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+V[f]+"Width",!0,e)));return g}function fb(b,c,e){var f=!0,g="width"===c?b.offsetWidth:b.offsetHeight,h=Ra(b),i=l.boxSizing&&"border-box"===n.css(b,"boxSizing",!1,h);if(d.msFullscreenElement&&a.top!==a&&b.getClientRects().length&&(g=Math.round(100*b.getBoundingClientRect()[c])),0>=g||null==g){if(g=Sa(b,c,h),(0>g||null==g)&&(g=b.style[c]),Oa.test(g))return g;f=i&&(l.boxSizingReliable()||g===b.style[c]),g=parseFloat(g)||0}return g+eb(b,c,e||(i?"border":"content"),f,h)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Sa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=U.exec(c))&&e[1]&&(c=X(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Sa(a,b,d)),"normal"===f&&b in $a&&(f=$a[b]),""===c||c?(e=parseFloat(f),c===!0||isFinite(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Xa.test(n.css(a,"display"))&&0===a.offsetWidth?Pa(a,Za,function(){return fb(a,b,d)}):fb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ra(a);return db(a,c,d?eb(a,b,d,l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Wa.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Va,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Va.test(f)?f.replace(Va,e):f+" "+e)}}),n.cssHooks.marginRight=Ua(l.reliableMarginRight,function(a,b){return b?Pa(a,{display:"inline-block"},Sa,[a,"marginRight"]):void 0}),n.cssHooks.marginLeft=Ua(l.reliableMarginLeft,function(a,b){
return b?(parseFloat(Sa(a,"marginLeft"))||(n.contains(a.ownerDocument,a)?a.getBoundingClientRect().left-Pa(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}):0))+"px":void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+V[d]+b]=f[d]||f[d-2]||f[0];return e}},Na.test(a)||(n.cssHooks[a+b].set=db)}),n.fn.extend({css:function(a,b){return Y(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ra(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return cb(this,!0)},hide:function(){return cb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){W(this)?n(this).show():n(this).hide()})}});function gb(a,b,c,d,e){return new gb.prototype.init(a,b,c,d,e)}n.Tween=gb,gb.prototype={constructor:gb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=gb.propHooks[this.prop];return a&&a.get?a.get(this):gb.propHooks._default.get(this)},run:function(a){var b,c=gb.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):gb.propHooks._default.set(this),this}},gb.prototype.init.prototype=gb.prototype,gb.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},gb.propHooks.scrollTop=gb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=gb.prototype.init,n.fx.step={};var hb,ib,jb=/^(?:toggle|show|hide)$/,kb=/queueHooks$/;function lb(){return a.setTimeout(function(){hb=void 0}),hb=n.now()}function mb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=V[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function nb(a,b,c){for(var d,e=(qb.tweeners[b]||[]).concat(qb.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ob(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&W(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k="none"===j?n._data(a,"olddisplay")||Ma(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==Ma(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],jb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(o))"inline"===("none"===j?Ma(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=nb(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function pb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function qb(a,b,c){var d,e,f=0,g=qb.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=hb||lb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:hb||lb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(pb(k,j.opts.specialEasing);g>f;f++)if(d=qb.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,nb,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(qb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return X(c.elem,a,U.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],qb.tweeners[c]=qb.tweeners[c]||[],qb.tweeners[c].unshift(b)},prefilters:[ob],prefilter:function(a,b){b?qb.prefilters.unshift(a):qb.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(W).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=qb(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&kb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(mb(b,!0),a,d,e)}}),n.each({slideDown:mb("show"),slideUp:mb("hide"),slideToggle:mb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(hb=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),hb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ib||(ib=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(ib),ib=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a,b=d.createElement("input"),c=d.createElement("div"),e=d.createElement("select"),f=e.appendChild(d.createElement("option"));c=d.createElement("div"),c.setAttribute("className","t"),c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],b.setAttribute("type","checkbox"),c.appendChild(b),a=c.getElementsByTagName("a")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==c.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=f.selected,l.enctype=!!d.createElement("form").enctype,e.disabled=!0,l.optDisabled=!f.disabled,b=d.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value}();var rb=/\r/g,sb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(sb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>-1)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var tb,ub,vb=n.expr.attrHandle,wb=/^(?:checked|selected)$/i,xb=l.getSetAttribute,yb=l.input;n.fn.extend({attr:function(a,b){return Y(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ub:tb)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?yb&&xb||!wb.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(xb?c:d)}}),ub={set:function(a,b,c){return b===!1?n.removeAttr(a,c):yb&&xb||!wb.test(c)?a.setAttribute(!xb&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=vb[b]||n.find.attr;yb&&xb||!wb.test(b)?vb[b]=function(a,b,d){var e,f;return d||(f=vb[b],vb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,vb[b]=f),e}:vb[b]=function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),yb&&xb||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):tb&&tb.set(a,b,c)}}),xb||(tb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},vb.id=vb.name=vb.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:tb.set},n.attrHooks.contenteditable={set:function(a,b,c){tb.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var zb=/^(?:input|select|textarea|button|object)$/i,Ab=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return Y(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):zb.test(a.nodeName)||Ab.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var Bb=/[\t\r\n\f]/g;function Cb(a){return n.attr(a,"class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,Cb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,Cb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,Cb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=Cb(this),b&&n._data(this,"__className__",b),n.attr(this,"class",b||a===!1?"":n._data(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+Cb(c)+" ").replace(Bb," ").indexOf(b)>-1)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Db=a.location,Eb=n.now(),Fb=/\?/,Gb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(Gb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new a.DOMParser,c=d.parseFromString(b,"text/xml")):(c=new a.ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var Hb=/#.*$/,Ib=/([?&])_=[^&]*/,Jb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Kb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Lb=/^(?:GET|HEAD)$/,Mb=/^\/\//,Nb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ob={},Pb={},Qb="*/".concat("*"),Rb=Db.href,Sb=Nb.exec(Rb.toLowerCase())||[];function Tb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Ub(a,b,c,d){var e={},f=a===Pb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Vb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Wb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Xb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Rb,type:"GET",isLocal:Kb.test(Sb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Qb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Vb(Vb(a,n.ajaxSettings),b):Vb(n.ajaxSettings,a)},ajaxPrefilter:Tb(Ob),ajaxTransport:Tb(Pb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var d,e,f,g,h,i,j,k,l=n.ajaxSetup({},c),m=l.context||l,o=l.context&&(m.nodeType||m.jquery)?n(m):n.event,p=n.Deferred(),q=n.Callbacks("once memory"),r=l.statusCode||{},s={},t={},u=0,v="canceled",w={readyState:0,getResponseHeader:function(a){var b;if(2===u){if(!k){k={};while(b=Jb.exec(g))k[b[1].toLowerCase()]=b[2]}b=k[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===u?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return u||(a=t[c]=t[c]||a,s[a]=b),this},overrideMimeType:function(a){return u||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>u)for(b in a)r[b]=[r[b],a[b]];else w.always(a[w.status]);return this},abort:function(a){var b=a||v;return j&&j.abort(b),y(0,b),this}};if(p.promise(w).complete=q.add,w.success=w.done,w.error=w.fail,l.url=((b||l.url||Rb)+"").replace(Hb,"").replace(Mb,Sb[1]+"//"),l.type=c.method||c.type||l.method||l.type,l.dataTypes=n.trim(l.dataType||"*").toLowerCase().match(G)||[""],null==l.crossDomain&&(d=Nb.exec(l.url.toLowerCase()),l.crossDomain=!(!d||d[1]===Sb[1]&&d[2]===Sb[2]&&(d[3]||("http:"===d[1]?"80":"443"))===(Sb[3]||("http:"===Sb[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=n.param(l.data,l.traditional)),Ub(Ob,l,c,w),2===u)return w;i=n.event&&l.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!Lb.test(l.type),f=l.url,l.hasContent||(l.data&&(f=l.url+=(Fb.test(f)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=Ib.test(f)?f.replace(Ib,"$1_="+Eb++):f+(Fb.test(f)?"&":"?")+"_="+Eb++)),l.ifModified&&(n.lastModified[f]&&w.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&w.setRequestHeader("If-None-Match",n.etag[f])),(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&w.setRequestHeader("Content-Type",l.contentType),w.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+Qb+"; q=0.01":""):l.accepts["*"]);for(e in l.headers)w.setRequestHeader(e,l.headers[e]);if(l.beforeSend&&(l.beforeSend.call(m,w,l)===!1||2===u))return w.abort();v="abort";for(e in{success:1,error:1,complete:1})w[e](l[e]);if(j=Ub(Pb,l,c,w)){if(w.readyState=1,i&&o.trigger("ajaxSend",[w,l]),2===u)return w;l.async&&l.timeout>0&&(h=a.setTimeout(function(){w.abort("timeout")},l.timeout));try{u=1,j.send(s,y)}catch(x){if(!(2>u))throw x;y(-1,x)}}else y(-1,"No Transport");function y(b,c,d,e){var k,s,t,v,x,y=c;2!==u&&(u=2,h&&a.clearTimeout(h),j=void 0,g=e||"",w.readyState=b>0?4:0,k=b>=200&&300>b||304===b,d&&(v=Wb(l,w,d)),v=Xb(l,v,w,k),k?(l.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(n.lastModified[f]=x),x=w.getResponseHeader("etag"),x&&(n.etag[f]=x)),204===b||"HEAD"===l.type?y="nocontent":304===b?y="notmodified":(y=v.state,s=v.data,t=v.error,k=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),w.status=b,w.statusText=(c||y)+"",k?p.resolveWith(m,[s,y,w]):p.rejectWith(m,[w,y,t]),w.statusCode(r),r=void 0,i&&o.trigger(k?"ajaxSuccess":"ajaxError",[w,l,k?s:t]),q.fireWith(m,[w,y]),i&&(o.trigger("ajaxComplete",[w,l]),--n.active||n.event.trigger("ajaxStop")))}return w},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}});function Yb(a){return a.style&&a.style.display||n.css(a,"display")}function Zb(a){while(a&&1===a.nodeType){if("none"===Yb(a)||"hidden"===a.type)return!0;a=a.parentNode}return!1}n.expr.filters.hidden=function(a){return l.reliableHiddenOffsets()?a.offsetWidth<=0&&a.offsetHeight<=0&&!a.getClientRects().length:Zb(a)},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var $b=/%20/g,_b=/\[\]$/,ac=/\r?\n/g,bc=/^(?:submit|button|image|reset|file)$/i,cc=/^(?:input|select|textarea|keygen)/i;function dc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||_b.test(a)?d(a,e):dc(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)dc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)dc(c,a[c],b,e);return d.join("&").replace($b,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&cc.test(this.nodeName)&&!bc.test(a)&&(this.checked||!Z.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(ac,"\r\n")}}):{name:b.name,value:c.replace(ac,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return this.isLocal?ic():d.documentMode>8?hc():/^(get|post|head|put|delete|options)$/i.test(this.type)&&hc()||ic()}:hc;var ec=0,fc={},gc=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in fc)fc[a](void 0,!0)}),l.cors=!!gc&&"withCredentials"in gc,gc=l.ajax=!!gc,gc&&n.ajaxTransport(function(b){if(!b.crossDomain||l.cors){var c;return{send:function(d,e){var f,g=b.xhr(),h=++ec;if(g.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(f in b.xhrFields)g[f]=b.xhrFields[f];b.mimeType&&g.overrideMimeType&&g.overrideMimeType(b.mimeType),b.crossDomain||d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest");for(f in d)void 0!==d[f]&&g.setRequestHeader(f,d[f]+"");g.send(b.hasContent&&b.data||null),c=function(a,d){var f,i,j;if(c&&(d||4===g.readyState))if(delete fc[h],c=void 0,g.onreadystatechange=n.noop,d)4!==g.readyState&&g.abort();else{j={},f=g.status,"string"==typeof g.responseText&&(j.text=g.responseText);try{i=g.statusText}catch(k){i=""}f||!b.isLocal||b.crossDomain?1223===f&&(f=204):f=j.text?200:404}j&&e(f,i,j,g.getAllResponseHeaders())},b.async?4===g.readyState?a.setTimeout(c):g.onreadystatechange=fc[h]=c:c()},abort:function(){c&&c(void 0,!0)}}}});function hc(){try{return new a.XMLHttpRequest}catch(b){}}function ic(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=d.head||n("head")[0]||d.documentElement;return{send:function(e,f){b=d.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||f(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var jc=[],kc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=jc.pop()||n.expando+"_"+Eb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(kc.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&kc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(kc,"$1"+e):b.jsonp!==!1&&(b.url+=(Fb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,jc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ja([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var lc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&lc)return lc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h,a.length)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function mc(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?("undefined"!=typeof e.getBoundingClientRect&&(d=e.getBoundingClientRect()),c=mc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Qa})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return Y(this,function(a,d,e){var f=mc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ua(l.pixelPosition,function(a,c){return c?(c=Sa(a,b),Oa.test(c)?n(a).position()[b]+"px":c):void 0;
})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return Y(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var nc=a.jQuery,oc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=oc),b&&a.jQuery===n&&(a.jQuery=nc),n},b||(a.jQuery=a.$=n),n});
(function($, undefined) {

/**
 * Unobtrusive scripting adapter for jQuery
 * https://github.com/rails/jquery-ujs
 *
 * Requires jQuery 1.8.0 or later.
 *
 * Released under the MIT license
 *
 */

  // Cut down on the number of issues from people inadvertently including jquery_ujs twice
  // by detecting and raising an error when it happens.
  'use strict';

  if ( $.rails !== undefined ) {
    $.error('jquery-ujs has already been loaded!');
  }

  // Shorthand to make it a little easier to call public rails functions from within rails.js
  var rails;
  var $document = $(document);

  $.rails = rails = {
    // Link elements bound by jquery-ujs
    linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]',

    // Button elements bound by jquery-ujs
    buttonClickSelector: 'button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)',

    // Select elements bound by jquery-ujs
    inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',

    // Form elements bound by jquery-ujs
    formSubmitSelector: 'form',

    // Form input elements bound by jquery-ujs
    formInputClickSelector: 'form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])',

    // Form input elements disabled during form submission
    disableSelector: 'input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled',

    // Form input elements re-enabled after form submission
    enableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled',

    // Form required input elements
    requiredInputSelector: 'input[name][required]:not([disabled]), textarea[name][required]:not([disabled])',

    // Form file input elements
    fileInputSelector: 'input[type=file]:not([disabled])',

    // Link onClick disable selector with possible reenable after remote submission
    linkDisableSelector: 'a[data-disable-with], a[data-disable]',

    // Button onClick disable selector with possible reenable after remote submission
    buttonDisableSelector: 'button[data-remote][data-disable-with], button[data-remote][data-disable]',

    // Up-to-date Cross-Site Request Forgery token
    csrfToken: function() {
     return $('meta[name=csrf-token]').attr('content');
    },

    // URL param that must contain the CSRF token
    csrfParam: function() {
     return $('meta[name=csrf-param]').attr('content');
    },

    // Make sure that every Ajax request sends the CSRF token
    CSRFProtection: function(xhr) {
      var token = rails.csrfToken();
      if (token) xhr.setRequestHeader('X-CSRF-Token', token);
    },

    // Make sure that all forms have actual up-to-date tokens (cached forms contain old ones)
    refreshCSRFTokens: function(){
      $('form input[name="' + rails.csrfParam() + '"]').val(rails.csrfToken());
    },

    // Triggers an event on an element and returns false if the event result is false
    fire: function(obj, name, data) {
      var event = $.Event(name);
      obj.trigger(event, data);
      return event.result !== false;
    },

    // Default confirm dialog, may be overridden with custom confirm dialog in $.rails.confirm
    confirm: function(message) {
      return confirm(message);
    },

    // Default ajax function, may be overridden with custom function in $.rails.ajax
    ajax: function(options) {
      return $.ajax(options);
    },

    // Default way to get an element's href. May be overridden at $.rails.href.
    href: function(element) {
      return element[0].href;
    },

    // Checks "data-remote" if true to handle the request through a XHR request.
    isRemote: function(element) {
      return element.data('remote') !== undefined && element.data('remote') !== false;
    },

    // Submits "remote" forms and links with ajax
    handleRemote: function(element) {
      var method, url, data, withCredentials, dataType, options;

      if (rails.fire(element, 'ajax:before')) {
        withCredentials = element.data('with-credentials') || null;
        dataType = element.data('type') || ($.ajaxSettings && $.ajaxSettings.dataType);

        if (element.is('form')) {
          method = element.data('ujs:submit-button-formmethod') || element.attr('method');
          url = element.data('ujs:submit-button-formaction') || element.attr('action');
          data = $(element[0]).serializeArray();
          // memoized value from clicked submit button
          var button = element.data('ujs:submit-button');
          if (button) {
            data.push(button);
            element.data('ujs:submit-button', null);
          }
          element.data('ujs:submit-button-formmethod', null);
          element.data('ujs:submit-button-formaction', null);
        } else if (element.is(rails.inputChangeSelector)) {
          method = element.data('method');
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + '&' + element.data('params');
        } else if (element.is(rails.buttonClickSelector)) {
          method = element.data('method') || 'get';
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + '&' + element.data('params');
        } else {
          method = element.data('method');
          url = rails.href(element);
          data = element.data('params') || null;
        }

        options = {
          type: method || 'GET', data: data, dataType: dataType,
          // stopping the "ajax:beforeSend" event will cancel the ajax request
          beforeSend: function(xhr, settings) {
            if (settings.dataType === undefined) {
              xhr.setRequestHeader('accept', '*/*;q=0.5, ' + settings.accepts.script);
            }
            if (rails.fire(element, 'ajax:beforeSend', [xhr, settings])) {
              element.trigger('ajax:send', xhr);
            } else {
              return false;
            }
          },
          success: function(data, status, xhr) {
            element.trigger('ajax:success', [data, status, xhr]);
          },
          complete: function(xhr, status) {
            element.trigger('ajax:complete', [xhr, status]);
          },
          error: function(xhr, status, error) {
            element.trigger('ajax:error', [xhr, status, error]);
          },
          crossDomain: rails.isCrossDomain(url)
        };

        // There is no withCredentials for IE6-8 when
        // "Enable native XMLHTTP support" is disabled
        if (withCredentials) {
          options.xhrFields = {
            withCredentials: withCredentials
          };
        }

        // Only pass url to `ajax` options if not blank
        if (url) { options.url = url; }

        return rails.ajax(options);
      } else {
        return false;
      }
    },

    // Determines if the request is a cross domain request.
    isCrossDomain: function(url) {
      var originAnchor = document.createElement('a');
      originAnchor.href = location.href;
      var urlAnchor = document.createElement('a');

      try {
        urlAnchor.href = url;
        // This is a workaround to a IE bug.
        urlAnchor.href = urlAnchor.href;

        // If URL protocol is false or is a string containing a single colon
        // *and* host are false, assume it is not a cross-domain request
        // (should only be the case for IE7 and IE compatibility mode).
        // Otherwise, evaluate protocol and host of the URL against the origin
        // protocol and host.
        return !(((!urlAnchor.protocol || urlAnchor.protocol === ':') && !urlAnchor.host) ||
          (originAnchor.protocol + '//' + originAnchor.host ===
            urlAnchor.protocol + '//' + urlAnchor.host));
      } catch (e) {
        // If there is an error parsing the URL, assume it is crossDomain.
        return true;
      }
    },

    // Handles "data-method" on links such as:
    // <a href="/users/5" data-method="delete" rel="nofollow" data-confirm="Are you sure?">Delete</a>
    handleMethod: function(link) {
      var href = rails.href(link),
        method = link.data('method'),
        target = link.attr('target'),
        csrfToken = rails.csrfToken(),
        csrfParam = rails.csrfParam(),
        form = $('<form method="post" action="' + href + '"></form>'),
        metadataInput = '<input name="_method" value="' + method + '" type="hidden" />';

      if (csrfParam !== undefined && csrfToken !== undefined && !rails.isCrossDomain(href)) {
        metadataInput += '<input name="' + csrfParam + '" value="' + csrfToken + '" type="hidden" />';
      }

      if (target) { form.attr('target', target); }

      form.hide().append(metadataInput).appendTo('body');
      form.submit();
    },

    // Helper function that returns form elements that match the specified CSS selector
    // If form is actually a "form" element this will return associated elements outside the from that have
    // the html form attribute set
    formElements: function(form, selector) {
      return form.is('form') ? $(form[0].elements).filter(selector) : form.find(selector);
    },

    /* Disables form elements:
      - Caches element value in 'ujs:enable-with' data store
      - Replaces element text with value of 'data-disable-with' attribute
      - Sets disabled property to true
    */
    disableFormElements: function(form) {
      rails.formElements(form, rails.disableSelector).each(function() {
        rails.disableFormElement($(this));
      });
    },

    disableFormElement: function(element) {
      var method, replacement;

      method = element.is('button') ? 'html' : 'val';
      replacement = element.data('disable-with');

      if (replacement !== undefined) {
        element.data('ujs:enable-with', element[method]());
        element[method](replacement);
      }

      element.prop('disabled', true);
      element.data('ujs:disabled', true);
    },

    /* Re-enables disabled form elements:
      - Replaces element text with cached value from 'ujs:enable-with' data store (created in `disableFormElements`)
      - Sets disabled property to false
    */
    enableFormElements: function(form) {
      rails.formElements(form, rails.enableSelector).each(function() {
        rails.enableFormElement($(this));
      });
    },

    enableFormElement: function(element) {
      var method = element.is('button') ? 'html' : 'val';
      if (element.data('ujs:enable-with') !== undefined) {
        element[method](element.data('ujs:enable-with'));
        element.removeData('ujs:enable-with'); // clean up cache
      }
      element.prop('disabled', false);
      element.removeData('ujs:disabled');
    },

   /* For 'data-confirm' attribute:
      - Fires `confirm` event
      - Shows the confirmation dialog
      - Fires the `confirm:complete` event

      Returns `true` if no function stops the chain and user chose yes; `false` otherwise.
      Attaching a handler to the element's `confirm` event that returns a `falsy` value cancels the confirmation dialog.
      Attaching a handler to the element's `confirm:complete` event that returns a `falsy` value makes this function
      return false. The `confirm:complete` event is fired whether or not the user answered true or false to the dialog.
   */
    allowAction: function(element) {
      var message = element.data('confirm'),
          answer = false, callback;
      if (!message) { return true; }

      if (rails.fire(element, 'confirm')) {
        try {
          answer = rails.confirm(message);
        } catch (e) {
          (console.error || console.log).call(console, e.stack || e);
        }
        callback = rails.fire(element, 'confirm:complete', [answer]);
      }
      return answer && callback;
    },

    // Helper function which checks for blank inputs in a form that match the specified CSS selector
    blankInputs: function(form, specifiedSelector, nonBlank) {
      var foundInputs = $(),
        input,
        valueToCheck,
        radiosForNameWithNoneSelected,
        radioName,
        selector = specifiedSelector || 'input,textarea',
        requiredInputs = form.find(selector),
        checkedRadioButtonNames = {};

      requiredInputs.each(function() {
        input = $(this);
        if (input.is('input[type=radio]')) {

          // Don't count unchecked required radio as blank if other radio with same name is checked,
          // regardless of whether same-name radio input has required attribute or not. The spec
          // states https://www.w3.org/TR/html5/forms.html#the-required-attribute
          radioName = input.attr('name');

          // Skip if we've already seen the radio with this name.
          if (!checkedRadioButtonNames[radioName]) {

            // If none checked
            if (form.find('input[type=radio]:checked[name="' + radioName + '"]').length === 0) {
              radiosForNameWithNoneSelected = form.find(
                'input[type=radio][name="' + radioName + '"]');
              foundInputs = foundInputs.add(radiosForNameWithNoneSelected);
            }

            // We only need to check each name once.
            checkedRadioButtonNames[radioName] = radioName;
          }
        } else {
          valueToCheck = input.is('input[type=checkbox],input[type=radio]') ? input.is(':checked') : !!input.val();
          if (valueToCheck === nonBlank) {
            foundInputs = foundInputs.add(input);
          }
        }
      });
      return foundInputs.length ? foundInputs : false;
    },

    // Helper function which checks for non-blank inputs in a form that match the specified CSS selector
    nonBlankInputs: function(form, specifiedSelector) {
      return rails.blankInputs(form, specifiedSelector, true); // true specifies nonBlank
    },

    // Helper function, needed to provide consistent behavior in IE
    stopEverything: function(e) {
      $(e.target).trigger('ujs:everythingStopped');
      e.stopImmediatePropagation();
      return false;
    },

    //  Replace element's html with the 'data-disable-with' after storing original html
    //  and prevent clicking on it
    disableElement: function(element) {
      var replacement = element.data('disable-with');

      if (replacement !== undefined) {
        element.data('ujs:enable-with', element.html()); // store enabled state
        element.html(replacement);
      }

      element.bind('click.railsDisable', function(e) { // prevent further clicking
        return rails.stopEverything(e);
      });
      element.data('ujs:disabled', true);
    },

    // Restore element to its original state which was disabled by 'disableElement' above
    enableElement: function(element) {
      if (element.data('ujs:enable-with') !== undefined) {
        element.html(element.data('ujs:enable-with')); // set to old enabled state
        element.removeData('ujs:enable-with'); // clean up cache
      }
      element.unbind('click.railsDisable'); // enable element
      element.removeData('ujs:disabled');
    }
  };

  if (rails.fire($document, 'rails:attachBindings')) {

    $.ajaxPrefilter(function(options, originalOptions, xhr){ if ( !options.crossDomain ) { rails.CSRFProtection(xhr); }});

    // This event works the same as the load event, except that it fires every
    // time the page is loaded.
    //
    // See https://github.com/rails/jquery-ujs/issues/357
    // See https://developer.mozilla.org/en-US/docs/Using_Firefox_1.5_caching
    $(window).on('pageshow.rails', function () {
      $($.rails.enableSelector).each(function () {
        var element = $(this);

        if (element.data('ujs:disabled')) {
          $.rails.enableFormElement(element);
        }
      });

      $($.rails.linkDisableSelector).each(function () {
        var element = $(this);

        if (element.data('ujs:disabled')) {
          $.rails.enableElement(element);
        }
      });
    });

    $document.delegate(rails.linkDisableSelector, 'ajax:complete', function() {
        rails.enableElement($(this));
    });

    $document.delegate(rails.buttonDisableSelector, 'ajax:complete', function() {
        rails.enableFormElement($(this));
    });

    $document.delegate(rails.linkClickSelector, 'click.rails', function(e) {
      var link = $(this), method = link.data('method'), data = link.data('params'), metaClick = e.metaKey || e.ctrlKey;
      if (!rails.allowAction(link)) return rails.stopEverything(e);

      if (!metaClick && link.is(rails.linkDisableSelector)) rails.disableElement(link);

      if (rails.isRemote(link)) {
        if (metaClick && (!method || method === 'GET') && !data) { return true; }

        var handleRemote = rails.handleRemote(link);
        // Response from rails.handleRemote() will either be false or a deferred object promise.
        if (handleRemote === false) {
          rails.enableElement(link);
        } else {
          handleRemote.fail( function() { rails.enableElement(link); } );
        }
        return false;

      } else if (method) {
        rails.handleMethod(link);
        return false;
      }
    });

    $document.delegate(rails.buttonClickSelector, 'click.rails', function(e) {
      var button = $(this);

      if (!rails.allowAction(button) || !rails.isRemote(button)) return rails.stopEverything(e);

      if (button.is(rails.buttonDisableSelector)) rails.disableFormElement(button);

      var handleRemote = rails.handleRemote(button);
      // Response from rails.handleRemote() will either be false or a deferred object promise.
      if (handleRemote === false) {
        rails.enableFormElement(button);
      } else {
        handleRemote.fail( function() { rails.enableFormElement(button); } );
      }
      return false;
    });

    $document.delegate(rails.inputChangeSelector, 'change.rails', function(e) {
      var link = $(this);
      if (!rails.allowAction(link) || !rails.isRemote(link)) return rails.stopEverything(e);

      rails.handleRemote(link);
      return false;
    });

    $document.delegate(rails.formSubmitSelector, 'submit.rails', function(e) {
      var form = $(this),
        remote = rails.isRemote(form),
        blankRequiredInputs,
        nonBlankFileInputs;

      if (!rails.allowAction(form)) return rails.stopEverything(e);

      // Skip other logic when required values are missing or file upload is present
      if (form.attr('novalidate') === undefined) {
        if (form.data('ujs:formnovalidate-button') === undefined) {
          blankRequiredInputs = rails.blankInputs(form, rails.requiredInputSelector, false);
          if (blankRequiredInputs && rails.fire(form, 'ajax:aborted:required', [blankRequiredInputs])) {
            return rails.stopEverything(e);
          }
        } else {
          // Clear the formnovalidate in case the next button click is not on a formnovalidate button
          // Not strictly necessary to do here, since it is also reset on each button click, but just to be certain
          form.data('ujs:formnovalidate-button', undefined);
        }
      }

      if (remote) {
        nonBlankFileInputs = rails.nonBlankInputs(form, rails.fileInputSelector);
        if (nonBlankFileInputs) {
          // Slight timeout so that the submit button gets properly serialized
          // (make it easy for event handler to serialize form without disabled values)
          setTimeout(function(){ rails.disableFormElements(form); }, 13);
          var aborted = rails.fire(form, 'ajax:aborted:file', [nonBlankFileInputs]);

          // Re-enable form elements if event bindings return false (canceling normal form submission)
          if (!aborted) { setTimeout(function(){ rails.enableFormElements(form); }, 13); }

          return aborted;
        }

        rails.handleRemote(form);
        return false;

      } else {
        // Slight timeout so that the submit button gets properly serialized
        setTimeout(function(){ rails.disableFormElements(form); }, 13);
      }
    });

    $document.delegate(rails.formInputClickSelector, 'click.rails', function(event) {
      var button = $(this);

      if (!rails.allowAction(button)) return rails.stopEverything(event);

      // Register the pressed submit button
      var name = button.attr('name'),
        data = name ? {name:name, value:button.val()} : null;

      var form = button.closest('form');
      if (form.length === 0) {
        form = $('#' + button.attr('form'));
      }
      form.data('ujs:submit-button', data);

      // Save attributes from button
      form.data('ujs:formnovalidate-button', button.attr('formnovalidate'));
      form.data('ujs:submit-button-formaction', button.attr('formaction'));
      form.data('ujs:submit-button-formmethod', button.attr('formmethod'));
    });

    $document.delegate(rails.formSubmitSelector, 'ajax:send.rails', function(event) {
      if (this === event.target) rails.disableFormElements($(this));
    });

    $document.delegate(rails.formSubmitSelector, 'ajax:complete.rails', function(event) {
      if (this === event.target) rails.enableFormElements($(this));
    });

    $(function(){
      rails.refreshCSRFTokens();
    });
  }

})( jQuery );
/*!
 DataTables 1.10.12
 Â©2008-2015 SpryMedia Ltd - datatables.net/license
*/

(function(h) {
    "function" === typeof define && define.amd ? define(["jquery"], function(D) {
        return h(D, window, document)
    }) : "object" === typeof exports ? module.exports = function(D, I) {
        D || (D = window);
        I || (I = "undefined" !== typeof window ? require("jquery") : require("jquery")(D));
        return h(I, D, D.document)
    } : h(jQuery, window, document)
})(function(h, D, I, k) {
    function X(a) {
        var b, c, d = {};
        h.each(a, function(e) {
            if ((b = e.match(/^([^A-Z]+?)([A-Z])/)) && -1 !== "a aa ai ao as b fn i m o s ".indexOf(b[1] + " ")) c = e.replace(b[0], b[2].toLowerCase()),
                d[c] = e, "o" === b[1] && X(a[e])
        });
        a._hungarianMap = d
    }

    function K(a, b, c) {
        a._hungarianMap || X(a);
        var d;
        h.each(b, function(e) {
            d = a._hungarianMap[e];
            if (d !== k && (c || b[d] === k)) "o" === d.charAt(0) ? (b[d] || (b[d] = {}), h.extend(!0, b[d], b[e]), K(a[d], b[d], c)) : b[d] = b[e]
        })
    }

    function Da(a) {
        var b = m.defaults.oLanguage,
            c = a.sZeroRecords;
        !a.sEmptyTable && (c && "No data available in table" === b.sEmptyTable) && E(a, a, "sZeroRecords", "sEmptyTable");
        !a.sLoadingRecords && (c && "Loading..." === b.sLoadingRecords) && E(a, a, "sZeroRecords", "sLoadingRecords");
        a.sInfoThousands && (a.sThousands = a.sInfoThousands);
        (a = a.sDecimal) && db(a)
    }

    function eb(a) {
        A(a, "ordering", "bSort");
        A(a, "orderMulti", "bSortMulti");
        A(a, "orderClasses", "bSortClasses");
        A(a, "orderCellsTop", "bSortCellsTop");
        A(a, "order", "aaSorting");
        A(a, "orderFixed", "aaSortingFixed");
        A(a, "paging", "bPaginate");
        A(a, "pagingType", "sPaginationType");
        A(a, "pageLength", "iDisplayLength");
        A(a, "searching", "bFilter");
        "boolean" === typeof a.sScrollX && (a.sScrollX = a.sScrollX ? "100%" : "");
        "boolean" === typeof a.scrollX && (a.scrollX =
            a.scrollX ? "100%" : "");
        if (a = a.aoSearchCols)
            for (var b = 0, c = a.length; b < c; b++) a[b] && K(m.models.oSearch, a[b])
    }

    function fb(a) {
        A(a, "orderable", "bSortable");
        A(a, "orderData", "aDataSort");
        A(a, "orderSequence", "asSorting");
        A(a, "orderDataType", "sortDataType");
        var b = a.aDataSort;
        b && !h.isArray(b) && (a.aDataSort = [b])
    }

    function gb(a) {
        if (!m.__browser) {
            var b = {};
            m.__browser = b;
            var c = h("<div/>").css({
                    position: "fixed",
                    top: 0,
                    left: 0,
                    height: 1,
                    width: 1,
                    overflow: "hidden"
                }).append(h("<div/>").css({
                    position: "absolute",
                    top: 1,
                    left: 1,
                    width: 100,
                    overflow: "scroll"
                }).append(h("<div/>").css({
                    width: "100%",
                    height: 10
                }))).appendTo("body"),
                d = c.children(),
                e = d.children();
            b.barWidth = d[0].offsetWidth - d[0].clientWidth;
            b.bScrollOversize = 100 === e[0].offsetWidth && 100 !== d[0].clientWidth;
            b.bScrollbarLeft = 1 !== Math.round(e.offset().left);
            b.bBounding = c[0].getBoundingClientRect().width ? !0 : !1;
            c.remove()
        }
        h.extend(a.oBrowser, m.__browser);
        a.oScroll.iBarWidth = m.__browser.barWidth
    }

    function hb(a, b, c, d, e, f) {
        var g, j = !1;
        c !== k && (g = c, j = !0);
        for (; d !== e;) a.hasOwnProperty(d) &&
            (g = j ? b(g, a[d], d, a) : a[d], j = !0, d += f);
        return g
    }

    function Ea(a, b) {
        var c = m.defaults.column,
            d = a.aoColumns.length,
            c = h.extend({}, m.models.oColumn, c, {
                nTh: b ? b : I.createElement("th"),
                sTitle: c.sTitle ? c.sTitle : b ? b.innerHTML : "",
                aDataSort: c.aDataSort ? c.aDataSort : [d],
                mData: c.mData ? c.mData : d,
                idx: d
            });
        a.aoColumns.push(c);
        c = a.aoPreSearchCols;
        c[d] = h.extend({}, m.models.oSearch, c[d]);
        ja(a, d, h(b).data())
    }

    function ja(a, b, c) {
        var b = a.aoColumns[b],
            d = a.oClasses,
            e = h(b.nTh);
        if (!b.sWidthOrig) {
            b.sWidthOrig = e.attr("width") || null;
            var f =
                (e.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/);
            f && (b.sWidthOrig = f[1])
        }
        c !== k && null !== c && (fb(c), K(m.defaults.column, c), c.mDataProp !== k && !c.mData && (c.mData = c.mDataProp), c.sType && (b._sManualType = c.sType), c.className && !c.sClass && (c.sClass = c.className), h.extend(b, c), E(b, c, "sWidth", "sWidthOrig"), c.iDataSort !== k && (b.aDataSort = [c.iDataSort]), E(b, c, "aDataSort"));
        var g = b.mData,
            j = Q(g),
            i = b.mRender ? Q(b.mRender) : null,
            c = function(a) {
                return "string" === typeof a && -1 !== a.indexOf("@")
            };
        b._bAttrSrc = h.isPlainObject(g) &&
            (c(g.sort) || c(g.type) || c(g.filter));
        b._setter = null;
        b.fnGetData = function(a, b, c) {
            var d = j(a, b, k, c);
            return i && b ? i(d, b, a, c) : d
        };
        b.fnSetData = function(a, b, c) {
            return R(g)(a, b, c)
        };
        "number" !== typeof g && (a._rowReadObject = !0);
        a.oFeatures.bSort || (b.bSortable = !1, e.addClass(d.sSortableNone));
        a = -1 !== h.inArray("asc", b.asSorting);
        c = -1 !== h.inArray("desc", b.asSorting);
        !b.bSortable || !a && !c ? (b.sSortingClass = d.sSortableNone, b.sSortingClassJUI = "") : a && !c ? (b.sSortingClass = d.sSortableAsc, b.sSortingClassJUI = d.sSortJUIAscAllowed) :
            !a && c ? (b.sSortingClass = d.sSortableDesc, b.sSortingClassJUI = d.sSortJUIDescAllowed) : (b.sSortingClass = d.sSortable, b.sSortingClassJUI = d.sSortJUI)
    }

    function Y(a) {
        if (!1 !== a.oFeatures.bAutoWidth) {
            var b = a.aoColumns;
            Fa(a);
            for (var c = 0, d = b.length; c < d; c++) b[c].nTh.style.width = b[c].sWidth
        }
        b = a.oScroll;
        ("" !== b.sY || "" !== b.sX) && ka(a);
        u(a, null, "column-sizing", [a])
    }

    function Z(a, b) {
        var c = la(a, "bVisible");
        return "number" === typeof c[b] ? c[b] : null
    }

    function $(a, b) {
        var c = la(a, "bVisible"),
            c = h.inArray(b, c);
        return -1 !== c ? c : null
    }

    function aa(a) {
        var b = 0;
        h.each(a.aoColumns, function(a, d) {
            d.bVisible && "none" !== h(d.nTh).css("display") && b++
        });
        return b
    }

    function la(a, b) {
        var c = [];
        h.map(a.aoColumns, function(a, e) {
            a[b] && c.push(e)
        });
        return c
    }

    function Ga(a) {
        var b = a.aoColumns,
            c = a.aoData,
            d = m.ext.type.detect,
            e, f, g, j, i, h, l, q, t;
        e = 0;
        for (f = b.length; e < f; e++)
            if (l = b[e], t = [], !l.sType && l._sManualType) l.sType = l._sManualType;
            else if (!l.sType) {
            g = 0;
            for (j = d.length; g < j; g++) {
                i = 0;
                for (h = c.length; i < h; i++) {
                    t[i] === k && (t[i] = B(a, i, e, "type"));
                    q = d[g](t[i], a);
                    if (!q &&
                        g !== d.length - 1) break;
                    if ("html" === q) break
                }
                if (q) {
                    l.sType = q;
                    break
                }
            }
            l.sType || (l.sType = "string")
        }
    }

    function ib(a, b, c, d) {
        var e, f, g, j, i, n, l = a.aoColumns;
        if (b)
            for (e = b.length - 1; 0 <= e; e--) {
                n = b[e];
                var q = n.targets !== k ? n.targets : n.aTargets;
                h.isArray(q) || (q = [q]);
                f = 0;
                for (g = q.length; f < g; f++)
                    if ("number" === typeof q[f] && 0 <= q[f]) {
                        for (; l.length <= q[f];) Ea(a);
                        d(q[f], n)
                    } else if ("number" === typeof q[f] && 0 > q[f]) d(l.length + q[f], n);
                else if ("string" === typeof q[f]) {
                    j = 0;
                    for (i = l.length; j < i; j++)("_all" == q[f] || h(l[j].nTh).hasClass(q[f])) &&
                        d(j, n)
                }
            }
        if (c) {
            e = 0;
            for (a = c.length; e < a; e++) d(e, c[e])
        }
    }

    function N(a, b, c, d) {
        var e = a.aoData.length,
            f = h.extend(!0, {}, m.models.oRow, {
                src: c ? "dom" : "data",
                idx: e
            });
        f._aData = b;
        a.aoData.push(f);
        for (var g = a.aoColumns, j = 0, i = g.length; j < i; j++) g[j].sType = null;
        a.aiDisplayMaster.push(e);
        b = a.rowIdFn(b);
        b !== k && (a.aIds[b] = f);
        (c || !a.oFeatures.bDeferRender) && Ha(a, e, c, d);
        return e
    }

    function ma(a, b) {
        var c;
        b instanceof h || (b = h(b));
        return b.map(function(b, e) {
            c = Ia(a, e);
            return N(a, c.data, e, c.cells)
        })
    }

    function B(a, b, c, d) {
        var e = a.iDraw,
            f = a.aoColumns[c],
            g = a.aoData[b]._aData,
            j = f.sDefaultContent,
            i = f.fnGetData(g, d, {
                settings: a,
                row: b,
                col: c
            });
        if (i === k) return a.iDrawError != e && null === j && (L(a, 0, "Requested unknown parameter " + ("function" == typeof f.mData ? "{function}" : "'" + f.mData + "'") + " for row " + b + ", column " + c, 4), a.iDrawError = e), j;
        if ((i === g || null === i) && null !== j && d !== k) i = j;
        else if ("function" === typeof i) return i.call(g);
        return null === i && "display" == d ? "" : i
    }

    function jb(a, b, c, d) {
        a.aoColumns[c].fnSetData(a.aoData[b]._aData, d, {
            settings: a,
            row: b,
            col: c
        })
    }

    function Ja(a) {
        return h.map(a.match(/(\\.|[^\.])+/g) || [""], function(a) {
            return a.replace(/\\./g, ".")
        })
    }

    function Q(a) {
        if (h.isPlainObject(a)) {
            var b = {};
            h.each(a, function(a, c) {
                c && (b[a] = Q(c))
            });
            return function(a, c, f, g) {
                var j = b[c] || b._;
                return j !== k ? j(a, c, f, g) : a
            }
        }
        if (null === a) return function(a) {
            return a
        };
        if ("function" === typeof a) return function(b, c, f, g) {
            return a(b, c, f, g)
        };
        if ("string" === typeof a && (-1 !== a.indexOf(".") || -1 !== a.indexOf("[") || -1 !== a.indexOf("("))) {
            var c = function(a, b, f) {
                var g, j;
                if ("" !== f) {
                    j = Ja(f);
                    for (var i = 0, n = j.length; i < n; i++) {
                        f = j[i].match(ba);
                        g = j[i].match(U);
                        if (f) {
                            j[i] = j[i].replace(ba, "");
                            "" !== j[i] && (a = a[j[i]]);
                            g = [];
                            j.splice(0, i + 1);
                            j = j.join(".");
                            if (h.isArray(a)) {
                                i = 0;
                                for (n = a.length; i < n; i++) g.push(c(a[i], b, j))
                            }
                            a = f[0].substring(1, f[0].length - 1);
                            a = "" === a ? g : g.join(a);
                            break
                        } else if (g) {
                            j[i] = j[i].replace(U, "");
                            a = a[j[i]]();
                            continue
                        }
                        if (null === a || a[j[i]] === k) return k;
                        a = a[j[i]]
                    }
                }
                return a
            };
            return function(b, e) {
                return c(b, e, a)
            }
        }
        return function(b) {
            return b[a]
        }
    }

    function R(a) {
        if (h.isPlainObject(a)) return R(a._);
        if (null === a) return function() {};
        if ("function" === typeof a) return function(b, d, e) {
            a(b, "set", d, e)
        };
        if ("string" === typeof a && (-1 !== a.indexOf(".") || -1 !== a.indexOf("[") || -1 !== a.indexOf("("))) {
            var b = function(a, d, e) {
                var e = Ja(e),
                    f;
                f = e[e.length - 1];
                for (var g, j, i = 0, n = e.length - 1; i < n; i++) {
                    g = e[i].match(ba);
                    j = e[i].match(U);
                    if (g) {
                        e[i] = e[i].replace(ba, "");
                        a[e[i]] = [];
                        f = e.slice();
                        f.splice(0, i + 1);
                        g = f.join(".");
                        if (h.isArray(d)) {
                            j = 0;
                            for (n = d.length; j < n; j++) f = {}, b(f, d[j], g), a[e[i]].push(f)
                        } else a[e[i]] = d;
                        return
                    }
                    j && (e[i] = e[i].replace(U,
                        ""), a = a[e[i]](d));
                    if (null === a[e[i]] || a[e[i]] === k) a[e[i]] = {};
                    a = a[e[i]]
                }
                if (f.match(U)) a[f.replace(U, "")](d);
                else a[f.replace(ba, "")] = d
            };
            return function(c, d) {
                return b(c, d, a)
            }
        }
        return function(b, d) {
            b[a] = d
        }
    }

    function Ka(a) {
        return G(a.aoData, "_aData")
    }

    function na(a) {
        a.aoData.length = 0;
        a.aiDisplayMaster.length = 0;
        a.aiDisplay.length = 0;
        a.aIds = {}
    }

    function oa(a, b, c) {
        for (var d = -1, e = 0, f = a.length; e < f; e++) a[e] == b ? d = e : a[e] > b && a[e]--; - 1 != d && c === k && a.splice(d, 1)
    }

    function ca(a, b, c, d) {
        var e = a.aoData[b],
            f, g = function(c, d) {
                for (; c.childNodes.length;) c.removeChild(c.firstChild);
                c.innerHTML = B(a, b, d, "display")
            };
        if ("dom" === c || (!c || "auto" === c) && "dom" === e.src) e._aData = Ia(a, e, d, d === k ? k : e._aData).data;
        else {
            var j = e.anCells;
            if (j)
                if (d !== k) g(j[d], d);
                else {
                    c = 0;
                    for (f = j.length; c < f; c++) g(j[c], c)
                }
        }
        e._aSortData = null;
        e._aFilterData = null;
        g = a.aoColumns;
        if (d !== k) g[d].sType = null;
        else {
            c = 0;
            for (f = g.length; c < f; c++) g[c].sType = null;
            La(a, e)
        }
    }

    function Ia(a, b, c, d) {
        var e = [],
            f = b.firstChild,
            g, j, i = 0,
            n, l = a.aoColumns,
            q = a._rowReadObject,
            d = d !== k ? d : q ? {} : [],
            t = function(a, b) {
                if ("string" === typeof a) {
                    var c = a.indexOf("@"); - 1 !== c && (c = a.substring(c + 1), R(a)(d, b.getAttribute(c)))
                }
            },
            S = function(a) {
                if (c === k || c === i) j = l[i], n = h.trim(a.innerHTML), j && j._bAttrSrc ? (R(j.mData._)(d, n), t(j.mData.sort, a), t(j.mData.type, a), t(j.mData.filter, a)) : q ? (j._setter || (j._setter = R(j.mData)), j._setter(d, n)) : d[i] = n;
                i++
            };
        if (f)
            for (; f;) {
                g = f.nodeName.toUpperCase();
                if ("TD" == g || "TH" == g) S(f), e.push(f);
                f = f.nextSibling
            } else {
                e = b.anCells;
                f = 0;
                for (g = e.length; f < g; f++) S(e[f])
            }
        if (b = b.firstChild ? b : b.nTr)(b = b.getAttribute("id")) && R(a.rowId)(d, b);
        return {
            data: d,
            cells: e
        }
    }

    function Ha(a, b, c, d) {
        var e = a.aoData[b],
            f = e._aData,
            g = [],
            j, i, n, l, q;
        if (null === e.nTr) {
            j = c || I.createElement("tr");
            e.nTr = j;
            e.anCells = g;
            j._DT_RowIndex = b;
            La(a, e);
            l = 0;
            for (q = a.aoColumns.length; l < q; l++) {
                n = a.aoColumns[l];
                i = c ? d[l] : I.createElement(n.sCellType);
                i._DT_CellIndex = {
                    row: b,
                    column: l
                };
                g.push(i);
                if ((!c || n.mRender || n.mData !== l) && (!h.isPlainObject(n.mData) || n.mData._ !== l + ".display")) i.innerHTML = B(a, b, l, "display");
                n.sClass && (i.className += " " + n.sClass);
                n.bVisible && !c ? j.appendChild(i) : !n.bVisible && c && i.parentNode.removeChild(i);
                n.fnCreatedCell && n.fnCreatedCell.call(a.oInstance, i, B(a, b, l), f, b, l)
            }
            u(a, "aoRowCreatedCallback", null, [j, f, b])
        }
        e.nTr.setAttribute("role", "row")
    }

    function La(a, b) {
        var c = b.nTr,
            d = b._aData;
        if (c) {
            var e = a.rowIdFn(d);
            e && (c.id = e);
            d.DT_RowClass && (e = d.DT_RowClass.split(" "), b.__rowc = b.__rowc ? pa(b.__rowc.concat(e)) : e, h(c).removeClass(b.__rowc.join(" ")).addClass(d.DT_RowClass));
            d.DT_RowAttr && h(c).attr(d.DT_RowAttr);
            d.DT_RowData && h(c).data(d.DT_RowData)
        }
    }

    function kb(a) {
        var b, c, d, e, f, g = a.nTHead,
            j = a.nTFoot,
            i = 0 ===
            h("th, td", g).length,
            n = a.oClasses,
            l = a.aoColumns;
        i && (e = h("<tr/>").appendTo(g));
        b = 0;
        for (c = l.length; b < c; b++) f = l[b], d = h(f.nTh).addClass(f.sClass), i && d.appendTo(e), a.oFeatures.bSort && (d.addClass(f.sSortingClass), !1 !== f.bSortable && (d.attr("tabindex", a.iTabIndex).attr("aria-controls", a.sTableId), Ma(a, f.nTh, b))), f.sTitle != d[0].innerHTML && d.html(f.sTitle), Na(a, "header")(a, d, f, n);
        i && da(a.aoHeader, g);
        h(g).find(">tr").attr("role", "row");
        h(g).find(">tr>th, >tr>td").addClass(n.sHeaderTH);
        h(j).find(">tr>th, >tr>td").addClass(n.sFooterTH);
        if (null !== j) {
            a = a.aoFooter[0];
            b = 0;
            for (c = a.length; b < c; b++) f = l[b], f.nTf = a[b].cell, f.sClass && h(f.nTf).addClass(f.sClass)
        }
    }

    function ea(a, b, c) {
        var d, e, f, g = [],
            j = [],
            i = a.aoColumns.length,
            n;
        if (b) {
            c === k && (c = !1);
            d = 0;
            for (e = b.length; d < e; d++) {
                g[d] = b[d].slice();
                g[d].nTr = b[d].nTr;
                for (f = i - 1; 0 <= f; f--) !a.aoColumns[f].bVisible && !c && g[d].splice(f, 1);
                j.push([])
            }
            d = 0;
            for (e = g.length; d < e; d++) {
                if (a = g[d].nTr)
                    for (; f = a.firstChild;) a.removeChild(f);
                f = 0;
                for (b = g[d].length; f < b; f++)
                    if (n = i = 1, j[d][f] === k) {
                        a.appendChild(g[d][f].cell);
                        for (j[d][f] = 1; g[d + i] !== k && g[d][f].cell == g[d + i][f].cell;) j[d + i][f] = 1, i++;
                        for (; g[d][f + n] !== k && g[d][f].cell == g[d][f + n].cell;) {
                            for (c = 0; c < i; c++) j[d + c][f + n] = 1;
                            n++
                        }
                        h(g[d][f].cell).attr("rowspan", i).attr("colspan", n)
                    }
            }
        }
    }

    function O(a) {
        var b = u(a, "aoPreDrawCallback", "preDraw", [a]);
        if (-1 !== h.inArray(!1, b)) C(a, !1);
        else {
            var b = [],
                c = 0,
                d = a.asStripeClasses,
                e = d.length,
                f = a.oLanguage,
                g = a.iInitDisplayStart,
                j = "ssp" == y(a),
                i = a.aiDisplay;
            a.bDrawing = !0;
            g !== k && -1 !== g && (a._iDisplayStart = j ? g : g >= a.fnRecordsDisplay() ? 0 : g, a.iInitDisplayStart = -1);
            var g = a._iDisplayStart,
                n = a.fnDisplayEnd();
            if (a.bDeferLoading) a.bDeferLoading = !1, a.iDraw++, C(a, !1);
            else if (j) {
                if (!a.bDestroying && !lb(a)) return
            } else a.iDraw++;
            if (0 !== i.length) {
                f = j ? a.aoData.length : n;
                for (j = j ? 0 : g; j < f; j++) {
                    var l = i[j],
                        q = a.aoData[l];
                    null === q.nTr && Ha(a, l);
                    l = q.nTr;
                    if (0 !== e) {
                        var t = d[c % e];
                        q._sRowStripe != t && (h(l).removeClass(q._sRowStripe).addClass(t), q._sRowStripe = t)
                    }
                    u(a, "aoRowCallback", null, [l, q._aData, c, j]);
                    b.push(l);
                    c++
                }
            } else c = f.sZeroRecords, 1 == a.iDraw && "ajax" == y(a) ? c = f.sLoadingRecords :
                f.sEmptyTable && 0 === a.fnRecordsTotal() && (c = f.sEmptyTable), b[0] = h("<tr/>", {
                    "class": e ? d[0] : ""
                }).append(h("<td />", {
                    valign: "top",
                    colSpan: aa(a),
                    "class": a.oClasses.sRowEmpty
                }).html(c))[0];
            u(a, "aoHeaderCallback", "header", [h(a.nTHead).children("tr")[0], Ka(a), g, n, i]);
            u(a, "aoFooterCallback", "footer", [h(a.nTFoot).children("tr")[0], Ka(a), g, n, i]);
            d = h(a.nTBody);
            d.children().detach();
            d.append(h(b));
            u(a, "aoDrawCallback", "draw", [a]);
            a.bSorted = !1;
            a.bFiltered = !1;
            a.bDrawing = !1
        }
    }

    function T(a, b) {
        var c = a.oFeatures,
            d = c.bFilter;
        c.bSort && mb(a);
        d ? fa(a, a.oPreviousSearch) : a.aiDisplay = a.aiDisplayMaster.slice();
        !0 !== b && (a._iDisplayStart = 0);
        a._drawHold = b;
        O(a);
        a._drawHold = !1
    }

    function nb(a) {
        var b = a.oClasses,
            c = h(a.nTable),
            c = h("<div/>").insertBefore(c),
            d = a.oFeatures,
            e = h("<div/>", {
                id: a.sTableId + "_wrapper",
                "class": b.sWrapper + (a.nTFoot ? "" : " " + b.sNoFooter)
            });
        a.nHolding = c[0];
        a.nTableWrapper = e[0];
        a.nTableReinsertBefore = a.nTable.nextSibling;
        for (var f = a.sDom.split(""), g, j, i, n, l, q, t = 0; t < f.length; t++) {
            g = null;
            j = f[t];
            if ("<" == j) {
                i = h("<div/>")[0];
                n = f[t + 1];
                if ("'" == n || '"' == n) {
                    l = "";
                    for (q = 2; f[t + q] != n;) l += f[t + q], q++;
                    "H" == l ? l = b.sJUIHeader : "F" == l && (l = b.sJUIFooter); - 1 != l.indexOf(".") ? (n = l.split("."), i.id = n[0].substr(1, n[0].length - 1), i.className = n[1]) : "#" == l.charAt(0) ? i.id = l.substr(1, l.length - 1) : i.className = l;
                    t += q
                }
                e.append(i);
                e = h(i)
            } else if (">" == j) e = e.parent();
            else if ("l" == j && d.bPaginate && d.bLengthChange) g = ob(a);
            else if ("f" == j && d.bFilter) g = pb(a);
            else if ("r" == j && d.bProcessing) g = qb(a);
            else if ("t" == j) g = rb(a);
            else if ("i" == j && d.bInfo) g = sb(a);
            else if ("p" ==
                j && d.bPaginate) g = tb(a);
            else if (0 !== m.ext.feature.length) {
                i = m.ext.feature;
                q = 0;
                for (n = i.length; q < n; q++)
                    if (j == i[q].cFeature) {
                        g = i[q].fnInit(a);
                        break
                    }
            }
            g && (i = a.aanFeatures, i[j] || (i[j] = []), i[j].push(g), e.append(g))
        }
        c.replaceWith(e);
        a.nHolding = null
    }

    function da(a, b) {
        var c = h(b).children("tr"),
            d, e, f, g, j, i, n, l, q, t;
        a.splice(0, a.length);
        f = 0;
        for (i = c.length; f < i; f++) a.push([]);
        f = 0;
        for (i = c.length; f < i; f++) {
            d = c[f];
            for (e = d.firstChild; e;) {
                if ("TD" == e.nodeName.toUpperCase() || "TH" == e.nodeName.toUpperCase()) {
                    l = 1 * e.getAttribute("colspan");
                    q = 1 * e.getAttribute("rowspan");
                    l = !l || 0 === l || 1 === l ? 1 : l;
                    q = !q || 0 === q || 1 === q ? 1 : q;
                    g = 0;
                    for (j = a[f]; j[g];) g++;
                    n = g;
                    t = 1 === l ? !0 : !1;
                    for (j = 0; j < l; j++)
                        for (g = 0; g < q; g++) a[f + g][n + j] = {
                            cell: e,
                            unique: t
                        }, a[f + g].nTr = d
                }
                e = e.nextSibling
            }
        }
    }

    function qa(a, b, c) {
        var d = [];
        c || (c = a.aoHeader, b && (c = [], da(c, b)));
        for (var b = 0, e = c.length; b < e; b++)
            for (var f = 0, g = c[b].length; f < g; f++)
                if (c[b][f].unique && (!d[f] || !a.bSortCellsTop)) d[f] = c[b][f].cell;
        return d
    }

    function ra(a, b, c) {
        u(a, "aoServerParams", "serverParams", [b]);
        if (b && h.isArray(b)) {
            var d = {},
                e = /(.*?)\[\]$/;
            h.each(b, function(a, b) {
                var c = b.name.match(e);
                c ? (c = c[0], d[c] || (d[c] = []), d[c].push(b.value)) : d[b.name] = b.value
            });
            b = d
        }
        var f, g = a.ajax,
            j = a.oInstance,
            i = function(b) {
                u(a, null, "xhr", [a, b, a.jqXHR]);
                c(b)
            };
        if (h.isPlainObject(g) && g.data) {
            f = g.data;
            var n = h.isFunction(f) ? f(b, a) : f,
                b = h.isFunction(f) && n ? n : h.extend(!0, b, n);
            delete g.data
        }
        n = {
            data: b,
            success: function(b) {
                var c = b.error || b.sError;
                c && L(a, 0, c);
                a.json = b;
                i(b)
            },
            dataType: "json",
            cache: !1,
            type: a.sServerMethod,
            error: function(b, c) {
                var d = u(a, null, "xhr", [a, null, a.jqXHR]); - 1 === h.inArray(!0, d) && ("parsererror" == c ? L(a, 0, "Invalid JSON response", 1) : 4 === b.readyState && L(a, 0, "Ajax error", 7));
                C(a, !1)
            }
        };
        a.oAjaxData = b;
        u(a, null, "preXhr", [a, b]);
        a.fnServerData ? a.fnServerData.call(j, a.sAjaxSource, h.map(b, function(a, b) {
            return {
                name: b,
                value: a
            }
        }), i, a) : a.sAjaxSource || "string" === typeof g ? a.jqXHR = h.ajax(h.extend(n, {
            url: g || a.sAjaxSource
        })) : h.isFunction(g) ? a.jqXHR = g.call(j, b, i, a) : (a.jqXHR = h.ajax(h.extend(n, g)), g.data = f)
    }

    function lb(a) {
        return a.bAjaxDataGet ? (a.iDraw++, C(a, !0), ra(a, ub(a), function(b) {
            vb(a, b)
        }), !1) : !0
    }

    function ub(a) {
        var b = a.aoColumns,
            c = b.length,
            d = a.oFeatures,
            e = a.oPreviousSearch,
            f = a.aoPreSearchCols,
            g, j = [],
            i, n, l, q = V(a);
        g = a._iDisplayStart;
        i = !1 !== d.bPaginate ? a._iDisplayLength : -1;
        var k = function(a, b) {
            j.push({
                name: a,
                value: b
            })
        };
        k("sEcho", a.iDraw);
        k("iColumns", c);
        k("sColumns", G(b, "sName").join(","));
        k("iDisplayStart", g);
        k("iDisplayLength", i);
        var S = {
            draw: a.iDraw,
            columns: [],
            order: [],
            start: g,
            length: i,
            search: {
                value: e.sSearch,
                regex: e.bRegex
            }
        };
        for (g = 0; g < c; g++) n = b[g],
            l = f[g], i = "function" == typeof n.mData ? "function" : n.mData, S.columns.push({
                data: i,
                name: n.sName,
                searchable: n.bSearchable,
                orderable: n.bSortable,
                search: {
                    value: l.sSearch,
                    regex: l.bRegex
                }
            }), k("mDataProp_" + g, i), d.bFilter && (k("sSearch_" + g, l.sSearch), k("bRegex_" + g, l.bRegex), k("bSearchable_" + g, n.bSearchable)), d.bSort && k("bSortable_" + g, n.bSortable);
        d.bFilter && (k("sSearch", e.sSearch), k("bRegex", e.bRegex));
        d.bSort && (h.each(q, function(a, b) {
            S.order.push({
                column: b.col,
                dir: b.dir
            });
            k("iSortCol_" + a, b.col);
            k("sSortDir_" +
                a, b.dir)
        }), k("iSortingCols", q.length));
        b = m.ext.legacy.ajax;
        return null === b ? a.sAjaxSource ? j : S : b ? j : S
    }

    function vb(a, b) {
        var c = sa(a, b),
            d = b.sEcho !== k ? b.sEcho : b.draw,
            e = b.iTotalRecords !== k ? b.iTotalRecords : b.recordsTotal,
            f = b.iTotalDisplayRecords !== k ? b.iTotalDisplayRecords : b.recordsFiltered;
        if (d) {
            if (1 * d < a.iDraw) return;
            a.iDraw = 1 * d
        }
        na(a);
        a._iRecordsTotal = parseInt(e, 10);
        a._iRecordsDisplay = parseInt(f, 10);
        d = 0;
        for (e = c.length; d < e; d++) N(a, c[d]);
        a.aiDisplay = a.aiDisplayMaster.slice();
        a.bAjaxDataGet = !1;
        O(a);
        a._bInitComplete ||
            ta(a, b);
        a.bAjaxDataGet = !0;
        C(a, !1)
    }

    function sa(a, b) {
        var c = h.isPlainObject(a.ajax) && a.ajax.dataSrc !== k ? a.ajax.dataSrc : a.sAjaxDataProp;
        return "data" === c ? b.aaData || b[c] : "" !== c ? Q(c)(b) : b
    }

    function pb(a) {
        var b = a.oClasses,
            c = a.sTableId,
            d = a.oLanguage,
            e = a.oPreviousSearch,
            f = a.aanFeatures,
            g = '<input type="search" class="form-control ' + b.sFilterInput + '" placeholder="sCSC"/>',
            j = d.sSearch,
            j = j.match(/_INPUT_/) ? j.replace("_INPUT_", g) : j + g,
            b = h("<div/>", {
                id: !f.f ? c + "_filter" : null,
                "class": b.sFilter,
            }).append(h("<label/>").append(j)),
            f = function() {
                var b = !this.value ?
                    "" : this.value;
                b != e.sSearch && (fa(a, {
                    sSearch: b,
                    bRegex: e.bRegex,
                    bSmart: e.bSmart,
                    bCaseInsensitive: e.bCaseInsensitive
                }), a._iDisplayStart = 0, O(a))
            },
            g = null !== a.searchDelay ? a.searchDelay : "ssp" === y(a) ? 400 : 0,
            i = h("input", b).val(e.sSearch).attr("placeholder", d.sSearchPlaceholder).bind("keyup.DT search.DT input.DT paste.DT cut.DT", g ? Oa(f, g) : f).bind("keypress.DT", function(a) {
                if (13 == a.keyCode) return !1
            }).attr("aria-controls", c);
        h(a.nTable).on("search.dt.DT", function(b, c) {
            if (a === c) try {
                i[0] !== I.activeElement && i.val(e.sSearch)
            } catch (d) {}
        });

        return b[0]
    }

    function fa(a, b, c) {
        var d = a.oPreviousSearch,
            e = a.aoPreSearchCols,
            f = function(a) {
                d.sSearch = a.sSearch;
                d.bRegex = a.bRegex;
                d.bSmart = a.bSmart;
                d.bCaseInsensitive = a.bCaseInsensitive
            };
        Ga(a);
        if ("ssp" != y(a)) {
            wb(a, b.sSearch, c, b.bEscapeRegex !== k ? !b.bEscapeRegex : b.bRegex, b.bSmart, b.bCaseInsensitive);
            f(b);
            for (b = 0; b < e.length; b++) xb(a, e[b].sSearch, b, e[b].bEscapeRegex !== k ? !e[b].bEscapeRegex : e[b].bRegex, e[b].bSmart, e[b].bCaseInsensitive);
            yb(a)
        } else f(b);
        a.bFiltered = !0;
        u(a, null, "search", [a])
    }

    function yb(a) {
        for (var b =
                m.ext.search, c = a.aiDisplay, d, e, f = 0, g = b.length; f < g; f++) {
            for (var j = [], i = 0, n = c.length; i < n; i++) e = c[i], d = a.aoData[e], b[f](a, d._aFilterData, e, d._aData, i) && j.push(e);
            c.length = 0;
            h.merge(c, j)
        }
    }

    function xb(a, b, c, d, e, f) {
        if ("" !== b)
            for (var g = a.aiDisplay, d = Pa(b, d, e, f), e = g.length - 1; 0 <= e; e--) b = a.aoData[g[e]]._aFilterData[c], d.test(b) || g.splice(e, 1)
    }

    function wb(a, b, c, d, e, f) {
        var d = Pa(b, d, e, f),
            e = a.oPreviousSearch.sSearch,
            f = a.aiDisplayMaster,
            g;
        0 !== m.ext.search.length && (c = !0);
        g = zb(a);
        if (0 >= b.length) a.aiDisplay = f.slice();
        else {
            if (g || c || e.length > b.length || 0 !== b.indexOf(e) || a.bSorted) a.aiDisplay = f.slice();
            b = a.aiDisplay;
            for (c = b.length - 1; 0 <= c; c--) d.test(a.aoData[b[c]]._sFilterRow) || b.splice(c, 1)
        }
    }

    function Pa(a, b, c, d) {
        a = b ? a : Qa(a);
        c && (a = "^(?=.*?" + h.map(a.match(/"[^"]+"|[^ ]+/g) || [""], function(a) {
            if ('"' === a.charAt(0)) var b = a.match(/^"(.*)"$/),
                a = b ? b[1] : a;
            return a.replace('"', "")
        }).join(")(?=.*?") + ").*$");
        return RegExp(a, d ? "i" : "")
    }

    function zb(a) {
        var b = a.aoColumns,
            c, d, e, f, g, j, i, h, l = m.ext.type.search;
        c = !1;
        d = 0;
        for (f = a.aoData.length; d <
            f; d++)
            if (h = a.aoData[d], !h._aFilterData) {
                j = [];
                e = 0;
                for (g = b.length; e < g; e++) c = b[e], c.bSearchable ? (i = B(a, d, e, "filter"), l[c.sType] && (i = l[c.sType](i)), null === i && (i = ""), "string" !== typeof i && i.toString && (i = i.toString())) : i = "", i.indexOf && -1 !== i.indexOf("&") && (ua.innerHTML = i, i = Zb ? ua.textContent : ua.innerText), i.replace && (i = i.replace(/[\r\n]/g, "")), j.push(i);
                h._aFilterData = j;
                h._sFilterRow = j.join("  ");
                c = !0
            }
        return c
    }

    function Ab(a) {
        return {
            search: a.sSearch,
            smart: a.bSmart,
            regex: a.bRegex,
            caseInsensitive: a.bCaseInsensitive
        }
    }

    function Bb(a) {
        return {
            sSearch: a.search,
            bSmart: a.smart,
            bRegex: a.regex,
            bCaseInsensitive: a.caseInsensitive
        }
    }

    function sb(a) {
        var b = a.sTableId,
            c = a.aanFeatures.i,
            d = h("<div/>", {
                "class": a.oClasses.sInfo,
                id: !c ? b + "_info" : null
            });
        c || (a.aoDrawCallback.push({
            fn: Cb,
            sName: "information"
        }), d.attr("role", "status").attr("aria-live", "polite"), h(a.nTable).attr("aria-describedby", b + "_info"));
        return d[0]
    }

    function Cb(a) {
        var b = a.aanFeatures.i;
        if (0 !== b.length) {
            var c = a.oLanguage,
                d = a._iDisplayStart + 1,
                e = a.fnDisplayEnd(),
                f = a.fnRecordsTotal(),
                g = a.fnRecordsDisplay(),
                j = g ? c.sInfo : c.sInfoEmpty;
            g !== f && (j += " " + c.sInfoFiltered);
            j += c.sInfoPostFix;
            j = Db(a, j);
            c = c.fnInfoCallback;
            null !== c && (j = c.call(a.oInstance, a, d, e, f, g, j));
            h(b).html(j)
        }
    }

    function Db(a, b) {
        var c = a.fnFormatNumber,
            d = a._iDisplayStart + 1,
            e = a._iDisplayLength,
            f = a.fnRecordsDisplay(),
            g = -1 === e;
        return b.replace(/_START_/g, c.call(a, d)).replace(/_END_/g, c.call(a, a.fnDisplayEnd())).replace(/_MAX_/g, c.call(a, a.fnRecordsTotal())).replace(/_TOTAL_/g, c.call(a, f)).replace(/_PAGE_/g, c.call(a, g ? 1 : Math.ceil(d /
            e))).replace(/_PAGES_/g, c.call(a, g ? 1 : Math.ceil(f / e)))
    }

    function ga(a) {
        var b, c, d = a.iInitDisplayStart,
            e = a.aoColumns,
            f;
        c = a.oFeatures;
        var g = a.bDeferLoading;
        if (a.bInitialised) {
            nb(a);
            kb(a);
            ea(a, a.aoHeader);
            ea(a, a.aoFooter);
            C(a, !0);
            c.bAutoWidth && Fa(a);
            b = 0;
            for (c = e.length; b < c; b++) f = e[b], f.sWidth && (f.nTh.style.width = x(f.sWidth));
            u(a, null, "preInit", [a]);
            T(a);
            e = y(a);
            if ("ssp" != e || g) "ajax" == e ? ra(a, [], function(c) {
                var f = sa(a, c);
                for (b = 0; b < f.length; b++) N(a, f[b]);
                a.iInitDisplayStart = d;
                T(a);
                C(a, !1);
                ta(a, c)
            }, a) : (C(a, !1),
                ta(a))
        } else setTimeout(function() {
            ga(a)
        }, 200)
    }

    function ta(a, b) {
        a._bInitComplete = !0;
        (b || a.oInit.aaData) && Y(a);
        u(a, null, "plugin-init", [a, b]);
        u(a, "aoInitComplete", "init", [a, b])
    }

    function Ra(a, b) {
        var c = parseInt(b, 10);
        a._iDisplayLength = c;
        Sa(a);
        u(a, null, "length", [a, c])
    }

    function ob(a) {
        for (var b = a.oClasses, c = a.sTableId, d = a.aLengthMenu, e = h.isArray(d[0]), f = e ? d[0] : d, d = e ? d[1] : d, e = h("<select/>", {
                name: c + "_length",
                "aria-controls": c,
                "class": b.sLengthSelect,
                "class": "form-control"
            }), g = 0, j = f.length; g < j; g++) e[0][g] = new Option(d[g], f[g]);
        var i =
            h("<div><label/></div>").addClass(b.sLength);
        a.aanFeatures.l || (i[0].id = c + "_length");
        i.children().append(a.oLanguage.sLengthMenu.replace("_MENU_", e[0].outerHTML));
        h("select", i).val(a._iDisplayLength).bind("change.DT", function() {
            Ra(a, h(this).val());
            O(a)
        });
        h(a.nTable).bind("length.dt.DT", function(b, c, d) {
            a === c && h("select", i).val(d)
        });
        return i[0]
    }

    function tb(a) {
        var b = a.sPaginationType,
            c = m.ext.pager[b],
            d = "function" === typeof c,
            e = function(a) {
                O(a)
            },
            b = h("<div/>").addClass(a.oClasses.sPaging + b)[0],
            f = a.aanFeatures;
        d || c.fnInit(a, b, e);
        f.p || (b.id = a.sTableId + "_paginate", a.aoDrawCallback.push({
            fn: function(a) {
                if (d) {
                    var b = a._iDisplayStart,
                        i = a._iDisplayLength,
                        h = a.fnRecordsDisplay(),
                        l = -1 === i,
                        b = l ? 0 : Math.ceil(b / i),
                        i = l ? 1 : Math.ceil(h / i),
                        h = c(b, i),
                        k, l = 0;
                    for (k = f.p.length; l < k; l++) Na(a, "pageButton")(a, f.p[l], l, h, b, i)
                } else c.fnUpdate(a, e)
            },
            sName: "pagination"
        }));
        return b
    }

    function Ta(a, b, c) {
        var d = a._iDisplayStart,
            e = a._iDisplayLength,
            f = a.fnRecordsDisplay();
        0 === f || -1 === e ? d = 0 : "number" === typeof b ? (d = b * e, d > f && (d = 0)) : "first" == b ? d = 0 :
            "previous" == b ? (d = 0 <= e ? d - e : 0, 0 > d && (d = 0)) : "next" == b ? d + e < f && (d += e) : "last" == b ? d = Math.floor((f - 1) / e) * e : L(a, 0, "Unknown paging action: " + b, 5);
        b = a._iDisplayStart !== d;
        a._iDisplayStart = d;
        b && (u(a, null, "page", [a]), c && O(a));
        return b
    }

    function qb(a) {
        return h("<div/>", {
            id: !a.aanFeatures.r ? a.sTableId + "_processing" : null,
            "class": a.oClasses.sProcessing
        }).html(a.oLanguage.sProcessing).insertBefore(a.nTable)[0]
    }

    function C(a, b) {
        a.oFeatures.bProcessing && h(a.aanFeatures.r).css("display", b ? "block" : "none");
        u(a, null, "processing", [a, b])
    }

    function rb(a) {
        var b = h(a.nTable);
        b.attr("role", "grid");
        var c = a.oScroll;
        if ("" === c.sX && "" === c.sY) return a.nTable;
        var d = c.sX,
            e = c.sY,
            f = a.oClasses,
            g = b.children("caption"),
            j = g.length ? g[0]._captionSide : null,
            i = h(b[0].cloneNode(!1)),
            n = h(b[0].cloneNode(!1)),
            l = b.children("tfoot");
        l.length || (l = null);
        i = h("<div/>", {
            "class": f.sScrollWrapper
        }).append(h("<div/>", {
            "class": f.sScrollHead
        }).css({
            overflow: "hidden",
            position: "relative",
            border: 0,
            width: d ? !d ? null : x(d) : "100%"
        }).append(h("<div/>", {
            "class": f.sScrollHeadInner
        }).css({
            "box-sizing": "content-box",
            width: c.sXInner || "100%"
        }).append(i.removeAttr("id").css("margin-left", 0).append("top" === j ? g : null).append(b.children("thead"))))).append(h("<div/>", {
            "class": f.sScrollBody
        }).css({
            position: "relative",
            overflow: "auto",
            width: !d ? null : x(d)
        }).append(b));
        l && i.append(h("<div/>", {
            "class": f.sScrollFoot
        }).css({
            overflow: "hidden",
            border: 0,
            width: d ? !d ? null : x(d) : "100%"
        }).append(h("<div/>", {
            "class": f.sScrollFootInner
        }).append(n.removeAttr("id").css("margin-left", 0).append("bottom" === j ? g : null).append(b.children("tfoot")))));
        var b = i.children(),
            k = b[0],
            f = b[1],
            t = l ? b[2] : null;
        if (d) h(f).on("scroll.DT", function() {
            var a = this.scrollLeft;
            k.scrollLeft = a;
            l && (t.scrollLeft = a)
        });
        h(f).css(e && c.bCollapse ? "max-height" : "height", e);
        a.nScrollHead = k;
        a.nScrollBody = f;
        a.nScrollFoot = t;
        a.aoDrawCallback.push({
            fn: ka,
            sName: "scrolling"
        });
        return i[0]
    }

    function ka(a) {
        var b = a.oScroll,
            c = b.sX,
            d = b.sXInner,
            e = b.sY,
            b = b.iBarWidth,
            f = h(a.nScrollHead),
            g = f[0].style,
            j = f.children("div"),
            i = j[0].style,
            n = j.children("table"),
            j = a.nScrollBody,
            l = h(j),
            q = j.style,
            t = h(a.nScrollFoot).children("div"),
            m = t.children("table"),
            o = h(a.nTHead),
            F = h(a.nTable),
            p = F[0],
            r = p.style,
            u = a.nTFoot ? h(a.nTFoot) : null,
            Eb = a.oBrowser,
            Ua = Eb.bScrollOversize,
            s = G(a.aoColumns, "nTh"),
            P, v, w, y, z = [],
            A = [],
            B = [],
            C = [],
            D, E = function(a) {
                a = a.style;
                a.paddingTop = "0";
                a.paddingBottom = "0";
                a.borderTopWidth = "0";
                a.borderBottomWidth = "0";
                a.height = 0
            };
        v = j.scrollHeight > j.clientHeight;
        if (a.scrollBarVis !== v && a.scrollBarVis !== k) a.scrollBarVis = v, Y(a);
        else {
            a.scrollBarVis = v;
            F.children("thead, tfoot").remove();
            u && (w = u.clone().prependTo(F), P = u.find("tr"), w =
                w.find("tr"));
            y = o.clone().prependTo(F);
            o = o.find("tr");
            v = y.find("tr");
            y.find("th, td").removeAttr("tabindex");
            c || (q.width = "100%", f[0].style.width = "100%");
            h.each(qa(a, y), function(b, c) {
                D = Z(a, b);
                c.style.width = a.aoColumns[D].sWidth
            });
            u && J(function(a) {
                a.style.width = ""
            }, w);
            f = F.outerWidth();
            if ("" === c) {
                r.width = "100%";
                if (Ua && (F.find("tbody").height() > j.offsetHeight || "scroll" == l.css("overflow-y"))) r.width = x(F.outerWidth() - b);
                f = F.outerWidth()
            } else "" !== d && (r.width = x(d), f = F.outerWidth());
            J(E, v);
            J(function(a) {
                B.push(a.innerHTML);
                z.push(x(h(a).css("width")))
            }, v);
            J(function(a, b) {
                if (h.inArray(a, s) !== -1) a.style.width = z[b]
            }, o);
            h(v).height(0);
            u && (J(E, w), J(function(a) {
                C.push(a.innerHTML);
                A.push(x(h(a).css("width")))
            }, w), J(function(a, b) {
                a.style.width = A[b]
            }, P), h(w).height(0));
            J(function(a, b) {
                a.innerHTML = '<div class="dataTables_sizing" style="height:0;overflow:hidden;">' + B[b] + "</div>";
                a.style.width = z[b]
            }, v);
            u && J(function(a, b) {
                a.innerHTML = '<div class="dataTables_sizing" style="height:0;overflow:hidden;">' + C[b] + "</div>";
                a.style.width =
                    A[b]
            }, w);
            if (F.outerWidth() < f) {
                P = j.scrollHeight > j.offsetHeight || "scroll" == l.css("overflow-y") ? f + b : f;
                if (Ua && (j.scrollHeight > j.offsetHeight || "scroll" == l.css("overflow-y"))) r.width = x(P - b);
                ("" === c || "" !== d) && L(a, 1, "Possible column misalignment", 6)
            } else P = "100%";
            q.width = x(P);
            g.width = x(P);
            u && (a.nScrollFoot.style.width = x(P));
            !e && Ua && (q.height = x(p.offsetHeight + b));
            c = F.outerWidth();
            n[0].style.width = x(c);
            i.width = x(c);
            d = F.height() > j.clientHeight || "scroll" == l.css("overflow-y");
            e = "padding" + (Eb.bScrollbarLeft ? "Left" :
                "Right");
            i[e] = d ? b + "px" : "0px";
            u && (m[0].style.width = x(c), t[0].style.width = x(c), t[0].style[e] = d ? b + "px" : "0px");
            F.children("colgroup").insertBefore(F.children("thead"));
            l.scroll();
            if ((a.bSorted || a.bFiltered) && !a._drawHold) j.scrollTop = 0
        }
    }

    function J(a, b, c) {
        for (var d = 0, e = 0, f = b.length, g, j; e < f;) {
            g = b[e].firstChild;
            for (j = c ? c[e].firstChild : null; g;) 1 === g.nodeType && (c ? a(g, j, d) : a(g, d), d++), g = g.nextSibling, j = c ? j.nextSibling : null;
            e++
        }
    }

    function Fa(a) {
        var b = a.nTable,
            c = a.aoColumns,
            d = a.oScroll,
            e = d.sY,
            f = d.sX,
            g = d.sXInner,
            j = c.length,
            i = la(a, "bVisible"),
            n = h("th", a.nTHead),
            l = b.getAttribute("width"),
            k = b.parentNode,
            t = !1,
            m, o, p = a.oBrowser,
            d = p.bScrollOversize;
        (m = b.style.width) && -1 !== m.indexOf("%") && (l = m);
        for (m = 0; m < i.length; m++) o = c[i[m]], null !== o.sWidth && (o.sWidth = Fb(o.sWidthOrig, k), t = !0);
        if (d || !t && !f && !e && j == aa(a) && j == n.length)
            for (m = 0; m < j; m++) i = Z(a, m), null !== i && (c[i].sWidth = x(n.eq(m).width()));
        else {
            j = h(b).clone().css("visibility", "hidden").removeAttr("id");
            j.find("tbody tr").remove();
            var r = h("<tr/>").appendTo(j.find("tbody"));
            j.find("thead, tfoot").remove();
            j.append(h(a.nTHead).clone()).append(h(a.nTFoot).clone());
            j.find("tfoot th, tfoot td").css("width", "");
            n = qa(a, j.find("thead")[0]);
            for (m = 0; m < i.length; m++) o = c[i[m]], n[m].style.width = null !== o.sWidthOrig && "" !== o.sWidthOrig ? x(o.sWidthOrig) : "", o.sWidthOrig && f && h(n[m]).append(h("<div/>").css({
                width: o.sWidthOrig,
                margin: 0,
                padding: 0,
                border: 0,
                height: 1
            }));
            if (a.aoData.length)
                for (m = 0; m < i.length; m++) t = i[m], o = c[t], h(Gb(a, t)).clone(!1).append(o.sContentPadding).appendTo(r);
            h("[name]",
                j).removeAttr("name");
            o = h("<div/>").css(f || e ? {
                position: "absolute",
                top: 0,
                left: 0,
                height: 1,
                right: 0,
                overflow: "hidden"
            } : {}).append(j).appendTo(k);
            f && g ? j.width(g) : f ? (j.css("width", "auto"), j.removeAttr("width"), j.width() < k.clientWidth && l && j.width(k.clientWidth)) : e ? j.width(k.clientWidth) : l && j.width(l);
            for (m = e = 0; m < i.length; m++) k = h(n[m]), g = k.outerWidth() - k.width(), k = p.bBounding ? Math.ceil(n[m].getBoundingClientRect().width) : k.outerWidth(), e += k, c[i[m]].sWidth = x(k - g);
            b.style.width = x(e);
            o.remove()
        }
        l && (b.style.width =
            x(l));
        if ((l || f) && !a._reszEvt) b = function() {
            h(D).bind("resize.DT-" + a.sInstance, Oa(function() {
                Y(a)
            }))
        }, d ? setTimeout(b, 1E3) : b(), a._reszEvt = !0
    }

    function Fb(a, b) {
        if (!a) return 0;
        var c = h("<div/>").css("width", x(a)).appendTo(b || I.body),
            d = c[0].offsetWidth;
        c.remove();
        return d
    }

    function Gb(a, b) {
        var c = Hb(a, b);
        if (0 > c) return null;
        var d = a.aoData[c];
        return !d.nTr ? h("<td/>").html(B(a, c, b, "display"))[0] : d.anCells[b]
    }

    function Hb(a, b) {
        for (var c, d = -1, e = -1, f = 0, g = a.aoData.length; f < g; f++) c = B(a, f, b, "display") + "", c = c.replace($b,
            ""), c = c.replace(/&nbsp;/g, " "), c.length > d && (d = c.length, e = f);
        return e
    }

    function x(a) {
        return null === a ? "0px" : "number" == typeof a ? 0 > a ? "0px" : a + "px" : a.match(/\d$/) ? a + "px" : a
    }

    function V(a) {
        var b, c, d = [],
            e = a.aoColumns,
            f, g, j, i;
        b = a.aaSortingFixed;
        c = h.isPlainObject(b);
        var n = [];
        f = function(a) {
            a.length && !h.isArray(a[0]) ? n.push(a) : h.merge(n, a)
        };
        h.isArray(b) && f(b);
        c && b.pre && f(b.pre);
        f(a.aaSorting);
        c && b.post && f(b.post);
        for (a = 0; a < n.length; a++) {
            i = n[a][0];
            f = e[i].aDataSort;
            b = 0;
            for (c = f.length; b < c; b++) g = f[b], j = e[g].sType ||
                "string", n[a]._idx === k && (n[a]._idx = h.inArray(n[a][1], e[g].asSorting)), d.push({
                    src: i,
                    col: g,
                    dir: n[a][1],
                    index: n[a]._idx,
                    type: j,
                    formatter: m.ext.type.order[j + "-pre"]
                })
        }
        return d
    }

    function mb(a) {
        var b, c, d = [],
            e = m.ext.type.order,
            f = a.aoData,
            g = 0,
            j, i = a.aiDisplayMaster,
            h;
        Ga(a);
        h = V(a);
        b = 0;
        for (c = h.length; b < c; b++) j = h[b], j.formatter && g++, Ib(a, j.col);
        if ("ssp" != y(a) && 0 !== h.length) {
            b = 0;
            for (c = i.length; b < c; b++) d[i[b]] = b;
            g === h.length ? i.sort(function(a, b) {
                var c, e, g, j, i = h.length,
                    k = f[a]._aSortData,
                    m = f[b]._aSortData;
                for (g =
                    0; g < i; g++)
                    if (j = h[g], c = k[j.col], e = m[j.col], c = c < e ? -1 : c > e ? 1 : 0, 0 !== c) return "asc" === j.dir ? c : -c;
                c = d[a];
                e = d[b];
                return c < e ? -1 : c > e ? 1 : 0
            }) : i.sort(function(a, b) {
                var c, g, j, i, k = h.length,
                    m = f[a]._aSortData,
                    p = f[b]._aSortData;
                for (j = 0; j < k; j++)
                    if (i = h[j], c = m[i.col], g = p[i.col], i = e[i.type + "-" + i.dir] || e["string-" + i.dir], c = i(c, g), 0 !== c) return c;
                c = d[a];
                g = d[b];
                return c < g ? -1 : c > g ? 1 : 0
            })
        }
        a.bSorted = !0
    }

    function Jb(a) {
        for (var b, c, d = a.aoColumns, e = V(a), a = a.oLanguage.oAria, f = 0, g = d.length; f < g; f++) {
            c = d[f];
            var j = c.asSorting;
            b = c.sTitle.replace(/<.*?>/g,
                "");
            var i = c.nTh;
            i.removeAttribute("aria-sort");
            c.bSortable && (0 < e.length && e[0].col == f ? (i.setAttribute("aria-sort", "asc" == e[0].dir ? "ascending" : "descending"), c = j[e[0].index + 1] || j[0]) : c = j[0], b += "asc" === c ? a.sSortAscending : a.sSortDescending);
            i.setAttribute("aria-label", b)
        }
    }

    function Va(a, b, c, d) {
        var e = a.aaSorting,
            f = a.aoColumns[b].asSorting,
            g = function(a, b) {
                var c = a._idx;
                c === k && (c = h.inArray(a[1], f));
                return c + 1 < f.length ? c + 1 : b ? null : 0
            };
        "number" === typeof e[0] && (e = a.aaSorting = [e]);
        c && a.oFeatures.bSortMulti ? (c = h.inArray(b,
            G(e, "0")), -1 !== c ? (b = g(e[c], !0), null === b && 1 === e.length && (b = 0), null === b ? e.splice(c, 1) : (e[c][1] = f[b], e[c]._idx = b)) : (e.push([b, f[0], 0]), e[e.length - 1]._idx = 0)) : e.length && e[0][0] == b ? (b = g(e[0]), e.length = 1, e[0][1] = f[b], e[0]._idx = b) : (e.length = 0, e.push([b, f[0]]), e[0]._idx = 0);
        T(a);
        "function" == typeof d && d(a)
    }

    function Ma(a, b, c, d) {
        var e = a.aoColumns[c];
        Wa(b, {}, function(b) {
            !1 !== e.bSortable && (a.oFeatures.bProcessing ? (C(a, !0), setTimeout(function() {
                Va(a, c, b.shiftKey, d);
                "ssp" !== y(a) && C(a, !1)
            }, 0)) : Va(a, c, b.shiftKey, d))
        })
    }

    function va(a) {
        var b = a.aLastSort,
            c = a.oClasses.sSortColumn,
            d = V(a),
            e = a.oFeatures,
            f, g;
        if (e.bSort && e.bSortClasses) {
            e = 0;
            for (f = b.length; e < f; e++) g = b[e].src, h(G(a.aoData, "anCells", g)).removeClass(c + (2 > e ? e + 1 : 3));
            e = 0;
            for (f = d.length; e < f; e++) g = d[e].src, h(G(a.aoData, "anCells", g)).addClass(c + (2 > e ? e + 1 : 3))
        }
        a.aLastSort = d
    }

    function Ib(a, b) {
        var c = a.aoColumns[b],
            d = m.ext.order[c.sSortDataType],
            e;
        d && (e = d.call(a.oInstance, a, b, $(a, b)));
        for (var f, g = m.ext.type.order[c.sType + "-pre"], j = 0, i = a.aoData.length; j < i; j++)
            if (c = a.aoData[j],
                c._aSortData || (c._aSortData = []), !c._aSortData[b] || d) f = d ? e[j] : B(a, j, b, "sort"), c._aSortData[b] = g ? g(f) : f
    }

    function wa(a) {
        if (a.oFeatures.bStateSave && !a.bDestroying) {
            var b = {
                time: +new Date,
                start: a._iDisplayStart,
                length: a._iDisplayLength,
                order: h.extend(!0, [], a.aaSorting),
                search: Ab(a.oPreviousSearch),
                columns: h.map(a.aoColumns, function(b, d) {
                    return {
                        visible: b.bVisible,
                        search: Ab(a.aoPreSearchCols[d])
                    }
                })
            };
            u(a, "aoStateSaveParams", "stateSaveParams", [a, b]);
            a.oSavedState = b;
            a.fnStateSaveCallback.call(a.oInstance, a,
                b)
        }
    }

    function Kb(a) {
        var b, c, d = a.aoColumns;
        if (a.oFeatures.bStateSave) {
            var e = a.fnStateLoadCallback.call(a.oInstance, a);
            if (e && e.time && (b = u(a, "aoStateLoadParams", "stateLoadParams", [a, e]), -1 === h.inArray(!1, b) && (b = a.iStateDuration, !(0 < b && e.time < +new Date - 1E3 * b) && d.length === e.columns.length))) {
                a.oLoadedState = h.extend(!0, {}, e);
                e.start !== k && (a._iDisplayStart = e.start, a.iInitDisplayStart = e.start);
                e.length !== k && (a._iDisplayLength = e.length);
                e.order !== k && (a.aaSorting = [], h.each(e.order, function(b, c) {
                    a.aaSorting.push(c[0] >=
                        d.length ? [0, c[1]] : c)
                }));
                e.search !== k && h.extend(a.oPreviousSearch, Bb(e.search));
                b = 0;
                for (c = e.columns.length; b < c; b++) {
                    var f = e.columns[b];
                    f.visible !== k && (d[b].bVisible = f.visible);
                    f.search !== k && h.extend(a.aoPreSearchCols[b], Bb(f.search))
                }
                u(a, "aoStateLoaded", "stateLoaded", [a, e])
            }
        }
    }

    function xa(a) {
        var b = m.settings,
            a = h.inArray(a, G(b, "nTable"));
        return -1 !== a ? b[a] : null
    }

    function L(a, b, c, d) {
        c = "DataTables warning: " + (a ? "table id=" + a.sTableId + " - " : "") + c;
        d && (c += ". For more information about this error, please see http://datatables.net/tn/" +
            d);
        if (b) D.console && console.log && console.log(c);
        else if (b = m.ext, b = b.sErrMode || b.errMode, a && u(a, null, "error", [a, d, c]), "alert" == b) alert(c);
        else {
            if ("throw" == b) throw Error(c);
            "function" == typeof b && b(a, d, c)
        }
    }

    function E(a, b, c, d) {
        h.isArray(c) ? h.each(c, function(c, d) {
            h.isArray(d) ? E(a, b, d[0], d[1]) : E(a, b, d)
        }) : (d === k && (d = c), b[c] !== k && (a[d] = b[c]))
    }

    function Lb(a, b, c) {
        var d, e;
        for (e in b) b.hasOwnProperty(e) && (d = b[e], h.isPlainObject(d) ? (h.isPlainObject(a[e]) || (a[e] = {}), h.extend(!0, a[e], d)) : a[e] = c && "data" !== e && "aaData" !==
            e && h.isArray(d) ? d.slice() : d);
        return a
    }

    function Wa(a, b, c) {
        h(a).bind("click.DT", b, function(b) {
            a.blur();
            c(b)
        }).bind("keypress.DT", b, function(a) {
            13 === a.which && (a.preventDefault(), c(a))
        }).bind("selectstart.DT", function() {
            return !1
        })
    }

    function z(a, b, c, d) {
        c && a[b].push({
            fn: c,
            sName: d
        })
    }

    function u(a, b, c, d) {
        var e = [];
        b && (e = h.map(a[b].slice().reverse(), function(b) {
            return b.fn.apply(a.oInstance, d)
        }));
        null !== c && (b = h.Event(c + ".dt"), h(a.nTable).trigger(b, d), e.push(b.result));
        return e
    }

    function Sa(a) {
        var b = a._iDisplayStart,
            c = a.fnDisplayEnd(),
            d = a._iDisplayLength;
        b >= c && (b = c - d);
        b -= b % d;
        if (-1 === d || 0 > b) b = 0;
        a._iDisplayStart = b
    }

    function Na(a, b) {
        var c = a.renderer,
            d = m.ext.renderer[b];
        return h.isPlainObject(c) && c[b] ? d[c[b]] || d._ : "string" === typeof c ? d[c] || d._ : d._
    }

    function y(a) {
        return a.oFeatures.bServerSide ? "ssp" : a.ajax || a.sAjaxSource ? "ajax" : "dom"
    }

    function ya(a, b) {
        var c = [],
            c = Mb.numbers_length,
            d = Math.floor(c / 2);
        b <= c ? c = W(0, b) : a <= d ? (c = W(0, c - 2), c.push("ellipsis"), c.push(b - 1)) : (a >= b - 1 - d ? c = W(b - (c - 2), b) : (c = W(a - d + 2, a + d - 1), c.push("ellipsis"),
            c.push(b - 1)), c.splice(0, 0, "ellipsis"), c.splice(0, 0, 0));
        c.DT_el = "span";
        return c
    }

    function db(a) {
        h.each({
            num: function(b) {
                return za(b, a)
            },
            "num-fmt": function(b) {
                return za(b, a, Xa)
            },
            "html-num": function(b) {
                return za(b, a, Aa)
            },
            "html-num-fmt": function(b) {
                return za(b, a, Aa, Xa)
            }
        }, function(b, c) {
            v.type.order[b + a + "-pre"] = c;
            b.match(/^html\-/) && (v.type.search[b + a] = v.type.search.html)
        })
    }

    function Nb(a) {
        return function() {
            var b = [xa(this[m.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));
            return m.ext.internal[a].apply(this,
                b)
        }
    }
    var m = function(a) {
            this.$ = function(a, b) {
                return this.api(!0).$(a, b)
            };
            this._ = function(a, b) {
                return this.api(!0).rows(a, b).data()
            };
            this.api = function(a) {
                return a ? new r(xa(this[v.iApiIndex])) : new r(this)
            };
            this.fnAddData = function(a, b) {
                var c = this.api(!0),
                    d = h.isArray(a) && (h.isArray(a[0]) || h.isPlainObject(a[0])) ? c.rows.add(a) : c.row.add(a);
                (b === k || b) && c.draw();
                return d.flatten().toArray()
            };
            this.fnAdjustColumnSizing = function(a) {
                var b = this.api(!0).columns.adjust(),
                    c = b.settings()[0],
                    d = c.oScroll;
                a === k || a ? b.draw(!1) :
                    ("" !== d.sX || "" !== d.sY) && ka(c)
            };
            this.fnClearTable = function(a) {
                var b = this.api(!0).clear();
                (a === k || a) && b.draw()
            };
            this.fnClose = function(a) {
                this.api(!0).row(a).child.hide()
            };
            this.fnDeleteRow = function(a, b, c) {
                var d = this.api(!0),
                    a = d.rows(a),
                    e = a.settings()[0],
                    h = e.aoData[a[0][0]];
                a.remove();
                b && b.call(this, e, h);
                (c === k || c) && d.draw();
                return h
            };
            this.fnDestroy = function(a) {
                this.api(!0).destroy(a)
            };
            this.fnDraw = function(a) {
                this.api(!0).draw(a)
            };
            this.fnFilter = function(a, b, c, d, e, h) {
                e = this.api(!0);
                null === b || b === k ? e.search(a,
                    c, d, h) : e.column(b).search(a, c, d, h);
                e.draw()
            };
            this.fnGetData = function(a, b) {
                var c = this.api(!0);
                if (a !== k) {
                    var d = a.nodeName ? a.nodeName.toLowerCase() : "";
                    return b !== k || "td" == d || "th" == d ? c.cell(a, b).data() : c.row(a).data() || null
                }
                return c.data().toArray()
            };
            this.fnGetNodes = function(a) {
                var b = this.api(!0);
                return a !== k ? b.row(a).node() : b.rows().nodes().flatten().toArray()
            };
            this.fnGetPosition = function(a) {
                var b = this.api(!0),
                    c = a.nodeName.toUpperCase();
                return "TR" == c ? b.row(a).index() : "TD" == c || "TH" == c ? (a = b.cell(a).index(), [a.row, a.columnVisible, a.column]) : null
            };
            this.fnIsOpen = function(a) {
                return this.api(!0).row(a).child.isShown()
            };
            this.fnOpen = function(a, b, c) {
                return this.api(!0).row(a).child(b, c).show().child()[0]
            };
            this.fnPageChange = function(a, b) {
                var c = this.api(!0).page(a);
                (b === k || b) && c.draw(!1)
            };
            this.fnSetColumnVis = function(a, b, c) {
                a = this.api(!0).column(a).visible(b);
                (c === k || c) && a.columns.adjust().draw()
            };
            this.fnSettings = function() {
                return xa(this[v.iApiIndex])
            };
            this.fnSort = function(a) {
                this.api(!0).order(a).draw()
            };
            this.fnSortListener =
                function(a, b, c) {
                    this.api(!0).order.listener(a, b, c)
                };
            this.fnUpdate = function(a, b, c, d, e) {
                var h = this.api(!0);
                c === k || null === c ? h.row(b).data(a) : h.cell(b, c).data(a);
                (e === k || e) && h.columns.adjust();
                (d === k || d) && h.draw();
                return 0
            };
            this.fnVersionCheck = v.fnVersionCheck;
            var b = this,
                c = a === k,
                d = this.length;
            c && (a = {});
            this.oApi = this.internal = v.internal;
            for (var e in m.ext.internal) e && (this[e] = Nb(e));
            this.each(function() {
                var e = {},
                    e = 1 < d ? Lb(e, a, !0) : a,
                    g = 0,
                    j, i = this.getAttribute("id"),
                    n = !1,
                    l = m.defaults,
                    q = h(this);
                if ("table" !=
                    this.nodeName.toLowerCase()) L(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2);
                else {
                    eb(l);
                    fb(l.column);
                    K(l, l, !0);
                    K(l.column, l.column, !0);
                    K(l, h.extend(e, q.data()));
                    var t = m.settings,
                        g = 0;
                    for (j = t.length; g < j; g++) {
                        var p = t[g];
                        if (p.nTable == this || p.nTHead.parentNode == this || p.nTFoot && p.nTFoot.parentNode == this) {
                            g = e.bRetrieve !== k ? e.bRetrieve : l.bRetrieve;
                            if (c || g) return p.oInstance;
                            if (e.bDestroy !== k ? e.bDestroy : l.bDestroy) {
                                p.oInstance.fnDestroy();
                                break
                            } else {
                                L(p, 0, "Cannot reinitialise DataTable", 3);
                                return
                            }
                        }
                        if (p.sTableId == this.id) {
                            t.splice(g, 1);
                            break
                        }
                    }
                    if (null === i || "" === i) this.id = i = "DataTables_Table_" + m.ext._unique++;
                    var o = h.extend(!0, {}, m.models.oSettings, {
                        sDestroyWidth: q[0].style.width,
                        sInstance: i,
                        sTableId: i
                    });
                    o.nTable = this;
                    o.oApi = b.internal;
                    o.oInit = e;
                    t.push(o);
                    o.oInstance = 1 === b.length ? b : q.dataTable();
                    eb(e);
                    e.oLanguage && Da(e.oLanguage);
                    e.aLengthMenu && !e.iDisplayLength && (e.iDisplayLength = h.isArray(e.aLengthMenu[0]) ? e.aLengthMenu[0][0] : e.aLengthMenu[0]);
                    e = Lb(h.extend(!0, {}, l), e);
                    E(o.oFeatures,
                        e, "bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" "));
                    E(o, e, ["asStripeClasses", "ajax", "fnServerData", "fnFormatNumber", "sServerMethod", "aaSorting", "aaSortingFixed", "aLengthMenu", "sPaginationType", "sAjaxSource", "sAjaxDataProp", "iStateDuration", "sDom", "bSortCellsTop", "iTabIndex", "fnStateLoadCallback", "fnStateSaveCallback", "renderer", "searchDelay", "rowId", ["iCookieDuration", "iStateDuration"],
                        ["oSearch", "oPreviousSearch"],
                        ["aoSearchCols",
                            "aoPreSearchCols"
                        ],
                        ["iDisplayLength", "_iDisplayLength"],
                        ["bJQueryUI", "bJUI"]
                    ]);
                    E(o.oScroll, e, [
                        ["sScrollX", "sX"],
                        ["sScrollXInner", "sXInner"],
                        ["sScrollY", "sY"],
                        ["bScrollCollapse", "bCollapse"]
                    ]);
                    E(o.oLanguage, e, "fnInfoCallback");
                    z(o, "aoDrawCallback", e.fnDrawCallback, "user");
                    z(o, "aoServerParams", e.fnServerParams, "user");
                    z(o, "aoStateSaveParams", e.fnStateSaveParams, "user");
                    z(o, "aoStateLoadParams", e.fnStateLoadParams, "user");
                    z(o, "aoStateLoaded", e.fnStateLoaded, "user");
                    z(o, "aoRowCallback", e.fnRowCallback,
                        "user");
                    z(o, "aoRowCreatedCallback", e.fnCreatedRow, "user");
                    z(o, "aoHeaderCallback", e.fnHeaderCallback, "user");
                    z(o, "aoFooterCallback", e.fnFooterCallback, "user");
                    z(o, "aoInitComplete", e.fnInitComplete, "user");
                    z(o, "aoPreDrawCallback", e.fnPreDrawCallback, "user");
                    o.rowIdFn = Q(e.rowId);
                    gb(o);
                    i = o.oClasses;
                    e.bJQueryUI ? (h.extend(i, m.ext.oJUIClasses, e.oClasses), e.sDom === l.sDom && "lfrtip" === l.sDom && (o.sDom = '<"H"lfr>t<"F"ip>'), o.renderer) ? h.isPlainObject(o.renderer) && !o.renderer.header && (o.renderer.header = "jqueryui") :
                        o.renderer = "jqueryui" : h.extend(i, m.ext.classes, e.oClasses);
                    q.addClass(i.sTable);
                    o.iInitDisplayStart === k && (o.iInitDisplayStart = e.iDisplayStart, o._iDisplayStart = e.iDisplayStart);
                    null !== e.iDeferLoading && (o.bDeferLoading = !0, g = h.isArray(e.iDeferLoading), o._iRecordsDisplay = g ? e.iDeferLoading[0] : e.iDeferLoading, o._iRecordsTotal = g ? e.iDeferLoading[1] : e.iDeferLoading);
                    var r = o.oLanguage;
                    h.extend(!0, r, e.oLanguage);
                    "" !== r.sUrl && (h.ajax({
                        dataType: "json",
                        url: r.sUrl,
                        success: function(a) {
                            Da(a);
                            K(l.oLanguage, a);
                            h.extend(true,
                                r, a);
                            ga(o)
                        },
                        error: function() {
                            ga(o)
                        }
                    }), n = !0);
                    null === e.asStripeClasses && (o.asStripeClasses = [i.sStripeOdd, i.sStripeEven]);
                    var g = o.asStripeClasses,
                        v = q.children("tbody").find("tr").eq(0); - 1 !== h.inArray(!0, h.map(g, function(a) {
                        return v.hasClass(a)
                    })) && (h("tbody tr", this).removeClass(g.join(" ")), o.asDestroyStripes = g.slice());
                    t = [];
                    g = this.getElementsByTagName("thead");
                    0 !== g.length && (da(o.aoHeader, g[0]), t = qa(o));
                    if (null === e.aoColumns) {
                        p = [];
                        g = 0;
                        for (j = t.length; g < j; g++) p.push(null)
                    } else p = e.aoColumns;
                    g = 0;
                    for (j =
                        p.length; g < j; g++) Ea(o, t ? t[g] : null);
                    ib(o, e.aoColumnDefs, p, function(a, b) {
                        ja(o, a, b)
                    });
                    if (v.length) {
                        var s = function(a, b) {
                            return a.getAttribute("data-" + b) !== null ? b : null
                        };
                        h(v[0]).children("th, td").each(function(a, b) {
                            var c = o.aoColumns[a];
                            if (c.mData === a) {
                                var d = s(b, "sort") || s(b, "order"),
                                    e = s(b, "filter") || s(b, "search");
                                if (d !== null || e !== null) {
                                    c.mData = {
                                        _: a + ".display",
                                        sort: d !== null ? a + ".@data-" + d : k,
                                        type: d !== null ? a + ".@data-" + d : k,
                                        filter: e !== null ? a + ".@data-" + e : k
                                    };
                                    ja(o, a)
                                }
                            }
                        })
                    }
                    var w = o.oFeatures;
                    e.bStateSave && (w.bStateSave = !0, Kb(o, e), z(o, "aoDrawCallback", wa, "state_save"));
                    if (e.aaSorting === k) {
                        t = o.aaSorting;
                        g = 0;
                        for (j = t.length; g < j; g++) t[g][1] = o.aoColumns[g].asSorting[0]
                    }
                    va(o);
                    w.bSort && z(o, "aoDrawCallback", function() {
                        if (o.bSorted) {
                            var a = V(o),
                                b = {};
                            h.each(a, function(a, c) {
                                b[c.src] = c.dir
                            });
                            u(o, null, "order", [o, a, b]);
                            Jb(o)
                        }
                    });
                    z(o, "aoDrawCallback", function() {
                        (o.bSorted || y(o) === "ssp" || w.bDeferRender) && va(o)
                    }, "sc");
                    g = q.children("caption").each(function() {
                        this._captionSide = q.css("caption-side")
                    });
                    j = q.children("thead");
                    0 === j.length &&
                        (j = h("<thead/>").appendTo(this));
                    o.nTHead = j[0];
                    j = q.children("tbody");
                    0 === j.length && (j = h("<tbody/>").appendTo(this));
                    o.nTBody = j[0];
                    j = q.children("tfoot");
                    if (0 === j.length && 0 < g.length && ("" !== o.oScroll.sX || "" !== o.oScroll.sY)) j = h("<tfoot/>").appendTo(this);
                    0 === j.length || 0 === j.children().length ? q.addClass(i.sNoFooter) : 0 < j.length && (o.nTFoot = j[0], da(o.aoFooter, o.nTFoot));
                    if (e.aaData)
                        for (g = 0; g < e.aaData.length; g++) N(o, e.aaData[g]);
                    else(o.bDeferLoading || "dom" == y(o)) && ma(o, h(o.nTBody).children("tr"));
                    o.aiDisplay =
                        o.aiDisplayMaster.slice();
                    o.bInitialised = !0;
                    !1 === n && ga(o)
                }
            });
            b = null;
            return this
        },
        v, r, p, s, Ya = {},
        Ob = /[\r\n]/g,
        Aa = /<.*?>/g,
        ac = /^[\w\+\-]/,
        bc = /[\w\+\-]$/,
        cc = RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)", "g"),
        Xa = /[',$Â£â‚¬Â¥%\u2009\u202F\u20BD\u20a9\u20BArfk]/gi,
        M = function(a) {
            return !a || !0 === a || "-" === a ? !0 : !1
        },
        Pb = function(a) {
            var b = parseInt(a, 10);
            return !isNaN(b) && isFinite(a) ? b : null
        },
        Qb = function(a, b) {
            Ya[b] || (Ya[b] = RegExp(Qa(b), "g"));
            return "string" === typeof a && "." !== b ? a.replace(/\./g,
                "").replace(Ya[b], ".") : a
        },
        Za = function(a, b, c) {
            var d = "string" === typeof a;
            if (M(a)) return !0;
            b && d && (a = Qb(a, b));
            c && d && (a = a.replace(Xa, ""));
            return !isNaN(parseFloat(a)) && isFinite(a)
        },
        Rb = function(a, b, c) {
            return M(a) ? !0 : !(M(a) || "string" === typeof a) ? null : Za(a.replace(Aa, ""), b, c) ? !0 : null
        },
        G = function(a, b, c) {
            var d = [],
                e = 0,
                f = a.length;
            if (c !== k)
                for (; e < f; e++) a[e] && a[e][b] && d.push(a[e][b][c]);
            else
                for (; e < f; e++) a[e] && d.push(a[e][b]);
            return d
        },
        ha = function(a, b, c, d) {
            var e = [],
                f = 0,
                g = b.length;
            if (d !== k)
                for (; f < g; f++) a[b[f]][c] &&
                    e.push(a[b[f]][c][d]);
            else
                for (; f < g; f++) e.push(a[b[f]][c]);
            return e
        },
        W = function(a, b) {
            var c = [],
                d;
            b === k ? (b = 0, d = a) : (d = b, b = a);
            for (var e = b; e < d; e++) c.push(e);
            return c
        },
        Sb = function(a) {
            for (var b = [], c = 0, d = a.length; c < d; c++) a[c] && b.push(a[c]);
            return b
        },
        pa = function(a) {
            var b = [],
                c, d, e = a.length,
                f, g = 0;
            d = 0;
            a: for (; d < e; d++) {
                c = a[d];
                for (f = 0; f < g; f++)
                    if (b[f] === c) continue a;
                b.push(c);
                g++
            }
            return b
        };
    m.util = {
        throttle: function(a, b) {
            var c = b !== k ? b : 200,
                d, e;
            return function() {
                var b = this,
                    g = +new Date,
                    h = arguments;
                d && g < d + c ? (clearTimeout(e),
                    e = setTimeout(function() {
                        d = k;
                        a.apply(b, h)
                    }, c)) : (d = g, a.apply(b, h))
            }
        },
        escapeRegex: function(a) {
            return a.replace(cc, "\\$1")
        }
    };
    var A = function(a, b, c) {
            a[b] !== k && (a[c] = a[b])
        },
        ba = /\[.*?\]$/,
        U = /\(\)$/,
        Qa = m.util.escapeRegex,
        ua = h("<div>")[0],
        Zb = ua.textContent !== k,
        $b = /<.*?>/g,
        Oa = m.util.throttle,
        Tb = [],
        w = Array.prototype,
        dc = function(a) {
            var b, c, d = m.settings,
                e = h.map(d, function(a) {
                    return a.nTable
                });
            if (a) {
                if (a.nTable && a.oApi) return [a];
                if (a.nodeName && "table" === a.nodeName.toLowerCase()) return b = h.inArray(a, e), -1 !== b ? [d[b]] :
                    null;
                if (a && "function" === typeof a.settings) return a.settings().toArray();
                "string" === typeof a ? c = h(a) : a instanceof h && (c = a)
            } else return [];
            if (c) return c.map(function() {
                b = h.inArray(this, e);
                return -1 !== b ? d[b] : null
            }).toArray()
        };
    r = function(a, b) {
        if (!(this instanceof r)) return new r(a, b);
        var c = [],
            d = function(a) {
                (a = dc(a)) && (c = c.concat(a))
            };
        if (h.isArray(a))
            for (var e = 0, f = a.length; e < f; e++) d(a[e]);
        else d(a);
        this.context = pa(c);
        b && h.merge(this, b);
        this.selector = {
            rows: null,
            cols: null,
            opts: null
        };
        r.extend(this, this, Tb)
    };
    m.Api = r;
    h.extend(r.prototype, {
        any: function() {
            return 0 !== this.count()
        },
        concat: w.concat,
        context: [],
        count: function() {
            return this.flatten().length
        },
        each: function(a) {
            for (var b = 0, c = this.length; b < c; b++) a.call(this, this[b], b, this);
            return this
        },
        eq: function(a) {
            var b = this.context;
            return b.length > a ? new r(b[a], this[a]) : null
        },
        filter: function(a) {
            var b = [];
            if (w.filter) b = w.filter.call(this, a, this);
            else
                for (var c = 0, d = this.length; c < d; c++) a.call(this, this[c], c, this) && b.push(this[c]);
            return new r(this.context, b)
        },
        flatten: function() {
            var a = [];
            return new r(this.context, a.concat.apply(a, this.toArray()))
        },
        join: w.join,
        indexOf: w.indexOf || function(a, b) {
            for (var c = b || 0, d = this.length; c < d; c++)
                if (this[c] === a) return c;
            return -1
        },
        iterator: function(a, b, c, d) {
            var e = [],
                f, g, h, i, n, l = this.context,
                m, t, p = this.selector;
            "string" === typeof a && (d = c, c = b, b = a, a = !1);
            g = 0;
            for (h = l.length; g < h; g++) {
                var o = new r(l[g]);
                if ("table" === b) f = c.call(o, l[g], g), f !== k && e.push(f);
                else if ("columns" === b || "rows" === b) f = c.call(o, l[g], this[g], g), f !== k && e.push(f);
                else if ("column" === b || "column-rows" ===
                    b || "row" === b || "cell" === b) {
                    t = this[g];
                    "column-rows" === b && (m = Ba(l[g], p.opts));
                    i = 0;
                    for (n = t.length; i < n; i++) f = t[i], f = "cell" === b ? c.call(o, l[g], f.row, f.column, g, i) : c.call(o, l[g], f, g, i, m), f !== k && e.push(f)
                }
            }
            return e.length || d ? (a = new r(l, a ? e.concat.apply([], e) : e), b = a.selector, b.rows = p.rows, b.cols = p.cols, b.opts = p.opts, a) : this
        },
        lastIndexOf: w.lastIndexOf || function(a, b) {
            return this.indexOf.apply(this.toArray.reverse(), arguments)
        },
        length: 0,
        map: function(a) {
            var b = [];
            if (w.map) b = w.map.call(this, a, this);
            else
                for (var c =
                        0, d = this.length; c < d; c++) b.push(a.call(this, this[c], c));
            return new r(this.context, b)
        },
        pluck: function(a) {
            return this.map(function(b) {
                return b[a]
            })
        },
        pop: w.pop,
        push: w.push,
        reduce: w.reduce || function(a, b) {
            return hb(this, a, b, 0, this.length, 1)
        },
        reduceRight: w.reduceRight || function(a, b) {
            return hb(this, a, b, this.length - 1, -1, -1)
        },
        reverse: w.reverse,
        selector: null,
        shift: w.shift,
        sort: w.sort,
        splice: w.splice,
        toArray: function() {
            return w.slice.call(this)
        },
        to$: function() {
            return h(this)
        },
        toJQuery: function() {
            return h(this)
        },
        unique: function() {
            return new r(this.context, pa(this))
        },
        unshift: w.unshift
    });
    r.extend = function(a, b, c) {
        if (c.length && b && (b instanceof r || b.__dt_wrapper)) {
            var d, e, f, g = function(a, b, c) {
                return function() {
                    var d = b.apply(a, arguments);
                    r.extend(d, d, c.methodExt);
                    return d
                }
            };
            d = 0;
            for (e = c.length; d < e; d++) f = c[d], b[f.name] = "function" === typeof f.val ? g(a, f.val, f) : h.isPlainObject(f.val) ? {} : f.val, b[f.name].__dt_wrapper = !0, r.extend(a, b[f.name], f.propExt)
        }
    };
    r.register = p = function(a, b) {
        if (h.isArray(a))
            for (var c = 0, d = a.length; c <
                d; c++) r.register(a[c], b);
        else
            for (var e = a.split("."), f = Tb, g, j, c = 0, d = e.length; c < d; c++) {
                g = (j = -1 !== e[c].indexOf("()")) ? e[c].replace("()", "") : e[c];
                var i;
                a: {
                    i = 0;
                    for (var n = f.length; i < n; i++)
                        if (f[i].name === g) {
                            i = f[i];
                            break a
                        }
                    i = null
                }
                i || (i = {
                    name: g,
                    val: {},
                    methodExt: [],
                    propExt: []
                }, f.push(i));
                c === d - 1 ? i.val = b : f = j ? i.methodExt : i.propExt
            }
    };
    r.registerPlural = s = function(a, b, c) {
        r.register(a, c);
        r.register(b, function() {
            var a = c.apply(this, arguments);
            return a === this ? this : a instanceof r ? a.length ? h.isArray(a[0]) ? new r(a.context,
                a[0]) : a[0] : k : a
        })
    };
    p("tables()", function(a) {
        var b;
        if (a) {
            b = r;
            var c = this.context;
            if ("number" === typeof a) a = [c[a]];
            else var d = h.map(c, function(a) {
                    return a.nTable
                }),
                a = h(d).filter(a).map(function() {
                    var a = h.inArray(this, d);
                    return c[a]
                }).toArray();
            b = new b(a)
        } else b = this;
        return b
    });
    p("table()", function(a) {
        var a = this.tables(a),
            b = a.context;
        return b.length ? new r(b[0]) : a
    });
    s("tables().nodes()", "table().node()", function() {
        return this.iterator("table", function(a) {
            return a.nTable
        }, 1)
    });
    s("tables().body()", "table().body()",
        function() {
            return this.iterator("table", function(a) {
                return a.nTBody
            }, 1)
        });
    s("tables().header()", "table().header()", function() {
        return this.iterator("table", function(a) {
            return a.nTHead
        }, 1)
    });
    s("tables().footer()", "table().footer()", function() {
        return this.iterator("table", function(a) {
            return a.nTFoot
        }, 1)
    });
    s("tables().containers()", "table().container()", function() {
        return this.iterator("table", function(a) {
            return a.nTableWrapper
        }, 1)
    });
    p("draw()", function(a) {
        return this.iterator("table", function(b) {
            "page" ===
            a ? O(b) : ("string" === typeof a && (a = "full-hold" === a ? !1 : !0), T(b, !1 === a))
        })
    });
    p("page()", function(a) {
        return a === k ? this.page.info().page : this.iterator("table", function(b) {
            Ta(b, a)
        })
    });
    p("page.info()", function() {
        if (0 === this.context.length) return k;
        var a = this.context[0],
            b = a._iDisplayStart,
            c = a.oFeatures.bPaginate ? a._iDisplayLength : -1,
            d = a.fnRecordsDisplay(),
            e = -1 === c;
        return {
            page: e ? 0 : Math.floor(b / c),
            pages: e ? 1 : Math.ceil(d / c),
            start: b,
            end: a.fnDisplayEnd(),
            length: c,
            recordsTotal: a.fnRecordsTotal(),
            recordsDisplay: d,
            serverSide: "ssp" === y(a)
        }
    });
    p("page.len()", function(a) {
        return a === k ? 0 !== this.context.length ? this.context[0]._iDisplayLength : k : this.iterator("table", function(b) {
            Ra(b, a)
        })
    });
    var Ub = function(a, b, c) {
        if (c) {
            var d = new r(a);
            d.one("draw", function() {
                c(d.ajax.json())
            })
        }
        if ("ssp" == y(a)) T(a, b);
        else {
            C(a, !0);
            var e = a.jqXHR;
            e && 4 !== e.readyState && e.abort();
            ra(a, [], function(c) {
                na(a);
                for (var c = sa(a, c), d = 0, e = c.length; d < e; d++) N(a, c[d]);
                T(a, b);
                C(a, !1)
            })
        }
    };
    p("ajax.json()", function() {
        var a = this.context;
        if (0 < a.length) return a[0].json
    });
    p("ajax.params()", function() {
        var a = this.context;
        if (0 < a.length) return a[0].oAjaxData
    });
    p("ajax.reload()", function(a, b) {
        return this.iterator("table", function(c) {
            Ub(c, !1 === b, a)
        })
    });
    p("ajax.url()", function(a) {
        var b = this.context;
        if (a === k) {
            if (0 === b.length) return k;
            b = b[0];
            return b.ajax ? h.isPlainObject(b.ajax) ? b.ajax.url : b.ajax : b.sAjaxSource
        }
        return this.iterator("table", function(b) {
            h.isPlainObject(b.ajax) ? b.ajax.url = a : b.ajax = a
        })
    });
    p("ajax.url().load()", function(a, b) {
        return this.iterator("table", function(c) {
            Ub(c, !1 === b, a)
        })
    });
    var $a = function(a, b, c, d, e) {
            var f = [],
                g, j, i, n, l, m;
            i = typeof b;
            if (!b || "string" === i || "function" === i || b.length === k) b = [b];
            i = 0;
            for (n = b.length; i < n; i++) {
                j = b[i] && b[i].split ? b[i].split(",") : [b[i]];
                l = 0;
                for (m = j.length; l < m; l++)(g = c("string" === typeof j[l] ? h.trim(j[l]) : j[l])) && g.length && (f = f.concat(g))
            }
            a = v.selector[a];
            if (a.length) {
                i = 0;
                for (n = a.length; i < n; i++) f = a[i](d, e, f)
            }
            return pa(f)
        },
        ab = function(a) {
            a || (a = {});
            a.filter && a.search === k && (a.search = a.filter);
            return h.extend({
                search: "none",
                order: "current",
                page: "all"
            }, a)
        },
        bb = function(a) {
            for (var b = 0, c = a.length; b < c; b++)
                if (0 < a[b].length) return a[0] = a[b], a[0].length = 1, a.length = 1, a.context = [a.context[b]], a;
            a.length = 0;
            return a
        },
        Ba = function(a, b) {
            var c, d, e, f = [],
                g = a.aiDisplay;
            c = a.aiDisplayMaster;
            var j = b.search;
            d = b.order;
            e = b.page;
            if ("ssp" == y(a)) return "removed" === j ? [] : W(0, c.length);
            if ("current" == e) {
                c = a._iDisplayStart;
                for (d = a.fnDisplayEnd(); c < d; c++) f.push(g[c])
            } else if ("current" == d || "applied" == d) f = "none" == j ? c.slice() : "applied" == j ? g.slice() : h.map(c, function(a) {
                return -1 ===
                    h.inArray(a, g) ? a : null
            });
            else if ("index" == d || "original" == d) {
                c = 0;
                for (d = a.aoData.length; c < d; c++) "none" == j ? f.push(c) : (e = h.inArray(c, g), (-1 === e && "removed" == j || 0 <= e && "applied" == j) && f.push(c))
            }
            return f
        };
    p("rows()", function(a, b) {
        a === k ? a = "" : h.isPlainObject(a) && (b = a, a = "");
        var b = ab(b),
            c = this.iterator("table", function(c) {
                var e = b;
                return $a("row", a, function(a) {
                    var b = Pb(a);
                    if (b !== null && !e) return [b];
                    var j = Ba(c, e);
                    if (b !== null && h.inArray(b, j) !== -1) return [b];
                    if (!a) return j;
                    if (typeof a === "function") return h.map(j, function(b) {
                        var e =
                            c.aoData[b];
                        return a(b, e._aData, e.nTr) ? b : null
                    });
                    b = Sb(ha(c.aoData, j, "nTr"));
                    if (a.nodeName) {
                        if (a._DT_RowIndex !== k) return [a._DT_RowIndex];
                        if (a._DT_CellIndex) return [a._DT_CellIndex.row];
                        b = h(a).closest("*[data-dt-row]");
                        return b.length ? [b.data("dt-row")] : []
                    }
                    if (typeof a === "string" && a.charAt(0) === "#") {
                        j = c.aIds[a.replace(/^#/, "")];
                        if (j !== k) return [j.idx]
                    }
                    return h(b).filter(a).map(function() {
                        return this._DT_RowIndex
                    }).toArray()
                }, c, e)
            }, 1);
        c.selector.rows = a;
        c.selector.opts = b;
        return c
    });
    p("rows().nodes()", function() {
        return this.iterator("row",
            function(a, b) {
                return a.aoData[b].nTr || k
            }, 1)
    });
    p("rows().data()", function() {
        return this.iterator(!0, "rows", function(a, b) {
            return ha(a.aoData, b, "_aData")
        }, 1)
    });
    s("rows().cache()", "row().cache()", function(a) {
        return this.iterator("row", function(b, c) {
            var d = b.aoData[c];
            return "search" === a ? d._aFilterData : d._aSortData
        }, 1)
    });
    s("rows().invalidate()", "row().invalidate()", function(a) {
        return this.iterator("row", function(b, c) {
            ca(b, c, a)
        })
    });
    s("rows().indexes()", "row().index()", function() {
        return this.iterator("row",
            function(a, b) {
                return b
            }, 1)
    });
    s("rows().ids()", "row().id()", function(a) {
        for (var b = [], c = this.context, d = 0, e = c.length; d < e; d++)
            for (var f = 0, g = this[d].length; f < g; f++) {
                var h = c[d].rowIdFn(c[d].aoData[this[d][f]]._aData);
                b.push((!0 === a ? "#" : "") + h)
            }
        return new r(c, b)
    });
    s("rows().remove()", "row().remove()", function() {
        var a = this;
        this.iterator("row", function(b, c, d) {
            var e = b.aoData,
                f = e[c],
                g, h, i, n, l;
            e.splice(c, 1);
            g = 0;
            for (h = e.length; g < h; g++)
                if (i = e[g], l = i.anCells, null !== i.nTr && (i.nTr._DT_RowIndex = g), null !== l) {
                    i = 0;
                    for (n =
                        l.length; i < n; i++) l[i]._DT_CellIndex.row = g
                }
            oa(b.aiDisplayMaster, c);
            oa(b.aiDisplay, c);
            oa(a[d], c, !1);
            Sa(b);
            c = b.rowIdFn(f._aData);
            c !== k && delete b.aIds[c]
        });
        this.iterator("table", function(a) {
            for (var c = 0, d = a.aoData.length; c < d; c++) a.aoData[c].idx = c
        });
        return this
    });
    p("rows.add()", function(a) {
        var b = this.iterator("table", function(b) {
                var c, f, g, h = [];
                f = 0;
                for (g = a.length; f < g; f++) c = a[f], c.nodeName && "TR" === c.nodeName.toUpperCase() ? h.push(ma(b, c)[0]) : h.push(N(b, c));
                return h
            }, 1),
            c = this.rows(-1);
        c.pop();
        h.merge(c, b);
        return c
    });
    p("row()", function(a, b) {
        return bb(this.rows(a, b))
    });
    p("row().data()", function(a) {
        var b = this.context;
        if (a === k) return b.length && this.length ? b[0].aoData[this[0]]._aData : k;
        b[0].aoData[this[0]]._aData = a;
        ca(b[0], this[0], "data");
        return this
    });
    p("row().node()", function() {
        var a = this.context;
        return a.length && this.length ? a[0].aoData[this[0]].nTr || null : null
    });
    p("row.add()", function(a) {
        a instanceof h && a.length && (a = a[0]);
        var b = this.iterator("table", function(b) {
            return a.nodeName && "TR" === a.nodeName.toUpperCase() ?
                ma(b, a)[0] : N(b, a)
        });
        return this.row(b[0])
    });
    var cb = function(a, b) {
            var c = a.context;
            if (c.length && (c = c[0].aoData[b !== k ? b : a[0]]) && c._details) c._details.remove(), c._detailsShow = k, c._details = k
        },
        Vb = function(a, b) {
            var c = a.context;
            if (c.length && a.length) {
                var d = c[0].aoData[a[0]];
                if (d._details) {
                    (d._detailsShow = b) ? d._details.insertAfter(d.nTr): d._details.detach();
                    var e = c[0],
                        f = new r(e),
                        g = e.aoData;
                    f.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details");
                    0 < G(g, "_details").length && (f.on("draw.dt.DT_details",
                        function(a, b) {
                            e === b && f.rows({
                                page: "current"
                            }).eq(0).each(function(a) {
                                a = g[a];
                                a._detailsShow && a._details.insertAfter(a.nTr)
                            })
                        }), f.on("column-visibility.dt.DT_details", function(a, b) {
                        if (e === b)
                            for (var c, d = aa(b), f = 0, h = g.length; f < h; f++) c = g[f], c._details && c._details.children("td[colspan]").attr("colspan", d)
                    }), f.on("destroy.dt.DT_details", function(a, b) {
                        if (e === b)
                            for (var c = 0, d = g.length; c < d; c++) g[c]._details && cb(f, c)
                    }))
                }
            }
        };
    p("row().child()", function(a, b) {
        var c = this.context;
        if (a === k) return c.length && this.length ?
            c[0].aoData[this[0]]._details : k;
        if (!0 === a) this.child.show();
        else if (!1 === a) cb(this);
        else if (c.length && this.length) {
            var d = c[0],
                c = c[0].aoData[this[0]],
                e = [],
                f = function(a, b) {
                    if (h.isArray(a) || a instanceof h)
                        for (var c = 0, k = a.length; c < k; c++) f(a[c], b);
                    else a.nodeName && "tr" === a.nodeName.toLowerCase() ? e.push(a) : (c = h("<tr><td/></tr>").addClass(b), h("td", c).addClass(b).html(a)[0].colSpan = aa(d), e.push(c[0]))
                };
            f(a, b);
            c._details && c._details.remove();
            c._details = h(e);
            c._detailsShow && c._details.insertAfter(c.nTr)
        }
        return this
    });
    p(["row().child.show()", "row().child().show()"], function() {
        Vb(this, !0);
        return this
    });
    p(["row().child.hide()", "row().child().hide()"], function() {
        Vb(this, !1);
        return this
    });
    p(["row().child.remove()", "row().child().remove()"], function() {
        cb(this);
        return this
    });
    p("row().child.isShown()", function() {
        var a = this.context;
        return a.length && this.length ? a[0].aoData[this[0]]._detailsShow || !1 : !1
    });
    var ec = /^(.+):(name|visIdx|visible)$/,
        Wb = function(a, b, c, d, e) {
            for (var c = [], d = 0, f = e.length; d < f; d++) c.push(B(a, e[d], b));
            return c
        };
    p("columns()", function(a, b) {
        a === k ? a = "" : h.isPlainObject(a) && (b = a, a = "");
        var b = ab(b),
            c = this.iterator("table", function(c) {
                var e = a,
                    f = b,
                    g = c.aoColumns,
                    j = G(g, "sName"),
                    i = G(g, "nTh");
                return $a("column", e, function(a) {
                    var b = Pb(a);
                    if (a === "") return W(g.length);
                    if (b !== null) return [b >= 0 ? b : g.length + b];
                    if (typeof a === "function") {
                        var e = Ba(c, f);
                        return h.map(g, function(b, f) {
                            return a(f, Wb(c, f, 0, 0, e), i[f]) ? f : null
                        })
                    }
                    var k = typeof a === "string" ? a.match(ec) : "";
                    if (k) switch (k[2]) {
                        case "visIdx":
                        case "visible":
                            b = parseInt(k[1],
                                10);
                            if (b < 0) {
                                var m = h.map(g, function(a, b) {
                                    return a.bVisible ? b : null
                                });
                                return [m[m.length + b]]
                            }
                            return [Z(c, b)];
                        case "name":
                            return h.map(j, function(a, b) {
                                return a === k[1] ? b : null
                            });
                        default:
                            return []
                    }
                    if (a.nodeName && a._DT_CellIndex) return [a._DT_CellIndex.column];
                    b = h(i).filter(a).map(function() {
                        return h.inArray(this, i)
                    }).toArray();
                    if (b.length || !a.nodeName) return b;
                    b = h(a).closest("*[data-dt-column]");
                    return b.length ? [b.data("dt-column")] : []
                }, c, f)
            }, 1);
        c.selector.cols = a;
        c.selector.opts = b;
        return c
    });
    s("columns().header()",
        "column().header()",
        function() {
            return this.iterator("column", function(a, b) {
                return a.aoColumns[b].nTh
            }, 1)
        });
    s("columns().footer()", "column().footer()", function() {
        return this.iterator("column", function(a, b) {
            return a.aoColumns[b].nTf
        }, 1)
    });
    s("columns().data()", "column().data()", function() {
        return this.iterator("column-rows", Wb, 1)
    });
    s("columns().dataSrc()", "column().dataSrc()", function() {
        return this.iterator("column", function(a, b) {
            return a.aoColumns[b].mData
        }, 1)
    });
    s("columns().cache()", "column().cache()",
        function(a) {
            return this.iterator("column-rows", function(b, c, d, e, f) {
                return ha(b.aoData, f, "search" === a ? "_aFilterData" : "_aSortData", c)
            }, 1)
        });
    s("columns().nodes()", "column().nodes()", function() {
        return this.iterator("column-rows", function(a, b, c, d, e) {
            return ha(a.aoData, e, "anCells", b)
        }, 1)
    });
    s("columns().visible()", "column().visible()", function(a, b) {
        var c = this.iterator("column", function(b, c) {
            if (a === k) return b.aoColumns[c].bVisible;
            var f = b.aoColumns,
                g = f[c],
                j = b.aoData,
                i, n, l;
            if (a !== k && g.bVisible !== a) {
                if (a) {
                    var m =
                        h.inArray(!0, G(f, "bVisible"), c + 1);
                    i = 0;
                    for (n = j.length; i < n; i++) l = j[i].nTr, f = j[i].anCells, l && l.insertBefore(f[c], f[m] || null)
                } else h(G(b.aoData, "anCells", c)).detach();
                g.bVisible = a;
                ea(b, b.aoHeader);
                ea(b, b.aoFooter);
                wa(b)
            }
        });
        a !== k && (this.iterator("column", function(c, e) {
            u(c, null, "column-visibility", [c, e, a, b])
        }), (b === k || b) && this.columns.adjust());
        return c
    });
    s("columns().indexes()", "column().index()", function(a) {
        return this.iterator("column", function(b, c) {
            return "visible" === a ? $(b, c) : c
        }, 1)
    });
    p("columns.adjust()",
        function() {
            return this.iterator("table", function(a) {
                Y(a)
            }, 1)
        });
    p("column.index()", function(a, b) {
        if (0 !== this.context.length) {
            var c = this.context[0];
            if ("fromVisible" === a || "toData" === a) return Z(c, b);
            if ("fromData" === a || "toVisible" === a) return $(c, b)
        }
    });
    p("column()", function(a, b) {
        return bb(this.columns(a, b))
    });
    p("cells()", function(a, b, c) {
        h.isPlainObject(a) && (a.row === k ? (c = a, a = null) : (c = b, b = null));
        h.isPlainObject(b) && (c = b, b = null);
        if (null === b || b === k) return this.iterator("table", function(b) {
            var d = a,
                e = ab(c),
                f =
                b.aoData,
                g = Ba(b, e),
                j = Sb(ha(f, g, "anCells")),
                i = h([].concat.apply([], j)),
                l, n = b.aoColumns.length,
                m, p, r, u, v, s;
            return $a("cell", d, function(a) {
                var c = typeof a === "function";
                if (a === null || a === k || c) {
                    m = [];
                    p = 0;
                    for (r = g.length; p < r; p++) {
                        l = g[p];
                        for (u = 0; u < n; u++) {
                            v = {
                                row: l,
                                column: u
                            };
                            if (c) {
                                s = f[l];
                                a(v, B(b, l, u), s.anCells ? s.anCells[u] : null) && m.push(v)
                            } else m.push(v)
                        }
                    }
                    return m
                }
                if (h.isPlainObject(a)) return [a];
                c = i.filter(a).map(function(a, b) {
                    return {
                        row: b._DT_CellIndex.row,
                        column: b._DT_CellIndex.column
                    }
                }).toArray();
                if (c.length ||
                    !a.nodeName) return c;
                s = h(a).closest("*[data-dt-row]");
                return s.length ? [{
                    row: s.data("dt-row"),
                    column: s.data("dt-column")
                }] : []
            }, b, e)
        });
        var d = this.columns(b, c),
            e = this.rows(a, c),
            f, g, j, i, n, l = this.iterator("table", function(a, b) {
                f = [];
                g = 0;
                for (j = e[b].length; g < j; g++) {
                    i = 0;
                    for (n = d[b].length; i < n; i++) f.push({
                        row: e[b][g],
                        column: d[b][i]
                    })
                }
                return f
            }, 1);
        h.extend(l.selector, {
            cols: b,
            rows: a,
            opts: c
        });
        return l
    });
    s("cells().nodes()", "cell().node()", function() {
        return this.iterator("cell", function(a, b, c) {
            return (a = a.aoData[b]) &&
                a.anCells ? a.anCells[c] : k
        }, 1)
    });
    p("cells().data()", function() {
        return this.iterator("cell", function(a, b, c) {
            return B(a, b, c)
        }, 1)
    });
    s("cells().cache()", "cell().cache()", function(a) {
        a = "search" === a ? "_aFilterData" : "_aSortData";
        return this.iterator("cell", function(b, c, d) {
            return b.aoData[c][a][d]
        }, 1)
    });
    s("cells().render()", "cell().render()", function(a) {
        return this.iterator("cell", function(b, c, d) {
            return B(b, c, d, a)
        }, 1)
    });
    s("cells().indexes()", "cell().index()", function() {
        return this.iterator("cell", function(a,
            b, c) {
            return {
                row: b,
                column: c,
                columnVisible: $(a, c)
            }
        }, 1)
    });
    s("cells().invalidate()", "cell().invalidate()", function(a) {
        return this.iterator("cell", function(b, c, d) {
            ca(b, c, a, d)
        })
    });
    p("cell()", function(a, b, c) {
        return bb(this.cells(a, b, c))
    });
    p("cell().data()", function(a) {
        var b = this.context,
            c = this[0];
        if (a === k) return b.length && c.length ? B(b[0], c[0].row, c[0].column) : k;
        jb(b[0], c[0].row, c[0].column, a);
        ca(b[0], c[0].row, "data", c[0].column);
        return this
    });
    p("order()", function(a, b) {
        var c = this.context;
        if (a === k) return 0 !==
            c.length ? c[0].aaSorting : k;
        "number" === typeof a ? a = [
            [a, b]
        ] : a.length && !h.isArray(a[0]) && (a = Array.prototype.slice.call(arguments));
        return this.iterator("table", function(b) {
            b.aaSorting = a.slice()
        })
    });
    p("order.listener()", function(a, b, c) {
        return this.iterator("table", function(d) {
            Ma(d, a, b, c)
        })
    });
    p("order.fixed()", function(a) {
        if (!a) {
            var b = this.context,
                b = b.length ? b[0].aaSortingFixed : k;
            return h.isArray(b) ? {
                pre: b
            } : b
        }
        return this.iterator("table", function(b) {
            b.aaSortingFixed = h.extend(!0, {}, a)
        })
    });
    p(["columns().order()",
        "column().order()"
    ], function(a) {
        var b = this;
        return this.iterator("table", function(c, d) {
            var e = [];
            h.each(b[d], function(b, c) {
                e.push([c, a])
            });
            c.aaSorting = e
        })
    });
    p("search()", function(a, b, c, d) {
        var e = this.context;
        return a === k ? 0 !== e.length ? e[0].oPreviousSearch.sSearch : k : this.iterator("table", function(e) {
            e.oFeatures.bFilter && fa(e, h.extend({}, e.oPreviousSearch, {
                sSearch: a + "",
                bRegex: null === b ? !1 : b,
                bSmart: null === c ? !0 : c,
                bCaseInsensitive: null === d ? !0 : d
            }), 1)
        })
    });
    s("columns().search()", "column().search()", function(a,
        b, c, d) {
        return this.iterator("column", function(e, f) {
            var g = e.aoPreSearchCols;
            if (a === k) return g[f].sSearch;
            e.oFeatures.bFilter && (h.extend(g[f], {
                sSearch: a + "",
                bRegex: null === b ? !1 : b,
                bSmart: null === c ? !0 : c,
                bCaseInsensitive: null === d ? !0 : d
            }), fa(e, e.oPreviousSearch, 1))
        })
    });
    p("state()", function() {
        return this.context.length ? this.context[0].oSavedState : null
    });
    p("state.clear()", function() {
        return this.iterator("table", function(a) {
            a.fnStateSaveCallback.call(a.oInstance, a, {})
        })
    });
    p("state.loaded()", function() {
        return this.context.length ?
            this.context[0].oLoadedState : null
    });
    p("state.save()", function() {
        return this.iterator("table", function(a) {
            wa(a)
        })
    });
    m.versionCheck = m.fnVersionCheck = function(a) {
        for (var b = m.version.split("."), a = a.split("."), c, d, e = 0, f = a.length; e < f; e++)
            if (c = parseInt(b[e], 10) || 0, d = parseInt(a[e], 10) || 0, c !== d) return c > d;
        return !0
    };
    m.isDataTable = m.fnIsDataTable = function(a) {
        var b = h(a).get(0),
            c = !1;
        h.each(m.settings, function(a, e) {
            var f = e.nScrollHead ? h("table", e.nScrollHead)[0] : null,
                g = e.nScrollFoot ? h("table", e.nScrollFoot)[0] :
                null;
            if (e.nTable === b || f === b || g === b) c = !0
        });
        return c
    };
    m.tables = m.fnTables = function(a) {
        var b = !1;
        h.isPlainObject(a) && (b = a.api, a = a.visible);
        var c = h.map(m.settings, function(b) {
            if (!a || a && h(b.nTable).is(":visible")) return b.nTable
        });
        return b ? new r(c) : c
    };
    m.camelToHungarian = K;
    p("$()", function(a, b) {
        var c = this.rows(b).nodes(),
            c = h(c);
        return h([].concat(c.filter(a).toArray(), c.find(a).toArray()))
    });
    h.each(["on", "one", "off"], function(a, b) {
        p(b + "()", function() {
            var a = Array.prototype.slice.call(arguments);
            a[0].match(/\.dt\b/) ||
                (a[0] += ".dt");
            var d = h(this.tables().nodes());
            d[b].apply(d, a);
            return this
        })
    });
    p("clear()", function() {
        return this.iterator("table", function(a) {
            na(a)
        })
    });
    p("settings()", function() {
        return new r(this.context, this.context)
    });
    p("init()", function() {
        var a = this.context;
        return a.length ? a[0].oInit : null
    });
    p("data()", function() {
        return this.iterator("table", function(a) {
            return G(a.aoData, "_aData")
        }).flatten()
    });
    p("destroy()", function(a) {
        a = a || !1;
        return this.iterator("table", function(b) {
            var c = b.nTableWrapper.parentNode,
                d = b.oClasses,
                e = b.nTable,
                f = b.nTBody,
                g = b.nTHead,
                j = b.nTFoot,
                i = h(e),
                f = h(f),
                k = h(b.nTableWrapper),
                l = h.map(b.aoData, function(a) {
                    return a.nTr
                }),
                p;
            b.bDestroying = !0;
            u(b, "aoDestroyCallback", "destroy", [b]);
            a || (new r(b)).columns().visible(!0);
            k.unbind(".DT").find(":not(tbody *)").unbind(".DT");
            h(D).unbind(".DT-" + b.sInstance);
            e != g.parentNode && (i.children("thead").detach(), i.append(g));
            j && e != j.parentNode && (i.children("tfoot").detach(), i.append(j));
            b.aaSorting = [];
            b.aaSortingFixed = [];
            va(b);
            h(l).removeClass(b.asStripeClasses.join(" "));
            h("th, td", g).removeClass(d.sSortable + " " + d.sSortableAsc + " " + d.sSortableDesc + " " + d.sSortableNone);
            b.bJUI && (h("th span." + d.sSortIcon + ", td span." + d.sSortIcon, g).detach(), h("th, td", g).each(function() {
                var a = h("div." + d.sSortJUIWrapper, this);
                h(this).append(a.contents());
                a.detach()
            }));
            f.children().detach();
            f.append(l);
            g = a ? "remove" : "detach";
            i[g]();
            k[g]();
            !a && c && (c.insertBefore(e, b.nTableReinsertBefore), i.css("width", b.sDestroyWidth).removeClass(d.sTable), (p = b.asDestroyStripes.length) && f.children().each(function(a) {
                h(this).addClass(b.asDestroyStripes[a %
                    p])
            }));
            c = h.inArray(b, m.settings); - 1 !== c && m.settings.splice(c, 1)
        })
    });
    h.each(["column", "row", "cell"], function(a, b) {
        p(b + "s().every()", function(a) {
            var d = this.selector.opts,
                e = this;
            return this.iterator(b, function(f, g, h, i, n) {
                a.call(e[b](g, "cell" === b ? h : d, "cell" === b ? d : k), g, h, i, n)
            })
        })
    });
    p("i18n()", function(a, b, c) {
        var d = this.context[0],
            a = Q(a)(d.oLanguage);
        a === k && (a = b);
        c !== k && h.isPlainObject(a) && (a = a[c] !== k ? a[c] : a._);
        return a.replace("%d", c)
    });
    m.version = "1.10.12";
    m.settings = [];
    m.models = {};
    m.models.oSearch = {
        bCaseInsensitive: !0,
        sSearch: "",
        bRegex: !1,
        bSmart: !0
    };
    m.models.oRow = {
        nTr: null,
        anCells: null,
        _aData: [],
        _aSortData: null,
        _aFilterData: null,
        _sFilterRow: null,
        _sRowStripe: "",
        src: null,
        idx: -1
    };
    m.models.oColumn = {
        idx: null,
        aDataSort: null,
        asSorting: null,
        bSearchable: null,
        bSortable: null,
        bVisible: null,
        _sManualType: null,
        _bAttrSrc: !1,
        fnCreatedCell: null,
        fnGetData: null,
        fnSetData: null,
        mData: null,
        mRender: null,
        nTh: null,
        nTf: null,
        sClass: null,
        sContentPadding: null,
        sDefaultContent: null,
        sName: null,
        sSortDataType: "std",
        sSortingClass: null,
        sSortingClassJUI: null,
        sTitle: null,
        sType: null,
        sWidth: null,
        sWidthOrig: null
    };
    m.defaults = {
        aaData: null,
        aaSorting: [
            [0, "asc"]
        ],
        aaSortingFixed: [],
        ajax: null,
        aLengthMenu: [10, 25, 50, 100],
        aoColumns: null,
        aoColumnDefs: null,
        aoSearchCols: [],
        asStripeClasses: null,
        bAutoWidth: !0,
        bDeferRender: !1,
        bDestroy: !1,
        bFilter: !0,
        bInfo: !0,
        bJQueryUI: !1,
        bLengthChange: !0,
        bPaginate: !0,
        bProcessing: !1,
        bRetrieve: !1,
        bScrollCollapse: !1,
        bServerSide: !1,
        bSort: !0,
        bSortMulti: !0,
        bSortCellsTop: !1,
        bSortClasses: !0,
        bStateSave: !1,
        fnCreatedRow: null,
        fnDrawCallback: null,
        fnFooterCallback: null,
        fnFormatNumber: function(a) {
            return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands)
        },
        fnHeaderCallback: null,
        fnInfoCallback: null,
        fnInitComplete: null,
        fnPreDrawCallback: null,
        fnRowCallback: null,
        fnServerData: null,
        fnServerParams: null,
        fnStateLoadCallback: function(a) {
            try {
                return JSON.parse((-1 === a.iStateDuration ? sessionStorage : localStorage).getItem("DataTables_" + a.sInstance + "_" + location.pathname))
            } catch (b) {}
        },
        fnStateLoadParams: null,
        fnStateLoaded: null,
        fnStateSaveCallback: function(a, b) {
            try {
                (-1 ===
                    a.iStateDuration ? sessionStorage : localStorage).setItem("DataTables_" + a.sInstance + "_" + location.pathname, JSON.stringify(b))
            } catch (c) {}
        },
        fnStateSaveParams: null,
        iStateDuration: 7200,
        iDeferLoading: null,
        iDisplayLength: 10,
        iDisplayStart: 0,
        iTabIndex: 0,
        oClasses: {},
        oLanguage: {
            oAria: {
                sSortAscending: ": activate to sort column ascending",
                sSortDescending: ": activate to sort column descending"
            },
            oPaginate: {
                sFirst: "First",
                sLast: "Last",
                sNext: "Next",
                sPrevious: "Previous"
            },
            sEmptyTable: "No data available in table",
            sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
            sInfoEmpty: "Showing 0 to 0 of 0 entries",
            sInfoFiltered: "(filtered from _MAX_ total entries)",
            sInfoPostFix: "",
            sDecimal: "",
            sThousands: ",",
            sLengthMenu: " _MENU_ ",
            sLoadingRecords: "Loading...",
            sProcessing: "Processing...",
            sSearch: "",
            sSearchPlaceholder: "",
            sUrl: "",
            sZeroRecords: "No matching records found"
        },
        oSearch: h.extend({}, m.models.oSearch),
        sAjaxDataProp: "data",
        sAjaxSource: null,
        sDom: "lfrtip",
        searchDelay: null,
        sPaginationType: "simple_numbers",
        sScrollX: "",
        sScrollXInner: "",
        sScrollY: "",
        sServerMethod: "GET",
        renderer: null,
        rowId: "DT_RowId"
    };
    X(m.defaults);
    m.defaults.column = {
        aDataSort: null,
        iDataSort: -1,
        asSorting: ["asc", "desc"],
        bSearchable: !0,
        bSortable: !0,
        bVisible: !0,
        fnCreatedCell: null,
        mData: null,
        mRender: null,
        sCellType: "td",
        sClass: "",
        sContentPadding: "",
        sDefaultContent: null,
        sName: "",
        sSortDataType: "std",
        sTitle: null,
        sType: null,
        sWidth: null
    };
    X(m.defaults.column);
    m.models.oSettings = {
        oFeatures: {
            bAutoWidth: null,
            bDeferRender: null,
            bFilter: null,
            bInfo: null,
            bLengthChange: null,
            bPaginate: null,
            bProcessing: null,
            bServerSide: null,
            bSort: null,
            bSortMulti: null,
            bSortClasses: null,
            bStateSave: null
        },
        oScroll: {
            bCollapse: null,
            iBarWidth: 0,
            sX: null,
            sXInner: null,
            sY: null
        },
        oLanguage: {
            fnInfoCallback: null
        },
        oBrowser: {
            bScrollOversize: !1,
            bScrollbarLeft: !1,
            bBounding: !1,
            barWidth: 0
        },
        ajax: null,
        aanFeatures: [],
        aoData: [],
        aiDisplay: [],
        aiDisplayMaster: [],
        aIds: {},
        aoColumns: [],
        aoHeader: [],
        aoFooter: [],
        oPreviousSearch: {},
        aoPreSearchCols: [],
        aaSorting: null,
        aaSortingFixed: [],
        asStripeClasses: null,
        asDestroyStripes: [],
        sDestroyWidth: 0,
        aoRowCallback: [],
        aoHeaderCallback: [],
        aoFooterCallback: [],
        aoDrawCallback: [],
        aoRowCreatedCallback: [],
        aoPreDrawCallback: [],
        aoInitComplete: [],
        aoStateSaveParams: [],
        aoStateLoadParams: [],
        aoStateLoaded: [],
        sTableId: "",
        nTable: null,
        nTHead: null,
        nTFoot: null,
        nTBody: null,
        nTableWrapper: null,
        bDeferLoading: !1,
        bInitialised: !1,
        aoOpenRows: [],
        sDom: null,
        searchDelay: null,
        sPaginationType: "two_button",
        iStateDuration: 0,
        aoStateSave: [],
        aoStateLoad: [],
        oSavedState: null,
        oLoadedState: null,
        sAjaxSource: null,
        sAjaxDataProp: null,
        bAjaxDataGet: !0,
        jqXHR: null,
        json: k,
        oAjaxData: k,
        fnServerData: null,
        aoServerParams: [],
        sServerMethod: null,
        fnFormatNumber: null,
        aLengthMenu: null,
        iDraw: 0,
        bDrawing: !1,
        iDrawError: -1,
        _iDisplayLength: 10,
        _iDisplayStart: 0,
        _iRecordsTotal: 0,
        _iRecordsDisplay: 0,
        bJUI: null,
        oClasses: {},
        bFiltered: !1,
        bSorted: !1,
        bSortCellsTop: null,
        oInit: null,
        aoDestroyCallback: [],
        fnRecordsTotal: function() {
            return "ssp" == y(this) ? 1 * this._iRecordsTotal : this.aiDisplayMaster.length
        },
        fnRecordsDisplay: function() {
            return "ssp" == y(this) ? 1 * this._iRecordsDisplay : this.aiDisplay.length
        },
        fnDisplayEnd: function() {
            var a =
                this._iDisplayLength,
                b = this._iDisplayStart,
                c = b + a,
                d = this.aiDisplay.length,
                e = this.oFeatures,
                f = e.bPaginate;
            return e.bServerSide ? !1 === f || -1 === a ? b + d : Math.min(b + a, this._iRecordsDisplay) : !f || c > d || -1 === a ? d : c
        },
        oInstance: null,
        sInstance: null,
        iTabIndex: 0,
        nScrollHead: null,
        nScrollFoot: null,
        aLastSort: [],
        oPlugins: {},
        rowIdFn: null,
        rowId: null
    };
    m.ext = v = {
        buttons: {},
        classes: {},
        builder: "-source-",
        errMode: "alert",
        feature: [],
        search: [],
        selector: {
            cell: [],
            column: [],
            row: []
        },
        internal: {},
        legacy: {
            ajax: null
        },
        pager: {},
        renderer: {
            pageButton: {},
            header: {}
        },
        order: {},
        type: {
            detect: [],
            search: {},
            order: {}
        },
        _unique: 0,
        fnVersionCheck: m.fnVersionCheck,
        iApiIndex: 0,
        oJUIClasses: {},
        sVersion: m.version
    };
    h.extend(v, {
        afnFiltering: v.search,
        aTypes: v.type.detect,
        ofnSearch: v.type.search,
        oSort: v.type.order,
        afnSortData: v.order,
        aoFeatures: v.feature,
        oApi: v.internal,
        oStdClasses: v.classes,
        oPagination: v.pager
    });
    h.extend(m.ext.classes, {
        sTable: "dataTable",
        sNoFooter: "no-footer",
        sPageButton: "paginate_button",
        sPageButtonActive: "current",
        sPageButtonDisabled: "disabled",
        sStripeOdd: "odd",
        sStripeEven: "even",
        sRowEmpty: "dataTables_empty",
        sWrapper: "dataTables_wrapper",
        sFilter: "dataTables_filter",
        sInfo: "dataTables_info",
        sPaging: "dataTables_paginate paging_",
        sLength: "dataTables_length",
        sProcessing: "dataTables_processing",
        sSortAsc: "sorting_asc",
        sSortDesc: "sorting_desc",
        sSortable: "sorting",
        sSortableAsc: "sorting_asc_disabled",
        sSortableDesc: "sorting_desc_disabled",
        sSortableNone: "sorting_disabled",
        sSortColumn: "sorting_",
        sFilterInput: "",
        sLengthSelect: "",
        sScrollWrapper: "dataTables_scroll",
        sScrollHead: "dataTables_scrollHead",
        sScrollHeadInner: "dataTables_scrollHeadInner",
        sScrollBody: "dataTables_scrollBody",
        sScrollFoot: "dataTables_scrollFoot",
        sScrollFootInner: "dataTables_scrollFootInner",
        sHeaderTH: "",
        sFooterTH: "",
        sSortJUIAsc: "",
        sSortJUIDesc: "",
        sSortJUI: "",
        sSortJUIAscAllowed: "",
        sSortJUIDescAllowed: "",
        sSortJUIWrapper: "",
        sSortIcon: "",
        sJUIHeader: "",
        sJUIFooter: ""
    });
    var Ca = "",
        Ca = "",
        H = Ca + "ui-state-default",
        ia = Ca + "css_right ui-icon ui-icon-",
        Xb = Ca + "fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix";
    h.extend(m.ext.oJUIClasses,
        m.ext.classes, {
            sPageButton: "fg-button ui-button " + H,
            sPageButtonActive: "ui-state-disabled",
            sPageButtonDisabled: "ui-state-disabled",
            sPaging: "dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_",
            sSortAsc: H + " sorting_asc",
            sSortDesc: H + " sorting_desc",
            sSortable: H + " sorting",
            sSortableAsc: H + " sorting_asc_disabled",
            sSortableDesc: H + " sorting_desc_disabled",
            sSortableNone: H + " sorting_disabled",
            sSortJUIAsc: ia + "triangle-1-n",
            sSortJUIDesc: ia + "triangle-1-s",
            sSortJUI: ia + "carat-2-n-s",
            sSortJUIAscAllowed: ia + "carat-1-n",
            sSortJUIDescAllowed: ia + "carat-1-s",
            sSortJUIWrapper: "DataTables_sort_wrapper",
            sSortIcon: "DataTables_sort_icon",
            sScrollHead: "dataTables_scrollHead " + H,
            sScrollFoot: "dataTables_scrollFoot " + H,
            sHeaderTH: H,
            sFooterTH: H,
            sJUIHeader: Xb + " ui-corner-tl ui-corner-tr",
            sJUIFooter: Xb + " ui-corner-bl ui-corner-br"
        });
    var Mb = m.ext.pager;
    h.extend(Mb, {
        simple: function() {
            return ["previous", "next"]
        },
        full: function() {
            return ["first", "previous", "next", "last"]
        },
        numbers: function(a, b) {
            return [ya(a,
                b)]
        },
        simple_numbers: function(a, b) {
            return ["previous", ya(a, b), "next"]
        },
        full_numbers: function(a, b) {
            return ["first", "previous", ya(a, b), "next", "last"]
        },
        _numbers: ya,
        numbers_length: 7
    });
    h.extend(!0, m.ext.renderer, {
        pageButton: {
            _: function(a, b, c, d, e, f) {
                var g = a.oClasses,
                    j = a.oLanguage.oPaginate,
                    i = a.oLanguage.oAria.paginate || {},
                    k, l, m = 0,
                    p = function(b, d) {
                        var o, r, u, s, v = function(b) {
                            Ta(a, b.data.action, true)
                        };
                        o = 0;
                        for (r = d.length; o < r; o++) {
                            s = d[o];
                            if (h.isArray(s)) {
                                u = h("<" + (s.DT_el || "div") + "/>").appendTo(b);
                                p(u, s)
                            } else {
                                k = null;
                                l = "";
                                switch (s) {
                                    case "ellipsis":
                                        b.append('<span class="ellipsis">&#x2026;</span>');
                                        break;
                                    case "first":
                                        k = j.sFirst;
                                        l = s + (e > 0 ? "" : " " + g.sPageButtonDisabled);
                                        break;
                                    case "previous":
                                        k = j.sPrevious;
                                        l = s + (e > 0 ? "" : " " + g.sPageButtonDisabled);
                                        break;
                                    case "next":
                                        k = j.sNext;
                                        l = s + (e < f - 1 ? "" : " " + g.sPageButtonDisabled);
                                        break;
                                    case "last":
                                        k = j.sLast;
                                        l = s + (e < f - 1 ? "" : " " + g.sPageButtonDisabled);
                                        break;
                                    default:
                                        k = s + 1;
                                        l = e === s ? g.sPageButtonActive : ""
                                }
                                if (k !== null) {
                                    u = h("<a>", {
                                        "class": g.sPageButton + " " + l,
                                        "aria-controls": a.sTableId,
                                        "aria-label": i[s],
                                        "data-dt-idx": m,
                                        tabindex: a.iTabIndex,
                                        id: c === 0 && typeof s === "string" ? a.sTableId + "_" + s : null
                                    }).html(k).appendTo(b);
                                    Wa(u, {
                                        action: s
                                    }, v);
                                    m++
                                }
                            }
                        }
                    },
                    r;
                try {
                    r = h(b).find(I.activeElement).data("dt-idx")
                } catch (o) {}
                p(h(b).empty(), d);
                r && h(b).find("[data-dt-idx=" + r + "]").focus()
            }
        }
    });
    h.extend(m.ext.type.detect, [function(a, b) {
        var c = b.oLanguage.sDecimal;
        return Za(a, c) ? "num" + c : null
    }, function(a) {
        if (a && !(a instanceof Date) && (!ac.test(a) || !bc.test(a))) return null;
        var b = Date.parse(a);
        return null !== b && !isNaN(b) || M(a) ? "date" :
            null
    }, function(a, b) {
        var c = b.oLanguage.sDecimal;
        return Za(a, c, !0) ? "num-fmt" + c : null
    }, function(a, b) {
        var c = b.oLanguage.sDecimal;
        return Rb(a, c) ? "html-num" + c : null
    }, function(a, b) {
        var c = b.oLanguage.sDecimal;
        return Rb(a, c, !0) ? "html-num-fmt" + c : null
    }, function(a) {
        return M(a) || "string" === typeof a && -1 !== a.indexOf("<") ? "html" : null
    }]);
    h.extend(m.ext.type.search, {
        html: function(a) {
            return M(a) ? a : "string" === typeof a ? a.replace(Ob, " ").replace(Aa, "") : ""
        },
        string: function(a) {
            return M(a) ? a : "string" === typeof a ? a.replace(Ob,
                " ") : a
        }
    });
    var za = function(a, b, c, d) {
        if (0 !== a && (!a || "-" === a)) return -Infinity;
        b && (a = Qb(a, b));
        a.replace && (c && (a = a.replace(c, "")), d && (a = a.replace(d, "")));
        return 1 * a
    };
    h.extend(v.type.order, {
        "date-pre": function(a) {
            return Date.parse(a) || 0
        },
        "html-pre": function(a) {
            return M(a) ? "" : a.replace ? a.replace(/<.*?>/g, "").toLowerCase() : a + ""
        },
        "string-pre": function(a) {
            return M(a) ? "" : "string" === typeof a ? a.toLowerCase() : !a.toString ? "" : a.toString()
        },
        "string-asc": function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        },
        "string-desc": function(a,
            b) {
            return a < b ? 1 : a > b ? -1 : 0
        }
    });
    db("");
    h.extend(!0, m.ext.renderer, {
        header: {
            _: function(a, b, c, d) {
                h(a.nTable).on("order.dt.DT", function(e, f, g, h) {
                    if (a === f) {
                        e = c.idx;
                        b.removeClass(c.sSortingClass + " " + d.sSortAsc + " " + d.sSortDesc).addClass(h[e] == "asc" ? d.sSortAsc : h[e] == "desc" ? d.sSortDesc : c.sSortingClass)
                    }
                })
            },
            jqueryui: function(a, b, c, d) {
                h("<div/>").addClass(d.sSortJUIWrapper).append(b.contents()).append(h("<span/>").addClass(d.sSortIcon + " " + c.sSortingClassJUI)).appendTo(b);
                h(a.nTable).on("order.dt.DT", function(e,
                    f, g, h) {
                    if (a === f) {
                        e = c.idx;
                        b.removeClass(d.sSortAsc + " " + d.sSortDesc).addClass(h[e] == "asc" ? d.sSortAsc : h[e] == "desc" ? d.sSortDesc : c.sSortingClass);
                        b.find("span." + d.sSortIcon).removeClass(d.sSortJUIAsc + " " + d.sSortJUIDesc + " " + d.sSortJUI + " " + d.sSortJUIAscAllowed + " " + d.sSortJUIDescAllowed).addClass(h[e] == "asc" ? d.sSortJUIAsc : h[e] == "desc" ? d.sSortJUIDesc : c.sSortingClassJUI)
                    }
                })
            }
        }
    });
    var Yb = function(a) {
        return "string" === typeof a ? a.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : a
    };
    m.render = {
        number: function(a,
            b, c, d, e) {
            return {
                display: function(f) {
                    if ("number" !== typeof f && "string" !== typeof f) return f;
                    var g = 0 > f ? "-" : "",
                        h = parseFloat(f);
                    if (isNaN(h)) return Yb(f);
                    f = Math.abs(h);
                    h = parseInt(f, 10);
                    f = c ? b + (f - h).toFixed(c).substring(2) : "";
                    return g + (d || "") + h.toString().replace(/\B(?=(\d{3})+(?!\d))/g, a) + f + (e || "")
                }
            }
        },
        text: function() {
            return {
                display: Yb
            }
        }
    };
    h.extend(m.ext.internal, {
        _fnExternApiFunc: Nb,
        _fnBuildAjax: ra,
        _fnAjaxUpdate: lb,
        _fnAjaxParameters: ub,
        _fnAjaxUpdateDraw: vb,
        _fnAjaxDataSrc: sa,
        _fnAddColumn: Ea,
        _fnColumnOptions: ja,
        _fnAdjustColumnSizing: Y,
        _fnVisibleToColumnIndex: Z,
        _fnColumnIndexToVisible: $,
        _fnVisbleColumns: aa,
        _fnGetColumns: la,
        _fnColumnTypes: Ga,
        _fnApplyColumnDefs: ib,
        _fnHungarianMap: X,
        _fnCamelToHungarian: K,
        _fnLanguageCompat: Da,
        _fnBrowserDetect: gb,
        _fnAddData: N,
        _fnAddTr: ma,
        _fnNodeToDataIndex: function(a, b) {
            return b._DT_RowIndex !== k ? b._DT_RowIndex : null
        },
        _fnNodeToColumnIndex: function(a, b, c) {
            return h.inArray(c, a.aoData[b].anCells)
        },
        _fnGetCellData: B,
        _fnSetCellData: jb,
        _fnSplitObjNotation: Ja,
        _fnGetObjectDataFn: Q,
        _fnSetObjectDataFn: R,
        _fnGetDataMaster: Ka,
        _fnClearTable: na,
        _fnDeleteIndex: oa,
        _fnInvalidate: ca,
        _fnGetRowElements: Ia,
        _fnCreateTr: Ha,
        _fnBuildHead: kb,
        _fnDrawHead: ea,
        _fnDraw: O,
        _fnReDraw: T,
        _fnAddOptionsHtml: nb,
        _fnDetectHeader: da,
        _fnGetUniqueThs: qa,
        _fnFeatureHtmlFilter: pb,
        _fnFilterComplete: fa,
        _fnFilterCustom: yb,
        _fnFilterColumn: xb,
        _fnFilter: wb,
        _fnFilterCreateSearch: Pa,
        _fnEscapeRegex: Qa,
        _fnFilterData: zb,
        _fnFeatureHtmlInfo: sb,
        _fnUpdateInfo: Cb,
        _fnInfoMacros: Db,
        _fnInitialise: ga,
        _fnInitComplete: ta,
        _fnLengthChange: Ra,
        _fnFeatureHtmlLength: ob,
        _fnFeatureHtmlPaginate: tb,
        _fnPageChange: Ta,
        _fnFeatureHtmlProcessing: qb,
        _fnProcessingDisplay: C,
        _fnFeatureHtmlTable: rb,
        _fnScrollDraw: ka,
        _fnApplyToChildren: J,
        _fnCalculateColumnWidths: Fa,
        _fnThrottle: Oa,
        _fnConvertToWidth: Fb,
        _fnGetWidestNode: Gb,
        _fnGetMaxLenString: Hb,
        _fnStringToCss: x,
        _fnSortFlatten: V,
        _fnSort: mb,
        _fnSortAria: Jb,
        _fnSortListener: Va,
        _fnSortAttachListener: Ma,
        _fnSortingClasses: va,
        _fnSortData: Ib,
        _fnSaveState: wa,
        _fnLoadState: Kb,
        _fnSettingsFromNode: xa,
        _fnLog: L,
        _fnMap: E,
        _fnBindAction: Wa,
        _fnCallbackReg: z,
        _fnCallbackFire: u,
        _fnLengthOverflow: Sa,
        _fnRenderer: Na,
        _fnDataSource: y,
        _fnRowAttributes: La,
        _fnCalculateEnd: function() {}
    });
    h.fn.dataTable = m;
    m.$ = h;
    h.fn.dataTableSettings = m.settings;
    h.fn.dataTableExt = m.ext;
    h.fn.DataTable = function(a) {
        return h(this).dataTable(a).api()
    };
    h.each(m, function(a, b) {
        h.fn.DataTable[a] = b
    });
    return h.fn.dataTable
});
(function() {
  var CSRFToken, Click, ComponentUrl, EVENTS, Link, ProgressBar, browserIsntBuggy, browserSupportsCustomEvents, browserSupportsPushState, browserSupportsTurbolinks, bypassOnLoadPopstate, cacheCurrentPage, cacheSize, changePage, clone, constrainPageCacheTo, createDocument, crossOriginRedirect, currentState, enableProgressBar, enableTransitionCache, executeScriptTags, extractTitleAndBody, fetch, fetchHistory, fetchReplacement, historyStateIsDefined, initializeTurbolinks, installDocumentReadyPageEventTriggers, installHistoryChangeHandler, installJqueryAjaxSuccessPageUpdateTrigger, loadedAssets, manuallyTriggerHashChangeForFirefox, pageCache, pageChangePrevented, pagesCached, popCookie, processResponse, progressBar, recallScrollPosition, ref, referer, reflectNewUrl, reflectRedirectedUrl, rememberCurrentState, rememberCurrentUrl, rememberReferer, removeNoscriptTags, requestMethodIsSafe, resetScrollPosition, setAutofocusElement, transitionCacheEnabled, transitionCacheFor, triggerEvent, visit, xhr,
    indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty,
    slice = [].slice,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  pageCache = {};

  cacheSize = 10;

  transitionCacheEnabled = false;

  progressBar = null;

  currentState = null;

  loadedAssets = null;

  referer = null;

  xhr = null;

  EVENTS = {
    BEFORE_CHANGE: 'page:before-change',
    FETCH: 'page:fetch',
    RECEIVE: 'page:receive',
    CHANGE: 'page:change',
    UPDATE: 'page:update',
    LOAD: 'page:load',
    RESTORE: 'page:restore',
    BEFORE_UNLOAD: 'page:before-unload',
    EXPIRE: 'page:expire'
  };

  fetch = function(url) {
    var cachedPage;
    url = new ComponentUrl(url);
    rememberReferer();
    cacheCurrentPage();
    if (progressBar != null) {
      progressBar.start();
    }
    if (transitionCacheEnabled && (cachedPage = transitionCacheFor(url.absolute))) {
      fetchHistory(cachedPage);
      return fetchReplacement(url, null, false);
    } else {
      return fetchReplacement(url, resetScrollPosition);
    }
  };

  transitionCacheFor = function(url) {
    var cachedPage;
    cachedPage = pageCache[url];
    if (cachedPage && !cachedPage.transitionCacheDisabled) {
      return cachedPage;
    }
  };

  enableTransitionCache = function(enable) {
    if (enable == null) {
      enable = true;
    }
    return transitionCacheEnabled = enable;
  };

  enableProgressBar = function(enable) {
    if (enable == null) {
      enable = true;
    }
    if (!browserSupportsTurbolinks) {
      return;
    }
    if (enable) {
      return progressBar != null ? progressBar : progressBar = new ProgressBar('html');
    } else {
      if (progressBar != null) {
        progressBar.uninstall();
      }
      return progressBar = null;
    }
  };

  fetchReplacement = function(url, onLoadFunction, showProgressBar) {
    if (showProgressBar == null) {
      showProgressBar = true;
    }
    triggerEvent(EVENTS.FETCH, {
      url: url.absolute
    });
    if (xhr != null) {
      xhr.abort();
    }
    xhr = new XMLHttpRequest;
    xhr.open('GET', url.withoutHashForIE10compatibility(), true);
    xhr.setRequestHeader('Accept', 'text/html, application/xhtml+xml, application/xml');
    xhr.setRequestHeader('X-XHR-Referer', referer);
    xhr.onload = function() {
      var doc;
      triggerEvent(EVENTS.RECEIVE, {
        url: url.absolute
      });
      if (doc = processResponse()) {
        reflectNewUrl(url);
        reflectRedirectedUrl();
        changePage.apply(null, extractTitleAndBody(doc));
        manuallyTriggerHashChangeForFirefox();
        if (typeof onLoadFunction === "function") {
          onLoadFunction();
        }
        return triggerEvent(EVENTS.LOAD);
      } else {
        return document.location.href = crossOriginRedirect() || url.absolute;
      }
    };
    if (progressBar && showProgressBar) {
      xhr.onprogress = (function(_this) {
        return function(event) {
          var percent;
          percent = event.lengthComputable ? event.loaded / event.total * 100 : progressBar.value + (100 - progressBar.value) / 10;
          return progressBar.advanceTo(percent);
        };
      })(this);
    }
    xhr.onloadend = function() {
      return xhr = null;
    };
    xhr.onerror = function() {
      return document.location.href = url.absolute;
    };
    return xhr.send();
  };

  fetchHistory = function(cachedPage) {
    if (xhr != null) {
      xhr.abort();
    }
    changePage(cachedPage.title, cachedPage.body);
    recallScrollPosition(cachedPage);
    return triggerEvent(EVENTS.RESTORE);
  };

  cacheCurrentPage = function() {
    var currentStateUrl;
    currentStateUrl = new ComponentUrl(currentState.url);
    pageCache[currentStateUrl.absolute] = {
      url: currentStateUrl.relative,
      body: document.body,
      title: document.title,
      positionY: window.pageYOffset,
      positionX: window.pageXOffset,
      cachedAt: new Date().getTime(),
      transitionCacheDisabled: document.querySelector('[data-no-transition-cache]') != null
    };
    return constrainPageCacheTo(cacheSize);
  };

  pagesCached = function(size) {
    if (size == null) {
      size = cacheSize;
    }
    if (/^[\d]+$/.test(size)) {
      return cacheSize = parseInt(size);
    }
  };

  constrainPageCacheTo = function(limit) {
    var cacheTimesRecentFirst, i, key, len, pageCacheKeys, results;
    pageCacheKeys = Object.keys(pageCache);
    cacheTimesRecentFirst = pageCacheKeys.map(function(url) {
      return pageCache[url].cachedAt;
    }).sort(function(a, b) {
      return b - a;
    });
    results = [];
    for (i = 0, len = pageCacheKeys.length; i < len; i++) {
      key = pageCacheKeys[i];
      if (!(pageCache[key].cachedAt <= cacheTimesRecentFirst[limit])) {
        continue;
      }
      triggerEvent(EVENTS.EXPIRE, pageCache[key]);
      results.push(delete pageCache[key]);
    }
    return results;
  };

  changePage = function(title, body, csrfToken, runScripts) {
    triggerEvent(EVENTS.BEFORE_UNLOAD);
    document.title = title;
    document.documentElement.replaceChild(body, document.body);
    if (csrfToken != null) {
      CSRFToken.update(csrfToken);
    }
    setAutofocusElement();
    if (runScripts) {
      executeScriptTags();
    }
    currentState = window.history.state;
    if (progressBar != null) {
      progressBar.done();
    }
    triggerEvent(EVENTS.CHANGE);
    return triggerEvent(EVENTS.UPDATE);
  };

  executeScriptTags = function() {
    var attr, copy, i, j, len, len1, nextSibling, parentNode, ref, ref1, script, scripts;
    scripts = Array.prototype.slice.call(document.body.querySelectorAll('script:not([data-turbolinks-eval="false"])'));
    for (i = 0, len = scripts.length; i < len; i++) {
      script = scripts[i];
      if (!((ref = script.type) === '' || ref === 'text/javascript')) {
        continue;
      }
      copy = document.createElement('script');
      ref1 = script.attributes;
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        attr = ref1[j];
        copy.setAttribute(attr.name, attr.value);
      }
      if (!script.hasAttribute('async')) {
        copy.async = false;
      }
      copy.appendChild(document.createTextNode(script.innerHTML));
      parentNode = script.parentNode, nextSibling = script.nextSibling;
      parentNode.removeChild(script);
      parentNode.insertBefore(copy, nextSibling);
    }
  };

  removeNoscriptTags = function(node) {
    node.innerHTML = node.innerHTML.replace(/<noscript[\S\s]*?<\/noscript>/ig, '');
    return node;
  };

  setAutofocusElement = function() {
    var autofocusElement, list;
    autofocusElement = (list = document.querySelectorAll('input[autofocus], textarea[autofocus]'))[list.length - 1];
    if (autofocusElement && document.activeElement !== autofocusElement) {
      return autofocusElement.focus();
    }
  };

  reflectNewUrl = function(url) {
    if ((url = new ComponentUrl(url)).absolute !== referer) {
      return window.history.pushState({
        turbolinks: true,
        url: url.absolute
      }, '', url.absolute);
    }
  };

  reflectRedirectedUrl = function() {
    var location, preservedHash;
    if (location = xhr.getResponseHeader('X-XHR-Redirected-To')) {
      location = new ComponentUrl(location);
      preservedHash = location.hasNoHash() ? document.location.hash : '';
      return window.history.replaceState(window.history.state, '', location.href + preservedHash);
    }
  };

  crossOriginRedirect = function() {
    var redirect;
    if (((redirect = xhr.getResponseHeader('Location')) != null) && (new ComponentUrl(redirect)).crossOrigin()) {
      return redirect;
    }
  };

  rememberReferer = function() {
    return referer = document.location.href;
  };

  rememberCurrentUrl = function() {
    return window.history.replaceState({
      turbolinks: true,
      url: document.location.href
    }, '', document.location.href);
  };

  rememberCurrentState = function() {
    return currentState = window.history.state;
  };

  manuallyTriggerHashChangeForFirefox = function() {
    var url;
    if (navigator.userAgent.match(/Firefox/) && !(url = new ComponentUrl).hasNoHash()) {
      window.history.replaceState(currentState, '', url.withoutHash());
      return document.location.hash = url.hash;
    }
  };

  recallScrollPosition = function(page) {
    return window.scrollTo(page.positionX, page.positionY);
  };

  resetScrollPosition = function() {
    if (document.location.hash) {
      return document.location.href = document.location.href;
    } else {
      return window.scrollTo(0, 0);
    }
  };

  clone = function(original) {
    var copy, key, value;
    if ((original == null) || typeof original !== 'object') {
      return original;
    }
    copy = new original.constructor();
    for (key in original) {
      value = original[key];
      copy[key] = clone(value);
    }
    return copy;
  };

  popCookie = function(name) {
    var ref, value;
    value = ((ref = document.cookie.match(new RegExp(name + "=(\\w+)"))) != null ? ref[1].toUpperCase() : void 0) || '';
    document.cookie = name + '=; expires=Thu, 01-Jan-70 00:00:01 GMT; path=/';
    return value;
  };

  triggerEvent = function(name, data) {
    var event;
    if (typeof Prototype !== 'undefined') {
      Event.fire(document, name, data, true);
    }
    event = document.createEvent('Events');
    if (data) {
      event.data = data;
    }
    event.initEvent(name, true, true);
    return document.dispatchEvent(event);
  };

  pageChangePrevented = function(url) {
    return !triggerEvent(EVENTS.BEFORE_CHANGE, {
      url: url
    });
  };

  processResponse = function() {
    var assetsChanged, clientOrServerError, doc, extractTrackAssets, intersection, validContent;
    clientOrServerError = function() {
      var ref;
      return (400 <= (ref = xhr.status) && ref < 600);
    };
    validContent = function() {
      var contentType;
      return ((contentType = xhr.getResponseHeader('Content-Type')) != null) && contentType.match(/^(?:text\/html|application\/xhtml\+xml|application\/xml)(?:;|$)/);
    };
    extractTrackAssets = function(doc) {
      var i, len, node, ref, results;
      ref = doc.querySelector('head').childNodes;
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        node = ref[i];
        if ((typeof node.getAttribute === "function" ? node.getAttribute('data-turbolinks-track') : void 0) != null) {
          results.push(node.getAttribute('src') || node.getAttribute('href'));
        }
      }
      return results;
    };
    assetsChanged = function(doc) {
      var fetchedAssets;
      loadedAssets || (loadedAssets = extractTrackAssets(document));
      fetchedAssets = extractTrackAssets(doc);
      return fetchedAssets.length !== loadedAssets.length || intersection(fetchedAssets, loadedAssets).length !== loadedAssets.length;
    };
    intersection = function(a, b) {
      var i, len, ref, results, value;
      if (a.length > b.length) {
        ref = [b, a], a = ref[0], b = ref[1];
      }
      results = [];
      for (i = 0, len = a.length; i < len; i++) {
        value = a[i];
        if (indexOf.call(b, value) >= 0) {
          results.push(value);
        }
      }
      return results;
    };
    if (!clientOrServerError() && validContent()) {
      doc = createDocument(xhr.responseText);
      if (doc && !assetsChanged(doc)) {
        return doc;
      }
    }
  };

  extractTitleAndBody = function(doc) {
    var title;
    title = doc.querySelector('title');
    return [title != null ? title.textContent : void 0, removeNoscriptTags(doc.querySelector('body')), CSRFToken.get(doc).token, 'runScripts'];
  };

  CSRFToken = {
    get: function(doc) {
      var tag;
      if (doc == null) {
        doc = document;
      }
      return {
        node: tag = doc.querySelector('meta[name="csrf-token"]'),
        token: tag != null ? typeof tag.getAttribute === "function" ? tag.getAttribute('content') : void 0 : void 0
      };
    },
    update: function(latest) {
      var current;
      current = this.get();
      if ((current.token != null) && (latest != null) && current.token !== latest) {
        return current.node.setAttribute('content', latest);
      }
    }
  };

  createDocument = function(html) {
    var doc;
    doc = document.documentElement.cloneNode();
    doc.innerHTML = html;
    doc.head = doc.querySelector('head');
    doc.body = doc.querySelector('body');
    return doc;
  };

  ComponentUrl = (function() {
    function ComponentUrl(original1) {
      this.original = original1 != null ? original1 : document.location.href;
      if (this.original.constructor === ComponentUrl) {
        return this.original;
      }
      this._parse();
    }

    ComponentUrl.prototype.withoutHash = function() {
      return this.href.replace(this.hash, '').replace('#', '');
    };

    ComponentUrl.prototype.withoutHashForIE10compatibility = function() {
      return this.withoutHash();
    };

    ComponentUrl.prototype.hasNoHash = function() {
      return this.hash.length === 0;
    };

    ComponentUrl.prototype.crossOrigin = function() {
      return this.origin !== (new ComponentUrl).origin;
    };

    ComponentUrl.prototype._parse = function() {
      var ref;
      (this.link != null ? this.link : this.link = document.createElement('a')).href = this.original;
      ref = this.link, this.href = ref.href, this.protocol = ref.protocol, this.host = ref.host, this.hostname = ref.hostname, this.port = ref.port, this.pathname = ref.pathname, this.search = ref.search, this.hash = ref.hash;
      this.origin = [this.protocol, '//', this.hostname].join('');
      if (this.port.length !== 0) {
        this.origin += ":" + this.port;
      }
      this.relative = [this.pathname, this.search, this.hash].join('');
      return this.absolute = this.href;
    };

    return ComponentUrl;

  })();

  Link = (function(superClass) {
    extend(Link, superClass);

    Link.HTML_EXTENSIONS = ['html'];

    Link.allowExtensions = function() {
      var extension, extensions, i, len;
      extensions = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      for (i = 0, len = extensions.length; i < len; i++) {
        extension = extensions[i];
        Link.HTML_EXTENSIONS.push(extension);
      }
      return Link.HTML_EXTENSIONS;
    };

    function Link(link1) {
      this.link = link1;
      if (this.link.constructor === Link) {
        return this.link;
      }
      this.original = this.link.href;
      this.originalElement = this.link;
      this.link = this.link.cloneNode(false);
      Link.__super__.constructor.apply(this, arguments);
    }

    Link.prototype.shouldIgnore = function() {
      return this.crossOrigin() || this._anchored() || this._nonHtml() || this._optOut() || this._target();
    };

    Link.prototype._anchored = function() {
      return (this.hash.length > 0 || this.href.charAt(this.href.length - 1) === '#') && (this.withoutHash() === (new ComponentUrl).withoutHash());
    };

    Link.prototype._nonHtml = function() {
      return this.pathname.match(/\.[a-z]+$/g) && !this.pathname.match(new RegExp("\\.(?:" + (Link.HTML_EXTENSIONS.join('|')) + ")?$", 'g'));
    };

    Link.prototype._optOut = function() {
      var ignore, link;
      link = this.originalElement;
      while (!(ignore || link === document)) {
        ignore = link.getAttribute('data-no-turbolink') != null;
        link = link.parentNode;
      }
      return ignore;
    };

    Link.prototype._target = function() {
      return this.link.target.length !== 0;
    };

    return Link;

  })(ComponentUrl);

  Click = (function() {
    Click.installHandlerLast = function(event) {
      if (!event.defaultPrevented) {
        document.removeEventListener('click', Click.handle, false);
        return document.addEventListener('click', Click.handle, false);
      }
    };

    Click.handle = function(event) {
      return new Click(event);
    };

    function Click(event1) {
      this.event = event1;
      if (this.event.defaultPrevented) {
        return;
      }
      this._extractLink();
      if (this._validForTurbolinks()) {
        if (!pageChangePrevented(this.link.absolute)) {
          visit(this.link.href);
        }
        this.event.preventDefault();
      }
    }

    Click.prototype._extractLink = function() {
      var link;
      link = this.event.target;
      while (!(!link.parentNode || link.nodeName === 'A')) {
        link = link.parentNode;
      }
      if (link.nodeName === 'A' && link.href.length !== 0) {
        return this.link = new Link(link);
      }
    };

    Click.prototype._validForTurbolinks = function() {
      return (this.link != null) && !(this.link.shouldIgnore() || this._nonStandardClick());
    };

    Click.prototype._nonStandardClick = function() {
      return this.event.which > 1 || this.event.metaKey || this.event.ctrlKey || this.event.shiftKey || this.event.altKey;
    };

    return Click;

  })();

  ProgressBar = (function() {
    var className;

    className = 'turbolinks-progress-bar';

    function ProgressBar(elementSelector) {
      this.elementSelector = elementSelector;
      this._trickle = bind(this._trickle, this);
      this.value = 0;
      this.content = '';
      this.speed = 300;
      this.opacity = 0.99;
      this.install();
    }

    ProgressBar.prototype.install = function() {
      this.element = document.querySelector(this.elementSelector);
      this.element.classList.add(className);
      this.styleElement = document.createElement('style');
      document.head.appendChild(this.styleElement);
      return this._updateStyle();
    };

    ProgressBar.prototype.uninstall = function() {
      this.element.classList.remove(className);
      return document.head.removeChild(this.styleElement);
    };

    ProgressBar.prototype.start = function() {
      return this.advanceTo(5);
    };

    ProgressBar.prototype.advanceTo = function(value) {
      var ref;
      if ((value > (ref = this.value) && ref <= 100)) {
        this.value = value;
        this._updateStyle();
        if (this.value === 100) {
          return this._stopTrickle();
        } else if (this.value > 0) {
          return this._startTrickle();
        }
      }
    };

    ProgressBar.prototype.done = function() {
      if (this.value > 0) {
        this.advanceTo(100);
        return this._reset();
      }
    };

    ProgressBar.prototype._reset = function() {
      var originalOpacity;
      originalOpacity = this.opacity;
      setTimeout((function(_this) {
        return function() {
          _this.opacity = 0;
          return _this._updateStyle();
        };
      })(this), this.speed / 2);
      return setTimeout((function(_this) {
        return function() {
          _this.value = 0;
          _this.opacity = originalOpacity;
          return _this._withSpeed(0, function() {
            return _this._updateStyle(true);
          });
        };
      })(this), this.speed);
    };

    ProgressBar.prototype._startTrickle = function() {
      if (this.trickling) {
        return;
      }
      this.trickling = true;
      return setTimeout(this._trickle, this.speed);
    };

    ProgressBar.prototype._stopTrickle = function() {
      return delete this.trickling;
    };

    ProgressBar.prototype._trickle = function() {
      if (!this.trickling) {
        return;
      }
      this.advanceTo(this.value + Math.random() / 2);
      return setTimeout(this._trickle, this.speed);
    };

    ProgressBar.prototype._withSpeed = function(speed, fn) {
      var originalSpeed, result;
      originalSpeed = this.speed;
      this.speed = speed;
      result = fn();
      this.speed = originalSpeed;
      return result;
    };

    ProgressBar.prototype._updateStyle = function(forceRepaint) {
      if (forceRepaint == null) {
        forceRepaint = false;
      }
      if (forceRepaint) {
        this._changeContentToForceRepaint();
      }
      return this.styleElement.textContent = this._createCSSRule();
    };

    ProgressBar.prototype._changeContentToForceRepaint = function() {
      return this.content = this.content === '' ? ' ' : '';
    };

    ProgressBar.prototype._createCSSRule = function() {
      return this.elementSelector + "." + className + "::before {\n  content: '" + this.content + "';\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 2000;\n  background-color: #0076ff;\n  height: 3px;\n  opacity: " + this.opacity + ";\n  width: " + this.value + "%;\n  transition: width " + this.speed + "ms ease-out, opacity " + (this.speed / 2) + "ms ease-in;\n  transform: translate3d(0,0,0);\n}";
    };

    return ProgressBar;

  })();

  bypassOnLoadPopstate = function(fn) {
    return setTimeout(fn, 500);
  };

  installDocumentReadyPageEventTriggers = function() {
    return document.addEventListener('DOMContentLoaded', (function() {
      triggerEvent(EVENTS.CHANGE);
      return triggerEvent(EVENTS.UPDATE);
    }), true);
  };

  installJqueryAjaxSuccessPageUpdateTrigger = function() {
    if (typeof jQuery !== 'undefined') {
      return jQuery(document).on('ajaxSuccess', function(event, xhr, settings) {
        if (!jQuery.trim(xhr.responseText)) {
          return;
        }
        return triggerEvent(EVENTS.UPDATE);
      });
    }
  };

  installHistoryChangeHandler = function(event) {
    var cachedPage, ref;
    if ((ref = event.state) != null ? ref.turbolinks : void 0) {
      if (cachedPage = pageCache[(new ComponentUrl(event.state.url)).absolute]) {
        cacheCurrentPage();
        return fetchHistory(cachedPage);
      } else {
        return visit(event.target.location.href);
      }
    }
  };

  initializeTurbolinks = function() {
    rememberCurrentUrl();
    rememberCurrentState();
    document.addEventListener('click', Click.installHandlerLast, true);
    window.addEventListener('hashchange', function(event) {
      rememberCurrentUrl();
      return rememberCurrentState();
    }, false);
    return bypassOnLoadPopstate(function() {
      return window.addEventListener('popstate', installHistoryChangeHandler, false);
    });
  };

  historyStateIsDefined = window.history.state !== void 0 || navigator.userAgent.match(/Firefox\/2[6|7]/);

  browserSupportsPushState = window.history && window.history.pushState && window.history.replaceState && historyStateIsDefined;

  browserIsntBuggy = !navigator.userAgent.match(/CriOS\//);

  requestMethodIsSafe = (ref = popCookie('request_method')) === 'GET' || ref === '';

  browserSupportsTurbolinks = browserSupportsPushState && browserIsntBuggy && requestMethodIsSafe;

  browserSupportsCustomEvents = document.addEventListener && document.createEvent;

  if (browserSupportsCustomEvents) {
    installDocumentReadyPageEventTriggers();
    installJqueryAjaxSuccessPageUpdateTrigger();
  }

  if (browserSupportsTurbolinks) {
    visit = fetch;
    initializeTurbolinks();
  } else {
    visit = function(url) {
      return document.location.href = url;
    };
  }

  this.Turbolinks = {
    visit: visit,
    pagesCached: pagesCached,
    enableTransitionCache: enableTransitionCache,
    enableProgressBar: enableProgressBar,
    allowLinkExtensions: Link.allowExtensions,
    supported: browserSupportsTurbolinks,
    EVENTS: clone(EVENTS)
  };

}).call(this);
/*
* CanvasJS v1.0.0 Beta 2- canvasjs.com 
* Copyright 2013 fenopix
*/

(function(){function J(a,d){var b;b=function(){};b.prototype=d.prototype;b=new b;a.prototype=b;a.prototype.constructor=a;a.parent=d.prototype}function X(a,d,b){"millisecond"===b?a.setMilliseconds(a.getMilliseconds()+1*d):"second"===b?a.setSeconds(a.getSeconds()+1*d):"minute"===b?a.setMinutes(a.getMinutes()+1*d):"hour"===b?a.setHours(a.getHours()+1*d):"day"===b?a.setDate(a.getDate()+1*d):"week"===b?a.setDate(a.getDate()+7*d):"month"===b?a.setMonth(a.getMonth()+1*d):"year"===b&&a.setFullYear(a.getFullYear()+
1*d);return a}function L(a,d){return y[d+"Duration"]*a}function z(a,d){var b=!1;0>a&&(b=!0,a*=-1);a=""+a;for(d=!d?1:d;a.length<d;)a="0"+a;return b?"-"+a:a}function M(a){a=a.replace(/^\s\s*/,"");for(var d=/\s/,b=a.length;d.test(a.charAt(--b)););return a.slice(0,b+1)}function Y(a,d){return a-d}function ca(a,d){return a.x-d.x}function B(a){var d=((a&16711680)>>16).toString(16),b=((a&65280)>>8).toString(16);a=((a&255)>>0).toString(16);d=2>d.length?"0"+d:d;b=2>b.length?"0"+b:b;a=2>a.length?"0"+a:a;return"#"+
d+b+a}function S(a){var d=[];d[0]=(a&16711680)>>16;d[1]=(a&65280)>>8;d[2]=(a&255)>>0;return d}function E(a,d,b){this._defaultsKey=a;currentTheme={};b&&(T[b]&&T[b][a])&&(currentTheme=T[b][a]);this._options=d?d:{};this.setOptions(this._options,currentTheme)}function t(a,d,b){t.parent.constructor.call(this,"Chart",d,d.theme?d.theme:"theme1");t.externalReference=b;var c=this;this._containerId=a;this._objectsInitialized=!1;this.overlaidCanvasCtx=this.ctx=null;this._indexLabels=[];this._panTimerId=0;this._lastTouchEventType=
"";this.panEnabled=!1;if(this._container=document.getElementById(this._containerId))d=a=0,a=this._options.width?this.width:0<this._container.clientWidth?this._container.clientWidth:this.width,d=this._options.height?this.height:0<this._container.clientHeight?this._container.clientHeight:this.height,this.width=a,this.height=d,this._canvasJSContainer=document.createElement("div"),this._canvasJSContainer.style.position="relative",this._container.appendChild(this._canvasJSContainer),this.canvas=document.createElement("canvas"),
this.canvas.width=a,this.canvas.height=d,this.canvas.style.background=this.backgroundColor,this.canvas.style.position="absolute",this._canvasJSContainer.appendChild(this.canvas),this.overlaidCanvas=document.createElement("canvas"),this.overlaidCanvas.width=a,this.overlaidCanvas.height=d,this.overlaidCanvas.style.position="absolute",this._canvasJSContainer.appendChild(this.overlaidCanvas),this._eventManager=new P(this),this._toolBar=document.createElement("div"),this._toolBar.style.position="absolute",
this._toolBar.style.top="0px",this._toolBar.style.right="0px",this._canvasJSContainer.appendChild(this._toolBar),this.zoomEnabled&&(this._zoomButton=document.createElement("button"),this._zoomButton.appendChild(document.createTextNode("Pan")),this._toolBar.appendChild(this._zoomButton),this._zoomButton.addEventListener("click",function(){c.zoomEnabled?(c.zoomEnabled=!1,c.panEnabled=!0,c._zoomButton.innerText="Zoom"):(c.zoomEnabled=!0,c.panEnabled=!1,c._zoomButton.innerText="Pan ");c.render()},!1)),
this.zoomEnabled&&(this._resetButton=document.createElement("button"),this._resetButton.appendChild(document.createTextNode("Reset")),this._toolBar.appendChild(this._resetButton),c.zoomEnabled=c._options.zoomEnabled?!0:!1,c.panEnabled=!1,this._resetButton.addEventListener("click",function(){c._toolTip.hide();c.zoomEnabled||c.panEnabled?(c.zoomEnabled=!0,c.panEnabled=!1,c._zoomButton.innerText="Pan"):(c.zoomEnabled=!1,c.panEnabled=!1);c.sessionVariables.axisX.internalMinimum=c._options.axisX&&c._options.axisX.minimum?
c._options.axisX.minimum:null;c.sessionVariables.axisX.internalMaximum=c._options.axisX&&c._options.axisX.maximum?c._options.axisX.maximum:null;c.resetOverlayedCanvas();c.render()},!1)),window.addEventListener("resize",function(){var a=0,b=0,a=c._options.width?c.width:0<c._container.clientWidth?c._container.clientWidth:c.width,b=c._options.height?c.height:0<c._container.clientHeight?c._container.clientHeight:c.height;if(c.canvas.width!==a||c.canvas.height!==b)c.renderCount--,c.canvas.width=a,c.canvas.height=
b,c.overlaidCanvas.width=a,c.overlaidCanvas.height=b,c.render()}),this._toolBar.style.display="none",this.bounds={x1:0,y1:0,x2:this.canvas.width,y2:this.canvas.height},c=this,this.canvas.getContext&&(this.ctx=this.canvas.getContext("2d"),this.ctx.textBaseline="top",this.overlaidCanvasCtx=this.overlaidCanvas.getContext("2d"),this.overlaidCanvasCtx.textBaseline="top",this.ctx.roundRect=function(a,b,c,d,h,j,m,n){m&&(this.fillStyle=m);n&&(this.strokeStyle=n);"undefined"==typeof stroke&&(stroke=!0);"undefined"===
typeof h&&(h=5);this.lineWidth=j;this.beginPath();this.moveTo(a+h,b);this.lineTo(a+c-h,b);this.quadraticCurveTo(a+c,b,a+c,b+h);this.lineTo(a+c,b+d-h);this.quadraticCurveTo(a+c,b+d,a+c-h,b+d);this.lineTo(a+h,b+d);this.quadraticCurveTo(a,b+d,a,b+d-h);this.lineTo(a,b+h);this.quadraticCurveTo(a,b,a+h,b);this.closePath();m&&this.fill();n&&0<j&&this.stroke()},this.overlaidCanvas.addEventListener("click",function(a){c._mouseEventHandler(a)},!1),this.overlaidCanvas.addEventListener("mousemove",function(a){c._mouseEventHandler(a)},
!1),this.overlaidCanvas.addEventListener("mouseup",function(a){c._mouseEventHandler(a)},!1),this.overlaidCanvas.addEventListener("mousedown",function(a){c._mouseEventHandler(a)},!1),this.overlaidCanvas.addEventListener("mouseout",function(a){c._mouseEventHandler(a)},!1),this.overlaidCanvas.addEventListener(window.navigator.msPointerEnabled?"MSPointerDown":"touchstart",function(a){c._touchEventHandler(a)},!1),this.overlaidCanvas.addEventListener(window.navigator.msPointerEnabled?"MSPointerMove":"touchmove",
function(a){c._touchEventHandler(a)},!1),this.overlaidCanvas.addEventListener(window.navigator.msPointerEnabled?"MSPointerUp":"touchend",function(a){c._touchEventHandler(a)},!1),this.overlaidCanvas.addEventListener(window.navigator.msPointerEnabled?"MSPointerCancel":"touchcancel",function(a){c._touchEventHandler(a)},!1)),this._toolTip=new H(this,this._options.toolTip,this.theme),this.layoutManager=new N(this.canvas),this.axisY2=this.axisY=this.axisX=this.data=null,this.renderCount=0,this.sessionVariables=
{axisX:{internalMinimum:null,internalMaximum:null},axisY:{internalMinimum:null,internalMaximum:null},axisY2:{internalMinimum:null,internalMaximum:null}}}function N(a){this._rightOccupied=this._leftOccupied=this._bottomOccupied=this._topOccupied=0;this.canvas=a}function C(a,d){C.parent.constructor.call(this,"TextBlock",d);this.ctx=a;this._isDirty=!0;this._wrappedText=null}function Q(a,d){Q.parent.constructor.call(this,"Title",d,a.theme);this.chart=a;this.canvas=a.canvas;this.ctx=this.chart.ctx;"undefined"===
typeof this._options.fontSize&&(this.fontSize=this.chart.getAutoFontSize(this.fontSize));this.height=this.width=null;this.bounds={x1:null,y1:null,x2:null,y2:null}}function R(a,d,b){R.parent.constructor.call(this,"Legend",d,b);this.chart=a;this.canvas=a.canvas;this.ctx=this.chart.ctx;this.height=this.width=0;this.orientation=null;this.horizontalSpacing=10;this.dataSeries=[];this.bounds={x1:null,y1:null,x2:null,y2:null}}function U(a,d){U.parent.constructor.call(this,d);this.chart=a;this.canvas=a.canvas;
this.ctx=this.chart.ctx}function I(a,d,b,c,e){I.parent.constructor.call(this,"DataSeries",d,b);this.chart=a;this.canvas=a.canvas;this._ctx=a.canvas.ctx;this.index=c;this.noDataPointsInPlotArea=0;this.id=e;this.dataPointIds=[];this.axisY=this.axisX=null;this.axisPlacement=this.getDefaultAxisPlacement()}function x(a,d,b,c){x.parent.constructor.call(this,"Axis",d,a.theme);this.chart=a;this.canvas=a.canvas;this.ctx=a.ctx;this.intervalStartPosition=this.maxHeight=this.maxWidth=0;this.labels=[];this.dataInfo=
{min:Infinity,max:-Infinity,viewPortMin:Infinity,viewPortMax:-Infinity,minDiff:Infinity};"axisX"===b?(this.sessionVariables=this.chart.sessionVariables[b],this._options.interval||(this.intervalType=null)):this.sessionVariables="left"===c||"top"===c?this.chart.sessionVariables.axisY:this.chart.sessionVariables.axisY2;"undefined"===typeof this._options.titleFontSize&&(this.titleFontSize=fontSize=this.chart.getAutoFontSize(this.titleFontSize));"undefined"===typeof this._options.labelFontSize&&(this.labelFontSize=
this.chart.getAutoFontSize(this.labelFontSize));this.type=b;if(!d||"undefined"===typeof d.gridThickness)this.gridThickness="axisX"===b?0:1;this._labels=null;this._position=c;this.lineCoordinates={x1:null,y1:null,x2:null,y2:null,width:null};this.labelAngle=(this.labelAngle%360+360)%360;90<this.labelAngle&&270>=this.labelAngle?this.labelAngle-=180:180<this.labelAngle&&270>=this.labelAngle?this.labelAngle-=180:270<this.labelAngle&&360>=this.labelAngle&&(this.labelAngle-=360);this._absoluteMaximum=this._absoluteMinimum=
this._titleTextBlock=null;this.hasOptionChanged("minimum")&&(this.sessionVariables.internalMinimum=this.minimum);this.hasOptionChanged("maximum")&&(this.sessionVariables.internalMaximum=this.maximum);this.trackChanges("minimum");this.trackChanges("maximum")}function H(a,d,b){H.parent.constructor.call(this,"ToolTip",d,b);this.chart=a;this.canvas=a.canvas;this.ctx=this.chart.ctx;this.currentDataPointIndex=this.currentSeriesIndex=-1;this._timerId=0;this._initialize()}function P(a){this.chart=a;this.lastObjectId=
0;this.objectMap=[];this.rectangularRegionEventSubscriptions=[];this.previousDataPointEventObject=null;this.ghostCanvas=document.createElement("canvas");this.ghostCanvas.width=this.chart.canvas.width;this.ghostCanvas.height=this.chart.canvas.height;this.ghostCtx=this.ghostCanvas.getContext("2d")}var Z={Chart:{width:500,height:400,zoomEnabled:!1,backgroundColor:"white",backgroundColor:"white",theme:"theme1",animationEnabled:!0,colorSet:"#C0504E #4F81BC #9BBB58 #8064A1 #4AACC5 #F79647 #FFC000 #7F6084".split(" ")},
Title:{padding:0,text:null,verticalAlign:"top",horizontalAlign:"center",fontSize:20,fontFamily:"Calibri",fontWeight:"normal",fontColor:"black",fontStyle:"normal",borderThickness:0,borderColor:"black",cornerRadius:0,backgroundColor:null,margin:5},DataSeries:{name:null,dataPoints:null,label:"",bevelEnabled:!1,indexLabel:"",indexLabelPlacement:"outside",indexLabelOrientation:"horizontal",indexLabelFontColor:"black",indexLabelFontSize:12,indexLabelFontStyle:"normal",indexLabelFontFamily:"Arial",indexLabelFontWeight:"normal",
indexLabelBackgroundColor:null,indexLabelLineColor:"#808080",indexLabelLineThickness:1,lineThickness:2,color:null,startAngle:0,type:"column",xValueType:"number",axisYType:"primary",showInLegend:null,legendMarkerType:null,legendMarkerColor:null,legendText:null,markerType:"circle",markerColor:null,markerSize:null,markerBorderColor:null,markerBorderThickness:null,mouseover:null,mouseout:null,mousemove:null,click:null,toolTipContent:null},Axis:{minimum:null,maximum:null,interval:null,intervalType:null,
title:null,titleFontColor:"black",titleFontSize:20,titleFontFamily:"arial",titleFontWeight:"normal",titleFontStyle:"normal",labelAngle:0,labelFontFamily:"arial",labelFontColor:"black",labelFontSize:12,labelFontWeight:"normal",labelFontStyle:"normal",prefix:"",suffix:"",includeZero:!0,tickLength:5,tickColor:"black",tickThickness:1,lineColor:"black",lineThickness:1,gridColor:"A0A0A0",gridThickness:0,interlacedColor:null,valueFormatString:null,margin:2},Legend:{name:null,borderThickness:0,borderColor:"black",
cornerRadius:0,verticalAlign:"center",horizontalAlign:"right",fontSize:12,fontFamily:"Calibri",fontWeight:"normal",fontColor:"black",fontStyle:"normal"},ToolTip:{enabled:!0,borderColor:null,shared:!1,animationEnabled:!0,content:null},TextBlock:{x:0,y:0,width:null,height:null,maxWidth:null,maxHeight:null,padding:0,angle:0,text:"",horizontalAlign:"center",fontSize:12,fontFamily:"Calibri",fontWeight:"normal",fontColor:"black",fontStyle:"normal",borderThickness:0,borderColor:"black",cornerRadius:0,backgroundColor:null,
textBaseline:"top"}},O=["#369EAD #C24642 #7F6084 #86B402 #A2D1CF #C8B631 #6DBCEB #52514E #4F81BC #A064A1 #F79647".split(" "),"#4F81BC #C0504E #9BBB58 #23BFAA #8064A1 #4AACC5 #F79647".split(" "),"#8CA1BC #36845C #017E82 #8CB9D0 #708C98 #94838D #F08891 #0366A7 #008276 #EE7757 #E5BA3A #F2990B #03557B #782970".split(" "),"#3698C5 #009B8D #F1D691 #F8B90C #0081B8 #5B5A96 #ACBDD1 #88A891 #39969D #AECEDD #A0B2BC #BBAEB7 #A0C65F #EEA6AA #3798C5".split(" "),"#88ADBF #84C336 #7B91C3 #4661EE #EC5657 #1BCDD1 #8FAABB #B08BEB #3EA0DD #F5A52A #23BFAA #FAA586 #EB8CC6".split(" ")],
T={theme1:{Chart:{colorSet:O[0]},Title:{fontFamily:"Candara, Optima, Trebuchet MS, Helvetica Neue, Helvetica, Trebuchet MS, serif",fontSize:32,fontColor:"rgb(68,78,58)",fontColor:"#3A3A3A",fontWeight:"bold",verticalAlign:"top",margin:10},Axis:{titleFontSize:22,titleFontColor:"rgb(98,98,98)",titleFontFamily:"Verdana, Geneva, Calibri, sans-serif",labelFontFamily:"Calibri, Optima, Candara, Verdana, Geneva, sans-serif",labelFontSize:18,labelFontColor:"grey",tickColor:"grey",tickThickness:2,gridThickness:2,
gridColor:"grey",lineThickness:2,lineColor:"grey"},Legend:{verticalAlign:"bottom",horizontalAlign:"right",fontFamily:"monospace, sans-serif,arial black"},DataSeries:{bevelEnabled:!0,indexLabelFontColor:"grey",indexLabelFontFamily:"Candara, Optima, Calibri, Verdana, Geneva, sans-serif",indexLabelFontSize:18,indexLabelLineColor:"lightgrey",indexLabelLineThickness:2}},theme2:{Chart:{colorSet:O[1]},Title:{fontFamily:"impact, charcoal, arial black, sans-serif",fontSize:32,fontColor:"#333333",verticalAlign:"top",
margin:10},Axis:{titleFontSize:22,titleFontColor:"rgb(98,98,98)",titleFontFamily:"monospace, sans-serif,arial black",titleFontWeight:"bold",labelFontFamily:"monospace, Courier New, Courier",labelFontSize:16,labelFontColor:"grey",labelFontWeight:"bold",tickColor:"grey",tickThickness:2,gridThickness:2,gridColor:"grey",lineThickness:0},Legend:{verticalAlign:"bottom",horizontalAlign:"right",fontFamily:"monospace, sans-serif,arial black"},DataSeries:{indexLabelFontColor:"grey",indexLabelFontFamily:"Courier New, Courier, monospace",
indexLabelFontWeight:"bold",indexLabelFontSize:18,indexLabelLineColor:"lightgrey",indexLabelLineThickness:2}}},y={numberDuration:1,yearDuration:314496E5,monthDuration:2592E6,weekDuration:6048E5,dayDuration:864E5,hourDuration:36E5,minuteDuration:6E4,secondDuration:1E3,millisecondDuration:1,dayOfWeekFromInt:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ")},V,da=/D{1,4}|M{1,4}|Y{1,4}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|f{1,3}|t{1,2}|T{1,2}|K|z{1,3}|"[^"]*"|'[^']*'/g,$="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
aa="January February March April May June July August September October November December".split(" "),ea=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,fa=/[^-+\dA-Z]/g;V=function(a,d){var b="",c=!1;a=a&&a.getTime?a:a?new Date(a):new Date;if(isNaN(a))throw SyntaxError("invalid date");"UTC:"==d.slice(0,4)&&(d=d.slice(4),c=!0);var b=c?"getUTC":"get",e=a[b+"Date"](),f=a[b+"Day"](),g=a[b+"Month"](),k=a[b+"FullYear"](),
h=a[b+"Hours"](),j=a[b+"Minutes"](),m=a[b+"Seconds"](),n=a[b+"Milliseconds"](),p=c?0:a.getTimezoneOffset();return b=d.replace(da,function(b){switch(b){case "D":return e;case "DD":return z(e,2);case "DDD":return $[f].slice(0,3);case "DDDD":return $[f];case "M":return g+1;case "MM":return z(g+1,2);case "MMM":return aa[g].slice(0,3);case "MMMM":return aa[g];case "Y":return parseInt(String(k).slice(-2));case "YY":return z(String(k).slice(-2),2);case "YYY":return z(String(k).slice(-3),3);case "YYYY":return z(k,
4);case "h":return h%12||12;case "hh":return z(h%12||12,2);case "H":return h;case "HH":return z(h,2);case "m":return j;case "mm":return z(j,2);case "s":return m;case "ss":return z(m,2);case "f":return String(n).slice(0,1);case "ff":return z(String(n).slice(0,2),2);case "fff":return z(String(n).slice(0,3),3);case "t":return 12>h?"a":"p";case "tt":return 12>h?"am":"pm";case "T":return 12>h?"A":"P";case "TT":return 12>h?"AM":"PM";case "K":return c?"UTC":(String(a).match(ea)||[""]).pop().replace(fa,"");
case "z":return(0<p?"-":"+")+Math.floor(Math.abs(p)/60);case "zz":return(0<p?"-":"+")+z(Math.floor(Math.abs(p)/60),2);case "zzz":return(0<p?"-":"+")+z(Math.floor(Math.abs(p)/60),2)+z(Math.abs(p)%60,2);default:return b.slice(1,b.length-1)}})};var W=function(a,d){a=Number(a);var b=0>a?!0:!1;b&&(a*=-1);var c="";d=String(d);for(var e=1,f="",g="",k=-1,h=[],j=[],m=0,n=0,p=0,e=1,l=!1,s=0,g=d.match(/"[^"]*"|'[^']*'|[eE][+-]*[0]+|[,]+[.]|\u2030|./g),q=0;g&&q<g.length;q++)if(c=g[q],"."===c&&0>k)k=q;else{if("%"===
c)e*=100;else if("\u2030"===c){e*=1E3;continue}else if(","===c[0]&&"."===c[c.length-1]){e/=Math.pow(1E3,c.length-1);k=q+c.length-1;continue}else if(("E"===c[0]||"e"===c[0])&&"0"===c[c.length-1])l=!0;0>k?(h.push(c),"#"===c||"0"===c?m++:","===c&&p++):(j.push(c),("#"===c||"0"===c)&&n++)}l&&(c=Math.floor(a),s=(0===c?"":String(c)).length-m,e/=Math.pow(10,s));0>k&&(k=q);c=(a*e).toFixed(n);c=c.split(".");e=(c[0]+"").split("");k=(c[1]+"").split("");e&&"0"===e[0]&&e.shift();for(var r=l=g=q=n=0;0<h.length;)if(c=
h.pop(),"#"===c||"0"===c)if(n++,n===m){var u=e,e=[];if("0"===c)for(c=m-q-(u?u.length:0);0<c;)u.unshift("0"),c--;for(;0<u.length;)f=u.pop()+f,r++,0===r%l&&(g===p&&0<u.length)&&(f=","+f);b&&(f="-"+f)}else 0<e.length?(f=e.pop()+f,q++,r++):"0"===c&&(f="0"+f,q++,r++),0===r%l&&(g===p&&0<e.length)&&(f=","+f);else("E"===c[0]||"e"===c[0])&&"0"===c[c.length-1]&&/[eE][+-]*[0]+/.test(c)?(c=0>s?c.replace("+","").replace("-",""):c.replace("-",""),f+=c.replace(/[0]+/,function(a){return z(s,a.length)})):","===c?
(g++,l=r,r=0,0<e.length&&(f=c+f)):f=1<c.length&&('"'===c[0]&&'"'===c[c.length-1]||"'"===c[0]&&"'"===c[c.length-1])?c.slice(1,c.length-1)+f:c+f;for(b=0;0<j.length;)c=j.shift(),"#"===c||"0"===c?0<k.length&&0!==Number(k.join(""))?f+=(0===b++?".":"")+k.shift():"0"===c&&(f+=(0===b++?".":"")+"0"):1<c.length&&('"'===c[0]&&'"'===c[c.length-1]||"'"===c[0]&&"'"===c[c.length-1])?f+=(0===b++?".":"")+c.slice(1,c.length-1):("E"===c[0]||"e"===c[0])&&"0"===c[c.length-1]&&/[eE][+-]*[0]+/.test(c)?(c=0>s?c.replace("+",
"").replace("-",""):c.replace("-",""),f+=c.replace(/[0]+/,function(a){return z(s,a.length)})):f+=(0===b++?".":"")+c;return f},ba=function(a){var d=0,b=0;a||(a=window.event);a.offsetX||0===a.offsetX?(d=a.offsetX,b=a.offsetY):a.layerX||0==a.layerX?(d=a.layerX,b=a.layerY):(d=a.pageX-a.target.offsetLeft,b=a.pageY-a.target.offsetTop);return{x:d,y:b}};E.prototype.setOptions=function(a,d){if(Z[this._defaultsKey]){var b=Z[this._defaultsKey];for(prop in b)this[prop]=a&&prop in a?a[prop]:d&&prop in d?d[prop]:
b[prop]}};E.prototype.trackChanges=function(a){this._options._oldOptions||(this._options._oldOptions={});this._options._oldOptions[a]=this._options[a]};E.prototype.isBeingTracked=function(a){this._options._oldOptions||(this._options._oldOptions={});return this._options._oldOptions[a]?!0:!1};E.prototype.hasOptionChanged=function(a){this._options._oldOptions||(this._options._oldOptions={});return this._options._oldOptions[a]!==this._options[a]};J(t,E);t.prototype._initialize=function(){this.ctx.clearRect(0,
0,this.canvas.width,this.canvas.height);this.ctx.beginPath();this.axisY2=this.axisY=this.axisX=null;this._indexLabels=[];this._events=[];this._eventManager&&this._eventManager.reset();this.plotInfo={axisPlacement:null,axisXValueType:null,plotTypes:[]};this.layoutManager.reset();this.data=[];var a=0;for(series in this._options.data)if(a++,!this._options.data[series].type||0<=t._supportedChartTypes.indexOf(this._options.data[series].type)){var d=new I(this,this._options.data[series],this.theme,a-1,
++this._eventManager.lastObjectId);null===d.name&&(d.name="DataSeries "+a);null===d.color?1<this._options.data.length?(d._colorSet=[this.colorSet[d.index%this.colorSet.length]],d.color=this.colorSet[d.index%this.colorSet.length]):d._colorSet="line"===d.type||"area"===d.type||"stackedArea"===d.type||"stackedArea100"===d.type?[this.colorSet[0]]:this.colorSet:d._colorSet=[d.color];if(null===d.markerSize&&("line"===d.type&&d.dataPoints.length<this.canvas.width/16||"scatter"===d.type))d.markerSize=8;("bubble"===
d.type||"scatter"===d.type)&&d.dataPoints.sort(ca);this.data.push(d);var b=d.axisPlacement,c;"normal"===b?"xySwapped"===this.plotInfo.axisPlacement?c='You cannot combine "'+d.type+'" with bar chart':"none"===this.plotInfo.axisPlacement?c='You cannot combine "'+d.type+'" with pie chart':null===this.plotInfo.axisPlacement&&(this.plotInfo.axisPlacement="normal"):"xySwapped"===b?"normal"===this.plotInfo.axisPlacement?c='You cannot combine "'+d.type+'" with line, area, column or pie chart':"none"===this.plotInfo.axisPlacement?
c='You cannot combine "'+d.type+'" with pie chart':null===this.plotInfo.axisPlacement&&(this.plotInfo.axisPlacement="xySwapped"):"none"==b&&("normal"===this.plotInfo.axisPlacement?c='You cannot combine "'+d.type+'" with line, area, column or bar chart':"xySwapped"===this.plotInfo.axisPlacement?c='You cannot combine "'+d.type+'" with bar chart':null===this.plotInfo.axisPlacement&&(this.plotInfo.axisPlacement="none"));if(c&&window.console){window.console.log(c);return}}this._objectsInitialized=!0};
t._supportedChartTypes="line column area bar bubble scatter stackedColumn stackedColumn100 stackedBar stackedBar100 stackedArea stackedArea100 pie doughnut".split(" ");t.prototype.render=function(){this._initialize();for(var a=0;a<this.data.length;a++)if("normal"===this.plotInfo.axisPlacement||"xySwapped"===this.plotInfo.axisPlacement)!this.data[a].axisYType||"primary"===this.data[a].axisYType?(this.axisY||("normal"===this.plotInfo.axisPlacement?this.axisY=new x(this,this._options.axisY,"axisY","left"):
"xySwapped"===this.plotInfo.axisPlacement&&(this.axisY=new x(this,this._options.axisY,"axisY","bottom"))),this.data[a].axisY=this.axisY):"secondary"===this.data[a].axisYType&&(this.axisY2||("normal"===this.plotInfo.axisPlacement?this.axisY2=new x(this,this._options.axisY2,"axisY","right"):"xySwapped"===this.plotInfo.axisPlacement&&(this.axisY2=new x(this,this._options.axisY2,"axisY","top"))),this.data[a].axisY=this.axisY2),this.axisX||("normal"===this.plotInfo.axisPlacement?this.axisX=new x(this,
this._options.axisX,"axisX","bottom"):"xySwapped"===this.plotInfo.axisPlacement&&(this.axisX=new x(this,this._options.axisX,"axisX","left"))),this.data[a].axisX=this.axisX;this._processData();this._options.title&&(this._title=new Q(this,this._options.title),this._title.render());this.legend=new R(this,this._options.legend,this.theme);for(a=0;a<this.data.length;a++)this.data[a].showInLegend&&this.legend.dataSeries.push(this.data[a]);this.legend.render();if("normal"===this.plotInfo.axisPlacement||"xySwapped"===
this.plotInfo.axisPlacement)x.setLayoutAndRender(this.axisX,this.axisY,this.axisY2,this.plotInfo.axisPlacement,this.layoutManager.getFreeSpace());else if("none"!==this.plotInfo.axisPlacement)return;for(a=0;a<this.plotInfo.plotTypes.length;a++)for(var d=this.plotInfo.plotTypes[a],b=0;b<d.plotUnits.length;b++){var c=d.plotUnits[b];"line"===c.type?this.renderLine(c):"column"===c.type?this.renderColumn(c):"bar"===c.type?this.renderBar(c):"area"===c.type?this.renderArea(c):"stackedColumn"===c.type?this.renderStackedColumn(c):
"stackedColumn100"===c.type?this.renderStackedColumn100(c):"stackedBar"===c.type?this.renderStackedBar(c):"stackedBar100"===c.type?this.renderStackedBar100(c):"stackedArea"===c.type?this.renderStackedArea(c):"stackedArea100"===c.type?this.renderStackedArea100(c):"bubble"===c.type?this.renderBubble(c):"scatter"===c.type?this.renderScatter(c):"pie"===c.type?this.renderPie(c):"doughnut"===c.type&&this.renderPie(c)}0<this._indexLabels.length&&this.renderIndexLabels();this.setToolbarButtonStates();this.renderCount++};
t.prototype.setToolbarButtonStates=function(){this.zoomEnabled||this.panEnabled||this._toolTip.enabled?this.attachEvent({context:this,chart:this,mousedown:this._plotAreaMouseDown,mouseup:this._plotAreaMouseUp,mousemove:this._plotAreaMouseMove,cursor:this.panEnabled?"move":"default",capture:!0,bounds:this.getPlotArea()}):this._toolBar.style.display="none"};t.prototype.categoriseDataSeries=function(){for(var a="",d=0;d<this.data.length;d++)if(a=this.data[d],a.dataPoints&&0!==a.dataPoints.length&&0<=
t._supportedChartTypes.indexOf(a.type)){for(var b=null,c=!1,e=null,f=!1,g=0;g<this.plotInfo.plotTypes.length;g++)if(this.plotInfo.plotTypes[g].type===a.type){c=!0;b=this.plotInfo.plotTypes[g];break}c||(b={type:a.type,totalDataSeries:0,plotUnits:[]},this.plotInfo.plotTypes.push(b));for(g=0;g<b.plotUnits.length;g++)if(b.plotUnits[g].axisYType===a.axisYType){f=!0;e=b.plotUnits[g];break}f||(e={type:a.type,previousDataSeriesCount:0,index:b.plotUnits.length,plotType:b,axisYType:a.axisYType,axisY:"primary"===
a.axisYType?this.axisY:this.axisY2,axisX:this.axisX,dataSeriesIndexes:[]},b.plotUnits.push(e));b.totalDataSeries++;e.dataSeriesIndexes.push(d)}for(d=0;d<this.plotInfo.plotTypes.length;d++){b=this.plotInfo.plotTypes[d];for(g=a=0;g<b.plotUnits.length;g++)b.plotUnits[g].previousDataSeriesCount=a,a+=b.plotUnits[g].dataSeriesIndexes.length}};t.prototype.assignIdToDataPoints=function(){for(var a=0;a<this.data.length;a++){dataSeries=this.data[a];for(var d=dataSeries.dataPoints.length,b=0;b<d;b++)dataSeries.dataPointIds[b]=
++this._eventManager.lastObjectId}};t.prototype._processData=function(){this.assignIdToDataPoints();this.categoriseDataSeries();for(var a=0;a<this.plotInfo.plotTypes.length;a++)for(var d=this.plotInfo.plotTypes[a],b=0;b<d.plotUnits.length;b++){var c=d.plotUnits[b];"line"===c.type||"column"===c.type||"area"===c.type||"bar"===c.type||"bubble"===c.type||"scatter"===c.type?this._processMultiseriesPlotUnit(c):"stackedColumn"===c.type||"stackedBar"===c.type||"stackedArea"===c.type?this._processStackedPlotUnit(c):
("stackedColumn100"===c.type||"stackedBar100"===c.type||"stackedArea100"===c.type)&&this._processStacked100PlotUnit(c)}};t.prototype._processMultiseriesPlotUnit=function(a){if(a.dataSeriesIndexes&&!(1>a.dataSeriesIndexes.length))for(var d=a.axisY.dataInfo,b=a.axisX.dataInfo,c,e,f=!1,g=0;g<a.dataSeriesIndexes.length;g++){var k=this.data[a.dataSeriesIndexes[g]],h=0,j=!1,m=!1;if("normal"===k.axisPlacement||"xySwapped"===k.axisPlacement)var n=this.sessionVariables.axisX.internalMinimum?this.sessionVariables.axisX.internalMinimum:
this._options.axisX&&this._options.axisX.minimum?this._options.axisX.minimum:-Infinity,p=this.sessionVariables.axisX.internalMaximum?this.sessionVariables.axisX.internalMaximum:this._options.axisX&&this._options.axisX.maximum?this._options.axisX.maximum:Infinity;if(k.dataPoints[h].x&&k.dataPoints[h].x.getTime||"dateTime"===k.xValueType)f=!0;for(h=0;h<k.dataPoints.length;h++){"undefined"===typeof k.dataPoints[h].x&&(k.dataPoints[h].x=h);k.dataPoints[h].x.getTime?(f=!0,c=k.dataPoints[h].x.getTime()):
c=k.dataPoints[h].x;e=k.dataPoints[h].y;c<b.min&&(b.min=c);c>b.max&&(b.max=c);e<d.min&&(d.min=e);e>d.max&&(d.max=e);if(0<h){var l=c-k.dataPoints[h-1].x;0>l&&(l*=-1);b.minDiff>l&&0!==l&&(b.minDiff=l)}if(!(c<n)||j){if(!j&&(j=!0,0<h)){h-=2;continue}if(c>p&&!m)m=!0;else if(c>p&&m)continue;k.dataPoints[h].label&&(a.axisX.labels[c]=k.dataPoints[h].label);c<b.viewPortMin&&(b.viewPortMin=c);c>b.viewPortMax&&(b.viewPortMax=c);e<d.viewPortMin&&(d.viewPortMin=e);e>d.viewPortMax&&(d.viewPortMax=e)}}this.plotInfo.axisXValueType=
k.xValueType=f?"dateTime":"number"}};t.prototype._processStackedPlotUnit=function(a){if(a.dataSeriesIndexes&&!(1>a.dataSeriesIndexes.length)){for(var d=a.axisY.dataInfo,b=a.axisX.dataInfo,c,e,f=!1,g=[],k=[],h=0;h<a.dataSeriesIndexes.length;h++){var j=this.data[a.dataSeriesIndexes[h]],m=0,n=!1,p=!1;if("normal"===j.axisPlacement||"xySwapped"===j.axisPlacement)var l=this.sessionVariables.axisX.internalMinimum?this.sessionVariables.axisX.internalMinimum:this._options.axisX&&this._options.axisX.minimum?
this._options.axisX.minimum:-Infinity,s=this.sessionVariables.axisX.internalMaximum?this.sessionVariables.axisX.internalMaximum:this._options.axisX&&this._options.axisX.maximum?this._options.axisX.maximum:Infinity;if(j.dataPoints[m].x&&j.dataPoints[m].x.getTime||"dateTime"===j.xValueType)f=!0;for(m=0;m<j.dataPoints.length;m++){"undefined"===typeof j.dataPoints[m].x&&(j.dataPoints[m].x=m);j.dataPoints[m].x.getTime?(f=!0,c=j.dataPoints[m].x.getTime()):c=j.dataPoints[m].x;e=j.dataPoints[m].y;c<b.min&&
(b.min=c);c>b.max&&(b.max=c);if(0<m){var q=c-j.dataPoints[m-1].x;0>q&&(q*=-1);b.minDiff>q&&0!==q&&(b.minDiff=q)}if(!(c<l)||n){if(!n&&(n=!0,0<m)){m-=2;continue}if(c>s&&!p)p=!0;else if(c>s&&p)continue;j.dataPoints[m].label&&(a.axisX.labels[c]=j.dataPoints[m].label);c<b.viewPortMin&&(b.viewPortMin=c);c>b.viewPortMax&&(b.viewPortMax=c);0<=e?g[c]=g[c]?g[c]+e:e:k[c]=k[c]?k[c]+e:e}}this.plotInfo.axisXValueType=j.xValueType=f?"dateTime":"number"}for(m in g)a=g[m],a<d.min&&(d.min=a),a>d.max&&(d.max=a),m<b.viewPortMin||
m>b.viewPortMax||(a<d.viewPortMin&&(d.viewPortMin=a),a>d.viewPortMax&&(d.viewPortMax=a));for(m in k)a=k[m],a<d.min&&(d.min=a),a>d.max&&(d.max=a),m<b.viewPortMin||m>b.viewPortMax||(a<d.viewPortMin&&(d.viewPortMin=a),a>d.viewPortMax&&(d.viewPortMax=a))}};t.prototype._processStacked100PlotUnit=function(a){if(a.dataSeriesIndexes&&!(1>a.dataSeriesIndexes.length)){for(var d=a.axisY.dataInfo,b=a.axisX.dataInfo,c,e,f=!1,g=!1,k=!1,h=[],j=0;j<a.dataSeriesIndexes.length;j++){var m=this.data[a.dataSeriesIndexes[j]],
n=0,p=!1,l=!1;if("normal"===m.axisPlacement||"xySwapped"===m.axisPlacement)var s=this.sessionVariables.axisX.internalMinimum?this.sessionVariables.axisX.internalMinimum:this._options.axisX&&this._options.axisX.minimum?this._options.axisX.minimum:-Infinity,q=this.sessionVariables.axisX.internalMaximum?this.sessionVariables.axisX.internalMaximum:this._options.axisX&&this._options.axisX.maximum?this._options.axisX.maximum:Infinity;if(m.dataPoints[n].x&&m.dataPoints[n].x.getTime||"dateTime"===m.xValueType)f=
!0;for(n=0;n<m.dataPoints.length;n++){"undefined"===typeof m.dataPoints[n].x&&(m.dataPoints[n].x=n);m.dataPoints[n].x.getTime?(f=!0,c=m.dataPoints[n].x.getTime()):c=m.dataPoints[n].x;e=m.dataPoints[n].y;c<b.min&&(b.min=c);c>b.max&&(b.max=c);if(0<n){var r=c-m.dataPoints[n-1].x;0>r&&(r*=-1);b.minDiff>r&&0!==r&&(b.minDiff=r)}if(!(c<s)||p){if(!p&&(p=!0,0<n)){n-=2;continue}if(c>q&&!l)l=!0;else if(c>q&&l)continue;m.dataPoints[n].label&&(a.axisX.labels[c]=m.dataPoints[n].label);c<b.viewPortMin&&(b.viewPortMin=
c);c>b.viewPortMax&&(b.viewPortMax=c);0<=e?g=!0:k=!0;h[c]=h[c]?h[c]+Math.abs(e):Math.abs(e)}}this.plotInfo.axisXValueType=m.xValueType=f?"dateTime":"number"}g&&!k?(d.max=99,d.min=1):g&&k?(d.max=99,d.min=-99):!g&&k&&(d.max=-1,d.min=-99);d.viewPortMin=d.min;d.viewPortMax=d.max;a.dataPointYSums=h}};t.prototype.getAutoFontSize=function(a){return Math.min(this.canvas.width,this.canvas.height)*(a/400)};t.prototype.resetOverlayedCanvas=function(){var a=this.overlaidCanvas.width;this.overlaidCanvas.width=
0;this.overlaidCanvas.width=a};t.prototype.attachEvent=function(a){this._events.push(a)};t.prototype._touchEventHandler=function(a){if(a.changedTouches){var d=[];first=(d=a.changedTouches)?d[0]:a;switch(a.type){case "touchstart":case "MSPointerDown":d=["mousemove","mousedown"];break;case "touchmove":case "MSPointerMove":d=["mousemove"];break;case "touchend":case "MSPointerUp":d="touchstart"===this._lastTouchEventType||"MSPointerDown"===this._lastTouchEventType?["mouseup","click"]:["mouseup"];break;
default:return}this._lastTouchEventType=a.type;for(var b=0;b<d.length;b++){var c=d[b],e=document.createEvent("MouseEvent");e.initMouseEvent(c,!0,!0,window,1,first.screenX,first.screenY,first.clientX,first.clientY,!1,!1,!1,!1,0,null);first.target.dispatchEvent(e);a.preventManipulation&&a.preventManipulation();a.preventDefault&&a.preventDefault()}}};t.prototype._mouseEventHandler=function(a){a.preventManipulation&&a.preventManipulation();a.preventDefault&&a.preventDefault();var d=ba(a),b=a.type,c,e;
a.which?e=3==a.which:a.button&&(e=2==a.button);if(!e){if(t.capturedEventParam)c=t.capturedEventParam,"mouseup"===b&&(t.capturedEventParam=null,c.chart.overlaidCanvas.releaseCapture?c.chart.overlaidCanvas.releaseCapture():document.body.removeEventListener("mouseup",c.chart._mouseEventHandler,!1)),c.hasOwnProperty(b)&&c[b].call(c.context,d.x,d.y);else if(this._events){for(e=0;e<this._events.length;e++)if(this._events[e].hasOwnProperty(b)){c=this._events[e];var f=c.bounds;if(d.x>=f.x1&&d.x<=f.x2&&d.y>=
f.y1&&d.y<=f.y2){c[b].call(c.context,d.x,d.y);"mousedown"===b&&!0===c.capture?(t.capturedEventParam=c,this.overlaidCanvas.setCapture?this.overlaidCanvas.setCapture():document.body.addEventListener("mouseup",this._mouseEventHandler,!1)):"mouseup"===b&&(c.chart.overlaidCanvas.releaseCapture?c.chart.overlaidCanvas.releaseCapture():document.body.removeEventListener("mouseup",this._mouseEventHandler,!1));break}else c=null}a.target.style.cursor=c&&c.cursor?c.cursor:"default"}this._toolTip.enabled&&(b=this.getPlotArea(),
(d.x<b.x1||d.x>b.x2||d.y<b.y1||d.y>b.y2)&&this._toolTip.hide());(!this.isDrag||!this.zoomEnabled)&&this._eventManager.mouseEventHandler(a)}};t.prototype._plotAreaMouseDown=function(a,d){if("normal"===this.plotInfo.axisPlacement||"xySwapped"===this.plotInfo.axisPlacement)this.isDrag=!0,this.dragStartPoint={x:a,y:d,xMinimum:this.axisX.minimum,xMaximum:this.axisX.maximum}};t.prototype._plotAreaMouseUp=function(a,d){var b,c;if(("normal"===this.plotInfo.axisPlacement||"xySwapped"===this.plotInfo.axisPlacement)&&
this.isDrag){this.isDrag=!1;var e=0,e=this.axisX.lineCoordinates,e="xySwapped"===this.plotInfo.axisPlacement?d-this.dragStartPoint.y:this.dragStartPoint.x-a;Math.abs(this.axisX.maximum-this.axisX.minimum);if(2<Math.abs(e)){if(this.panEnabled)e=!1,c=0,this.axisX.sessionVariables.internalMinimum<this.axisX._absoluteMinimum?(c=this.axisX._absoluteMinimum-this.axisX.sessionVariables.internalMinimum,this.axisX.sessionVariables.internalMinimum+=c,this.axisX.sessionVariables.internalMaximum+=c,e=!0):this.axisX.sessionVariables.internalMaximum>
this.axisX._absoluteMaximum&&(c=this.axisX.sessionVariables.internalMaximum-this.axisX._absoluteMaximum,this.axisX.sessionVariables.internalMaximum-=c,this.axisX.sessionVariables.internalMinimum-=c,e=!0),e&&this.render();else if(this.zoomEnabled){this.resetOverlayedCanvas();if(!this.dragStartPoint)return;"xySwapped"===this.plotInfo.axisPlacement?(b=Math.min(this.dragStartPoint.y,d),c=Math.max(this.dragStartPoint.y,d),1<Math.abs(b-c)&&(e=this.axisX.lineCoordinates,c=this.axisX.maximum-(this.axisX.maximum-
this.axisX.minimum)/e.height*(c-e.y1),e=this.axisX.maximum-(this.axisX.maximum-this.axisX.minimum)/e.height*(b-e.y1),c=Math.max(c,this.axisX.dataInfo.min),e=Math.min(e,this.axisX.dataInfo.max),Math.abs((e-c)/this.axisX.dataInfo.minDiff)>=0.008*this.canvas.height&&(this.axisX.sessionVariables.internalMinimum=c,this.axisX.sessionVariables.internalMaximum=e,this.render()))):"normal"===this.plotInfo.axisPlacement&&(c=Math.min(this.dragStartPoint.x,a),b=Math.max(this.dragStartPoint.x,a),1<Math.abs(c-b)&&
(e=this.axisX.lineCoordinates,c=(this.axisX.maximum-this.axisX.minimum)/e.width*(c-e.x1)+this.axisX.minimum,e=(this.axisX.maximum-this.axisX.minimum)/e.width*(b-e.x1)+this.axisX.minimum,c=Math.max(c,this.axisX.dataInfo.min),e=Math.min(e,this.axisX.dataInfo.max),Math.abs((e-c)/this.axisX.dataInfo.minDiff)>=0.01*this.canvas.width&&(this.axisX.sessionVariables.internalMinimum=c,this.axisX.sessionVariables.internalMaximum=e,this.render())))}this._toolBar.style.display="inline"}}this.dragStartPoint=null};
t.prototype._plotAreaMouseMove=function(a,d){if(this.isDrag){var b=0,c=0,c=this.axisX.lineCoordinates;"xySwapped"===this.plotInfo.axisPlacement?(b=d-this.dragStartPoint.y,c=Math.abs(this.axisX.maximum-this.axisX.minimum)/c.height*b):(b=this.dragStartPoint.x-a,c=Math.abs(this.axisX.maximum-this.axisX.minimum)/c.width*b);2<Math.abs(b)&&8>Math.abs(b)&&(this.panEnabled||this.zoomEnabled)?this._toolTip.hide():this._toolTip.enabled&&(!this.panEnabled&&!this.zoomEnabled)&&this._toolTip.mouseMoveHandler(a,
d);if(2<Math.abs(b)&&(this.panEnabled||this.zoomEnabled))if(this.panEnabled){this.axisX.sessionVariables.internalMinimum=this.dragStartPoint.xMinimum+c;this.axisX.sessionVariables.internalMaximum=this.dragStartPoint.xMaximum+c;b=0;this.axisX.sessionVariables.internalMinimum<this.axisX._absoluteMinimum-L(this.axisX.interval,this.axisX.intervalType)?(b=this.axisX._absoluteMinimum-L(this.axisX.interval,this.axisX.intervalType)-this.axisX.sessionVariables.internalMinimum,this.axisX.sessionVariables.internalMinimum+=
b,this.axisX.sessionVariables.internalMaximum+=b):this.axisX.sessionVariables.internalMaximum>this.axisX._absoluteMaximum+L(this.axisX.interval,this.axisX.intervalType)&&(b=this.axisX.sessionVariables.internalMaximum-(this.axisX._absoluteMaximum+L(this.axisX.interval,this.axisX.intervalType)),this.axisX.sessionVariables.internalMaximum-=b,this.axisX.sessionVariables.internalMinimum-=b);var e=this;clearTimeout(this._panTimerId);this._panTimerId=setTimeout(function(){e.render()},0)}else this.zoomEnabled&&
(b=this.getPlotArea(),this.resetOverlayedCanvas(),c=this.overlaidCanvasCtx.globalAlpha,this.overlaidCanvasCtx.globalAlpha=0.7,this.overlaidCanvasCtx.fillStyle="#A0ABB8","xySwapped"===this.plotInfo.axisPlacement?this.overlaidCanvasCtx.fillRect(b.x1,this.dragStartPoint.y,b.x2-b.x1,d-this.dragStartPoint.y):"normal"===this.plotInfo.axisPlacement&&this.overlaidCanvasCtx.fillRect(this.dragStartPoint.x,b.y1,a-this.dragStartPoint.x,b.y2-b.y1),this.overlaidCanvasCtx.globalAlpha=c)}else this._toolTip.enabled&&
this._toolTip.mouseMoveHandler(a,d)};t.prototype.getPlotArea=function(){var a,d,b,c;c=this.axisY?this.axisY:this.axisY2;if(this.axisX&&c)a=this.axisX.lineCoordinates.x1<this.axisX.lineCoordinates.x2?this.axisX.lineCoordinates.x1:c.lineCoordinates.x1,b=this.axisX.lineCoordinates.y1<c.lineCoordinates.y1?this.axisX.lineCoordinates.y1:c.lineCoordinates.y1,d=this.axisX.lineCoordinates.x2>c.lineCoordinates.x2?this.axisX.lineCoordinates.x2:c.lineCoordinates.x2,c=this.axisX.lineCoordinates.y2>this.axisX.lineCoordinates.y1?
this.axisX.lineCoordinates.y2:c.lineCoordinates.y2;else return this.layoutManager.getFreeSpace();return{x1:a,y1:b,x2:d,y2:c,width:d-a,height:c-b}};t.prototype.getPixelCoordinatesOnPlotArea=function(a,d){return{x:this.axisX.getPixelCoordinatesOnAxis(a).x,y:this.axisY.getPixelCoordinatesOnAxis(d).y}};t.prototype.renderIndexLabels=function(){this.ctx.textBaseline="middle";for(var a=this.getPlotArea(),d=0;d<this._indexLabels.length;d++){var b=this._indexLabels[d],c,e,f;this.ctx.fillStyle="indexLabelFontColor"in
b.dataPoint?b.dataPoint.indexLabelFontColor:b.dataSeries.indexLabelFontColor;f=this.ctx;var g=b.dataPoint,k=b.dataSeries,h="",h=h+(g.indexLabelFontStyle?g.indexLabelFontStyle+" ":k&&k.indexLabelFontStyle?k.indexLabelFontStyle+" ":""),h=h+(g.indexLabelFontWeight?g.indexLabelFontWeight+" ":k&&k.indexLabelFontWeight?k.indexLabelFontWeight+" ":""),h=h+(g.indexLabelFontSize?g.indexLabelFontSize+"px ":k&&k.indexLabelFontSize?k.indexLabelFontSize+"px ":""),h=h+(g.indexLabelFontFamily?g.indexLabelFontFamily+
" ":k&&k.indexLabelFontFamily?k.indexLabelFontFamily+" ":"");f.font=h;var g=this.replaceKeywordsWithValue("indexLabel"in b.dataPoint?b.dataPoint.indexLabel:b.dataSeries.indexLabel,b.dataPoint,b.dataSeries),k=this.ctx.measureText(g).width,h="indexLabelFontSize"in b.dataPoint?b.dataPoint.indexLabelFontSize:b.dataSeries.indexLabelFontSize,j="indexLabelPlacement"in b.dataPoint?b.dataPoint.indexLabelPlacement:b.dataSeries.indexLabelPlacement,m="indexLabelOrientation"in b.dataPoint?b.dataPoint.indexLabelOrientation:
b.dataSeries.indexLabelOrientation,n=f=0,p=0,l=0,s=0;"column"===b.chartType||"stackedColumn"===b.chartType||"stackedColumn100"===b.chartType||"bar"===b.chartType||"stackedBar"===b.chartType||"stackedBar100"===b.chartType?(Math.abs(b.bounds.x1,b.bounds.x2),Math.abs(b.bounds.y1,b.bounds.y2),"normal"===this.plotInfo.axisPlacement?("outside"===j?(n=a.y1,p=a.y2):"inside"===j&&(n=b.bounds.y1,p=b.bounds.y2),"horizontal"===m?(c=b.point.x-k/2,e=0<=b.dataPoint.y?Math.min(Math.max(b.point.y-h/2-5,n+h/2+5),p-
h/2-5):Math.max(Math.min(b.point.y+h/2+5,p-h/2),n+h/2+5)):"vertical"===m&&(c=b.point.x,e=0<=b.dataPoint.y?Math.min(Math.max(b.point.y-5,n+k+5),p):Math.max(Math.min(b.point.y+k+5,p-5),n),f=-90)):"xySwapped"===this.plotInfo.axisPlacement&&("outside"===j?(l=a.x1,s=a.x2):"inside"===j&&(l=b.bounds.x1,s=b.bounds.x2),"horizontal"===m?(e=b.point.y,c=0<=b.dataPoint.y?Math.max(Math.min(b.point.x+5,s-k),l):Math.min(Math.max(b.point.x-k-5,l),s)):"vertical"===m&&(e=b.point.y+k/2,c=0<=b.dataPoint.y?Math.max(Math.min(b.point.x+
h/2+5,s-h/2),l):Math.min(Math.max(b.point.x-h/2-5,l+h/2),s+h/2),f=-90))):"horizontal"===m?(c=b.point.x-k/2,e=0<=b.dataPoint.y?Math.max(b.point.y-h/2-5,a.y1+h/2):Math.min(b.point.y+h/2+5,a.y2-h/2)):"vertical"===m&&(c=b.point.x,e=0<=b.dataPoint.y?Math.max(b.point.y-5,a.y1+k):Math.min(b.point.y+k+5,a.y2),f=-90);this.ctx.save();this.ctx.translate(c,e);this.ctx.rotate(Math.PI/180*f);this.ctx.fillText(g,0,0);this.ctx.restore()}};t.prototype.renderLine=function(a){if(!(0>=a.dataSeriesIndexes.length)){var d=
this._eventManager.ghostCtx;this.ctx.save();var b=this.getPlotArea();this.ctx.beginPath();this.ctx.rect(b.x1,b.y1,b.width,b.height);this.ctx.clip();for(var b=[],c=0;c<a.dataSeriesIndexes.length;c++){var e=a.dataSeriesIndexes[c],f=this.data[e];this.ctx.lineWidth=f.lineThickness;var g=f.dataPoints,k=f.id;this._eventManager.objectMap[k]={objectType:"dataSeries",dataSeriesIndex:e};k=B(k);d.strokeStyle=k;d.lineWidth=0<f.lineThickness?Math.max(f.lineThickness,4):0;colorSet=f._colorSet;color=colorSet[0];
this.ctx.strokeStyle=color;var k=!0,h=0,j,m;if(0<g.length){for(h=0;h<g.length;h++)if(j=g[h].getTime?g[h].x.getTime():g[h].x,!(j<a.axisX.dataInfo.viewPortMin||j>a.axisX.dataInfo.viewPortMax)&&"number"===typeof g[h].y){j=a.axisX.convertionParameters.reference+a.axisX.convertionParameters.pixelPerUnit*(j-a.axisX.convertionParameters.minimum)+0.5<<0;m=a.axisY.convertionParameters.reference+a.axisY.convertionParameters.pixelPerUnit*(g[h].y-a.axisY.convertionParameters.minimum)+0.5<<0;var n=f.dataPointIds[h];
this._eventManager.objectMap[n]={objectType:"dataPoint",dataSeriesIndex:e,dataPointIndex:h,x1:j,y1:m};k?(this.ctx.beginPath(),this.ctx.moveTo(j,m),d.beginPath(),d.moveTo(j,m),k=!1):(this.ctx.lineTo(j,m),d.lineTo(j,m),0==h%500&&(this.ctx.stroke(),this.ctx.beginPath(),this.ctx.moveTo(j,m),d.stroke(),d.beginPath(),d.moveTo(j,m)));if(0<g[h].markerSize||0<f.markerSize){var p=f.getMarkerProperties(h,j,m,this.ctx);b.push(p);n=B(n);b.push({x:j,y:m,ctx:d,type:p.type,size:p.size,color:n,borderColor:n,borderThickness:p.borderThickness})}(g[h].indexLabel||
f.indexLabel)&&this._indexLabels.push({chartType:"line",dataPoint:g[h],dataSeries:f,point:{x:j,y:m},color:color})}this.ctx.stroke();d.stroke()}}G.drawMarkers(b);this.ctx.restore();this.ctx.beginPath();d.beginPath()}};var F=function(a,d,b,c,e,f,g,k,h,j){var m=15<c-d&&15<e-b?8:0.35*Math.min(c-d,e-b);color2="rgba(255, 255, 255, .4)";color3="rgba(255, 255, 255, 0.1)";color1=f;a.beginPath();a.moveTo(d,b);a.save();a.fillStyle=color1;a.fillRect(d,b,c-d,e-b);a.restore();!0===g&&(a.save(),a.beginPath(),a.moveTo(d,
b),a.lineTo(d+m,b+m),a.lineTo(c-m,b+m),a.lineTo(c,b),a.closePath(),f=a.createLinearGradient((c+d)/2,b+m,(c+d)/2,b),f.addColorStop(0,color1),f.addColorStop(1,color2),a.fillStyle=f,a.fill(),a.restore());!0===k&&(a.save(),a.beginPath(),a.moveTo(d,e),a.lineTo(d+m,e-m),a.lineTo(c-m,e-m),a.lineTo(c,e),a.closePath(),f=a.createLinearGradient((c+d)/2,e-m,(c+d)/2,e),f.addColorStop(0,color1),f.addColorStop(1,color2),a.fillStyle=f,a.fill(),a.restore());!0===h&&(a.save(),a.beginPath(),a.moveTo(d,b),a.lineTo(d+
m,b+m),a.lineTo(d+m,e-m),a.lineTo(d,e),a.closePath(),f=a.createLinearGradient(d+m,(e+b)/2,d,(e+b)/2),f.addColorStop(0,color1),f.addColorStop(1,color3),a.fillStyle=f,a.fill(),a.restore());!0===j&&(a.save(),a.beginPath(),a.moveTo(c,b),a.lineTo(c-m,b+m),a.lineTo(c-m,e-m),a.lineTo(c,e),f=a.createLinearGradient(c-m,(e+b)/2,c,(e+b)/2),f.addColorStop(0,color1),f.addColorStop(1,color3),a.fillStyle=f,f.addColorStop(0,color1),f.addColorStop(1,color3),a.fillStyle=f,a.fill(),a.closePath(),a.restore())};t.prototype.colorSetIndex=
0;t.prototype.renderColumn=function(a){if(!(0>=a.dataSeriesIndexes.length)){var d=null,b=this.getPlotArea(),c=0,e,f,g=a.axisY.convertionParameters.reference+a.axisY.convertionParameters.pixelPerUnit*(0-a.axisY.convertionParameters.minimum)<<0,k=0.15*this.canvas.width,c=a.axisX.dataInfo.minDiff,h=0.9*(b.width/Math.abs(a.axisX.maximum-a.axisX.minimum)*Math.abs(c)/a.plotType.totalDataSeries)<<0;this.ctx.save();this._eventManager.ghostCtx.save();this.ctx.beginPath();this.ctx.rect(b.x1,b.y1,b.width,b.height);
this.ctx.clip();this._eventManager.ghostCtx.rect(b.x1,b.y1,b.width,b.height);this._eventManager.ghostCtx.clip();for(var j=0;j<a.dataSeriesIndexes.length;j++){var m=a.dataSeriesIndexes[j],n=this.data[m],p=n.dataPoints;1==p.length&&(h=k);1>h?h=1:h>k&&(h=k);if(0<p.length)for(var l=5<h&&n.bevelEnabled?!0:!1,c=0;c<p.length;c++)if(p[c].getTime?f=p[c].x.getTime():f=p[c].x,!(f<a.axisX.dataInfo.viewPortMin||f>a.axisX.dataInfo.viewPortMax)&&"number"===typeof p[c].y){b=a.axisX.convertionParameters.reference+
a.axisX.convertionParameters.pixelPerUnit*(f-a.axisX.convertionParameters.minimum)+0.5<<0;e=a.axisY.convertionParameters.reference+a.axisY.convertionParameters.pixelPerUnit*(p[c].y-a.axisY.convertionParameters.minimum)+0.5<<0;var s=b-a.plotType.totalDataSeries*h/2+(a.previousDataSeriesCount+j)*h<<0,q=s+h<<0,r;0<=p[c].y?r=g:(r=e,e=g);e>r&&(r=e=r);d=p[c].color?p[c].color:n._colorSet[c%n._colorSet.length];F(this.ctx,s,e,q,r,d,l&&0<=p[c].y,0>p[c].y&&l,!1,!1);d=n.dataPointIds[c];this._eventManager.objectMap[d]=
{objectType:"dataPoint",dataSeriesIndex:m,dataPointIndex:c,x1:s,y1:e,x2:q,y2:r};d=B(d);F(this._eventManager.ghostCtx,s,e,q,r,d,!1,!1,!1,!1);if(p[c].indexLabel||n.indexLabel)this._indexLabels.push({chartType:"column",dataPoint:p[c],dataSeries:n,point:{x:b,y:0<=p[c].y?e:r},bounds:{x1:s,y1:Math.min(e,r),x2:q,y2:Math.max(e,r)},color:d})}}this.ctx.restore();this._eventManager.ghostCtx.restore()}};t.prototype.renderStackedColumn=function(a){if(!(0>=a.dataSeriesIndexes.length)){var d=null,b=this.getPlotArea(),
c=[],e=[],f=0,g,k=a.axisY.convertionParameters.reference+a.axisY.convertionParameters.pixelPerUnit*(0-a.axisY.convertionParameters.minimum)<<0,h=0.15*this.canvas.width,f=a.axisX.dataInfo.minDiff,j=0.9*(b.width/Math.abs(a.axisX.maximum-a.axisX.minimum)*Math.abs(f)/a.plotType.plotUnits.length)<<0;this.ctx.save();this._eventManager.ghostCtx.save();this.ctx.beginPath();this.ctx.rect(b.x1,b.y1,b.width,b.height);this.ctx.clip();this._eventManager.ghostCtx.rect(b.x1,b.y1,b.width,b.height);this._eventManager.ghostCtx.clip();
for(var m=0;m<a.dataSeriesIndexes.length;m++){var n=a.dataSeriesIndexes[m],p=this.data[n],l=p.dataPoints;1==l.length&&(j=h);1>j?j=1:j>h&&(j=h);if(0<l.length){var s=5<j&&p.bevelEnabled?!0:!1;this.ctx.strokeStyle="#4572A7 ";for(f=0;f<l.length;f++)if(d=l[f].x.getTime?l[f].x.getTime():l[f].x,!(d<a.axisX.dataInfo.viewPortMin||d>a.axisX.dataInfo.viewPortMax)&&"number"===typeof l[f].y){b=a.axisX.convertionParameters.reference+a.axisX.convertionParameters.pixelPerUnit*(d-a.axisX.convertionParameters.minimum)+
0.5<<0;g=a.axisY.convertionParameters.reference+a.axisY.convertionParameters.pixelPerUnit*(l[f].y-a.axisY.convertionParameters.minimum)+0.5<<0;var q=b-a.plotType.plotUnits.length*j/2+a.index*j<<0,r=q+j<<0,u;if(0<=l[f].y){var v=c[d]?c[d]:0;g-=v;u=k-v;c[d]=v+(u-g)}else v=e[d]?e[d]:0,u=g+v,g=k+v,e[d]=v+(u-g);d=l[f].color?l[f].color:p._colorSet[f%p._colorSet.length];F(this.ctx,q,g,r,u,d,s&&0<=l[f].y,0>l[f].y&&s,!1,!1);d=p.dataPointIds[f];this._eventManager.objectMap[d]={objectType:"dataPoint",dataSeriesIndex:n,
dataPointIndex:f,x1:q,y1:g,x2:r,y2:u};d=B(d);F(this._eventManager.ghostCtx,q,g,r,u,d,!1,!1,!1,!1);if(l[f].indexLabel||p.indexLabel)this._indexLabels.push({chartType:"stackedColumn",dataPoint:l[f],dataSeries:p,point:{x:b,y:0<=l[f].y?g:u},bounds:{x1:q,y1:Math.min(g,u),x2:r,y2:Math.max(g,u)},color:d})}}}this.ctx.restore();this._eventManager.ghostCtx.restore()}};t.prototype.renderStackedColumn100=function(a){if(!(0>=a.dataSeriesIndexes.length)){var d=null,b=this.getPlotArea(),c=[],e=[],f=0,g,k=a.axisY.convertionParameters.reference+
a.axisY.convertionParameters.pixelPerUnit*(0-a.axisY.convertionParameters.minimum)<<0,h=0.15*this.canvas.width,f=a.axisX.dataInfo.minDiff,j=0.9*(b.width/Math.abs(a.axisX.maximum-a.axisX.minimum)*Math.abs(f)/a.plotType.plotUnits.length)<<0;this.ctx.save();this._eventManager.ghostCtx.save();this.ctx.beginPath();this.ctx.rect(b.x1,b.y1,b.width,b.height);this.ctx.clip();this._eventManager.ghostCtx.rect(b.x1,b.y1,b.width,b.height);this._eventManager.ghostCtx.clip();for(var m=0;m<a.dataSeriesIndexes.length;m++){var n=
a.dataSeriesIndexes[m],p=this.data[n],l=p.dataPoints;1==l.length&&(j=h);1>j?j=1:j>h&&(j=h);if(0<l.length)for(var s=5<j&&p.bevelEnabled?!0:!1,f=0;f<l.length;f++)if(d=l[f].x.getTime?l[f].x.getTime():l[f].x,!(d<a.axisX.dataInfo.viewPortMin||d>a.axisX.dataInfo.viewPortMax)&&"number"===typeof l[f].y){b=a.axisX.convertionParameters.reference+a.axisX.convertionParameters.pixelPerUnit*(d-a.axisX.convertionParameters.minimum)+0.5<<0;g=a.axisY.convertionParameters.reference+a.axisY.convertionParameters.pixelPerUnit*
((0!==a.dataPointYSums[d]?100*(l[f].y/a.dataPointYSums[d]):0)-a.axisY.convertionParameters.minimum)+0.5<<0;var q=b-a.plotType.plotUnits.length*j/2+a.index*j<<0,r=q+j<<0,u;if(0<=l[f].y){var v=c[d]?c[d]:0;g-=v;u=k-v;c[d]=v+(u-g)}else v=e[d]?e[d]:0,u=g+v,g=k+v,e[d]=v+(u-g);d=l[f].color?l[f].color:p._colorSet[f%p._colorSet.length];F(this.ctx,q,g,r,u,d,s&&0<=l[f].y,0>l[f].y&&s,!1,!1);d=p.dataPointIds[f];this._eventManager.objectMap[d]={objectType:"dataPoint",dataSeriesIndex:n,dataPointIndex:f,x1:q,y1:g,
x2:r,y2:u};d=B(d);F(this._eventManager.ghostCtx,q,g,r,u,d,!1,!1,!1,!1);if(l[f].indexLabel||p.indexLabel)this._indexLabels.push({chartType:"stackedColumn100",dataPoint:l[f],dataSeries:p,point:{x:b,y:0<=l[f].y?g:u},bounds:{x1:q,y1:Math.min(g,u),x2:r,y2:Math.max(g,u)},color:d})}}this.ctx.restore();this._eventManager.ghostCtx.restore()}};t.prototype.renderBar=function(a){if(!(0>=a.dataSeriesIndexes.length)){var d=null,b=this.getPlotArea(),c=0,e,f,g=a.axisY.convertionParameters.reference+a.axisY.convertionParameters.pixelPerUnit*
(0-a.axisY.convertionParameters.minimum)<<0,k=0.15*this.canvas.height,c=a.axisX.dataInfo.minDiff,h=0.9*(b.height/Math.abs(a.axisX.maximum-a.axisX.minimum)*Math.abs(c)/a.plotType.totalDataSeries)<<0;this.ctx.save();this._eventManager.ghostCtx.save();this.ctx.beginPath();this.ctx.rect(b.x1,b.y1,b.width,b.height);this.ctx.clip();this._eventManager.ghostCtx.rect(b.x1,b.y1,b.width,b.height);this._eventManager.ghostCtx.clip();for(var j=0;j<a.dataSeriesIndexes.length;j++){var m=a.dataSeriesIndexes[j],n=
this.data[m],p=n.dataPoints;1==p.length&&(h=k);1>h?h=1:h>k&&(h=k);if(0<p.length){var l=5<h&&n.bevelEnabled?!0:!1;this.ctx.strokeStyle="#4572A7 ";for(c=0;c<p.length;c++)if(p[c].getTime?f=p[c].x.getTime():f=p[c].x,!(f<a.axisX.dataInfo.viewPortMin||f>a.axisX.dataInfo.viewPortMax)&&"number"===typeof p[c].y){b=a.axisX.convertionParameters.reference+a.axisX.convertionParameters.pixelPerUnit*(f-a.axisX.convertionParameters.minimum)+0.5<<0;e=a.axisY.convertionParameters.reference+a.axisY.convertionParameters.pixelPerUnit*
(p[c].y-a.axisY.convertionParameters.minimum)+0.5<<0;var s=b-a.plotType.totalDataSeries*h/2+(a.previousDataSeriesCount+j)*h<<0,q=s+h<<0,r;0<=p[c].y?r=g:(r=e,e=g);d=p[c].color?p[c].color:n._colorSet[c%n._colorSet.length];F(this.ctx,r,s,e,q,d,l,!1,!1,!1);d=n.dataPointIds[c];this._eventManager.objectMap[d]={objectType:"dataPoint",dataSeriesIndex:m,dataPointIndex:c,x1:r,y1:s,x2:e,y2:q};d=B(d);F(this._eventManager.ghostCtx,r,s,e,q,d,!1,!1,!1,!1);this._indexLabels.push({chartType:"bar",dataPoint:p[c],dataSeries:n,
point:{x:0<=p[c].y?e:r,y:b},bounds:{x1:Math.min(r,e),y1:s,x2:Math.max(r,e),y2:q},color:d})}}}this.ctx.restore();this._eventManager.ghostCtx.restore()}};t.prototype.renderStackedBar=function(a){if(!(0>=a.dataSeriesIndexes.length)){var d=null,b=this.getPlotArea(),c=[],e=[],f=0,g,k=a.axisY.convertionParameters.reference+a.axisY.convertionParameters.pixelPerUnit*(0-a.axisY.convertionParameters.minimum)<<0,h=0.15*this.canvas.width,f=a.axisX.dataInfo.minDiff,j=0.9*(b.height/Math.abs(a.axisX.maximum-a.axisX.minimum)*
Math.abs(f)/a.plotType.plotUnits.length)<<0;this.ctx.save();this._eventManager.ghostCtx.save();this.ctx.beginPath();this.ctx.rect(b.x1,b.y1,b.width,b.height);this.ctx.clip();this._eventManager.ghostCtx.rect(b.x1,b.y1,b.width,b.height);this._eventManager.ghostCtx.clip();for(var m=0;m<a.dataSeriesIndexes.length;m++){var n=a.dataSeriesIndexes[m],p=this.data[n],l=p.dataPoints;1==l.length&&(j=h);1>j?j=1:j>h&&(j=h);if(0<l.length){var s=5<j&&p.bevelEnabled?!0:!1;this.ctx.strokeStyle="#4572A7 ";for(f=0;f<
l.length;f++)if(d=l[f].x.getTime?l[f].x.getTime():l[f].x,!(d<a.axisX.dataInfo.viewPortMin||d>a.axisX.dataInfo.viewPortMax)&&"number"===typeof l[f].y){b=a.axisX.convertionParameters.reference+a.axisX.convertionParameters.pixelPerUnit*(d-a.axisX.convertionParameters.minimum)+0.5<<0;g=a.axisY.convertionParameters.reference+a.axisY.convertionParameters.pixelPerUnit*(l[f].y-a.axisY.convertionParameters.minimum)+0.5<<0;var q=b-a.plotType.plotUnits.length*j/2+a.index*j<<0,r=q+j<<0,u;if(0<=l[f].y){var v=
c[d]?c[d]:0;u=k+v;g+=v;c[d]=v+(g-u)}else v=e[d]?e[d]:0,u=g-v,g=k-v,e[d]=v+(g-u);d=l[f].color?l[f].color:p._colorSet[f%p._colorSet.length];F(this.ctx,u,q,g,r,d,s,!1,!1,!1);d=p.dataPointIds[f];this._eventManager.objectMap[d]={objectType:"dataPoint",dataSeriesIndex:n,dataPointIndex:f,x1:u,y1:q,x2:g,y2:r};d=B(d);F(this._eventManager.ghostCtx,u,q,g,r,d,!1,!1,!1,!1);this._indexLabels.push({chartType:"stackedBar",dataPoint:l[f],dataSeries:p,point:{x:0<=l[f].y?g:u,y:b},bounds:{x1:Math.min(u,g),y1:q,x2:Math.max(u,
g),y2:r},color:d})}}}this.ctx.restore();this._eventManager.ghostCtx.restore()}};t.prototype.renderStackedBar100=function(a){if(!(0>=a.dataSeriesIndexes.length)){var d=null,b=this.getPlotArea(),c=[],e=[],f=0,g,k=a.axisY.convertionParameters.reference+a.axisY.convertionParameters.pixelPerUnit*(0-a.axisY.convertionParameters.minimum)<<0,h=0.15*this.canvas.width,f=a.axisX.dataInfo.minDiff,j=0.9*(b.height/Math.abs(a.axisX.maximum-a.axisX.minimum)*Math.abs(f)/a.plotType.plotUnits.length)<<0;this.ctx.save();
this._eventManager.ghostCtx.save();this.ctx.beginPath();this.ctx.rect(b.x1,b.y1,b.width,b.height);this.ctx.clip();this._eventManager.ghostCtx.rect(b.x1,b.y1,b.width,b.height);this._eventManager.ghostCtx.clip();for(var m=0;m<a.dataSeriesIndexes.length;m++){var n=a.dataSeriesIndexes[m],p=this.data[n],l=p.dataPoints;1==l.length&&(j=h);1>j?j=1:j>h&&(j=h);if(0<l.length){var s=5<j&&p.bevelEnabled?!0:!1;this.ctx.strokeStyle="#4572A7 ";for(f=0;f<l.length;f++)if(d=l[f].x.getTime?l[f].x.getTime():l[f].x,!(d<
a.axisX.dataInfo.viewPortMin||d>a.axisX.dataInfo.viewPortMax)&&"number"===typeof l[f].y){b=a.axisX.convertionParameters.reference+a.axisX.convertionParameters.pixelPerUnit*(d-a.axisX.convertionParameters.minimum)+0.5<<0;g=a.axisY.convertionParameters.reference+a.axisY.convertionParameters.pixelPerUnit*((0!==a.dataPointYSums[d]?100*(l[f].y/a.dataPointYSums[d]):0)-a.axisY.convertionParameters.minimum)+0.5<<0;var q=b-a.plotType.plotUnits.length*j/2+a.index*j<<0,r=q+j<<0,u;if(0<=l[f].y){var v=c[d]?c[d]:
0;u=k+v;g+=v;c[d]=v+(g-u)}else v=e[d]?e[d]:0,u=g-v,g=k-v,e[d]=v+(g-u);d=l[f].color?l[f].color:p._colorSet[f%p._colorSet.length];F(this.ctx,u,q,g,r,d,s,!1,!1,!1);d=p.dataPointIds[f];this._eventManager.objectMap[d]={objectType:"dataPoint",dataSeriesIndex:n,dataPointIndex:f,x1:u,y1:q,x2:g,y2:r};d=B(d);F(this._eventManager.ghostCtx,u,q,g,r,d,!1,!1,!1,!1);this._indexLabels.push({chartType:"stackedBar100",dataPoint:l[f],dataSeries:p,point:{x:0<=l[f].y?g:u,y:b},bounds:{x1:Math.min(u,g),y1:q,x2:Math.max(u,
g),y2:r},color:d})}}}this.ctx.restore();this._eventManager.ghostCtx.restore()}};t.prototype.renderArea=function(a){if(!(0>=a.dataSeriesIndexes.length)){var d=this._eventManager.ghostCtx,b=a.axisX.lineCoordinates,c=a.axisY.lineCoordinates,e=[],f=this.getPlotArea();this.ctx.save();d.save();this.ctx.beginPath();this.ctx.rect(f.x1,f.y1,f.width,f.height);this.ctx.clip();d.beginPath();d.rect(f.x1,f.y1,f.width,f.height);d.clip();for(f=0;f<a.dataSeriesIndexes.length;f++){var g=a.dataSeriesIndexes[f],k=this.data[g],
h=k.dataPoints,e=k.id;this._eventManager.objectMap[e]={objectType:"dataSeries",dataSeriesIndex:g};e=B(e);d.fillStyle=e;var e=[],j=!0,m=0,n,p,l=a.axisY.convertionParameters.reference+a.axisY.convertionParameters.pixelPerUnit*(0-a.axisY.convertionParameters.minimum)+0.5<<0,s,q=null;if(0<h.length){color=k._colorSet[m%k._colorSet.length];for(this.ctx.fillStyle=color;m<h.length;m++)if(p=h[m].x.getTime?h[m].x.getTime():h[m].x,!(p<a.axisX.dataInfo.viewPortMin||p>a.axisX.dataInfo.viewPortMax))if(n=a.axisX.convertionParameters.reference+
a.axisX.convertionParameters.pixelPerUnit*(p-a.axisX.convertionParameters.minimum)+0.5<<0,p=a.axisY.convertionParameters.reference+a.axisY.convertionParameters.pixelPerUnit*(h[m].y-a.axisY.convertionParameters.minimum)+0.5<<0,"number"===typeof h[m].y){j?(this.ctx.beginPath(),this.ctx.moveTo(n,p),q={x:n,y:p},d.beginPath(),d.moveTo(n,p),j=!1):(this.ctx.lineTo(n,p),d.lineTo(n,p),0==m%250&&(0>=a.axisY.minimum&&0<=a.axisY.maximum?s=l:0>a.axisY.maximum?s=c.y1:0<a.axisY.minimum&&(s=b.y2),this.ctx.lineTo(n,
s),this.ctx.lineTo(q.x,s),this.ctx.closePath(),this.ctx.fill(),this.ctx.beginPath(),this.ctx.moveTo(n,p),d.lineTo(n,s),d.lineTo(q.x,s),d.closePath(),d.fill(),d.beginPath(),d.moveTo(n,p),q={x:n,y:p}));var r=k.dataPointIds[m];this._eventManager.objectMap[r]={objectType:"dataPoint",dataSeriesIndex:g,dataPointIndex:m,x1:n,y1:p};if(0!==h[m].markerSize&&(0<h[m].markerSize||0<k.markerSize)){var u=k.getMarkerProperties(m,n,p,this.ctx);e.push(u);markerColor=B(r);e.push({x:n,y:p,ctx:d,type:u.type,size:u.size,
color:markerColor,borderColor:markerColor,borderThickness:u.borderThickness})}(h[m].indexLabel||k.indexLabel)&&this._indexLabels.push({chartType:"area",dataPoint:h[m],dataSeries:k,point:{x:n,y:p},color:color})}0>=a.axisY.minimum&&0<=a.axisY.maximum?s=l:0>a.axisY.maximum?s=c.y1:0<a.axisY.minimum&&(s=b.y2);this.ctx.lineTo(n,s);this.ctx.lineTo(q.x,s);this.ctx.closePath();this.ctx.fill();d.lineTo(n,s);d.lineTo(q.x,s);d.closePath();d.fill();G.drawMarkers(e)}}this.ctx.restore();this._eventManager.ghostCtx.restore()}};
t.prototype.renderStackedArea=function(a){if(!(0>=a.dataSeriesIndexes.length)){var d=null,b=[],c=this.getPlotArea(),e=[],f=[],g=0,k,h,j,m=a.axisY.convertionParameters.reference+a.axisY.convertionParameters.pixelPerUnit*(0-a.axisY.convertionParameters.minimum)<<0,n=this._eventManager.ghostCtx;n.beginPath();this.ctx.save();n.save();this.ctx.beginPath();this.ctx.rect(c.x1,c.y1,c.width,c.height);this.ctx.clip();n.beginPath();n.rect(c.x1,c.y1,c.width,c.height);n.clip();xValuePresent=[];for(c=0;c<a.dataSeriesIndexes.length;c++){var p=
a.dataSeriesIndexes[c],l=this.data[p],s=l.dataPoints;l.dataPointIndexes=[];for(g=0;g<s.length;g++)p=s[g].x.getTime?s[g].x.getTime():s[g].x,l.dataPointIndexes[p]=g,xValuePresent[p]||(f.push(p),xValuePresent[p]=!0);f.sort(Y)}for(c=0;c<a.dataSeriesIndexes.length;c++){var p=a.dataSeriesIndexes[c],l=this.data[p],s=l.dataPoints,q=!0,r=[],g=l.id;this._eventManager.objectMap[g]={objectType:"dataSeries",dataSeriesIndex:p};g=B(g);n.fillStyle=g;if(0<f.length){d=l._colorSet[0];this.ctx.fillStyle=d;for(g=0;g<
f.length;g++){j=f[g];var u=null,u=0<=l.dataPointIndexes[j]?s[l.dataPointIndexes[j]]:{x:j,y:0};if(!(j<a.axisX.dataInfo.viewPortMin||j>a.axisX.dataInfo.viewPortMax)&&"number"===typeof u.y){k=a.axisX.convertionParameters.reference+a.axisX.convertionParameters.pixelPerUnit*(j-a.axisX.convertionParameters.minimum)+0.5<<0;h=a.axisY.convertionParameters.reference+a.axisY.convertionParameters.pixelPerUnit*(u.y-a.axisY.convertionParameters.minimum)+0.5<<0;var v=e[j]?e[j]:0;h-=v;r.push({x:k,y:m-v});e[j]=m-
h;if(q)this.ctx.beginPath(),this.ctx.moveTo(k,h),n.beginPath(),n.moveTo(k,h),q=!1;else if(this.ctx.lineTo(k,h),n.lineTo(k,h),0==g%250){for(;0<r.length;){var t=r.pop();this.ctx.lineTo(t.x,t.y);n.lineTo(t.x,t.y)}this.ctx.closePath();this.ctx.fill();this.ctx.beginPath();this.ctx.moveTo(k,h);n.closePath();n.fill();n.beginPath();n.moveTo(k,h);r.push({x:k,y:m-v})}if(0<=l.dataPointIndexes[j]){var y=l.dataPointIds[l.dataPointIndexes[j]];this._eventManager.objectMap[y]={objectType:"dataPoint",dataSeriesIndex:p,
dataPointIndex:l.dataPointIndexes[j],x1:k,y1:h}}if(0<=l.dataPointIndexes[j]&&0!==u.markerSize&&(0<u.markerSize||0<l.markerSize))j=l.getMarkerProperties(g,k,h,this.ctx),b.push(j),markerColor=B(y),b.push({x:k,y:h,ctx:n,type:j.type,size:j.size,color:markerColor,borderColor:markerColor,borderThickness:j.borderThickness});(u.indexLabel||l.indexLabel)&&this._indexLabels.push({chartType:"stackedArea",dataPoint:u,dataSeries:l,point:{x:k,y:h},color:d})}}for(;0<r.length;)t=r.pop(),this.ctx.lineTo(t.x,t.y),
n.lineTo(t.x,t.y);this.ctx.closePath();this.ctx.fill();this.ctx.beginPath();this.ctx.moveTo(k,h);n.closePath();n.fill();n.beginPath();n.moveTo(k,h)}delete l.dataPointIndexes}G.drawMarkers(b);this.ctx.restore();n.restore()}};t.prototype.renderStackedArea100=function(a){if(!(0>=a.dataSeriesIndexes.length)){var d=null,b=this.getPlotArea(),c=[],e=[],f=[],g=0,k,h,j,m=a.axisY.convertionParameters.reference+a.axisY.convertionParameters.pixelPerUnit*(0-a.axisY.convertionParameters.minimum)<<0,n=0.15*this.canvas.width,
p=a.axisX.dataInfo.minDiff,p=0.9*b.width/Math.abs(a.axisX.maximum-a.axisX.minimum)*Math.abs(p)<<0,l=this._eventManager.ghostCtx;this.ctx.save();l.save();this.ctx.beginPath();this.ctx.rect(b.x1,b.y1,b.width,b.height);this.ctx.clip();l.beginPath();l.rect(b.x1,b.y1,b.width,b.height);this._eventManager.ghostCtx.clip();xValuePresent=[];for(b=0;b<a.dataSeriesIndexes.length;b++){var s=a.dataSeriesIndexes[b],q=this.data[s],r=q.dataPoints;q.dataPointIndexes=[];for(g=0;g<r.length;g++)s=r[g].x.getTime?r[g].x.getTime():
r[g].x,q.dataPointIndexes[s]=g,xValuePresent[s]||(f.push(s),xValuePresent[s]=!0);f.sort(Y)}for(b=0;b<a.dataSeriesIndexes.length;b++){var s=a.dataSeriesIndexes[b],q=this.data[s],r=q.dataPoints,u=!0,d=q.id;this._eventManager.objectMap[d]={objectType:"dataSeries",dataSeriesIndex:s};d=B(d);l.fillStyle=d;1==r.length&&(p=n);1>p?p=1:p>n&&(p=n);var v=[];if(0<f.length){d=q._colorSet[g%q._colorSet.length];this.ctx.fillStyle=d;for(g=0;g<f.length;g++){j=f[g];var t=null,t=0<=q.dataPointIndexes[j]?r[q.dataPointIndexes[j]]:
{x:j,y:0};if(!(j<a.axisX.dataInfo.viewPortMin||j>a.axisX.dataInfo.viewPortMax)&&"number"===typeof t.y){h=0!==a.dataPointYSums[j]?100*(t.y/a.dataPointYSums[j]):0;k=a.axisX.convertionParameters.reference+a.axisX.convertionParameters.pixelPerUnit*(j-a.axisX.convertionParameters.minimum)+0.5<<0;h=a.axisY.convertionParameters.reference+a.axisY.convertionParameters.pixelPerUnit*(h-a.axisY.convertionParameters.minimum)+0.5<<0;var y=e[j]?e[j]:0;h-=y;v.push({x:k,y:m-y});e[j]=m-h;if(u)this.ctx.beginPath(),
this.ctx.moveTo(k,h),l.beginPath(),l.moveTo(k,h),u=!1;else if(this.ctx.lineTo(k,h),l.lineTo(k,h),0==g%250){for(;0<v.length;){var x=v.pop();this.ctx.lineTo(x.x,x.y);l.lineTo(x.x,x.y)}this.ctx.closePath();this.ctx.fill();this.ctx.beginPath();this.ctx.moveTo(k,h);l.closePath();l.fill();l.beginPath();l.moveTo(k,h);v.push({x:k,y:m-y})}if(0<=q.dataPointIndexes[j]){var z=q.dataPointIds[q.dataPointIndexes[j]];this._eventManager.objectMap[z]={objectType:"dataPoint",dataSeriesIndex:s,dataPointIndex:q.dataPointIndexes[j],
x1:k,y1:h}}if(0<=q.dataPointIndexes[j]&&0!==t.markerSize&&(0<t.markerSize||0<q.markerSize))j=q.getMarkerProperties(g,k,h,this.ctx),c.push(j),markerColor=B(z),c.push({x:k,y:h,ctx:l,type:j.type,size:j.size,color:markerColor,borderColor:markerColor,borderThickness:j.borderThickness});(t.indexLabel||q.indexLabel)&&this._indexLabels.push({chartType:"stackedArea100",dataPoint:t,dataSeries:q,point:{x:k,y:h},color:d})}}for(;0<v.length;)x=v.pop(),this.ctx.lineTo(x.x,x.y),l.lineTo(x.x,x.y);this.ctx.closePath();
this.ctx.fill();this.ctx.beginPath();this.ctx.moveTo(k,h);l.closePath();l.fill();l.beginPath();l.moveTo(k,h)}delete q.dataPointIndexes}G.drawMarkers(c);this.ctx.restore();l.restore()}};t.prototype.renderBubble=function(a){var d=a.dataSeriesIndexes.length;if(!(0>=d)){var b=this.getPlotArea(),c=0,e,f,g=0.15*this.canvas.width,c=a.axisX.dataInfo.minDiff,d=0.9*(b.width/Math.abs(a.axisX.maximum-a.axisX.minimum)*Math.abs(c)/d)<<0;this.ctx.save();this._eventManager.ghostCtx.save();this.ctx.beginPath();this.ctx.rect(b.x1,
b.y1,b.width,b.height);this.ctx.clip();this._eventManager.ghostCtx.rect(b.x1,b.y1,b.width,b.height);this._eventManager.ghostCtx.clip();for(var k=-Infinity,h=Infinity,j=0;j<a.dataSeriesIndexes.length;j++)for(var m=a.dataSeriesIndexes[j],n=this.data[m],p=n.dataPoints,l=0,c=0;c<p.length;c++)if(e=p[c].getTime?e=p[c].x.getTime():e=p[c].x,!(e<a.axisX.dataInfo.viewPortMin||e>a.axisX.dataInfo.viewPortMax)&&"undefined"!==typeof p[c].z)l=p[c].z,l>k&&(k=l),l<h&&(h=l);for(var s=25*Math.PI,b=Math.max(Math.pow(0.25*
Math.min(b.height,b.width)/2,2)*Math.PI,s),j=0;j<a.dataSeriesIndexes.length;j++)if(m=a.dataSeriesIndexes[j],n=this.data[m],p=n.dataPoints,1==p.length&&(d=g),1>d?d=1:d>g&&(d=g),0<p.length){this.ctx.strokeStyle="#4572A7 ";for(c=0;c<p.length;c++)if(e=p[c].getTime?e=p[c].x.getTime():e=p[c].x,!(e<a.axisX.dataInfo.viewPortMin||e>a.axisX.dataInfo.viewPortMax)&&"number"===typeof p[c].y){e=a.axisX.convertionParameters.reference+a.axisX.convertionParameters.pixelPerUnit*(e-a.axisX.convertionParameters.minimum)+
0.5<<0;f=a.axisY.convertionParameters.reference+a.axisY.convertionParameters.pixelPerUnit*(p[c].y-a.axisY.convertionParameters.minimum)+0.5<<0;var l=p[c].z,q=2*Math.max(Math.sqrt((s+(b-s)/(k-h)*(l-h))/Math.PI)<<0,1),l=n.getMarkerProperties(c,this.ctx);l.size=q;G.drawMarker(e,f,this.ctx,l.type,l.size,l.color,l.borderColor,l.borderThickness);var r=n.dataPointIds[c];this._eventManager.objectMap[r]={objectType:"dataPoint",dataSeriesIndex:m,dataPointIndex:c,x1:e,y1:f,size:q};q=B(r);G.drawMarker(e,f,this._eventManager.ghostCtx,
l.type,l.size,q,q,l.borderThickness)}}this.ctx.restore();this._eventManager.ghostCtx.restore()}};t.prototype.renderScatter=function(a){var d=a.dataSeriesIndexes.length;if(!(0>=d)){var b=this.getPlotArea(),c=0,e,f,g=0.15*this.canvas.width,c=a.axisX.dataInfo.minDiff,d=0.9*(b.width/Math.abs(a.axisX.maximum-a.axisX.minimum)*Math.abs(c)/d)<<0;this.ctx.save();this._eventManager.ghostCtx.save();this.ctx.beginPath();this.ctx.rect(b.x1,b.y1,b.width,b.height);this.ctx.clip();this._eventManager.ghostCtx.rect(b.x1,
b.y1,b.width,b.height);this._eventManager.ghostCtx.clip();for(var k=0;k<a.dataSeriesIndexes.length;k++){var h=a.dataSeriesIndexes[k],j=this.data[h],m=j.dataPoints;1==m.length&&(d=g);1>d?d=1:d>g&&(d=g);if(0<m.length){this.ctx.strokeStyle="#4572A7 ";Math.pow(0.3*Math.min(b.height,b.width)/2,2);for(var n=0,p=0,c=0;c<m.length;c++)if(e=m[c].getTime?e=m[c].x.getTime():e=m[c].x,!(e<a.axisX.dataInfo.viewPortMin||e>a.axisX.dataInfo.viewPortMax)&&"number"===typeof m[c].y){e=a.axisX.convertionParameters.reference+
a.axisX.convertionParameters.pixelPerUnit*(e-a.axisX.convertionParameters.minimum)+0.5<<0;f=a.axisY.convertionParameters.reference+a.axisY.convertionParameters.pixelPerUnit*(m[c].y-a.axisY.convertionParameters.minimum)+0.5<<0;var l=j.getMarkerProperties(c,e,f,this.ctx);G.drawMarker(l.x,l.y,l.ctx,l.type,l.size,l.color,l.color,l.thickness);Math.sqrt((n-e)*(n-e)+(p-f)*(p-f))<Math.min(l.size,5)||(n=j.dataPointIds[c],this._eventManager.objectMap[n]={objectType:"dataPoint",dataSeriesIndex:h,dataPointIndex:c,
x1:e,y1:f},n=B(n),G.drawMarker(l.x,l.y,this._eventManager.ghostCtx,l.type,l.size,n,n,l.borderThickness),n=e,p=f)}}}this.ctx.restore();this._eventManager.ghostCtx.restore()}};var K=function(a,d,b,c,e,f,g){a.save();"pie"===e?(a.beginPath(),a.moveTo(d.x,d.y),a.arc(d.x,d.y,b,f,g,!1),a.fillStyle=c,a.strokeStyle="white",a.lineWidth=2,a.closePath(),a.stroke(),a.fill()):"doughnut"===e&&(a.beginPath(),a.arc(d.x,d.y,b,f,g,!1),a.arc(d.x,d.y,0.6*b,g,f,!0),a.closePath(),a.fillStyle=c,a.strokeStyle="white",a.lineWidth=
2,a.stroke(),a.fill());a.restore()};t.prototype.renderPie=function(a){function d(){w.ctx.save();w._eventManager.ghostCtx.save();w.ctx.translate(t.x,t.y);w._eventManager.ghostCtx.translate(t.x,t.y);w.ctx.fillStyle=w.backgroundColor?w.backgroundColor:"white";w.ctx.fillRect(-v.width/2,-v.height/2,v.width,v.height);var a=!0===w.animationEnabled?60:1;if(null!=A&&A.frame<a){A.isAnimating--;for(var c=0,c=h[0],k=A.maxAngle+2*Math.PI/a,j=0;j<u;j++){var m=f.dataPoints[j].exploded,l=f.dataPoints[j].color?f.dataPoints[j].color:
f.color?f.color:y[j%y.length],q=c,r=c=q+2*Math.PI/n*Math.abs(f.dataPoints[j].y),s=!1;r>k&&(r=k,s=!0);type=f.type;"outside"===f.indexLabelPlacement?(indexLineMinLength=Math.min(v.width,v.height)/14,p=indexLineMinLength<x?x-indexLineMinLength:x-25):"inside"===f.indexLabelPlacement&&(p=(1-g)*0.5*Math.min(v.width,v.height));var z={x:0,y:0};K(w.ctx,z,p,l,type,q,r);q=!0===f.dataPoints[j].exploded?!0:!1;typeof f.dataPoints[j]===Boolean&&(userSetExploed=!0);r=f.dataPointIds[j];w._eventManager.objectMap[r]=
{objectType:"dataPoint",dataSeriesIndex:0,dataPointIndex:j,center:{x:t.x,y:t.y},radius:p,color:l,startAngle:h[j],endAngle:h[j+1],currentlyExploded:q,userSetExploded:m,pastExploded:!1};m=S(r);w._eventManager.ghostCtx.save();l="rgb("+m[0]+","+m[1]+","+m[2]+")";K(w._eventManager.ghostCtx,z,p,l,type,h[j],h[j+1]);w._eventManager.ghostCtx.restore();if(s)break}A.maxAngle=k;A.frame++;A.frame<a?w.requestAnimFrame.call(window,d):(e(0,a),w.ctx.restore(),w._eventManager.ghostCtx.restore(),setTimeout(function(){A.frame=
0;A.isAnimating=20;b()},200))}w.renderCount++;w.ctx.restore();w._eventManager.ghostCtx.restore()}function b(){w.ctx.save();w._eventManager.ghostCtx.save();w.ctx.translate(t.x,t.y);w._eventManager.ghostCtx.translate(t.x,t.y);if(null!==A&&20>A.frame){A.isAnimating--;w.ctx.fillStyle=w.backgroundColor?w.backgroundColor:"white";w.ctx.fillRect(-v.width/2,-v.height/2,v.width,v.height);for(var a=0;a<u;a++){var c=f.dataPoints[a].color?f.dataPoints[a].color:f.color?f.color:y[a%y.length],d={x:0,y:0},k=p*g*Math.cos(j[a]),
m=p*g*Math.sin(j[a]),l=f.type,n=f.dataPointIds[a],q=w._eventManager.objectMap[n].currentlyExploded,r=w._eventManager.objectMap[n].pastExploded;!0===q&&!1===r?(d.x+=k/20*(A.frame+1),d.y+=m/20*(A.frame+1),20===A.frame+1&&(w._eventManager.objectMap[n].pastExploded=!0)):!0===q&&!0===r&&(d.x+=k,d.y+=m);w._eventManager.objectMap[n].center.x=d.x+t.x;w._eventManager.objectMap[n].center.y=d.y+t.y;r!==q&&(k={},k.dataSeries=f,k.dataPoint=f.dataPoints[a],k.index=a,w._toolTip.highlightObjects([k]));K(w.ctx,d,
p,c,l,h[a],h[a+1]);19===A.frame&&(n=f.dataPointIds[a],c=S(n),w._eventManager.ghostCtx.save(),c="rgb("+c[0]+","+c[1]+","+c[2]+")",K(w._eventManager.ghostCtx,d,p,c,l,h[a],h[a+1]),w._eventManager.ghostCtx.restore())}A.frame++;20>A.frame&&w.requestAnimFrame.call(window,b)}e(A.frame,20);w.ctx.restore();w._eventManager.ghostCtx.restore()}function c(){w.ctx.save();w._eventManager.ghostCtx.save();w.ctx.translate(t.x,t.y);w._eventManager.ghostCtx.translate(t.x,t.y);if(null!==A&&0<A.frame){A.isAnimating--;
w.ctx.fillStyle=w.backgroundColor?w.backgroundColor:"white";w.ctx.fillRect(-v.width/2,-v.height/2,v.width,v.height);for(var a=0;a<u;a++){var b=f.dataPointIds[a],d=w._eventManager.objectMap[b].currentlyExploded,k=w._eventManager.objectMap[b].pastExploded,m=f.dataPoints[a].color?f.dataPoints[a].color:f.color?f.color:y[a%y.length],l={x:0,y:0},n=f.type,d=w._eventManager.objectMap[b].currentlyExploded,q=p*g*Math.cos(j[a]),r=p*g*Math.sin(j[a]);!1===d&&!0===k?(l.x+=q/20*A.frame,l.y+=r/20*A.frame,1===A.frame&&
(w._eventManager.objectMap[b].pastExploded=!1)):!0===d&&!0===k&&(l.x+=q,l.y+=r);w._eventManager.objectMap[b].center.x=l.x+t.x;w._eventManager.objectMap[b].center.y=l.y+t.y;k!==d&&(b={},b.dataSeries=f,b.dataPoint=f.dataPoints[a],b.index=a,w._toolTip.highlightObjects([b]));K(w.ctx,l,p,m,n,h[a],h[a+1]);1===A.frame&&(b=f.dataPointIds[a],m=S(b),w._eventManager.ghostCtx.save(),m="rgb("+m[0]+","+m[1]+","+m[2]+")",K(w._eventManager.ghostCtx,l,p,m,n,h[a],h[a+1]),w._eventManager.ghostCtx.restore())}A.frame--;
0<A.frame&&w.requestAnimFrame.call(window,c)}e(A.frame,20);w.ctx.restore();w._eventManager.ghostCtx.restore()}function e(a,b){for(var c=0;c<f.dataPoints.length;c++){var d=f.dataPointIds[c],e=w.ctx,h=l[c],n=s[c],t=q[c],u=r[c],v=w._eventManager.objectMap[d].currentlyExploded,x=m[c],y=p,z=j[c],A=f.dataPoints[c].indexLabelFontColor?f.dataPoints[c].indexLabelFontColor:f.indexLabelFontColor,B=f.indexLabelPlacement,C=f.dataPoints[c].indexLabelLineColor?f.dataPoints[c].indexLabelLineColor:f.indexLabelLineColor,
D=f.dataPoints[c].indexLabelLineThickness?f.dataPoints[c].indexLabelLineThickness:f.indexLabelLineThickness,E=a,F=b,d=w._eventManager.objectMap[d].pastExploded,G=k[c],H=f.dataPoints[c].indexLabelFontStyle?f.dataPoints[c].indexLabelFontStyle:f.indexLabelFontStyle,I=f.dataPoints[c].indexLabelFontWeight?f.dataPoints[c].indexLabelFontWeight:f.indexLabelFontWeight,J=f.dataPoints[c].indexLabelFontSize?f.dataPoints[c].indexLabelFontSize:f.indexLabelFontSize,K=f.dataPoints[c].indexLabelFontFamily?f.dataPoints[c].indexLabelFontFamily:
f.indexLabelFontFamily,L=f.dataPoints[c].indexLabelBackgroundColor?f.dataPoints[c].indexLabelBackgroundColor:f.indexLabelBackgroundColor?f.indexLabelBackgroundColor:null,M=c;e.save();e.lineWidth=D;e.font=H+" "+I+" "+J+"px "+K;D="left";0>h&&"outside"===B?D="right":0<=h&&"outside"===B?D="left":"inside"===B&&(D="center");e.textAlign=D;e.textBaseline="middle";e.beginPath();L&&(e.fillStyle=L,"outside"===B?0<=h?e.fillRect(h-2.5,t-2.5,n-h+5,u-t+5):e.fillRect(h+2.5,t-2.5,n-h-5,u-t+5):"inside"===B&&(0<=h?
e.fillRect(h-G/2-2.5,t-2.5,n-h+5,u-t+5):e.fillRect(h+G/2+2.5,t-2.5,n-h-5,u-t+5)));e.fillStyle=A;e.fillText(x,h,(t+u)/2);"outside"===B&&k[M]&&(n=y*Math.cos(z),x=y*Math.sin(z),!0===v&&!0!==d?(n+=y*g*Math.cos(z)/F*E,x+=y*g*Math.sin(z)/F*E):!0===v&&!0===d?(n+=y*g*Math.cos(z),x+=y*g*Math.sin(z)):!0!==v&&!0===d&&(n+=y*g*Math.cos(z)/F*E,x+=y*g*Math.sin(z)/F*E),e.moveTo(n,x),0<h?(e.lineTo(h-10,(t+u)/2),e.lineTo(h-2,(t+u)/2)):0>h&&(e.lineTo(h+10,(t+u)/2),e.lineTo(h+2,(t+u)/2)),e.strokeStyle=C,e.stroke());
e.restore()}}if(!(0>=a.dataSeriesIndexes.length)){var f=this.data[a.dataSeriesIndexes[0]],g=0.07;ctx=this.ctx;var k=[],h=[],j=[],m=[],n=0,p=0,l=[],s=[],q=[],r=[],u=f.dataPoints.length,v=this.getPlotArea();v.width=v.x2-v.x1;v.height=v.y2-v.y1;var t={x:(v.x2+v.x1)/2,y:(v.y2+v.y1)/2};a=f.startAngle?f.startAngle:0;a=(a%360+360)%360*Math.PI/180;h.push(a);var y=this.colorSet,x=0.5*Math.min(v.width,v.height);for(a=0;a<u;a++){var z=f.dataPoints[a].indexLabel?f.dataPoints[a].indexLabel:f.indexLabel?f.indexLabel:
f.dataPoints[a].label?f.dataPoints[a].label:f.label?f.label:"",z=this.replaceKeywordsWithValue(z,f.dataPoints[a],f,a);m.push(z);z=ctx.measureText(m[a]).width;k.push(z);n+=Math.abs(f.dataPoints[a].y)}for(a=z=0;a<u;a++){var B;B=Math.abs(f.dataPoints[a].y);B=2*Math.PI*(B/n);h.push(h[a]+B);B=B/2+h[a];j.push(B%(2*Math.PI));z+=k[a]}0===z&&(f.indexLabelPlacement="inside");z=0;if("inside"===f.indexLabelPlacement){x*=0.8*(1-g);for(a=0;a<u;a++){var D=x*Math.cos(j[a]),C=x*Math.sin(j[a]);l.push(D);0<D?s.push(l[a]+
k[a]):s.push(l[a]-k[a]);q.push(C-f.indexLabelFontSize/2);r.push(C+f.indexLabelFontSize/2)}}else if("outside"===f.indexLabelPlacement)for(B=0;3>B;B++){for(a=0;a<u;a++)D=x*Math.cos(j[a]),C=x*Math.sin(j[a]),l.push(D),0<D?s.push(l[a]+k[a]):s.push(l[a]-k[a]),q.push(C-f.indexLabelFontSize/2),r.push(C+f.indexLabelFontSize/2);for(a=0;a<u;a++)j[a]<Math.PI/2&&(1<=a&&q[a]<r[a-1])&&(D=r[a-1]-q[a],q[a]+=D+2,r[a]+=D+2,20>u&&(q[a]+=3,r[a]+=3)),j[a]<3*Math.PI/2&&j[a]>=Math.PI&&r[a]>q[a-1]&&(D=r[a]-q[a-1],q[a]-=D+
2,r[a]-=D+2,20>u&&(q[a]-=3,r[a]-=3));for(a=u;0<=a;a--)j[a]<Math.PI&&j[a]>=Math.PI/2&&q[a]<r[a+1]&&(D=r[a+1]-q[a],q[a]+=D+2,r[a]+=D+2,20>u&&(q[a]+=3,r[a]+=3)),j[a]>=3*Math.PI/2&&r[a]>q[a+1]&&(D=r[a]-q[a+1],q[a]-=D,r[a]-=D,20>u&&(q[a]+=-3,r[a]+=-3));if(2>z){a=Math.min.apply(Math,q.concat(r));var D=Math.max.apply(Math,q.concat(r)),C=Math.max.apply(Math,s.concat(l)),F=Math.min.apply(Math,s.concat(l)),E=[];Math.abs(a)>v.height/2&&E.push(Math.abs(a)-v.height/2);Math.abs(D)>v.height/2&&E.push(Math.abs(D)-
v.height/2);Math.abs(C)>v.width/2&&E.push(Math.abs(C)-v.width/2);Math.abs(F)>v.width/2&&E.push(Math.abs(F)-v.width/2);l=[];s=[];q=[];r=[];E.length&&(x-=Math.max.apply(Math,E)+f.indexLabelFontSize/2+2,40>x&&(x=40));z++}}var w=this,A={frame:0,maxAngle:h[0],count:0};0!==w.renderCount&&(this.animationEnabled=!1);A.isAnimating=60;d();this.pieDoughnutClickHandler=function(a){if(0===A.isAnimating){a=a.dataPointIndex;var d=f.dataPointIds[a];!0===w._eventManager.objectMap[d].currentlyExploded?(!0===w._eventManager.objectMap[d].userSetExploded&&
(f.dataPoints[a].exploded=!1),w._eventManager.objectMap[d].currentlyExploded=!1,A.frame=20,A.isAnimating=20,c()):!1===w._eventManager.objectMap[d].currentlyExploded&&(!0===w._eventManager.objectMap[d].userSetExploded&&(f.dataPoints[a].exploded=!0),w._eventManager.objectMap[d].currentlyExploded=!0,A.isAnimating=20,A.frame=0,b())}}}};t.prototype.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||
function(a){window.setTimeout(a,1E3/60)};N.prototype.registerSpace=function(a,d){"top"===a?this._topOccupied+=d.height:"bottom"===a?this._bottomOccupied+=d.height:"left"===a?this._leftOccupied+=d.width:"right"===a&&(this._rightOccupied+=d.width)};N.prototype.unRegisterSpace=function(a,d){"top"===a?this._topOccupied-=d.height:"bottom"===a?this._bottomOccupied-=d.height:"left"===a?this._leftOccupied-=d.width:"right"===a&&(this._rightOccupied-=d.width)};N.prototype.getFreeSpace=function(){return{x1:this._leftOccupied,
y1:this._topOccupied,x2:this.canvas.width-this._rightOccupied,y2:this.canvas.height-this._bottomOccupied,width:this.canvas.width-this._rightOccupied-this._leftOccupied,height:this.canvas.height-this._bottomOccupied-this._topOccupied}};N.prototype.reset=function(){this._rightOccupied=this._leftOccupied=this._bottomOccupied=this._topOccupied=0};J(C,E);C.prototype.render=function(a){a&&this.ctx.save();var d=this.ctx.font;this.ctx.textBaseline=this.textBaseline;this._isDirty&&this.measureText(this.ctx);
this.ctx.translate(this.x,this.y);this.ctx.font=this._getFontString();this.ctx.rotate(Math.PI/180*this.angle);var b=0,c=this.padding,e=null;if(0<this.borderThickness&&this.borderColor||this.backgroundColor)this.ctx.roundRect(0,0,this.width,this.height,this.cornerRadius,this.borderThickness,this.backgroundColor,this.borderColor),"middle"===this.textBaseline&&(c+=this.fontSize/2);this.ctx.fillStyle=this.fontColor;for(var f=0;f<this._wrappedText.lines.length;f++)e=this._wrappedText.lines[f],"right"===
this.horizontalAlign?b=this.width-e.width-this.padding:"left"===this.horizontalAlign?b=this.padding:"center"===this.horizontalAlign&&(b=(this.width-2*this.padding)/2-e.width/2+this.padding),this.ctx.fillText(e.text,b,c),c+=e.height;this.ctx.font=d;a&&this.ctx.restore()};C.prototype.setText=function(a){this.text=a;this._isDirty=!0;this._wrappedText=null};C.prototype.measureText=function(){if(null===this.maxWidth)throw"Please set maxWidth and height for TextBlock";this._wrapText(this.ctx);this._isDirty=
!1;return{width:this.width,height:this.height}};C.prototype._wrapText=function(){text=new String(M(this.text));var a=[],d=this.ctx.font,b=0,c=0;for(this.ctx.font=this._getFontString();0<text.length;){for(var e=text,f=0,g=0,k=this.maxWidth-2*this.padding,h=this.maxHeight-2*this.padding;;)if(f=this.ctx.measureText(e).width,g=0,f>k)g=e.length/f*k,f=Math.max(Math.min(Math.ceil(g),e.length-1),0),g=e.lastIndexOf(" ",f,e.length-1),e=0<=g?M(text.slice(0,g)):M(text.slice(0,f-1));else{a.push({text:e,width:f,
height:this.fontSize});c=Math.max(c,f);b+=this.fontSize;text=M(text.slice(e.length,text.length));break}if(h&&b>h-this.fontSize&&0<text.length){e=a.pop();Math.min(e.text.length,3);a.push(e);break}}this._wrappedText={lines:a,width:c,height:b};this.width=c+2*this.padding;this.height=b+2*this.padding;this.ctx.font=d};C.prototype._getFontString=function(){return this.fontStyle+" "+this.fontWeight+" "+this.fontSize+"px "+this.fontFamily};J(Q,E);Q.prototype.render=function(){if(this.text){var a=this.chart.layoutManager.getFreeSpace(),
d=0,b=0,c=0,e=0,f=0,g,k;"top"===this.verticalAlign||"bottom"===this.verticalAlign?(e=a.width-2*this.margin,f=0.5*a.height-2*this.margin,c=0):"center"===this.verticalAlign&&("left"===this.horizontalAlign||"right"===this.horizontalAlign?(e=a.height-2*this.margin,f=0.5*a.width-2*this.margin):"center"===this.horizontalAlign&&(e=a.width-2*this.margin,f=0.5*a.height-2*this.margin));var f=new C(this.ctx,{fontSize:this.fontSize,fontFamily:this.fontFamily,fontColor:this.fontColor,fontStyle:this.fontStyle,
fontWeight:this.fontWeight,horizontalAlign:this.horizontalAlign,verticalAlign:this.verticalAlign,borderColor:this.borderColor,borderThickness:this.borderThickness,backgroundColor:this.backgroundColor,maxWidth:e,maxHeight:f,cornerRadius:this.cornerRadius,text:this.text,padding:this.padding,textBaseline:this.borderColor&&0<this.borderThickness?"middle":"top"}),h=f.measureText();"top"===this.verticalAlign||"bottom"===this.verticalAlign?("top"===this.verticalAlign?(b=this.margin,k="top"):"bottom"===this.verticalAlign&&
(b=a.y2-this.margin-h.height,k="bottom"),"left"===this.horizontalAlign?d=a.x1+this.margin:"center"===this.horizontalAlign?d=a.x1+(e/2-h.width/2)+this.margin:"right"===this.horizontalAlign&&(d=a.x2-this.margin-h.width),g=this.horizontalAlign,this.width=h.width,this.height=h.height):"center"===this.verticalAlign&&("left"===this.horizontalAlign?(d=a.x1+this.margin,b=a.y2-this.margin-(e/2-h.width/2),c=-90,k="left",this.width=h.height,this.height=h.width):"right"===this.horizontalAlign?(d=a.x2-this.margin,
b=a.y1+this.margin+(e/2-h.width/2),c=90,k="right",this.width=h.height,this.height=h.width):"center"===this.horizontalAlign&&(b=a.y1+(a.height/2-h.height/2),d=a.x1+(a.width/2-h.width/2),k="center",this.width=h.width,this.height=h.height),g="center");f.x=d;f.y=b;f.angle=c;f.horizontalAlign=g;f.render(!0);this.chart.layoutManager.registerSpace(k,{width:this.width+2*this.margin,height:this.height+2*this.margin});this.bounds={x1:d,y1:b,x2:d+this.width,y2:b+this.height};this.ctx.textBaseline="top"}};J(R,
E);R.prototype.render=function(){var a=this.chart.layoutManager.getFreeSpace(),d=null,b=0,c=0,e=0,f=0,g=[],k=[];"top"===this.verticalAlign||"bottom"===this.verticalAlign?(this.orientation="horizontal",d=this.verticalAlign,e=0.9*a.width,f=0.5*a.height):"center"===this.verticalAlign&&(this.orientation="vertical",d=this.horizontalAlign,e=0.5*a.width,f=0.9*a.height);for(var h=0;h<this.dataSeries.length;h++){var j=this.dataSeries[h],m=j.legendMarkerType?j.legendMarkerType:("line"===j.type||"scatter"===
j.type||"bubble"===j.type)&&j.markerType?j.markerType:I.getDefaultLegendMarker(j.type),n=j.legendText?j.legendText:j.name,p=j.legendMarkerColor?j.legendMarkerColor:j.markerColor?j.markerColor:j._colorSet[0],l=!j.markerSize&&"line"===j.type?0:0.7*this.fontSize;if("pie"!==j.type&&"doughnut"!==j.type)m={markerType:m,markerColor:p,text:n,textBlock:null,chartType:j.type,markerSize:l,lineColor:j._colorSet[0]},g.push(m);else for(var s=0;s<j.dataPoints.length;s++)l=j.dataPoints[s],m=l.legendMarkerType?l.legendMarkerType:
j.legendMarkerType?j.legendMarkerType:I.getDefaultLegendMarker(j.type),n=l.legendText?l.legendText:j.legendText?j.legendText:l.name?l.name:"DataPoint: "+(s+1),p=l.markerColor?l.markerColor:j.markerColor?j.markerColor:l.color?l.color:j.color?j.color:j._colorSet[s],l=(0===l.markerSize||0===j.markerSize&&!l.markerSize)&&"line"===j.type?0:0.7*this.fontSize,m={markerType:m,markerColor:p,text:n,textBlock:null,chartType:j.type,markerSize:l},g.push(m)}if(0<g.length){j=null;for(h=s=0;h<g.length;h++){m=g[h];
if("horizontal"===this.orientation){if(m.textBlock=new C(this.ctx,{x:0,y:0,maxWidth:e,maxHeight:this.fontSize,angle:0,text:m.text,horizontalAlign:"left",fontSize:this.fontSize,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontColor:this.fontColor,fontStyle:this.fontStyle,textBaseline:"top"}),m.textBlock.measureText(),!j||j.width+m.textBlock.width+(0===j.width?0:this.horizontalSpacing)>e)j={entries:[],width:0},k.push(j),this.height=k.length*(this.fontSize+5)}else this.height+this.fontSize<
f?(j={entries:[],width:0},k.push(j),this.height=k.length*this.fontSize):(j=k[s],s=(s+1)%k.length),m.textBlock=new C(this.ctx,{x:0,y:0,maxWidth:e,maxHeight:this.fontSize,angle:0,text:m.text,horizontalAlign:"left",fontSize:this.fontSize,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontColor:this.fontColor,fontStyle:this.fontStyle,textBaseline:"top"}),m.textBlock.measureText();m.textBlock.x=j.width+(0===j.width?0:this.horizontalSpacing);m.textBlock.y=0;j.width+=m.textBlock.width+(this.fontSize+
5)+(0===j.width?0:this.horizontalSpacing);j.entries.push(m);this.width=Math.max(j.width,this.width)}this.height=k.length*this.fontSize}"top"===this.verticalAlign?(c="left"===this.horizontalAlign?a.x1:"right"===this.horizontalAlign?a.x2-this.width:a.x1+a.width/2-this.width/2,b=a.y1):"center"===this.verticalAlign?(c="left"===this.horizontalAlign?a.x1:"right"===this.horizontalAlign?a.x2-this.width:a.x1+a.width/2-this.width/2,b=a.y1+a.height/2-this.height/2):"bottom"===this.verticalAlign&&(c="left"===
this.horizontalAlign?a.x1:"right"===this.horizontalAlign?a.x2-this.width:a.x1+a.width/2-this.width/2,b=a.y2-this.height-5);for(h=0;h<k.length;h++){var j=k[h],q;for(q in j.entries)m=j.entries[q],a=m.textBlock.x+c,e=b+h*this.fontSize,"line"===m.chartType&&(this.ctx.strokeStyle=m.lineColor,this.ctx.lineWidth=Math.ceil(this.fontSize/8),this.ctx.beginPath(),this.ctx.moveTo(a-2,e+this.fontSize/2),this.ctx.lineTo(a+2+this.fontSize,e+this.fontSize/2),this.ctx.stroke()),G.drawMarker(a+this.fontSize/2,e+this.fontSize/
2,this.ctx,m.markerType,l,m.markerColor,null,0),m.textBlock.x=a+this.fontSize+5,m.textBlock.y=e,m.textBlock.render(!0)}this.chart.layoutManager.registerSpace(d,{width:this.width,height:this.height+5+5});this.bounds={x1:c,y1:b,x2:c+this.width,y2:b+this.height}};J(U,E);U.prototype.render=function(){var a=this.chart.layoutManager.getFreeSpace();this.ctx.fillStyle="red";this.ctx.fillRect(a.x1,a.y1,a.x2,a.y2)};J(I,E);I.prototype.getDefaultAxisPlacement=function(){type=this.type.toLowerCase();if("column"===
type||"line"===type||"area"===type||"stackedcolumn"===type||"stackedline"===type||"bubble"===type||"scatter"===type||"stackedarea"===type||"stackedcolumn100"===type||"stackedline100"===type||"stackedarea100"===type)return"normal";if("bar"===type||"stackedbar"===type||"stackedbar100"===type)return"xySwapped";if("pie"===type||"doughnut"===type)return"none";window.console.log("Unknown Chart Type: "+type);return null};I.getDefaultLegendMarker=function(a){a=a.toLowerCase();if("column"===a||"stackedcolumn"===
a||"stackedline"===a||"bar"===a||"stackedbar"===a||"stackedbar100"===a||"bubble"===a||"scatter"===a||"stackedcolumn100"===a||"stackedline100"===a)return"square";if("line"===a||"pie"===a||"doughnut"===a)return"circle";if("area"===a||"stackedarea"===a||"stackedarea100"===a)return"triangle";window.console.log("Unknown Chart Type: "+a);return null};I.prototype.findDataPointByX=function(a,d){for(var b=0,c=this.dataPoints.length,e,f={dataPoint:null,distance:Infinity,index:NaN},g=0,k=null;b<c;){g++;e=(b+
c)/2<<0;var k=this.dataPoints[e],h=Math.abs(k.x-a);h<f.distance&&(f.dataPoint=k,f.distance=h,f.index=e);if(k.x<a)b=e+1;else if(k.x>a)c=e;else{f.dataPoint=k;f.distance=h;f.index=e;break}}return!d&&f.dataPoint.x===a?f:d&&null!==f.dataPoint?f:null};I.prototype.getMarkerProperties=function(a,d,b,c){var e=this.dataPoints,f=e[a].markerColor?e[a].markerColor:this.markerColor?this.markerColor:e[a].color?e[a].color:this.color?this.color:this._colorSet[a%this._colorSet.length];return{x:d,y:b,ctx:c,type:e[a].markerType?
e[a].markerType:this.markerType,size:e[a].markerSize?e[a].markerSize:this.markerSize,color:f,borderColor:e[a].markerBorderColor?e[a].markerBorderColor:this.markerBorderColor?this.markerBorderColor:f,borderThickness:e[a].markerBorderThickness?e[a].markerBorderThickness:this.markerBorderThickness?this.markerBorderThickness:1}};J(x,E);x.prototype.createLabels=function(){var a,d=0,b,c;if("axisX"===this.type&&"dateTime"===this.chart.plotInfo.axisXValueType){b=X(new Date(this.maximum),this.interval,this.intervalType);
c=V;for(d=this.intervalStartPosition;d<b;X(d,this.interval,this.intervalType))a="axisX"===this.type&&this.labels[d]?this.labels[d]:c(d,this.valueFormatString),a=new C(this.ctx,{x:0,y:0,maxWidth:this.maxHeight,maxHeight:this.labelFontSize,angle:this.labelAngle,text:this.prefix+a+this.suffix,horizontalAlign:"left",fontSize:this.labelFontSize,fontFamily:this.labelFontFamily,fontWeight:this.labelFontWeight,fontColor:this.labelFontColor,fontStyle:this.labelFontStyle,textBaseline:"middle"}),this._labels.push({position:d.getTime(),
textBlock:a,effectiveHeight:null})}else{b=this.maximum;c=W;if(Math.floor(this.interval)<this.interval&&!this._options.interval){a=Math.ceil(this.interval);for(var e=Math.ceil(this.intervalStartPosition),f=!1,d=e;d<=this.maximum;d+=a)if(this.labels[d])f=!0;else{f=!1;break}f&&(this.interval=a,this.intervalStartPosition=e)}for(d=this.intervalStartPosition;d<=b;d+=this.interval)a="axisX"===this.type&&this.labels[d]?this.labels[d]:c(d,this.valueFormatString),a=new C(this.ctx,{x:0,y:0,maxWidth:this.maxHeight,
maxHeight:this.labelFontSize,angle:this.labelAngle,text:this.prefix+a+this.suffix,horizontalAlign:"left",fontSize:this.labelFontSize,fontFamily:this.labelFontFamily,fontWeight:this.labelFontWeight,fontColor:this.labelFontColor,fontStyle:this.labelFontStyle,textBaseline:"middle",borderThickness:0}),this._labels.push({position:d,textBlock:a,effectiveHeight:null})}};x.prototype.createLabelsAndCalculateWidth=function(){var a=0;this._labels=[];if("left"===this._position||"right"===this._position){this.createLabels();
for(i=0;i<this._labels.length;i++){textBlock=this._labels[i].textBlock;var d=textBlock.measureText();labelEffectiveWidth=0===this.labelAngle?d.width:d.width*Math.cos(Math.PI/180*Math.abs(this.labelAngle))+d.height/2*Math.sin(Math.PI/180*Math.abs(this.labelAngle));a<labelEffectiveWidth&&(a=labelEffectiveWidth);this._labels[i].effectiveWidth=labelEffectiveWidth}}return(this.title?this.titleFontSize+5:0)+a+this.tickLength+10};x.prototype.createLabelsAndCalculateHeight=function(){var a=0;this._labels=
[];var d,b=0;this.createLabels();if("bottom"===this._position||"top"===this._position)for(b=0;b<this._labels.length;b++){d=this._labels[b].textBlock;d=d.measureText();var c=0,c=0===this.labelAngle?d.height:d.width*Math.sin(Math.PI/180*Math.abs(this.labelAngle))+d.height/2*Math.cos(Math.PI/180*Math.abs(this.labelAngle));a<c&&(a=c);this._labels[b].effectiveHeight=c}return(this.title?this.titleFontSize+5:0)+a+this.tickLength};x.setLayoutAndRender=function(a,d,b,c,e){var f,g,k,h=a.chart.ctx;a.calculateAxisParameters();
d&&d.calculateAxisParameters();b&&b.calculateAxisParameters();if(d&&b&&"undefined"===typeof d._options.maximum&&"undefined"===typeof d._options.minimum&&"undefined"===typeof d._options.interval&&"undefined"===typeof b._options.maximum&&"undefined"===typeof b._options.minimum&&"undefined"===typeof b._options.interval){var j=(d.maximum-d.minimum)/d.interval,m=(b.maximum-b.minimum)/b.interval;j>m?b.maximum=b.interval*j+b.minimum:m>j&&(d.maximum=d.interval*m+d.minimum)}var j=d?d.lineThickness?d.lineThickness:
0:0,m=b?b.lineThickness?b.lineThickness:0:0,n=d?d.gridThickness?d.gridThickness:0:0,p=b?b.gridThickness?b.gridThickness:0:0,l=d?d.margin:0;if("normal"===c){var s=d?d.createLabelsAndCalculateWidth():0,q=b?b.createLabelsAndCalculateWidth():0,r=a.createLabelsAndCalculateHeight();c=e.x1+s+l+j/2;f=e.y2-r-a.margin;g=e.x2-q>a.chart.canvas.width-10?a.chart.canvas.width-10:e.x2-q;k=e.y2-a.margin;a.lineCoordinates={x1:c,y1:f,x2:g,y2:f,width:Math.abs(g-c)};a.boundingRect={x1:c,y1:f,x2:g,y2:k,width:g-c,height:k-
f};d&&(c=e.x1+d.margin,f=10>e.y1?10:e.y1,g=e.x1+s+d.margin,k=e.y2-r-a.margin-a.lineThickness/2,d.lineCoordinates={x1:g,y1:f,x2:g,y2:k,height:Math.abs(k-f)},d.boundingRect={x1:c,y1:f,x2:g,y2:k,width:g-c,height:k-f});b&&(c=a.lineCoordinates.x2,f=10>e.y1?10:e.y1,g=c+q+b.margin,k=e.y2-r-a.margin-a.lineThickness/2,b.lineCoordinates={x1:c,y1:f,x2:c,y2:k,height:Math.abs(k-f)},b.boundingRect={x1:c,y1:f,x2:g,y2:k,width:g-c,height:k-f});h.save();h.rect(a.boundingRect.x1-40,a.boundingRect.y1,a.boundingRect.width+
80,a.boundingRect.height);h.clip();a.renderLabelsTicksAndTitle();h.restore();d&&d.renderLabelsTicksAndTitle();b&&b.renderLabelsTicksAndTitle();e=a.chart.getPlotArea();h.save();h.rect(e.x1-Math.max(j+a.gridThickness)/2,e.y1-Math.max(p,n)/2,Math.abs(e.x2-e.x1+Math.max(j+a.gridThickness)/2+Math.max(m,a.gridThickness)/2),Math.abs(e.y2-e.y1+Math.max(p,n,a.lineThickness)));h.clip();a.calculateValueToPixelConvertionParameters();d&&d.calculateValueToPixelConvertionParameters();b&&b.calculateValueToPixelConvertionParameters();
a.renderInterlacedColors();d&&d.renderInterlacedColors();b&&b.renderInterlacedColors();h.restore();a.renderGrid();d&&d.renderGrid();b&&b.renderGrid()}else s=d?d.createLabelsAndCalculateHeight():0,q=b?b.createLabelsAndCalculateHeight():0,r=a.createLabelsAndCalculateWidth(),d&&(c=e.x1+r+a.margin+a.lineThickness/2,f=e.y2-s-d.margin,g=e.x2>d.chart.canvas.width-10?d.chart.canvas.width-10:e.x2,k=e.y2-d.margin,d.lineCoordinates={x1:c,y1:f,x2:g,y2:f,width:Math.abs(g-c)},d.boundingRect={x1:c,y1:f,x2:g,y2:k,
width:g-c,height:s}),b&&(c=e.x1+r+a.margin+a.lineThickness/2,f=e.y1+b.margin,g=e.x2>b.chart.canvas.width-10?b.chart.canvas.width-10:e.x2,k=e.y1+b.margin+q,b.lineCoordinates={x1:c,y1:k,x2:g,y2:k,width:Math.abs(g-c)},b.boundingRect={x1:c,y1:f,x2:g,y2:k,width:g-c,height:q}),c=e.x1+a.margin,f=10>e.y1+q+m/2?10:e.y1+q+m/2,g=e.x1+r+a.margin,k=e.y2-s-l-j/2,a.lineCoordinates={x1:g,y1:f,x2:g,y2:k,height:Math.abs(k-f)},a.boundingRect={x1:c,y1:f,x2:g,y2:k,width:g-c,height:k-f},h.save(),d&&d.renderLabelsTicksAndTitle(),
b&&b.renderLabelsTicksAndTitle(),a.renderLabelsTicksAndTitle(),e=a.chart.getPlotArea(),h.save(),h.rect(e.x1-Math.max(a.lineThickness,n,p),e.y1,Math.abs(e.x2-e.x1+Math.max(a.lineThickness,n,p)+Math.max(n,p)),Math.abs(e.y2-e.y1+(j?j/2:0))),h.clip(),a.calculateValueToPixelConvertionParameters(),d&&d.calculateValueToPixelConvertionParameters(),b&&b.calculateValueToPixelConvertionParameters(),a.renderInterlacedColors(),d&&d.renderInterlacedColors(),b&&b.renderInterlacedColors(),a.renderGrid(),d&&d.renderGrid(),
b&&b.renderGrid(),h.restore();a.renderAxisLine();d&&d.renderAxisLine();b&&b.renderAxisLine()};x.prototype.renderLabelsTicksAndTitle=function(){var a=!1,d=0,b=0.9,c=0;0!==this.labelAngle&&360!==this.labelAngle&&(b=1.2);if("bottom"===this._position||"top"===this._position){for(e=0;e<this._labels.length;e++)f=this._labels[e],f.position<this.minimum||(f=f.textBlock.width*Math.cos(Math.PI/180*this.labelAngle)+f.textBlock.height*Math.sin(Math.PI/180*this.labelAngle),d+=f);d>this.lineCoordinates.width*b&&
(a=!0)}if("left"===this._position||"right"===this._position){for(e=0;e<this._labels.length;e++)f=this._labels[e],f.position<this.minimum||(f=f.textBlock.height*Math.cos(Math.PI/180*this.labelAngle)+f.textBlock.width*Math.sin(Math.PI/180*this.labelAngle),d+=f);d>this.lineCoordinates.height*b&&(a=!0)}if("bottom"===this._position){var e=0;this.ctx.lineWidth=this.tickThickness;this.ctx.strokeStyle=this.tickColor;for(var f,e=0;e<this._labels.length;e++)f=this._labels[e],f.position<this.minimum||f.position>
this.maximum||(d=this.getPixelCoordinatesOnAxis(f.position),this.tickThickness&&(this.ctx.beginPath(),this.ctx.moveTo(d.x<<0,d.y<<0),this.ctx.lineTo(d.x<<0,d.y+this.tickLength<<0),this.ctx.stroke()),a&&0!==c++%2||(0===f.textBlock.angle?(d.x-=f.textBlock.width/2,d.y+=this.tickLength+f.textBlock.height/2):(d.x-=0>this.labelAngle?f.textBlock.width*Math.cos(Math.PI/180*this.labelAngle):0,d.y+=this.tickLength+Math.abs(0>this.labelAngle?f.textBlock.width*Math.sin(Math.PI/180*this.labelAngle):0)),f.textBlock.x=
d.x,f.textBlock.y=d.y,f.textBlock.render(!0)));this.title&&(this._titleTextBlock=new C(this.ctx,{x:this.lineCoordinates.x1,y:this.boundingRect.y2-this.titleFontSize-5,maxWidth:this.lineCoordinates.width,maxHeight:this.titleFontSize,angle:0,text:this.title,horizontalAlign:"center",fontSize:this.titleFontSize,fontFamily:this.titleFontFamily,fontWeight:this.titleFontWeight,fontColor:this.titleFontColor,fontStyle:this.titleFontStyle,textBaseline:"top"}),this._titleTextBlock.measureText(),this._titleTextBlock.x=
this.lineCoordinates.x1+this.lineCoordinates.width/2-this._titleTextBlock.width/2,this._titleTextBlock.render(!0))}else if("top"===this._position){this.ctx.lineWidth=this.tickThickness;this.ctx.strokeStyle=this.tickColor;for(e=0;e<this._labels.length;e++)f=this._labels[e],f.position<this.minimum||f.position>this.maximum||(d=this.getPixelCoordinatesOnAxis(f.position),this.tickThickness&&(this.ctx.beginPath(),this.ctx.moveTo(d.x<<0,d.y<<0),this.ctx.lineTo(d.x<<0,d.y-this.tickLength<<0),this.ctx.stroke()),
a&&0!==c++%2||(0===f.textBlock.angle?(d.x-=f.textBlock.width/2,d.y-=this.tickLength+f.textBlock.height/2):(d.x-=0<this.labelAngle?f.textBlock.width*Math.cos(Math.PI/180*this.labelAngle):0,d.y-=this.tickLength+Math.abs(0<this.labelAngle?f.textBlock.width*Math.sin(Math.PI/180*this.labelAngle)+5:5)),f.textBlock.x=d.x,f.textBlock.y=d.y,f.textBlock.render(!0)));this.title&&(this._titleTextBlock=new C(this.ctx,{x:this.lineCoordinates.x1,y:this.boundingRect.y1,maxWidth:this.lineCoordinates.width,maxHeight:this.titleFontSize,
angle:0,text:this.title,horizontalAlign:"center",fontSize:this.titleFontSize,fontFamily:this.titleFontFamily,fontWeight:this.titleFontWeight,fontColor:this.titleFontColor,fontStyle:this.titleFontStyle,textBaseline:"top"}),this._titleTextBlock.measureText(),this._titleTextBlock.x=this.lineCoordinates.x1+this.lineCoordinates.width/2-this._titleTextBlock.width/2,this._titleTextBlock.render(!0))}else if("left"===this._position){this.ctx.lineWidth=this.tickThickness;this.ctx.strokeStyle=this.tickColor;
for(e=0;e<this._labels.length;e++)f=this._labels[e],f.position<this.minimum||f.position>this.maximum||(d=this.getPixelCoordinatesOnAxis(f.position),this.tickThickness&&(this.ctx.beginPath(),this.ctx.moveTo(d.x<<0,d.y<<0),this.ctx.lineTo(d.x-this.tickLength<<0,d.y<<0),this.ctx.stroke()),a&&0!==c++%2||(f.textBlock.x=d.x-f.textBlock.width*Math.cos(Math.PI/180*this.labelAngle)-this.tickLength-5,f.textBlock.y=d.y-f.textBlock.width*Math.sin(Math.PI/180*this.labelAngle),f.textBlock.render(!0)));this.title&&
(this._titleTextBlock=new C(this.ctx,{x:this.boundingRect.x1+5,y:this.lineCoordinates.y2,maxWidth:this.lineCoordinates.height,maxHeight:this.titleFontSize,angle:-90,text:this.title,horizontalAlign:"center",fontSize:this.titleFontSize,fontFamily:this.titleFontFamily,fontWeight:this.titleFontWeight,fontColor:this.titleFontColor,fontStyle:this.titleFontStyle,textBaseline:"top"}),this._titleTextBlock.measureText(),this._titleTextBlock.y=this.lineCoordinates.height/2+this._titleTextBlock.width/2+this.lineCoordinates.y1,
this._titleTextBlock.render(!0))}else if("right"===this._position){this.ctx.lineWidth=this.tickThickness;this.ctx.strokeStyle=this.tickColor;for(e=0;e<this._labels.length;e++)f=this._labels[e],f.position<this.minimum||f.position>this.maximum||(d=this.getPixelCoordinatesOnAxis(f.position),this.tickThickness&&(this.ctx.beginPath(),this.ctx.moveTo(d.x<<0,d.y<<0),this.ctx.lineTo(d.x+this.tickLength<<0,d.y<<0),this.ctx.stroke()),a&&0!==c++%2||(f.textBlock.x=d.x+this.tickLength+5,f.textBlock.y=d.y,f.textBlock.render(!0)));
this.title&&(this._titleTextBlock=new C(this.ctx,{x:this.boundingRect.x2-5,y:this.lineCoordinates.y2,maxWidth:this.lineCoordinates.height,maxHeight:this.titleFontSize,angle:90,text:this.title,horizontalAlign:"center",fontSize:this.titleFontSize,fontFamily:this.titleFontFamily,fontWeight:this.titleFontWeight,fontColor:this.titleFontColor,fontStyle:this.titleFontStyle,textBaseline:"top"}),this._titleTextBlock.measureText(),this._titleTextBlock.y=this.lineCoordinates.height/2-this._titleTextBlock.width/
2+this.lineCoordinates.y1,this._titleTextBlock.render(!0))}};x.prototype.renderInterlacedColors=function(){var a,d,b=this.chart.getPlotArea();if(("bottom"===this._position||"top"===this._position)&&this.interlacedColor){var c=0;this.ctx.fillStyle=this.interlacedColor;for(c=0;c<this._labels.length;c+=2)a=this.getPixelCoordinatesOnAxis(this._labels[c].position),d=c+1>=this._labels.length?this.getPixelCoordinatesOnAxis(this.maximum):this.getPixelCoordinatesOnAxis(this._labels[c+1].position),this.ctx.fillRect(a.x,
b.y1,Math.abs(d.x-a.x),Math.abs(b.y1-b.y2))}else if(("left"===this._position||"right"===this._position)&&this.interlacedColor){this.ctx.fillStyle=this.interlacedColor;for(c=0;c<this._labels.length;c+=2)d=this.getPixelCoordinatesOnAxis(this._labels[c].position),a=c+1>=this._labels.length?this.getPixelCoordinatesOnAxis(this.maximum):this.getPixelCoordinatesOnAxis(this._labels[c+1].position),this.ctx.fillRect(b.x1,a.y,Math.abs(b.x1-b.x2),Math.abs(a.y-d.y))}};x.prototype.renderGrid=function(){var a,d=
this.chart.getPlotArea();if("bottom"===this._position||"top"===this._position){if(this.gridThickness&&0<this.gridThickness){this.ctx.lineWidth=this.gridThickness;this.ctx.strokeStyle=this.gridColor;this.ctx.beginPath();for(b=0;b<this._labels.length;b++)this._labels[b].position<this.minimum||this._labels[b].position>this.maximum||(a=this.getPixelCoordinatesOnAxis(this._labels[b].position),this.ctx.moveTo(a.x<<0,d.y1<<0),this.ctx.lineTo(a.x<<0,d.y2<<0),this.ctx.stroke())}}else if(("left"===this._position||
"right"===this._position)&&this.gridThickness&&0<this.gridThickness){this.ctx.lineWidth=this.gridThickness;this.ctx.strokeStyle=this.gridColor;this.ctx.beginPath();for(var b=0;b<this._labels.length;b++)this._labels[b].position<this.minimum||this._labels[b].position>this.maximum||(a=this.getPixelCoordinatesOnAxis(this._labels[b].position),this.ctx.moveTo(d.x1<<0,a.y<<0),this.ctx.lineTo(d.x2<<0,a.y<<0),this.ctx.stroke())}};x.prototype.renderAxisLine=function(){if("bottom"===this._position||"top"===
this._position)this.lineThickness&&(this.ctx.lineWidth=this.lineThickness,this.ctx.strokeStyle=this.lineColor?this.lineColor:"black",this.ctx.beginPath(),this.ctx.moveTo(this.lineCoordinates.x1,this.lineCoordinates.y1),this.ctx.lineTo(this.lineCoordinates.x2,this.lineCoordinates.y2),this.ctx.stroke());else if(("left"===this._position||"right"===this._position)&&this.lineThickness)this.ctx.lineWidth=this.lineThickness,this.ctx.strokeStyle=this.lineColor,this.ctx.beginPath(),this.ctx.moveTo(this.lineCoordinates.x1,
this.lineCoordinates.y1),this.ctx.lineTo(this.lineCoordinates.x2,this.lineCoordinates.y2),this.ctx.stroke()};x.prototype.getPixelCoordinatesOnAxis=function(a){var d={},b=this.lineCoordinates.width,c=this.lineCoordinates.height;if("bottom"===this._position||"top"===this._position)b/=Math.abs(this.maximum-this.minimum),d.x=this.lineCoordinates.x1+b*(a-this.minimum),d.y=this.lineCoordinates.y1;if("left"===this._position||"right"===this._position)b=c/Math.abs(this.maximum-this.minimum),d.y=this.lineCoordinates.y2-
b*(a-this.minimum),d.x=this.lineCoordinates.x2;return d};x.prototype.calculateValueToPixelConvertionParameters=function(){var a={pixelPerUnit:null,minimum:null,reference:null},d=this.lineCoordinates.width,b=this.lineCoordinates.height;a.minimum=this.minimum;if("bottom"===this._position||"top"===this._position)a.pixelPerUnit=d/Math.abs(this.maximum-this.minimum),a.reference=this.lineCoordinates.x1;if("left"===this._position||"right"===this._position)a.pixelPerUnit=-1*b/Math.abs(this.maximum-this.minimum),
a.reference=this.lineCoordinates.y2;this.convertionParameters=a};x.prototype.calculateAxisParameters=function(){var a=this.chart.layoutManager.getFreeSpace();"bottom"===this._position||"top"===this._position?(this.maxWidth=a.width,this.maxHeight=a.height):(this.maxWidth=a.height,this.maxHeight=a.width);var a="axisX"===this.type?500>this.maxWidth?8:Math.max(6,Math.floor(this.maxWidth/62)):Math.floor(this.maxWidth/40),d,b,c,e;"axisX"===this.type?(d=null!==this.sessionVariables.internalMinimum?this.sessionVariables.internalMinimum:
this.dataInfo.viewPortMin,b=null!==this.sessionVariables.internalMaximum?this.sessionVariables.internalMaximum:this.dataInfo.viewPortMax,0===b-d&&(b+=1),c=Infinity!==this.dataInfo.minDiff?this.dataInfo.minDiff:1):"axisY"===this.type&&(d="undefined"===typeof this._options.minimum?this.dataInfo.viewPortMin:this._options.minimum,b="undefined"===typeof this._options.maximum?this.dataInfo.viewPortMax:this._options.maximum,0===b-d?(b+=5,d-=5):(0!==b&&(b+=Math.abs(0.05)),0!==d&&(d-=Math.abs(0.05))),this.includeZero&&
"undefined"===typeof this._options.minimum&&0<d&&(d=0),this.includeZero&&"undefined"===typeof this._options.maximum&&0>b&&(b=0));"axisX"===this.type&&"dateTime"===this.chart.plotInfo.axisXValueType?(e=b-d,this.intervalType||(e/1<=a?(this.interval=1,this.intervalType="millisecond"):e/2<=a?(this.interval=2,this.intervalType="millisecond"):e/5<=a?(this.interval=5,this.intervalType="millisecond"):e/10<=a?(this.interval=10,this.intervalType="millisecond"):e/20<=a?(this.interval=20,this.intervalType="millisecond"):
e/50<=a?(this.interval=50,this.intervalType="millisecond"):e/100<=a?(this.interval=100,this.intervalType="millisecond"):e/200<=a?(this.interval=200,this.intervalType="millisecond"):e/250<=a?(this.interval=250,this.intervalType="millisecond"):e/300<=a?(this.interval=300,this.intervalType="millisecond"):e/400<=a?(this.interval=400,this.intervalType="millisecond"):e/500<=a?(this.interval=500,this.intervalType="millisecond"):e/(1*y.secondDuration)<=a?(this.interval=1,this.intervalType="second"):e/(2*
y.secondDuration)<=a?(this.interval=2,this.intervalType="second"):e/(5*y.secondDuration)<=a?(this.interval=5,this.intervalType="second"):e/(10*y.secondDuration)<=a?(this.interval=10,this.intervalType="second"):e/(15*y.secondDuration)<=a?(this.interval=15,this.intervalType="second"):e/(20*y.secondDuration)<=a?(this.interval=20,this.intervalType="second"):e/(30*y.secondDuration)<=a?(this.interval=30,this.intervalType="second"):e/(1*y.minuteDuration)<=a?(this.interval=1,this.intervalType="minute"):e/
(2*y.minuteDuration)<=a?(this.interval=2,this.intervalType="minute"):e/(5*y.minuteDuration)<=a?(this.interval=5,this.intervalType="minute"):e/(10*y.minuteDuration)<=a?(this.interval=10,this.intervalType="minute"):e/(15*y.minuteDuration)<=a?(this.interval=15,this.intervalType="minute"):e/(20*y.minuteDuration)<=a?(this.interval=20,this.intervalType="minute"):e/(30*y.minuteDuration)<=a?(this.interval=30,this.intervalType="minute"):e/(1*y.hourDuration)<=a?(this.interval=1,this.intervalType="hour"):e/
(2*y.hourDuration)<=a?(this.interval=2,this.intervalType="hour"):e/(3*y.hourDuration)<=a?(this.interval=3,this.intervalType="hour"):e/(6*y.hourDuration)<=a?(this.interval=6,this.intervalType="hour"):e/(1*y.dayDuration)<=a?(this.interval=1,this.intervalType="day"):e/(2*y.dayDuration)<=a?(this.interval=2,this.intervalType="day"):e/(4*y.dayDuration)<=a?(this.interval=4,this.intervalType="day"):e/(1*y.weekDuration)<=a?(this.interval=1,this.intervalType="week"):e/(2*y.weekDuration)<=a?(this.interval=2,
this.intervalType="week"):e/(3*y.weekDuration)<=a?(this.interval=3,this.intervalType="week"):e/(1*y.monthDuration)<=a?(this.interval=1,this.intervalType="month"):e/(2*y.monthDuration)<=a?(this.interval=2,this.intervalType="month"):e/(3*y.monthDuration)<=a?(this.interval=3,this.intervalType="month"):e/(6*y.monthDuration)<=a?(this.interval=6,this.intervalType="month"):(this.interval=e/(1*y.yearDuration)<=a?1:e/(2*y.yearDuration)<=a?2:e/(4*y.yearDuration)<=a?4:Math.floor(x.getNiceNumber(e/(a-1),!0)/
y.yearDuration),this.intervalType="year")),this.minimum=null!==this.sessionVariables.internalMinimum?this.sessionVariables.internalMinimum:d-c/2,this.maximum=this.sessionVariables.internalMaximum?this.sessionVariables.internalMaximum:b+c/2,this.valueFormatString||("year"===this.intervalType?this.valueFormatString="YYYY":"month"===this.intervalType?this.valueFormatString="MMM YYYY":"week"===this.intervalType?this.valueFormatString="MMM DD YYYY":"day"===this.intervalType?this.valueFormatString="MMM DD YYYY":
"hour"===this.intervalType?this.valueFormatString="hh:mm TT":"minute"===this.intervalType?this.valueFormatString="hh:mm TT":"second"===this.intervalType?this.valueFormatString="hh:mm:ss TT":"millisecond"===this.intervalType&&(this.valueFormatString="f'ms'")),this.intervalStartPosition=this.getLabelStartPoint(new Date(this.minimum),this.intervalType,this.interval)):(this.intervalType="number",e=x.getNiceNumber(b-d,!1),this.interval=this._options&&this._options.interval?this._options.interval:x.getNiceNumber(e/
(a-1),!0),this.minimum=null!==this.sessionVariables.internalMinimum?this.sessionVariables.internalMinimum:Math.floor(d/this.interval)*this.interval,this.maximum=null!==this.sessionVariables.internalMaximum?this.sessionVariables.internalMaximum:Math.ceil(b/this.interval)*this.interval,"axisX"===this.type?(null===this.sessionVariables.internalMinimum&&(this.minimum=d-c/2),this.sessionVariables.internalMaximum||(this.maximum=b+c/2),this.intervalStartPosition=Math.floor((this.minimum+this.interval)/this.interval)*
this.interval):"axisY"===this.type&&(this.intervalStartPosition=this.minimum));"axisX"===this.type&&(this._absoluteMinimum=this._options&&"undefined"!==typeof this._options.minimum?this._options.minimum:this.dataInfo.min-c/2,this._absoluteMaximum=this._options&&"undefined"!==typeof this._options.maximum?this._options.maximum:this.dataInfo.max+c/2);if(!this.valueFormatString&&(this.valueFormatString="#,##0.##",e=Math.abs(this.maximum-this.minimum),1>e&&(d=Math.floor(Math.abs(Math.log(e)/Math.LN10))+
2,2<d)))for(b=0;b<d-2;b++)this.valueFormatString+="#"};x.prototype._getFontString=function(){return this.labelFontStyle+" "+this.labelFontWeight+" "+this.labelFontSize+"px "+this.labelFontFamily};x.getNiceNumber=function(a,d){var b=Math.floor(Math.log(a)/Math.LN10),c=a/Math.pow(10,b);return(d?1.5>c?1:3>c?2:7>c?5:10:1>=c?1:2>=c?2:5>=c?5:10)*Math.pow(10,b)};x.prototype.getLabelStartPoint=function(){var a=L(this.interval,this.intervalType),a=new Date(Math.floor(this.minimum/a)*a);if("millisecond"!==
this.intervalType)if("second"===this.intervalType)0<a.getMilliseconds()&&(a.setSeconds(a.getSeconds()+1),a.setMilliseconds(0));else if("minute"===this.intervalType){if(0<a.getSeconds()||0<a.getMilliseconds())a.setMinutes(a.getMinutes()+1),a.setSeconds(0),a.setMilliseconds(0)}else if("hour"===this.intervalType){if(0<a.getMinutes()||0<a.getSeconds()||0<a.getMilliseconds())a.setHours(a.getHours()+1),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0)}else if("day"===this.intervalType){if(0<a.getHours()||
0<a.getMinutes()||0<a.getSeconds()||0<a.getMilliseconds())a.setDate(a.getDate()+1),a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0)}else if("week"===this.intervalType){if(0<a.getDay()||0<a.getHours()||0<a.getMinutes()||0<a.getSeconds()||0<a.getMilliseconds())a.setDate(a.getDate()+(7-a.getDay())),a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0)}else if("month"===this.intervalType){if(1<a.getDate()||0<a.getHours()||0<a.getMinutes()||0<a.getSeconds()||0<a.getMilliseconds())a.setMonth(a.getMonth()+
1),a.setDate(1),a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0)}else if("year"===this.intervalType&&(0<a.getMonth()||1<a.getDate()||0<a.getHours()||0<a.getMinutes()||0<a.getSeconds()||0<a.getMilliseconds()))a.setFullYear(a.getFullYear()+1),a.setMonth(0),a.setDate(1),a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0);return a};J(H,E);H.prototype._initialize=function(){if(this.enabled){this.container=document.createElement("div");this.container.style.height="auto";
this.container.style.position="absolute";this.container.style.boxShadow="1px 1px 2px 2px rgba(0,0,0,0.1)";this.container.style.zIndex="1000";this.container.style.pointerEvents="none";this.container.style.display="none";var a;a='<div style=" width: auto;height: auto;min-width: 50px;';a+="line-height: 20px;";a+="padding: 5px;";a+="font-family: Calibri, Arial, Georgia, serif;";a+="font-weight: 400;";a+="font-style: italic;";a+="font-size: 14px;";a+="color: #000000;";a+="text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);";
a+="text-align: left;";a+="border: 2px solid gray;";a+="background: rgba(255,255,255,.9);";a+="text-indent: 0px;";a+="white-space: nowrap;";a+="border-radius: 10px;";a+='} "> Sample Tooltip</div>';this.container.innerHTML=a;this.contentDiv=this.container.firstChild;this.container.style.borderRadius=this.contentDiv.style.borderRadius;this.chart._canvasJSContainer.appendChild(this.container)}};H.prototype.mouseMoveHandler=function(a,d){var b=this;clearTimeout(this._timerId);this._timerId=setTimeout(function(){b._updateToolTip(a,
d)},5)};H.prototype._updateToolTip=function(a,d){var b=null,c=null,e=[],f=0;if(this.shared){f="xySwapped"===this.chart.plotInfo.axisPlacement?(this.chart.axisX.maximum-this.chart.axisX.minimum)/this.chart.axisX.lineCoordinates.height*(this.chart.axisX.lineCoordinates.y2-d)+this.chart.axisX.minimum:(this.chart.axisX.maximum-this.chart.axisX.minimum)/this.chart.axisX.lineCoordinates.width*(a-this.chart.axisX.lineCoordinates.x1)+this.chart.axisX.minimum;b=[];for(c=0;c<this.chart.data.length;c++)if(g=
{},(g=this.chart.data[c].findDataPointByX(f,!0))&&0<=g.index)g.dataSeries=this.chart.data[c],b.push(g);if(0===b.length)return;b.sort(function(a,b){return a.distance-b.distance});f=b[0];for(c=0;c<b.length;c++)b[c].dataPoint.x.valueOf()===f.dataPoint.x.valueOf()&&e.push(b[c]);b=null}else{g=this.chart._eventManager.ghostCtx.getImageData(a,d,2,2).data;b=!0;for(c=0;4>c;c++)if(g[c]!==g[c+4]|g[c]!==g[c+8]|g[c]!==g[c+12]){b=!1;break}g=b?g[0]<<16|g[1]<<8|g[2]:0;if(0<g&&"undefined"!==typeof this.chart._eventManager.objectMap[g]){eventObject=
this.chart._eventManager.objectMap[g];if(this.currentSeriesIndex===eventObject.dataSeriesIndex&&this.currentDataPointIndex===eventObject.dataPointIndex)return;this.currentSeriesIndex=eventObject.dataSeriesIndex;this.currentDataPointIndex=0<=eventObject.dataPointIndex?eventObject.dataPointIndex:-1}else this.currentDataPointIndex=-1;if(0<=this.currentSeriesIndex){var c=this.chart.data[this.currentSeriesIndex],g={};if(0<=this.currentDataPointIndex)b=c.dataPoints[this.currentDataPointIndex],g.dataSeries=
c,g.dataPoint=b,g.index=this.currentDataPointIndex,g.distance=Math.abs(b.x-f);else if("line"===c.type||"area"===c.type||"stackedArea"===c.type||"stackedArea100"===c.type)f=(this.chart.axisX.maximum-this.chart.axisX.minimum)/this.chart.axisX.lineCoordinates.width*(a-this.chart.axisX.lineCoordinates.x1)+this.chart.axisX.minimum.valueOf(),g=c.findDataPointByX(f,!0),g.dataSeries=c,this.currentDataPointIndex=g.index,b=g.dataPoint;else return;e.push(g)}}0<e.length&&(this.highlightObjects(e),f="",f=this.content&&
"function"===typeof this.content?this.content({entries:e}):this.getToolTipInnerHTML({entries:e}),this.contentDiv.innerHTML=f,this.contentDiv.innerHTML=f,f=!1,"none"===this.container.style.display&&(f=!0,this.container.style.display="block"),this.contentDiv.style.borderColor=this.borderColor?this.borderColor:e[0].dataPoint.color?e[0].dataPoint.color:e[0].dataSeries.color?e[0].dataSeries.color:e[0].dataSeries._colorSet[e[0].index%e[0].dataSeries._colorSet.length],toolTipLeft="pie"===e[0].dataSeries.type||
"doughnut"===e[0].dataSeries.type||"bar"===e[0].dataSeries.type||"stackedBar"===e[0].dataSeries.type||"stackedBar100"===e[0].dataSeries.type?a-10-this.container.clientWidth:this.chart.axisX.lineCoordinates.width/Math.abs(this.chart.axisX.maximum-this.chart.axisX.minimum)*Math.abs(e[0].dataPoint.x-this.chart.axisX.minimum)+this.chart.axisX.lineCoordinates.x1+0.5-this.container.clientWidth<<0,toolTipLeft=0<toolTipLeft?toolTipLeft+"px":toolTipLeft+this.container.clientWidth+20+"px",e=1===e.length&&!this.shared&&
("line"===e[0].dataSeries.type||"area"===e[0].dataSeries.type||"stackedArea"===e[0].dataSeries.type||"stackedArea100"===e[0].dataSeries.type)?e[0].dataSeries.axisY.lineCoordinates.y2-e[0].dataSeries.axisY.lineCoordinates.height/Math.abs(e[0].dataSeries.axisY.maximum-e[0].dataSeries.axisY.minimum)*Math.abs(e[0].dataPoint.y-e[0].dataSeries.axisY.minimum)+0.5<<0:"bar"===e[0].dataSeries.type||"stackedBar"===e[0].dataSeries.type||"stackedBar100"===e[0].dataSeries.type?e[0].dataSeries.axisX.lineCoordinates.y2-
e[0].dataSeries.axisX.lineCoordinates.height/Math.abs(e[0].dataSeries.axisX.maximum-e[0].dataSeries.axisX.minimum)*Math.abs(e[0].dataPoint.x-e[0].dataSeries.axisX.minimum)+0.5<<0:d,e=-e+10,0<e+this.container.clientHeight+5&&(e-=e+this.container.clientHeight+5-0),this.container.style.left=toolTipLeft,this.container.style.bottom=e+"px",!this.animationEnabled||f?this.disableAnimation():this.enableAnimation())};H.prototype.highlightObjects=function(a){var d=this.chart.overlaidCanvasCtx;this.chart.resetOverlayedCanvas();
var b=this.chart.getPlotArea();d.beginPath();d.rect(b.x1,b.y1,b.width,b.height);d.clip();for(b=0;b<a.length;b++){var c=a[b];if((c=this.chart._eventManager.objectMap[c.dataSeries.dataPointIds[c.index]])&&c.objectType&&"dataPoint"===c.objectType){var e=this.chart.data[c.dataSeriesIndex],f=c.dataPointIndex;if("line"===e.type||"scatter"===e.type||"area"===e.type||"stackedArea"===e.type||"stackedArea100"===e.type)e=e.getMarkerProperties(f,c.x1,c.y1,this.chart.overlaidCanvasCtx),e.size=Math.max(1.5*e.size<<
0,10),G.drawMarkers([e]);else if("bubble"===e.type)e=e.getMarkerProperties(f,c.x1,c.y1,this.chart.overlaidCanvasCtx),e.size=c.size,e.color="white",e.borderColor="white",d.globalAlpha=0.3,G.drawMarkers([e]),d.globalAlpha=1;else if("column"===e.type||"stackedColumn"===e.type||"stackedColumn100"===e.type||"bar"===e.type||"stackedBar"===e.type||"stackedBar100"===e.type)d.globalAlpha=0.3,F(d,c.x1,c.y1,c.x2,c.y2,"white",!1,!1,!1,!1),d.globalAlpha=1;else if("pie"===e.type||"doughnut"===e.type)d.globalAlpha=
0.3,K(d,c.center,c.radius,"white",e.type,c.startAngle,c.endAngle),d.globalAlpha=1}}d.globalAlpha=1;d.restore()};H.prototype.getToolTipInnerHTML=function(a){a=a.entries;var d="",b=null,c=null,e=0,f="";if(1<a.length){for(var g=!0,k=0;k<a.length;k++)if(a[k].dataSeries.toolTipContent||a[k].dataPoint.toolTipContent){g=!1;break}for(k=0;k<a.length;k++){b=a[k].dataSeries;c=a[k].dataPoint;e=a[k].index;f="";0===k&&g&&(f+="undefined"!==typeof this.chart.axisX.labels[c.x]?this.chart.axisX.labels[c.x]:"{x}",f+=
"</br>");if("line"===b.type||"area"===b.type||"column"===b.type||"bar"===b.type||"scatter"===b.type||"stackedColumn"===b.type||"stackedColumn100"===b.type||"stackedBar"===b.type||"stackedBar100"===b.type||"stackedArea"===b.type||"stackedArea100"===b.type)f+=c.toolTipContent?c.toolTipContent:b.toolTipContent?b.toolTipContent:this.content?f:"<span style='\"'color:{color};'\"'>{name}:</span>&nbsp;&nbsp;{y}";else if("bubble"===b.type)f+=c.toolTipContent?c.toolTipContent:b.toolTipContent?b.toolTipContent:
this.content?f:"<span style='\"'color:{color};'\"'>{name}:</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}";else if("pie"===b.type||"doughnut"===b.type)f+=c.toolTipContent?c.toolTipContent:b.toolTipContent?b.toolTipContent:this.content?f:"&nbsp;&nbsp;{y}";d+=this.chart.replaceKeywordsWithValue(f,c,b,e);k<a.length-1&&(d+="</br>")}}else{b=a[0].dataSeries;c=a[0].dataPoint;e=a[0].index;if("line"===b.type||"area"===b.type||"column"===b.type||"bar"===b.type||"scatter"===b.type||"stackedColumn"===b.type||"stackedColumn100"===
b.type||"stackedBar"===b.type||"stackedBar100"===b.type||"stackedArea"===b.type||"stackedArea100"===b.type)f=c.toolTipContent?c.toolTipContent:b.toolTipContent?b.toolTipContent:this.content?f:"<span style='\"'color:{color};'\"'>"+(c.label?"{label}":"{x}")+" :</span>&nbsp;&nbsp;{y}";else if("bubble"===b.type)f=c.toolTipContent?c.toolTipContent:b.toolTipContent?b.toolTipContent:this.content?f:"<span style='\"'color:{color};'\"'>"+(c.label?"{label}":"{x}")+":</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}";
else if("pie"===b.type||"doughnut"===b.type)f=c.toolTipContent?c.toolTipContent:b.toolTipContent?b.toolTipContent:this.content?f:(c.name?"{name}:&nbsp;&nbsp;":c.label?"{label}:&nbsp;&nbsp;":"")+"{y}";d+=this.chart.replaceKeywordsWithValue(f,c,b,e)}return d};H.prototype.enableAnimation=function(){this.container.style.WebkitTransition||(this.container.style.WebkitTransition="left .2s ease-out, bottom .2s ease-out",this.container.style.MozTransition="left .2s ease-out, bottom .2s ease-out",this.container.style.MsTransition=
"left .2s ease-out, bottom .2s ease-out",this.container.style.transition="left .2s ease-out, bottom .2s ease-out")};H.prototype.disableAnimation=function(){this.container.style.WebkitTransition&&(this.container.style.WebkitTransition="",this.container.style.MozTransition="",this.container.style.MsTransition="",this.container.style.transition="")};H.prototype.hide=function(){this.container.style.display="none";this.currentSeriesIndex=-1;this.chart.resetOverlayedCanvas()};t.prototype.replaceKeywordsWithValue=
function(a,d,b,c){var e=this;return a.replace(/\{\s*[a-zA-Z]+\s*\}|"[^"]*"|'[^']*'/g,function(a){if('"'===a[0]&&'"'===a[a.length-1]||"'"===a[0]&&"'"===a[a.length-1])return a.slice(1,a.length-1);a=M(a.slice(1,a.length-1));var g=null;if("color"===a)return d.color?d.color:b.color?b.color:b._colorSet[c%b._colorSet.length];if(d.hasOwnProperty(a))g=d;else if(b.hasOwnProperty(a))g=b;else return"";return"x"===a?e.axisX&&"dateTime"===e.plotInfo.axisXValueType?V(g[a],d.xValueFormatString?d.xValueFormatString:
b.xValueFormatString?b.xValueFormatString:e.axisX.valueFormatString?e.axisX.valueFormatString:"DD MM YY"):W(g[a],d.xValueFormatString?d.xValueFormatString:b.xValueFormatString?b.xValueFormatString:"#,##0.##"):"y"===a?W(g[a],d.xValueFormatString?d.xValueFormatString:b.xValueFormatString?b.xValueFormatString:"#,###.##"):g[a]})};P.prototype.reset=function(){this.lastObjectId=0;this.objectMap=[];this.rectangularRegionEventSubscriptions=[];this.previousDataPointEventObject=null;this.ghostCtx.clearRect(0,
0,this.ghostCanvas.width,this.ghostCanvas.height);this.ghostCtx.beginPath()};P.prototype.getNewObjectTrackingId=function(){return++this.lastObjectId};P.prototype.mouseEventHandler=function(a){if(!("mousemove"!==a.type&&"click"!==a.type)){var d=null,b=null,c=null,e=-1,f=!1,g=!1,k=ba(a),b=this.ghostCtx.getImageData(k.x,k.y,1,1).data;if(240<b[3])if(b=b[0]<<16|b[1]<<8|b[2],"undefined"!==typeof this.objectMap[b]&&"dataPoint"===this.objectMap[b].objectType){d=this.objectMap[b];b=this.chart.data[d.dataSeriesIndex];
c=b.dataPoints[d.dataPointIndex];e=d.dataPointIndex;if(null===this.previousDataPointEventObject||this.previousDataPointEventObject.dataSeriesIndex!==d.dataSeriesIndex||this.previousDataPointEventObject.dataPointIndex!==d.dataPointIndex)if(this.previousDataPointEventObject&&(f=!0),c.mouseover&&c.mouseover.call(c,{x:k.x,y:k.y,dataPoint:c,dataSeries:b,dataPointIndex:e}),b.mouseover&&(null===this.previousDataPointEventObject||this.previousDataPointEventObject.dataSeriesIndex!==d.dataSeriesIndex))b.mouseover&&
b.mouseover.call(b,{x:k.x,y:k.y,dataPoint:c,dataSeries:b,dataPointIndex:e}),this.previousDataPointEventObject&&(g=!0);"mousemove"===a.type?(c.mousemove&&c.mousemove.call(c,{x:k.x,y:k.y,dataPoint:c,dataSeries:b,dataPointIndex:e}),b.mousemove&&b.mousemove.call(b,{x:k.x,y:k.y,dataPoint:c,dataSeries:b,dataPointIndex:e})):"click"===a.type&&(c.click&&c.click.call(c,{x:k.x,y:k.y,dataPoint:c,dataSeries:b,dataPointIndex:e}),b.click&&b.click.call(b,{x:k.x,y:k.y,dataPoint:c,dataSeries:b,dataPointIndex:e}),this.chart.pieDoughnutClickHandler&&
this.chart.pieDoughnutClickHandler.call(b,{x:k.x,y:k.y,dataPoint:c,dataSeries:b,dataPointIndex:e}))}else this.previousDataPointEventObject&&(g=f=!0);else this.previousDataPointEventObject&&(g=f=!0);if(f||g)a=this.chart.data[this.previousDataPointEventObject.dataSeriesIndex],b=a.dataPoints[this.previousDataPointEventObject.dataPointIndex],c=this.previousDataPointEventObject.dataPointIndex,f&&b.mouseout&&b.mouseout.call(b,{x:k.x,y:k.y,dataPoint:b,dataSeries:a,dataPointIndex:c}),g&&a.mouseout&&a.mouseout.call(a,
{x:k.x,y:k.y,dataPoint:b,dataSeries:a,dataPointIndex:c});this.previousDataPointEventObject=d}};var G={drawMarker:function(a,d,b,c,e,f,g,k){if(b){var h=1;b.fillStyle=f?f:"#000000";b.strokeStyle=g?g:"#000000";b.lineWidth=k?k:0;"circle"===c?(b.beginPath(),b.arc(a,d,e/2,0,360,!1),f&&b.fill(),k&&(g?b.stroke():(h=b.globalAlpha,b.globalAlpha=0.15,b.strokeStyle="black",b.stroke(),b.globalAlpha=h))):"square"===c?(b.beginPath(),b.rect(a-e/2,d-e/2,e,e),f&&b.fill(),k&&(g?b.stroke():(h=b.globalAlpha,b.globalAlpha=
0.15,b.strokeStyle="black",b.stroke(),b.globalAlpha=h))):"triangle"===c?(b.beginPath(),b.moveTo(a-e/2,d+e/2),b.lineTo(a+e/2,d+e/2),b.lineTo(a,d-e/2),b.closePath(),f&&b.fill(),k&&(g?b.stroke():(h=b.globalAlpha,b.globalAlpha=0.15,b.strokeStyle="black",b.stroke(),b.globalAlpha=h))):"cross"===c&&(b.strokeStyle=f,b.lineWidth=e/4,b.beginPath(),b.moveTo(a-e/2,d-e/2),b.lineTo(a+e/2,d+e/2),b.stroke(),b.moveTo(a+e/2,d-e/2),b.lineTo(a-e/2,d+e/2),b.stroke())}},drawMarkers:function(a){for(var d=0;d<a.length;d++){var b=
a[d];G.drawMarker(b.x,b.y,b.ctx,b.type,b.size,b.color,b.borderColor,b.borderThickness)}}},O={Chart:function(a,d){var b=new t(a,d,this);this.render=function(){b.render()};this.options=b._options}};O.Chart.version="1.0.0 Beta 2";window.CanvasJS=O})();
function previewFile() {
  var preview = document.querySelector('img');
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();

  reader.onloadend = function () {
    preview.src = reader.result;
  }

  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = "";
  }
}
;
/*!
 * Bootstrap v4.0.0-alpha.2 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>=3)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v3.0.0")}(jQuery),+function(a){"use strict";function b(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var d=function(a,b,c){for(var d=!0;d;){var e=a,f=b,g=c;d=!1,null===e&&(e=Function.prototype);var h=Object.getOwnPropertyDescriptor(e,f);if(void 0!==h){if("value"in h)return h.value;var i=h.get;if(void 0===i)return;return i.call(g)}var j=Object.getPrototypeOf(e);if(null===j)return;a=j,b=f,c=g,d=!0,h=j=void 0}},e=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),f=function(a){function b(a){return{}.toString.call(a).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}function c(a){return(a[0]||a).nodeType}function d(){return{bindType:h.end,delegateType:h.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}}}function e(){if(window.QUnit)return!1;var a=document.createElement("bootstrap");for(var b in i)if(void 0!==a.style[b])return{end:i[b]};return!1}function f(b){var c=this,d=!1;return a(this).one(j.TRANSITION_END,function(){d=!0}),setTimeout(function(){d||j.triggerTransitionEnd(c)},b),this}function g(){h=e(),a.fn.emulateTransitionEnd=f,j.supportsTransitionEnd()&&(a.event.special[j.TRANSITION_END]=d())}var h=!1,i={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},j={TRANSITION_END:"bsTransitionEnd",getUID:function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},getSelectorFromElement:function(a){var b=a.getAttribute("data-target");return b||(b=a.getAttribute("href")||"",b=/^#[a-z]/i.test(b)?b:null),b},reflow:function(a){new Function("bs","return bs")(a.offsetHeight)},triggerTransitionEnd:function(b){a(b).trigger(h.end)},supportsTransitionEnd:function(){return Boolean(h)},typeCheckConfig:function(a,d,e){for(var f in e)if(e.hasOwnProperty(f)){var g=e[f],h=d[f],i=void 0;if(i=h&&c(h)?"element":b(h),!new RegExp(g).test(i))throw new Error(a.toUpperCase()+": "+('Option "'+f+'" provided type "'+i+'" ')+('but expected type "'+g+'".'))}}};return g(),j}(jQuery),g=(function(a){var b="alert",d="4.0.0-alpha",g="bs.alert",h="."+g,i=".data-api",j=a.fn[b],k=150,l={DISMISS:'[data-dismiss="alert"]'},m={CLOSE:"close"+h,CLOSED:"closed"+h,CLICK_DATA_API:"click"+h+i},n={ALERT:"alert",FADE:"fade",IN:"in"},o=function(){function b(a){c(this,b),this._element=a}return e(b,[{key:"close",value:function(a){a=a||this._element;var b=this._getRootElement(a),c=this._triggerCloseEvent(b);c.isDefaultPrevented()||this._removeElement(b)}},{key:"dispose",value:function(){a.removeData(this._element,g),this._element=null}},{key:"_getRootElement",value:function(b){var c=f.getSelectorFromElement(b),d=!1;return c&&(d=a(c)[0]),d||(d=a(b).closest("."+n.ALERT)[0]),d}},{key:"_triggerCloseEvent",value:function(b){var c=a.Event(m.CLOSE);return a(b).trigger(c),c}},{key:"_removeElement",value:function(b){return a(b).removeClass(n.IN),f.supportsTransitionEnd()&&a(b).hasClass(n.FADE)?void a(b).one(f.TRANSITION_END,a.proxy(this._destroyElement,this,b)).emulateTransitionEnd(k):void this._destroyElement(b)}},{key:"_destroyElement",value:function(b){a(b).detach().trigger(m.CLOSED).remove()}}],[{key:"_jQueryInterface",value:function(c){return this.each(function(){var d=a(this),e=d.data(g);e||(e=new b(this),d.data(g,e)),"close"===c&&e[c](this)})}},{key:"_handleDismiss",value:function(a){return function(b){b&&b.preventDefault(),a.close(this)}}},{key:"VERSION",get:function(){return d}}]),b}();return a(document).on(m.CLICK_DATA_API,l.DISMISS,o._handleDismiss(new o)),a.fn[b]=o._jQueryInterface,a.fn[b].Constructor=o,a.fn[b].noConflict=function(){return a.fn[b]=j,o._jQueryInterface},o}(jQuery),function(a){var b="button",d="4.0.0-alpha",f="bs.button",g="."+f,h=".data-api",i=a.fn[b],j={ACTIVE:"active",BUTTON:"btn",FOCUS:"focus"},k={DATA_TOGGLE_CARROT:'[data-toggle^="button"]',DATA_TOGGLE:'[data-toggle="buttons"]',INPUT:"input",ACTIVE:".active",BUTTON:".btn"},l={CLICK_DATA_API:"click"+g+h,FOCUS_BLUR_DATA_API:"focus"+g+h+" "+("blur"+g+h)},m=function(){function b(a){c(this,b),this._element=a}return e(b,[{key:"toggle",value:function(){var b=!0,c=a(this._element).closest(k.DATA_TOGGLE)[0];if(c){var d=a(this._element).find(k.INPUT)[0];if(d){if("radio"===d.type)if(d.checked&&a(this._element).hasClass(j.ACTIVE))b=!1;else{var e=a(c).find(k.ACTIVE)[0];e&&a(e).removeClass(j.ACTIVE)}b&&(d.checked=!a(this._element).hasClass(j.ACTIVE),a(this._element).trigger("change"))}}else this._element.setAttribute("aria-pressed",!a(this._element).hasClass(j.ACTIVE));b&&a(this._element).toggleClass(j.ACTIVE)}},{key:"dispose",value:function(){a.removeData(this._element,f),this._element=null}}],[{key:"_jQueryInterface",value:function(c){return this.each(function(){var d=a(this).data(f);d||(d=new b(this),a(this).data(f,d)),"toggle"===c&&d[c]()})}},{key:"VERSION",get:function(){return d}}]),b}();return a(document).on(l.CLICK_DATA_API,k.DATA_TOGGLE_CARROT,function(b){b.preventDefault();var c=b.target;a(c).hasClass(j.BUTTON)||(c=a(c).closest(k.BUTTON)),m._jQueryInterface.call(a(c),"toggle")}).on(l.FOCUS_BLUR_DATA_API,k.DATA_TOGGLE_CARROT,function(b){var c=a(b.target).closest(k.BUTTON)[0];a(c).toggleClass(j.FOCUS,/^focus(in)?$/.test(b.type))}),a.fn[b]=m._jQueryInterface,a.fn[b].Constructor=m,a.fn[b].noConflict=function(){return a.fn[b]=i,m._jQueryInterface},m}(jQuery),function(a){var b="carousel",d="4.0.0-alpha",g="bs.carousel",h="."+g,i=".data-api",j=a.fn[b],k=600,l={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},m={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},n={NEXT:"next",PREVIOUS:"prev"},o={SLIDE:"slide"+h,SLID:"slid"+h,KEYDOWN:"keydown"+h,MOUSEENTER:"mouseenter"+h,MOUSELEAVE:"mouseleave"+h,LOAD_DATA_API:"load"+h+i,CLICK_DATA_API:"click"+h+i},p={CAROUSEL:"carousel",ACTIVE:"active",SLIDE:"slide",RIGHT:"right",LEFT:"left",ITEM:"carousel-item"},q={ACTIVE:".active",ACTIVE_ITEM:".active.carousel-item",ITEM:".carousel-item",NEXT_PREV:".next, .prev",INDICATORS:".carousel-indicators",DATA_SLIDE:"[data-slide], [data-slide-to]",DATA_RIDE:'[data-ride="carousel"]'},r=function(){function i(b,d){c(this,i),this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this._config=this._getConfig(d),this._element=a(b)[0],this._indicatorsElement=a(this._element).find(q.INDICATORS)[0],this._addEventListeners()}return e(i,[{key:"next",value:function(){this._isSliding||this._slide(n.NEXT)}},{key:"nextWhenVisible",value:function(){document.hidden||this.next()}},{key:"prev",value:function(){this._isSliding||this._slide(n.PREVIOUS)}},{key:"pause",value:function(b){b||(this._isPaused=!0),a(this._element).find(q.NEXT_PREV)[0]&&f.supportsTransitionEnd()&&(f.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null}},{key:"cycle",value:function(b){b||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval(a.proxy(document.visibilityState?this.nextWhenVisible:this.next,this),this._config.interval))}},{key:"to",value:function(b){var c=this;this._activeElement=a(this._element).find(q.ACTIVE_ITEM)[0];var d=this._getItemIndex(this._activeElement);if(!(b>this._items.length-1||0>b)){if(this._isSliding)return void a(this._element).one(o.SLID,function(){return c.to(b)});if(d===b)return this.pause(),void this.cycle();var e=b>d?n.NEXT:n.PREVIOUS;this._slide(e,this._items[b])}}},{key:"dispose",value:function(){a(this._element).off(h),a.removeData(this._element,g),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null}},{key:"_getConfig",value:function(c){return c=a.extend({},l,c),f.typeCheckConfig(b,c,m),c}},{key:"_addEventListeners",value:function(){this._config.keyboard&&a(this._element).on(o.KEYDOWN,a.proxy(this._keydown,this)),"hover"!==this._config.pause||"ontouchstart"in document.documentElement||a(this._element).on(o.MOUSEENTER,a.proxy(this.pause,this)).on(o.MOUSELEAVE,a.proxy(this.cycle,this))}},{key:"_keydown",value:function(a){if(a.preventDefault(),!/input|textarea/i.test(a.target.tagName))switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}}},{key:"_getItemIndex",value:function(b){return this._items=a.makeArray(a(b).parent().find(q.ITEM)),this._items.indexOf(b)}},{key:"_getItemByDirection",value:function(a,b){var c=a===n.NEXT,d=a===n.PREVIOUS,e=this._getItemIndex(b),f=this._items.length-1,g=d&&0===e||c&&e===f;if(g&&!this._config.wrap)return b;var h=a===n.PREVIOUS?-1:1,i=(e+h)%this._items.length;return-1===i?this._items[this._items.length-1]:this._items[i]}},{key:"_triggerSlideEvent",value:function(b,c){var d=a.Event(o.SLIDE,{relatedTarget:b,direction:c});return a(this._element).trigger(d),d}},{key:"_setActiveIndicatorElement",value:function(b){if(this._indicatorsElement){a(this._indicatorsElement).find(q.ACTIVE).removeClass(p.ACTIVE);var c=this._indicatorsElement.children[this._getItemIndex(b)];c&&a(c).addClass(p.ACTIVE)}}},{key:"_slide",value:function(b,c){var d=this,e=a(this._element).find(q.ACTIVE_ITEM)[0],g=c||e&&this._getItemByDirection(b,e),h=Boolean(this._interval),i=b===n.NEXT?p.LEFT:p.RIGHT;if(g&&a(g).hasClass(p.ACTIVE))return void(this._isSliding=!1);var j=this._triggerSlideEvent(g,i);if(!j.isDefaultPrevented()&&e&&g){this._isSliding=!0,h&&this.pause(),this._setActiveIndicatorElement(g);var l=a.Event(o.SLID,{relatedTarget:g,direction:i});f.supportsTransitionEnd()&&a(this._element).hasClass(p.SLIDE)?(a(g).addClass(b),f.reflow(g),a(e).addClass(i),a(g).addClass(i),a(e).one(f.TRANSITION_END,function(){a(g).removeClass(i).removeClass(b),a(g).addClass(p.ACTIVE),a(e).removeClass(p.ACTIVE).removeClass(b).removeClass(i),d._isSliding=!1,setTimeout(function(){return a(d._element).trigger(l)},0)}).emulateTransitionEnd(k)):(a(e).removeClass(p.ACTIVE),a(g).addClass(p.ACTIVE),this._isSliding=!1,a(this._element).trigger(l)),h&&this.cycle()}}}],[{key:"_jQueryInterface",value:function(b){return this.each(function(){var c=a(this).data(g),d=a.extend({},l,a(this).data());"object"==typeof b&&a.extend(d,b);var e="string"==typeof b?b:d.slide;if(c||(c=new i(this,d),a(this).data(g,c)),"number"==typeof b)c.to(b);else if("string"==typeof e){if(void 0===c[e])throw new Error('No method named "'+e+'"');c[e]()}else d.interval&&(c.pause(),c.cycle())})}},{key:"_dataApiClickHandler",value:function(b){var c=f.getSelectorFromElement(this);if(c){var d=a(c)[0];if(d&&a(d).hasClass(p.CAROUSEL)){var e=a.extend({},a(d).data(),a(this).data()),h=this.getAttribute("data-slide-to");h&&(e.interval=!1),i._jQueryInterface.call(a(d),e),h&&a(d).data(g).to(h),b.preventDefault()}}}},{key:"VERSION",get:function(){return d}},{key:"Default",get:function(){return l}}]),i}();return a(document).on(o.CLICK_DATA_API,q.DATA_SLIDE,r._dataApiClickHandler),a(window).on(o.LOAD_DATA_API,function(){a(q.DATA_RIDE).each(function(){var b=a(this);r._jQueryInterface.call(b,b.data())})}),a.fn[b]=r._jQueryInterface,a.fn[b].Constructor=r,a.fn[b].noConflict=function(){return a.fn[b]=j,r._jQueryInterface},r}(jQuery),function(a){var b="collapse",d="4.0.0-alpha",g="bs.collapse",h="."+g,i=".data-api",j=a.fn[b],k=600,l={toggle:!0,parent:""},m={toggle:"boolean",parent:"string"},n={SHOW:"show"+h,SHOWN:"shown"+h,HIDE:"hide"+h,HIDDEN:"hidden"+h,CLICK_DATA_API:"click"+h+i},o={IN:"in",COLLAPSE:"collapse",COLLAPSING:"collapsing",COLLAPSED:"collapsed"},p={WIDTH:"width",HEIGHT:"height"},q={ACTIVES:".panel > .in, .panel > .collapsing",DATA_TOGGLE:'[data-toggle="collapse"]'},r=function(){function h(b,d){c(this,h),this._isTransitioning=!1,this._element=b,this._config=this._getConfig(d),this._triggerArray=a.makeArray(a('[data-toggle="collapse"][href="#'+b.id+'"],'+('[data-toggle="collapse"][data-target="#'+b.id+'"]'))),this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}return e(h,[{key:"toggle",value:function(){a(this._element).hasClass(o.IN)?this.hide():this.show()}},{key:"show",value:function(){var b=this;if(!this._isTransitioning&&!a(this._element).hasClass(o.IN)){var c=void 0,d=void 0;if(this._parent&&(c=a.makeArray(a(q.ACTIVES)),c.length||(c=null)),!(c&&(d=a(c).data(g),d&&d._isTransitioning))){var e=a.Event(n.SHOW);if(a(this._element).trigger(e),!e.isDefaultPrevented()){c&&(h._jQueryInterface.call(a(c),"hide"),d||a(c).data(g,null));var i=this._getDimension();a(this._element).removeClass(o.COLLAPSE).addClass(o.COLLAPSING),this._element.style[i]=0,this._element.setAttribute("aria-expanded",!0),this._triggerArray.length&&a(this._triggerArray).removeClass(o.COLLAPSED).attr("aria-expanded",!0),this.setTransitioning(!0);var j=function(){a(b._element).removeClass(o.COLLAPSING).addClass(o.COLLAPSE).addClass(o.IN),b._element.style[i]="",b.setTransitioning(!1),a(b._element).trigger(n.SHOWN)};if(!f.supportsTransitionEnd())return void j();var l=i[0].toUpperCase()+i.slice(1),m="scroll"+l;a(this._element).one(f.TRANSITION_END,j).emulateTransitionEnd(k),this._element.style[i]=this._element[m]+"px"}}}}},{key:"hide",value:function(){var b=this;if(!this._isTransitioning&&a(this._element).hasClass(o.IN)){var c=a.Event(n.HIDE);if(a(this._element).trigger(c),!c.isDefaultPrevented()){var d=this._getDimension(),e=d===p.WIDTH?"offsetWidth":"offsetHeight";this._element.style[d]=this._element[e]+"px",f.reflow(this._element),a(this._element).addClass(o.COLLAPSING).removeClass(o.COLLAPSE).removeClass(o.IN),this._element.setAttribute("aria-expanded",!1),this._triggerArray.length&&a(this._triggerArray).addClass(o.COLLAPSED).attr("aria-expanded",!1),this.setTransitioning(!0);var g=function(){b.setTransitioning(!1),a(b._element).removeClass(o.COLLAPSING).addClass(o.COLLAPSE).trigger(n.HIDDEN)};return this._element.style[d]=0,f.supportsTransitionEnd()?void a(this._element).one(f.TRANSITION_END,g).emulateTransitionEnd(k):void g()}}}},{key:"setTransitioning",value:function(a){this._isTransitioning=a}},{key:"dispose",value:function(){a.removeData(this._element,g),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null}},{key:"_getConfig",value:function(c){return c=a.extend({},l,c),c.toggle=Boolean(c.toggle),f.typeCheckConfig(b,c,m),c}},{key:"_getDimension",value:function(){var b=a(this._element).hasClass(p.WIDTH);return b?p.WIDTH:p.HEIGHT}},{key:"_getParent",value:function(){var b=this,c=a(this._config.parent)[0],d='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]';return a(c).find(d).each(function(a,c){b._addAriaAndCollapsedClass(h._getTargetFromElement(c),[c])}),c}},{key:"_addAriaAndCollapsedClass",value:function(b,c){if(b){var d=a(b).hasClass(o.IN);b.setAttribute("aria-expanded",d),c.length&&a(c).toggleClass(o.COLLAPSED,!d).attr("aria-expanded",d)}}}],[{key:"_getTargetFromElement",value:function(b){var c=f.getSelectorFromElement(b);return c?a(c)[0]:null}},{key:"_jQueryInterface",value:function(b){return this.each(function(){var c=a(this),d=c.data(g),e=a.extend({},l,c.data(),"object"==typeof b&&b);if(!d&&e.toggle&&/show|hide/.test(b)&&(e.toggle=!1),d||(d=new h(this,e),c.data(g,d)),"string"==typeof b){if(void 0===d[b])throw new Error('No method named "'+b+'"');d[b]()}})}},{key:"VERSION",get:function(){return d}},{key:"Default",get:function(){return l}}]),h}();return a(document).on(n.CLICK_DATA_API,q.DATA_TOGGLE,function(b){b.preventDefault();var c=r._getTargetFromElement(this),d=a(c).data(g),e=d?"toggle":a(this).data();r._jQueryInterface.call(a(c),e)}),a.fn[b]=r._jQueryInterface,a.fn[b].Constructor=r,a.fn[b].noConflict=function(){return a.fn[b]=j,r._jQueryInterface},r}(jQuery),function(a){var b="dropdown",d="4.0.0-alpha",g="bs.dropdown",h="."+g,i=".data-api",j=a.fn[b],k={HIDE:"hide"+h,HIDDEN:"hidden"+h,SHOW:"show"+h,SHOWN:"shown"+h,CLICK:"click"+h,CLICK_DATA_API:"click"+h+i,KEYDOWN_DATA_API:"keydown"+h+i},l={BACKDROP:"dropdown-backdrop",DISABLED:"disabled",OPEN:"open"},m={BACKDROP:".dropdown-backdrop",DATA_TOGGLE:'[data-toggle="dropdown"]',FORM_CHILD:".dropdown form",ROLE_MENU:'[role="menu"]',ROLE_LISTBOX:'[role="listbox"]',NAVBAR_NAV:".navbar-nav",VISIBLE_ITEMS:'[role="menu"] li:not(.disabled) a, [role="listbox"] li:not(.disabled) a'},n=function(){function b(a){c(this,b),this._element=a,this._addEventListeners()}return e(b,[{key:"toggle",value:function(){if(this.disabled||a(this).hasClass(l.DISABLED))return!1;var c=b._getParentFromElement(this),d=a(c).hasClass(l.OPEN);if(b._clearMenus(),d)return!1;if("ontouchstart"in document.documentElement&&!a(c).closest(m.NAVBAR_NAV).length){var e=document.createElement("div");e.className=l.BACKDROP,a(e).insertBefore(this),a(e).on("click",b._clearMenus)}var f={relatedTarget:this},g=a.Event(k.SHOW,f);return a(c).trigger(g),g.isDefaultPrevented()?!1:(this.focus(),this.setAttribute("aria-expanded","true"),a(c).toggleClass(l.OPEN),a(c).trigger(a.Event(k.SHOWN,f)),!1)}},{key:"dispose",value:function(){a.removeData(this._element,g),a(this._element).off(h),this._element=null}},{key:"_addEventListeners",value:function(){a(this._element).on(k.CLICK,this.toggle)}}],[{key:"_jQueryInterface",value:function(c){return this.each(function(){var d=a(this).data(g);if(d||a(this).data(g,d=new b(this)),"string"==typeof c){if(void 0===d[c])throw new Error('No method named "'+c+'"');d[c].call(this)}})}},{key:"_clearMenus",value:function(c){if(!c||3!==c.which){var d=a(m.BACKDROP)[0];d&&d.parentNode.removeChild(d);for(var e=a.makeArray(a(m.DATA_TOGGLE)),f=0;f<e.length;f++){var g=b._getParentFromElement(e[f]),h={relatedTarget:e[f]};if(a(g).hasClass(l.OPEN)&&!(c&&"click"===c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(g,c.target))){var i=a.Event(k.HIDE,h);a(g).trigger(i),i.isDefaultPrevented()||(e[f].setAttribute("aria-expanded","false"),a(g).removeClass(l.OPEN).trigger(a.Event(k.HIDDEN,h)))}}}}},{key:"_getParentFromElement",value:function(b){var c=void 0,d=f.getSelectorFromElement(b);return d&&(c=a(d)[0]),c||b.parentNode}},{key:"_dataApiKeydownHandler",value:function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)&&(c.preventDefault(),c.stopPropagation(),!this.disabled&&!a(this).hasClass(l.DISABLED))){var d=b._getParentFromElement(this),e=a(d).hasClass(l.OPEN);if(!e&&27!==c.which||e&&27===c.which){if(27===c.which){var f=a(d).find(m.DATA_TOGGLE)[0];a(f).trigger("focus")}return void a(this).trigger("click")}var g=a.makeArray(a(m.VISIBLE_ITEMS));if(g=g.filter(function(a){return a.offsetWidth||a.offsetHeight}),g.length){var h=g.indexOf(c.target);38===c.which&&h>0&&h--,40===c.which&&h<g.length-1&&h++,~h||(h=0),g[h].focus()}}}},{key:"VERSION",get:function(){return d}}]),b}();return a(document).on(k.KEYDOWN_DATA_API,m.DATA_TOGGLE,n._dataApiKeydownHandler).on(k.KEYDOWN_DATA_API,m.ROLE_MENU,n._dataApiKeydownHandler).on(k.KEYDOWN_DATA_API,m.ROLE_LISTBOX,n._dataApiKeydownHandler).on(k.CLICK_DATA_API,n._clearMenus).on(k.CLICK_DATA_API,m.DATA_TOGGLE,n.prototype.toggle).on(k.CLICK_DATA_API,m.FORM_CHILD,function(a){a.stopPropagation()}),a.fn[b]=n._jQueryInterface,a.fn[b].Constructor=n,a.fn[b].noConflict=function(){return a.fn[b]=j,n._jQueryInterface},n}(jQuery),function(a){var b="modal",d="4.0.0-alpha",g="bs.modal",h="."+g,i=".data-api",j=a.fn[b],k=300,l=150,m={backdrop:!0,keyboard:!0,focus:!0,show:!0},n={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},o={HIDE:"hide"+h,HIDDEN:"hidden"+h,SHOW:"show"+h,SHOWN:"shown"+h,FOCUSIN:"focusin"+h,RESIZE:"resize"+h,CLICK_DISMISS:"click.dismiss"+h,KEYDOWN_DISMISS:"keydown.dismiss"+h,MOUSEUP_DISMISS:"mouseup.dismiss"+h,MOUSEDOWN_DISMISS:"mousedown.dismiss"+h,CLICK_DATA_API:"click"+h+i},p={SCROLLBAR_MEASURER:"modal-scrollbar-measure",BACKDROP:"modal-backdrop",OPEN:"modal-open",FADE:"fade",IN:"in"},q={DIALOG:".modal-dialog",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".navbar-fixed-top, .navbar-fixed-bottom, .is-fixed"},r=function(){function i(b,d){c(this,i),this._config=this._getConfig(d),this._element=b,this._dialog=a(b).find(q.DIALOG)[0],this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._originalBodyPadding=0,this._scrollbarWidth=0}return e(i,[{key:"toggle",value:function(a){return this._isShown?this.hide():this.show(a)}},{key:"show",value:function(b){var c=this,d=a.Event(o.SHOW,{relatedTarget:b});a(this._element).trigger(d),this._isShown||d.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),a(document.body).addClass(p.OPEN),this._setEscapeEvent(),this._setResizeEvent(),a(this._element).on(o.CLICK_DISMISS,q.DATA_DISMISS,a.proxy(this.hide,this)),a(this._dialog).on(o.MOUSEDOWN_DISMISS,function(){a(c._element).one(o.MOUSEUP_DISMISS,function(b){a(b.target).is(c._element)&&(c._ignoreBackdropClick=!0)})}),this._showBackdrop(a.proxy(this._showElement,this,b)))}},{key:"hide",value:function(b){b&&b.preventDefault();var c=a.Event(o.HIDE);a(this._element).trigger(c),this._isShown&&!c.isDefaultPrevented()&&(this._isShown=!1,this._setEscapeEvent(),this._setResizeEvent(),a(document).off(o.FOCUSIN),a(this._element).removeClass(p.IN),a(this._element).off(o.CLICK_DISMISS),a(this._dialog).off(o.MOUSEDOWN_DISMISS),f.supportsTransitionEnd()&&a(this._element).hasClass(p.FADE)?a(this._element).one(f.TRANSITION_END,a.proxy(this._hideModal,this)).emulateTransitionEnd(k):this._hideModal())}},{key:"dispose",value:function(){a.removeData(this._element,g),a(window).off(h),a(document).off(h),a(this._element).off(h),a(this._backdrop).off(h),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._originalBodyPadding=null,this._scrollbarWidth=null}},{key:"_getConfig",value:function(c){return c=a.extend({},m,c),f.typeCheckConfig(b,c,n),c}},{key:"_showElement",value:function(b){var c=this,d=f.supportsTransitionEnd()&&a(this._element).hasClass(p.FADE);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.scrollTop=0,d&&f.reflow(this._element),a(this._element).addClass(p.IN),this._config.focus&&this._enforceFocus();var e=a.Event(o.SHOWN,{relatedTarget:b}),g=function(){c._config.focus&&c._element.focus(),a(c._element).trigger(e)};d?a(this._dialog).one(f.TRANSITION_END,g).emulateTransitionEnd(k):g()}},{key:"_enforceFocus",value:function(){var b=this;a(document).off(o.FOCUSIN).on(o.FOCUSIN,function(c){b._element===c.target||a(b._element).has(c.target).length||b._element.focus()})}},{key:"_setEscapeEvent",value:function(){var b=this;this._isShown&&this._config.keyboard?a(this._element).on(o.KEYDOWN_DISMISS,function(a){27===a.which&&b.hide()}):this._isShown||a(this._element).off(o.KEYDOWN_DISMISS)}},{key:"_setResizeEvent",value:function(){this._isShown?a(window).on(o.RESIZE,a.proxy(this._handleUpdate,this)):a(window).off(o.RESIZE)}},{key:"_hideModal",value:function(){var b=this;this._element.style.display="none",this._showBackdrop(function(){a(document.body).removeClass(p.OPEN),b._resetAdjustments(),b._resetScrollbar(),a(b._element).trigger(o.HIDDEN)})}},{key:"_removeBackdrop",value:function(){this._backdrop&&(a(this._backdrop).remove(),this._backdrop=null)}},{key:"_showBackdrop",value:function(b){var c=this,d=a(this._element).hasClass(p.FADE)?p.FADE:"";if(this._isShown&&this._config.backdrop){var e=f.supportsTransitionEnd()&&d;if(this._backdrop=document.createElement("div"),this._backdrop.className=p.BACKDROP,d&&a(this._backdrop).addClass(d),a(this._backdrop).appendTo(document.body),a(this._element).on(o.CLICK_DISMISS,function(a){return c._ignoreBackdropClick?void(c._ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"===c._config.backdrop?c._element.focus():c.hide()))}),e&&f.reflow(this._backdrop),a(this._backdrop).addClass(p.IN),!b)return;if(!e)return void b();a(this._backdrop).one(f.TRANSITION_END,b).emulateTransitionEnd(l)}else if(!this._isShown&&this._backdrop){a(this._backdrop).removeClass(p.IN);var g=function(){c._removeBackdrop(),b&&b()};f.supportsTransitionEnd()&&a(this._element).hasClass(p.FADE)?a(this._backdrop).one(f.TRANSITION_END,g).emulateTransitionEnd(l):g()}else b&&b()}},{key:"_handleUpdate",value:function(){this._adjustDialog()}},{key:"_adjustDialog",value:function(){var a=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&a&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!a&&(this._element.style.paddingRight=this._scrollbarWidth+"px~")}},{key:"_resetAdjustments",value:function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}},{key:"_checkScrollbar",value:function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this._isBodyOverflowing=document.body.clientWidth<a,this._scrollbarWidth=this._getScrollbarWidth()}},{key:"_setScrollbar",value:function(){var b=parseInt(a(q.FIXED_CONTENT).css("padding-right")||0,10);this._originalBodyPadding=document.body.style.paddingRight||"",this._isBodyOverflowing&&(document.body.style.paddingRight=b+this._scrollbarWidth+"px")}},{key:"_resetScrollbar",value:function(){document.body.style.paddingRight=this._originalBodyPadding}},{key:"_getScrollbarWidth",value:function(){var a=document.createElement("div");a.className=p.SCROLLBAR_MEASURER,document.body.appendChild(a);var b=a.offsetWidth-a.clientWidth;return document.body.removeChild(a),b}}],[{key:"_jQueryInterface",value:function(b,c){return this.each(function(){var d=a(this).data(g),e=a.extend({},i.Default,a(this).data(),"object"==typeof b&&b);if(d||(d=new i(this,e),a(this).data(g,d)),"string"==typeof b){if(void 0===d[b])throw new Error('No method named "'+b+'"');d[b](c)}else e.show&&d.show(c)})}},{key:"VERSION",get:function(){return d}},{key:"Default",get:function(){return m}}]),i}();return a(document).on(o.CLICK_DATA_API,q.DATA_TOGGLE,function(b){var c=this,d=void 0,e=f.getSelectorFromElement(this);e&&(d=a(e)[0]);var h=a(d).data(g)?"toggle":a.extend({},a(d).data(),a(this).data());"A"===this.tagName&&b.preventDefault();var i=a(d).one(o.SHOW,function(b){b.isDefaultPrevented()||i.one(o.HIDDEN,function(){a(c).is(":visible")&&c.focus()})});r._jQueryInterface.call(a(d),h,this)}),a.fn[b]=r._jQueryInterface,a.fn[b].Constructor=r,a.fn[b].noConflict=function(){return a.fn[b]=j,r._jQueryInterface},r}(jQuery),function(a){var b="scrollspy",d="4.0.0-alpha",g="bs.scrollspy",h="."+g,i=".data-api",j=a.fn[b],k={offset:10,method:"auto",target:""},l={offset:"number",method:"string",target:"(string|element)"},m={ACTIVATE:"activate"+h,SCROLL:"scroll"+h,LOAD_DATA_API:"load"+h+i},n={DROPDOWN_ITEM:"dropdown-item",DROPDOWN_MENU:"dropdown-menu",NAV_LINK:"nav-link",NAV:"nav",ACTIVE:"active"},o={DATA_SPY:'[data-spy="scroll"]',ACTIVE:".active",LIST_ITEM:".list-item",LI:"li",LI_DROPDOWN:"li.dropdown",NAV_LINKS:".nav-link",DROPDOWN:".dropdown",DROPDOWN_ITEMS:".dropdown-item",DROPDOWN_TOGGLE:".dropdown-toggle"},p={OFFSET:"offset",POSITION:"position"},q=function(){function i(b,d){c(this,i),this._element=b,this._scrollElement="BODY"===b.tagName?window:b,this._config=this._getConfig(d),this._selector=this._config.target+" "+o.NAV_LINKS+","+(this._config.target+" "+o.DROPDOWN_ITEMS),this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,a(this._scrollElement).on(m.SCROLL,a.proxy(this._process,this)),this.refresh(),this._process()}return e(i,[{key:"refresh",value:function(){var b=this,c=this._scrollElement!==this._scrollElement.window?p.POSITION:p.OFFSET,d="auto"===this._config.method?c:this._config.method,e=d===p.POSITION?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight();var g=a.makeArray(a(this._selector));g.map(function(b){var c=void 0,g=f.getSelectorFromElement(b);return g&&(c=a(g)[0]),c&&(c.offsetWidth||c.offsetHeight)?[a(c)[d]().top+e,g]:void 0}).filter(function(a){return a}).sort(function(a,b){return a[0]-b[0]}).forEach(function(a){b._offsets.push(a[0]),b._targets.push(a[1])})}},{key:"dispose",value:function(){a.removeData(this._element,g),a(this._scrollElement).off(h),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null}},{key:"_getConfig",value:function(c){if(c=a.extend({},k,c),"string"!=typeof c.target){var d=a(c.target).attr("id");d||(d=f.getUID(b),a(c.target).attr("id",d)),c.target="#"+d}return f.typeCheckConfig(b,c,l),c}},{key:"_getScrollTop",value:function(){return this._scrollElement===window?this._scrollElement.scrollY:this._scrollElement.scrollTop}},{key:"_getScrollHeight",value:function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}},{key:"_process",value:function(){var a=this._getScrollTop()+this._config.offset,b=this._getScrollHeight(),c=this._config.offset+b-this._scrollElement.offsetHeight;if(this._scrollHeight!==b&&this.refresh(),a>=c){var d=this._targets[this._targets.length-1];this._activeTarget!==d&&this._activate(d)}if(this._activeTarget&&a<this._offsets[0])return this._activeTarget=null,void this._clear();for(var e=this._offsets.length;e--;){var f=this._activeTarget!==this._targets[e]&&a>=this._offsets[e]&&(void 0===this._offsets[e+1]||a<this._offsets[e+1]);f&&this._activate(this._targets[e])}}},{key:"_activate",value:function(b){this._activeTarget=b,this._clear();var c=this._selector.split(",");c=c.map(function(a){return a+'[data-target="'+b+'"],'+(a+'[href="'+b+'"]')});var d=a(c.join(","));d.hasClass(n.DROPDOWN_ITEM)?(d.closest(o.DROPDOWN).find(o.DROPDOWN_TOGGLE).addClass(n.ACTIVE),d.addClass(n.ACTIVE)):d.parents(o.LI).find(o.NAV_LINKS).addClass(n.ACTIVE),a(this._scrollElement).trigger(m.ACTIVATE,{relatedTarget:b})}},{key:"_clear",value:function(){a(this._selector).filter(o.ACTIVE).removeClass(n.ACTIVE)}}],[{key:"_jQueryInterface",value:function(b){return this.each(function(){var c=a(this).data(g),d="object"==typeof b&&b||null;if(c||(c=new i(this,d),a(this).data(g,c)),"string"==typeof b){if(void 0===c[b])throw new Error('No method named "'+b+'"');c[b]()}})}},{key:"VERSION",get:function(){return d}},{key:"Default",get:function(){return k}}]),i}();return a(window).on(m.LOAD_DATA_API,function(){for(var b=a.makeArray(a(o.DATA_SPY)),c=b.length;c--;){var d=a(b[c]);q._jQueryInterface.call(d,d.data())}}),a.fn[b]=q._jQueryInterface,a.fn[b].Constructor=q,a.fn[b].noConflict=function(){return a.fn[b]=j,q._jQueryInterface},q}(jQuery),function(a){var b="tab",d="4.0.0-alpha",g="bs.tab",h="."+g,i=".data-api",j=a.fn[b],k=150,l={HIDE:"hide"+h,HIDDEN:"hidden"+h,SHOW:"show"+h,SHOWN:"shown"+h,CLICK_DATA_API:"click"+h+i},m={DROPDOWN_MENU:"dropdown-menu",ACTIVE:"active",FADE:"fade",IN:"in"},n={A:"a",LI:"li",DROPDOWN:".dropdown",UL:"ul:not(.dropdown-menu)",FADE_CHILD:"> .nav-item .fade, > .fade",ACTIVE:".active",ACTIVE_CHILD:"> .nav-item > .active, > .active",
DATA_TOGGLE:'[data-toggle="tab"], [data-toggle="pill"]',DROPDOWN_TOGGLE:".dropdown-toggle",DROPDOWN_ACTIVE_CHILD:"> .dropdown-menu .active"},o=function(){function b(a){c(this,b),this._element=a}return e(b,[{key:"show",value:function(){var b=this;if(!this._element.parentNode||this._element.parentNode.nodeType!==Node.ELEMENT_NODE||!a(this._element).hasClass(m.ACTIVE)){var c=void 0,d=void 0,e=a(this._element).closest(n.UL)[0],g=f.getSelectorFromElement(this._element);e&&(d=a.makeArray(a(e).find(n.ACTIVE)),d=d[d.length-1]);var h=a.Event(l.HIDE,{relatedTarget:this._element}),i=a.Event(l.SHOW,{relatedTarget:d});if(d&&a(d).trigger(h),a(this._element).trigger(i),!i.isDefaultPrevented()&&!h.isDefaultPrevented()){g&&(c=a(g)[0]),this._activate(this._element,e);var j=function(){var c=a.Event(l.HIDDEN,{relatedTarget:b._element}),e=a.Event(l.SHOWN,{relatedTarget:d});a(d).trigger(c),a(b._element).trigger(e)};c?this._activate(c,c.parentNode,j):j()}}}},{key:"dispose",value:function(){a.removeClass(this._element,g),this._element=null}},{key:"_activate",value:function(b,c,d){var e=a(c).find(n.ACTIVE_CHILD)[0],g=d&&f.supportsTransitionEnd()&&(e&&a(e).hasClass(m.FADE)||Boolean(a(c).find(n.FADE_CHILD)[0])),h=a.proxy(this._transitionComplete,this,b,e,g,d);e&&g?a(e).one(f.TRANSITION_END,h).emulateTransitionEnd(k):h(),e&&a(e).removeClass(m.IN)}},{key:"_transitionComplete",value:function(b,c,d,e){if(c){a(c).removeClass(m.ACTIVE);var g=a(c).find(n.DROPDOWN_ACTIVE_CHILD)[0];g&&a(g).removeClass(m.ACTIVE),c.setAttribute("aria-expanded",!1)}if(a(b).addClass(m.ACTIVE),b.setAttribute("aria-expanded",!0),d?(f.reflow(b),a(b).addClass(m.IN)):a(b).removeClass(m.FADE),b.parentNode&&a(b.parentNode).hasClass(m.DROPDOWN_MENU)){var h=a(b).closest(n.DROPDOWN)[0];h&&a(h).find(n.DROPDOWN_TOGGLE).addClass(m.ACTIVE),b.setAttribute("aria-expanded",!0)}e&&e()}}],[{key:"_jQueryInterface",value:function(c){return this.each(function(){var d=a(this),e=d.data(g);if(e||(e=e=new b(this),d.data(g,e)),"string"==typeof c){if(void 0===e[c])throw new Error('No method named "'+c+'"');e[c]()}})}},{key:"VERSION",get:function(){return d}}]),b}();return a(document).on(l.CLICK_DATA_API,n.DATA_TOGGLE,function(b){b.preventDefault(),o._jQueryInterface.call(a(this),"show")}),a.fn[b]=o._jQueryInterface,a.fn[b].Constructor=o,a.fn[b].noConflict=function(){return a.fn[b]=j,o._jQueryInterface},o}(jQuery),function(a){if(void 0===window.Tether)throw new Error("Bootstrap tooltips require Tether (http://github.hubspot.com/tether/)");var b="tooltip",d="4.0.0-alpha",g="bs.tooltip",h="."+g,i=a.fn[b],j=150,k="bs-tether",l={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:"0 0",constraints:[]},m={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"string",constraints:"array"},n={TOP:"bottom center",RIGHT:"middle left",BOTTOM:"top center",LEFT:"middle right"},o={IN:"in",OUT:"out"},p={HIDE:"hide"+h,HIDDEN:"hidden"+h,SHOW:"show"+h,SHOWN:"shown"+h,INSERTED:"inserted"+h,CLICK:"click"+h,FOCUSIN:"focusin"+h,FOCUSOUT:"focusout"+h,MOUSEENTER:"mouseenter"+h,MOUSELEAVE:"mouseleave"+h},q={FADE:"fade",IN:"in"},r={TOOLTIP:".tooltip",TOOLTIP_INNER:".tooltip-inner"},s={element:!1,enabled:!1},t={HOVER:"hover",FOCUS:"focus",CLICK:"click",MANUAL:"manual"},u=function(){function i(a,b){c(this,i),this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._tether=null,this.element=a,this.config=this._getConfig(b),this.tip=null,this._setListeners()}return e(i,[{key:"enable",value:function(){this._isEnabled=!0}},{key:"disable",value:function(){this._isEnabled=!1}},{key:"toggleEnabled",value:function(){this._isEnabled=!this._isEnabled}},{key:"toggle",value:function(b){if(b){var c=this.constructor.DATA_KEY,d=a(b.currentTarget).data(c);d||(d=new this.constructor(b.currentTarget,this._getDelegateConfig()),a(b.currentTarget).data(c,d)),d._activeTrigger.click=!d._activeTrigger.click,d._isWithActiveTrigger()?d._enter(null,d):d._leave(null,d)}else{if(a(this.getTipElement()).hasClass(q.IN))return void this._leave(null,this);this._enter(null,this)}}},{key:"dispose",value:function(){clearTimeout(this._timeout),this.cleanupTether(),a.removeData(this.element,this.constructor.DATA_KEY),a(this.element).off(this.constructor.EVENT_KEY),this.tip&&a(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,this._tether=null,this.element=null,this.config=null,this.tip=null}},{key:"show",value:function(){var b=this,c=a.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){a(this.element).trigger(c);var d=a.contains(this.element.ownerDocument.documentElement,this.element);if(c.isDefaultPrevented()||!d)return;var e=this.getTipElement(),g=f.getUID(this.constructor.NAME);e.setAttribute("id",g),this.element.setAttribute("aria-describedby",g),this.setContent(),this.config.animation&&a(e).addClass(q.FADE);var h="function"==typeof this.config.placement?this.config.placement.call(this,e,this.element):this.config.placement,j=this._getAttachment(h);a(e).data(this.constructor.DATA_KEY,this).appendTo(document.body),a(this.element).trigger(this.constructor.Event.INSERTED),this._tether=new Tether({attachment:j,element:e,target:this.element,classes:s,classPrefix:k,offset:this.config.offset,constraints:this.config.constraints,addTargetClasses:!1}),f.reflow(e),this._tether.position(),a(e).addClass(q.IN);var l=function(){var c=b._hoverState;b._hoverState=null,a(b.element).trigger(b.constructor.Event.SHOWN),c===o.OUT&&b._leave(null,b)};if(f.supportsTransitionEnd()&&a(this.tip).hasClass(q.FADE))return void a(this.tip).one(f.TRANSITION_END,l).emulateTransitionEnd(i._TRANSITION_DURATION);l()}}},{key:"hide",value:function(b){var c=this,d=this.getTipElement(),e=a.Event(this.constructor.Event.HIDE),g=function(){c._hoverState!==o.IN&&d.parentNode&&d.parentNode.removeChild(d),c.element.removeAttribute("aria-describedby"),a(c.element).trigger(c.constructor.Event.HIDDEN),c.cleanupTether(),b&&b()};a(this.element).trigger(e),e.isDefaultPrevented()||(a(d).removeClass(q.IN),f.supportsTransitionEnd()&&a(this.tip).hasClass(q.FADE)?a(d).one(f.TRANSITION_END,g).emulateTransitionEnd(j):g(),this._hoverState="")}},{key:"isWithContent",value:function(){return Boolean(this.getTitle())}},{key:"getTipElement",value:function(){return this.tip=this.tip||a(this.config.template)[0]}},{key:"setContent",value:function(){var b=a(this.getTipElement());this.setElementContent(b.find(r.TOOLTIP_INNER),this.getTitle()),b.removeClass(q.FADE).removeClass(q.IN),this.cleanupTether()}},{key:"setElementContent",value:function(b,c){var d=this.config.html;"object"==typeof c&&(c.nodeType||c.jquery)?d?a(c).parent().is(b)||b.empty().append(c):b.text(a(c).text()):b[d?"html":"text"](c)}},{key:"getTitle",value:function(){var a=this.element.getAttribute("data-original-title");return a||(a="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),a}},{key:"cleanupTether",value:function(){this._tether&&this._tether.destroy()}},{key:"_getAttachment",value:function(a){return n[a.toUpperCase()]}},{key:"_setListeners",value:function(){var b=this,c=this.config.trigger.split(" ");c.forEach(function(c){if("click"===c)a(b.element).on(b.constructor.Event.CLICK,b.config.selector,a.proxy(b.toggle,b));else if(c!==t.MANUAL){var d=c===t.HOVER?b.constructor.Event.MOUSEENTER:b.constructor.Event.FOCUSIN,e=c===t.HOVER?b.constructor.Event.MOUSELEAVE:b.constructor.Event.FOCUSOUT;a(b.element).on(d,b.config.selector,a.proxy(b._enter,b)).on(e,b.config.selector,a.proxy(b._leave,b))}}),this.config.selector?this.config=a.extend({},this.config,{trigger:"manual",selector:""}):this._fixTitle()}},{key:"_fixTitle",value:function(){var a=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==a)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))}},{key:"_enter",value:function(b,c){var d=this.constructor.DATA_KEY;return c=c||a(b.currentTarget).data(d),c||(c=new this.constructor(b.currentTarget,this._getDelegateConfig()),a(b.currentTarget).data(d,c)),b&&(c._activeTrigger["focusin"===b.type?t.FOCUS:t.HOVER]=!0),a(c.getTipElement()).hasClass(q.IN)||c._hoverState===o.IN?void(c._hoverState=o.IN):(clearTimeout(c._timeout),c._hoverState=o.IN,c.config.delay&&c.config.delay.show?void(c._timeout=setTimeout(function(){c._hoverState===o.IN&&c.show()},c.config.delay.show)):void c.show())}},{key:"_leave",value:function(b,c){var d=this.constructor.DATA_KEY;return c=c||a(b.currentTarget).data(d),c||(c=new this.constructor(b.currentTarget,this._getDelegateConfig()),a(b.currentTarget).data(d,c)),b&&(c._activeTrigger["focusout"===b.type?t.FOCUS:t.HOVER]=!1),c._isWithActiveTrigger()?void 0:(clearTimeout(c._timeout),c._hoverState=o.OUT,c.config.delay&&c.config.delay.hide?void(c._timeout=setTimeout(function(){c._hoverState===o.OUT&&c.hide()},c.config.delay.hide)):void c.hide())}},{key:"_isWithActiveTrigger",value:function(){for(var a in this._activeTrigger)if(this._activeTrigger[a])return!0;return!1}},{key:"_getConfig",value:function(c){return c=a.extend({},this.constructor.Default,a(this.element).data(),c),c.delay&&"number"==typeof c.delay&&(c.delay={show:c.delay,hide:c.delay}),f.typeCheckConfig(b,c,this.constructor.DefaultType),c}},{key:"_getDelegateConfig",value:function(){var a={};if(this.config)for(var b in this.config)this.constructor.Default[b]!==this.config[b]&&(a[b]=this.config[b]);return a}}],[{key:"_jQueryInterface",value:function(b){return this.each(function(){var c=a(this).data(g),d="object"==typeof b?b:null;if((c||!/destroy|hide/.test(b))&&(c||(c=new i(this,d),a(this).data(g,c)),"string"==typeof b)){if(void 0===c[b])throw new Error('No method named "'+b+'"');c[b]()}})}},{key:"VERSION",get:function(){return d}},{key:"Default",get:function(){return l}},{key:"NAME",get:function(){return b}},{key:"DATA_KEY",get:function(){return g}},{key:"Event",get:function(){return p}},{key:"EVENT_KEY",get:function(){return h}},{key:"DefaultType",get:function(){return m}}]),i}();return a.fn[b]=u._jQueryInterface,a.fn[b].Constructor=u,a.fn[b].noConflict=function(){return a.fn[b]=i,u._jQueryInterface},u}(jQuery));(function(a){var f="popover",h="4.0.0-alpha",i="bs.popover",j="."+i,k=a.fn[f],l=a.extend({},g.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),m=a.extend({},g.DefaultType,{content:"(string|element|function)"}),n={FADE:"fade",IN:"in"},o={TITLE:".popover-title",CONTENT:".popover-content",ARROW:".popover-arrow"},p={HIDE:"hide"+j,HIDDEN:"hidden"+j,SHOW:"show"+j,SHOWN:"shown"+j,INSERTED:"inserted"+j,CLICK:"click"+j,FOCUSIN:"focusin"+j,FOCUSOUT:"focusout"+j,MOUSEENTER:"mouseenter"+j,MOUSELEAVE:"mouseleave"+j},q=function(g){function k(){c(this,k),d(Object.getPrototypeOf(k.prototype),"constructor",this).apply(this,arguments)}return b(k,g),e(k,[{key:"isWithContent",value:function(){return this.getTitle()||this._getContent()}},{key:"getTipElement",value:function(){return this.tip=this.tip||a(this.config.template)[0]}},{key:"setContent",value:function(){var b=a(this.getTipElement());this.setElementContent(b.find(o.TITLE),this.getTitle()),this.setElementContent(b.find(o.CONTENT),this._getContent()),b.removeClass(n.FADE).removeClass(n.IN),this.cleanupTether()}},{key:"_getContent",value:function(){return this.element.getAttribute("data-content")||("function"==typeof this.config.content?this.config.content.call(this.element):this.config.content)}}],[{key:"_jQueryInterface",value:function(b){return this.each(function(){var c=a(this).data(i),d="object"==typeof b?b:null;if((c||!/destroy|hide/.test(b))&&(c||(c=new k(this,d),a(this).data(i,c)),"string"==typeof b)){if(void 0===c[b])throw new Error('No method named "'+b+'"');c[b]()}})}},{key:"VERSION",get:function(){return h}},{key:"Default",get:function(){return l}},{key:"NAME",get:function(){return f}},{key:"DATA_KEY",get:function(){return i}},{key:"Event",get:function(){return p}},{key:"EVENT_KEY",get:function(){return j}},{key:"DefaultType",get:function(){return m}}]),k}(g);return a.fn[f]=q._jQueryInterface,a.fn[f].Constructor=q,a.fn[f].noConflict=function(){return a.fn[f]=k,q._jQueryInterface},q})(jQuery)}(jQuery);
/*
 AngularJS v1.5.5
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/

(function(v){'use strict';function O(a){return function(){var b=arguments[0],d;d="["+(a?a+":":"")+b+"] http://errors.angularjs.org/1.5.5/"+(a?a+"/":"")+b;for(b=1;b<arguments.length;b++){d=d+(1==b?"?":"&")+"p"+(b-1)+"=";var c=encodeURIComponent,e;e=arguments[b];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;d+=c(e)}return Error(d)}}function ya(a){if(null==a||Va(a))return!1;if(K(a)||F(a)||B&&a instanceof B)return!0;
var b="length"in Object(a)&&a.length;return Q(b)&&(0<=b&&(b-1 in a||a instanceof Array)||"function"==typeof a.item)}function q(a,b,d){var c,e;if(a)if(E(a))for(c in a)"prototype"==c||"length"==c||"name"==c||a.hasOwnProperty&&!a.hasOwnProperty(c)||b.call(d,a[c],c,a);else if(K(a)||ya(a)){var f="object"!==typeof a;c=0;for(e=a.length;c<e;c++)(f||c in a)&&b.call(d,a[c],c,a)}else if(a.forEach&&a.forEach!==q)a.forEach(b,d,a);else if(oc(a))for(c in a)b.call(d,a[c],c,a);else if("function"===typeof a.hasOwnProperty)for(c in a)a.hasOwnProperty(c)&&
b.call(d,a[c],c,a);else for(c in a)ua.call(a,c)&&b.call(d,a[c],c,a);return a}function pc(a,b,d){for(var c=Object.keys(a).sort(),e=0;e<c.length;e++)b.call(d,a[c[e]],c[e]);return c}function qc(a){return function(b,d){a(d,b)}}function Xd(){return++nb}function Nb(a,b,d){for(var c=a.$$hashKey,e=0,f=b.length;e<f;++e){var g=b[e];if(G(g)||E(g))for(var h=Object.keys(g),k=0,l=h.length;k<l;k++){var n=h[k],m=g[n];d&&G(m)?fa(m)?a[n]=new Date(m.valueOf()):Wa(m)?a[n]=new RegExp(m):m.nodeName?a[n]=m.cloneNode(!0):
Ob(m)?a[n]=m.clone():(G(a[n])||(a[n]=K(m)?[]:{}),Nb(a[n],[m],!0)):a[n]=m}}c?a.$$hashKey=c:delete a.$$hashKey;return a}function R(a){return Nb(a,za.call(arguments,1),!1)}function Yd(a){return Nb(a,za.call(arguments,1),!0)}function X(a){return parseInt(a,10)}function Pb(a,b){return R(Object.create(a),b)}function C(){}function Xa(a){return a}function da(a){return function(){return a}}function rc(a){return E(a.toString)&&a.toString!==ma}function y(a){return"undefined"===typeof a}function x(a){return"undefined"!==
typeof a}function G(a){return null!==a&&"object"===typeof a}function oc(a){return null!==a&&"object"===typeof a&&!sc(a)}function F(a){return"string"===typeof a}function Q(a){return"number"===typeof a}function fa(a){return"[object Date]"===ma.call(a)}function E(a){return"function"===typeof a}function Wa(a){return"[object RegExp]"===ma.call(a)}function Va(a){return a&&a.window===a}function Ya(a){return a&&a.$evalAsync&&a.$watch}function Da(a){return"boolean"===typeof a}function Zd(a){return a&&Q(a.length)&&
$d.test(ma.call(a))}function Ob(a){return!(!a||!(a.nodeName||a.prop&&a.attr&&a.find))}function ae(a){var b={};a=a.split(",");var d;for(d=0;d<a.length;d++)b[a[d]]=!0;return b}function va(a){return P(a.nodeName||a[0]&&a[0].nodeName)}function Za(a,b){var d=a.indexOf(b);0<=d&&a.splice(d,1);return d}function qa(a,b){function d(a,b){var d=b.$$hashKey,e;if(K(a)){e=0;for(var f=a.length;e<f;e++)b.push(c(a[e]))}else if(oc(a))for(e in a)b[e]=c(a[e]);else if(a&&"function"===typeof a.hasOwnProperty)for(e in a)a.hasOwnProperty(e)&&
(b[e]=c(a[e]));else for(e in a)ua.call(a,e)&&(b[e]=c(a[e]));d?b.$$hashKey=d:delete b.$$hashKey;return b}function c(a){if(!G(a))return a;var b=f.indexOf(a);if(-1!==b)return g[b];if(Va(a)||Ya(a))throw Aa("cpws");var b=!1,c=e(a);void 0===c&&(c=K(a)?[]:Object.create(sc(a)),b=!0);f.push(a);g.push(c);return b?d(a,c):c}function e(a){switch(ma.call(a)){case "[object Int8Array]":case "[object Int16Array]":case "[object Int32Array]":case "[object Float32Array]":case "[object Float64Array]":case "[object Uint8Array]":case "[object Uint8ClampedArray]":case "[object Uint16Array]":case "[object Uint32Array]":return new a.constructor(c(a.buffer));
case "[object ArrayBuffer]":if(!a.slice){var b=new ArrayBuffer(a.byteLength);(new Uint8Array(b)).set(new Uint8Array(a));return b}return a.slice(0);case "[object Boolean]":case "[object Number]":case "[object String]":case "[object Date]":return new a.constructor(a.valueOf());case "[object RegExp]":return b=new RegExp(a.source,a.toString().match(/[^\/]*$/)[0]),b.lastIndex=a.lastIndex,b;case "[object Blob]":return new a.constructor([a],{type:a.type})}if(E(a.cloneNode))return a.cloneNode(!0)}var f=[],
g=[];if(b){if(Zd(b)||"[object ArrayBuffer]"===ma.call(b))throw Aa("cpta");if(a===b)throw Aa("cpi");K(b)?b.length=0:q(b,function(a,d){"$$hashKey"!==d&&delete b[d]});f.push(a);g.push(b);return d(a,b)}return c(a)}function ha(a,b){if(K(a)){b=b||[];for(var d=0,c=a.length;d<c;d++)b[d]=a[d]}else if(G(a))for(d in b=b||{},a)if("$"!==d.charAt(0)||"$"!==d.charAt(1))b[d]=a[d];return b||a}function pa(a,b){if(a===b)return!0;if(null===a||null===b)return!1;if(a!==a&&b!==b)return!0;var d=typeof a,c;if(d==typeof b&&
"object"==d)if(K(a)){if(!K(b))return!1;if((d=a.length)==b.length){for(c=0;c<d;c++)if(!pa(a[c],b[c]))return!1;return!0}}else{if(fa(a))return fa(b)?pa(a.getTime(),b.getTime()):!1;if(Wa(a))return Wa(b)?a.toString()==b.toString():!1;if(Ya(a)||Ya(b)||Va(a)||Va(b)||K(b)||fa(b)||Wa(b))return!1;d=T();for(c in a)if("$"!==c.charAt(0)&&!E(a[c])){if(!pa(a[c],b[c]))return!1;d[c]=!0}for(c in b)if(!(c in d)&&"$"!==c.charAt(0)&&x(b[c])&&!E(b[c]))return!1;return!0}return!1}function $a(a,b,d){return a.concat(za.call(b,
d))}function tc(a,b){var d=2<arguments.length?za.call(arguments,2):[];return!E(b)||b instanceof RegExp?b:d.length?function(){return arguments.length?b.apply(a,$a(d,arguments,0)):b.apply(a,d)}:function(){return arguments.length?b.apply(a,arguments):b.call(a)}}function be(a,b){var d=b;"string"===typeof a&&"$"===a.charAt(0)&&"$"===a.charAt(1)?d=void 0:Va(b)?d="$WINDOW":b&&v.document===b?d="$DOCUMENT":Ya(b)&&(d="$SCOPE");return d}function ab(a,b){if(!y(a))return Q(b)||(b=b?2:null),JSON.stringify(a,be,
b)}function uc(a){return F(a)?JSON.parse(a):a}function vc(a,b){a=a.replace(ce,"");var d=Date.parse("Jan 01, 1970 00:00:00 "+a)/6E4;return isNaN(d)?b:d}function Qb(a,b,d){d=d?-1:1;var c=a.getTimezoneOffset();b=vc(b,c);d*=b-c;a=new Date(a.getTime());a.setMinutes(a.getMinutes()+d);return a}function wa(a){a=B(a).clone();try{a.empty()}catch(b){}var d=B("<div>").append(a).html();try{return a[0].nodeType===Ma?P(d):d.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+P(b)})}catch(c){return P(d)}}
function wc(a){try{return decodeURIComponent(a)}catch(b){}}function xc(a){var b={};q((a||"").split("&"),function(a){var c,e,f;a&&(e=a=a.replace(/\+/g,"%20"),c=a.indexOf("="),-1!==c&&(e=a.substring(0,c),f=a.substring(c+1)),e=wc(e),x(e)&&(f=x(f)?wc(f):!0,ua.call(b,e)?K(b[e])?b[e].push(f):b[e]=[b[e],f]:b[e]=f))});return b}function Rb(a){var b=[];q(a,function(a,c){K(a)?q(a,function(a){b.push(ja(c,!0)+(!0===a?"":"="+ja(a,!0)))}):b.push(ja(c,!0)+(!0===a?"":"="+ja(a,!0)))});return b.length?b.join("&"):""}
function ob(a){return ja(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ja(a,b){return encodeURIComponent(a).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,b?"%20":"+")}function de(a,b){var d,c,e=Na.length;for(c=0;c<e;++c)if(d=Na[c]+b,F(d=a.getAttribute(d)))return d;return null}function ee(a,b){var d,c,e={};q(Na,function(b){b+="app";!d&&a.hasAttribute&&a.hasAttribute(b)&&(d=a,c=a.getAttribute(b))});
q(Na,function(b){b+="app";var e;!d&&(e=a.querySelector("["+b.replace(":","\\:")+"]"))&&(d=e,c=e.getAttribute(b))});d&&(e.strictDi=null!==de(d,"strict-di"),b(d,c?[c]:[],e))}function yc(a,b,d){G(d)||(d={});d=R({strictDi:!1},d);var c=function(){a=B(a);if(a.injector()){var c=a[0]===v.document?"document":wa(a);throw Aa("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}b=b||[];b.unshift(["$provide",function(b){b.value("$rootElement",a)}]);d.debugInfoEnabled&&b.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);
b.unshift("ng");c=bb(b,d.strictDi);c.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;v&&e.test(v.name)&&(d.debugInfoEnabled=!0,v.name=v.name.replace(e,""));if(v&&!f.test(v.name))return c();v.name=v.name.replace(f,"");ea.resumeBootstrap=function(a){q(a,function(a){b.push(a)});return c()};E(ea.resumeDeferredBootstrap)&&ea.resumeDeferredBootstrap()}function fe(){v.name=
"NG_ENABLE_DEBUG_INFO!"+v.name;v.location.reload()}function ge(a){a=ea.element(a).injector();if(!a)throw Aa("test");return a.get("$$testability")}function zc(a,b){b=b||"_";return a.replace(he,function(a,c){return(c?b:"")+a.toLowerCase()})}function ie(){var a;if(!Ac){var b=pb();(Z=y(b)?v.jQuery:b?v[b]:void 0)&&Z.fn.on?(B=Z,R(Z.fn,{scope:Oa.scope,isolateScope:Oa.isolateScope,controller:Oa.controller,injector:Oa.injector,inheritedData:Oa.inheritedData}),a=Z.cleanData,Z.cleanData=function(b){for(var c,
e=0,f;null!=(f=b[e]);e++)(c=Z._data(f,"events"))&&c.$destroy&&Z(f).triggerHandler("$destroy");a(b)}):B=U;ea.element=B;Ac=!0}}function qb(a,b,d){if(!a)throw Aa("areq",b||"?",d||"required");return a}function Pa(a,b,d){d&&K(a)&&(a=a[a.length-1]);qb(E(a),b,"not a function, got "+(a&&"object"===typeof a?a.constructor.name||"Object":typeof a));return a}function Qa(a,b){if("hasOwnProperty"===a)throw Aa("badname",b);}function Bc(a,b,d){if(!b)return a;b=b.split(".");for(var c,e=a,f=b.length,g=0;g<f;g++)c=
b[g],a&&(a=(e=a)[c]);return!d&&E(a)?tc(e,a):a}function rb(a){for(var b=a[0],d=a[a.length-1],c,e=1;b!==d&&(b=b.nextSibling);e++)if(c||a[e]!==b)c||(c=B(za.call(a,0,e))),c.push(b);return c||a}function T(){return Object.create(null)}function je(a){function b(a,b,c){return a[b]||(a[b]=c())}var d=O("$injector"),c=O("ng");a=b(a,"angular",Object);a.$$minErr=a.$$minErr||O;return b(a,"module",function(){var a={};return function(f,g,h){if("hasOwnProperty"===f)throw c("badname","module");g&&a.hasOwnProperty(f)&&
(a[f]=null);return b(a,f,function(){function a(b,d,e,f){f||(f=c);return function(){f[e||"push"]([b,d,arguments]);return M}}function b(a,d){return function(b,e){e&&E(e)&&(e.$$moduleName=f);c.push([a,d,arguments]);return M}}if(!g)throw d("nomod",f);var c=[],e=[],r=[],N=a("$injector","invoke","push",e),M={_invokeQueue:c,_configBlocks:e,_runBlocks:r,requires:g,name:f,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide",
"constant","unshift"),decorator:b("$provide","decorator"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),component:b("$compileProvider","component"),config:N,run:function(a){r.push(a);return this}};h&&N(h);return M})}})}function ke(a){R(a,{bootstrap:yc,copy:qa,extend:R,merge:Yd,equals:pa,element:B,forEach:q,injector:bb,noop:C,bind:tc,toJson:ab,fromJson:uc,identity:Xa,isUndefined:y,
isDefined:x,isString:F,isFunction:E,isObject:G,isNumber:Q,isElement:Ob,isArray:K,version:le,isDate:fa,lowercase:P,uppercase:sb,callbacks:{counter:0},getTestability:ge,$$minErr:O,$$csp:Ea,reloadWithDebugInfo:fe});Sb=je(v);Sb("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:me});a.provider("$compile",Cc).directive({a:ne,input:Dc,textarea:Dc,form:oe,script:pe,select:qe,style:re,option:se,ngBind:te,ngBindHtml:ue,ngBindTemplate:ve,ngClass:we,ngClassEven:xe,ngClassOdd:ye,ngCloak:ze,ngController:Ae,
ngForm:Be,ngHide:Ce,ngIf:De,ngInclude:Ee,ngInit:Fe,ngNonBindable:Ge,ngPluralize:He,ngRepeat:Ie,ngShow:Je,ngStyle:Ke,ngSwitch:Le,ngSwitchWhen:Me,ngSwitchDefault:Ne,ngOptions:Oe,ngTransclude:Pe,ngModel:Qe,ngList:Re,ngChange:Se,pattern:Ec,ngPattern:Ec,required:Fc,ngRequired:Fc,minlength:Gc,ngMinlength:Gc,maxlength:Hc,ngMaxlength:Hc,ngValue:Te,ngModelOptions:Ue}).directive({ngInclude:Ve}).directive(tb).directive(Ic);a.provider({$anchorScroll:We,$animate:Xe,$animateCss:Ye,$$animateJs:Ze,$$animateQueue:$e,
$$AnimateRunner:af,$$animateAsyncRun:bf,$browser:cf,$cacheFactory:df,$controller:ef,$document:ff,$exceptionHandler:gf,$filter:Jc,$$forceReflow:hf,$interpolate:jf,$interval:kf,$http:lf,$httpParamSerializer:mf,$httpParamSerializerJQLike:nf,$httpBackend:of,$xhrFactory:pf,$location:qf,$log:rf,$parse:sf,$rootScope:tf,$q:uf,$$q:vf,$sce:wf,$sceDelegate:xf,$sniffer:yf,$templateCache:zf,$templateRequest:Af,$$testability:Bf,$timeout:Cf,$window:Df,$$rAF:Ef,$$jqLite:Ff,$$HashMap:Gf,$$cookieReader:Hf})}])}function cb(a){return a.replace(If,
function(a,d,c,e){return e?c.toUpperCase():c}).replace(Jf,"Moz$1")}function Kc(a){a=a.nodeType;return 1===a||!a||9===a}function Lc(a,b){var d,c,e=b.createDocumentFragment(),f=[];if(Tb.test(a)){d=d||e.appendChild(b.createElement("div"));c=(Kf.exec(a)||["",""])[1].toLowerCase();c=ia[c]||ia._default;d.innerHTML=c[1]+a.replace(Lf,"<$1></$2>")+c[2];for(c=c[0];c--;)d=d.lastChild;f=$a(f,d.childNodes);d=e.firstChild;d.textContent=""}else f.push(b.createTextNode(a));e.textContent="";e.innerHTML="";q(f,function(a){e.appendChild(a)});
return e}function Mc(a,b){var d=a.parentNode;d&&d.replaceChild(b,a);b.appendChild(a)}function U(a){if(a instanceof U)return a;var b;F(a)&&(a=V(a),b=!0);if(!(this instanceof U)){if(b&&"<"!=a.charAt(0))throw Ub("nosel");return new U(a)}if(b){b=v.document;var d;a=(d=Mf.exec(a))?[b.createElement(d[1])]:(d=Lc(a,b))?d.childNodes:[]}Nc(this,a)}function Vb(a){return a.cloneNode(!0)}function ub(a,b){b||db(a);if(a.querySelectorAll)for(var d=a.querySelectorAll("*"),c=0,e=d.length;c<e;c++)db(d[c])}function Oc(a,
b,d,c){if(x(c))throw Ub("offargs");var e=(c=vb(a))&&c.events,f=c&&c.handle;if(f)if(b){var g=function(b){var c=e[b];x(d)&&Za(c||[],d);x(d)&&c&&0<c.length||(a.removeEventListener(b,f,!1),delete e[b])};q(b.split(" "),function(a){g(a);wb[a]&&g(wb[a])})}else for(b in e)"$destroy"!==b&&a.removeEventListener(b,f,!1),delete e[b]}function db(a,b){var d=a.ng339,c=d&&eb[d];c&&(b?delete c.data[b]:(c.handle&&(c.events.$destroy&&c.handle({},"$destroy"),Oc(a)),delete eb[d],a.ng339=void 0))}function vb(a,b){var d=
a.ng339,d=d&&eb[d];b&&!d&&(a.ng339=d=++Nf,d=eb[d]={events:{},data:{},handle:void 0});return d}function Wb(a,b,d){if(Kc(a)){var c=x(d),e=!c&&b&&!G(b),f=!b;a=(a=vb(a,!e))&&a.data;if(c)a[b]=d;else{if(f)return a;if(e)return a&&a[b];R(a,b)}}}function xb(a,b){return a.getAttribute?-1<(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+b+" "):!1}function yb(a,b){b&&a.setAttribute&&q(b.split(" "),function(b){a.setAttribute("class",V((" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g,
" ").replace(" "+V(b)+" "," ")))})}function zb(a,b){if(b&&a.setAttribute){var d=(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");q(b.split(" "),function(a){a=V(a);-1===d.indexOf(" "+a+" ")&&(d+=a+" ")});a.setAttribute("class",V(d))}}function Nc(a,b){if(b)if(b.nodeType)a[a.length++]=b;else{var d=b.length;if("number"===typeof d&&b.window!==b){if(d)for(var c=0;c<d;c++)a[a.length++]=b[c]}else a[a.length++]=b}}function Pc(a,b){return Ab(a,"$"+(b||"ngController")+"Controller")}function Ab(a,
b,d){9==a.nodeType&&(a=a.documentElement);for(b=K(b)?b:[b];a;){for(var c=0,e=b.length;c<e;c++)if(x(d=B.data(a,b[c])))return d;a=a.parentNode||11===a.nodeType&&a.host}}function Qc(a){for(ub(a,!0);a.firstChild;)a.removeChild(a.firstChild)}function Bb(a,b){b||ub(a);var d=a.parentNode;d&&d.removeChild(a)}function Of(a,b){b=b||v;if("complete"===b.document.readyState)b.setTimeout(a);else B(b).on("load",a)}function Rc(a,b){var d=Cb[b.toLowerCase()];return d&&Sc[va(a)]&&d}function Pf(a,b){var d=function(c,
d){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=b[d||c.type],g=f?f.length:0;if(g){if(y(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};var k=f.specialHandlerWrapper||Qf;1<g&&(f=ha(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||k(a,c,f[l])}};d.elem=
a;return d}function Qf(a,b,d){d.call(a,b)}function Rf(a,b,d){var c=b.relatedTarget;c&&(c===a||Sf.call(a,c))||d.call(a,b)}function Ff(){this.$get=function(){return R(U,{hasClass:function(a,b){a.attr&&(a=a[0]);return xb(a,b)},addClass:function(a,b){a.attr&&(a=a[0]);return zb(a,b)},removeClass:function(a,b){a.attr&&(a=a[0]);return yb(a,b)}})}}function Fa(a,b){var d=a&&a.$$hashKey;if(d)return"function"===typeof d&&(d=a.$$hashKey()),d;d=typeof a;return d="function"==d||"object"==d&&null!==a?a.$$hashKey=
d+":"+(b||Xd)():d+":"+a}function Ra(a,b){if(b){var d=0;this.nextUid=function(){return++d}}q(a,this.put,this)}function Tc(a){a=Function.prototype.toString.call(a).replace(Tf,"");return a.match(Uf)||a.match(Vf)}function Wf(a){return(a=Tc(a))?"function("+(a[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function bb(a,b){function d(a){return function(b,c){if(G(b))q(b,qc(a));else return a(b,c)}}function c(a,b){Qa(a,"service");if(E(b)||K(b))b=r.instantiate(b);if(!b.$get)throw Ga("pget",a);return m[a+"Provider"]=
b}function e(a,b){return function(){var c=w.invoke(b,this);if(y(c))throw Ga("undef",a);return c}}function f(a,b,d){return c(a,{$get:!1!==d?e(a,b):b})}function g(a){qb(y(a)||K(a),"modulesToLoad","not an array");var b=[],c;q(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=r.get(e[0]);f[e[1]].apply(f,e[2])}}if(!n.get(a)){n.put(a,!0);try{F(a)?(c=Sb(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):E(a)?b.push(r.invoke(a)):K(a)?b.push(r.invoke(a)):
Pa(a,"module")}catch(e){throw K(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Ga("modulerr",a,e.stack||e.message||e);}}});return b}function h(a,c){function d(b,e){if(a.hasOwnProperty(b)){if(a[b]===k)throw Ga("cdep",b+" <- "+l.join(" <- "));return a[b]}try{return l.unshift(b),a[b]=k,a[b]=c(b,e)}catch(f){throw a[b]===k&&delete a[b],f;}finally{l.shift()}}function e(a,c,f){var g=[];a=bb.$$annotate(a,b,f);for(var h=0,k=a.length;h<k;h++){var l=a[h];
if("string"!==typeof l)throw Ga("itkn",l);g.push(c&&c.hasOwnProperty(l)?c[l]:d(l,f))}return g}return{invoke:function(a,b,c,d){"string"===typeof c&&(d=c,c=null);c=e(a,c,d);K(a)&&(a=a[a.length-1]);d=11>=Ca?!1:"function"===typeof a&&/^(?:class\s|constructor\()/.test(Function.prototype.toString.call(a));return d?(c.unshift(null),new (Function.prototype.bind.apply(a,c))):a.apply(b,c)},instantiate:function(a,b,c){var d=K(a)?a[a.length-1]:a;a=e(a,b,c);a.unshift(null);return new (Function.prototype.bind.apply(d,
a))},get:d,annotate:bb.$$annotate,has:function(b){return m.hasOwnProperty(b+"Provider")||a.hasOwnProperty(b)}}}b=!0===b;var k={},l=[],n=new Ra([],!0),m={$provide:{provider:d(c),factory:d(f),service:d(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:d(function(a,b){return f(a,da(b),!1)}),constant:d(function(a,b){Qa(a,"constant");m[a]=b;N[a]=b}),decorator:function(a,b){var c=r.get(a+"Provider"),d=c.$get;c.$get=function(){var a=w.invoke(d,c);return w.invoke(b,null,
{$delegate:a})}}}},r=m.$injector=h(m,function(a,b){ea.isString(b)&&l.push(b);throw Ga("unpr",l.join(" <- "));}),N={},M=h(N,function(a,b){var c=r.get(a+"Provider",b);return w.invoke(c.$get,c,void 0,a)}),w=M;m.$injectorProvider={$get:da(M)};var p=g(a),w=M.get("$injector");w.strictDi=b;q(p,function(a){a&&w.invoke(a)});return w}function We(){var a=!0;this.disableAutoScrolling=function(){a=!1};this.$get=["$window","$location","$rootScope",function(b,d,c){function e(a){var b=null;Array.prototype.some.call(a,
function(a){if("a"===va(a))return b=a,!0});return b}function f(a){if(a){a.scrollIntoView();var c;c=g.yOffset;E(c)?c=c():Ob(c)?(c=c[0],c="fixed"!==b.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):Q(c)||(c=0);c&&(a=a.getBoundingClientRect().top,b.scrollBy(0,a-c))}else b.scrollTo(0,0)}function g(a){a=F(a)?a:d.hash();var b;a?(b=h.getElementById(a))?f(b):(b=e(h.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var h=b.document;a&&c.$watch(function(){return d.hash()},function(a,b){a===
b&&""===a||Of(function(){c.$evalAsync(g)})});return g}]}function fb(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;K(a)&&(a=a.join(" "));K(b)&&(b=b.join(" "));return a+" "+b}function Xf(a){F(a)&&(a=a.split(" "));var b=T();q(a,function(a){a.length&&(b[a]=!0)});return b}function Ha(a){return G(a)?a:{}}function Yf(a,b,d,c){function e(a){try{a.apply(null,za.call(arguments,1))}finally{if(M--,0===M)for(;w.length;)try{w.pop()()}catch(b){d.error(b)}}}function f(){u=null;g();h()}function g(){p=I();
p=y(p)?null:p;pa(p,L)&&(p=L);L=p}function h(){if(t!==k.url()||H!==p)t=k.url(),H=p,q(J,function(a){a(k.url(),p)})}var k=this,l=a.location,n=a.history,m=a.setTimeout,r=a.clearTimeout,N={};k.isMock=!1;var M=0,w=[];k.$$completeOutstandingRequest=e;k.$$incOutstandingRequestCount=function(){M++};k.notifyWhenNoOutstandingRequests=function(a){0===M?a():w.push(a)};var p,H,t=l.href,z=b.find("base"),u=null,I=c.history?function(){try{return n.state}catch(a){}}:C;g();H=p;k.url=function(b,d,e){y(e)&&(e=null);l!==
a.location&&(l=a.location);n!==a.history&&(n=a.history);if(b){var f=H===e;if(t===b&&(!c.history||f))return k;var h=t&&Ia(t)===Ia(b);t=b;H=e;if(!c.history||h&&f){if(!h||u)u=b;d?l.replace(b):h?(d=l,e=b.indexOf("#"),e=-1===e?"":b.substr(e),d.hash=e):l.href=b;l.href!==b&&(u=b)}else n[d?"replaceState":"pushState"](e,"",b),g(),H=p;return k}return u||l.href.replace(/%27/g,"'")};k.state=function(){return p};var J=[],D=!1,L=null;k.onUrlChange=function(b){if(!D){if(c.history)B(a).on("popstate",f);B(a).on("hashchange",
f);D=!0}J.push(b);return b};k.$$applicationDestroyed=function(){B(a).off("hashchange popstate",f)};k.$$checkUrlChange=h;k.baseHref=function(){var a=z.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};k.defer=function(a,b){var c;M++;c=m(function(){delete N[c];e(a)},b||0);N[c]=!0;return c};k.defer.cancel=function(a){return N[a]?(delete N[a],r(a),e(C),!0):!1}}function cf(){this.$get=["$window","$log","$sniffer","$document",function(a,b,d,c){return new Yf(a,c,b,d)}]}function df(){this.$get=
function(){function a(a,c){function e(a){a!=m&&(r?r==a&&(r=a.n):r=a,f(a.n,a.p),f(a,m),m=a,m.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(a in b)throw O("$cacheFactory")("iid",a);var g=0,h=R({},c,{id:a}),k=T(),l=c&&c.capacity||Number.MAX_VALUE,n=T(),m=null,r=null;return b[a]={put:function(a,b){if(!y(b)){if(l<Number.MAX_VALUE){var c=n[a]||(n[a]={key:a});e(c)}a in k||g++;k[a]=b;g>l&&this.remove(r.key);return b}},get:function(a){if(l<Number.MAX_VALUE){var b=n[a];if(!b)return;e(b)}return k[a]},
remove:function(a){if(l<Number.MAX_VALUE){var b=n[a];if(!b)return;b==m&&(m=b.p);b==r&&(r=b.n);f(b.n,b.p);delete n[a]}a in k&&(delete k[a],g--)},removeAll:function(){k=T();g=0;n=T();m=r=null},destroy:function(){n=h=k=null;delete b[a]},info:function(){return R({},h,{size:g})}}}var b={};a.info=function(){var a={};q(b,function(b,e){a[e]=b.info()});return a};a.get=function(a){return b[a]};return a}}function zf(){this.$get=["$cacheFactory",function(a){return a("templates")}]}function Cc(a,b){function d(a,
b,c){var d=/^\s*([@&<]|=(\*?))(\??)\s*(\w*)\s*$/,e=T();q(a,function(a,f){if(a in n)e[f]=n[a];else{var g=a.match(d);if(!g)throw ga("iscp",b,f,a,c?"controller bindings definition":"isolate scope definition");e[f]={mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||f};g[4]&&(n[a]=e[f])}});return e}function c(a){var b=a.charAt(0);if(!b||b!==P(b))throw ga("baddir",a);if(a!==a.trim())throw ga("baddir",a);}var e={},f=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,g=/(([\w\-]+)(?:\:([^;]+))?;?)/,
h=ae("ngSrc,ngSrcset,src,srcset"),k=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,l=/^(on[a-z]+|formaction)$/,n=T();this.directive=function M(b,d){Qa(b,"directive");F(b)?(c(b),qb(d,"directiveFactory"),e.hasOwnProperty(b)||(e[b]=[],a.factory(b+"Directive",["$injector","$exceptionHandler",function(a,c){var d=[];q(e[b],function(e,f){try{var g=a.invoke(e);E(g)?g={compile:da(g)}:!g.compile&&g.link&&(g.compile=da(g.link));g.priority=g.priority||0;g.index=f;g.name=g.name||b;g.require=g.require||g.controller&&g.name;g.restrict=
g.restrict||"EA";g.$$moduleName=e.$$moduleName;d.push(g)}catch(h){c(h)}});return d}])),e[b].push(d)):q(b,qc(M));return this};this.component=function(a,b){function c(a){function e(b){return E(b)||K(b)?function(c,d){return a.invoke(b,this,{$element:c,$attrs:d})}:b}var f=b.template||b.templateUrl?b.template:"",g={controller:d,controllerAs:Uc(b.controller)||b.controllerAs||"$ctrl",template:e(f),templateUrl:e(b.templateUrl),transclude:b.transclude,scope:{},bindToController:b.bindings||{},restrict:"E",
require:b.require};q(b,function(a,b){"$"===b.charAt(0)&&(g[b]=a)});return g}var d=b.controller||function(){};q(b,function(a,b){"$"===b.charAt(0)&&(c[b]=a,E(d)&&(d[b]=a))});c.$inject=["$injector"];return this.directive(a,c)};this.aHrefSanitizationWhitelist=function(a){return x(a)?(b.aHrefSanitizationWhitelist(a),this):b.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(a){return x(a)?(b.imgSrcSanitizationWhitelist(a),this):b.imgSrcSanitizationWhitelist()};var m=!0;this.debugInfoEnabled=
function(a){return x(a)?(m=a,this):m};var r=10;this.onChangesTtl=function(a){return arguments.length?(r=a,this):r};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$sce","$animate","$$sanitizeUri",function(a,b,c,n,t,z,u,I,J,D){function L(){try{if(!--qa)throw Z=void 0,ga("infchng",r);u.$apply(function(){for(var a=0,b=Z.length;a<b;++a)Z[a]();Z=void 0})}finally{qa++}}function S(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<
e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a}function $(a,b,c){na.innerHTML="<span "+b+">";b=na.firstChild.attributes;var d=b[0];b.removeNamedItem(d.name);d.value=c;a.attributes.setNamedItem(d)}function A(a,b){try{a.addClass(b)}catch(c){}}function ba(a,b,c,d,e){a instanceof B||(a=B(a));for(var f=/\S+/,g=0,h=a.length;g<h;g++){var k=a[g];k.nodeType===Ma&&k.nodeValue.match(f)&&Mc(k,a[g]=v.document.createElement("span"))}var l=s(a,b,a,c,d,e);ba.$$addScopeClass(a);var m=null;return function(b,
c,d){qb(b,"scope");e&&e.needsNewScope&&(b=b.$parent.$new());d=d||{};var f=d.parentBoundTranscludeFn,g=d.transcludeControllers;d=d.futureParentElement;f&&f.$$boundTransclude&&(f=f.$$boundTransclude);m||(m=(d=d&&d[0])?"foreignobject"!==va(d)&&ma.call(d).match(/SVG/)?"svg":"html":"html");d="html"!==m?B(ca(m,B("<div>").append(a).html())):c?Oa.clone.call(a):a;if(g)for(var h in g)d.data("$"+h+"Controller",g[h].instance);ba.$$addScopeInfo(d,b);c&&c(d,b);l&&l(b,d,d,f);return d}}function s(a,b,c,d,e,f){function g(a,
c,d,e){var f,k,l,m,n,t,p;if(r)for(p=Array(c.length),m=0;m<h.length;m+=3)f=h[m],p[f]=c[f];else p=c;m=0;for(n=h.length;m<n;)k=p[h[m++]],c=h[m++],f=h[m++],c?(c.scope?(l=a.$new(),ba.$$addScopeInfo(B(k),l)):l=a,t=c.transcludeOnThisElement?ka(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?ka(a,b):null,c(f,l,k,d,t)):f&&f(a,k.childNodes,void 0,e)}for(var h=[],k,l,m,n,r,t=0;t<a.length;t++){k=new S;l=x(a[t],[],k,0===t?d:void 0,e);(f=l.length?Ba(l,a[t],k,b,c,null,[],[],f):null)&&f.scope&&ba.$$addScopeClass(k.$$element);
k=f&&f.terminal||!(m=a[t].childNodes)||!m.length?null:s(m,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||k)h.push(t,f,k),n=!0,r=r||f;f=null}return n?g:null}function ka(a,b,c){function d(e,f,g,h,k){e||(e=a.$new(!1,k),e.$$transcluded=!0);return b(e,f,{parentBoundTranscludeFn:c,transcludeControllers:g,futureParentElement:h})}var e=d.$$slots=T(),f;for(f in b.$$slots)e[f]=b.$$slots[f]?ka(a,b.$$slots[f],c):null;return d}function x(a,b,c,d,e){var h=c.$attr,k;switch(a.nodeType){case 1:la(b,
xa(va(a)),"E",d,e);for(var l,m,n,t=a.attributes,r=0,p=t&&t.length;r<p;r++){var I=!1,D=!1;l=t[r];k=l.name;m=V(l.value);l=xa(k);if(n=ya.test(l))k=k.replace(Vc,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()});(l=l.match(Aa))&&Q(l[1])&&(I=k,D=k.substr(0,k.length-5)+"end",k=k.substr(0,k.length-6));l=xa(k.toLowerCase());h[l]=k;if(n||!c.hasOwnProperty(l))c[l]=m,Rc(a,l)&&(c[l]=!0);fa(a,b,m,l,n);la(b,l,"A",d,e,I,D)}a=a.className;G(a)&&(a=a.animVal);if(F(a)&&""!==a)for(;k=g.exec(a);)l=xa(k[2]),
la(b,l,"C",d,e)&&(c[l]=V(k[3])),a=a.substr(k.index+k[0].length);break;case Ma:if(11===Ca)for(;a.parentNode&&a.nextSibling&&a.nextSibling.nodeType===Ma;)a.nodeValue+=a.nextSibling.nodeValue,a.parentNode.removeChild(a.nextSibling);X(b,a.nodeValue);break;case 8:try{if(k=f.exec(a.nodeValue))l=xa(k[1]),la(b,l,"M",d,e)&&(c[l]=V(k[2]))}catch(J){}}b.sort(Y);return b}function Wc(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ga("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&
e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return B(d)}function Xc(a,b,c){return function(d,e,f,g,h){e=Wc(e[0],b,c);return a(d,e,f,g,h)}}function Yb(a,b,c,d,e,f){var g;return a?ba(b,c,d,e,f):function(){g||(g=ba(b,c,d,e,f),b=c=f=null);return g.apply(this,arguments)}}function Ba(a,b,d,e,f,g,h,k,l){function m(a,b,c,d){if(a){c&&(a=Xc(a,c,d));a.require=A.require;a.directiveName=M;if(D===A||A.$$isolateScope)a=ha(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=Xc(b,c,d));
b.require=A.require;b.directiveName=M;if(D===A||A.$$isolateScope)b=ha(b,{isolateScope:!0});k.push(b)}}function n(a,c,e,f,g){function l(a,b,c,d){var e;Ya(a)||(d=c,c=b,b=a,a=void 0);H&&(e=u);c||(c=H?z.parent():z);if(d){var f=g.$$slots[d];if(f)return f(a,b,e,c,$);if(y(f))throw ga("noslot",d,wa(z));}else return g(a,b,e,c,$)}var m,t,p,A,w,u,L,z;b===e?(f=d,z=d.$$element):(z=B(e),f=new S(z,d));w=c;D?A=c.$new(!0):r&&(w=c.$parent);g&&(L=l,L.$$boundTransclude=g,L.isSlotFilled=function(a){return!!g.$$slots[a]});
I&&(u=O(z,f,L,I,A,c,D));D&&(ba.$$addScopeInfo(z,A,!0,!(J&&(J===D||J===D.$$originalDirective))),ba.$$addScopeClass(z,!0),A.$$isolateBindings=D.$$isolateBindings,t=ia(c,f,A,A.$$isolateBindings,D),t.removeWatches&&A.$on("$destroy",t.removeWatches));for(m in u){t=I[m];p=u[m];var Xb=t.$$bindings.bindToController;p.bindingInfo=p.identifier&&Xb?ia(w,f,p.instance,Xb,t):{};var M=p();M!==p.instance&&(p.instance=M,z.data("$"+t.name+"Controller",M),p.bindingInfo.removeWatches&&p.bindingInfo.removeWatches(),p.bindingInfo=
ia(w,f,p.instance,Xb,t))}q(I,function(a,b){var c=a.require;a.bindToController&&!K(c)&&G(c)&&R(u[b].instance,gb(b,c,z,u))});q(u,function(a){var b=a.instance;E(b.$onChanges)&&b.$onChanges(a.bindingInfo.initialChanges);E(b.$onInit)&&b.$onInit();E(b.$onDestroy)&&w.$on("$destroy",function(){b.$onDestroy()})});m=0;for(t=h.length;m<t;m++)p=h[m],ja(p,p.isolateScope?A:c,z,f,p.require&&gb(p.directiveName,p.require,z,u),L);var $=c;D&&(D.template||null===D.templateUrl)&&($=A);a&&a($,e.childNodes,void 0,g);for(m=
k.length-1;0<=m;m--)p=k[m],ja(p,p.isolateScope?A:c,z,f,p.require&&gb(p.directiveName,p.require,z,u),L);q(u,function(a){a=a.instance;E(a.$postLink)&&a.$postLink()})}l=l||{};for(var t=-Number.MAX_VALUE,r=l.newScopeDirective,I=l.controllerDirectives,D=l.newIsolateScopeDirective,J=l.templateDirective,w=l.nonTlbTranscludeDirective,u=!1,L=!1,H=l.hasElementTranscludeDirective,z=d.$$element=B(b),A,M,$,s=e,Sa,ka=!1,C=!1,v,F=0,Ba=a.length;F<Ba;F++){A=a[F];var P=A.$$start,Q=A.$$end;P&&(z=Wc(b,P,Q));$=void 0;
if(t>A.priority)break;if(v=A.scope)A.templateUrl||(G(v)?(W("new/isolated scope",D||r,A,z),D=A):W("new/isolated scope",D,A,z)),r=r||A;M=A.name;if(!ka&&(A.replace&&(A.templateUrl||A.template)||A.transclude&&!A.$$tlb)){for(v=F+1;ka=a[v++];)if(ka.transclude&&!ka.$$tlb||ka.replace&&(ka.templateUrl||ka.template)){C=!0;break}ka=!0}!A.templateUrl&&A.controller&&(v=A.controller,I=I||T(),W("'"+M+"' controller",I[M],A,z),I[M]=A);if(v=A.transclude)if(u=!0,A.$$tlb||(W("transclusion",w,A,z),w=A),"element"==v)H=
!0,t=A.priority,$=z,z=d.$$element=B(ba.$$createComment(M,d[M])),b=z[0],da(f,za.call($,0),b),$[0].$$parentNode=$[0].parentNode,s=Yb(C,$,e,t,g&&g.name,{nonTlbTranscludeDirective:w});else{var la=T();$=B(Vb(b)).contents();if(G(v)){$=[];var Y=T(),X=T();q(v,function(a,b){var c="?"===a.charAt(0);a=c?a.substring(1):a;Y[a]=b;la[b]=null;X[b]=c});q(z.contents(),function(a){var b=Y[xa(va(a))];b?(X[b]=!0,la[b]=la[b]||[],la[b].push(a)):$.push(a)});q(X,function(a,b){if(!a)throw ga("reqslot",b);});for(var Z in la)la[Z]&&
(la[Z]=Yb(C,la[Z],e))}z.empty();s=Yb(C,$,e,void 0,void 0,{needsNewScope:A.$$isolateScope||A.$$newScope});s.$$slots=la}if(A.template)if(L=!0,W("template",J,A,z),J=A,v=E(A.template)?A.template(z,d):A.template,v=ta(v),A.replace){g=A;$=Tb.test(v)?Yc(ca(A.templateNamespace,V(v))):[];b=$[0];if(1!=$.length||1!==b.nodeType)throw ga("tplrt",M,"");da(f,z,b);Ba={$attr:{}};v=x(b,[],Ba);var ea=a.splice(F+1,a.length-(F+1));(D||r)&&Zc(v,D,r);a=a.concat(v).concat(ea);U(d,Ba);Ba=a.length}else z.html(v);if(A.templateUrl)L=
!0,W("template",J,A,z),J=A,A.replace&&(g=A),n=aa(a.splice(F,a.length-F),z,d,f,u&&s,h,k,{controllerDirectives:I,newScopeDirective:r!==A&&r,newIsolateScopeDirective:D,templateDirective:J,nonTlbTranscludeDirective:w}),Ba=a.length;else if(A.compile)try{Sa=A.compile(z,d,s),E(Sa)?m(null,Sa,P,Q):Sa&&m(Sa.pre,Sa.post,P,Q)}catch(fa){c(fa,wa(z))}A.terminal&&(n.terminal=!0,t=Math.max(t,A.priority))}n.scope=r&&!0===r.scope;n.transcludeOnThisElement=u;n.templateOnThisElement=L;n.transclude=s;l.hasElementTranscludeDirective=
H;return n}function gb(a,b,c,d){var e;if(F(b)){var f=b.match(k);b=b.substring(f[0].length);var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&e.instance;if(!e){var h="$"+b+"Controller";e=g?c.inheritedData(h):c.data(h)}if(!e&&!f)throw ga("ctreq",b,a);}else if(K(b))for(e=[],g=0,f=b.length;g<f;g++)e[g]=gb(a,b[g],c,d);else G(b)&&(e={},q(b,function(b,f){e[f]=gb(a,b,c,d)}));return e||null}function O(a,b,c,d,e,f,g){var h=T(),k;for(k in d){var l=d[k],m={$scope:l===g||l.$$isolateScope?e:f,
$element:a,$attrs:b,$transclude:c},n=l.controller;"@"==n&&(n=b[l.name]);m=z(n,m,!0,l.controllerAs);h[l.name]=m;a.data("$"+l.name+"Controller",m.instance)}return h}function Zc(a,b,c){for(var d=0,e=a.length;d<e;d++)a[d]=Pb(a[d],{$$isolateScope:b,$$newScope:c})}function la(b,f,g,h,k,l,m){if(f===k)return null;k=null;if(e.hasOwnProperty(f)){var n;f=a.get(f+"Directive");for(var t=0,r=f.length;t<r;t++)try{if(n=f[t],(y(h)||h>n.priority)&&-1!=n.restrict.indexOf(g)){l&&(n=Pb(n,{$$start:l,$$end:m}));if(!n.$$bindings){var I=
n,D=n,A=n.name,J={isolateScope:null,bindToController:null};G(D.scope)&&(!0===D.bindToController?(J.bindToController=d(D.scope,A,!0),J.isolateScope={}):J.isolateScope=d(D.scope,A,!1));G(D.bindToController)&&(J.bindToController=d(D.bindToController,A,!0));if(G(J.bindToController)){var w=D.controller,z=D.controllerAs;if(!w)throw ga("noctrl",A);if(!Uc(w,z))throw ga("noident",A);}var u=I.$$bindings=J;G(u.isolateScope)&&(n.$$isolateBindings=u.isolateScope)}b.push(n);k=n}}catch(L){c(L)}}return k}function Q(b){if(e.hasOwnProperty(b))for(var c=
a.get(b+"Directive"),d=0,f=c.length;d<f;d++)if(b=c[d],b.multiElement)return!0;return!1}function U(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;q(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});q(b,function(b,f){"class"==f?(A(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function aa(a,b,c,d,e,f,
g,h){var k=[],l,m,t=b[0],p=a.shift(),r=Pb(p,{templateUrl:null,transclude:null,replace:null,$$originalDirective:p}),I=E(p.templateUrl)?p.templateUrl(b,c):p.templateUrl,D=p.templateNamespace;b.empty();n(I).then(function(n){var J,w;n=ta(n);if(p.replace){n=Tb.test(n)?Yc(ca(D,V(n))):[];J=n[0];if(1!=n.length||1!==J.nodeType)throw ga("tplrt",p.name,I);n={$attr:{}};da(d,b,J);var z=x(J,[],n);G(p.scope)&&Zc(z,!0);a=z.concat(a);U(c,n)}else J=t,b.html(n);a.unshift(r);l=Ba(a,J,c,e,b,p,f,g,h);q(d,function(a,c){a==
J&&(d[c]=b[0])});for(m=s(b[0].childNodes,e);k.length;){n=k.shift();w=k.shift();var u=k.shift(),L=k.shift(),z=b[0];if(!n.$$destroyed){if(w!==t){var S=w.className;h.hasElementTranscludeDirective&&p.replace||(z=Vb(J));da(u,B(w),z);A(B(z),S)}w=l.transcludeOnThisElement?ka(n,l.transclude,L):L;l(m,n,z,d,w)}}k=null});return function(a,b,c,d,e){a=e;b.$$destroyed||(k?k.push(b,c,d,a):(l.transcludeOnThisElement&&(a=ka(b,l.transclude,e)),l(m,b,c,d,a)))}}function Y(a,b){var c=b.priority-a.priority;return 0!==
c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function W(a,b,c,d){function e(a){return a?" (module: "+a+")":""}if(b)throw ga("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,wa(d));}function X(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&ba.$$addBindingClass(a);return function(a,c){var e=c.parent();b||ba.$$addBindingClass(e);ba.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function ca(a,b){a=
P(a||"html");switch(a){case "svg":case "math":var c=v.document.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function ea(a,b){if("srcdoc"==b)return I.HTML;var c=va(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b))return I.RESOURCE_URL}function fa(a,c,d,e,f){var g=ea(a,e);f=h[e]||f;var k=b(d,!0,g,f);if(k){if("multiple"===e&&"select"===va(a))throw ga("selmulti",wa(a));c.push({priority:100,compile:function(){return{pre:function(a,
c,h){c=h.$$observers||(h.$$observers=T());if(l.test(e))throw ga("nodomevents");var m=h[e];m!==d&&(k=m&&b(m,!0,g,f),d=m);k&&(h[e]=k(a),(c[e]||(c[e]=[])).$$inter=!0,(h.$$observers&&h.$$observers[e].$$scope||a).$watch(k,function(a,b){"class"===e&&a!=b?h.$updateClass(a,b):h.$set(e,a)}))}}}})}}function da(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=
c);break}f&&f.replaceChild(c,d);a=v.document.createDocumentFragment();for(g=0;g<e;g++)a.appendChild(b[g]);B.hasData(d)&&(B.data(c,B.data(d)),B(d).off("$destroy"));B.cleanData(a.querySelectorAll("*"));for(g=1;g<e;g++)delete b[g];b[0]=c;b.length=1}function ha(a,b){return R(function(){return a.apply(null,arguments)},a,b)}function ja(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,wa(d))}}function ia(a,c,d,e,f){function g(b,c,e){E(d.$onChanges)&&c!==e&&(Z||(a.$$postDigest(L),Z=[]),m||(m={},Z.push(h)),m[b]&&
(e=m[b].previousValue),m[b]=new Db(e,c))}function h(){d.$onChanges(m);m=void 0}var k=[],l={},m;q(e,function(e,h){var m=e.attrName,n=e.optional,p,r,I,D;switch(e.mode){case "@":n||ua.call(c,m)||(d[h]=c[m]=void 0);c.$observe(m,function(a){if(F(a)||Da(a))g(h,a,d[h]),d[h]=a});c.$$observers[m].$$scope=a;p=c[m];F(p)?d[h]=b(p)(a):Da(p)&&(d[h]=p);l[h]=new Db(Zb,d[h]);break;case "=":if(!ua.call(c,m)){if(n)break;c[m]=void 0}if(n&&!c[m])break;r=t(c[m]);D=r.literal?pa:function(a,b){return a===b||a!==a&&b!==b};
I=r.assign||function(){p=d[h]=r(a);throw ga("nonassign",c[m],m,f.name);};p=d[h]=r(a);n=function(b){D(b,d[h])||(D(b,p)?I(a,b=d[h]):d[h]=b);return p=b};n.$stateful=!0;n=e.collection?a.$watchCollection(c[m],n):a.$watch(t(c[m],n),null,r.literal);k.push(n);break;case "<":if(!ua.call(c,m)){if(n)break;c[m]=void 0}if(n&&!c[m])break;r=t(c[m]);d[h]=r(a);l[h]=new Db(Zb,d[h]);n=a.$watch(r,function(a,b){a===b&&(b=d[h]);g(h,a,b);d[h]=a},r.literal);k.push(n);break;case "&":r=c.hasOwnProperty(m)?t(c[m]):C;if(r===
C&&n)break;d[h]=function(b){return r(a,b)}}});return{initialChanges:l,removeWatches:k.length&&function(){for(var a=0,b=k.length;a<b;++a)k[a]()}}}var oa=/^\w/,na=v.document.createElement("div"),qa=r,Z;S.prototype={$normalize:xa,$addClass:function(a){a&&0<a.length&&J.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&J.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=$c(a,b);c&&c.length&&J.addClass(this.$$element,c);(c=$c(b,a))&&c.length&&J.removeClass(this.$$element,
c)},$set:function(a,b,d,e){var f=Rc(this.$$element[0],a),g=ad[a],h=a;f?(this.$$element.prop(a,b),e=f):g&&(this[g]=b,h=g);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=zc(a,"-"));f=va(this.$$element);if("a"===f&&("href"===a||"xlinkHref"===a)||"img"===f&&"src"===a)this[a]=b=D(b,"src"===a);else if("img"===f&&"srcset"===a){for(var f="",g=V(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(g)?k:/(,)/,g=g.split(k),k=Math.floor(g.length/2),l=0;l<k;l++)var m=2*l,f=f+D(V(g[m]),!0),f=
f+(" "+V(g[m+1]));g=V(g[2*l]).split(/\s/);f+=D(V(g[0]),!0);2===g.length&&(f+=" "+V(g[1]));this[a]=b=f}!1!==d&&(null===b||y(b)?this.$$element.removeAttr(e):oa.test(e)?this.$$element.attr(e,b):$(this.$$element[0],e,b));(a=this.$$observers)&&q(a[h],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=T()),e=d[a]||(d[a]=[]);e.push(b);u.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||y(c[a])||b(c[a])});return function(){Za(e,b)}}};var ra=b.startSymbol(),
sa=b.endSymbol(),ta="{{"==ra&&"}}"==sa?Xa:function(a){return a.replace(/\{\{/g,ra).replace(/}}/g,sa)},ya=/^ngAttr[A-Z]/,Aa=/^(.+)Start$/;ba.$$addBindingInfo=m?function(a,b){var c=a.data("$binding")||[];K(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:C;ba.$$addBindingClass=m?function(a){A(a,"ng-binding")}:C;ba.$$addScopeInfo=m?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:C;ba.$$addScopeClass=m?function(a,b){A(a,b?"ng-isolate-scope":"ng-scope")}:C;ba.$$createComment=
function(a,b){var c="";m&&(c=" "+(a||"")+": "+(b||"")+" ");return v.document.createComment(c)};return ba}]}function Db(a,b){this.previousValue=a;this.currentValue=b}function xa(a){return cb(a.replace(Vc,""))}function $c(a,b){var d="",c=a.split(/\s+/),e=b.split(/\s+/),f=0;a:for(;f<c.length;f++){for(var g=c[f],h=0;h<e.length;h++)if(g==e[h])continue a;d+=(0<d.length?" ":"")+g}return d}function Yc(a){a=B(a);var b=a.length;if(1>=b)return a;for(;b--;)8===a[b].nodeType&&Zf.call(a,b,1);return a}function Uc(a,
b){if(b&&F(b))return b;if(F(a)){var d=bd.exec(a);if(d)return d[3]}}function ef(){var a={},b=!1;this.has=function(b){return a.hasOwnProperty(b)};this.register=function(b,c){Qa(b,"controller");G(b)?R(a,b):a[b]=c};this.allowGlobals=function(){b=!0};this.$get=["$injector","$window",function(d,c){function e(a,b,c,d){if(!a||!G(a.$scope))throw O("$controller")("noscp",d,b);a.$scope[b]=c}return function(f,g,h,k){var l,n,m;h=!0===h;k&&F(k)&&(m=k);if(F(f)){k=f.match(bd);if(!k)throw $f("ctrlfmt",f);n=k[1];m=
m||k[3];f=a.hasOwnProperty(n)?a[n]:Bc(g.$scope,n,!0)||(b?Bc(c,n,!0):void 0);Pa(f,n,!0)}if(h)return h=(K(f)?f[f.length-1]:f).prototype,l=Object.create(h||null),m&&e(g,m,l,n||f.name),R(function(){var a=d.invoke(f,l,g,n);a!==l&&(G(a)||E(a))&&(l=a,m&&e(g,m,l,n||f.name));return l},{instance:l,identifier:m});l=d.instantiate(f,g,n);m&&e(g,m,l,n||f.name);return l}}]}function ff(){this.$get=["$window",function(a){return B(a.document)}]}function gf(){this.$get=["$log",function(a){return function(b,d){a.error.apply(a,
arguments)}}]}function $b(a){return G(a)?fa(a)?a.toISOString():ab(a):a}function mf(){this.$get=function(){return function(a){if(!a)return"";var b=[];pc(a,function(a,c){null===a||y(a)||(K(a)?q(a,function(a){b.push(ja(c)+"="+ja($b(a)))}):b.push(ja(c)+"="+ja($b(a))))});return b.join("&")}}}function nf(){this.$get=function(){return function(a){function b(a,e,f){null===a||y(a)||(K(a)?q(a,function(a,c){b(a,e+"["+(G(a)?c:"")+"]")}):G(a)&&!fa(a)?pc(a,function(a,c){b(a,e+(f?"":"[")+c+(f?"":"]"))}):d.push(ja(e)+
"="+ja($b(a))))}if(!a)return"";var d=[];b(a,"",!0);return d.join("&")}}}function ac(a,b){if(F(a)){var d=a.replace(ag,"").trim();if(d){var c=b("Content-Type");(c=c&&0===c.indexOf(cd))||(c=(c=d.match(bg))&&cg[c[0]].test(d));c&&(a=uc(d))}}return a}function dd(a){var b=T(),d;F(a)?q(a.split("\n"),function(a){d=a.indexOf(":");var e=P(V(a.substr(0,d)));a=V(a.substr(d+1));e&&(b[e]=b[e]?b[e]+", "+a:a)}):G(a)&&q(a,function(a,d){var f=P(d),g=V(a);f&&(b[f]=b[f]?b[f]+", "+g:g)});return b}function ed(a){var b;
return function(d){b||(b=dd(a));return d?(d=b[P(d)],void 0===d&&(d=null),d):b}}function fd(a,b,d,c){if(E(c))return c(a,b,d);q(c,function(c){a=c(a,b,d)});return a}function lf(){var a=this.defaults={transformResponse:[ac],transformRequest:[function(a){return G(a)&&"[object File]"!==ma.call(a)&&"[object Blob]"!==ma.call(a)&&"[object FormData]"!==ma.call(a)?ab(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ha(bc),put:ha(bc),patch:ha(bc)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",
paramSerializer:"$httpParamSerializer"},b=!1;this.useApplyAsync=function(a){return x(a)?(b=!!a,this):b};var d=!0;this.useLegacyPromiseExtensions=function(a){return x(a)?(d=!!a,this):d};var c=this.interceptors=[];this.$get=["$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector",function(e,f,g,h,k,l){function n(b){function c(a){var b=R({},a);b.data=fd(a.data,a.headers,a.status,f.transformResponse);a=a.status;return 200<=a&&300>a?b:k.reject(b)}function e(a,b){var c,d={};q(a,function(a,
e){E(a)?(c=a(b),null!=c&&(d[e]=c)):d[e]=a});return d}if(!G(b))throw O("$http")("badreq",b);if(!F(b.url))throw O("$http")("badreq",b.url);var f=R({method:"get",transformRequest:a.transformRequest,transformResponse:a.transformResponse,paramSerializer:a.paramSerializer},b);f.headers=function(b){var c=a.headers,d=R({},b.headers),f,g,h,c=R({},c.common,c[P(b.method)]);a:for(f in c){g=P(f);for(h in d)if(P(h)===g)continue a;d[f]=c[f]}return e(d,ha(b))}(b);f.method=sb(f.method);f.paramSerializer=F(f.paramSerializer)?
l.get(f.paramSerializer):f.paramSerializer;var g=[function(b){var d=b.headers,e=fd(b.data,ed(d),void 0,b.transformRequest);y(e)&&q(d,function(a,b){"content-type"===P(b)&&delete d[b]});y(b.withCredentials)&&!y(a.withCredentials)&&(b.withCredentials=a.withCredentials);return m(b,e).then(c,c)},void 0],h=k.when(f);for(q(M,function(a){(a.request||a.requestError)&&g.unshift(a.request,a.requestError);(a.response||a.responseError)&&g.push(a.response,a.responseError)});g.length;){b=g.shift();var n=g.shift(),
h=h.then(b,n)}d?(h.success=function(a){Pa(a,"fn");h.then(function(b){a(b.data,b.status,b.headers,f)});return h},h.error=function(a){Pa(a,"fn");h.then(null,function(b){a(b.data,b.status,b.headers,f)});return h}):(h.success=gd("success"),h.error=gd("error"));return h}function m(c,d){function g(a){if(a){var c={};q(a,function(a,d){c[d]=function(c){function d(){a(c)}b?h.$applyAsync(d):h.$$phase?d():h.$apply(d)}});return c}}function l(a,c,d,e){function f(){m(c,a,d,e)}L&&(200<=a&&300>a?L.put(A,[a,c,dd(d),
e]):L.remove(A));b?h.$applyAsync(f):(f(),h.$$phase||h.$apply())}function m(a,b,d,e){b=-1<=b?b:0;(200<=b&&300>b?J.resolve:J.reject)({data:a,status:b,headers:ed(d),config:c,statusText:e})}function u(a){m(a.data,a.status,ha(a.headers()),a.statusText)}function I(){var a=n.pendingRequests.indexOf(c);-1!==a&&n.pendingRequests.splice(a,1)}var J=k.defer(),D=J.promise,L,S,M=c.headers,A=r(c.url,c.paramSerializer(c.params));n.pendingRequests.push(c);D.then(I,I);!c.cache&&!a.cache||!1===c.cache||"GET"!==c.method&&
"JSONP"!==c.method||(L=G(c.cache)?c.cache:G(a.cache)?a.cache:N);L&&(S=L.get(A),x(S)?S&&E(S.then)?S.then(u,u):K(S)?m(S[1],S[0],ha(S[2]),S[3]):m(S,200,{},"OK"):L.put(A,D));y(S)&&((S=hd(c.url)?f()[c.xsrfCookieName||a.xsrfCookieName]:void 0)&&(M[c.xsrfHeaderName||a.xsrfHeaderName]=S),e(c.method,A,d,l,M,c.timeout,c.withCredentials,c.responseType,g(c.eventHandlers),g(c.uploadEventHandlers)));return D}function r(a,b){0<b.length&&(a+=(-1==a.indexOf("?")?"?":"&")+b);return a}var N=g("$http");a.paramSerializer=
F(a.paramSerializer)?l.get(a.paramSerializer):a.paramSerializer;var M=[];q(c,function(a){M.unshift(F(a)?l.get(a):l.invoke(a))});n.pendingRequests=[];(function(a){q(arguments,function(a){n[a]=function(b,c){return n(R({},c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){q(arguments,function(a){n[a]=function(b,c,d){return n(R({},d||{},{method:a,url:b,data:c}))}})})("post","put","patch");n.defaults=a;return n}]}function pf(){this.$get=function(){return function(){return new v.XMLHttpRequest}}}
function of(){this.$get=["$browser","$window","$document","$xhrFactory",function(a,b,d,c){return dg(a,c,a.defer,b.angular.callbacks,d[0])}]}function dg(a,b,d,c,e){function f(a,b,d){var f=e.createElement("script"),n=null;f.type="text/javascript";f.src=a;f.async=!0;n=function(a){f.removeEventListener("load",n,!1);f.removeEventListener("error",n,!1);e.body.removeChild(f);f=null;var g=-1,N="unknown";a&&("load"!==a.type||c[b].called||(a={type:"error"}),N=a.type,g="error"===a.type?404:200);d&&d(g,N)};f.addEventListener("load",
n,!1);f.addEventListener("error",n,!1);e.body.appendChild(f);return n}return function(e,h,k,l,n,m,r,N,M,w){function p(){z&&z();u&&u.abort()}function H(b,c,e,f,g){x(J)&&d.cancel(J);z=u=null;b(c,e,f,g);a.$$completeOutstandingRequest(C)}a.$$incOutstandingRequestCount();h=h||a.url();if("jsonp"==P(e)){var t="_"+(c.counter++).toString(36);c[t]=function(a){c[t].data=a;c[t].called=!0};var z=f(h.replace("JSON_CALLBACK","angular.callbacks."+t),t,function(a,b){H(l,a,c[t].data,"",b);c[t]=C})}else{var u=b(e,h);
u.open(e,h,!0);q(n,function(a,b){x(a)&&u.setRequestHeader(b,a)});u.onload=function(){var a=u.statusText||"",b="response"in u?u.response:u.responseText,c=1223===u.status?204:u.status;0===c&&(c=b?200:"file"==ra(h).protocol?404:0);H(l,c,b,u.getAllResponseHeaders(),a)};e=function(){H(l,-1,null,null,"")};u.onerror=e;u.onabort=e;q(M,function(a,b){u.addEventListener(b,a)});q(w,function(a,b){u.upload.addEventListener(b,a)});r&&(u.withCredentials=!0);if(N)try{u.responseType=N}catch(I){if("json"!==N)throw I;
}u.send(y(k)?null:k)}if(0<m)var J=d(p,m);else m&&E(m.then)&&m.then(p)}}function jf(){var a="{{",b="}}";this.startSymbol=function(b){return b?(a=b,this):a};this.endSymbol=function(a){return a?(b=a,this):b};this.$get=["$parse","$exceptionHandler","$sce",function(d,c,e){function f(a){return"\\\\\\"+a}function g(c){return c.replace(m,a).replace(r,b)}function h(a,b,c,d){var e;return e=a.$watch(function(a){e();return d(a)},b,c)}function k(f,k,m,r){function H(a){try{var b=a;a=m?e.getTrusted(m,b):e.valueOf(b);
var d;if(r&&!x(a))d=a;else if(null==a)d="";else{switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=ab(a)}d=a}return d}catch(g){c(Ja.interr(f,g))}}if(!f.length||-1===f.indexOf(a)){var t;k||(k=g(f),t=da(k),t.exp=f,t.expressions=[],t.$$watchDelegate=h);return t}r=!!r;var z,u,I=0,J=[],D=[];t=f.length;for(var L=[],S=[];I<t;)if(-1!=(z=f.indexOf(a,I))&&-1!=(u=f.indexOf(b,z+l)))I!==z&&L.push(g(f.substring(I,z))),I=f.substring(z+l,u),J.push(I),D.push(d(I,H)),I=u+n,S.push(L.length),L.push("");
else{I!==t&&L.push(g(f.substring(I)));break}m&&1<L.length&&Ja.throwNoconcat(f);if(!k||J.length){var q=function(a){for(var b=0,c=J.length;b<c;b++){if(r&&y(a[b]))return;L[S[b]]=a[b]}return L.join("")};return R(function(a){var b=0,d=J.length,e=Array(d);try{for(;b<d;b++)e[b]=D[b](a);return q(e)}catch(g){c(Ja.interr(f,g))}},{exp:f,expressions:J,$$watchDelegate:function(a,b){var c;return a.$watchGroup(D,function(d,e){var f=q(d);E(b)&&b.call(this,f,d!==e?c:f,a);c=f})}})}}var l=a.length,n=b.length,m=new RegExp(a.replace(/./g,
f),"g"),r=new RegExp(b.replace(/./g,f),"g");k.startSymbol=function(){return a};k.endSymbol=function(){return b};return k}]}function kf(){this.$get=["$rootScope","$window","$q","$$q","$browser",function(a,b,d,c,e){function f(f,k,l,n){function m(){r?f.apply(null,N):f(p)}var r=4<arguments.length,N=r?za.call(arguments,4):[],q=b.setInterval,w=b.clearInterval,p=0,H=x(n)&&!n,t=(H?c:d).defer(),z=t.promise;l=x(l)?l:0;z.$$intervalId=q(function(){H?e.defer(m):a.$evalAsync(m);t.notify(p++);0<l&&p>=l&&(t.resolve(p),
w(z.$$intervalId),delete g[z.$$intervalId]);H||a.$apply()},k);g[z.$$intervalId]=t;return z}var g={};f.cancel=function(a){return a&&a.$$intervalId in g?(g[a.$$intervalId].reject("canceled"),b.clearInterval(a.$$intervalId),delete g[a.$$intervalId],!0):!1};return f}]}function cc(a){a=a.split("/");for(var b=a.length;b--;)a[b]=ob(a[b]);return a.join("/")}function id(a,b){var d=ra(a);b.$$protocol=d.protocol;b.$$host=d.hostname;b.$$port=X(d.port)||eg[d.protocol]||null}function jd(a,b){var d="/"!==a.charAt(0);
d&&(a="/"+a);var c=ra(a);b.$$path=decodeURIComponent(d&&"/"===c.pathname.charAt(0)?c.pathname.substring(1):c.pathname);b.$$search=xc(c.search);b.$$hash=decodeURIComponent(c.hash);b.$$path&&"/"!=b.$$path.charAt(0)&&(b.$$path="/"+b.$$path)}function na(a,b){if(0===b.indexOf(a))return b.substr(a.length)}function Ia(a){var b=a.indexOf("#");return-1==b?a:a.substr(0,b)}function hb(a){return a.replace(/(#.+)|#$/,"$1")}function dc(a,b,d){this.$$html5=!0;d=d||"";id(a,this);this.$$parse=function(a){var d=na(b,
a);if(!F(d))throw Eb("ipthprfx",a,b);jd(d,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Rb(this.$$search),d=this.$$hash?"#"+ob(this.$$hash):"";this.$$url=cc(this.$$path)+(a?"?"+a:"")+d;this.$$absUrl=b+this.$$url.substr(1)};this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;x(f=na(a,c))?(g=f,g=x(f=na(d,f))?b+(na("/",f)||f):a+g):x(f=na(b,c))?g=b+f:b==c+"/"&&(g=b);g&&this.$$parse(g);return!!g}}function ec(a,b,d){id(a,this);
this.$$parse=function(c){var e=na(a,c)||na(b,c),f;y(e)||"#"!==e.charAt(0)?this.$$html5?f=e:(f="",y(e)&&(a=c,this.replace())):(f=na(d,e),y(f)&&(f=e));jd(f,this);c=this.$$path;var e=a,g=/^\/[A-Z]:(\/.*)/;0===f.indexOf(e)&&(f=f.replace(e,""));g.exec(f)||(c=(f=g.exec(c))?f[1]:c);this.$$path=c;this.$$compose()};this.$$compose=function(){var b=Rb(this.$$search),e=this.$$hash?"#"+ob(this.$$hash):"";this.$$url=cc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+(this.$$url?d+this.$$url:"")};this.$$parseLinkUrl=
function(b,d){return Ia(a)==Ia(b)?(this.$$parse(b),!0):!1}}function kd(a,b,d){this.$$html5=!0;ec.apply(this,arguments);this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;a==Ia(c)?f=c:(g=na(b,c))?f=a+d+g:b===c+"/"&&(f=b);f&&this.$$parse(f);return!!f};this.$$compose=function(){var b=Rb(this.$$search),e=this.$$hash?"#"+ob(this.$$hash):"";this.$$url=cc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+d+this.$$url}}function Fb(a){return function(){return this[a]}}function ld(a,
b){return function(d){if(y(d))return this[a];this[a]=b(d);this.$$compose();return this}}function qf(){var a="",b={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(b){return x(b)?(a=b,this):a};this.html5Mode=function(a){return Da(a)?(b.enabled=a,this):G(a)?(Da(a.enabled)&&(b.enabled=a.enabled),Da(a.requireBase)&&(b.requireBase=a.requireBase),Da(a.rewriteLinks)&&(b.rewriteLinks=a.rewriteLinks),this):b};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(d,
c,e,f,g){function h(a,b,d){var e=l.url(),f=l.$$state;try{c.url(a,b,d),l.$$state=c.state()}catch(g){throw l.url(e),l.$$state=f,g;}}function k(a,b){d.$broadcast("$locationChangeSuccess",l.absUrl(),a,l.$$state,b)}var l,n;n=c.baseHref();var m=c.url(),r;if(b.enabled){if(!n&&b.requireBase)throw Eb("nobase");r=m.substring(0,m.indexOf("/",m.indexOf("//")+2))+(n||"/");n=e.history?dc:kd}else r=Ia(m),n=ec;var N=r.substr(0,Ia(r).lastIndexOf("/")+1);l=new n(r,N,"#"+a);l.$$parseLinkUrl(m,m);l.$$state=c.state();
var q=/^\s*(javascript|mailto):/i;f.on("click",function(a){if(b.rewriteLinks&&!a.ctrlKey&&!a.metaKey&&!a.shiftKey&&2!=a.which&&2!=a.button){for(var e=B(a.target);"a"!==va(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var h=e.prop("href"),k=e.attr("href")||e.attr("xlink:href");G(h)&&"[object SVGAnimatedString]"===h.toString()&&(h=ra(h.animVal).href);q.test(h)||!h||e.attr("target")||a.isDefaultPrevented()||!l.$$parseLinkUrl(h,k)||(a.preventDefault(),l.absUrl()!=c.url()&&(d.$apply(),g.angular["ff-684208-preventDefault"]=
!0))}});hb(l.absUrl())!=hb(m)&&c.url(l.absUrl(),!0);var w=!0;c.onUrlChange(function(a,b){y(na(N,a))?g.location.href=a:(d.$evalAsync(function(){var c=l.absUrl(),e=l.$$state,f;a=hb(a);l.$$parse(a);l.$$state=b;f=d.$broadcast("$locationChangeStart",a,c,b,e).defaultPrevented;l.absUrl()===a&&(f?(l.$$parse(c),l.$$state=e,h(c,!1,e)):(w=!1,k(c,e)))}),d.$$phase||d.$digest())});d.$watch(function(){var a=hb(c.url()),b=hb(l.absUrl()),f=c.state(),g=l.$$replace,m=a!==b||l.$$html5&&e.history&&f!==l.$$state;if(w||
m)w=!1,d.$evalAsync(function(){var b=l.absUrl(),c=d.$broadcast("$locationChangeStart",b,a,l.$$state,f).defaultPrevented;l.absUrl()===b&&(c?(l.$$parse(a),l.$$state=f):(m&&h(b,g,f===l.$$state?null:l.$$state),k(a,f)))});l.$$replace=!1});return l}]}function rf(){var a=!0,b=this;this.debugEnabled=function(b){return x(b)?(a=b,this):a};this.$get=["$window",function(d){function c(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&
(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=d.console||{},e=b[a]||b.log||C;a=!1;try{a=!!e.apply}catch(k){}return a?function(){var a=[];q(arguments,function(b){a.push(c(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){a&&c.apply(b,arguments)}}()}}]}function Ta(a,b){if("__defineGetter__"===a||"__defineSetter__"===a||"__lookupGetter__"===a||"__lookupSetter__"===
a||"__proto__"===a)throw ca("isecfld",b);return a}function fg(a){return a+""}function sa(a,b){if(a){if(a.constructor===a)throw ca("isecfn",b);if(a.window===a)throw ca("isecwindow",b);if(a.children&&(a.nodeName||a.prop&&a.attr&&a.find))throw ca("isecdom",b);if(a===Object)throw ca("isecobj",b);}return a}function md(a,b){if(a){if(a.constructor===a)throw ca("isecfn",b);if(a===gg||a===hg||a===ig)throw ca("isecff",b);}}function Gb(a,b){if(a&&(a===(0).constructor||a===(!1).constructor||a==="".constructor||
a==={}.constructor||a===[].constructor||a===Function.constructor))throw ca("isecaf",b);}function jg(a,b){return"undefined"!==typeof a?a:b}function nd(a,b){return"undefined"===typeof a?b:"undefined"===typeof b?a:a+b}function aa(a,b){var d,c;switch(a.type){case s.Program:d=!0;q(a.body,function(a){aa(a.expression,b);d=d&&a.expression.constant});a.constant=d;break;case s.Literal:a.constant=!0;a.toWatch=[];break;case s.UnaryExpression:aa(a.argument,b);a.constant=a.argument.constant;a.toWatch=a.argument.toWatch;
break;case s.BinaryExpression:aa(a.left,b);aa(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.left.toWatch.concat(a.right.toWatch);break;case s.LogicalExpression:aa(a.left,b);aa(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.constant?[]:[a];break;case s.ConditionalExpression:aa(a.test,b);aa(a.alternate,b);aa(a.consequent,b);a.constant=a.test.constant&&a.alternate.constant&&a.consequent.constant;a.toWatch=a.constant?[]:[a];break;case s.Identifier:a.constant=
!1;a.toWatch=[a];break;case s.MemberExpression:aa(a.object,b);a.computed&&aa(a.property,b);a.constant=a.object.constant&&(!a.computed||a.property.constant);a.toWatch=[a];break;case s.CallExpression:d=a.filter?!b(a.callee.name).$stateful:!1;c=[];q(a.arguments,function(a){aa(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});a.constant=d;a.toWatch=a.filter&&!b(a.callee.name).$stateful?c:[a];break;case s.AssignmentExpression:aa(a.left,b);aa(a.right,b);a.constant=a.left.constant&&a.right.constant;
a.toWatch=[a];break;case s.ArrayExpression:d=!0;c=[];q(a.elements,function(a){aa(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});a.constant=d;a.toWatch=c;break;case s.ObjectExpression:d=!0;c=[];q(a.properties,function(a){aa(a.value,b);d=d&&a.value.constant;a.value.constant||c.push.apply(c,a.value.toWatch)});a.constant=d;a.toWatch=c;break;case s.ThisExpression:a.constant=!1;a.toWatch=[];break;case s.LocalsExpression:a.constant=!1,a.toWatch=[]}}function od(a){if(1==a.length){a=a[0].expression;
var b=a.toWatch;return 1!==b.length?b:b[0]!==a?b:void 0}}function pd(a){return a.type===s.Identifier||a.type===s.MemberExpression}function qd(a){if(1===a.body.length&&pd(a.body[0].expression))return{type:s.AssignmentExpression,left:a.body[0].expression,right:{type:s.NGValueParameter},operator:"="}}function rd(a){return 0===a.body.length||1===a.body.length&&(a.body[0].expression.type===s.Literal||a.body[0].expression.type===s.ArrayExpression||a.body[0].expression.type===s.ObjectExpression)}function sd(a,
b){this.astBuilder=a;this.$filter=b}function td(a,b){this.astBuilder=a;this.$filter=b}function Hb(a){return"constructor"==a}function fc(a){return E(a.valueOf)?a.valueOf():kg.call(a)}function sf(){var a=T(),b=T(),d={"true":!0,"false":!1,"null":null,undefined:void 0},c,e;this.addLiteral=function(a,b){d[a]=b};this.setIdentifierFns=function(a,b){c=a;e=b;return this};this.$get=["$filter",function(f){function g(c,d,e){var g,k,D;e=e||H;switch(typeof c){case "string":D=c=c.trim();var q=e?b:a;g=q[D];if(!g){":"===
c.charAt(0)&&":"===c.charAt(1)&&(k=!0,c=c.substring(2));g=e?p:w;var S=new gc(g);g=(new hc(S,f,g)).parse(c);g.constant?g.$$watchDelegate=r:k?g.$$watchDelegate=g.literal?m:n:g.inputs&&(g.$$watchDelegate=l);e&&(g=h(g));q[D]=g}return N(g,d);case "function":return N(c,d);default:return N(C,d)}}function h(a){function b(c,d,e,f){var g=H;H=!0;try{return a(c,d,e,f)}finally{H=g}}if(!a)return a;b.$$watchDelegate=a.$$watchDelegate;b.assign=h(a.assign);b.constant=a.constant;b.literal=a.literal;for(var c=0;a.inputs&&
c<a.inputs.length;++c)a.inputs[c]=h(a.inputs[c]);b.inputs=a.inputs;return b}function k(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=fc(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function l(a,b,c,d,e){var f=d.inputs,g;if(1===f.length){var h=k,f=f[0];return a.$watch(function(a){var b=f(a);k(b,h)||(g=d(a,void 0,void 0,[b]),h=b&&fc(b));return g},b,c,e)}for(var l=[],m=[],n=0,r=f.length;n<r;n++)l[n]=k,m[n]=null;return a.$watch(function(a){for(var b=!1,c=0,e=f.length;c<e;c++){var h=f[c](a);
if(b||(b=!k(h,l[c])))m[c]=h,l[c]=h&&fc(h)}b&&(g=d(a,void 0,void 0,m));return g},b,c,e)}function n(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;E(b)&&b.apply(this,arguments);x(a)&&d.$$postDigest(function(){x(f)&&e()})},c)}function m(a,b,c,d){function e(a){var b=!0;q(a,function(a){x(a)||(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,c,d){g=a;E(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function r(a,b,c,d){var e;
return e=a.$watch(function(a){e();return d(a)},b,c)}function N(a,b){if(!b)return a;var c=a.$$watchDelegate,d=!1,c=c!==m&&c!==n?function(c,e,f,g){f=d&&g?g[0]:a(c,e,f,g);return b(f,c,e)}:function(c,d,e,f){e=a(c,d,e,f);c=b(e,c,d);return x(e)?c:e};a.$$watchDelegate&&a.$$watchDelegate!==l?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=l,d=!a.inputs,c.inputs=a.inputs?a.inputs:[a]);return c}var M=Ea().noUnsafeEval,w={csp:M,expensiveChecks:!1,literals:qa(d),isIdentifierStart:E(c)&&c,
isIdentifierContinue:E(e)&&e},p={csp:M,expensiveChecks:!0,literals:qa(d),isIdentifierStart:E(c)&&c,isIdentifierContinue:E(e)&&e},H=!1;g.$$runningExpensiveChecks=function(){return H};return g}]}function uf(){this.$get=["$rootScope","$exceptionHandler",function(a,b){return ud(function(b){a.$evalAsync(b)},b)}]}function vf(){this.$get=["$browser","$exceptionHandler",function(a,b){return ud(function(b){a.defer(b)},b)}]}function ud(a,b){function d(){this.$$state={status:0}}function c(a,b){return function(c){b.call(a,
c)}}function e(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,a(function(){var a,d,e;e=c.pending;c.processScheduled=!1;c.pending=void 0;for(var f=0,g=e.length;f<g;++f){d=e[f][0];a=e[f][c.status];try{E(a)?d.resolve(a(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),b(h)}}}))}function f(){this.promise=new d}var g=O("$q",TypeError);R(d.prototype,{then:function(a,b,c){if(y(a)&&y(b)&&y(c))return this;var d=new f;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,
a,b,c]);0<this.$$state.status&&e(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return k(b,!0,a)},function(b){return k(b,!1,a)},b)}});R(f.prototype,{resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(g("qcycle",a)):this.$$resolve(a))},$$resolve:function(a){function d(a){k||(k=!0,h.$$resolve(a))}function f(a){k||(k=!0,h.$$reject(a))}var g,h=this,k=!1;try{if(G(a)||E(a))g=a&&a.then;E(g)?
(this.promise.$$state.status=-1,g.call(a,d,f,c(this,this.notify))):(this.promise.$$state.value=a,this.promise.$$state.status=1,e(this.promise.$$state))}catch(l){f(l),b(l)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;e(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&a(function(){for(var a,e,f=0,g=d.length;f<g;f++){e=d[f][0];
a=d[f][3];try{e.notify(E(a)?a(c):c)}catch(h){b(h)}}})}});var h=function(a,b){var c=new f;b?c.resolve(a):c.reject(a);return c.promise},k=function(a,b,c){var d=null;try{E(c)&&(d=c())}catch(e){return h(e,!1)}return d&&E(d.then)?d.then(function(){return h(a,b)},function(a){return h(a,!1)}):h(a,b)},l=function(a,b,c,d){var e=new f;e.resolve(a);return e.promise.then(b,c,d)},n=function(a){if(!E(a))throw g("norslvr",a);var b=new f;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};n.prototype=
d.prototype;n.defer=function(){var a=new f;a.resolve=c(a,a.resolve);a.reject=c(a,a.reject);a.notify=c(a,a.notify);return a};n.reject=function(a){var b=new f;b.reject(a);return b.promise};n.when=l;n.resolve=l;n.all=function(a){var b=new f,c=0,d=K(a)?[]:{};q(a,function(a,e){c++;l(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return n}function Ef(){this.$get=["$window","$timeout",function(a,
b){var d=a.requestAnimationFrame||a.webkitRequestAnimationFrame,c=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.webkitCancelRequestAnimationFrame,e=!!d,f=e?function(a){var b=d(a);return function(){c(b)}}:function(a){var c=b(a,16.66,!1);return function(){b.cancel(c)}};f.supported=e;return f}]}function tf(){function a(a){function b(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++nb;this.$$ChildScope=
null}b.prototype=a;return b}var b=10,d=O("$rootScope"),c=null,e=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$exceptionHandler","$parse","$browser",function(f,g,h){function k(a){a.currentScope.$$destroyed=!0}function l(a){9===Ca&&(a.$$childHead&&l(a.$$childHead),a.$$nextSibling&&l(a.$$nextSibling));a.$parent=a.$$nextSibling=a.$$prevSibling=a.$$childHead=a.$$childTail=a.$root=a.$$watchers=null}function n(){this.$id=++nb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=
this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}function m(a){if(H.$$phase)throw d("inprog",H.$$phase);H.$$phase=a}function r(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function N(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function s(){}function w(){for(;u.length;)try{u.shift()()}catch(a){f(a)}e=
null}function p(){null===e&&(e=h.defer(function(){H.$apply(w)}))}n.prototype={constructor:n,$new:function(b,c){var d;c=c||this;b?(d=new n,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=a(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(b||c!=this)&&d.$on("$destroy",k);return d},$watch:function(a,b,d,e){var f=g(a);if(f.$$watchDelegate)return f.$$watchDelegate(this,b,d,f,
a);var h=this,k=h.$$watchers,l={fn:b,last:s,get:f,exp:e||a,eq:!!d};c=null;E(b)||(l.fn=C);k||(k=h.$$watchers=[]);k.unshift(l);r(this,1);return function(){0<=Za(k,l)&&r(h,-1);c=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&b(e,e,g)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});q(a,function(a,
b){var k=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!y(e)){if(G(e))if(ya(e))for(f!==m&&(f=m,t=f.length=0,l++),a=e.length,t!==a&&(l++,f.length=t=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==r&&(f=r={},t=0,l++);a=0;for(b in e)ua.call(e,b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(t++,f[b]=g,l++));if(t>
a)for(b in l++,f)ua.call(e,b)||(t--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$stateful=!0;var d=this,e,f,h,k=1<b.length,l=0,n=g(a,c),m=[],r={},p=!0,t=0;return this.$watch(n,function(){p?(p=!1,b(e,e,d)):b(e,h,d);if(k)if(G(e))if(ya(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)ua.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var a,g,k,l,n,r,p,q,N=b,u,x=[],y,v;m("$digest");h.$$checkUrlChange();this===H&&null!==e&&(h.defer.cancel(e),w());c=null;do{q=!1;
for(u=this;t.length;){try{v=t.shift(),v.scope.$eval(v.expression,v.locals)}catch(C){f(C)}c=null}a:do{if(r=u.$$watchers)for(p=r.length;p--;)try{if(a=r[p])if(n=a.get,(g=n(u))!==(k=a.last)&&!(a.eq?pa(g,k):"number"===typeof g&&"number"===typeof k&&isNaN(g)&&isNaN(k)))q=!0,c=a,a.last=a.eq?qa(g,null):g,l=a.fn,l(g,k===s?g:k,u),5>N&&(y=4-N,x[y]||(x[y]=[]),x[y].push({msg:E(a.exp)?"fn: "+(a.exp.name||a.exp.toString()):a.exp,newVal:g,oldVal:k}));else if(a===c){q=!1;break a}}catch(F){f(F)}if(!(r=u.$$watchersCount&&
u.$$childHead||u!==this&&u.$$nextSibling))for(;u!==this&&!(r=u.$$nextSibling);)u=u.$parent}while(u=r);if((q||t.length)&&!N--)throw H.$$phase=null,d("infdig",b,x);}while(q||t.length);for(H.$$phase=null;z.length;)try{z.shift()()}catch(B){f(B)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===H&&h.$$applicationDestroyed();r(this,-this.$$watchersCount);for(var b in this.$$listenerCount)N(this,this.$$listenerCount[b],b);a&&a.$$childHead==
this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=C;this.$on=this.$watch=this.$watchGroup=function(){return C};this.$$listeners={};this.$$nextSibling=null;l(this)}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a,b){H.$$phase||
t.length||h.defer(function(){t.length&&H.$digest()});t.push({scope:this,expression:g(a),locals:b})},$$postDigest:function(a){z.push(a)},$apply:function(a){try{m("$apply");try{return this.$eval(a)}finally{H.$$phase=null}}catch(b){f(b)}finally{try{H.$digest()}catch(c){throw f(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&u.push(b);a=g(a);p()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=
0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,N(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,g=!1,h={name:a,targetScope:e,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=$a([h],arguments,1),l,n;do{d=e.$$listeners[a]||c;h.currentScope=e;l=0;for(n=d.length;l<n;l++)if(d[l])try{d[l].apply(null,k)}catch(m){f(m)}else d.splice(l,1),l--,n--;if(g)return h.currentScope=null,h;e=e.$parent}while(e);
h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var g=$a([e],arguments,1),h,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){f(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=
null;return e}};var H=new n,t=H.$$asyncQueue=[],z=H.$$postDigestQueue=[],u=H.$$applyAsyncQueue=[];return H}]}function me(){var a=/^\s*(https?|ftp|mailto|tel|file):/,b=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(b){return x(b)?(a=b,this):a};this.imgSrcSanitizationWhitelist=function(a){return x(a)?(b=a,this):b};this.$get=function(){return function(d,c){var e=c?b:a,f;f=ra(d).href;return""===f||f.match(e)?d:"unsafe:"+f}}}function lg(a){if("self"===a)return a;
if(F(a)){if(-1<a.indexOf("***"))throw ta("iwcard",a);a=vd(a).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+a+"$")}if(Wa(a))return new RegExp("^"+a.source+"$");throw ta("imatcher");}function wd(a){var b=[];x(a)&&q(a,function(a){b.push(lg(a))});return b}function xf(){this.SCE_CONTEXTS=oa;var a=["self"],b=[];this.resourceUrlWhitelist=function(b){arguments.length&&(a=wd(b));return a};this.resourceUrlBlacklist=function(a){arguments.length&&(b=wd(a));return b};this.$get=["$injector",
function(d){function c(a,b){return"self"===a?hd(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw ta("unsafe");};d.has("$sanitize")&&(f=d.get("$sanitize"));var g=e(),h={};h[oa.HTML]=e(g);h[oa.CSS]=e(g);h[oa.URL]=e(g);h[oa.JS]=e(g);h[oa.RESOURCE_URL]=
e(h[oa.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw ta("icontext",a,b);if(null===b||y(b)||""===b)return b;if("string"!==typeof b)throw ta("itype",a);return new c(b)},getTrusted:function(d,e){if(null===e||y(e)||""===e)return e;var g=h.hasOwnProperty(d)?h[d]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(d===oa.RESOURCE_URL){var g=ra(e.toString()),m,r,q=!1;m=0;for(r=a.length;m<r;m++)if(c(a[m],g)){q=!0;break}if(q)for(m=0,r=b.length;m<r;m++)if(c(b[m],
g)){q=!1;break}if(q)return e;throw ta("insecurl",e.toString());}if(d===oa.HTML)return f(e);throw ta("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function wf(){var a=!0;this.enabled=function(b){arguments.length&&(a=!!b);return a};this.$get=["$parse","$sceDelegate",function(b,d){if(a&&8>Ca)throw ta("iequirks");var c=ha(oa);c.isEnabled=function(){return a};c.trustAs=d.trustAs;c.getTrusted=d.getTrusted;c.valueOf=d.valueOf;a||(c.trustAs=c.getTrusted=function(a,b){return b},
c.valueOf=Xa);c.parseAs=function(a,d){var e=b(d);return e.literal&&e.constant?e:b(d,function(b){return c.getTrusted(a,b)})};var e=c.parseAs,f=c.getTrusted,g=c.trustAs;q(oa,function(a,b){var d=P(b);c[cb("parse_as_"+d)]=function(b){return e(a,b)};c[cb("get_trusted_"+d)]=function(b){return f(a,b)};c[cb("trust_as_"+d)]=function(b){return g(a,b)}});return c}]}function yf(){this.$get=["$window","$document",function(a,b){var d={},c=!(a.chrome&&a.chrome.app&&a.chrome.app.runtime)&&a.history&&a.history.pushState,
e=X((/android (\d+)/.exec(P((a.navigator||{}).userAgent))||[])[1]),f=/Boxee/i.test((a.navigator||{}).userAgent),g=b[0]||{},h,k=/^(Moz|webkit|ms)(?=[A-Z])/,l=g.body&&g.body.style,n=!1,m=!1;if(l){for(var r in l)if(n=k.exec(r)){h=n[0];h=h.substr(0,1).toUpperCase()+h.substr(1);break}h||(h="WebkitOpacity"in l&&"webkit");n=!!("transition"in l||h+"Transition"in l);m=!!("animation"in l||h+"Animation"in l);!e||n&&m||(n=F(l.webkitTransition),m=F(l.webkitAnimation))}return{history:!(!c||4>e||f),hasEvent:function(a){if("input"===
a&&11>=Ca)return!1;if(y(d[a])){var b=g.createElement("div");d[a]="on"+a in b}return d[a]},csp:Ea(),vendorPrefix:h,transitions:n,animations:m,android:e}}]}function Af(){var a;this.httpOptions=function(b){return b?(a=b,this):a};this.$get=["$templateCache","$http","$q","$sce",function(b,d,c,e){function f(g,h){f.totalPendingRequests++;F(g)&&b.get(g)||(g=e.getTrustedResourceUrl(g));var k=d.defaults&&d.defaults.transformResponse;K(k)?k=k.filter(function(a){return a!==ac}):k===ac&&(k=null);return d.get(g,
R({cache:b,transformResponse:k},a))["finally"](function(){f.totalPendingRequests--}).then(function(a){b.put(g,a.data);return a.data},function(a){if(!h)throw mg("tpload",g,a.status,a.statusText);return c.reject(a)})}f.totalPendingRequests=0;return f}]}function Bf(){this.$get=["$rootScope","$browser","$location",function(a,b,d){return{findBindings:function(a,b,d){a=a.getElementsByClassName("ng-binding");var g=[];q(a,function(a){var c=ea.element(a).data("$binding");c&&q(c,function(c){d?(new RegExp("(^|\\s)"+
vd(b)+"(\\s|\\||$)")).test(c)&&g.push(a):-1!=c.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,d){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var k=a.querySelectorAll("["+g[h]+"model"+(d?"=":"*=")+'"'+b+'"]');if(k.length)return k}},getLocation:function(){return d.url()},setLocation:function(b){b!==d.url()&&(d.url(b),a.$digest())},whenStable:function(a){b.notifyWhenNoOutstandingRequests(a)}}}]}function Cf(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",
function(a,b,d,c,e){function f(f,k,l){E(f)||(l=k,k=f,f=C);var n=za.call(arguments,3),m=x(l)&&!l,r=(m?c:d).defer(),q=r.promise,s;s=b.defer(function(){try{r.resolve(f.apply(null,n))}catch(b){r.reject(b),e(b)}finally{delete g[q.$$timeoutId]}m||a.$apply()},k);q.$$timeoutId=s;g[s]=r;return q}var g={};f.cancel=function(a){return a&&a.$$timeoutId in g?(g[a.$$timeoutId].reject("canceled"),delete g[a.$$timeoutId],b.defer.cancel(a.$$timeoutId)):!1};return f}]}function ra(a){Ca&&(Y.setAttribute("href",a),a=
Y.href);Y.setAttribute("href",a);return{href:Y.href,protocol:Y.protocol?Y.protocol.replace(/:$/,""):"",host:Y.host,search:Y.search?Y.search.replace(/^\?/,""):"",hash:Y.hash?Y.hash.replace(/^#/,""):"",hostname:Y.hostname,port:Y.port,pathname:"/"===Y.pathname.charAt(0)?Y.pathname:"/"+Y.pathname}}function hd(a){a=F(a)?ra(a):a;return a.protocol===xd.protocol&&a.host===xd.host}function Df(){this.$get=da(v)}function yd(a){function b(a){try{return decodeURIComponent(a)}catch(b){return a}}var d=a[0]||{},
c={},e="";return function(){var a,g,h,k,l;a=d.cookie||"";if(a!==e)for(e=a,a=e.split("; "),c={},h=0;h<a.length;h++)g=a[h],k=g.indexOf("="),0<k&&(l=b(g.substring(0,k)),y(c[l])&&(c[l]=b(g.substring(k+1))));return c}}function Hf(){this.$get=yd}function Jc(a){function b(d,c){if(G(d)){var e={};q(d,function(a,c){e[c]=b(c,a)});return e}return a.factory(d+"Filter",c)}this.register=b;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];b("currency",zd);b("date",Ad);b("filter",ng);
b("json",og);b("limitTo",pg);b("lowercase",qg);b("number",Bd);b("orderBy",Cd);b("uppercase",rg)}function ng(){return function(a,b,d){if(!ya(a)){if(null==a)return a;throw O("filter")("notarray",a);}var c;switch(ic(b)){case "function":break;case "boolean":case "null":case "number":case "string":c=!0;case "object":b=sg(b,d,c);break;default:return a}return Array.prototype.filter.call(a,b)}}function sg(a,b,d){var c=G(a)&&"$"in a;!0===b?b=pa:E(b)||(b=function(a,b){if(y(a))return!1;if(null===a||null===b)return a===
b;if(G(b)||G(a)&&!rc(a))return!1;a=P(""+a);b=P(""+b);return-1!==a.indexOf(b)});return function(e){return c&&!G(e)?Ka(e,a.$,b,!1):Ka(e,a,b,d)}}function Ka(a,b,d,c,e){var f=ic(a),g=ic(b);if("string"===g&&"!"===b.charAt(0))return!Ka(a,b.substring(1),d,c);if(K(a))return a.some(function(a){return Ka(a,b,d,c)});switch(f){case "object":var h;if(c){for(h in a)if("$"!==h.charAt(0)&&Ka(a[h],b,d,!0))return!0;return e?!1:Ka(a,b,d,!1)}if("object"===g){for(h in b)if(e=b[h],!E(e)&&!y(e)&&(f="$"===h,!Ka(f?a:a[h],
e,d,f,f)))return!1;return!0}return d(a,b);case "function":return!1;default:return d(a,b)}}function ic(a){return null===a?"null":typeof a}function zd(a){var b=a.NUMBER_FORMATS;return function(a,c,e){y(c)&&(c=b.CURRENCY_SYM);y(e)&&(e=b.PATTERNS[1].maxFrac);return null==a?a:Dd(a,b.PATTERNS[1],b.GROUP_SEP,b.DECIMAL_SEP,e).replace(/\u00A4/g,c)}}function Bd(a){var b=a.NUMBER_FORMATS;return function(a,c){return null==a?a:Dd(a,b.PATTERNS[0],b.GROUP_SEP,b.DECIMAL_SEP,c)}}function tg(a){var b=0,d,c,e,f,g;-1<
(c=a.indexOf(Ed))&&(a=a.replace(Ed,""));0<(e=a.search(/e/i))?(0>c&&(c=e),c+=+a.slice(e+1),a=a.substring(0,e)):0>c&&(c=a.length);for(e=0;a.charAt(e)==jc;e++);if(e==(g=a.length))d=[0],c=1;else{for(g--;a.charAt(g)==jc;)g--;c-=e;d=[];for(f=0;e<=g;e++,f++)d[f]=+a.charAt(e)}c>Fd&&(d=d.splice(0,Fd-1),b=c-1,c=1);return{d:d,e:b,i:c}}function ug(a,b,d,c){var e=a.d,f=e.length-a.i;b=y(b)?Math.min(Math.max(d,f),c):+b;d=b+a.i;c=e[d];if(0<d){e.splice(Math.max(a.i,d));for(var g=d;g<e.length;g++)e[g]=0}else for(f=
Math.max(0,f),a.i=1,e.length=Math.max(1,d=b+1),e[0]=0,g=1;g<d;g++)e[g]=0;if(5<=c)if(0>d-1){for(c=0;c>d;c--)e.unshift(0),a.i++;e.unshift(1);a.i++}else e[d-1]++;for(;f<Math.max(0,b);f++)e.push(0);if(b=e.reduceRight(function(a,b,c,d){b+=a;d[c]=b%10;return Math.floor(b/10)},0))e.unshift(b),a.i++}function Dd(a,b,d,c,e){if(!F(a)&&!Q(a)||isNaN(a))return"";var f=!isFinite(a),g=!1,h=Math.abs(a)+"",k="";if(f)k="\u221e";else{g=tg(h);ug(g,e,b.minFrac,b.maxFrac);k=g.d;h=g.i;e=g.e;f=[];for(g=k.reduce(function(a,
b){return a&&!b},!0);0>h;)k.unshift(0),h++;0<h?f=k.splice(h):(f=k,k=[0]);h=[];for(k.length>=b.lgSize&&h.unshift(k.splice(-b.lgSize).join(""));k.length>b.gSize;)h.unshift(k.splice(-b.gSize).join(""));k.length&&h.unshift(k.join(""));k=h.join(d);f.length&&(k+=c+f.join(""));e&&(k+="e+"+e)}return 0>a&&!g?b.negPre+k+b.negSuf:b.posPre+k+b.posSuf}function Ib(a,b,d,c){var e="";if(0>a||c&&0>=a)c?a=-a+1:(a=-a,e="-");for(a=""+a;a.length<b;)a=jc+a;d&&(a=a.substr(a.length-b));return e+a}function W(a,b,d,c,e){d=
d||0;return function(f){f=f["get"+a]();if(0<d||f>-d)f+=d;0===f&&-12==d&&(f=12);return Ib(f,b,c,e)}}function ib(a,b,d){return function(c,e){var f=c["get"+a](),g=sb((d?"STANDALONE":"")+(b?"SHORT":"")+a);return e[g][f]}}function Gd(a){var b=(new Date(a,0,1)).getDay();return new Date(a,0,(4>=b?5:12)-b)}function Hd(a){return function(b){var d=Gd(b.getFullYear());b=+new Date(b.getFullYear(),b.getMonth(),b.getDate()+(4-b.getDay()))-+d;b=1+Math.round(b/6048E5);return Ib(b,a)}}function kc(a,b){return 0>=a.getFullYear()?
b.ERAS[0]:b.ERAS[1]}function Ad(a){function b(a){var b;if(b=a.match(d)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,k=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=X(b[9]+b[10]),g=X(b[9]+b[11]));h.call(a,X(b[1]),X(b[2])-1,X(b[3]));f=X(b[4]||0)-f;g=X(b[5]||0)-g;h=X(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));k.call(a,f,g,h,b)}return a}var d=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,d,f){var g="",h=
[],k,l;d=d||"mediumDate";d=a.DATETIME_FORMATS[d]||d;F(c)&&(c=vg.test(c)?X(c):b(c));Q(c)&&(c=new Date(c));if(!fa(c)||!isFinite(c.getTime()))return c;for(;d;)(l=wg.exec(d))?(h=$a(h,l,1),d=h.pop()):(h.push(d),d=null);var n=c.getTimezoneOffset();f&&(n=vc(f,n),c=Qb(c,f,!0));q(h,function(b){k=xg[b];g+=k?k(c,a.DATETIME_FORMATS,n):"''"===b?"'":b.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function og(){return function(a,b){y(b)&&(b=2);return ab(a,b)}}function pg(){return function(a,b,d){b=Infinity===
Math.abs(Number(b))?Number(b):X(b);if(isNaN(b))return a;Q(a)&&(a=a.toString());if(!K(a)&&!F(a))return a;d=!d||isNaN(d)?0:X(d);d=0>d?Math.max(0,a.length+d):d;return 0<=b?a.slice(d,d+b):0===d?a.slice(b,a.length):a.slice(Math.max(0,d+b),d)}}function Cd(a){function b(b,d){d=d?-1:1;return b.map(function(b){var c=1,h=Xa;if(E(b))h=b;else if(F(b)){if("+"==b.charAt(0)||"-"==b.charAt(0))c="-"==b.charAt(0)?-1:1,b=b.substring(1);if(""!==b&&(h=a(b),h.constant))var k=h(),h=function(a){return a[k]}}return{get:h,
descending:c*d}})}function d(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}return function(a,e,f){if(null==a)return a;if(!ya(a))throw O("orderBy")("notarray",a);K(e)||(e=[e]);0===e.length&&(e=["+"]);var g=b(e,f);g.push({get:function(){return{}},descending:f?-1:1});a=Array.prototype.map.call(a,function(a,b){return{value:a,predicateValues:g.map(function(c){var e=c.get(a);c=typeof e;if(null===e)c="string",e="null";else if("string"===c)e=e.toLowerCase();else if("object"===
c)a:{if("function"===typeof e.valueOf&&(e=e.valueOf(),d(e)))break a;if(rc(e)&&(e=e.toString(),d(e)))break a;e=b}return{value:e,type:c}})}});a.sort(function(a,b){for(var c=0,d=0,e=g.length;d<e;++d){var c=a.predicateValues[d],f=b.predicateValues[d],q=0;c.type===f.type?c.value!==f.value&&(q=c.value<f.value?-1:1):q=c.type<f.type?-1:1;if(c=q*g[d].descending)break}return c});return a=a.map(function(a){return a.value})}}function La(a){E(a)&&(a={link:a});a.restrict=a.restrict||"AC";return da(a)}function Id(a,
b,d,c,e){var f=this,g=[];f.$error={};f.$$success={};f.$pending=void 0;f.$name=e(b.name||b.ngForm||"")(d);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;f.$$parentForm=Jb;f.$rollbackViewValue=function(){q(g,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){q(g,function(a){a.$commitViewValue()})};f.$addControl=function(a){Qa(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a);a.$$parentForm=f};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];
f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];q(f.$pending,function(b,c){f.$setValidity(c,null,a)});q(f.$error,function(b,c){f.$setValidity(c,null,a)});q(f.$$success,function(b,c){f.$setValidity(c,null,a)});Za(g,a);a.$$parentForm=Jb};Jd({ctrl:this,$element:a,set:function(a,b,c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(Za(d,c),0===d.length&&delete a[b])},$animate:c});f.$setDirty=function(){c.removeClass(a,Ua);
c.addClass(a,Kb);f.$dirty=!0;f.$pristine=!1;f.$$parentForm.$setDirty()};f.$setPristine=function(){c.setClass(a,Ua,Kb+" ng-submitted");f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;q(g,function(a){a.$setPristine()})};f.$setUntouched=function(){q(g,function(a){a.$setUntouched()})};f.$setSubmitted=function(){c.addClass(a,"ng-submitted");f.$submitted=!0;f.$$parentForm.$setSubmitted()}}function lc(a){a.$formatters.push(function(b){return a.$isEmpty(b)?b:b.toString()})}function jb(a,b,d,c,e,f){var g=P(b[0].type);
if(!e.android){var h=!1;b.on("compositionstart",function(){h=!0});b.on("compositionend",function(){h=!1;l()})}var k,l=function(a){k&&(f.defer.cancel(k),k=null);if(!h){var e=b.val();a=a&&a.type;"password"===g||d.ngTrim&&"false"===d.ngTrim||(e=V(e));(c.$viewValue!==e||""===e&&c.$$hasNativeValidators)&&c.$setViewValue(e,a)}};if(e.hasEvent("input"))b.on("input",l);else{var n=function(a,b,c){k||(k=f.defer(function(){k=null;b&&b.value===c||l(a)}))};b.on("keydown",function(a){var b=a.keyCode;91===b||15<
b&&19>b||37<=b&&40>=b||n(a,this,this.value)});if(e.hasEvent("paste"))b.on("paste cut",n)}b.on("change",l);if(Kd[g]&&c.$$hasNativeValidators&&g===d.type)b.on("keydown wheel mousedown",function(a){if(!k){var b=this.validity,c=b.badInput,d=b.typeMismatch;k=f.defer(function(){k=null;b.badInput===c&&b.typeMismatch===d||l(a)})}});c.$render=function(){var a=c.$isEmpty(c.$viewValue)?"":c.$viewValue;b.val()!==a&&b.val(a)}}function Lb(a,b){return function(d,c){var e,f;if(fa(d))return d;if(F(d)){'"'==d.charAt(0)&&
'"'==d.charAt(d.length-1)&&(d=d.substring(1,d.length-1));if(yg.test(d))return new Date(d);a.lastIndex=0;if(e=a.exec(d))return e.shift(),f=c?{yyyy:c.getFullYear(),MM:c.getMonth()+1,dd:c.getDate(),HH:c.getHours(),mm:c.getMinutes(),ss:c.getSeconds(),sss:c.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},q(e,function(a,c){c<b.length&&(f[b[c]]=+a)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function kb(a,b,d,c){return function(e,f,g,h,k,l,n){function m(a){return a&&
!(a.getTime&&a.getTime()!==a.getTime())}function r(a){return x(a)&&!fa(a)?d(a)||void 0:a}Ld(e,f,g,h);jb(e,f,g,h,k,l);var q=h&&h.$options&&h.$options.timezone,s;h.$$parserName=a;h.$parsers.push(function(a){if(h.$isEmpty(a))return null;if(b.test(a))return a=d(a,s),q&&(a=Qb(a,q)),a});h.$formatters.push(function(a){if(a&&!fa(a))throw lb("datefmt",a);if(m(a))return(s=a)&&q&&(s=Qb(s,q,!0)),n("date")(a,c,q);s=null;return""});if(x(g.min)||g.ngMin){var w;h.$validators.min=function(a){return!m(a)||y(w)||d(a)>=
w};g.$observe("min",function(a){w=r(a);h.$validate()})}if(x(g.max)||g.ngMax){var p;h.$validators.max=function(a){return!m(a)||y(p)||d(a)<=p};g.$observe("max",function(a){p=r(a);h.$validate()})}}}function Ld(a,b,d,c){(c.$$hasNativeValidators=G(b[0].validity))&&c.$parsers.push(function(a){var c=b.prop("validity")||{};return c.badInput||c.typeMismatch?void 0:a})}function Md(a,b,d,c,e){if(x(c)){a=a(c);if(!a.constant)throw lb("constexpr",d,c);return a(b)}return e}function mc(a,b){a="ngClass"+a;return["$animate",
function(d){function c(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],n=0;n<b.length;n++)if(e==b[n])continue a;c.push(e)}return c}function e(a){var b=[];return K(a)?(q(a,function(a){b=b.concat(e(a))}),b):F(a)?a.split(" "):G(a)?(q(a,function(a,c){a&&(b=b.concat(c.split(" ")))}),b):a}return{restrict:"AC",link:function(f,g,h){function k(a){a=l(a,1);h.$addClass(a)}function l(a,b){var c=g.data("$classCounts")||T(),d=[];q(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",
c);return d.join(" ")}function n(a,b){var e=c(b,a),f=c(a,b),e=l(e,1),f=l(f,-1);e&&e.length&&d.addClass(g,e);f&&f.length&&d.removeClass(g,f)}function m(a){if(!0===b||f.$index%2===b){var c=e(a||[]);if(!r)k(c);else if(!pa(a,r)){var d=e(r);n(d,c)}}r=K(a)?a.map(function(a){return ha(a)}):ha(a)}var r;f.$watch(h[a],m,!0);h.$observe("class",function(b){m(f.$eval(h[a]))});"ngClass"!==a&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var m=e(f.$eval(h[a]));g===b?k(m):(g=l(m,-1),h.$removeClass(g))}})}}}]}
function Jd(a){function b(a,b){b&&!f[a]?(k.addClass(e,a),f[a]=!0):!b&&f[a]&&(k.removeClass(e,a),f[a]=!1)}function d(a,c){a=a?"-"+zc(a,"-"):"";b(mb+a,!0===c);b(Nd+a,!1===c)}var c=a.ctrl,e=a.$element,f={},g=a.set,h=a.unset,k=a.$animate;f[Nd]=!(f[mb]=e.hasClass(mb));c.$setValidity=function(a,e,f){y(e)?(c.$pending||(c.$pending={}),g(c.$pending,a,f)):(c.$pending&&h(c.$pending,a,f),Od(c.$pending)&&(c.$pending=void 0));Da(e)?e?(h(c.$error,a,f),g(c.$$success,a,f)):(g(c.$error,a,f),h(c.$$success,a,f)):(h(c.$error,
a,f),h(c.$$success,a,f));c.$pending?(b(Pd,!0),c.$valid=c.$invalid=void 0,d("",null)):(b(Pd,!1),c.$valid=Od(c.$error),c.$invalid=!c.$valid,d("",c.$valid));e=c.$pending&&c.$pending[a]?void 0:c.$error[a]?!1:c.$$success[a]?!0:null;d(a,e);c.$$parentForm.$setValidity(a,e,c)}}function Od(a){if(a)for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}var zg=/^\/(.+)\/([a-z]*)$/,ua=Object.prototype.hasOwnProperty,P=function(a){return F(a)?a.toLowerCase():a},sb=function(a){return F(a)?a.toUpperCase():a},Ca,
B,Z,za=[].slice,Zf=[].splice,Ag=[].push,ma=Object.prototype.toString,sc=Object.getPrototypeOf,Aa=O("ng"),ea=v.angular||(v.angular={}),Sb,nb=0;Ca=v.document.documentMode;C.$inject=[];Xa.$inject=[];var K=Array.isArray,$d=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/,V=function(a){return F(a)?a.trim():a},vd=function(a){return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},Ea=function(){if(!x(Ea.rules)){var a=v.document.querySelector("[ng-csp]")||
v.document.querySelector("[data-ng-csp]");if(a){var b=a.getAttribute("ng-csp")||a.getAttribute("data-ng-csp");Ea.rules={noUnsafeEval:!b||-1!==b.indexOf("no-unsafe-eval"),noInlineStyle:!b||-1!==b.indexOf("no-inline-style")}}else{a=Ea;try{new Function(""),b=!1}catch(d){b=!0}a.rules={noUnsafeEval:b,noInlineStyle:!1}}}return Ea.rules},pb=function(){if(x(pb.name_))return pb.name_;var a,b,d=Na.length,c,e;for(b=0;b<d;++b)if(c=Na[b],a=v.document.querySelector("["+c.replace(":","\\:")+"jq]")){e=a.getAttribute(c+
"jq");break}return pb.name_=e},ce=/:/g,Na=["ng-","data-ng-","ng:","x-ng-"],he=/[A-Z]/g,Ac=!1,Ma=3,le={full:"1.5.5",major:1,minor:5,dot:5,codeName:"material-conspiration"};U.expando="ng339";var eb=U.cache={},Nf=1;U._data=function(a){return this.cache[a[this.expando]]||{}};var If=/([\:\-\_]+(.))/g,Jf=/^moz([A-Z])/,wb={mouseleave:"mouseout",mouseenter:"mouseover"},Ub=O("jqLite"),Mf=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,Tb=/<|&#?\w+;/,Kf=/<([\w:-]+)/,Lf=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
ia={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option;ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead;ia.th=ia.td;var Sf=v.Node.prototype.contains||function(a){return!!(this.compareDocumentPosition(a)&16)},Oa=U.prototype={ready:function(a){function b(){d||(d=!0,a())}var d=!1;"complete"===
v.document.readyState?v.setTimeout(b):(this.on("DOMContentLoaded",b),U(v).on("load",b))},toString:function(){var a=[];q(this,function(b){a.push(""+b)});return"["+a.join(", ")+"]"},eq:function(a){return 0<=a?B(this[a]):B(this[this.length+a])},length:0,push:Ag,sort:[].sort,splice:[].splice},Cb={};q("multiple selected checked disabled readOnly required open".split(" "),function(a){Cb[P(a)]=a});var Sc={};q("input select option textarea button form details".split(" "),function(a){Sc[a]=!0});var ad={ngMinlength:"minlength",
ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};q({data:Wb,removeData:db,hasData:function(a){for(var b in eb[a.ng339])return!0;return!1},cleanData:function(a){for(var b=0,d=a.length;b<d;b++)db(a[b])}},function(a,b){U[b]=a});q({data:Wb,inheritedData:Ab,scope:function(a){return B.data(a,"$scope")||Ab(a.parentNode||a,["$isolateScope","$scope"])},isolateScope:function(a){return B.data(a,"$isolateScope")||B.data(a,"$isolateScopeNoTemplate")},controller:Pc,injector:function(a){return Ab(a,
"$injector")},removeAttr:function(a,b){a.removeAttribute(b)},hasClass:xb,css:function(a,b,d){b=cb(b);if(x(d))a.style[b]=d;else return a.style[b]},attr:function(a,b,d){var c=a.nodeType;if(c!==Ma&&2!==c&&8!==c)if(c=P(b),Cb[c])if(x(d))d?(a[b]=!0,a.setAttribute(b,c)):(a[b]=!1,a.removeAttribute(c));else return a[b]||(a.attributes.getNamedItem(b)||C).specified?c:void 0;else if(x(d))a.setAttribute(b,d);else if(a.getAttribute)return a=a.getAttribute(b,2),null===a?void 0:a},prop:function(a,b,d){if(x(d))a[b]=
d;else return a[b]},text:function(){function a(a,d){if(y(d)){var c=a.nodeType;return 1===c||c===Ma?a.textContent:""}a.textContent=d}a.$dv="";return a}(),val:function(a,b){if(y(b)){if(a.multiple&&"select"===va(a)){var d=[];q(a.options,function(a){a.selected&&d.push(a.value||a.text)});return 0===d.length?null:d}return a.value}a.value=b},html:function(a,b){if(y(b))return a.innerHTML;ub(a,!0);a.innerHTML=b},empty:Qc},function(a,b){U.prototype[b]=function(b,c){var e,f,g=this.length;if(a!==Qc&&y(2==a.length&&
a!==xb&&a!==Pc?b:c)){if(G(b)){for(e=0;e<g;e++)if(a===Wb)a(this[e],b);else for(f in b)a(this[e],f,b[f]);return this}e=a.$dv;g=y(e)?Math.min(g,1):g;for(f=0;f<g;f++){var h=a(this[f],b,c);e=e?e+h:h}return e}for(e=0;e<g;e++)a(this[e],b,c);return this}});q({removeData:db,on:function(a,b,d,c){if(x(c))throw Ub("onargs");if(Kc(a)){c=vb(a,!0);var e=c.events,f=c.handle;f||(f=c.handle=Pf(a,e));c=0<=b.indexOf(" ")?b.split(" "):[b];for(var g=c.length,h=function(b,c,g){var h=e[b];h||(h=e[b]=[],h.specialHandlerWrapper=
c,"$destroy"===b||g||a.addEventListener(b,f,!1));h.push(d)};g--;)b=c[g],wb[b]?(h(wb[b],Rf),h(b,void 0,!0)):h(b)}},off:Oc,one:function(a,b,d){a=B(a);a.on(b,function e(){a.off(b,d);a.off(b,e)});a.on(b,d)},replaceWith:function(a,b){var d,c=a.parentNode;ub(a);q(new U(b),function(b){d?c.insertBefore(b,d.nextSibling):c.replaceChild(b,a);d=b})},children:function(a){var b=[];q(a.childNodes,function(a){1===a.nodeType&&b.push(a)});return b},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,
b){var d=a.nodeType;if(1===d||11===d){b=new U(b);for(var d=0,c=b.length;d<c;d++)a.appendChild(b[d])}},prepend:function(a,b){if(1===a.nodeType){var d=a.firstChild;q(new U(b),function(b){a.insertBefore(b,d)})}},wrap:function(a,b){Mc(a,B(b).eq(0).clone()[0])},remove:Bb,detach:function(a){Bb(a,!0)},after:function(a,b){var d=a,c=a.parentNode;b=new U(b);for(var e=0,f=b.length;e<f;e++){var g=b[e];c.insertBefore(g,d.nextSibling);d=g}},addClass:zb,removeClass:yb,toggleClass:function(a,b,d){b&&q(b.split(" "),
function(b){var e=d;y(e)&&(e=!xb(a,b));(e?zb:yb)(a,b)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,b){return a.getElementsByTagName?a.getElementsByTagName(b):[]},clone:Vb,triggerHandler:function(a,b,d){var c,e,f=b.type||b,g=vb(a);if(g=(g=g&&g.events)&&g[f])c={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=
!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:C,type:f,target:a},b.type&&(c=R(c,b)),b=ha(g),e=d?[c].concat(d):[c],q(b,function(b){c.isImmediatePropagationStopped()||b.apply(a,e)})}},function(a,b){U.prototype[b]=function(b,c,e){for(var f,g=0,h=this.length;g<h;g++)y(f)?(f=a(this[g],b,c,e),x(f)&&(f=B(f))):Nc(f,a(this[g],b,c,e));return x(f)?f:this};U.prototype.bind=U.prototype.on;U.prototype.unbind=U.prototype.off});Ra.prototype={put:function(a,
b){this[Fa(a,this.nextUid)]=b},get:function(a){return this[Fa(a,this.nextUid)]},remove:function(a){var b=this[a=Fa(a,this.nextUid)];delete this[a];return b}};var Gf=[function(){this.$get=[function(){return Ra}]}],Uf=/^([^\(]+?)=>/,Vf=/^[^\(]*\(\s*([^\)]*)\)/m,Bg=/,/,Cg=/^\s*(_?)(\S+?)\1\s*$/,Tf=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ga=O("$injector");bb.$$annotate=function(a,b,d){var c;if("function"===typeof a){if(!(c=a.$inject)){c=[];if(a.length){if(b)throw F(d)&&d||(d=a.name||Wf(a)),Ga("strictdi",d);
b=Tc(a);q(b[1].split(Bg),function(a){a.replace(Cg,function(a,b,d){c.push(d)})})}a.$inject=c}}else K(a)?(b=a.length-1,Pa(a[b],"fn"),c=a.slice(0,b)):Pa(a,"fn",!0);return c};var Qd=O("$animate"),Ze=function(){this.$get=C},$e=function(){var a=new Ra,b=[];this.$get=["$$AnimateRunner","$rootScope",function(d,c){function e(a,b,c){var d=!1;b&&(b=F(b)?b.split(" "):K(b)?b:[],q(b,function(b){b&&(d=!0,a[b]=c)}));return d}function f(){q(b,function(b){var c=a.get(b);if(c){var d=Xf(b.attr("class")),e="",f="";q(c,
function(a,b){a!==!!d[b]&&(a?e+=(e.length?" ":"")+b:f+=(f.length?" ":"")+b)});q(b,function(a){e&&zb(a,e);f&&yb(a,f)});a.remove(b)}});b.length=0}return{enabled:C,on:C,off:C,pin:C,push:function(g,h,k,l){l&&l();k=k||{};k.from&&g.css(k.from);k.to&&g.css(k.to);if(k.addClass||k.removeClass)if(h=k.addClass,l=k.removeClass,k=a.get(g)||{},h=e(k,h,!0),l=e(k,l,!1),h||l)a.put(g,k),b.push(g),1===b.length&&c.$$postDigest(f);g=new d;g.complete();return g}}}]},Xe=["$provide",function(a){var b=this;this.$$registeredAnimations=
Object.create(null);this.register=function(d,c){if(d&&"."!==d.charAt(0))throw Qd("notcsel",d);var e=d+"-animation";b.$$registeredAnimations[d.substr(1)]=e;a.factory(e,c)};this.classNameFilter=function(a){if(1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null)&&/(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString()))throw Qd("nongcls","ng-animate");return this.$$classNameFilter};this.$get=["$$animateQueue",function(a){function b(a,c,d){if(d){var h;a:{for(h=0;h<d.length;h++){var k=
d[h];if(1===k.nodeType){h=k;break a}}h=void 0}!h||h.parentNode||h.previousElementSibling||(d=null)}d?d.after(a):c.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.end&&a.end()},enter:function(e,f,g,h){f=f&&B(f);g=g&&B(g);f=f||g.parent();b(e,f,g);return a.push(e,"enter",Ha(h))},move:function(e,f,g,h){f=f&&B(f);g=g&&B(g);f=f||g.parent();b(e,f,g);return a.push(e,"move",Ha(h))},leave:function(b,c){return a.push(b,"leave",Ha(c),function(){b.remove()})},addClass:function(b,
c,g){g=Ha(g);g.addClass=fb(g.addclass,c);return a.push(b,"addClass",g)},removeClass:function(b,c,g){g=Ha(g);g.removeClass=fb(g.removeClass,c);return a.push(b,"removeClass",g)},setClass:function(b,c,g,h){h=Ha(h);h.addClass=fb(h.addClass,c);h.removeClass=fb(h.removeClass,g);return a.push(b,"setClass",h)},animate:function(b,c,g,h,k){k=Ha(k);k.from=k.from?R(k.from,c):c;k.to=k.to?R(k.to,g):g;k.tempClasses=fb(k.tempClasses,h||"ng-inline-animate");return a.push(b,"animate",k)}}}]}],bf=function(){this.$get=
["$$rAF",function(a){function b(b){d.push(b);1<d.length||a(function(){for(var a=0;a<d.length;a++)d[a]();d=[]})}var d=[];return function(){var a=!1;b(function(){a=!0});return function(d){a?d():b(d)}}}]},af=function(){this.$get=["$q","$sniffer","$$animateAsyncRun","$document","$timeout",function(a,b,d,c,e){function f(a){this.setHost(a);var b=d();this._doneCallbacks=[];this._tick=function(a){var d=c[0];d&&d.hidden?e(a,0,!1):b(a)};this._state=0}f.chain=function(a,b){function c(){if(d===a.length)b(!0);
else a[d](function(a){!1===a?b(!1):(d++,c())})}var d=0;c()};f.all=function(a,b){function c(f){e=e&&f;++d===a.length&&b(e)}var d=0,e=!0;q(a,function(a){a.done(c)})};f.prototype={setHost:function(a){this.host=a||{}},done:function(a){2===this._state?a():this._doneCallbacks.push(a)},progress:C,getPromise:function(){if(!this.promise){var b=this;this.promise=a(function(a,c){b.done(function(b){!1===b?c():a()})})}return this.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},
"finally":function(a){return this.getPromise()["finally"](a)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&this.host.end();this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel();this._resolve(!1)},complete:function(a){var b=this;0===b._state&&(b._state=1,b._tick(function(){b._resolve(a)}))},_resolve:function(a){2!==this._state&&(q(this._doneCallbacks,function(b){b(a)}),this._doneCallbacks.length=
0,this._state=2)}};return f}]},Ye=function(){this.$get=["$$rAF","$q","$$AnimateRunner",function(a,b,d){return function(b,e){function f(){a(function(){g.addClass&&(b.addClass(g.addClass),g.addClass=null);g.removeClass&&(b.removeClass(g.removeClass),g.removeClass=null);g.to&&(b.css(g.to),g.to=null);h||k.complete();h=!0});return k}var g=e||{};g.$$prepared||(g=qa(g));g.cleanupStyles&&(g.from=g.to=null);g.from&&(b.css(g.from),g.from=null);var h,k=new d;return{start:f,end:f}}}]},ga=O("$compile"),Zb=new function(){};
Cc.$inject=["$provide","$$sanitizeUriProvider"];Db.prototype.isFirstChange=function(){return this.previousValue===Zb};var Vc=/^((?:x|data)[\:\-_])/i,$f=O("$controller"),bd=/^(\S+)(\s+as\s+([\w$]+))?$/,hf=function(){this.$get=["$document",function(a){return function(b){b?!b.nodeType&&b instanceof B&&(b=b[0]):b=a[0].body;return b.offsetWidth+1}}]},cd="application/json",bc={"Content-Type":cd+";charset=utf-8"},bg=/^\[|^\{(?!\{)/,cg={"[":/]$/,"{":/}$/},ag=/^\)\]\}',?\n/,Dg=O("$http"),gd=function(a){return function(){throw Dg("legacy",
a);}},Ja=ea.$interpolateMinErr=O("$interpolate");Ja.throwNoconcat=function(a){throw Ja("noconcat",a);};Ja.interr=function(a,b){return Ja("interr",a,b.toString())};var Eg=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,eg={http:80,https:443,ftp:21},Eb=O("$location"),Fg={$$html5:!1,$$replace:!1,absUrl:Fb("$$absUrl"),url:function(a){if(y(a))return this.$$url;var b=Eg.exec(a);(b[1]||""===a)&&this.path(decodeURIComponent(b[1]));(b[2]||b[1]||""===a)&&this.search(b[3]||"");this.hash(b[5]||"");return this},protocol:Fb("$$protocol"),
host:Fb("$$host"),port:Fb("$$port"),path:ld("$$path",function(a){a=null!==a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,b){switch(arguments.length){case 0:return this.$$search;case 1:if(F(a)||Q(a))a=a.toString(),this.$$search=xc(a);else if(G(a))a=qa(a,{}),q(a,function(b,c){null==b&&delete a[c]}),this.$$search=a;else throw Eb("isrcharg");break;default:y(b)||null===b?delete this.$$search[a]:this.$$search[a]=b}this.$$compose();return this},hash:ld("$$hash",function(a){return null!==
a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};q([kd,ec,dc],function(a){a.prototype=Object.create(Fg);a.prototype.state=function(b){if(!arguments.length)return this.$$state;if(a!==dc||!this.$$html5)throw Eb("nostate");this.$$state=y(b)?null:b;return this}});var ca=O("$parse"),gg=Function.prototype.call,hg=Function.prototype.apply,ig=Function.prototype.bind,Mb=T();q("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Mb[a]=!0});var Gg={n:"\n",f:"\f",r:"\r",
t:"\t",v:"\v","'":"'",'"':'"'},gc=function(a){this.options=a};gc.prototype={constructor:gc,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdentifierStart(this.peekMultichar()))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;
else{var b=a+this.peek(),d=b+this.peek(2),c=Mb[b],e=Mb[d];Mb[a]||c||e?(a=e?d:c?b:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,b){return-1!==b.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||
"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdentifierStart:function(a){return this.options.isIdentifierStart?this.options.isIdentifierStart(a,this.codePointAt(a)):this.isValidIdentifierStart(a)},isValidIdentifierStart:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isIdentifierContinue:function(a){return this.options.isIdentifierContinue?this.options.isIdentifierContinue(a,this.codePointAt(a)):this.isValidIdentifierContinue(a)},isValidIdentifierContinue:function(a,b){return this.isValidIdentifierStart(a,
b)||this.isNumber(a)},codePointAt:function(a){return 1===a.length?a.charCodeAt(0):(a.charCodeAt(0)<<10)+a.charCodeAt(1)-56613888},peekMultichar:function(){var a=this.text.charAt(this.index),b=this.peek();if(!b)return a;var d=a.charCodeAt(0),c=b.charCodeAt(0);return 55296<=d&&56319>=d&&56320<=c&&57343>=c?a+b:a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,b,d){d=d||this.index;b=x(b)?"s "+b+"-"+this.index+" ["+this.text.substring(b,d)+"]":" "+d;throw ca("lexerr",
a,b,this.text);},readNumber:function(){for(var a="",b=this.index;this.index<this.text.length;){var d=P(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var c=this.peek();if("e"==d&&this.isExpOperator(c))a+=d;else if(this.isExpOperator(d)&&c&&this.isNumber(c)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||c&&this.isNumber(c)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:b,text:a,constant:!0,value:Number(a)})},
readIdent:function(){var a=this.index;for(this.index+=this.peekMultichar().length;this.index<this.text.length;){var b=this.peekMultichar();if(!this.isIdentifierContinue(b))break;this.index+=b.length}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var b=this.index;this.index++;for(var d="",c=a,e=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),c=c+f;if(e)"u"===f?(e=this.text.substring(this.index+1,this.index+5),e.match(/[\da-f]{4}/i)||
this.throwError("Invalid unicode escape [\\u"+e+"]"),this.index+=4,d+=String.fromCharCode(parseInt(e,16))):d+=Gg[f]||f,e=!1;else if("\\"===f)e=!0;else{if(f===a){this.index++;this.tokens.push({index:b,text:c,constant:!0,value:d});return}d+=f}this.index++}this.throwError("Unterminated quote",b)}};var s=function(a,b){this.lexer=a;this.options=b};s.Program="Program";s.ExpressionStatement="ExpressionStatement";s.AssignmentExpression="AssignmentExpression";s.ConditionalExpression="ConditionalExpression";
s.LogicalExpression="LogicalExpression";s.BinaryExpression="BinaryExpression";s.UnaryExpression="UnaryExpression";s.CallExpression="CallExpression";s.MemberExpression="MemberExpression";s.Identifier="Identifier";s.Literal="Literal";s.ArrayExpression="ArrayExpression";s.Property="Property";s.ObjectExpression="ObjectExpression";s.ThisExpression="ThisExpression";s.LocalsExpression="LocalsExpression";s.NGValueParameter="NGValueParameter";s.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);
a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a},program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:s.Program,body:a}},expressionStatement:function(){return{type:s.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment()},
assignment:function(){var a=this.ternary();this.expect("=")&&(a={type:s.AssignmentExpression,left:a,right:this.assignment(),operator:"="});return a},ternary:function(){var a=this.logicalOR(),b,d;return this.expect("?")&&(b=this.expression(),this.consume(":"))?(d=this.expression(),{type:s.ConditionalExpression,test:a,alternate:b,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:s.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=
this.equality();this.expect("&&");)a={type:s.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),b;b=this.expect("==","!=","===","!==");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.relational()};return a},relational:function(){for(var a=this.additive(),b;b=this.expect("<",">","<=",">=");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),
b;b=this.expect("+","-");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),b;b=this.expect("*","/","%");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.unary()};return a},unary:function(){var a;return(a=this.expect("+","-","!"))?{type:s.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):
this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.selfReferential.hasOwnProperty(this.peek().text)?a=qa(this.selfReferential[this.consume().text]):this.options.literals.hasOwnProperty(this.peek().text)?a={type:s.Literal,value:this.options.literals[this.consume().text]}:this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var b;b=this.expect("(","[",".");)"("===b.text?(a={type:s.CallExpression,
callee:a,arguments:this.parseArguments()},this.consume(")")):"["===b.text?(a={type:s.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"."===b.text?a={type:s.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return a},filter:function(a){a=[a];for(var b={type:s.CallExpression,callee:this.identifier(),arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return b},parseArguments:function(){var a=[];if(")"!==
this.peekToken().text){do a.push(this.expression());while(this.expect(","))}return a},identifier:function(){var a=this.consume();a.identifier||this.throwError("is not a valid identifier",a);return{type:s.Identifier,name:a.text}},constant:function(){return{type:s.Literal,value:this.consume().value}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:s.ArrayExpression,elements:a}},
object:function(){var a=[],b;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;b={type:s.Property,kind:"init"};this.peek().constant?b.key=this.constant():this.peek().identifier?b.key=this.identifier():this.throwError("invalid key",this.peek());this.consume(":");b.value=this.expression();a.push(b)}while(this.expect(","))}this.consume("}");return{type:s.ObjectExpression,properties:a}},throwError:function(a,b){throw ca("syntax",b.text,a,b.index+1,this.text,this.text.substring(b.index));},consume:function(a){if(0===
this.tokens.length)throw ca("ueoe",this.text);var b=this.expect(a);b||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return b},peekToken:function(){if(0===this.tokens.length)throw ca("ueoe",this.text);return this.tokens[0]},peek:function(a,b,d,c){return this.peekAhead(0,a,b,d,c)},peekAhead:function(a,b,d,c,e){if(this.tokens.length>a){a=this.tokens[a];var f=a.text;if(f===b||f===d||f===c||f===e||!(b||d||c||e))return a}return!1},expect:function(a,b,d,c){return(a=this.peek(a,b,d,c))?
(this.tokens.shift(),a):!1},selfReferential:{"this":{type:s.ThisExpression},$locals:{type:s.LocalsExpression}}};sd.prototype={compile:function(a,b){var d=this,c=this.astBuilder.ast(a);this.state={nextId:0,filters:{},expensiveChecks:b,fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]};aa(c,d.$filter);var e="",f;this.stage="assign";if(f=qd(c))this.state.computing="assign",e=this.nextId(),this.recurse(f,e),this.return_(e),e="fn.assign="+this.generateFunction("assign","s,v,l");f=od(c.body);
d.stage="inputs";q(f,function(a,b){var c="fn"+b;d.state[c]={vars:[],body:[],own:{}};d.state.computing=c;var e=d.nextId();d.recurse(a,e);d.return_(e);d.state.inputs.push(c);a.watchId=b});this.state.computing="fn";this.stage="main";this.recurse(c);e='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+e+this.watchFns()+"return fn;";e=(new Function("$filter","ensureSafeMemberName","ensureSafeObject","ensureSafeFunction","getStringValue","ensureSafeAssignContext",
"ifDefined","plus","text",e))(this.$filter,Ta,sa,md,fg,Gb,jg,nd,a);this.state=this.stage=void 0;e.literal=rd(c);e.constant=c.constant;return e},USE:"use",STRICT:"strict",watchFns:function(){var a=[],b=this.state.inputs,d=this;q(b,function(b){a.push("var "+b+"="+d.generateFunction(b,"s"))});b.length&&a.push("fn.inputs=["+b.join(",")+"];");return a.join("")},generateFunction:function(a,b){return"function("+b+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],b=this;q(this.state.filters,
function(d,c){a.push(d+"=$filter("+b.escape(c)+")")});return a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},recurse:function(a,b,d,c,e,f){var g,h,k=this,l,n;c=c||C;if(!f&&x(a.watchId))b=b||this.nextId(),this.if_("i",this.lazyAssign(b,this.computedMember("i",a.watchId)),this.lazyRecurse(a,b,d,c,e,!0));else switch(a.type){case s.Program:q(a.body,function(b,c){k.recurse(b.expression,
void 0,void 0,function(a){h=a});c!==a.body.length-1?k.current().body.push(h,";"):k.return_(h)});break;case s.Literal:n=this.escape(a.value);this.assign(b,n);c(n);break;case s.UnaryExpression:this.recurse(a.argument,void 0,void 0,function(a){h=a});n=a.operator+"("+this.ifDefined(h,0)+")";this.assign(b,n);c(n);break;case s.BinaryExpression:this.recurse(a.left,void 0,void 0,function(a){g=a});this.recurse(a.right,void 0,void 0,function(a){h=a});n="+"===a.operator?this.plus(g,h):"-"===a.operator?this.ifDefined(g,
0)+a.operator+this.ifDefined(h,0):"("+g+")"+a.operator+"("+h+")";this.assign(b,n);c(n);break;case s.LogicalExpression:b=b||this.nextId();k.recurse(a.left,b);k.if_("&&"===a.operator?b:k.not(b),k.lazyRecurse(a.right,b));c(b);break;case s.ConditionalExpression:b=b||this.nextId();k.recurse(a.test,b);k.if_(b,k.lazyRecurse(a.alternate,b),k.lazyRecurse(a.consequent,b));c(b);break;case s.Identifier:b=b||this.nextId();d&&(d.context="inputs"===k.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",
a.name)+"?l:s"),d.computed=!1,d.name=a.name);Ta(a.name);k.if_("inputs"===k.stage||k.not(k.getHasOwnProperty("l",a.name)),function(){k.if_("inputs"===k.stage||"s",function(){e&&1!==e&&k.if_(k.not(k.nonComputedMember("s",a.name)),k.lazyAssign(k.nonComputedMember("s",a.name),"{}"));k.assign(b,k.nonComputedMember("s",a.name))})},b&&k.lazyAssign(b,k.nonComputedMember("l",a.name)));(k.state.expensiveChecks||Hb(a.name))&&k.addEnsureSafeObject(b);c(b);break;case s.MemberExpression:g=d&&(d.context=this.nextId())||
this.nextId();b=b||this.nextId();k.recurse(a.object,g,void 0,function(){k.if_(k.notNull(g),function(){e&&1!==e&&k.addEnsureSafeAssignContext(g);if(a.computed)h=k.nextId(),k.recurse(a.property,h),k.getStringValue(h),k.addEnsureSafeMemberName(h),e&&1!==e&&k.if_(k.not(k.computedMember(g,h)),k.lazyAssign(k.computedMember(g,h),"{}")),n=k.ensureSafeObject(k.computedMember(g,h)),k.assign(b,n),d&&(d.computed=!0,d.name=h);else{Ta(a.property.name);e&&1!==e&&k.if_(k.not(k.nonComputedMember(g,a.property.name)),
k.lazyAssign(k.nonComputedMember(g,a.property.name),"{}"));n=k.nonComputedMember(g,a.property.name);if(k.state.expensiveChecks||Hb(a.property.name))n=k.ensureSafeObject(n);k.assign(b,n);d&&(d.computed=!1,d.name=a.property.name)}},function(){k.assign(b,"undefined")});c(b)},!!e);break;case s.CallExpression:b=b||this.nextId();a.filter?(h=k.filter(a.callee.name),l=[],q(a.arguments,function(a){var b=k.nextId();k.recurse(a,b);l.push(b)}),n=h+"("+l.join(",")+")",k.assign(b,n),c(b)):(h=k.nextId(),g={},l=
[],k.recurse(a.callee,h,g,function(){k.if_(k.notNull(h),function(){k.addEnsureSafeFunction(h);q(a.arguments,function(a){k.recurse(a,k.nextId(),void 0,function(a){l.push(k.ensureSafeObject(a))})});g.name?(k.state.expensiveChecks||k.addEnsureSafeObject(g.context),n=k.member(g.context,g.name,g.computed)+"("+l.join(",")+")"):n=h+"("+l.join(",")+")";n=k.ensureSafeObject(n);k.assign(b,n)},function(){k.assign(b,"undefined")});c(b)}));break;case s.AssignmentExpression:h=this.nextId();g={};if(!pd(a.left))throw ca("lval");
this.recurse(a.left,void 0,g,function(){k.if_(k.notNull(g.context),function(){k.recurse(a.right,h);k.addEnsureSafeObject(k.member(g.context,g.name,g.computed));k.addEnsureSafeAssignContext(g.context);n=k.member(g.context,g.name,g.computed)+a.operator+h;k.assign(b,n);c(b||n)})},1);break;case s.ArrayExpression:l=[];q(a.elements,function(a){k.recurse(a,k.nextId(),void 0,function(a){l.push(a)})});n="["+l.join(",")+"]";this.assign(b,n);c(n);break;case s.ObjectExpression:l=[];q(a.properties,function(a){k.recurse(a.value,
k.nextId(),void 0,function(b){l.push(k.escape(a.key.type===s.Identifier?a.key.name:""+a.key.value)+":"+b)})});n="{"+l.join(",")+"}";this.assign(b,n);c(n);break;case s.ThisExpression:this.assign(b,"s");c("s");break;case s.LocalsExpression:this.assign(b,"l");c("l");break;case s.NGValueParameter:this.assign(b,"v"),c("v")}},getHasOwnProperty:function(a,b){var d=a+"."+b,c=this.current().own;c.hasOwnProperty(d)||(c[d]=this.nextId(!1,a+"&&("+this.escape(b)+" in "+a+")"));return c[d]},assign:function(a,b){if(a)return this.current().body.push(a,
"=",b,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,b){return"ifDefined("+a+","+this.escape(b)+")"},plus:function(a,b){return"plus("+a+","+b+")"},return_:function(a){this.current().body.push("return ",a,";")},if_:function(a,b,d){if(!0===a)b();else{var c=this.current().body;c.push("if(",a,"){");b();c.push("}");d&&(c.push("else{"),d(),c.push("}"))}},not:function(a){return"!("+a+")"},notNull:function(a){return a+
"!=null"},nonComputedMember:function(a,b){var d=/[^$_a-zA-Z0-9]/g;return/[$_a-zA-Z][$_a-zA-Z0-9]*/.test(b)?a+"."+b:a+'["'+b.replace(d,this.stringEscapeFn)+'"]'},computedMember:function(a,b){return a+"["+b+"]"},member:function(a,b,d){return d?this.computedMember(a,b):this.nonComputedMember(a,b)},addEnsureSafeObject:function(a){this.current().body.push(this.ensureSafeObject(a),";")},addEnsureSafeMemberName:function(a){this.current().body.push(this.ensureSafeMemberName(a),";")},addEnsureSafeFunction:function(a){this.current().body.push(this.ensureSafeFunction(a),
";")},addEnsureSafeAssignContext:function(a){this.current().body.push(this.ensureSafeAssignContext(a),";")},ensureSafeObject:function(a){return"ensureSafeObject("+a+",text)"},ensureSafeMemberName:function(a){return"ensureSafeMemberName("+a+",text)"},ensureSafeFunction:function(a){return"ensureSafeFunction("+a+",text)"},getStringValue:function(a){this.assign(a,"getStringValue("+a+")")},ensureSafeAssignContext:function(a){return"ensureSafeAssignContext("+a+",text)"},lazyRecurse:function(a,b,d,c,e,f){var g=
this;return function(){g.recurse(a,b,d,c,e,f)}},lazyAssign:function(a,b){var d=this;return function(){d.assign(a,b)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(F(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(Q(a))return a.toString();if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";if("undefined"===typeof a)return"undefined";throw ca("esc");},nextId:function(a,
b){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(b?"="+b:""));return d},current:function(){return this.state[this.state.computing]}};td.prototype={compile:function(a,b){var d=this,c=this.astBuilder.ast(a);this.expression=a;this.expensiveChecks=b;aa(c,d.$filter);var e,f;if(e=qd(c))f=this.recurse(e);e=od(c.body);var g;e&&(g=[],q(e,function(a,b){var c=d.recurse(a);a.input=c;g.push(c);a.watchId=b}));var h=[];q(c.body,function(a){h.push(d.recurse(a.expression))});e=0===c.body.length?C:1===
c.body.length?h[0]:function(a,b){var c;q(h,function(d){c=d(a,b)});return c};f&&(e.assign=function(a,b,c){return f(a,c,b)});g&&(e.inputs=g);e.literal=rd(c);e.constant=c.constant;return e},recurse:function(a,b,d){var c,e,f=this,g;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case s.Literal:return this.value(a.value,b);case s.UnaryExpression:return e=this.recurse(a.argument),this["unary"+a.operator](e,b);case s.BinaryExpression:return c=this.recurse(a.left),e=this.recurse(a.right),
this["binary"+a.operator](c,e,b);case s.LogicalExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case s.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),b);case s.Identifier:return Ta(a.name,f.expression),f.identifier(a.name,f.expensiveChecks||Hb(a.name),b,d,f.expression);case s.MemberExpression:return c=this.recurse(a.object,!1,!!d),a.computed||(Ta(a.property.name,f.expression),
e=a.property.name),a.computed&&(e=this.recurse(a.property)),a.computed?this.computedMember(c,e,b,d,f.expression):this.nonComputedMember(c,e,f.expensiveChecks,b,d,f.expression);case s.CallExpression:return g=[],q(a.arguments,function(a){g.push(f.recurse(a))}),a.filter&&(e=this.$filter(a.callee.name)),a.filter||(e=this.recurse(a.callee,!0)),a.filter?function(a,c,d,f){for(var m=[],r=0;r<g.length;++r)m.push(g[r](a,c,d,f));a=e.apply(void 0,m,f);return b?{context:void 0,name:void 0,value:a}:a}:function(a,
c,d,n){var m=e(a,c,d,n),r;if(null!=m.value){sa(m.context,f.expression);md(m.value,f.expression);r=[];for(var q=0;q<g.length;++q)r.push(sa(g[q](a,c,d,n),f.expression));r=sa(m.value.apply(m.context,r),f.expression)}return b?{value:r}:r};case s.AssignmentExpression:return c=this.recurse(a.left,!0,1),e=this.recurse(a.right),function(a,d,g,n){var m=c(a,d,g,n);a=e(a,d,g,n);sa(m.value,f.expression);Gb(m.context);m.context[m.name]=a;return b?{value:a}:a};case s.ArrayExpression:return g=[],q(a.elements,function(a){g.push(f.recurse(a))}),
function(a,c,d,e){for(var f=[],r=0;r<g.length;++r)f.push(g[r](a,c,d,e));return b?{value:f}:f};case s.ObjectExpression:return g=[],q(a.properties,function(a){g.push({key:a.key.type===s.Identifier?a.key.name:""+a.key.value,value:f.recurse(a.value)})}),function(a,c,d,e){for(var f={},r=0;r<g.length;++r)f[g[r].key]=g[r].value(a,c,d,e);return b?{value:f}:f};case s.ThisExpression:return function(a){return b?{value:a}:a};case s.LocalsExpression:return function(a,c){return b?{value:c}:c};case s.NGValueParameter:return function(a,
c,d){return b?{value:d}:d}}},"unary+":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=x(d)?+d:0;return b?{value:d}:d}},"unary-":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=x(d)?-d:0;return b?{value:d}:d}},"unary!":function(a,b){return function(d,c,e,f){d=!a(d,c,e,f);return b?{value:d}:d}},"binary+":function(a,b,d){return function(c,e,f,g){var h=a(c,e,f,g);c=b(c,e,f,g);h=nd(h,c);return d?{value:h}:h}},"binary-":function(a,b,d){return function(c,e,f,g){var h=a(c,e,f,g);c=b(c,e,f,g);
h=(x(h)?h:0)-(x(c)?c:0);return d?{value:h}:h}},"binary*":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)*b(c,e,f,g);return d?{value:c}:c}},"binary/":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)/b(c,e,f,g);return d?{value:c}:c}},"binary%":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)%b(c,e,f,g);return d?{value:c}:c}},"binary===":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)===b(c,e,f,g);return d?{value:c}:c}},"binary!==":function(a,b,d){return function(c,e,f,g){c=a(c,
e,f,g)!==b(c,e,f,g);return d?{value:c}:c}},"binary==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)==b(c,e,f,g);return d?{value:c}:c}},"binary!=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!=b(c,e,f,g);return d?{value:c}:c}},"binary<":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<b(c,e,f,g);return d?{value:c}:c}},"binary>":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>b(c,e,f,g);return d?{value:c}:c}},"binary<=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,
g)<=b(c,e,f,g);return d?{value:c}:c}},"binary>=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>=b(c,e,f,g);return d?{value:c}:c}},"binary&&":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)&&b(c,e,f,g);return d?{value:c}:c}},"binary||":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)||b(c,e,f,g);return d?{value:c}:c}},"ternary?:":function(a,b,d,c){return function(e,f,g,h){e=a(e,f,g,h)?b(e,f,g,h):d(e,f,g,h);return c?{value:e}:e}},value:function(a,b){return function(){return b?{context:void 0,
name:void 0,value:a}:a}},identifier:function(a,b,d,c,e){return function(f,g,h,k){f=g&&a in g?g:f;c&&1!==c&&f&&!f[a]&&(f[a]={});g=f?f[a]:void 0;b&&sa(g,e);return d?{context:f,name:a,value:g}:g}},computedMember:function(a,b,d,c,e){return function(f,g,h,k){var l=a(f,g,h,k),n,m;null!=l&&(n=b(f,g,h,k),n+="",Ta(n,e),c&&1!==c&&(Gb(l),l&&!l[n]&&(l[n]={})),m=l[n],sa(m,e));return d?{context:l,name:n,value:m}:m}},nonComputedMember:function(a,b,d,c,e,f){return function(g,h,k,l){g=a(g,h,k,l);e&&1!==e&&(Gb(g),
g&&!g[b]&&(g[b]={}));h=null!=g?g[b]:void 0;(d||Hb(b))&&sa(h,f);return c?{context:g,name:b,value:h}:h}},inputs:function(a,b){return function(d,c,e,f){return f?f[b]:a(d,c,e)}}};var hc=function(a,b,d){this.lexer=a;this.$filter=b;this.options=d;this.ast=new s(a,d);this.astCompiler=d.csp?new td(this.ast,b):new sd(this.ast,b)};hc.prototype={constructor:hc,parse:function(a){return this.astCompiler.compile(a,this.options.expensiveChecks)}};var kg=Object.prototype.valueOf,ta=O("$sce"),oa={HTML:"html",CSS:"css",
URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},mg=O("$compile"),Y=v.document.createElement("a"),xd=ra(v.location.href);yd.$inject=["$document"];Jc.$inject=["$provide"];var Fd=22,Ed=".",jc="0";zd.$inject=["$locale"];Bd.$inject=["$locale"];var xg={yyyy:W("FullYear",4,0,!1,!0),yy:W("FullYear",2,0,!0,!0),y:W("FullYear",1,0,!1,!0),MMMM:ib("Month"),MMM:ib("Month",!0),MM:W("Month",2,1),M:W("Month",1,1),LLLL:ib("Month",!1,!0),dd:W("Date",2),d:W("Date",1),HH:W("Hours",2),H:W("Hours",1),hh:W("Hours",2,-12),
h:W("Hours",1,-12),mm:W("Minutes",2),m:W("Minutes",1),ss:W("Seconds",2),s:W("Seconds",1),sss:W("Milliseconds",3),EEEE:ib("Day"),EEE:ib("Day",!0),a:function(a,b){return 12>a.getHours()?b.AMPMS[0]:b.AMPMS[1]},Z:function(a,b,d){a=-1*d;return a=(0<=a?"+":"")+(Ib(Math[0<a?"floor":"ceil"](a/60),2)+Ib(Math.abs(a%60),2))},ww:Hd(2),w:Hd(1),G:kc,GG:kc,GGG:kc,GGGG:function(a,b){return 0>=a.getFullYear()?b.ERANAMES[0]:b.ERANAMES[1]}},wg=/((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,
vg=/^\-?\d+$/;Ad.$inject=["$locale"];var qg=da(P),rg=da(sb);Cd.$inject=["$parse"];var ne=da({restrict:"E",compile:function(a,b){if(!b.href&&!b.xlinkHref)return function(a,b){if("a"===b[0].nodeName.toLowerCase()){var e="[object SVGAnimatedString]"===ma.call(b.prop("href"))?"xlink:href":"href";b.on("click",function(a){b.attr(e)||a.preventDefault()})}}}}),tb={};q(Cb,function(a,b){function d(a,d,e){a.$watch(e[c],function(a){e.$set(b,!!a)})}if("multiple"!=a){var c=xa("ng-"+b),e=d;"checked"===a&&(e=function(a,
b,e){e.ngModel!==e[c]&&d(a,b,e)});tb[c]=function(){return{restrict:"A",priority:100,link:e}}}});q(ad,function(a,b){tb[b]=function(){return{priority:100,link:function(a,c,e){if("ngPattern"===b&&"/"==e.ngPattern.charAt(0)&&(c=e.ngPattern.match(zg))){e.$set("ngPattern",new RegExp(c[1],c[2]));return}a.$watch(e[b],function(a){e.$set(b,a)})}}}});q(["src","srcset","href"],function(a){var b=xa("ng-"+a);tb[b]=function(){return{priority:99,link:function(d,c,e){var f=a,g=a;"href"===a&&"[object SVGAnimatedString]"===
ma.call(c.prop("href"))&&(g="xlinkHref",e.$attr[g]="xlink:href",f=null);e.$observe(b,function(b){b?(e.$set(g,b),Ca&&f&&c.prop(f,e[g])):"href"===a&&e.$set(g,null)})}}}});var Jb={$addControl:C,$$renameControl:function(a,b){a.$name=b},$removeControl:C,$setValidity:C,$setDirty:C,$setPristine:C,$setSubmitted:C};Id.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var Rd=function(a){return["$timeout","$parse",function(b,d){function c(a){return""===a?d('this[""]').assign:d(a).assign||C}return{name:"form",
restrict:a?"EAC":"E",require:["form","^^?form"],controller:Id,compile:function(d,f){d.addClass(Ua).addClass(mb);var g=f.name?"name":a&&f.ngForm?"ngForm":!1;return{pre:function(a,d,e,f){var m=f[0];if(!("action"in e)){var r=function(b){a.$apply(function(){m.$commitViewValue();m.$setSubmitted()});b.preventDefault()};d[0].addEventListener("submit",r,!1);d.on("$destroy",function(){b(function(){d[0].removeEventListener("submit",r,!1)},0,!1)})}(f[1]||m.$$parentForm).$addControl(m);var q=g?c(m.$name):C;g&&
(q(a,m),e.$observe(g,function(b){m.$name!==b&&(q(a,void 0),m.$$parentForm.$$renameControl(m,b),q=c(m.$name),q(a,m))}));d.on("$destroy",function(){m.$$parentForm.$removeControl(m);q(a,void 0);R(m,Jb)})}}}}}]},oe=Rd(),Be=Rd(!0),yg=/^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,Hg=/^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+\])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,Ig=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
Jg=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,Sd=/^(\d{4,})-(\d{2})-(\d{2})$/,Td=/^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,nc=/^(\d{4,})-W(\d\d)$/,Ud=/^(\d{4,})-(\d\d)$/,Vd=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Kd=T();q(["date","datetime-local","month","time","week"],function(a){Kd[a]=!0});var Wd={text:function(a,b,d,c,e,f){jb(a,b,d,c,e,f);lc(c)},date:kb("date",Sd,Lb(Sd,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":kb("datetimelocal",Td,Lb(Td,"yyyy MM dd HH mm ss sss".split(" ")),
"yyyy-MM-ddTHH:mm:ss.sss"),time:kb("time",Vd,Lb(Vd,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:kb("week",nc,function(a,b){if(fa(a))return a;if(F(a)){nc.lastIndex=0;var d=nc.exec(a);if(d){var c=+d[1],e=+d[2],f=d=0,g=0,h=0,k=Gd(c),e=7*(e-1);b&&(d=b.getHours(),f=b.getMinutes(),g=b.getSeconds(),h=b.getMilliseconds());return new Date(c,0,k.getDate()+e,d,f,g,h)}}return NaN},"yyyy-Www"),month:kb("month",Ud,Lb(Ud,["yyyy","MM"]),"yyyy-MM"),number:function(a,b,d,c,e,f){Ld(a,b,d,c);jb(a,b,d,c,e,f);c.$$parserName=
"number";c.$parsers.push(function(a){if(c.$isEmpty(a))return null;if(Jg.test(a))return parseFloat(a)});c.$formatters.push(function(a){if(!c.$isEmpty(a)){if(!Q(a))throw lb("numfmt",a);a=a.toString()}return a});if(x(d.min)||d.ngMin){var g;c.$validators.min=function(a){return c.$isEmpty(a)||y(g)||a>=g};d.$observe("min",function(a){x(a)&&!Q(a)&&(a=parseFloat(a,10));g=Q(a)&&!isNaN(a)?a:void 0;c.$validate()})}if(x(d.max)||d.ngMax){var h;c.$validators.max=function(a){return c.$isEmpty(a)||y(h)||a<=h};d.$observe("max",
function(a){x(a)&&!Q(a)&&(a=parseFloat(a,10));h=Q(a)&&!isNaN(a)?a:void 0;c.$validate()})}},url:function(a,b,d,c,e,f){jb(a,b,d,c,e,f);lc(c);c.$$parserName="url";c.$validators.url=function(a,b){var d=a||b;return c.$isEmpty(d)||Hg.test(d)}},email:function(a,b,d,c,e,f){jb(a,b,d,c,e,f);lc(c);c.$$parserName="email";c.$validators.email=function(a,b){var d=a||b;return c.$isEmpty(d)||Ig.test(d)}},radio:function(a,b,d,c){y(d.name)&&b.attr("name",++nb);b.on("click",function(a){b[0].checked&&c.$setViewValue(d.value,
a&&a.type)});c.$render=function(){b[0].checked=d.value==c.$viewValue};d.$observe("value",c.$render)},checkbox:function(a,b,d,c,e,f,g,h){var k=Md(h,a,"ngTrueValue",d.ngTrueValue,!0),l=Md(h,a,"ngFalseValue",d.ngFalseValue,!1);b.on("click",function(a){c.$setViewValue(b[0].checked,a&&a.type)});c.$render=function(){b[0].checked=c.$viewValue};c.$isEmpty=function(a){return!1===a};c.$formatters.push(function(a){return pa(a,k)});c.$parsers.push(function(a){return a?k:l})},hidden:C,button:C,submit:C,reset:C,
file:C},Dc=["$browser","$sniffer","$filter","$parse",function(a,b,d,c){return{restrict:"E",require:["?ngModel"],link:{pre:function(e,f,g,h){h[0]&&(Wd[P(g.type)]||Wd.text)(e,f,g,h[0],b,a,d,c)}}}}],Kg=/^(true|false|\d+)$/,Te=function(){return{restrict:"A",priority:100,compile:function(a,b){return Kg.test(b.ngValue)?function(a,b,e){e.$set("value",a.$eval(e.ngValue))}:function(a,b,e){a.$watch(e.ngValue,function(a){e.$set("value",a)})}}}},te=["$compile",function(a){return{restrict:"AC",compile:function(b){a.$$addBindingClass(b);
return function(b,c,e){a.$$addBindingInfo(c,e.ngBind);c=c[0];b.$watch(e.ngBind,function(a){c.textContent=y(a)?"":a})}}}}],ve=["$interpolate","$compile",function(a,b){return{compile:function(d){b.$$addBindingClass(d);return function(c,d,f){c=a(d.attr(f.$attr.ngBindTemplate));b.$$addBindingInfo(d,c.expressions);d=d[0];f.$observe("ngBindTemplate",function(a){d.textContent=y(a)?"":a})}}}}],ue=["$sce","$parse","$compile",function(a,b,d){return{restrict:"A",compile:function(c,e){var f=b(e.ngBindHtml),g=
b(e.ngBindHtml,function(a){return(a||"").toString()});d.$$addBindingClass(c);return function(b,c,e){d.$$addBindingInfo(c,e.ngBindHtml);b.$watch(g,function(){c.html(a.getTrustedHtml(f(b))||"")})}}}}],Se=da({restrict:"A",require:"ngModel",link:function(a,b,d,c){c.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),we=mc("",!0),ye=mc("Odd",0),xe=mc("Even",1),ze=La({compile:function(a,b){b.$set("ngCloak",void 0);a.removeClass("ng-cloak")}}),Ae=[function(){return{restrict:"A",scope:!0,controller:"@",
priority:500}}],Ic={},Lg={blur:!0,focus:!0};q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var b=xa("ng-"+a);Ic[b]=["$parse","$rootScope",function(d,c){return{restrict:"A",compile:function(e,f){var g=d(f[b],null,!0);return function(b,d){d.on(a,function(d){var e=function(){g(b,{$event:d})};Lg[a]&&c.$$phase?b.$evalAsync(e):b.$apply(e)})}}}}]});var De=["$animate","$compile",function(a,
b){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(d,c,e,f,g){var h,k,l;d.$watch(e.ngIf,function(d){d?k||g(function(d,f){k=f;d[d.length++]=b.$$createComment("end ngIf",e.ngIf);h={clone:d};a.enter(d,c.parent(),c)}):(l&&(l.remove(),l=null),k&&(k.$destroy(),k=null),h&&(l=rb(h.clone),a.leave(l).then(function(){l=null}),h=null))})}}}],Ee=["$templateRequest","$anchorScroll","$animate",function(a,b,d){return{restrict:"ECA",priority:400,terminal:!0,
transclude:"element",controller:ea.noop,compile:function(c,e){var f=e.ngInclude||e.src,g=e.onload||"",h=e.autoscroll;return function(c,e,n,m,r){var q=0,s,w,p,y=function(){w&&(w.remove(),w=null);s&&(s.$destroy(),s=null);p&&(d.leave(p).then(function(){w=null}),w=p,p=null)};c.$watch(f,function(f){var n=function(){!x(h)||h&&!c.$eval(h)||b()},u=++q;f?(a(f,!0).then(function(a){if(!c.$$destroyed&&u===q){var b=c.$new();m.template=a;a=r(b,function(a){y();d.enter(a,null,e).then(n)});s=b;p=a;s.$emit("$includeContentLoaded",
f);c.$eval(g)}},function(){c.$$destroyed||u!==q||(y(),c.$emit("$includeContentError",f))}),c.$emit("$includeContentRequested",f)):(y(),m.template=null)})}}}}],Ve=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(b,d,c,e){ma.call(d[0]).match(/SVG/)?(d.empty(),a(Lc(e.template,v.document).childNodes)(b,function(a){d.append(a)},{futureParentElement:d})):(d.html(e.template),a(d.contents())(b))}}}],Fe=La({priority:450,compile:function(){return{pre:function(a,
b,d){a.$eval(d.ngInit)}}}}),Re=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,b,d,c){var e=b.attr(d.$attr.ngList)||", ",f="false"!==d.ngTrim,g=f?V(e):e;c.$parsers.push(function(a){if(!y(a)){var b=[];a&&q(a.split(g),function(a){a&&b.push(f?V(a):a)});return b}});c.$formatters.push(function(a){if(K(a))return a.join(e)});c.$isEmpty=function(a){return!a||!a.length}}}},mb="ng-valid",Nd="ng-invalid",Ua="ng-pristine",Kb="ng-dirty",Pd="ng-pending",lb=O("ngModel"),Mg=["$scope",
"$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,b,d,c,e,f,g,h,k,l){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=void 0;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=void 0;this.$name=l(d.name||"",!1)(a);
this.$$parentForm=Jb;var n=e(d.ngModel),m=n.assign,r=n,s=m,v=null,w,p=this;this.$$setOptions=function(a){if((p.$options=a)&&a.getterSetter){var b=e(d.ngModel+"()"),f=e(d.ngModel+"($$$p)");r=function(a){var c=n(a);E(c)&&(c=b(a));return c};s=function(a,b){E(n(a))?f(a,{$$$p:b}):m(a,b)}}else if(!n.assign)throw lb("nonassign",d.ngModel,wa(c));};this.$render=C;this.$isEmpty=function(a){return y(a)||""===a||null===a||a!==a};this.$$updateEmptyClasses=function(a){p.$isEmpty(a)?(f.removeClass(c,"ng-not-empty"),
f.addClass(c,"ng-empty")):(f.removeClass(c,"ng-empty"),f.addClass(c,"ng-not-empty"))};var H=0;Jd({ctrl:this,$element:c,set:function(a,b){a[b]=!0},unset:function(a,b){delete a[b]},$animate:f});this.$setPristine=function(){p.$dirty=!1;p.$pristine=!0;f.removeClass(c,Kb);f.addClass(c,Ua)};this.$setDirty=function(){p.$dirty=!0;p.$pristine=!1;f.removeClass(c,Ua);f.addClass(c,Kb);p.$$parentForm.$setDirty()};this.$setUntouched=function(){p.$touched=!1;p.$untouched=!0;f.setClass(c,"ng-untouched","ng-touched")};
this.$setTouched=function(){p.$touched=!0;p.$untouched=!1;f.setClass(c,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){g.cancel(v);p.$viewValue=p.$$lastCommittedViewValue;p.$render()};this.$validate=function(){if(!Q(p.$modelValue)||!isNaN(p.$modelValue)){var a=p.$$rawModelValue,b=p.$valid,c=p.$modelValue,d=p.$options&&p.$options.allowInvalid;p.$$runValidators(a,p.$$lastCommittedViewValue,function(e){d||b===e||(p.$modelValue=e?a:void 0,p.$modelValue!==c&&p.$$writeModelToScope())})}};
this.$$runValidators=function(a,b,c){function d(){var c=!0;q(p.$validators,function(d,e){var g=d(a,b);c=c&&g;f(e,g)});return c?!0:(q(p.$asyncValidators,function(a,b){f(b,null)}),!1)}function e(){var c=[],d=!0;q(p.$asyncValidators,function(e,g){var h=e(a,b);if(!h||!E(h.then))throw lb("nopromise",h);f(g,void 0);c.push(h.then(function(){f(g,!0)},function(){d=!1;f(g,!1)}))});c.length?k.all(c).then(function(){g(d)},C):g(!0)}function f(a,b){h===H&&p.$setValidity(a,b)}function g(a){h===H&&c(a)}H++;var h=
H;(function(){var a=p.$$parserName||"parse";if(y(w))f(a,null);else return w||(q(p.$validators,function(a,b){f(b,null)}),q(p.$asyncValidators,function(a,b){f(b,null)})),f(a,w),w;return!0})()?d()?e():g(!1):g(!1)};this.$commitViewValue=function(){var a=p.$viewValue;g.cancel(v);if(p.$$lastCommittedViewValue!==a||""===a&&p.$$hasNativeValidators)p.$$updateEmptyClasses(a),p.$$lastCommittedViewValue=a,p.$pristine&&this.$setDirty(),this.$$parseAndValidate()};this.$$parseAndValidate=function(){var b=p.$$lastCommittedViewValue;
if(w=y(b)?void 0:!0)for(var c=0;c<p.$parsers.length;c++)if(b=p.$parsers[c](b),y(b)){w=!1;break}Q(p.$modelValue)&&isNaN(p.$modelValue)&&(p.$modelValue=r(a));var d=p.$modelValue,e=p.$options&&p.$options.allowInvalid;p.$$rawModelValue=b;e&&(p.$modelValue=b,p.$modelValue!==d&&p.$$writeModelToScope());p.$$runValidators(b,p.$$lastCommittedViewValue,function(a){e||(p.$modelValue=a?b:void 0,p.$modelValue!==d&&p.$$writeModelToScope())})};this.$$writeModelToScope=function(){s(a,p.$modelValue);q(p.$viewChangeListeners,
function(a){try{a()}catch(c){b(c)}})};this.$setViewValue=function(a,b){p.$viewValue=a;p.$options&&!p.$options.updateOnDefault||p.$$debounceViewValueCommit(b)};this.$$debounceViewValueCommit=function(b){var c=0,d=p.$options;d&&x(d.debounce)&&(d=d.debounce,Q(d)?c=d:Q(d[b])?c=d[b]:Q(d["default"])&&(c=d["default"]));g.cancel(v);c?v=g(function(){p.$commitViewValue()},c):h.$$phase?p.$commitViewValue():a.$apply(function(){p.$commitViewValue()})};a.$watch(function(){var b=r(a);if(b!==p.$modelValue&&(p.$modelValue===
p.$modelValue||b===b)){p.$modelValue=p.$$rawModelValue=b;w=void 0;for(var c=p.$formatters,d=c.length,e=b;d--;)e=c[d](e);p.$viewValue!==e&&(p.$$updateEmptyClasses(e),p.$viewValue=p.$$lastCommittedViewValue=e,p.$render(),p.$$runValidators(b,e,C))}return b})}],Qe=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:Mg,priority:1,compile:function(b){b.addClass(Ua).addClass("ng-untouched").addClass(mb);return{pre:function(a,b,e,f){var g=f[0];b=f[1]||
g.$$parentForm;g.$$setOptions(f[2]&&f[2].$options);b.$addControl(g);e.$observe("name",function(a){g.$name!==a&&g.$$parentForm.$$renameControl(g,a)});a.$on("$destroy",function(){g.$$parentForm.$removeControl(g)})},post:function(b,c,e,f){var g=f[0];if(g.$options&&g.$options.updateOn)c.on(g.$options.updateOn,function(a){g.$$debounceViewValueCommit(a&&a.type)});c.on("blur",function(){g.$touched||(a.$$phase?b.$evalAsync(g.$setTouched):b.$apply(g.$setTouched))})}}}}}],Ng=/(\s+|^)default(\s+|$)/,Ue=function(){return{restrict:"A",
controller:["$scope","$attrs",function(a,b){var d=this;this.$options=qa(a.$eval(b.ngModelOptions));x(this.$options.updateOn)?(this.$options.updateOnDefault=!1,this.$options.updateOn=V(this.$options.updateOn.replace(Ng,function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=!0}]}},Ge=La({terminal:!0,priority:1E3}),Og=O("ngOptions"),Pg=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
Oe=["$compile","$document","$parse",function(a,b,d){function c(a,b,c){function e(a,b,c,d,f){this.selectValue=a;this.viewValue=b;this.label=c;this.group=d;this.disabled=f}function f(a){var b;if(!q&&ya(a))b=a;else{b=[];for(var c in a)a.hasOwnProperty(c)&&"$"!==c.charAt(0)&&b.push(c)}return b}var m=a.match(Pg);if(!m)throw Og("iexp",a,wa(b));var r=m[5]||m[7],q=m[6];a=/ as /.test(m[0])&&m[1];var s=m[9];b=d(m[2]?m[1]:r);var w=a&&d(a)||b,p=s&&d(s),v=s?function(a,b){return p(c,b)}:function(a){return Fa(a)},
t=function(a,b){return v(a,L(a,b))},z=d(m[2]||m[1]),u=d(m[3]||""),y=d(m[4]||""),x=d(m[8]),D={},L=q?function(a,b){D[q]=b;D[r]=a;return D}:function(a){D[r]=a;return D};return{trackBy:s,getTrackByValue:t,getWatchables:d(x,function(a){var b=[];a=a||[];for(var d=f(a),e=d.length,g=0;g<e;g++){var h=a===d?g:d[g],l=a[h],h=L(l,h),l=v(l,h);b.push(l);if(m[2]||m[1])l=z(c,h),b.push(l);m[4]&&(h=y(c,h),b.push(h))}return b}),getOptions:function(){for(var a=[],b={},d=x(c)||[],g=f(d),h=g.length,m=0;m<h;m++){var p=d===
g?m:g[m],q=L(d[p],p),r=w(c,q),p=v(r,q),D=z(c,q),N=u(c,q),q=y(c,q),r=new e(p,r,D,N,q);a.push(r);b[p]=r}return{items:a,selectValueMap:b,getOptionFromViewValue:function(a){return b[t(a)]},getViewValueFromOption:function(a){return s?ea.copy(a.viewValue):a.viewValue}}}}}var e=v.document.createElement("option"),f=v.document.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","ngModel"],link:{pre:function(a,b,c,d){d[0].registerOption=C},post:function(d,h,k,l){function n(a,b){a.element=
b;b.disabled=a.disabled;a.label!==b.label&&(b.label=a.label,b.textContent=a.label);a.value!==b.value&&(b.value=a.selectValue)}function m(){var a=u&&r.readValue();if(u)for(var b=u.items.length-1;0<=b;b--){var c=u.items[b];c.group?Bb(c.element.parentNode):Bb(c.element)}u=I.getOptions();var d={};t&&h.prepend(w);u.items.forEach(function(a){var b;if(x(a.group)){b=d[a.group];b||(b=f.cloneNode(!1),E.appendChild(b),b.label=a.group,d[a.group]=b);var c=e.cloneNode(!1)}else b=E,c=e.cloneNode(!1);b.appendChild(c);
n(a,c)});h[0].appendChild(E);s.$render();s.$isEmpty(a)||(b=r.readValue(),(I.trackBy||v?pa(a,b):a===b)||(s.$setViewValue(b),s.$render()))}var r=l[0],s=l[1],v=k.multiple,w;l=0;for(var p=h.children(),y=p.length;l<y;l++)if(""===p[l].value){w=p.eq(l);break}var t=!!w,z=B(e.cloneNode(!1));z.val("?");var u,I=c(k.ngOptions,h,d),E=b[0].createDocumentFragment();v?(s.$isEmpty=function(a){return!a||0===a.length},r.writeValue=function(a){u.items.forEach(function(a){a.element.selected=!1});a&&a.forEach(function(a){if(a=
u.getOptionFromViewValue(a))a.element.selected=!0})},r.readValue=function(){var a=h.val()||[],b=[];q(a,function(a){(a=u.selectValueMap[a])&&!a.disabled&&b.push(u.getViewValueFromOption(a))});return b},I.trackBy&&d.$watchCollection(function(){if(K(s.$viewValue))return s.$viewValue.map(function(a){return I.getTrackByValue(a)})},function(){s.$render()})):(r.writeValue=function(a){var b=u.getOptionFromViewValue(a);b?(h[0].value!==b.selectValue&&(z.remove(),t||w.remove(),h[0].value=b.selectValue,b.element.selected=
!0),b.element.setAttribute("selected","selected")):null===a||t?(z.remove(),t||h.prepend(w),h.val(""),w.prop("selected",!0),w.attr("selected",!0)):(t||w.remove(),h.prepend(z),h.val("?"),z.prop("selected",!0),z.attr("selected",!0))},r.readValue=function(){var a=u.selectValueMap[h.val()];return a&&!a.disabled?(t||w.remove(),z.remove(),u.getViewValueFromOption(a)):null},I.trackBy&&d.$watch(function(){return I.getTrackByValue(s.$viewValue)},function(){s.$render()}));t?(w.remove(),a(w)(d),w.removeClass("ng-scope")):
w=B(e.cloneNode(!1));h.empty();m();d.$watchCollection(I.getWatchables,m)}}}}],He=["$locale","$interpolate","$log",function(a,b,d){var c=/{}/g,e=/^when(Minus)?(.+)$/;return{link:function(f,g,h){function k(a){g.text(a||"")}var l=h.count,n=h.$attr.when&&g.attr(h.$attr.when),m=h.offset||0,r=f.$eval(n)||{},s={},v=b.startSymbol(),w=b.endSymbol(),p=v+l+"-"+m+w,x=ea.noop,t;q(h,function(a,b){var c=e.exec(b);c&&(c=(c[1]?"-":"")+P(c[2]),r[c]=g.attr(h.$attr[b]))});q(r,function(a,d){s[d]=b(a.replace(c,p))});f.$watch(l,
function(b){var c=parseFloat(b),e=isNaN(c);e||c in r||(c=a.pluralCat(c-m));c===t||e&&Q(t)&&isNaN(t)||(x(),e=s[c],y(e)?(null!=b&&d.debug("ngPluralize: no rule defined for '"+c+"' in "+n),x=C,k()):x=f.$watch(e,k),t=c)})}}}],Ie=["$parse","$animate","$compile",function(a,b,d){var c=O("ngRepeat"),e=function(a,b,c,d,e,n,m){a[c]=d;e&&(a[e]=n);a.$index=b;a.$first=0===b;a.$last=b===m-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(b&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,
terminal:!0,$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,k=d.$$createComment("end ngRepeat",h),l=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!l)throw c("iexp",h);var n=l[1],m=l[2],r=l[3],s=l[4],l=n.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if(!l)throw c("iidexp",n);var v=l[3]||l[1],w=l[2];if(r&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(r)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(r)))throw c("badident",
r);var p,y,t,z,u={$id:Fa};s?p=a(s):(t=function(a,b){return Fa(b)},z=function(a){return a});return function(a,d,f,g,l){p&&(y=function(b,c,d){w&&(u[w]=b);u[v]=c;u.$index=d;return p(a,u)});var n=T();a.$watchCollection(m,function(f){var g,m,p=d[0],s,u=T(),x,D,E,C,F,B,G;r&&(a[r]=f);if(ya(f))F=f,m=y||t;else for(G in m=y||z,F=[],f)ua.call(f,G)&&"$"!==G.charAt(0)&&F.push(G);x=F.length;G=Array(x);for(g=0;g<x;g++)if(D=f===F?g:F[g],E=f[D],C=m(D,E,g),n[C])B=n[C],delete n[C],u[C]=B,G[g]=B;else{if(u[C])throw q(G,
function(a){a&&a.scope&&(n[a.id]=a)}),c("dupes",h,C,E);G[g]={id:C,scope:void 0,clone:void 0};u[C]=!0}for(s in n){B=n[s];C=rb(B.clone);b.leave(C);if(C[0].parentNode)for(g=0,m=C.length;g<m;g++)C[g].$$NG_REMOVED=!0;B.scope.$destroy()}for(g=0;g<x;g++)if(D=f===F?g:F[g],E=f[D],B=G[g],B.scope){s=p;do s=s.nextSibling;while(s&&s.$$NG_REMOVED);B.clone[0]!=s&&b.move(rb(B.clone),null,p);p=B.clone[B.clone.length-1];e(B.scope,g,v,E,w,D,x)}else l(function(a,c){B.scope=c;var d=k.cloneNode(!1);a[a.length++]=d;b.enter(a,
null,p);p=d;B.clone=a;u[B.id]=B;e(B.scope,g,v,E,w,D,x)});n=u})}}}}],Je=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngShow,function(b){a[b?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Ce=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngHide,function(b){a[b?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Ke=La(function(a,b,d){a.$watch(d.ngStyle,function(a,
d){d&&a!==d&&q(d,function(a,c){b.css(c,"")});a&&b.css(a)},!0)}),Le=["$animate","$compile",function(a,b){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(d,c,e,f){var g=[],h=[],k=[],l=[],n=function(a,b){return function(){a.splice(b,1)}};d.$watch(e.ngSwitch||e.on,function(c){var d,e;d=0;for(e=k.length;d<e;++d)a.cancel(k[d]);d=k.length=0;for(e=l.length;d<e;++d){var s=rb(h[d].clone);l[d].$destroy();(k[d]=a.leave(s)).then(n(k,d))}h.length=0;l.length=0;(g=f.cases["!"+
c]||f.cases["?"])&&q(g,function(c){c.transclude(function(d,e){l.push(e);var f=c.element;d[d.length++]=b.$$createComment("end ngSwitchWhen");h.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],Me=La({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){c.cases["!"+d.ngSwitchWhen]=c.cases["!"+d.ngSwitchWhen]||[];c.cases["!"+d.ngSwitchWhen].push({transclude:e,element:b})}}),Ne=La({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,
b,d,c,e){c.cases["?"]=c.cases["?"]||[];c.cases["?"].push({transclude:e,element:b})}}),Qg=O("ngTransclude"),Pe=La({restrict:"EAC",link:function(a,b,d,c,e){d.ngTransclude===d.$attr.ngTransclude&&(d.ngTransclude="");if(!e)throw Qg("orphan",wa(b));e(function(a){a.length&&(b.empty(),b.append(a))},null,d.ngTransclude||d.ngTranscludeSlot)}}),pe=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(b,d){"text/ng-template"==d.type&&a.put(d.id,b[0].text)}}}],Rg={$setViewValue:C,$render:C},
Sg=["$element","$scope",function(a,b){var d=this,c=new Ra;d.ngModelCtrl=Rg;d.unknownOption=B(v.document.createElement("option"));d.renderUnknownOption=function(b){b="? "+Fa(b)+" ?";d.unknownOption.val(b);a.prepend(d.unknownOption);a.val(b)};b.$on("$destroy",function(){d.renderUnknownOption=C});d.removeUnknownOption=function(){d.unknownOption.parent()&&d.unknownOption.remove()};d.readValue=function(){d.removeUnknownOption();return a.val()};d.writeValue=function(b){d.hasOption(b)?(d.removeUnknownOption(),
a.val(b),""===b&&d.emptyOption.prop("selected",!0)):null==b&&d.emptyOption?(d.removeUnknownOption(),a.val("")):d.renderUnknownOption(b)};d.addOption=function(a,b){if(8!==b[0].nodeType){Qa(a,'"option value"');""===a&&(d.emptyOption=b);var g=c.get(a)||0;c.put(a,g+1);d.ngModelCtrl.$render();b[0].hasAttribute("selected")&&(b[0].selected=!0)}};d.removeOption=function(a){var b=c.get(a);b&&(1===b?(c.remove(a),""===a&&(d.emptyOption=void 0)):c.put(a,b-1))};d.hasOption=function(a){return!!c.get(a)};d.registerOption=
function(a,b,c,h,k){if(h){var l;c.$observe("value",function(a){x(l)&&d.removeOption(l);l=a;d.addOption(a,b)})}else k?a.$watch(k,function(a,e){c.$set("value",a);e!==a&&d.removeOption(e);d.addOption(a,b)}):d.addOption(c.value,b);b.on("$destroy",function(){d.removeOption(c.value);d.ngModelCtrl.$render()})}}],qe=function(){return{restrict:"E",require:["select","?ngModel"],controller:Sg,priority:1,link:{pre:function(a,b,d,c){var e=c[1];if(e){var f=c[0];f.ngModelCtrl=e;b.on("change",function(){a.$apply(function(){e.$setViewValue(f.readValue())})});
if(d.multiple){f.readValue=function(){var a=[];q(b.find("option"),function(b){b.selected&&a.push(b.value)});return a};f.writeValue=function(a){var c=new Ra(a);q(b.find("option"),function(a){a.selected=x(c.get(a.value))})};var g,h=NaN;a.$watch(function(){h!==e.$viewValue||pa(g,e.$viewValue)||(g=ha(e.$viewValue),e.$render());h=e.$viewValue});e.$isEmpty=function(a){return!a||0===a.length}}}},post:function(a,b,d,c){var e=c[1];if(e){var f=c[0];e.$render=function(){f.writeValue(e.$viewValue)}}}}}},se=["$interpolate",
function(a){return{restrict:"E",priority:100,compile:function(b,d){if(x(d.value))var c=a(d.value,!0);else{var e=a(b.text(),!0);e||d.$set("value",b.text())}return function(a,b,d){var k=b.parent();(k=k.data("$selectController")||k.parent().data("$selectController"))&&k.registerOption(a,b,d,c,e)}}}}],re=da({restrict:"E",terminal:!1}),Fc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){c&&(d.required=!0,c.$validators.required=function(a,b){return!d.required||!c.$isEmpty(b)},d.$observe("required",
function(){c.$validate()}))}}},Ec=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e,f=d.ngPattern||d.pattern;d.$observe("pattern",function(a){F(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw O("ngPattern")("noregexp",f,a,wa(b));e=a||void 0;c.$validate()});c.$validators.pattern=function(a,b){return c.$isEmpty(b)||y(e)||e.test(b)}}}}},Hc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=-1;d.$observe("maxlength",function(a){a=
X(a);e=isNaN(a)?-1:a;c.$validate()});c.$validators.maxlength=function(a,b){return 0>e||c.$isEmpty(b)||b.length<=e}}}}},Gc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=0;d.$observe("minlength",function(a){e=X(a)||0;c.$validate()});c.$validators.minlength=function(a,b){return c.$isEmpty(b)||b.length>=e}}}}};v.angular.bootstrap?v.console&&console.log("WARNING: Tried to load angular more than once."):(ie(),ke(ea),ea.module("ngLocale",[],["$provide",function(a){function b(a){a+=
"";var b=a.indexOf(".");return-1==b?0:a.length-b-1}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),STANDALONEMONTH:"January February March April May June July August September October November December".split(" "),
WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4",negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"en-us",localeID:"en_US",pluralCat:function(a,
c){var e=a|0,f=c;void 0===f&&(f=Math.min(b(a),3));Math.pow(10,f);return 1==e&&0==f?"one":"other"}})}]),B(v.document).ready(function(){ee(v.document,yc)}))})(window);!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map
;
(function() {


}).call(this);
(function() {


}).call(this);
(function() {


}).call(this);
// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//









