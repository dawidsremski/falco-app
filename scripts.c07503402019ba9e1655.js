!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AOS=t():e.AOS=t()}(this,(function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=(o(n(1)),n(6)),r=o(a),s=o(n(7)),u=o(n(8)),c=o(n(9)),f=o(n(10)),l=o(n(11)),d=o(n(14)),p=[],m=!1,b={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},v=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(m=!0),m)return p=(0,l.default)(p,b),(0,f.default)(p,b.once),p},A=function(){p=(0,d.default)(),v()};e.exports={init:function(e){b=i(b,e),p=(0,d.default)();var t=document.all&&!window.atob;return function(e){return!0===e||"mobile"===e&&c.default.mobile()||"phone"===e&&c.default.phone()||"tablet"===e&&c.default.tablet()||"function"==typeof e&&!0===e()}(b.disable)||t?void p.forEach((function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})):(b.disableMutationObserver||u.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),b.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",b.easing),document.querySelector("body").setAttribute("data-aos-duration",b.duration),document.querySelector("body").setAttribute("data-aos-delay",b.delay),"DOMContentLoaded"===b.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?v(!0):"load"===b.startEvent?window.addEventListener(b.startEvent,(function(){v(!0)})):document.addEventListener(b.startEvent,(function(){v(!0)})),window.addEventListener("resize",(0,s.default)(v,b.debounceDelay,!0)),window.addEventListener("orientationchange",(0,s.default)(v,b.debounceDelay,!0)),window.addEventListener("scroll",(0,r.default)((function(){(0,f.default)(p,b.once)}),b.throttleDelay)),b.disableMutationObserver||u.default.ready("[data-aos]",A),p)},refresh:v,refreshHard:A}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e){var t=void 0===e?"undefined":i(e);return!!e&&("object"==t||"function"==t)}function o(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":i(e))||function(e){return!!e&&"object"==(void 0===e?"undefined":i(e))}(e)&&v.call(e)==s}(e))return r;if(n(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=n(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(u,"");var o=f.test(e);return o||l.test(e)?d(e.slice(2),o?2:8):c.test(e)?r:+e}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a="Expected a function",r=NaN,s="[object Symbol]",u=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,l=/^0o[0-7]+$/i,d=parseInt,p="object"==(void 0===t?"undefined":i(t))&&t&&t.Object===Object&&t,m="object"==("undefined"==typeof self?"undefined":i(self))&&self&&self.Object===Object&&self,b=p||m||Function("return this")(),v=Object.prototype.toString,A=Math.max,g=Math.min,h=function(){return b.Date.now()};e.exports=function(e,t,i){var r=!0,s=!0;if("function"!=typeof e)throw new TypeError(a);return n(i)&&(r="leading"in i?!!i.leading:r,s="trailing"in i?!!i.trailing:s),function(e,t,i){function r(t){var n=d,o=p;return d=p=void 0,w=t,b=e.apply(o,n)}function s(e){return w=e,v=setTimeout(c,t),k?r(e):b}function u(e){var n=e-y;return void 0===y||n>=t||n<0||x&&e-w>=m}function c(){var e=h();return u(e)?f(e):void(v=setTimeout(c,function(e){var n=t-(e-y);return x?g(n,m-(e-w)):n}(e)))}function f(e){return v=void 0,j&&d?r(e):(d=p=void 0,b)}function l(){var e=h(),n=u(e);if(d=arguments,p=this,y=e,n){if(void 0===v)return s(y);if(x)return v=setTimeout(c,t),r(y)}return void 0===v&&(v=setTimeout(c,t)),b}var d,p,m,b,v,y,w=0,k=!1,x=!1,j=!0;if("function"!=typeof e)throw new TypeError(a);return t=o(t)||0,n(i)&&(k=!!i.leading,m=(x="maxWait"in i)?A(o(i.maxWait)||0,t):m,j="trailing"in i?!!i.trailing:j),l.cancel=function(){void 0!==v&&clearTimeout(v),w=0,d=y=p=v=void 0},l.flush=function(){return void 0===v?b:f(h())},l}(e,t,{leading:r,maxWait:t,trailing:s})}}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e){var t=void 0===e?"undefined":i(e);return!!e&&("object"==t||"function"==t)}function o(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":i(e))||function(e){return!!e&&"object"==(void 0===e?"undefined":i(e))}(e)&&b.call(e)==r}(e))return a;if(n(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=n(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(s,"");var o=c.test(e);return o||f.test(e)?l(e.slice(2),o?2:8):u.test(e)?a:+e}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=NaN,r="[object Symbol]",s=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,d="object"==(void 0===t?"undefined":i(t))&&t&&t.Object===Object&&t,p="object"==("undefined"==typeof self?"undefined":i(self))&&self&&self.Object===Object&&self,m=d||p||Function("return this")(),b=Object.prototype.toString,v=Math.max,A=Math.min,g=function(){return m.Date.now()};e.exports=function(e,t,i){function a(t){var n=l,o=d;return l=d=void 0,y=t,m=e.apply(o,n)}function r(e){return y=e,b=setTimeout(u,t),w?a(e):m}function s(e){var n=e-h;return void 0===h||n>=t||n<0||k&&e-y>=p}function u(){var e=g();return s(e)?c(e):void(b=setTimeout(u,function(e){var n=t-(e-h);return k?A(n,p-(e-y)):n}(e)))}function c(e){return b=void 0,x&&l?a(e):(l=d=void 0,m)}function f(){var e=g(),n=s(e);if(l=arguments,d=this,h=e,n){if(void 0===b)return r(h);if(k)return b=setTimeout(u,t),a(h)}return void 0===b&&(b=setTimeout(u,t)),m}var l,d,p,m,b,h,y=0,w=!1,k=!1,x=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return t=o(t)||0,n(i)&&(w=!!i.leading,p=(k="maxWait"in i)?v(o(i.maxWait)||0,t):p,x="trailing"in i?!!i.trailing:x),f.cancel=function(){void 0!==b&&clearTimeout(b),y=0,l=h=d=b=void 0},f.flush=function(){return void 0===b?m:c(g())},f}}).call(t,function(){return this}())},function(e,t){"use strict";function n(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function o(e){e&&e.forEach((function(e){var t=Array.prototype.slice.call(e.addedNodes),n=Array.prototype.slice.call(e.removedNodes);if(function e(t){var n=void 0,o=void 0;for(n=0;n<t.length;n+=1){if((o=t[n]).dataset&&o.dataset.aos)return!0;if(o.children&&e(o.children))return!0}return!1}(t.concat(n)))return i()}))}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){};t.default={isSupported:function(){return!!n()},ready:function(e,t){var a=window.document,r=new(n())(o);i=t,r.observe(a.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}}},function(e,t){"use strict";function n(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,s=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return o(e,[{key:"phone",value:function(){var e=n();return!(!i.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=n();return!(!r.test(e)&&!s.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new u},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=window.pageYOffset,o=window.innerHeight;e.forEach((function(e,i){!function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):void 0!==o&&("false"===o||!n&&"true"!==o)&&e.node.classList.remove("aos-animate")}(e,o+n,t)}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){return e&&e.__esModule?e:{default:e}}(n(12));t.default=function(e,t){return e.forEach((function(e,n){e.node.classList.add("aos-init"),e.position=(0,o.default)(e.node,t.offset)})),e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){return e&&e.__esModule?e:{default:e}}(n(13));t.default=function(e,t){var n=0,i=0,a=window.innerHeight,r={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(r.offset&&!isNaN(r.offset)&&(i=parseInt(r.offset)),r.anchor&&document.querySelectorAll(r.anchor)&&(e=document.querySelectorAll(r.anchor)[0]),n=(0,o.default)(e).top,r.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=a/2;break;case"bottom-center":n+=a/2+e.offsetHeight;break;case"center-center":n+=a/2+e.offsetHeight/2;break;case"top-top":n+=a;break;case"bottom-top":n+=e.offsetHeight+a;break;case"center-top":n+=e.offsetHeight/2+a}return r.anchorPlacement||r.offset||isNaN(t)||(i=t),n+i}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,(function(e){return{node:e}}))}}])})),function(e,t,n){function o(e,t){return typeof e===t}function i(e){var t=l.className,n=u._config.classPrefix||"";if(d&&(t=t.baseVal),u._config.enableJSClass){var o=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(o,"$1"+n+"js$2")}u._config.enableClasses&&(e.length>0&&(t+=" "+n+e.join(" "+n)),d?l.className.baseVal=t:l.className=t)}function a(e,t){if("object"==typeof e)for(var n in e)c(e,n)&&a(n,e[n]);else{var o=(e=e.toLowerCase()).split("."),r=u[o[0]];if(2===o.length&&(r=r[o[1]]),void 0!==r)return u;t="function"==typeof t?t():t,1===o.length?u[o[0]]=t:(!u[o[0]]||u[o[0]]instanceof Boolean||(u[o[0]]=new Boolean(u[o[0]])),u[o[0]][o[1]]=t),i([(t&&!1!==t?"":"no-")+o.join("-")]),u._trigger(e,t)}return u}var r=[],s={_version:"3.9.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout((function(){t(n[e])}),0)},addTest:function(e,t,n){r.push({name:e,fn:t,options:n})},addAsyncTest:function(e){r.push({name:null,fn:e})}},u=function(){};u.prototype=s,u=new u;var c,f=[],l=t.documentElement,d="svg"===l.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;c=o(e,"undefined")||o(e.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),s._l={},s.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),u.hasOwnProperty(e)&&setTimeout((function(){u._trigger(e,u[e])}),0)},s._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout((function(){var e;for(e=0;e<n.length;e++)(0,n[e])(t)}),0),delete this._l[e]}},u._q.push((function(){s.addTest=a})),u.addAsyncTest((function(){function e(e,t,n){function o(t){var o=!(!t||"load"!==t.type)&&1===i.width;a(e,"webp"===e&&o?new Boolean(o):o),n&&n(t)}var i=new Image;i.onerror=o,i.onload=o,i.src=t}var t=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],n=t.shift();e(n.name,n.uri,(function(n){if(n&&"load"===n.type)for(var o=0;o<t.length;o++)e(t[o].name,t[o].uri)}))})),function(){var e,t,n,i,a,s;for(var c in r)if(r.hasOwnProperty(c)){if(e=[],(t=r[c]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(i=o(t.fn,"function")?t.fn():t.fn,a=0;a<e.length;a++)1===(s=e[a].split(".")).length?u[s[0]]=i:(u[s[0]]&&(!u[s[0]]||u[s[0]]instanceof Boolean)||(u[s[0]]=new Boolean(u[s[0]])),u[s[0]][s[1]]=i),f.push((i?"":"no-")+s.join("-"))}}(),i(f),delete s.addTest,delete s.addAsyncTest;for(var p=0;p<u._q.length;p++)u._q[p]();e.Modernizr=u}(window,document);