parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"ByKk":[function(require,module,exports) {

},{}],"Focm":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}require("./css/timer.css");var a={timer:document.querySelector("#timer-1"),days:document.querySelector('span[data-value="days"]'),hours:document.querySelector('span[data-value="hours"]'),mins:document.querySelector('span[data-value="mins"]'),secs:document.querySelector('span[data-value="secs"]')},s=function(){function t(n){var s=this,i=n.selector,o=n.targetDate;e(this,t),r(this,"intervalId",null),r(this,"intervalId",setInterval(function(){var e=Date.now(),t=s.targetDate-e,n=s.getTimeComponents(t);t<=0&&(s.finishTime(),n={days:"00",hours:"00",mins:"00",secs:"00"},a.timer.textContent="sale time expired"),s.updateClockface(n);var r=n;r.days,r.hours,r.mins,r.secs},1e3)),this.selector=i,this.targetDate=o}return n(t,[{key:"getTimeComponents",value:function(e){return{days:this.pad(Math.floor(e/864e5)),hours:this.pad(Math.floor(e%864e5/36e5)),mins:this.pad(Math.floor(e%36e5/6e4)),secs:this.pad(Math.floor(e%6e4/1e3))}}},{key:"finishTime",value:function(){clearInterval(this.intervalId)}},{key:"pad",value:function(e){return String(e).padStart(2,"0")}},{key:"updateClockface",value:function(e){var t=e.days,n=e.hours,r=e.mins,s=e.secs;a.days.innerHTML=t,a.hours.innerHTML=n,a.mins.innerHTML=r,a.secs.innerHTML=s}}]),t}();new s({selector:"#timer-1",targetDate:new Date("Nov 21, 2020, 12:00:00")});
},{"./css/timer.css":"ByKk"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-11-timer/src.b50a45eb.js.map