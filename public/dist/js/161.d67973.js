/*! For license information please see 161.d67973.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{453:function(t,e,n){"use strict";n.r(e);var a=n(7),r=n.n(a),o=n(3);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(){s=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",c=r.asyncIterator||"@@asyncIterator",l=r.toStringTag||"@@toStringTag";function _(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{_({},"")}catch(t){_=function(t,e,n){return t[e]=n}}function v(t,e,n,r){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),s=new O(r||[]);return a(i,"_invoke",{value:D(t,n,s)}),i}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=v;var m={};function d(){}function h(){}function f(){}var p={};_(p,o,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(j([])));g&&g!==e&&n.call(g,o)&&(p=g);var b=f.prototype=d.prototype=Object.create(p);function w(t){["next","throw","return"].forEach((function(e){_(t,e,(function(t){return this._invoke(e,t)}))}))}function C(t,e){var r;a(this,"_invoke",{value:function(a,o){function s(){return new e((function(r,s){!function a(r,o,s,c){var l=u(t[r],t,o);if("throw"!==l.type){var _=l.arg,v=_.value;return v&&"object"==i(v)&&n.call(v,"__await")?e.resolve(v.__await).then((function(t){a("next",t,s,c)}),(function(t){a("throw",t,s,c)})):e.resolve(v).then((function(t){_.value=t,s(_)}),(function(t){return a("throw",t,s,c)}))}c(l.arg)}(a,o,r,s)}))}return r=r?r.then(s,s):s()}})}function D(t,e,n){var a="suspendedStart";return function(r,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===r)throw o;return L()}for(n.method=r,n.arg=o;;){var i=n.delegate;if(i){var s=x(i,n);if(s){if(s===m)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var c=u(t,e,n);if("normal"===c.type){if(a=n.done?"completed":"suspendedYield",c.arg===m)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(a="completed",n.method="throw",n.arg=c.arg)}}}function x(t,e){var n=e.method,a=t.iterator[n];if(void 0===a)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var r=u(a,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,m;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,m):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function $(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach($,this),this.reset(!0)}function j(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,r=function e(){for(;++a<t.length;)if(n.call(t,a))return e.value=t[a],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:L}}function L(){return{value:void 0,done:!0}}return h.prototype=f,a(b,"constructor",{value:f,configurable:!0}),a(f,"constructor",{value:h,configurable:!0}),h.displayName=_(f,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,_(t,l,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},w(C.prototype),_(C.prototype,c,(function(){return this})),t.AsyncIterator=C,t.async=function(e,n,a,r,o){void 0===o&&(o=Promise);var i=new C(v(e,n,a,r),o);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(b),_(b,l,"Generator"),_(b,o,(function(){return this})),_(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var a in e)n.push(a);return n.reverse(),function t(){for(;n.length;){var a=n.pop();if(a in e)return t.value=a,t.done=!1,t}return t.done=!0,t}},t.values=j,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function a(n,a){return i.type="throw",i.arg=t,e.next=n,a&&(e.method="next",e.arg=void 0),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var s=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(t,e){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var a=n.completion;if("throw"===a.type){var r=a.arg;P(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:j(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),m}},t}function c(t,e,n,a,r,o,i){try{var s=t[o](i),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(a,r)}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function _(t,e,n){return(e=function(t){var e=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var a=n.call(t,e||"default");if("object"!==i(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===i(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var v={middleware:["auth","check-permissions"],metaInfo:function(){return{title:this.$t("sales.invoices.view.page_title")}},data:function(){return{allData:"",breadcrumbsCurrent:"sales.invoices.view.breadcrumbs_current",breadcrumbs:[{name:"sales.invoices.view.breadcrumbs_first",url:"home"},{name:"sales.invoices.view.breadcrumbs_second",url:"invoices.index"},{name:"sales.invoices.view.breadcrumbs_active",url:""}],invoiceProducts:[],productPrefix:"",clientPrefix:"",invoicePrefix:"",loading:!1}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){_(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},Object(o.b)("operations",["appInfo"])),created:function(){this.getInvoice(),this.productPrefix=this.appInfo.productPrefix,this.clientPrefix=this.appInfo.clientPrefix,this.invoicePrefix=this.appInfo.invoicePrefix},methods:{getInvoice:function(){var t,e=this;return(t=s().mark((function t(){var n,a;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,r.a.get(window.location.origin+"/api/invoices/"+e.$route.params.slug);case 3:n=t.sent,a=n.data,e.allData=a.data,e.invoiceProducts=e.allData.invoiceProducts,e.invoiceProducts.sort(e.sortProducts),e.loading=!1;case 9:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(a,r){var o=t.apply(e,n);function i(t){c(o,a,r,i,s,"next",t)}function s(t){c(o,a,r,i,s,"throw",t)}i(void 0)}))})()},sortProducts:function(t,e){return t.productCode<e.productCode?-1:t.productCode>e.productCode?1:0},printWindow:function(){window.print()}}},u=n(1),m=Object(u.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("breadcrumbs",{attrs:{items:t.breadcrumbs,current:t.breadcrumbsCurrent}}),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-12"},[n("div",{staticClass:"invoice p-3 mb-3"},[n("div",{staticClass:"row invoice-info"},[n("div",{staticClass:"col-sm-4 invoice-col"},[n("CompanyInfo")],1),t._v(" "),n("div",{staticClass:"col-sm-6 offset-sm-2 invoice-col float-right text-md-right"},[n("h5",[t._v(t._s(t.$t("common.client_details")))]),t._v(" "),t.allData.client?n("div",[t.allData.client.companyName?n("span",[n("strong",[t._v(t._s(t.$t("common.client_id"))+":")]),t._v("\n                "+t._s(t._f("withPrefix")(t.allData.client.clientID,t.clientPrefix))),n("br")]):t._e(),t._v(" "),n("strong",[t._v(t._s(t.$t("common.client_name"))+":")]),t._v("\n              "+t._s(t.allData.client.name)),n("br"),t._v(" "),t.allData.client.companyName?n("span",[n("strong",[t._v(t._s(t.$t("common.company_name"))+":")]),t._v("\n                "+t._s(t.allData.client.companyName)),n("br")]):t._e(),t._v(" "),t.allData.client.email?n("span",[n("strong",[t._v(t._s(t.$t("common.email"))+":")]),t._v("\n                "+t._s(t.allData.client.email)),n("br")]):t._e(),t._v(" "),t.allData.client.phoneNumber?n("span",[n("strong",[t._v(t._s(t.$t("common.contact_number"))+":")]),t._v("\n                "+t._s(t.allData.client.phoneNumber)),n("br")]):t._e(),t._v(" "),t.allData.client.address?n("span",[n("strong",[t._v(t._s(t.$t("common.address"))+":")]),t._v("\n                "+t._s(t.allData.client.address)),n("br")]):t._e()]):t._e()])]),t._v(" "),n("div",{staticClass:"row mt-3"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"table-responsive table-custom"},[n("table",{staticClass:"table"},[n("thead",[n("tr",[t.allData.invoiceNo?n("th",[t._v("\n                      "+t._s(t.$t("common.invoice_no"))+"\n                    ")]):t._e(),t._v(" "),t.allData.invoiceDate?n("th",[t._v("\n                      "+t._s(t.$t("common.invoice_date"))+"\n                    ")]):t._e(),t._v(" "),t.allData.reference?n("th",[t._v("\n                      "+t._s(t.$t("common.reference"))+"\n                    ")]):t._e(),t._v(" "),t.allData.poReference?n("th",[t._v("\n                      "+t._s(t.$t("common.po_reference"))+"\n                    ")]):t._e(),t._v(" "),t.allData.paymentTerms?n("th",[t._v("\n                      "+t._s(t.$t("common.payment_terms"))+"\n                    ")]):t._e(),t._v(" "),t.allData.deliveryPlace?n("th",[t._v("\n                      "+t._s(t.$t("sales.common.delivery_place"))+"\n                    ")]):t._e(),t._v(" "),t.allData.note?n("th",[t._v(t._s(t.$t("common.note")))]):t._e(),t._v(" "),n("th",[t._v(t._s(t.$t("common.status")))]),t._v(" "),n("th",{staticClass:"text-right"},[t._v(t._s(t.$t("common.created_by")))])])]),t._v(" "),n("tbody",[n("tr",[t.allData.invoiceNo?n("td",[t._v("\n                      "+t._s(t._f("withPrefix")(t.allData.invoiceNo,t.invoicePrefix))+"\n                    ")]):t._e(),t._v(" "),t.allData.invoiceDate?n("td",[t._v("\n                      "+t._s(t._f("moment")(t.allData.invoiceDate,"Do MMM, YYYY"))+"\n                    ")]):t._e(),t._v(" "),t.allData.reference?n("td",[t._v("\n                      "+t._s(t.allData.reference)+"\n                    ")]):t._e(),t._v(" "),t.allData.poReference?n("td",[t._v("\n                      "+t._s(t.allData.poReference)+"\n                    ")]):t._e(),t._v(" "),t.allData.paymentTerms?n("td",[t._v("\n                      "+t._s(t.allData.paymentTerms)+"\n                    ")]):t._e(),t._v(" "),t.allData.deliveryPlace?n("td",[t._v("\n                      "+t._s(t.allData.deliveryPlace)+"\n                    ")]):t._e(),t._v(" "),t.allData.note?n("td",[t._v(t._s(t.allData.note))]):t._e(),t._v(" "),n("td",[1===t.allData.status?n("span",{staticClass:"badge bg-success"},[t._v(t._s(t.$t("common.active")))]):n("span",{staticClass:"badge bg-danger"},[t._v(t._s(t.$t("common.in_active")))])]),t._v(" "),n("td",{staticClass:"text-right"},[t._v("\n                      "+t._s(t.allData.createdBy)+"\n                    ")])])])])])])]),t._v(" "),n("div",{staticClass:"row mt-4"},[n("div",{staticClass:"col-12"},[n("strong",{staticClass:"mb-2 d-block"},[t._v(t._s(t.$t("common.invoice_products"))+":")]),t._v(" "),n("div",{staticClass:"table-responsive table-custom"},[n("table",{staticClass:"table table-sm text-center"},[n("thead",[n("tr",[n("th",[t._v(t._s(t.$t("common.s_no")))]),t._v(" "),n("th",[t._v(t._s(t.$t("common.code")))]),t._v(" "),n("th",[t._v(t._s(t.$t("common.product_name")))]),t._v(" "),n("th",[t._v(t._s(t.$t("common.invoice_qty")))]),t._v(" "),t.allData.totalInvoiceReturn?n("th",[t._v("\n                      "+t._s(t.$t("common.return_qty"))+"\n                    ")]):t._e(),t._v(" "),n("th",[t._v(t._s(t.$t("common.unit_price")))]),t._v(" "),n("th",[t._v(t._s(t.$t("common.unit_tax")))]),t._v(" "),n("th",[t._v(t._s(t.$t("common.unit_cost")))]),t._v(" "),n("th",{staticClass:"text-right"},[t._v(t._s(t.$t("common.total")))]),t._v(" "),t.allData.totalInvoiceReturn?n("th",{staticClass:"text-right"},[t._v("\n                      "+t._s(t.$t("common.total_return"))+"\n                    ")]):t._e()])]),t._v(" "),t.invoiceProducts?n("tbody",[t._l(t.invoiceProducts,(function(e,a){return n("tr",{key:a},[n("td",[t._v(t._s(++a))]),t._v(" "),n("td",[t._v("\n                      "+t._s(t._f("withPrefix")(e.productCode,t.productPrefix))+"\n                    ")]),t._v(" "),n("td",[t._v(t._s(e.productName))]),t._v(" "),n("td",[t._v(t._s(e.quantity)+" "+t._s(e.productUnit))]),t._v(" "),t.allData.totalInvoiceReturn?n("td",[t._v("\n                      "+t._s(e.returnQty)+" "+t._s(e.productUnit)+"\n                    ")]):t._e(),t._v(" "),n("td",[t._v(t._s(t._f("withCurrency")(e.salePrice)))]),t._v(" "),n("td",[t._v(t._s(t._f("withCurrency")(e.unitTax)))]),t._v(" "),n("td",[t._v(t._s(t._f("withCurrency")(e.unitCost)))]),t._v(" "),n("td",{staticClass:"text-right"},[t._v("\n                      "+t._s(t._f("withCurrency")(e.unitCost*e.quantity))+"\n                    ")]),t._v(" "),t.allData.totalInvoiceReturn?n("td",{staticClass:"text-right"},[t._v("\n                      "+t._s(t._f("withCurrency")(e.unitCost*e.returnQty))+"\n                    ")]):t._e()])})),t._v(" "),n("tr",[n("td",{staticClass:"text-right",attrs:{colspan:t.allData.totalInvoiceReturn?8:7}},[n("strong",[t._v(t._s(t.$t("common.subtotal"))+" ")])]),t._v(" "),n("td",{staticClass:"text-right"},[n("strong",[t._v("\n                        "+t._s(t._f("withCurrency")(t.allData.subTotal))+"\n                      ")])]),t._v(" "),t.allData.totalInvoiceReturn?n("td",{staticClass:"text-right"},[n("strong",[t._v(t._s(t._f("withCurrency")(t.allData.totalInvoiceReturn)))])]):t._e()])],2):t._e()])])])]),t._v(" "),n("div",{staticClass:"row mt-4"},[n("div",{staticClass:"col-lg-12 col-xl-8"},[t.allData.invoicePayments&&t.allData.invoicePayments.length>0?n("div",[n("strong",{staticClass:"mb-2 d-block"},[t._v(t._s(t.$t("common.payment_history"))+":")]),t._v(" "),n("div",{staticClass:"table-responsive table-custom"},[n("table",{staticClass:"table table-sm"},[n("thead",[n("tr",[n("th",[t._v(t._s(t.$t("common.s_no")))]),t._v(" "),n("th",[t._v(t._s(t.$t("common.payment_date")))]),t._v(" "),n("th",[t._v(t._s(t.$t("common.paid_amount")))]),t._v(" "),n("th",[t._v(t._s(t.$t("common.account")))]),t._v(" "),n("th",[t._v(t._s(t.$t("common.cheque_no")))]),t._v(" "),n("th",[t._v(t._s(t.$t("common.receipt_no")))]),t._v(" "),n("th",{staticClass:"text-right"},[t._v(t._s(t.$t("common.status")))])])]),t._v(" "),n("tbody",[t._l(t.allData.invoicePayments,(function(e,a){return n("tr",{key:a},[n("td",[t._v(t._s(++a))]),t._v(" "),n("td",[e.date?n("span",[t._v(t._s(e.date))]):t._e()]),t._v(" "),n("td",[t._v(t._s(t._f("withCurrency")(e.amount)))]),t._v(" "),n("td",[e.account?n("span",[t._v(t._s(e.account.label))]):t._e()]),t._v(" "),e.transaction?n("td",[t._v("\n                        "+t._s(e.transaction.cheque_no)+"\n                      ")]):t._e(),t._v(" "),e.transaction?n("td",[t._v("\n                        "+t._s(e.transaction.receipt_no)+"\n                      ")]):t._e(),t._v(" "),n("td",{staticClass:"text-right"},[1===e.status?n("span",{staticClass:"badge bg-success"},[t._v(t._s(t.$t("common.active")))]):n("span",{staticClass:"badge bg-danger"},[t._v(t._s(t.$t("common.in_active")))])])])})),t._v(" "),n("tr",[n("td",{staticClass:"text-right",attrs:{colspan:"2"}},[n("strong",[t._v(t._s(t.$t("common.total_paid")))])]),t._v(" "),n("td",{attrs:{colspan:"5"}},[n("strong",[t._v(t._s(t._f("withCurrency")(t.allData.totalPaid)))])])])],2)])])]):n("div",{staticClass:"no-print callout callout-danger mt-4 w-100"},[n("h5",[t._v(t._s(t.$t("common.empty_payment")))]),t._v(" "),n("p",[t._v(t._s(t.$t("common.empty_payment_msg")))])])]),t._v(" "),n("div",{staticClass:"col-lg-12 col-xl-4 text-lg-right mt-4"},[n("div",{staticClass:"table-responsive table-custom table-border-y-0"},[n("table",{staticClass:"table"},[n("tbody",[n("tr",{staticClass:"bg-sub-light text-bold"},[n("th",[t._v(t._s(t.$t("common.subtotal"))+":")]),t._v(" "),n("td",[t._v(t._s(t._f("withCurrency")(t.allData.subTotal)))])]),t._v(" "),t.allData.totalInvoiceReturn?n("tr",[n("th",[t._v(t._s(t.$t("common.return_cost"))+":")]),t._v(" "),n("td",[n("span",{staticClass:"minus-sign"},[t._v("-")]),t._v("\n                      "+t._s(t._f("withCurrency")(t.allData.totalInvoiceReturn))+"\n                    ")])]):t._e(),t._v(" "),n("tr",[n("th",[t._v("\n                      "+t._s(t.$t("common.discount"))+"\n                      "),1==t.allData.discountType?n("span",[t._v("("+t._s(t.allData.discountPercentage)+"%)")]):t._e(),t._v("\n                      :\n                    ")]),t._v(" "),n("td",[n("span",{staticClass:"minus-sign"},[t._v("-")]),t._v("\n                      "+t._s(t._f("withCurrency")(t.allData.discount))+"\n                    ")])]),t._v(" "),n("tr",[n("th",[t._v(t._s(t.$t("common.transport"))+":")]),t._v(" "),n("td",[n("span",{staticClass:"plus-sign"},[t._v("+")]),t._v("\n                      "+t._s(t._f("withCurrency")(t.allData.transport))+"\n                    ")])]),t._v(" "),n("tr",[n("th",[t._v("\n                      "+t._s(t.$t("common.tax"))+"\n                      "),t.allData.taxRate?n("span",[t._v("("+t._s(t.allData.taxRate.rate)+"%)")]):t._e(),t._v(":\n                    ")]),t._v(" "),n("td",[n("span",{staticClass:"plus-sign"},[t._v("+")]),t._v("\n                      "+t._s(t._f("withCurrency")(t.allData.tax))+"\n                    ")])]),t._v(" "),n("tr",{staticClass:"bg-indigo-light"},[n("th",[t._v(t._s(t.$t("common.total"))+":")]),t._v(" "),n("td",[n("span",{staticClass:"equal-sign"},[t._v("=")]),t._v("\n                      "+t._s(t._f("withCurrency")(t.allData.subTotal-t.allData.totalInvoiceReturn-t.allData.discount+t.allData.transport+t.allData.tax))+"\n                    ")])]),t._v(" "),t.allData.invoicePayments?n("tr",[n("th",[t._v(t._s(t.$t("common.total_paid"))+":")]),t._v(" "),n("td",[n("span",{staticClass:"minus-sign"},[t._v("-")]),t._v("\n                      "+t._s(t._f("withCurrency")(t.allData.totalPaid))+"\n                    ")])]):t._e(),t._v(" "),n("tr",{staticClass:"bg-red-light"},[n("th",[t._v(t._s(t.$t("common.due"))+":")]),t._v(" "),n("td",[t._v(t._s(t._f("withCurrency")(t.allData.due)))])]),t._v(" "),t.allData.accountPayable?n("tr",{staticClass:"bg-green-light"},[n("th",[t._v(t._s(t.$t("common.account_payable"))+":")]),t._v(" "),n("td",[t._v(t._s(t._f("withCurrency")(t.allData.accountPayable)))])]):t._e()])])])])]),t._v(" "),n("div",{staticClass:"row no-print mt-5"},[n("div",{staticClass:"col-12"},[n("router-link",{staticClass:"btn btn-dark float-right",attrs:{to:{name:"invoices.index"}}},[n("i",{staticClass:"fas fa-long-arrow-alt-left"}),t._v(" "+t._s(t.$t("common.back"))+"\n            ")]),t._v(" "),n("a",{staticClass:"btn btn-default",attrs:{href:"#"},on:{click:t.printWindow}},[n("i",{staticClass:"fas fa-print"}),t._v(" "+t._s(t.$t("common.print")))])],1)])])])])],1)}),[],!1,null,null,null);e.default=m.exports}}]);