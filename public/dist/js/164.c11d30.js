/*! For license information please see 164.c11d30.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{463:function(t,r,e){"use strict";e.r(r);var n=e(7),o=e.n(n);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(){i=function(){return t};var t={},r=Object.prototype,e=r.hasOwnProperty,n=Object.defineProperty||function(t,r,e){t[r]=e.value},o="function"==typeof Symbol?Symbol:{},s=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function l(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{l({},"")}catch(t){l=function(t,r,e){return t[r]=e}}function d(t,r,e,o){var a=r&&r.prototype instanceof v?r:v,i=Object.create(a.prototype),s=new O(o||[]);return n(i,"_invoke",{value:L(t,e,s)}),i}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=d;var h={};function v(){}function p(){}function m(){}var y={};l(y,s,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g($([])));b&&b!==r&&e.call(b,s)&&(y=b);var _=m.prototype=v.prototype=Object.create(y);function w(t){["next","throw","return"].forEach((function(r){l(t,r,(function(t){return this._invoke(r,t)}))}))}function x(t,r){var o;n(this,"_invoke",{value:function(n,i){function s(){return new r((function(o,s){!function n(o,i,s,c){var u=f(t[o],t,i);if("throw"!==u.type){var l=u.arg,d=l.value;return d&&"object"==a(d)&&e.call(d,"__await")?r.resolve(d.__await).then((function(t){n("next",t,s,c)}),(function(t){n("throw",t,s,c)})):r.resolve(d).then((function(t){l.value=t,s(l)}),(function(t){return n("throw",t,s,c)}))}c(u.arg)}(n,i,o,s)}))}return o=o?o.then(s,s):s()}})}function L(t,r,e){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return j()}for(e.method=o,e.arg=a;;){var i=e.delegate;if(i){var s=C(i,e);if(s){if(s===h)continue;return s}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var c=f(t,r,e);if("normal"===c.type){if(n=e.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(n="completed",e.method="throw",e.arg=c.arg)}}}function C(t,r){var e=r.method,n=t.iterator[e];if(void 0===n)return r.delegate=null,"throw"===e&&t.iterator.return&&(r.method="return",r.arg=void 0,C(t,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),h;var o=f(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,h;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,h):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function E(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function k(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function $(t){if(t){var r=t[s];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return p.prototype=m,n(_,"constructor",{value:m,configurable:!0}),n(m,"constructor",{value:p,configurable:!0}),p.displayName=l(m,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===p||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,u,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},w(x.prototype),l(x.prototype,c,(function(){return this})),t.AsyncIterator=x,t.async=function(r,e,n,o,a){void 0===a&&(a=Promise);var i=new x(d(r,e,n,o),a);return t.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(_),l(_,u,"Generator"),l(_,s,(function(){return this})),l(_,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=$,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return i.type="throw",i.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=e.call(a,"catchLoc"),c=e.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=r&&r<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=r,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),h},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),k(e),h}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;k(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:$(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),h}},t}function s(t,r,e,n,o,a,i){try{var s=t[a](i),c=s.value}catch(t){return void e(t)}s.done?r(c):Promise.resolve(c).then(n,o)}var c={middleware:["auth","check-permissions"],metaInfo:function(){return{title:this.$t("setup.brands.view.page_title")}},components:{Modal:e(22).a},data:function(){return{breadcrumbsCurrent:"setup.brands.view.breadcrumbs_current",breadcrumbs:[{name:"setup.brands.view.breadcrumbs_first",url:"home"},{name:"setup.brands.view.breadcrumbs_second",url:"setup.index"},{name:"setup.brands.view.breadcrumbs_third",url:"brands.index"},{name:"setup.brands.view.breadcrumbs_active",url:""}],url:null,showModal:!1,allData:""}},created:function(){this.getBrand()},methods:{getBrand:function(){var t,r=this;return(t=i().mark((function t(){var e,n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get(window.location.origin+"/api/brands/"+r.$route.params.slug);case 2:e=t.sent,n=e.data,r.allData=n.data;case 5:case"end":return t.stop()}}),t)})),function(){var r=this,e=arguments;return new Promise((function(n,o){var a=t.apply(r,e);function i(t){s(a,n,o,i,c,"next",t)}function c(t){s(a,n,o,i,c,"throw",t)}i(void 0)}))})()},printWindow:function(){window.print()}}},u=e(1),l=Object(u.a)(c,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("breadcrumbs",{attrs:{items:t.breadcrumbs,current:t.breadcrumbsCurrent}}),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"invoice p-3 mb-3"},[e("div",{staticClass:"row invoice-info"},[e("div",{staticClass:"col-sm-4 invoice-col"},[e("CompanyInfo")],1)]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"table-responsive table-custom"},[e("table",{staticClass:"table"},[e("thead",[e("tr",[e("th",[t._v(t._s(t.$t("common.preview")))]),t._v(" "),e("th",[t._v(t._s(t.$t("setup.brands.common.brand_name")))]),t._v(" "),e("th",[t._v(t._s(t.$t("setup.common.sort_code")))]),t._v(" "),t.allData.note?e("th",[t._v(t._s(t.$t("common.note")))]):t._e(),t._v(" "),e("th",[t._v(t._s(t.$t("common.status")))]),t._v(" "),e("th",{staticClass:"text-right"},[t._v(t._s(t.$t("common.created_at")))])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t.allData.image?e("a",{attrs:{href:"#",id:"show-modal"},on:{click:function(r){t.showModal=!0}}},[e("img",{staticClass:"rounded preview-sm",attrs:{src:t.allData.image,loading:"lazy"}})]):e("div",{staticClass:"bg-secondary rounded no-preview-sm"},[e("small",[t._v(t._s(t.$t("common.no_preview")))])])]),t._v(" "),e("td",[t._v(t._s(t.allData.name))]),t._v(" "),e("td",[t._v(t._s(t.allData.code))]),t._v(" "),t.allData.note?e("td",[t._v(t._s(t.allData.note))]):t._e(),t._v(" "),e("td",[1===t.allData.status?e("span",{staticClass:"badge bg-success"},[t._v(t._s(t.$t("common.active")))]):e("span",{staticClass:"badge bg-danger"},[t._v(">"+t._s(t.$t("common.in_active")))])]),t._v(" "),e("td",{staticClass:"text-right"},[t._v("\n                      "+t._s(t._f("moment")(t.allData.createdAt,"Do MMM, YYYY"))+"\n                    ")])])])])])])]),t._v(" "),e("div",{staticClass:"row no-print mt-5"},[e("div",{staticClass:"col-12"},[e("router-link",{staticClass:"btn btn-dark float-right",attrs:{to:{name:"brands.index"}}},[e("i",{staticClass:"fas fa-long-arrow-alt-left"}),t._v(" "+t._s(t.$t("common.back"))+"\n            ")]),t._v(" "),e("a",{staticClass:"btn btn-default",attrs:{href:"#"},on:{click:t.printWindow}},[e("i",{staticClass:"fas fa-print"}),t._v(" "+t._s(t.$t("common.print")))])],1)])])])]),t._v(" "),t.showModal?e("Modal",{on:{close:function(r){t.showModal=!1}}},[e("h5",{attrs:{slot:"header"},slot:"header"},[t._v(t._s(t.$t("common.modal_header")))]),t._v(" "),e("div",{staticClass:"w-100",attrs:{slot:"body"},slot:"body"},[e("img",{staticClass:"rounded img-fluid",attrs:{src:t.allData.image,loading:"lazy"}})])]):t._e()],1)}),[],!1,null,"7c4cf35c",null);r.default=l.exports}}]);