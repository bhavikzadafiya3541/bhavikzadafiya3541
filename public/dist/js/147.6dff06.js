/*! For license information please see 147.6dff06.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{407:function(t,r,e){"use strict";e.r(r);var n=e(7),o=e.n(n),i=e(3);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(){c=function(){return t};var t={},r=Object.prototype,e=r.hasOwnProperty,n=Object.defineProperty||function(t,r,e){t[r]=e.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function l(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{l({},"")}catch(t){l=function(t,r,e){return t[r]=e}}function v(t,r,e,o){var i=r&&r.prototype instanceof _?r:_,a=Object.create(i.prototype),c=new C(o||[]);return n(a,"_invoke",{value:O(t,e,c)}),a}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=v;var p={};function _(){}function h(){}function d(){}var m={};l(m,i,(function(){return this}));var y=Object.getPrototypeOf,b=y&&y(y(L([])));b&&b!==r&&e.call(b,i)&&(m=b);var g=d.prototype=_.prototype=Object.create(m);function w(t){["next","throw","return"].forEach((function(r){l(t,r,(function(t){return this._invoke(r,t)}))}))}function x(t,r){var o;n(this,"_invoke",{value:function(n,i){function c(){return new r((function(o,c){!function n(o,i,c,s){var u=f(t[o],t,i);if("throw"!==u.type){var l=u.arg,v=l.value;return v&&"object"==a(v)&&e.call(v,"__await")?r.resolve(v.__await).then((function(t){n("next",t,c,s)}),(function(t){n("throw",t,c,s)})):r.resolve(v).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,s)}))}s(u.arg)}(n,i,o,c)}))}return o=o?o.then(c,c):c()}})}function O(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return P()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=k(a,e);if(c){if(c===p)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var s=f(t,r,e);if("normal"===s.type){if(n=e.done?"completed":"suspendedYield",s.arg===p)continue;return{value:s.arg,done:e.done}}"throw"===s.type&&(n="completed",e.method="throw",e.arg=s.arg)}}}function k(t,r){var e=r.method,n=t.iterator[e];if(void 0===n)return r.delegate=null,"throw"===e&&t.iterator.return&&(r.method="return",r.arg=void 0,k(t,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),p;var o=f(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,p;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,p):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function $(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function j(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach($,this),this.reset(!0)}function L(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}return{next:P}}function P(){return{value:void 0,done:!0}}return h.prototype=d,n(g,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:h,configurable:!0}),h.displayName=l(d,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===h||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,l(t,u,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},w(x.prototype),l(x.prototype,s,(function(){return this})),t.AsyncIterator=x,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new x(v(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(g),l(g,u,"Generator"),l(g,i,(function(){return this})),l(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=L,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),s=e.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),p},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),j(e),p}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;j(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:L(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),p}},t}function s(t,r,e,n,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void e(t)}c.done?r(s):Promise.resolve(s).then(n,o)}function u(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function l(t,r,e){return(r=function(t){var r=function(t,r){if("object"!==a(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,r||"default");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"===a(r)?r:String(r)}(r))in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}var v={middleware:["auth","check-permissions"],metaInfo:function(){return{title:this.$t("inventory.common.inventory_history")}},data:function(){return{breadcrumbsCurrent:"inventory.history.breadcrumbs_current",breadcrumbs:[{name:"inventory.history.breadcrumbs_first",url:"home"},{name:"inventory.history.breadcrumbs_second",url:"inventory.index"},{name:"inventory.history.breadcrumbs_active",url:""}],allData:"",product:"",date:new Date,loading:!1,productPrefix:""}},computed:function(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?u(Object(e),!0).forEach((function(r){l(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):u(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}({},Object(i.b)("operations",["appInfo"])),created:function(){this.getHistory(),this.productPrefix=this.appInfo.productPrefix},methods:{printWindow:function(){window.print()},getHistory:function(){var t,r=this;return(t=c().mark((function t(){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.loading=!0,t.next=3,o.a.get(window.location.origin+"/api/inventory-history/"+r.$route.params.slug);case 3:e=t.sent,n=e.data,r.allData=n,r.product=n.product,r.loading=!1;case 8:case"end":return t.stop()}}),t)})),function(){var r=this,e=arguments;return new Promise((function(n,o){var i=t.apply(r,e);function a(t){s(i,n,o,a,c,"next",t)}function c(t){s(i,n,o,a,c,"throw",t)}a(void 0)}))})()},stockInQty:function(t){return t.reduce((function(t,r){return Number(t)+Number(r.quantity)}),0)},stockOutQty:function(t){return t.reduce((function(t,r){return Number(t)+Number(r.quantity)}),0)}}},f=e(1),p=Object(f.a)(v,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("breadcrumbs",{attrs:{items:t.breadcrumbs,current:t.breadcrumbsCurrent}}),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12 col-xl-12"},[e("div",{staticClass:"invoice p-3 mb-3"},[e("div",{staticClass:"row invoice-info"},[e("div",{staticClass:"col-sm-4 invoice-col"},[e("CompanyInfo")],1),t._v(" "),t.product&&t.product.category&&t.product.subCategory&&t.product.itemUnit?e("div",{staticClass:"col-sm-6 offset-sm-2 invoice-col float-right text-md-right"},[e("p",[t._v("\n              "+t._s(t.$t("common.date"))+": "+t._s(t._f("moment")(t.date,"Do MMM, YYYY"))+"\n            ")]),t._v(" "),e("h5",[t._v(t._s(t.$t("products.list.view.page_title")))]),t._v(" "),e("strong",[t._v(t._s(t.$t("common.code"))+":")]),t._v("\n            "+t._s(t._f("withPrefix")(t.product.code,t.productPrefix))),e("br"),t._v(" "),e("strong",[t._v(t._s(t.$t("common.name"))+":")]),t._v(" "+t._s(t.product.name)),e("br"),t._v(" "),e("strong",[t._v(t._s(t.$t("common.category"))+":")]),t._v("\n            "+t._s(t.product.category.name)),e("br"),t._v(" "),e("strong",[t._v(t._s(t.$t("common.sub_category"))+":")]),t._v("\n            "+t._s(t.product.subCategory.name)),e("br"),t._v(" "),e("strong",[t._v(t._s(t.$t("products.list.common.stock"))+":")]),t._v("\n            "+t._s(t.product.availableQty)+" "+t._s(t.product.itemUnit.code)+" "),e("br")]):t._e()]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"row mt-5 position-relative"},[e("table-loading",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}]}),t._v(" "),e("div",{staticClass:"col-lg-6"},[e("h4",{attrs:{align:"center"}},[e("i",[t._v(t._s(t.$t("reports.stock_in")))])]),t._v(" "),e("div",{staticClass:"table-responsive table-custom"},[e("table",{staticClass:"table table-sm"},[e("thead",[e("tr",[e("th",[t._v(t._s(t.$t("common.s_no")))]),t._v(" "),e("th",[t._v(t._s(t.$t("common.date")))]),t._v(" "),e("th",[t._v(t._s(t.$t("reports.stock_in")))]),t._v(" "),e("th",[t._v(t._s(t.$t("common.price")))]),t._v(" "),e("th",[t._v(t._s(t.$t("common.type")))]),t._v(" "),e("th",[t._v(t._s(t.$t("common.code")))]),t._v(" "),e("th",[t._v("\n                      "+t._s(t.$t("common.supplier"))+"/"+t._s(t.$t("common.client"))+"\n                    ")])])]),t._v(" "),e("tbody",[t._l(t.allData.stockIns,(function(r,n){return e("tr",{key:n},[e("td",[t._v(t._s(n+1))]),t._v(" "),e("td",[t._v(t._s(t._f("moment")(r.date,"Do MMM, YYYY")))]),t._v(" "),e("td",[t._v(t._s(r.quantity))]),t._v(" "),e("td",[t._v(t._s(t._f("withCurrency")(r.price)))]),t._v(" "),e("td",[e("span",{staticClass:"badge bg-success"},[t._v(t._s(r.type))])]),t._v(" "),e("td",[t._v(t._s(r.code))]),t._v(" "),e("td",["Purchase"===r.type?e("span",[t._v(t._s(r.supplier))]):"Invoice Return"===r.type?e("span",[t._v(t._s(r.client))]):t._e()])])})),t._v(" "),e("tr",[e("td",{attrs:{colspan:"2",align:"right"}},[e("strong",[t._v(t._s(t.$t("reports.total_quantity")))])]),t._v(" "),t.allData.stockIns?e("td",{attrs:{colspan:"5"}},[e("strong",[t._v(t._s(t.stockInQty(t.allData.stockIns)))])]):t._e()])],2)])])]),t._v(" "),e("div",{staticClass:"col-lg-6"},[e("h4",{attrs:{align:"center"}},[e("i",[t._v(t._s(t.$t("reports.stock_out")))])]),t._v(" "),e("div",{staticClass:"table-responsive table-custom"},[e("table",{staticClass:"table table-sm"},[e("thead",[e("tr",[e("th",[t._v(t._s(t.$t("common.s_no")))]),t._v(" "),e("th",[t._v(t._s(t.$t("common.date")))]),t._v(" "),e("th",[t._v(t._s(t.$t("reports.stock_out")))]),t._v(" "),e("th",[t._v(t._s(t.$t("common.price")))]),t._v(" "),e("th",[t._v(t._s(t.$t("common.type")))]),t._v(" "),e("th",[t._v(t._s(t.$t("common.code")))]),t._v(" "),e("th",[t._v("\n                      "+t._s(t.$t("common.client"))+"/"+t._s(t.$t("common.supplier"))+"\n                    ")])])]),t._v(" "),e("tbody",[t._l(t.allData.stockOuts,(function(r,n){return e("tr",{key:n},[e("td",[t._v(t._s(n+1))]),t._v(" "),e("td",[t._v(t._s(t._f("moment")(r.date,"Do MMM, YYYY")))]),t._v(" "),e("td",[t._v("-"+t._s(r.quantity))]),t._v(" "),e("td",[t._v(t._s(t._f("withCurrency")(r.price)))]),t._v(" "),e("td",[e("span",{staticClass:"badge bg-success"},[t._v(t._s(r.type))])]),t._v(" "),e("td",[t._v(t._s(r.code))]),t._v(" "),e("td",["Invoice"===r.type?e("span",[t._v(t._s(r.client))]):"Purchase Return"===r.type?e("span",[t._v(t._s(r.supplier))]):t._e()])])})),t._v(" "),e("tr",[e("td",{attrs:{colspan:"2",align:"right"}},[e("b",[e("i",[t._v(t._s(t.$t("reports.total_quantity"))+": ")])])]),t._v(" "),t.allData.stockOuts?e("td",{attrs:{colspan:"5"}},[e("b",[e("i",[t._v("- "+t._s(t.stockOutQty(t.allData.stockOuts))+" ")])])]):t._e()])],2)])])])],1),t._v(" "),e("div",{staticClass:"row no-print mt-5"},[e("div",{staticClass:"col-12"},[e("router-link",{staticClass:"btn btn-dark float-right",attrs:{to:{name:"inventory.index"}}},[e("i",{staticClass:"fas fa-long-arrow-alt-left"}),t._v(" "+t._s(t.$t("common.back"))+"\n            ")]),t._v(" "),e("a",{staticClass:"btn btn-default",attrs:{href:"#"},on:{click:t.printWindow}},[e("i",{staticClass:"fas fa-print"}),t._v(" "+t._s(t.$t("common.print")))])],1)])])])])],1)}),[],!1,null,null,null);r.default=p.exports}}]);