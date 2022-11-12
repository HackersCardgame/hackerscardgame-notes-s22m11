gapi.loaded_1(function(_){var window=this;
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var eI,fI,hI;eI=function(){};fI={};_.gI=function(a){if(fI[a])return fI[a];a=String(a);if(!fI[a]){var b=/function\s+([^\(]+)/m.exec(a);fI[a]=b?b[1]:"[Anonymous]"}return fI[a]};
hI=function(a,b){var c=[];if(_.hb(b,a))c.push("[...circular reference...]");else if(a&&50>b.length){c.push(_.gI(a)+"(");for(var d=a.arguments,e=0;d&&e<d.length;e++){0<e&&c.push(", ");var f=d[e];switch(typeof f){case "object":f=f?"object":"null";break;case "string":break;case "number":f=String(f);break;case "boolean":f=f?"true":"false";break;case "function":f=(f=_.gI(f))?f:"[fn]";break;default:f=typeof f}40<f.length&&(f=f.slice(0,40)+"...");c.push(f)}b.push(a);c.push(")\n");try{c.push(hI(a.caller,
b))}catch(h){c.push("[exception trying to get caller]\n")}}else a?c.push("[...long stack...]"):c.push("[end]");return c.join("")};_.iI=function(a){var b=Error();if(Error.captureStackTrace)Error.captureStackTrace(b,a||_.iI),b=String(b.stack);else{try{throw b;}catch(c){b=c}b=(b=b.stack)?String(b):null}b||(b=hI(a||arguments.callee.caller,[]));return b};_.jI=function(a){return _.Id("script[nonce]",a)};
/*

 Copyright 2005, 2007 Bob Ippolito. All Rights Reserved.
 Copyright The Closure Library Authors.
 SPDX-License-Identifier: MIT
*/
_.kI=function(a,b){this.Fz=[];this.PP=a;this.tL=b||null;this.js=this.Do=!1;this.Re=void 0;this.BI=this.nW=this.wB=!1;this.xA=0;this.Db=null;this.yB=0};_.Za(_.kI,eI);_.kI.prototype.cancel=function(a){if(this.Do)this.Re instanceof _.kI&&this.Re.cancel();else{if(this.Db){var b=this.Db;delete this.Db;a?b.cancel(a):(b.yB--,0>=b.yB&&b.cancel())}this.PP?this.PP.call(this.tL,this):this.BI=!0;this.Do||this.wj(new _.lI(this))}};_.kI.prototype.kL=function(a,b){this.wB=!1;mI(this,a,b)};
var mI=function(a,b,c){a.Do=!0;a.Re=c;a.js=!b;nI(a)},pI=function(a){if(a.Do){if(!a.BI)throw new oI(a);a.BI=!1}};_.kI.prototype.callback=function(a){pI(this);mI(this,!0,a)};_.kI.prototype.wj=function(a){pI(this);mI(this,!1,a)};_.kI.prototype.Ed=function(a,b){return _.qI(this,a,null,b)};_.qI=function(a,b,c,d){a.Fz.push([b,c,d]);a.Do&&nI(a);return a};
_.kI.prototype.then=function(a,b,c){var d,e,f=new _.Dj(function(h,k){e=h;d=k});_.qI(this,e,function(h){h instanceof _.lI?f.cancel():d(h);return rI},this);return f.then(a,b,c)};_.mj(_.kI);_.kI.prototype.isError=function(a){return a instanceof Error};
var sI=function(a){return _.Qb(a.Fz,function(b){return"function"===typeof b[1]})},rI={},nI=function(a){if(a.xA&&a.Do&&sI(a)){var b=a.xA,c=tI[b];c&&(_.u.clearTimeout(c.Ca),delete tI[b]);a.xA=0}a.Db&&(a.Db.yB--,delete a.Db);b=a.Re;for(var d=c=!1;a.Fz.length&&!a.wB;){var e=a.Fz.shift(),f=e[0],h=e[1];e=e[2];if(f=a.js?h:f)try{var k=f.call(e||a.tL,b);k===rI&&(k=void 0);void 0!==k&&(a.js=a.js&&(k==b||a.isError(k)),a.Re=b=k);if(_.nj(b)||"function"===typeof _.u.Promise&&b instanceof _.u.Promise)d=!0,a.wB=
!0}catch(l){b=l,a.js=!0,sI(a)||(c=!0)}}a.Re=b;d&&(k=(0,_.O)(a.kL,a,!0),d=(0,_.O)(a.kL,a,!1),b instanceof _.kI?(_.qI(b,k,d),b.nW=!0):b.then(k,d));c&&(b=new uI(b),tI[b.Ca]=b,a.xA=b.Ca)},oI=function(){_.fb.call(this)};_.Za(oI,_.fb);oI.prototype.message="Deferred has already fired";oI.prototype.name="AlreadyCalledError";_.lI=function(){_.fb.call(this)};_.Za(_.lI,_.fb);_.lI.prototype.message="Deferred was canceled";_.lI.prototype.name="CanceledError";
var uI=function(a){this.Ca=_.u.setTimeout((0,_.O)(this.M5,this),0);this.cw=a};uI.prototype.M5=function(){delete tI[this.Ca];throw this.cw;};var tI={};

var uW=function(){var a={};a.location=document.location.toString();if(sW())try{a["top.location"]=top.location.toString()}catch(c){a["top.location"]="[external]"}else a["top.location"]="[external]";for(var b in tW)try{a[b]=tW[b].call()}catch(c){a[b]="[error] "+c.message}return a},AW=function(){var a=_.Ce("debug/host"),b="withCredentials"in new XMLHttpRequest,c=!!window.XDomainRequest,d=document.location.origin;vW.xd();var e=new wW("/_/jserror",void 0,!0);xW(e,function(f,h,k,l){a===d?_.Ix(a+f,null,
h,k,l):c?(l=new window.XDomainRequest,l.open(h,a+f),l.send(k)):b&&_.Ix(a+f,null,h,k,l)});yW(new zW(e))},BW=function(a){(0,eval)(a)},CW=function(a){var b=_.u.onerror;_.u.onerror=function(c,d,e,f,h){b&&b(c,d,e,f,h);a({message:c,fileName:d,line:e,lineNumber:e,Gda:f,error:h});return!1}},DW=function(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack},EW=function(a,b){b||(b={});b[DW(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[DW(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||
(c+="string"===typeof a?a:a.message+"\n"),c+=EW(a,b));return c},FW=function(a){var b=_.wi("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(f){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||_.u.$googDebugFname||b}catch(f){e="Not available",c=!0}b=EW(a);if(!(!c&&a.lineNumber&&
a.fileName&&a.stack&&a.message&&a.name))return c=a.message,null==c&&(c=a.constructor&&a.constructor instanceof Function?'Unknown Error of type "'+(a.constructor.name?a.constructor.name:_.gI(a.constructor))+'"':"Unknown Error of unknown type","function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())),{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"};a.stack=b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,
stack:a.stack}};
var GW=function(){_.yi.call(this)};_.I(GW,_.yi);GW.prototype.xd=function(){this.Yp=[]};
var yW=function(a){var b=vW;b.vG=a;HW(b)},JW=function(a,b){var c=vW;if(c.Yfa){a="Potentially sensitive message stripped for security reasons.";var d=Error("Tb");d.columnNumber=b.columnNumber;d.lineNumber=b.lineNumber;d.name=b.name;d.fileName=b.fileName;if(28<=_.sx("Chromium")||14<=_.sx("Firefox"))d.stack=b.stack;b=d}c.isDisposed()||b instanceof _.lI||(c.vG?IW(c.vG,b,a):c.Yp&&10>c.Yp.length&&c.Yp.push([a,b]))},HW=function(a){a.Yp&&(_.Ob(a.Yp,function(b){IW(this.vG,b[1],b[0])},a),a.Yp=null)};
GW.prototype.ub=null;var vW=new GW;
var sW=function(){var a=window;if(!a.location)try{JSON.stringify(a)}catch(c){}var b=a.location&&a.location.ancestorOrigins;if(void 0!==b)return b&&b.length?b[b.length-1]==a.location.origin:!0;try{return void 0!==a.top.location.href}catch(c){return!1}};
var tW={};
var zW=function(a){this.eL=a;this.tO={};this.ss=[]},IW=function(a,b,c){var d=uW();c&&(d.message=c);a:{c=_.iI();d["call-stack"]=c;b=b instanceof Error?b:b||"";for(c=0;c<a.ss.length;c++)if(!1===a.ss[c](b,d))break a;c="";if(b){c=b.message||"unknown";for(var e=0,f=0;f<c.length;++f)e=31*e+c.charCodeAt(f)>>>0;c=e}e="";for(h in d)e=e+h+":"+d[h]+":";var h=c+"::"+e;c=a.tO[h];c||(c={time:0,count:0},a.tO[h]=c);1E4>_.ot()-c.time?(c.count++,1==c.count&&(d=uW(),d.message="Throttling: "+h,a.eL.kx(b,d))):(c.count&&
(d["dropped-instances"]=c.count),c.time=_.ot(),c.count=0,a.eL.kx(b,d))}};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var KW=function(a){_.yi.call(this);this.vX=a};_.Za(KW,_.yi);KW.prototype.wrap=function(a){return LW(this,a)};var MW=function(a,b){return(b?"__wrapper_":"__protected_")+_.Hb(a)+"__"},LW=function(a,b){var c=MW(a,!0);b[c]||((b[c]=NW(a,b))[MW(a,!1)]=b);return b[c]},NW=function(a,b){var c=function(){if(a.isDisposed())return b.apply(this,arguments);try{return b.apply(this,arguments)}catch(d){a.Qk(d)}};c[MW(a,!1)]=b;return c};
KW.prototype.Qk=function(a){if(!(a&&"object"===typeof a&&"string"===typeof a.message&&0==a.message.indexOf("Error in protected function: ")||"string"===typeof a&&0==a.indexOf("Error in protected function: ")))throw this.vX(a),new OW(a);};
var PW=function(a,b){var c=_.u.window,d=c[b];if(!d)throw Error("Ub`"+b);c[b]=function(e,f){"string"===typeof e&&(e=_.ji(BW,e));e&&(arguments[0]=e=LW(a,e));if(d.apply)return d.apply(this,arguments);var h=e;if(2<arguments.length){var k=Array.prototype.slice.call(arguments,2);h=function(){e.apply(this,k)}}return d(h,f)};c[b][MW(a,!1)]=d};KW.prototype.ta=function(){var a=_.u.window;var b=a.setTimeout;b=b[MW(this,!1)]||b;a.setTimeout=b;b=a.setInterval;b=b[MW(this,!1)]||b;a.setInterval=b;KW.H.ta.call(this)};
var OW=function(a){_.fb.call(this,"Error in protected function: "+(a&&a.message?String(a.message):String(a)),a);(a=a&&a.stack)&&"string"===typeof a&&(this.stack=a)};_.Za(OW,_.fb);
var wW=function(a,b,c){_.aj.call(this);this.jL=b||null;this.qK={};this.eT=QW;this.v_=a;if(!c)if(this.Ao=null,_.cd&&!_.xd("10"))CW((0,_.O)(this.kx,this));else{this.Ao=new KW((0,_.O)(this.kx,this));PW(this.Ao,"setTimeout");PW(this.Ao,"setInterval");a=this.Ao;b=_.u.window;c=["requestAnimationFrame","mozRequestAnimationFrame","webkitAnimationFrame","msRequestAnimationFrame"];for(var d=0;d<c.length;d++){var e=c[d];c[d]in b&&PW(a,e)}a=this.Ao;_.ni=!0;b=(0,_.O)(a.wrap,a);for(c=0;c<_.li.length;c++)_.li[c](b);
_.mi.push(a)}};_.Za(wW,_.aj);var RW=function(a,b){_.Bi.call(this,"a");this.error=a;this.context=b};_.Za(RW,_.Bi);var QW=function(a,b,c,d){if(d instanceof Map){var e={};d=_.ra(d);for(var f=d.next();!f.done;f=d.next()){var h=_.ra(f.value);f=h.next().value;h=h.next().value;e[f]=h}}else e=d;_.Ix(a,null,b,c,e)},xW=function(a,b){a.eT=b};
wW.prototype.kx=function(a,b){a=a.error||a;b=b?_.jj(b):{};a instanceof Error&&_.ti(b,a.__closure__error__context__984382||{});var c=FW(a);if(this.jL)try{this.jL(c,b)}catch(k){}var d=c.message.substring(0,1900);if(!(a instanceof _.fb)||a.MQ){a=c.stack;try{var e=_.zx(this.v_,"script",c.fileName,"error",d,"line",c.lineNumber);_.ri(this.qK)||(e=_.ph(e,this.qK));d={};d.trace=a;if(b)for(var f in b)d["context."+f]=b[f];var h=_.oh(d);this.eT(e,"POST",h,this.dea)}catch(k){}}try{this.dispatchEvent(new RW(c,
b))}catch(k){}};wW.prototype.ta=function(){_.vi(this.Ao);wW.H.ta.call(this)};
var SW=!1;(window.___jsl=window.___jsl||{}).hefn=function(a,b){SW||(AW(),SW=!0);var c=_.Ce("debug/reportExceptionRate");("number"===typeof c?c:0)>=Math.random()&&(b?JW(b,a):JW(null,a));if(_.Ce("debug/rethrowException"))throw a;};

});
// Google Inc.
