/*! For license information please see 49.ba68b7.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{174:function(e,t,r){var a=r(563);"string"==typeof a&&(a=[[e.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};r(39)(a,n);a.locals&&(e.exports=a.locals)},4:function(e,t,r){"use strict";var a=r(7),n=r.n(a),o=Object.defineProperty,s=Object.prototype.hasOwnProperty,i=Object.getOwnPropertySymbols,c=Object.prototype.propertyIsEnumerable,l=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&l(e,r,t[r]);if(i)for(var r of i(t))c.call(t,r)&&l(e,r,t[r]);return e};const u=e=>void 0===e,p=e=>Array.isArray(e),f=e=>e&&"number"==typeof e.size&&"string"==typeof e.type&&"function"==typeof e.slice,m=(e,t,r,a)=>((t=t||{}).indices=!u(t.indices)&&t.indices,t.nullsAsUndefineds=!u(t.nullsAsUndefineds)&&t.nullsAsUndefineds,t.booleansAsIntegers=!u(t.booleansAsIntegers)&&t.booleansAsIntegers,t.allowEmptyArrays=!u(t.allowEmptyArrays)&&t.allowEmptyArrays,r=r||new FormData,u(e)||(null===e?t.nullsAsUndefineds||r.append(a,""):(e=>"boolean"==typeof e)(e)?t.booleansAsIntegers?r.append(a,e?1:0):r.append(a,e):p(e)?e.length?e.forEach((e,n)=>{const o=a+"["+(t.indices?n:"")+"]";m(e,t,r,o)}):t.allowEmptyArrays&&r.append(a+"[]",""):(e=>e instanceof Date)(e)?r.append(a,e.toISOString()):!(e=>e===Object(e))(e)||(e=>f(e)&&"string"==typeof e.name&&("object"==typeof e.lastModifiedDate||"number"==typeof e.lastModified))(e)||f(e)?r.append(a,e):Object.keys(e).forEach(n=>{const o=e[n];if(p(o))for(;n.length>2&&n.lastIndexOf("[]")===n.length-2;)n=n.substring(0,n.length-2);m(o,t,r,a?a+"["+n+"]":n)})),r);var h={serialize:m};function y(e){if(null===e||"object"!=typeof e)return e;const t=Array.isArray(e)?[]:{};return Object.keys(e).forEach(r=>{t[r]=y(e[r])}),t}function b(e){return Array.isArray(e)?e:[e]}class g{constructor(){this.errors={},this.errors={}}set(e,t){"object"==typeof e?this.errors=e:this.set(d(d({},this.errors),{[e]:b(t)}))}all(){return this.errors}has(e){return Object.prototype.hasOwnProperty.call(this.errors,e)}hasAny(...e){return e.some(e=>this.has(e))}any(){return Object.keys(this.errors).length>0}get(e){if(this.has(e))return this.getAll(e)[0]}getAll(e){return b(this.errors[e]||[])}only(...e){const t=[];return e.forEach(e=>{const r=this.get(e);r&&t.push(r)}),t}flatten(){return Object.values(this.errors).reduce((e,t)=>e.concat(t),[])}clear(e){const t={};e&&Object.keys(this.errors).forEach(r=>{r!==e&&(t[r]=this.errors[r])}),this.set(t)}}class v{constructor(e={}){this.originalData={},this.busy=!1,this.successful=!1,this.recentlySuccessful=!1,this.recentlySuccessfulTimeoutId=void 0,this.errors=new g,this.progress=void 0,this.update(e)}static make(e){return new this(e)}update(e){this.originalData=Object.assign({},this.originalData,y(e)),Object.assign(this,e)}fill(e={}){this.keys().forEach(t=>{this[t]=e[t]})}data(){return this.keys().reduce((e,t)=>d(d({},e),{[t]:this[t]}),{})}keys(){return Object.keys(this).filter(e=>!v.ignore.includes(e))}startProcessing(){this.errors.clear(),this.busy=!0,this.successful=!1,this.progress=void 0,this.recentlySuccessful=!1,clearTimeout(this.recentlySuccessfulTimeoutId)}finishProcessing(){this.busy=!1,this.successful=!0,this.progress=void 0,this.recentlySuccessful=!0,this.recentlySuccessfulTimeoutId=setTimeout(()=>{this.recentlySuccessful=!1},v.recentlySuccessfulTimeout)}clear(){this.errors.clear(),this.successful=!1,this.recentlySuccessful=!1,this.progress=void 0,clearTimeout(this.recentlySuccessfulTimeoutId)}reset(){Object.keys(this).filter(e=>!v.ignore.includes(e)).forEach(e=>{this[e]=y(this.originalData[e])})}get(e,t={}){return this.submit("get",e,t)}post(e,t={}){return this.submit("post",e,t)}patch(e,t={}){return this.submit("patch",e,t)}put(e,t={}){return this.submit("put",e,t)}delete(e,t={}){return this.submit("delete",e,t)}submit(e,t,r={}){return this.startProcessing(),r=d({data:{},params:{},url:this.route(t),method:e,onUploadProgress:this.handleUploadProgress.bind(this)},r),"get"===e.toLowerCase()?r.params=d(d({},this.data()),r.params):(r.data=d(d({},this.data()),r.data),function e(t){return t instanceof File||t instanceof Blob||t instanceof FileList||"object"==typeof t&&null!==t&&void 0!==Object.values(t).find(t=>e(t))}(r.data)&&!r.transformRequest&&(r.transformRequest=[e=>h.serialize(e)])),new Promise((e,t)=>{(v.axios||n.a).request(r).then(t=>{this.finishProcessing(),e(t)}).catch(e=>{this.handleErrors(e),t(e)})})}handleErrors(e){this.busy=!1,this.progress=void 0,e.response&&this.errors.set(this.extractErrors(e.response))}extractErrors(e){return e.data&&"object"==typeof e.data?e.data.errors?d({},e.data.errors):e.data.message?{error:e.data.message}:d({},e.data):{error:v.errorMessage}}handleUploadProgress(e){this.progress={total:e.total,loaded:e.loaded,percentage:Math.round(100*e.loaded/e.total)}}route(e,t={}){let r=e;return Object.prototype.hasOwnProperty.call(v.routes,e)&&(r=decodeURI(v.routes[e])),"object"!=typeof t&&(t={id:t}),Object.keys(t).forEach(e=>{r=r.replace(`{${e}}`,t[e])}),r}onKeydown(e){const t=e.target;t.name&&this.errors.clear(t.name)}}v.routes={},v.errorMessage="Something went wrong. Please try again.",v.recentlySuccessfulTimeout=2e3,v.ignore=["busy","successful","errors","progress","originalData","recentlySuccessful","recentlySuccessfulTimeoutId"],t.a=v},448:function(e,t,r){"use strict";r.r(t);var a=r(4),n=r(3);r(174);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(){s=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,a=Object.defineProperty||function(e,t,r){e[t]=r.value},n="function"==typeof Symbol?Symbol:{},i=n.iterator||"@@iterator",c=n.asyncIterator||"@@asyncIterator",l=n.toStringTag||"@@toStringTag";function d(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{d({},"")}catch(e){d=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var o=t&&t.prototype instanceof m?t:m,s=Object.create(o.prototype),i=new E(n||[]);return a(s,"_invoke",{value:k(e,r,i)}),s}function p(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var f={};function m(){}function h(){}function y(){}var b={};d(b,i,(function(){return this}));var g=Object.getPrototypeOf,v=g&&g(g(C([])));v&&v!==t&&r.call(v,i)&&(b=v);var x=y.prototype=m.prototype=Object.create(b);function _(e){["next","throw","return"].forEach((function(t){d(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){var n;a(this,"_invoke",{value:function(a,s){function i(){return new t((function(n,i){!function a(n,s,i,c){var l=p(e[n],e,s);if("throw"!==l.type){var d=l.arg,u=d.value;return u&&"object"==o(u)&&r.call(u,"__await")?t.resolve(u.__await).then((function(e){a("next",e,i,c)}),(function(e){a("throw",e,i,c)})):t.resolve(u).then((function(e){d.value=e,i(d)}),(function(e){return a("throw",e,i,c)}))}c(l.arg)}(a,s,n,i)}))}return n=n?n.then(i,i):i()}})}function k(e,t,r){var a="suspendedStart";return function(n,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===n)throw o;return P()}for(r.method=n,r.arg=o;;){var s=r.delegate;if(s){var i=j(s,r);if(i){if(i===f)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===a)throw a="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a="executing";var c=p(e,t,r);if("normal"===c.type){if(a=r.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(a="completed",r.method="throw",r.arg=c.arg)}}}function j(e,t){var r=t.method,a=e.iterator[r];if(void 0===a)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,j(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var n=p(a,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,f;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function D(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function C(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,n=function t(){for(;++a<e.length;)if(r.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:P}}function P(){return{value:void 0,done:!0}}return h.prototype=y,a(x,"constructor",{value:y,configurable:!0}),a(y,"constructor",{value:h,configurable:!0}),h.displayName=d(y,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,d(e,l,"GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},_(w.prototype),d(w.prototype,c,(function(){return this})),e.AsyncIterator=w,e.async=function(t,r,a,n,o){void 0===o&&(o=Promise);var s=new w(u(t,r,a,n),o);return e.isGeneratorFunction(r)?s:s.next().then((function(e){return e.done?e.value:s.next()}))},_(x),d(x,l,"Generator"),d(x,i,(function(){return this})),d(x,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var a in t)r.push(a);return r.reverse(),function e(){for(;r.length;){var a=r.pop();if(a in t)return e.value=a,e.done=!1,e}return e.done=!0,e}},e.values=C,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(D),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(r,a){return s.type="throw",s.arg=e,t.next=r,a&&(t.method="next",t.arg=void 0),!!a}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],s=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var i=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(i&&c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=e,s.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),D(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var a=r.completion;if("throw"===a.type){var n=a.arg;D(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:C(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}function i(e,t,r,a,n,o,s){try{var i=e[o](s),c=i.value}catch(e){return void r(e)}i.done?t(c):Promise.resolve(c).then(a,n)}function c(e){return function(){var t=this,r=arguments;return new Promise((function(a,n){var o=e.apply(t,r);function s(e){i(o,a,n,s,c,"next",e)}function c(e){i(o,a,n,s,c,"throw",e)}s(void 0)}))}}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function d(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==o(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!==o(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===o(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u={middleware:["auth","check-permissions"],metaInfo:function(){return{title:this.$t("reports.product.page_title")}},data:function(){return{breadcrumbsCurrent:"reports.product.breadcrumbs_current",breadcrumbs:[{name:"reports.product.breadcrumbs_first",url:"home"},{name:"reports.product.breadcrumbs_second",url:""},{name:"reports.product.breadcrumbs_active",url:""}],form:new a.a({fromDate:String(new Date(Date.now()-6048e5)),toDate:String(new Date),productName:""}),loading:!1,allData:"",date:new Date,prefix:""}},computed:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},Object(n.b)("operations",["items","appInfo"])),created:function(){this.getItems(),this.prfix=this.appInfo.productPrefix},methods:{getItems:function(){var e=this;return c(s().mark((function t(){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("operations/allData",{path:"/api/all-products"});case 2:case"end":return t.stop()}}),t)})))()},update:function(e){var t=this;return c(s().mark((function r(){return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.loading=!0,t.form.fromDate=e.from,t.form.toDate=e.to,r.next=5,t.form.post(window.location.origin+"/api/reports/items").then((function(e){t.allData=e.data,t.loading=!1})).catch((function(){toast.fire({type:"error",title:t.$t("common.delete_failed")})}));case 5:case"end":return r.stop()}}),r)})))()},stockInQty:function(e){return e.reduce((function(e,t){return Number(e)+Number(t.quantity)}),0)},stockOutQty:function(e){return e.reduce((function(e,t){return Number(e)+Number(t.quantity)}),0)},printWindow:function(){window.print()}}},p=r(1),f=Object(p.a)(u,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("breadcrumbs",{attrs:{items:e.breadcrumbs,current:e.breadcrumbsCurrent}}),e._v(" "),r("div",{staticClass:"row no-print"},[r("div",{staticClass:"col-lg-12"},[r("div",{staticClass:"card"},[r("form",{attrs:{role:"form"},on:{submit:function(t){return t.preventDefault(),e.saveType.apply(null,arguments)},keydown:function(t){return e.form.onKeydown(t)}}},[r("div",{staticClass:"card-body"},[r("div",{staticClass:"row"},[e.items?r("div",{staticClass:"form-group col-md-12"},[r("label",{attrs:{for:"productName"}},[e._v(e._s(e.$t("common.product_name"))+"\n                  "),r("span",{staticClass:"required"},[e._v("*")])]),e._v(" "),r("v-select",{class:{"is-invalid":e.form.errors.has("productName")},attrs:{options:e.items,label:"label",name:"productName",placeholder:e.$t("common.product_name_placeholder")},model:{value:e.form.productName,callback:function(t){e.$set(e.form,"productName",t)},expression:"form.productName"}}),e._v(" "),r("has-error",{attrs:{form:e.form,field:"productName"}})],1):e._e()]),e._v(" "),r("div",{staticClass:"col-12"},[[r("date-range-picker",{attrs:{from:e.form.fromDate,to:e.form.toDate,panel:e.$route.query.panel},on:{update:e.update}})]],2)])])])])]),e._v(" "),e.allData&&e.allData.stockIns&&e.allData.stockOuts&&(e.allData.stockIns.length>0||e.allData.stockIns.stockOuts>0)?r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-12"},[r("div",{staticClass:"invoice p-3 mb-3"},[r("div",{staticClass:"row invoice-info"},[r("div",{staticClass:"col-sm-4 invoice-col"},[r("CompanyInfo")],1),e._v(" "),e.allData.product&&e.allData.product.category&&e.allData.product.subCategory&&e.allData.product.itemUnit?r("div",{staticClass:"col-sm-6 offset-sm-2 invoice-col float-right text-md-right"},[r("h5",[e._v("\n              "+e._s(e.$t("common.date"))+": "+e._s(e._f("moment")(e.date,"Do MMM, YYYY"))+"\n            ")]),e._v(" "),r("strong",[e._v(e._s(e.$t("common.code"))+":")]),e._v("\n            "+e._s(e._f("withPrefix")(e.allData.product.code,e.prfix))),r("br"),e._v(" "),r("strong",[e._v(e._s(e.$t("common.category"))+":")]),e._v("\n            "+e._s(e.allData.product.category.name)),r("br"),e._v(" "),r("strong",[e._v(e._s(e.$t("common.sub_category"))+":")]),e._v("\n            "+e._s(e.allData.product.subCategory.name)),r("br"),e._v(" "),r("strong",[e._v(e._s(e.$t("products.list.common.stock"))+":")]),e._v("\n            "+e._s(e.allData.product.availableQty)+"\n            "+e._s(e.allData.product.itemUnit.code)+" "),r("br")]):e._e()]),e._v(" "),r("hr"),e._v(" "),r("div",{staticClass:"row mt-5 position-relative"},[r("table-loading",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}]}),e._v(" "),0==e.loading?r("div",{staticClass:"col-lg-6 table-responsive mb-5"},[r("h4",[r("i",[e._v(e._s(e.$t("reports.stock_in")))])]),e._v(" "),r("table",{staticClass:"table table-bordered table-sm"},[r("thead",[r("tr",[r("th",[e._v(e._s(e.$t("common.s_no")))]),e._v(" "),r("th",[e._v(e._s(e.$t("common.date")))]),e._v(" "),r("th",[e._v(e._s(e.$t("reports.stock_in")))]),e._v(" "),r("th",[e._v(e._s(e.$t("common.price")))]),e._v(" "),r("th",[e._v(e._s(e.$t("common.type")))]),e._v(" "),r("th",[e._v(e._s(e.$t("common.code")))]),e._v(" "),r("th",{staticClass:"text-right"},[e._v("\n                    "+e._s(e.$t("common.supplier"))+"/"+e._s(e.$t("common.client"))+"\n                  ")])])]),e._v(" "),r("tbody",[e._l(e.allData.stockIns,(function(t,a){return r("tr",{key:a},[r("td",[e._v(e._s(a+1))]),e._v(" "),r("td",[e._v(e._s(e._f("moment")(t.date,"Do MMM, YYYY")))]),e._v(" "),r("td",[e._v(e._s(t.quantity))]),e._v(" "),r("td",[e._v(e._s(e._f("withCurrency")(t.price)))]),e._v(" "),r("td",[r("span",{staticClass:"badge bg-success"},[e._v(e._s(t.type))])]),e._v(" "),r("td",[e._v(e._s(t.code))]),e._v(" "),r("td",{staticClass:"text-right"},["Purchase"===t.type?r("span",[e._v(e._s(t.supplier))]):"Invoice Return"===t.type?r("span",[e._v(e._s(t.client))]):e._e()])])})),e._v(" "),r("tr",[r("td",{attrs:{colspan:"2",align:"right"}},[r("strong",[e._v(e._s(e.$t("reports.total_quantity")))])]),e._v(" "),e.allData.stockIns?r("td",[r("strong",[e._v(e._s(e.stockInQty(e.allData.stockIns)))])]):e._e()])],2)])]):e._e(),e._v(" "),0==e.loading?r("div",{staticClass:"col-lg-6 table-responsive"},[r("h4",[r("i",[e._v(e._s(e.$t("reports.stock_out")))])]),e._v(" "),r("table",{staticClass:"table table-bordered table-sm"},[r("thead",[r("tr",[r("th",[e._v(e._s(e.$t("common.s_no")))]),e._v(" "),r("th",[e._v(e._s(e.$t("common.date")))]),e._v(" "),r("th",[e._v(e._s(e.$t("reports.stock_out")))]),e._v(" "),r("th",[e._v(e._s(e.$t("common.price")))]),e._v(" "),r("th",[e._v(e._s(e.$t("common.type")))]),e._v(" "),r("th",[e._v(e._s(e.$t("common.code")))]),e._v(" "),r("th",{staticClass:"text-right"},[e._v(e._s(e.$t("common.client")))])])]),e._v(" "),r("tbody",[e._l(e.allData.stockOuts,(function(t,a){return r("tr",{key:a},[r("td",[e._v(e._s(a+1))]),e._v(" "),r("td",[e._v(e._s(e._f("moment")(t.date,"Do MMM, YYYY")))]),e._v(" "),r("td",[e._v("-"+e._s(t.quantity))]),e._v(" "),r("td",[e._v(e._s(e._f("withCurrency")(t.price)))]),e._v(" "),r("td",[r("span",{staticClass:"badge bg-success"},[e._v(e._s(t.type))])]),e._v(" "),r("td",[e._v(e._s(t.code))]),e._v(" "),r("td",{staticClass:"text-right"},["Invoice"===t.type?r("span",[e._v(e._s(t.client))]):"Purchase Return"===t.type?r("span",[e._v(e._s(t.supplier))]):e._e()])])})),e._v(" "),r("tr",[r("td",{attrs:{colspan:"2",align:"right"}},[r("strong",[e._v(e._s(e.$t("reports.total_quantity")))])]),e._v(" "),e.allData.stockOuts?r("td",[r("strong",[e._v(e._s(e.stockOutQty(e.allData.stockOuts)))])]):e._e()])],2)])]):e._e()],1),e._v(" "),r("div",{staticClass:"row no-print mt-5"},[r("div",{staticClass:"col-12"},[r("router-link",{staticClass:"btn btn-dark float-right",attrs:{to:{name:"inventory.index"}}},[r("i",{staticClass:"fas fa-long-arrow-alt-left"}),e._v(" "+e._s(e.$t("common.back"))+"\n            ")]),e._v(" "),r("a",{staticClass:"btn btn-default",attrs:{href:"#"},on:{click:e.printWindow}},[r("i",{staticClass:"fas fa-print"}),e._v(" "+e._s(e.$t("common.print")))])],1)])])])]):e.allData.stockIns&&e.allData.stockOuts&&(e.allData.stockIns.length<=0||e.allData.stockIns.stockOuts<=0)?r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-12"},[r("EmptyTable")],1)]):e._e()],1)}),[],!1,null,null,null);t.default=f.exports},563:function(e,t,r){(e.exports=r(38)(!1)).push([e.i,'.mj-daterange-picker{text-align:left;min-width:400px;width:var(--default-width);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid var(--border-color);border-radius:4px}.mj-daterange-picker *{-webkit-box-sizing:border-box;box-sizing:border-box}.mj-daterange-picker .panels-choices{display:grid;grid-gap:10px 10px;grid-template-columns:1fr 1fr 1fr 1fr 1fr;border-bottom:1px solid var(--border-color);padding:20px}.mj-daterange-picker .panels-choices .panel-button{font-size:12px;font-weight:700;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:32px;padding:5px 15px;border-radius:4px;cursor:pointer;background-color:#f2f4f5}.mj-daterange-picker .panels-choices .panel-button.is-current,.mj-daterange-picker .panels-choices .panel-button:hover{background-color:var(--primary-color);color:#fff}.mj-daterange-picker .preset-ranges{padding:20px;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;border-bottom:1px solid var(--border-color)}.mj-daterange-picker .preset-ranges .preset{width:50%;font-size:13px;height:20px;cursor:pointer;position:relative;margin:5px 0}.mj-daterange-picker .preset-ranges .preset input{position:absolute;opacity:0;height:0;width:0}.mj-daterange-picker .preset-ranges .preset input:checked~label .check{background-color:var(--primary-color)}.mj-daterange-picker .preset-ranges .preset input:checked~label .check:after{background-color:transparent}.mj-daterange-picker .preset-ranges .preset label{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.mj-daterange-picker .preset-ranges .preset label span+span{margin-left:10px}.mj-daterange-picker .preset-ranges .preset label .check{display:block;position:relative;height:20px;width:20px;background-color:var(--secondary-color);border-radius:10px}.mj-daterange-picker .preset-ranges .preset label .check:after{content:"";position:absolute;height:10px;width:10px;left:50%;top:50%;background-color:#fff;border-radius:100%;border:3px solid #fff;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}.mj-daterange-picker .preset-ranges .preset *{cursor:pointer}.mj-calendar{color:var(--contrast-color);background-color:var(--normal-color);padding:20px}.mj-calendar .calendar-header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.mj-calendar .calendar-header .calendar-month-name{-webkit-box-flex:1;-ms-flex:1;flex:1;text-align:center;color:var(--secondary-color);font-weight:700;font-size:14px}.mj-calendar .calendar-header .calendar-arrow{fill:var(--secondary-color);cursor:pointer}.mj-calendar .calendar-months{margin-top:20px;display:grid;grid-gap:10px 10px;grid-template-columns:1fr 1fr 1fr}.mj-calendar .calendar-months .month{height:50px;padding:10px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;border:1px solid var(--border-color);border-radius:4px;font-size:13px}.mj-calendar .calendar-months .month:hover{background-color:var(--hover-range-color)}.mj-calendar .calendar-months .month.is-disabled{cursor:not-allowed;opacity:.5;pointer-events:none}.mj-calendar .calendar-months .month.is-selected{background-color:var(--primary-color);color:#fff}.mj-calendar .calendar-months .month:not(.is-disabled){cursor:pointer}.mj-calendar .calendar-quarters{margin-top:20px}.mj-calendar .calendar-quarters .quarter{display:grid;grid-gap:10px 10px;grid-template-columns:1fr 3fr;margin:10px 0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:13px}.mj-calendar .calendar-quarters .quarter .months{display:grid;grid-gap:10px 10px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;grid-template-columns:1fr 1fr 1fr;border:1px solid var(--border-color);border-radius:4px;height:50px;padding:10px 30px}.mj-calendar .calendar-quarters .quarter .months:hover{background-color:var(--hover-range-color)}.mj-calendar .calendar-quarters .quarter .months .month{text-align:center}.mj-calendar .calendar-quarters .quarter.is-selected .months{background-color:var(--primary-color);color:#fff}.mj-calendar .calendar-quarters .quarter.is-disabled .months{opacity:.5}.mj-calendar .calendar-quarters .quarter.is-disabled{cursor:not-allowed;pointer-events:none}.mj-calendar .calendar-quarters .quarter:not(.is-disabled) .months{cursor:pointer}.mj-calendar .calendar-years .year{height:50px;padding:10px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;border:1px solid var(--border-color);border-radius:4px;font-size:13px;margin:10px 0}.mj-calendar .calendar-years .year:hover{background-color:var(--hover-range-color)}.mj-calendar .calendar-years .year.is-selected{background-color:var(--primary-color);color:#fff}.mj-calendar .calendar-years .year.is-disabled{cursor:not-allowed;opacity:.5;pointer-events:none}.mj-calendar .calendar-years .year:not(.is-disabled){cursor:pointer}.mj-calendar .calendar-days,.mj-calendar .calendar-days-name{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.mj-calendar .calendar-days-name .day,.mj-calendar .calendar-days .day{width:14.28571%;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.mj-calendar .calendar-days-name .day{font-size:11px;color:var(--ternary-color);height:30px}.mj-calendar .calendar-days .day{height:40px;font-size:13px;border-top:2px solid #fff;border-bottom:2px solid #fff}.mj-calendar .calendar-days .day:not(.is-current-month){color:var(--ternary-color)}.mj-calendar .calendar-days .day.is-disabled{cursor:not-allowed;opacity:.5;pointer-events:none}.mj-calendar .calendar-days .day.is-today span{color:var(--secondary-color);font-weight:700}.mj-calendar .calendar-days .day.is-in-range{background-color:var(--hover-range-color)}.mj-calendar .calendar-days .day.is-first-range{border-top-left-radius:4px;border-bottom-left-radius:4px}.mj-calendar .calendar-days .day.is-last-range{border-top-right-radius:4px;border-bottom-right-radius:4px}.mj-calendar .calendar-days .day.is-edge-range,.mj-calendar .calendar-days .day.is-selected{background-color:var(--primary-color);color:#fff}.mj-calendar .calendar-days .day:not(.is-disabled){cursor:pointer}.mj-calendar.mj-calendar-days .calendar-days .day:not(.is-edge-range):hover{background-color:var(--hover-day-color)}.mj-daterange-picker-controls{margin-top:10px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;border-top:1px solid var(--border-color);padding:20px}.mj-daterange-picker-controls .mj-daterange-picker-button{height:36px;min-width:150px;padding:5px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;border-radius:4px;font-size:12px}.mj-daterange-picker-controls .mj-daterange-picker-button:not(.is-disabled){cursor:pointer}.mj-daterange-picker-reset{border:1px solid #e6eaed}.mj-daterange-picker-submit{background-color:var(--primary-color);color:#fff}.mj-daterange-picker-submit.is-disabled{opacity:.5;cursor:not-allowed;pointer-events:none}',""])}}]);