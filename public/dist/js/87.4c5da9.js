/*! For license information please see 87.4c5da9.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{4:function(t,e,r){"use strict";var n=r(7),o=r.n(n),s=Object.defineProperty,a=Object.prototype.hasOwnProperty,i=Object.getOwnPropertySymbols,c=Object.prototype.propertyIsEnumerable,u=(t,e,r)=>e in t?s(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,l=(t,e)=>{for(var r in e||(e={}))a.call(e,r)&&u(t,r,e[r]);if(i)for(var r of i(e))c.call(e,r)&&u(t,r,e[r]);return t};const d=t=>void 0===t,f=t=>Array.isArray(t),m=t=>t&&"number"==typeof t.size&&"string"==typeof t.type&&"function"==typeof t.slice,p=(t,e,r,n)=>((e=e||{}).indices=!d(e.indices)&&e.indices,e.nullsAsUndefineds=!d(e.nullsAsUndefineds)&&e.nullsAsUndefineds,e.booleansAsIntegers=!d(e.booleansAsIntegers)&&e.booleansAsIntegers,e.allowEmptyArrays=!d(e.allowEmptyArrays)&&e.allowEmptyArrays,r=r||new FormData,d(t)||(null===t?e.nullsAsUndefineds||r.append(n,""):(t=>"boolean"==typeof t)(t)?e.booleansAsIntegers?r.append(n,t?1:0):r.append(n,t):f(t)?t.length?t.forEach((t,o)=>{const s=n+"["+(e.indices?o:"")+"]";p(t,e,r,s)}):e.allowEmptyArrays&&r.append(n+"[]",""):(t=>t instanceof Date)(t)?r.append(n,t.toISOString()):!(t=>t===Object(t))(t)||(t=>m(t)&&"string"==typeof t.name&&("object"==typeof t.lastModifiedDate||"number"==typeof t.lastModified))(t)||m(t)?r.append(n,t):Object.keys(t).forEach(o=>{const s=t[o];if(f(s))for(;o.length>2&&o.lastIndexOf("[]")===o.length-2;)o=o.substring(0,o.length-2);p(s,e,r,n?n+"["+o+"]":o)})),r);var h={serialize:p};function v(t){if(null===t||"object"!=typeof t)return t;const e=Array.isArray(t)?[]:{};return Object.keys(t).forEach(r=>{e[r]=v(t[r])}),e}function y(t){return Array.isArray(t)?t:[t]}class g{constructor(){this.errors={},this.errors={}}set(t,e){"object"==typeof t?this.errors=t:this.set(l(l({},this.errors),{[t]:y(e)}))}all(){return this.errors}has(t){return Object.prototype.hasOwnProperty.call(this.errors,t)}hasAny(...t){return t.some(t=>this.has(t))}any(){return Object.keys(this.errors).length>0}get(t){if(this.has(t))return this.getAll(t)[0]}getAll(t){return y(this.errors[t]||[])}only(...t){const e=[];return t.forEach(t=>{const r=this.get(t);r&&e.push(r)}),e}flatten(){return Object.values(this.errors).reduce((t,e)=>t.concat(e),[])}clear(t){const e={};t&&Object.keys(this.errors).forEach(r=>{r!==t&&(e[r]=this.errors[r])}),this.set(e)}}class b{constructor(t={}){this.originalData={},this.busy=!1,this.successful=!1,this.recentlySuccessful=!1,this.recentlySuccessfulTimeoutId=void 0,this.errors=new g,this.progress=void 0,this.update(t)}static make(t){return new this(t)}update(t){this.originalData=Object.assign({},this.originalData,v(t)),Object.assign(this,t)}fill(t={}){this.keys().forEach(e=>{this[e]=t[e]})}data(){return this.keys().reduce((t,e)=>l(l({},t),{[e]:this[e]}),{})}keys(){return Object.keys(this).filter(t=>!b.ignore.includes(t))}startProcessing(){this.errors.clear(),this.busy=!0,this.successful=!1,this.progress=void 0,this.recentlySuccessful=!1,clearTimeout(this.recentlySuccessfulTimeoutId)}finishProcessing(){this.busy=!1,this.successful=!0,this.progress=void 0,this.recentlySuccessful=!0,this.recentlySuccessfulTimeoutId=setTimeout(()=>{this.recentlySuccessful=!1},b.recentlySuccessfulTimeout)}clear(){this.errors.clear(),this.successful=!1,this.recentlySuccessful=!1,this.progress=void 0,clearTimeout(this.recentlySuccessfulTimeoutId)}reset(){Object.keys(this).filter(t=>!b.ignore.includes(t)).forEach(t=>{this[t]=v(this.originalData[t])})}get(t,e={}){return this.submit("get",t,e)}post(t,e={}){return this.submit("post",t,e)}patch(t,e={}){return this.submit("patch",t,e)}put(t,e={}){return this.submit("put",t,e)}delete(t,e={}){return this.submit("delete",t,e)}submit(t,e,r={}){return this.startProcessing(),r=l({data:{},params:{},url:this.route(e),method:t,onUploadProgress:this.handleUploadProgress.bind(this)},r),"get"===t.toLowerCase()?r.params=l(l({},this.data()),r.params):(r.data=l(l({},this.data()),r.data),function t(e){return e instanceof File||e instanceof Blob||e instanceof FileList||"object"==typeof e&&null!==e&&void 0!==Object.values(e).find(e=>t(e))}(r.data)&&!r.transformRequest&&(r.transformRequest=[t=>h.serialize(t)])),new Promise((t,e)=>{(b.axios||o.a).request(r).then(e=>{this.finishProcessing(),t(e)}).catch(t=>{this.handleErrors(t),e(t)})})}handleErrors(t){this.busy=!1,this.progress=void 0,t.response&&this.errors.set(this.extractErrors(t.response))}extractErrors(t){return t.data&&"object"==typeof t.data?t.data.errors?l({},t.data.errors):t.data.message?{error:t.data.message}:l({},t.data):{error:b.errorMessage}}handleUploadProgress(t){this.progress={total:t.total,loaded:t.loaded,percentage:Math.round(100*t.loaded/t.total)}}route(t,e={}){let r=t;return Object.prototype.hasOwnProperty.call(b.routes,t)&&(r=decodeURI(b.routes[t])),"object"!=typeof e&&(e={id:e}),Object.keys(e).forEach(t=>{r=r.replace(`{${t}}`,e[t])}),r}onKeydown(t){const e=t.target;e.name&&this.errors.clear(e.name)}}b.routes={},b.errorMessage="Something went wrong. Please try again.",b.recentlySuccessfulTimeout=2e3,b.ignore=["busy","successful","errors","progress","originalData","recentlySuccessful","recentlySuccessfulTimeoutId"],e.a=b},405:function(t,e,r){"use strict";r.r(e);var n=r(3),o=r(4);function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(){a=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function d(t,e,r,o){var s=e&&e.prototype instanceof p?e:p,a=Object.create(s.prototype),i=new k(o||[]);return n(a,"_invoke",{value:P(t,r,i)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=d;var m={};function p(){}function h(){}function v(){}var y={};l(y,i,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(E([])));b&&b!==e&&r.call(b,i)&&(y=b);var _=v.prototype=p.prototype=Object.create(y);function j(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var o;n(this,"_invoke",{value:function(n,a){function i(){return new e((function(o,i){!function n(o,a,i,c){var u=f(t[o],t,a);if("throw"!==u.type){var l=u.arg,d=l.value;return d&&"object"==s(d)&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(d).then((function(t){l.value=t,i(l)}),(function(t){return n("throw",t,i,c)}))}c(u.arg)}(n,a,o,i)}))}return o=o?o.then(i,i):i()}})}function P(t,e,r){var n="suspendedStart";return function(o,s){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw s;return $()}for(r.method=o,r.arg=s;;){var a=r.delegate;if(a){var i=x(a,r);if(i){if(i===m)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=f(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===m)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function x(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,m;var s=o.arg;return s?s.done?(e[t.resultName]=s.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,m):s:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function E(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:$}}function $(){return{value:void 0,done:!0}}return h.prototype=v,n(_,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:h,configurable:!0}),h.displayName=l(v,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,l(t,u,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},j(w.prototype),l(w.prototype,c,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,o,s){void 0===s&&(s=Promise);var a=new w(d(e,r,n,o),s);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(_),l(_,u,"Generator"),l(_,i,(function(){return this})),l(_,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=E,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var s=this.tryEntries[o],a=s.completion;if("root"===s.tryLoc)return n("end");if(s.tryLoc<=this.prev){var i=r.call(s,"catchLoc"),c=r.call(s,"finallyLoc");if(i&&c){if(this.prev<s.catchLoc)return n(s.catchLoc,!0);if(this.prev<s.finallyLoc)return n(s.finallyLoc)}else if(i){if(this.prev<s.catchLoc)return n(s.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return n(s.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var s=o;break}}s&&("break"===t||"continue"===t)&&s.tryLoc<=e&&e<=s.finallyLoc&&(s=null);var a=s?s.completion:{};return a.type=t,a.arg=e,s?(this.method="next",this.next=s.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;C(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:E(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),m}},t}function i(t,e,r,n,o,s,a){try{var i=t[s](a),c=i.value}catch(t){return void r(t)}i.done?e(c):Promise.resolve(c).then(n,o)}function c(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var s=t.apply(e,r);function a(t){i(s,n,o,a,c,"next",t)}function c(t){i(s,n,o,a,c,"throw",t)}a(void 0)}))}}function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==s(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===s(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var d={middleware:["auth","check-permissions"],metaInfo:function(){return{title:this.$t("inventory.adjustments.edit.page_title")}},data:function(){return{breadcrumbsCurrent:"inventory.adjustments.edit.breadcrumbs_current",breadcrumbs:[{name:"inventory.adjustments.edit.breadcrumbs_first",url:"home"},{name:"inventory.adjustments.edit.breadcrumbs_second",url:"adjustments.index"},{name:"inventory.adjustments.edit.breadcrumbs_active",url:""}],form:new o.a({adjustmentNo:"",selectedProducts:[],adjustmentReason:"",adjustmentDate:(new Date).toISOString().slice(0,10),note:"",status:1}),products:"",productPrefix:"",adjustmentPrefix:""}},computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},Object(n.b)("operations",["items","appInfo"])),created:function(){this.getProducts(),this.getAdjustment(),this.productPrefix=this.appInfo.productPrefix,this.adjustmentPrefix=this.appInfo.adjustmentPrefix},methods:{getAdjustment:function(){var t=this;return c(a().mark((function e(){var r,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.form.get(window.location.origin+"/api/inventory-adjustments/"+t.$route.params.slug);case 2:r=e.sent,n=r.data,t.form.adjustmentNo=t.$options.filters.withPrefix(n.data.code,t.adjustmentPrefix),t.form.adjustmentReason=n.data.reason,t.form.adjustmentDate=n.data.date,t.form.note=n.data.note,t.form.status=n.data.status,t.assignProducts(n.data.adjustmentProducts);case 10:case"end":return e.stop()}}),e)})))()},getProducts:function(){var t=this;return c(a().mark((function e(){var r,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.form.get(window.location.origin+"/api/all-products");case 2:r=e.sent,n=r.data,t.products=n.data;case 5:case"end":return e.stop()}}),e)})))()},storeProduct:function(t){var e=this.form.selectedProducts.findIndex((function(e){return e.id==t.id})),r=1;-1===e?this.form.selectedProducts.unshift({id:t.id,slug:t.slug,name:t.name,itemCode:t.code,purchasePrice:t.avgPurchasePrice,stockQty:t.inventoryCount,adjustType:"Increment",adjustQty:r,maxQty:9999}):this.form.selectedProducts[e]&&(r=this.form.selectedProducts[e].adjustQty?this.form.selectedProducts[e].adjustQty+1:1,this.form.selectedProducts[e].adjustQty=r)},updateProduct:function(t,e,r){var n=this.form.selectedProducts[r];n&&("quantity"==e&&n.adjustQty>=1?n.adjustQty=t:"adjustType"==e?(n.adjustType=t,"Decrement"==n.adjustType?n.maxQty=n.stockQty:n.maxQty=9999):n.purchasePrice=t),this.form.selectedProducts[r]=n},removeItem:function(t){var e=this.form.selectedProducts.indexOf(t);e>-1&&this.form.selectedProducts.splice(e,1)},assignProducts:function(t){for(var e in t){var r=t[e];this.form.selectedProducts.unshift({id:r.productID,slug:r.productSlug,name:r.productName,itemCode:r.productCode,itemUnit:r.productUnit,purchasePrice:r.purchasePrice,stockQty:r.productStock,oriAdjustType:1==r.type?"Increment":"Decrement",oriAdjustQty:r.quantity,adjustType:1==r.type?"Increment":"Decrement",adjustQty:r.quantity,maxQty:0==r.type?r.productStock:9999})}},updateAdjustment:function(){var t=this;return c(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.form.patch(window.location.origin+"/api/inventory-adjustments/"+t.$route.params.slug).then((function(e){toast.fire({type:"success",title:t.$t("inventory.adjustments.edit.success_msg")}),t.$router.push({name:"adjustments.index"})})).catch((function(){toast.fire({type:"error",title:t.$t("common.error_msg")})}));case 2:case"end":return e.stop()}}),e)})))()}}},f=r(1),m=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("breadcrumbs",{attrs:{items:t.breadcrumbs,current:t.breadcrumbsCurrent}}),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-12"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[r("h3",{staticClass:"card-title"},[t._v("\n            "+t._s(t.$t("inventory.adjustments.edit.form_title"))+"\n          ")]),t._v(" "),r("router-link",{staticClass:"btn btn-dark float-right",attrs:{to:{name:"adjustments.index"}}},[r("i",{staticClass:"fas fa-long-arrow-alt-left"}),t._v(" "+t._s(t.$t("common.back"))+"\n          ")])],1),t._v(" "),r("form",{attrs:{role:"form"},on:{submit:function(e){return e.preventDefault(),t.updateAdjustment.apply(null,arguments)},keydown:function(e){return t.form.onKeydown(e)}}},[r("div",{staticClass:"card-body"},[r("div",{staticClass:"row"},[r("div",{staticClass:"form-group col-md-6"},[r("label",{attrs:{for:"adjustmentNo"}},[t._v(t._s(t.$t("inventory.common.adjustment_no")))]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.adjustmentNo,expression:"form.adjustmentNo"}],staticClass:"form-control",attrs:{id:"adjustmentNo",type:"text",name:"adjustmentReason",readonly:""},domProps:{value:t.form.adjustmentNo},on:{input:function(e){e.target.composing||t.$set(t.form,"adjustmentNo",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"adjustmentNo"}})],1),t._v(" "),r("div",{staticClass:"form-group col-md-6"},[r("label",{attrs:{for:"adjustmentReason"}},[t._v(t._s(t.$t("inventory.common.adjustment_reason")))]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.adjustmentReason,expression:"form.adjustmentReason"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("adjustmentReason")},attrs:{id:"adjustmentReason",type:"text",name:"adjustmentReason",placeholder:t.$t("common.return_reason_placeholder")},domProps:{value:t.form.adjustmentReason},on:{input:function(e){e.target.composing||t.$set(t.form,"adjustmentReason",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"adjustmentReason"}})],1)]),t._v(" "),r("div",{staticClass:"row"},[t.products?r("div",{staticClass:"form-group col-md-12"},[r("label",{attrs:{for:"product"}},[t._v(t._s(t.$t("common.select_products"))+"\n                  "),r("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),r("v-select",{class:{"is-invalid":t.form.errors.has("selectedProducts")},attrs:{options:t.products,label:"label",name:"product",placeholder:t.$t("common.select_products_placeholder")},on:{input:function(e){return t.storeProduct(t.form.product)}},model:{value:t.form.product,callback:function(e){t.$set(t.form,"product",e)},expression:"form.product"}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"selectedProducts"}})],1):t._e()]),t._v(" "),t.form.selectedProducts&&t.form.selectedProducts.length>0?r("div",{staticClass:"row mt-3 mb-2"},[r("div",{staticClass:"table-responsive table-custom w-95 m-auto"},[r("table",{staticClass:"table table-sm"},[r("thead",[r("tr",[r("th",[t._v(t._s(t.$t("common.s_no")))]),t._v(" "),r("th",[t._v(t._s(t.$t("common.code")))]),t._v(" "),r("th",[t._v(t._s(t.$t("common.name")))]),t._v(" "),r("th",[t._v(t._s(t.$t("products.list.common.stock")))]),t._v(" "),r("th",{staticClass:"w-200px"},[t._v("\n                        "+t._s(t.$t("inventory.common.adjustment_type"))+"\n                      ")]),t._v(" "),r("th",{staticClass:"w-250px"},[t._v(t._s(t.$t("common.quantity")))]),t._v(" "),r("th",{staticClass:"text-right"},[t._v(t._s(t.$t("common.action")))])])]),t._v(" "),r("tbody",t._l(t.form.selectedProducts,(function(e,n){return r("tr",{key:n},[r("td",[t._v(t._s(++n))]),t._v(" "),r("td",[t._v(t._s(t._f("withPrefix")(e.itemCode,t.productPrefix)))]),t._v(" "),r("td",[t._v(t._s(e.name))]),t._v(" "),r("td",[r("span",{staticClass:"btn btn-warning btn-sm"},[t._v(t._s(e.stockQty))])]),t._v(" "),r("td",[r("select",{staticClass:"form-control w-200px",attrs:{id:"adjustType-"+n,required:""},on:{change:function(e){return t.updateProduct(e.target.value,"adjustType",n-1)}}},[r("option",{attrs:{value:"Increment"},domProps:{selected:"Increment"==e.adjustType}},[t._v("\n                            "+t._s(t.$t("inventory.common.increment"))+"\n                          ")]),t._v(" "),r("option",{attrs:{value:"Decrement"},domProps:{selected:"Decrement"==e.adjustType}},[t._v("\n                            "+t._s(t.$t("inventory.common.decrement"))+"\n                          ")])])]),t._v(" "),r("td",[r("div",{staticClass:"input-group custom-qty-input"},[r("input",{staticClass:"button-minus icon-shape icon-sm btn-danger",attrs:{type:"button",value:"-","data-field":"quantity"},on:{click:function(r){return t.updateProduct(e.adjustQty>1?e.adjustQty-1:1,"quantity",n-1)}}}),t._v(" "),r("input",{staticClass:"quantity-field border-0 incrementor",attrs:{type:"number",step:"any",id:"Qty-"+n,name:"quantity",placeholder:t.$t("common.quantity"),min:"1",max:e.maxQty,required:""},domProps:{value:e.adjustQty},on:{change:function(e){return t.updateProduct(e.target.value,"quantity",n-1)},keyup:function(e){return t.updateProduct(e.target.value,"quantity",n-1)}}}),t._v(" "),r("input",{staticClass:"button-plus icon-shape icon-sm btn-primary",attrs:{type:"button",value:"+","data-field":"quantity"},on:{click:function(r){return t.updateProduct(e.adjustQty+1,"quantity",n-1)}}})])]),t._v(" "),r("td",{staticClass:"text-right"},[r("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(r){return t.removeItem(e)}}},[r("i",{staticClass:"fas fa-times"})])])])})),0)])])]):t._e(),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"note"}},[t._v(t._s(t.$t("common.note")))]),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.note,expression:"form.note"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("note")},attrs:{id:"note",placeholder:t.$t("common.note_placeholder")},domProps:{value:t.form.note},on:{input:function(e){e.target.composing||t.$set(t.form,"note",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"note"}})],1),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"form-group col-md-6"},[r("label",{attrs:{for:"adjustmentDate"}},[t._v(t._s(t.$t("inventory.common.adjustment_date")))]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.adjustmentDate,expression:"form.adjustmentDate"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("adjustmentDate")},attrs:{id:"adjustmentDate",type:"date",name:"adjustmentDate"},domProps:{value:t.form.adjustmentDate},on:{input:function(e){e.target.composing||t.$set(t.form,"adjustmentDate",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"adjustmentDate"}})],1),t._v(" "),r("div",{staticClass:"form-group col-md-6"},[r("label",{attrs:{for:"status"}},[t._v(t._s(t.$t("common.status")))]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.form.status,expression:"form.status"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("status")},attrs:{id:"status"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"status",e.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"1"}},[t._v(t._s(t.$t("common.active")))]),t._v(" "),r("option",{attrs:{value:"0"}},[t._v(t._s(t.$t("common.in_active")))])]),t._v(" "),r("has-error",{attrs:{form:t.form,field:"status"}})],1)])]),t._v(" "),r("div",{staticClass:"card-footer"},[r("v-button",{staticClass:"btn btn-primary",attrs:{loading:t.form.busy}},[r("i",{staticClass:"fas fa-eidt"}),t._v(" "+t._s(t.$t("common.save_changes"))+"\n            ")]),t._v(" "),r("button",{staticClass:"btn btn-secondary float-right",attrs:{type:"reset"},on:{click:function(e){return t.form.reset()}}},[r("i",{staticClass:"fas fa-power-off"}),t._v(" "+t._s(t.$t("common.reset"))+"\n            ")])],1)])])])])],1)}),[],!1,null,null,null);e.default=m.exports}}]);