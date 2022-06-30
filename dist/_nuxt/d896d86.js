/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{400:function(e,t,n){e.exports=function(){"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,p){return t=Object.setPrototypeOf||function(e,p){return e.__proto__=p,e},t(e,p)}function n(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function r(e,o,l){return r=n()?Reflect.construct:function(e,n,r){var a=[null];a.push.apply(a,n);var o=new(Function.bind.apply(e,a));return r&&t(o,r.prototype),o},r.apply(null,arguments)}function o(e){return l(e)||c(e)||m(e)||d()}function l(e){if(Array.isArray(e))return f(e)}function c(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function m(e,t){if(e){if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function d(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var h=Object.hasOwnProperty,y=Object.setPrototypeOf,v=Object.isFrozen,T=Object.getPrototypeOf,N=Object.getOwnPropertyDescriptor,E=Object.freeze,A=Object.seal,w=Object.create,x="undefined"!=typeof Reflect&&Reflect,k=x.apply,S=x.construct;k||(k=function(e,t,n){return e.apply(t,n)}),E||(E=function(e){return e}),A||(A=function(e){return e}),S||(S=function(e,t){return r(e,o(t))});var _=U(Array.prototype.forEach),O=U(Array.prototype.pop),D=U(Array.prototype.push),C=U(String.prototype.toLowerCase),R=U(String.prototype.match),M=U(String.prototype.replace),L=U(String.prototype.indexOf),I=U(String.prototype.trim),F=U(RegExp.prototype.test),H=z(TypeError);function U(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return k(e,t,r)}}function z(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return S(e,n)}}function B(e,t){y&&y(e,null);for(var n=t.length;n--;){var element=t[n];if("string"==typeof element){var r=C(element);r!==element&&(v(t)||(t[n]=r),element=r)}e[element]=!0}return e}function j(object){var e,t=w(null);for(e in object)k(h,object,[e])&&(t[e]=object[e]);return t}function P(object,e){for(;null!==object;){var desc=N(object,e);if(desc){if(desc.get)return U(desc.get);if("function"==typeof desc.value)return U(desc.value)}object=T(object)}function t(element){return console.warn("fallback value for",element),null}return t}var G=E(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),W=E(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Y=E(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),K=E(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),V=E(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),$=E(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),text=E(["#text"]),html=E(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),svg=E(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),J=E(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),X=E(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Z=A(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Q=A(/<%[\w\W]*|[\w\W]*%>/gm),ee=A(/^data-[\-\w.\u00B7-\uFFFF]/),te=A(/^aria-[\-\w]+$/),ne=A(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),re=A(/^(?:\w+script|data):/i),oe=A(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),ae=A(/^html$/i),ie=function(){return"undefined"==typeof window?null:window},le=function(t,n){if("object"!==e(t)||"function"!=typeof t.createPolicy)return null;var r=null,o="data-tt-policy-suffix";n.currentScript&&n.currentScript.hasAttribute(o)&&(r=n.currentScript.getAttribute(o));var l="dompurify"+(r?"#"+r:"");try{return t.createPolicy(l,{createHTML:function(html){return html}})}catch(e){return console.warn("TrustedTypes policy "+l+" could not be created."),null}};function ce(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie(),n=function(e){return ce(e)};if(n.version="2.3.8",n.removed=[],!t||!t.document||9!==t.document.nodeType)return n.isSupported=!1,n;var r=t.document,l=t.document,c=t.DocumentFragment,m=t.HTMLTemplateElement,f=t.Node,d=t.Element,h=t.NodeFilter,y=t.NamedNodeMap,v=void 0===y?t.NamedNodeMap||t.MozNamedAttrMap:y,T=t.HTMLFormElement,N=t.DOMParser,A=t.trustedTypes,w=d.prototype,x=P(w,"cloneNode"),k=P(w,"nextSibling"),S=P(w,"childNodes"),U=P(w,"parentNode");if("function"==typeof m){var template=l.createElement("template");template.content&&template.content.ownerDocument&&(l=template.content.ownerDocument)}var z=le(A,r),ue=z?z.createHTML(""):"",se=l,me=se.implementation,fe=se.createNodeIterator,pe=se.createDocumentFragment,de=se.getElementsByTagName,he=r.importNode,ge={};try{ge=j(l).documentMode?l.documentMode:{}}catch(e){}var ye={};n.isSupported="function"==typeof U&&me&&void 0!==me.createHTMLDocument&&9!==ge;var be,ve,Te=Z,Ne=Q,Ee=ee,Ae=te,we=re,xe=oe,ke=ne,Se=null,_e=B({},[].concat(o(G),o(W),o(Y),o(V),o(text))),Oe=null,De=B({},[].concat(o(html),o(svg),o(J),o(X))),Ce=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Re=null,Me=null,Le=!0,Ie=!0,Fe=!1,He=!1,Ue=!1,ze=!1,Be=!1,je=!1,Pe=!1,Ge=!1,We=!0,qe=!0,Ye=!1,Ke={},Ve=null,$e=B({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Je=null,Xe=B({},["audio","video","img","source","image","track"]),Ze=null,Qe=B({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),et="http://www.w3.org/1998/Math/MathML",tt="http://www.w3.org/2000/svg",nt="http://www.w3.org/1999/xhtml",ot=nt,at=!1,it=["application/xhtml+xml","text/html"],lt="text/html",ct=null,ut=l.createElement("form"),st=function(e){return e instanceof RegExp||e instanceof Function},mt=function(t){ct&&ct===t||(t&&"object"===e(t)||(t={}),t=j(t),Se="ALLOWED_TAGS"in t?B({},t.ALLOWED_TAGS):_e,Oe="ALLOWED_ATTR"in t?B({},t.ALLOWED_ATTR):De,Ze="ADD_URI_SAFE_ATTR"in t?B(j(Qe),t.ADD_URI_SAFE_ATTR):Qe,Je="ADD_DATA_URI_TAGS"in t?B(j(Xe),t.ADD_DATA_URI_TAGS):Xe,Ve="FORBID_CONTENTS"in t?B({},t.FORBID_CONTENTS):$e,Re="FORBID_TAGS"in t?B({},t.FORBID_TAGS):{},Me="FORBID_ATTR"in t?B({},t.FORBID_ATTR):{},Ke="USE_PROFILES"in t&&t.USE_PROFILES,Le=!1!==t.ALLOW_ARIA_ATTR,Ie=!1!==t.ALLOW_DATA_ATTR,Fe=t.ALLOW_UNKNOWN_PROTOCOLS||!1,He=t.SAFE_FOR_TEMPLATES||!1,Ue=t.WHOLE_DOCUMENT||!1,je=t.RETURN_DOM||!1,Pe=t.RETURN_DOM_FRAGMENT||!1,Ge=t.RETURN_TRUSTED_TYPE||!1,Be=t.FORCE_BODY||!1,We=!1!==t.SANITIZE_DOM,qe=!1!==t.KEEP_CONTENT,Ye=t.IN_PLACE||!1,ke=t.ALLOWED_URI_REGEXP||ke,ot=t.NAMESPACE||nt,t.CUSTOM_ELEMENT_HANDLING&&st(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(Ce.tagNameCheck=t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),t.CUSTOM_ELEMENT_HANDLING&&st(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(Ce.attributeNameCheck=t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),t.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(Ce.allowCustomizedBuiltInElements=t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),be=be=-1===it.indexOf(t.PARSER_MEDIA_TYPE)?lt:t.PARSER_MEDIA_TYPE,ve="application/xhtml+xml"===be?function(e){return e}:C,He&&(Ie=!1),Pe&&(je=!0),Ke&&(Se=B({},o(text)),Oe=[],!0===Ke.html&&(B(Se,G),B(Oe,html)),!0===Ke.svg&&(B(Se,W),B(Oe,svg),B(Oe,X)),!0===Ke.svgFilters&&(B(Se,Y),B(Oe,svg),B(Oe,X)),!0===Ke.mathMl&&(B(Se,V),B(Oe,J),B(Oe,X))),t.ADD_TAGS&&(Se===_e&&(Se=j(Se)),B(Se,t.ADD_TAGS)),t.ADD_ATTR&&(Oe===De&&(Oe=j(Oe)),B(Oe,t.ADD_ATTR)),t.ADD_URI_SAFE_ATTR&&B(Ze,t.ADD_URI_SAFE_ATTR),t.FORBID_CONTENTS&&(Ve===$e&&(Ve=j(Ve)),B(Ve,t.FORBID_CONTENTS)),qe&&(Se["#text"]=!0),Ue&&B(Se,["html","head","body"]),Se.table&&(B(Se,["tbody"]),delete Re.tbody),E&&E(t),ct=t)},ft=B({},["mi","mo","mn","ms","mtext"]),pt=B({},["foreignobject","desc","title","annotation-xml"]),ht=B({},["title","style","font","a","script"]),gt=B({},W);B(gt,Y),B(gt,K);var yt=B({},V);B(yt,$);var bt=function(element){var e=U(element);e&&e.tagName||(e={namespaceURI:nt,tagName:"template"});var t=C(element.tagName),n=C(e.tagName);return element.namespaceURI===tt?e.namespaceURI===nt?"svg"===t:e.namespaceURI===et?"svg"===t&&("annotation-xml"===n||ft[n]):Boolean(gt[t]):element.namespaceURI===et?e.namespaceURI===nt?"math"===t:e.namespaceURI===tt?"math"===t&&pt[n]:Boolean(yt[t]):element.namespaceURI===nt&&!(e.namespaceURI===tt&&!pt[n])&&!(e.namespaceURI===et&&!ft[n])&&!yt[t]&&(ht[t]||!gt[t])},vt=function(e){D(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){try{e.outerHTML=ue}catch(t){e.remove()}}},Tt=function(e,t){try{D(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){D(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!Oe[e])if(je||Pe)try{vt(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},Nt=function(e){var t,n;if(Be)e="<remove></remove>"+e;else{var r=R(e,/^[\r\n\t ]+/);n=r&&r[0]}"application/xhtml+xml"===be&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var o=z?z.createHTML(e):e;if(ot===nt)try{t=(new N).parseFromString(o,be)}catch(e){}if(!t||!t.documentElement){t=me.createDocument(ot,"template",null);try{t.documentElement.innerHTML=at?"":o}catch(e){}}var body=t.body||t.documentElement;return e&&n&&body.insertBefore(l.createTextNode(n),body.childNodes[0]||null),ot===nt?de.call(t,Ue?"html":"body")[0]:Ue?t.documentElement:body},Et=function(e){return fe.call(e.ownerDocument||e,e,h.SHOW_ELEMENT|h.SHOW_COMMENT|h.SHOW_TEXT,null,!1)},At=function(e){return e instanceof T&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof v)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore)},wt=function(object){return"object"===e(f)?object instanceof f:object&&"object"===e(object)&&"number"==typeof object.nodeType&&"string"==typeof object.nodeName},xt=function(e,t,data){ye[e]&&_(ye[e],(function(e){e.call(n,t,data,ct)}))},kt=function(e){var content;if(xt("beforeSanitizeElements",e,null),At(e))return vt(e),!0;if(F(/[\u0080-\uFFFF]/,e.nodeName))return vt(e),!0;var t=ve(e.nodeName);if(xt("uponSanitizeElement",e,{tagName:t,allowedTags:Se}),e.hasChildNodes()&&!wt(e.firstElementChild)&&(!wt(e.content)||!wt(e.content.firstElementChild))&&F(/<[/\w]/g,e.innerHTML)&&F(/<[/\w]/g,e.textContent))return vt(e),!0;if("select"===t&&F(/<template/i,e.innerHTML))return vt(e),!0;if(!Se[t]||Re[t]){if(!Re[t]&&_t(t)){if(Ce.tagNameCheck instanceof RegExp&&F(Ce.tagNameCheck,t))return!1;if(Ce.tagNameCheck instanceof Function&&Ce.tagNameCheck(t))return!1}if(qe&&!Ve[t]){var r=U(e)||e.parentNode,o=S(e)||e.childNodes;if(o&&r)for(var i=o.length-1;i>=0;--i)r.insertBefore(x(o[i],!0),k(e))}return vt(e),!0}return e instanceof d&&!bt(e)?(vt(e),!0):"noscript"!==t&&"noembed"!==t||!F(/<\/no(script|embed)/i,e.innerHTML)?(He&&3===e.nodeType&&(content=e.textContent,content=M(content,Te," "),content=M(content,Ne," "),e.textContent!==content&&(D(n.removed,{element:e.cloneNode()}),e.textContent=content)),xt("afterSanitizeElements",e,null),!1):(vt(e),!0)},St=function(e,t,n){if(We&&("id"===t||"name"===t)&&(n in l||n in ut))return!1;if(Ie&&!Me[t]&&F(Ee,t));else if(Le&&F(Ae,t));else if(!Oe[t]||Me[t]){if(!(_t(e)&&(Ce.tagNameCheck instanceof RegExp&&F(Ce.tagNameCheck,e)||Ce.tagNameCheck instanceof Function&&Ce.tagNameCheck(e))&&(Ce.attributeNameCheck instanceof RegExp&&F(Ce.attributeNameCheck,t)||Ce.attributeNameCheck instanceof Function&&Ce.attributeNameCheck(t))||"is"===t&&Ce.allowCustomizedBuiltInElements&&(Ce.tagNameCheck instanceof RegExp&&F(Ce.tagNameCheck,n)||Ce.tagNameCheck instanceof Function&&Ce.tagNameCheck(n))))return!1}else if(Ze[t]);else if(F(ke,M(n,xe,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==L(n,"data:")||!Je[e])if(Fe&&!F(we,M(n,xe,"")));else if(n)return!1;return!0},_t=function(e){return e.indexOf("-")>0},Ot=function(e){var t,r,o,l;xt("beforeSanitizeAttributes",e,null);var c=e.attributes;if(c){var m={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Oe};for(l=c.length;l--;){var f=t=c[l],d=f.name,h=f.namespaceURI;if(r="value"===d?t.value:I(t.value),o=ve(d),m.attrName=o,m.attrValue=r,m.keepAttr=!0,m.forceKeepAttr=void 0,xt("uponSanitizeAttribute",e,m),r=m.attrValue,!m.forceKeepAttr&&(Tt(d,e),m.keepAttr))if(F(/\/>/i,r))Tt(d,e);else{He&&(r=M(r,Te," "),r=M(r,Ne," "));var y=ve(e.nodeName);if(St(y,o,r))try{h?e.setAttributeNS(h,d,r):e.setAttribute(d,r),O(n.removed)}catch(e){}}}xt("afterSanitizeAttributes",e,null)}},Dt=function e(t){var n,r=Et(t);for(xt("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)xt("uponSanitizeShadowNode",n,null),kt(n)||(n.content instanceof c&&e(n.content),Ot(n));xt("afterSanitizeShadowDOM",t,null)};return n.sanitize=function(o,l){var body,m,d,h,y;if((at=!o)&&(o="\x3c!--\x3e"),"string"!=typeof o&&!wt(o)){if("function"!=typeof o.toString)throw H("toString is not a function");if("string"!=typeof(o=o.toString()))throw H("dirty is not a string, aborting")}if(!n.isSupported){if("object"===e(t.toStaticHTML)||"function"==typeof t.toStaticHTML){if("string"==typeof o)return t.toStaticHTML(o);if(wt(o))return t.toStaticHTML(o.outerHTML)}return o}if(ze||mt(l),n.removed=[],"string"==typeof o&&(Ye=!1),Ye){if(o.nodeName){var v=ve(o.nodeName);if(!Se[v]||Re[v])throw H("root node is forbidden and cannot be sanitized in-place")}}else if(o instanceof f)1===(m=(body=Nt("\x3c!----\x3e")).ownerDocument.importNode(o,!0)).nodeType&&"BODY"===m.nodeName||"HTML"===m.nodeName?body=m:body.appendChild(m);else{if(!je&&!He&&!Ue&&-1===o.indexOf("<"))return z&&Ge?z.createHTML(o):o;if(!(body=Nt(o)))return je?null:Ge?ue:""}body&&Be&&vt(body.firstChild);for(var T=Et(Ye?o:body);d=T.nextNode();)3===d.nodeType&&d===h||kt(d)||(d.content instanceof c&&Dt(d.content),Ot(d),h=d);if(h=null,Ye)return o;if(je){if(Pe)for(y=pe.call(body.ownerDocument);body.firstChild;)y.appendChild(body.firstChild);else y=body;return Oe.shadowroot&&(y=he.call(r,y,!0)),y}var N=Ue?body.outerHTML:body.innerHTML;return Ue&&Se["!doctype"]&&body.ownerDocument&&body.ownerDocument.doctype&&body.ownerDocument.doctype.name&&F(ae,body.ownerDocument.doctype.name)&&(N="<!DOCTYPE "+body.ownerDocument.doctype.name+">\n"+N),He&&(N=M(N,Te," "),N=M(N,Ne," ")),z&&Ge?z.createHTML(N):N},n.setConfig=function(e){mt(e),ze=!0},n.clearConfig=function(){ct=null,ze=!1},n.isValidAttribute=function(e,t,n){ct||mt({});var r=ve(e),o=ve(t);return St(r,o,n)},n.addHook=function(e,t){"function"==typeof t&&(ye[e]=ye[e]||[],D(ye[e],t))},n.removeHook=function(e){if(ye[e])return O(ye[e])},n.removeHooks=function(e){ye[e]&&(ye[e]=[])},n.removeAllHooks=function(){ye={}},n}return ce()}()}}]);