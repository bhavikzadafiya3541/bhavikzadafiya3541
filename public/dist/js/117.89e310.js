/*! For license information please see 117.89e310.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{4:function(t,e,r){"use strict";var o=r(7),a=r.n(o),s=Object.defineProperty,n=Object.prototype.hasOwnProperty,i=Object.getOwnPropertySymbols,c=Object.prototype.propertyIsEnumerable,l=(t,e,r)=>e in t?s(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,u=(t,e)=>{for(var r in e||(e={}))n.call(e,r)&&l(t,r,e[r]);if(i)for(var r of i(e))c.call(e,r)&&l(t,r,e[r]);return t};const d=t=>void 0===t,m=t=>Array.isArray(t),f=t=>t&&"number"==typeof t.size&&"string"==typeof t.type&&"function"==typeof t.slice,p=(t,e,r,o)=>((e=e||{}).indices=!d(e.indices)&&e.indices,e.nullsAsUndefineds=!d(e.nullsAsUndefineds)&&e.nullsAsUndefineds,e.booleansAsIntegers=!d(e.booleansAsIntegers)&&e.booleansAsIntegers,e.allowEmptyArrays=!d(e.allowEmptyArrays)&&e.allowEmptyArrays,r=r||new FormData,d(t)||(null===t?e.nullsAsUndefineds||r.append(o,""):(t=>"boolean"==typeof t)(t)?e.booleansAsIntegers?r.append(o,t?1:0):r.append(o,t):m(t)?t.length?t.forEach((t,a)=>{const s=o+"["+(e.indices?a:"")+"]";p(t,e,r,s)}):e.allowEmptyArrays&&r.append(o+"[]",""):(t=>t instanceof Date)(t)?r.append(o,t.toISOString()):!(t=>t===Object(t))(t)||(t=>f(t)&&"string"==typeof t.name&&("object"==typeof t.lastModifiedDate||"number"==typeof t.lastModified))(t)||f(t)?r.append(o,t):Object.keys(t).forEach(a=>{const s=t[a];if(m(s))for(;a.length>2&&a.lastIndexOf("[]")===a.length-2;)a=a.substring(0,a.length-2);p(s,e,r,o?o+"["+a+"]":a)})),r);var v={serialize:p};function h(t){if(null===t||"object"!=typeof t)return t;const e=Array.isArray(t)?[]:{};return Object.keys(t).forEach(r=>{e[r]=h(t[r])}),e}function y(t){return Array.isArray(t)?t:[t]}class g{constructor(){this.errors={},this.errors={}}set(t,e){"object"==typeof t?this.errors=t:this.set(u(u({},this.errors),{[t]:y(e)}))}all(){return this.errors}has(t){return Object.prototype.hasOwnProperty.call(this.errors,t)}hasAny(...t){return t.some(t=>this.has(t))}any(){return Object.keys(this.errors).length>0}get(t){if(this.has(t))return this.getAll(t)[0]}getAll(t){return y(this.errors[t]||[])}only(...t){const e=[];return t.forEach(t=>{const r=this.get(t);r&&e.push(r)}),e}flatten(){return Object.values(this.errors).reduce((t,e)=>t.concat(e),[])}clear(t){const e={};t&&Object.keys(this.errors).forEach(r=>{r!==t&&(e[r]=this.errors[r])}),this.set(e)}}class _{constructor(t={}){this.originalData={},this.busy=!1,this.successful=!1,this.recentlySuccessful=!1,this.recentlySuccessfulTimeoutId=void 0,this.errors=new g,this.progress=void 0,this.update(t)}static make(t){return new this(t)}update(t){this.originalData=Object.assign({},this.originalData,h(t)),Object.assign(this,t)}fill(t={}){this.keys().forEach(e=>{this[e]=t[e]})}data(){return this.keys().reduce((t,e)=>u(u({},t),{[e]:this[e]}),{})}keys(){return Object.keys(this).filter(t=>!_.ignore.includes(t))}startProcessing(){this.errors.clear(),this.busy=!0,this.successful=!1,this.progress=void 0,this.recentlySuccessful=!1,clearTimeout(this.recentlySuccessfulTimeoutId)}finishProcessing(){this.busy=!1,this.successful=!0,this.progress=void 0,this.recentlySuccessful=!0,this.recentlySuccessfulTimeoutId=setTimeout(()=>{this.recentlySuccessful=!1},_.recentlySuccessfulTimeout)}clear(){this.errors.clear(),this.successful=!1,this.recentlySuccessful=!1,this.progress=void 0,clearTimeout(this.recentlySuccessfulTimeoutId)}reset(){Object.keys(this).filter(t=>!_.ignore.includes(t)).forEach(t=>{this[t]=h(this.originalData[t])})}get(t,e={}){return this.submit("get",t,e)}post(t,e={}){return this.submit("post",t,e)}patch(t,e={}){return this.submit("patch",t,e)}put(t,e={}){return this.submit("put",t,e)}delete(t,e={}){return this.submit("delete",t,e)}submit(t,e,r={}){return this.startProcessing(),r=u({data:{},params:{},url:this.route(e),method:t,onUploadProgress:this.handleUploadProgress.bind(this)},r),"get"===t.toLowerCase()?r.params=u(u({},this.data()),r.params):(r.data=u(u({},this.data()),r.data),function t(e){return e instanceof File||e instanceof Blob||e instanceof FileList||"object"==typeof e&&null!==e&&void 0!==Object.values(e).find(e=>t(e))}(r.data)&&!r.transformRequest&&(r.transformRequest=[t=>v.serialize(t)])),new Promise((t,e)=>{(_.axios||a.a).request(r).then(e=>{this.finishProcessing(),t(e)}).catch(t=>{this.handleErrors(t),e(t)})})}handleErrors(t){this.busy=!1,this.progress=void 0,t.response&&this.errors.set(this.extractErrors(t.response))}extractErrors(t){return t.data&&"object"==typeof t.data?t.data.errors?u({},t.data.errors):t.data.message?{error:t.data.message}:u({},t.data):{error:_.errorMessage}}handleUploadProgress(t){this.progress={total:t.total,loaded:t.loaded,percentage:Math.round(100*t.loaded/t.total)}}route(t,e={}){let r=t;return Object.prototype.hasOwnProperty.call(_.routes,t)&&(r=decodeURI(_.routes[t])),"object"!=typeof e&&(e={id:e}),Object.keys(e).forEach(t=>{r=r.replace(`{${t}}`,e[t])}),r}onKeydown(t){const e=t.target;e.name&&this.errors.clear(e.name)}}_.routes={},_.errorMessage="Something went wrong. Please try again.",_.recentlySuccessfulTimeout=2e3,_.ignore=["busy","successful","errors","progress","originalData","recentlySuccessful","recentlySuccessfulTimeoutId"],e.a=_},455:function(t,e,r){"use strict";r.r(e);var o=r(3),a=r(4);function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(){n=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function d(t,e,r,a){var s=e&&e.prototype instanceof p?e:p,n=Object.create(s.prototype),i=new O(a||[]);return o(n,"_invoke",{value:T(t,r,i)}),n}function m(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=d;var f={};function p(){}function v(){}function h(){}var y={};u(y,i,(function(){return this}));var g=Object.getPrototypeOf,_=g&&g(g(q([])));_&&_!==e&&r.call(_,i)&&(y=_);var b=h.prototype=p.prototype=Object.create(y);function x(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var a;o(this,"_invoke",{value:function(o,n){function i(){return new e((function(a,i){!function o(a,n,i,c){var l=m(t[a],t,n);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==s(d)&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){o("next",t,i,c)}),(function(t){o("throw",t,i,c)})):e.resolve(d).then((function(t){u.value=t,i(u)}),(function(t){return o("throw",t,i,c)}))}c(l.arg)}(o,n,a,i)}))}return a=a?a.then(i,i):i()}})}function T(t,e,r){var o="suspendedStart";return function(a,s){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===a)throw s;return j()}for(r.method=a,r.arg=s;;){var n=r.delegate;if(n){var i=P(n,r);if(i){if(i===f)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===o)throw o="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o="executing";var c=m(t,e,r);if("normal"===c.type){if(o=r.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(o="completed",r.method="throw",r.arg=c.arg)}}}function P(t,e){var r=e.method,o=t.iterator[r];if(void 0===o)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,P(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var a=m(o,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,f;var s=a.arg;return s?s.done?(e[t.resultName]=s.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):s:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function $(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function q(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(r.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:j}}function j(){return{value:void 0,done:!0}}return v.prototype=h,o(b,"constructor",{value:h,configurable:!0}),o(h,"constructor",{value:v,configurable:!0}),v.displayName=u(h,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,u(t,l,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},x(w.prototype),u(w.prototype,c,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,o,a,s){void 0===s&&(s=Promise);var n=new w(d(e,r,o,a),s);return t.isGeneratorFunction(r)?n:n.next().then((function(t){return t.done?t.value:n.next()}))},x(b),u(b,l,"Generator"),u(b,i,(function(){return this})),u(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var o in e)r.push(o);return r.reverse(),function t(){for(;r.length;){var o=r.pop();if(o in e)return t.value=o,t.done=!1,t}return t.done=!0,t}},t.values=q,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach($),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(r,o){return n.type="throw",n.arg=t,e.next=r,o&&(e.method="next",e.arg=void 0),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var s=this.tryEntries[a],n=s.completion;if("root"===s.tryLoc)return o("end");if(s.tryLoc<=this.prev){var i=r.call(s,"catchLoc"),c=r.call(s,"finallyLoc");if(i&&c){if(this.prev<s.catchLoc)return o(s.catchLoc,!0);if(this.prev<s.finallyLoc)return o(s.finallyLoc)}else if(i){if(this.prev<s.catchLoc)return o(s.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return o(s.finallyLoc)}}}},abrupt:function(t,e){for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var s=a;break}}s&&("break"===t||"continue"===t)&&s.tryLoc<=e&&e<=s.finallyLoc&&(s=null);var n=s?s.completion:{};return n.type=t,n.arg=e,s?(this.method="next",this.next=s.finallyLoc,f):this.complete(n)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),$(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var o=r.completion;if("throw"===o.type){var a=o.arg;$(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:q(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function i(t,e,r,o,a,s,n){try{var i=t[s](n),c=i.value}catch(t){return void r(t)}i.done?e(c):Promise.resolve(c).then(o,a)}function c(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var s=t.apply(e,r);function n(t){i(s,o,a,n,c,"next",t)}function c(t){i(s,o,a,n,c,"throw",t)}n(void 0)}))}}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function u(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==s(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,e||"default");if("object"!==s(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===s(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var d={middleware:["auth","check-permissions"],metaInfo:function(){return{title:this.$t("sales.quotations.edit.page_title")}},data:function(){return{breadcrumbsCurrent:"sales.quotations.edit.breadcrumbs_current",breadcrumbs:[{name:"sales.quotations.edit.breadcrumbs_first",url:"home"},{name:"sales.quotations.edit.breadcrumbs_second",url:"quotations.index"},{name:"sales.quotations.edit.breadcrumbs_active",url:""}],form:new a.a({client:"",reference:"",selectedProducts:[],subTotal:0,netTotal:0,discountType:0,discount:"",totalDiscount:"",orderTax:"",totalTax:0,productTotalTax:0,transportCost:"",date:(new Date).toISOString().slice(0,10),deliveryPlace:"",note:"",status:1}),products:"",taxes:"",prefix:""}},computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){u(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},Object(o.b)("operations",["items","appInfo"])),created:function(){this.getClients(),this.getProducts(),this.getTaxes(),this.getQuotation(),this.prefix=this.appInfo.productPrefix},methods:{getQuotation:function(){var t=this;return c(n().mark((function e(){var r,o;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.form.get(window.location.origin+"/api/quotations/"+t.$route.params.slug);case 2:r=e.sent,o=r.data,t.form.client=o.data.client,t.form.reference=o.data.reference,t.form.totalTax=o.data.totalTax,t.form.orderTax=o.data.quotationTax,t.form.discount=0==o.data.discountType?o.data.discount:o.data.discountPercentage,t.form.discountType=o.data.discountType,t.form.discountPercentage=o.data.discountPercentage,t.form.totalDiscount=o.data.discount,t.form.transportCost=o.data.transport,t.form.subTotal=o.data.subTotal,t.form.deliveryPlace=o.data.deliveryPlace,t.form.date=o.data.date,t.form.note=o.data.note,t.form.status=o.data.status,t.form.selectedProducts=t.assignProducts(o.data.products);case 19:case"end":return e.stop()}}),e)})))()},getClients:function(){var t=this;return c(n().mark((function e(){return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("operations/allData",{path:"/api/all-clients"});case 2:case"end":return e.stop()}}),e)})))()},getProducts:function(){var t=this;return c(n().mark((function e(){var r,o;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.form.get(window.location.origin+"/api/all-products");case 2:r=e.sent,o=r.data,t.products=o.data;case 5:case"end":return e.stop()}}),e)})))()},getTaxes:function(){var t=this;return c(n().mark((function e(){var r,o;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.form.get(window.location.origin+"/api/all-vat-rates");case 2:r=e.sent,o=r.data,t.taxes=o.data;case 5:case"end":return e.stop()}}),e)})))()},storeProduct:function(t){var e=this.form.selectedProducts.findIndex((function(e){return e.id==t.id}));if(-1===e){var r="Exclusive"==t.taxType?t.priceWithDiscount*(t.taxRate/100):t.priceWithDiscount-t.priceWithDiscount/(1+t.taxRate/100),o=1*r;this.form.selectedProducts.unshift({id:t.id,slug:t.slug,name:t.name,code:t.code,taxType:t.taxType,taxRate:t.taxRate,qty:1,avgPurchasePrice:t.avgPurchasePrice,unitPrice:t.priceWithDiscount,unitCost:"Exclusive"==t.taxType?t.priceWithDiscount+r:t.priceWithDiscount,totalPrice:"Exclusive"==t.taxType?1*(t.priceWithDiscount+o):1*t.priceWithDiscount,productTax:t.productTax,totalTax:o})}this.generateItemTotal(1,"qty",e,"")},generateItemTotal:function(t,e,r,o){var a=this.form.selectedProducts[r];a&&("qty"==e?(a.qty=t,"increment"==o?a.qty=Number(a.qty)+1:"decrement"==o&&a.qty>0&&(a.qty=Number(a.qty)-1)):(a.unitPrice=t,"increment"==o?a.unitPrice=Number(a.unitPrice)+1:"decrement"==o&&a.unitPrice>0&&(a.unitPrice=Number(a.unitPrice)-1)),a.productTax="Exclusive"==a.taxType?a.unitPrice*(a.taxRate/100):a.unitPrice-a.unitPrice/(1+a.taxRate/100),a.totalTax=a.productTax*a.qty,a.totalPrice="Exclusive"==a.taxType?a.qty*a.unitPrice+a.totalTax:a.qty*a.unitPrice,a.unitCost="Exclusive"==a.taxType?Number(a.unitPrice)+Number(a.productTax):a.unitPrice,this.form.selectedProducts[r]=a),this.calculateSum()},removeItem:function(t){var e=this.form.selectedProducts.indexOf(t);e>-1&&this.form.selectedProducts.splice(e,1),this.calculateSum()},calculateSum:function(){if(this.form.subTotal=this.form.selectedProducts.reduce((function(t,e){return Number((t+e.totalPrice).toFixed(2))}),0),this.form.productTotalTax=this.form.selectedProducts.reduce((function(t,e){return Number((t+e.totalTax).toFixed(2))}),0),this.form.netTotal=this.form.subTotal,this.form.totalTax=0,this.form.orderTax&&(this.form.totalTax=this.form.orderTax.rate/100*this.form.subTotal),this.form.subTotal>0){var t=Number(this.form.discount);1==this.form.discountType?(t=t/100*this.form.subTotal,this.form.totalDiscount=Number(t.toFixed(2))):t=Number(this.form.discount),this.form.netTotal=this.form.subTotal+Number(this.form.transportCost)-t+this.form.totalTax}},assignProducts:function(t){for(var e in t){var r=t[e];this.form.selectedProducts.unshift({id:r.productID,slug:r.productSlug,name:r.productName,code:r.productCode,taxType:r.taxType,taxRate:r.taxRate,qty:r.quantity,avgPurchasePrice:r.avgPurchasePrice,unitPrice:r.salePrice,unitCost:r.unitCost,totalPrice:r.unitCostTotal,productTax:r.taxAmount,totalTax:r.taxAmount*r.quantity})}return this.calculateSum(),this.form.selectedProducts},updateQuotation:function(){var t=this;return c(n().mark((function e(){return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.form.patch(window.location.origin+"/api/quotations/"+t.$route.params.slug).then((function(e){var r=e.data;toast.fire({type:"success",title:t.$t("sales.quotations.edit.success_msg")}),t.$router.push({name:"quotations.show",params:{slug:r.data.slug}})})).catch((function(){toast.fire({type:"error",title:t.$t("common.error_msg")})}));case 2:case"end":return e.stop()}}),e)})))()}}},m=r(1),f=Object(m.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("breadcrumbs",{attrs:{items:t.breadcrumbs,current:t.breadcrumbsCurrent}}),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-12 col-xl-12"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[r("h3",{staticClass:"card-title"},[t._v("\n            "+t._s(t.$t("sales.quotations.edit.form_title"))+"\n          ")]),t._v(" "),r("router-link",{staticClass:"btn btn-dark float-right",attrs:{to:{name:"quotations.index"}}},[r("i",{staticClass:"fas fa-long-arrow-alt-left"}),t._v(" "+t._s(t.$t("common.back"))+"\n          ")])],1),t._v(" "),r("form",{attrs:{role:"form"},on:{submit:function(e){return e.preventDefault(),t.updateQuotation.apply(null,arguments)},keydown:function(e){return t.form.onKeydown(e)}}},[r("div",{staticClass:"card-body"},[t.items?r("div",{staticClass:"row"},[r("div",{staticClass:"form-group col-md-6"},[r("label",{attrs:{for:"client"}},[t._v(t._s(t.$t("common.client"))+"\n                  "),r("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),r("v-select",{class:{"is-invalid":t.form.errors.has("client")},attrs:{options:t.items,label:"name",name:"client",placeholder:t.$t("common.client_placeholder")},model:{value:t.form.client,callback:function(e){t.$set(t.form,"client",e)},expression:"form.client"}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"client"}})],1),t._v(" "),r("div",{staticClass:"form-group col-md-6"},[r("label",{attrs:{for:"reference"}},[t._v(t._s(t.$t("common.reference")))]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.reference,expression:"form.reference"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("reference")},attrs:{id:"reference",type:"text",name:"reference",placeholder:t.$t("common.reference_placeholder")},domProps:{value:t.form.reference},on:{input:function(e){e.target.composing||t.$set(t.form,"reference",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"reference"}})],1)]):t._e(),t._v(" "),t.products?r("div",{staticClass:"row"},[r("div",{staticClass:"form-group col-md-12"},[r("label",{attrs:{for:"product"}},[t._v(t._s(t.$t("common.select_products"))+"\n                  "),r("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),r("v-select",{class:{"is-invalid":t.form.errors.has("selectedProducts")},attrs:{options:t.products,label:"label",name:"product",placeholder:t.$t("common.select_products_placeholder")},on:{input:function(e){return t.storeProduct(t.form.product)}},model:{value:t.form.product,callback:function(e){t.$set(t.form,"product",e)},expression:"form.product"}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"selectedProducts"}})],1)]):t._e(),t._v(" "),t.form.selectedProducts&&t.form.selectedProducts.length>0?r("div",{staticClass:"row mt-3 mb-4"},[r("div",{staticClass:"table-responsive table-custom w-95 m-auto"},[r("table",{staticClass:"table table-hover table-sm"},[r("thead",[r("tr",[r("th",[t._v(t._s(t.$t("common.s_no")))]),t._v(" "),r("th",{staticClass:"text-center"},[t._v(t._s(t.$t("common.code")))]),t._v(" "),r("th",{staticClass:"text-center"},[t._v("\n                        "+t._s(t.$t("common.product_name"))+"\n                      ")]),t._v(" "),r("th",{staticClass:"text-center"},[t._v(t._s(t.$t("common.quantity")))]),t._v(" "),r("th",{staticClass:"text-center"},[t._v(t._s(t.$t("common.price")))]),t._v(" "),r("th",{staticClass:"text-center"},[t._v("\n                        "+t._s(t.$t("common.unit_cost"))+"\n                      ")]),t._v(" "),r("th",{staticClass:"text-center"},[t._v(t._s(t.$t("common.tax")))]),t._v(" "),r("th",{staticClass:"text-center"},[t._v(t._s(t.$t("common.subtotal")))]),t._v(" "),r("th",{staticClass:"text-right"},[t._v(t._s(t.$t("common.action")))])])]),t._v(" "),r("tbody",[t._l(t.form.selectedProducts,(function(e,o){return r("tr",{key:o},[r("td",[t._v(t._s(++o))]),t._v(" "),r("td",{staticClass:"text-center"},[t._v("\n                        "+t._s(t._f("withPrefix")(e.code,t.prefix))+"\n                      ")]),t._v(" "),r("td",{staticClass:"text-center"},[r("router-link",{attrs:{to:{name:"products.show",params:{slug:e.slug}}}},[t._v("\n                          "+t._s(e.name)+"\n                        ")])],1),t._v(" "),r("td",{staticClass:"text-center"},[r("div",{staticClass:"input-group custom-qty-input"},[r("input",{staticClass:"button-minus icon-shape icon-sm btn-danger",attrs:{type:"button",value:"-","data-field":"quantity"},on:{click:function(r){return t.generateItemTotal(e.qty,"qty",o-1,"decrement")}}}),t._v(" "),r("input",{staticClass:"quantity-field border-0 incrementor",attrs:{type:"number",step:"1",id:"Qty-"+o,name:"quantity",required:"",min:"1",placeholder:t.$t("common.quantity")},domProps:{value:e.qty},on:{change:function(e){return t.generateItemTotal(e.target.value,"qty",o-1,"")},keyup:function(e){return t.generateItemTotal(e.target.value,"qty",o-1,"")}}}),t._v(" "),r("input",{staticClass:"button-plus icon-shape icon-sm btn-primary",attrs:{type:"button",value:"+","data-field":"quantity"},on:{click:function(r){return t.generateItemTotal(e.qty,"qty",o-1,"increment")}}})])]),t._v(" "),r("td",{staticClass:"text-center"},[r("div",{staticClass:"input-group custom-qty-input"},[r("input",{staticClass:"button-minus icon-shape icon-sm btn-danger",attrs:{type:"button",value:"-","data-field":"quantity"},on:{click:function(r){return t.generateItemTotal(e.unitPrice,"price",o-1,"decrement")}}}),t._v(" "),r("input",{staticClass:"quantity-field border-0 incrementor",attrs:{type:"number",step:"1",id:"unitPrice-"+o,name:"unitPrice",required:"",min:"1"},domProps:{value:e.unitPrice},on:{change:function(e){return t.generateItemTotal(e.target.value,"price",o-1,"")},keyup:function(e){return t.generateItemTotal(e.target.value,"price",o-1,"")}}}),t._v(" "),r("input",{staticClass:"button-plus icon-shape icon-sm btn-primary",attrs:{type:"button",value:"+","data-field":"quantity"},on:{click:function(r){return t.generateItemTotal(e.unitPrice,"price",o-1,"increment")}}})])]),t._v(" "),r("td",{staticClass:"text-center"},[t._v("\n                        "+t._s(t._f("withCurrency")(e.unitCost))+"\n                      ")]),t._v(" "),r("td",{staticClass:"text-center"},[t._v("\n                        "+t._s(t._f("withCurrency")(e.totalTax))+"\n                      ")]),t._v(" "),r("td",{staticClass:"text-center"},[t._v("\n                        "+t._s(t._f("withCurrency")(e.totalPrice))+"\n                      ")]),t._v(" "),r("td",{staticClass:"text-right"},[r("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(r){return t.removeItem(e)}}},[r("i",{staticClass:"fas fa-times"})])])])})),t._v(" "),r("tr",{staticClass:"text-center"},[r("td",{staticClass:"text-right",attrs:{colspan:"6"}},[r("strong",[t._v(t._s(t.$t("common.total")))])]),t._v(" "),r("td",[r("strong",[t._v(t._s(t._f("withCurrency")(t.form.productTotalTax)))])]),t._v(" "),r("td",[r("strong",[t._v(t._s(t._f("withCurrency")(t.form.subTotal)))])]),t._v(" "),r("td")])],2)])])]):t._e(),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"form-group col-md-4"},[r("label",{attrs:{for:"discountType"}},[t._v(t._s(t.$t("common.discount_type")))]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.form.discountType,expression:"form.discountType"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("discountType")},attrs:{id:"discountType",step:"any",name:"discountType"},on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"discountType",e.target.multiple?r:r[0])},t.calculateSum],keyup:t.calculateSum}},[r("option",{attrs:{value:"0"}},[t._v(t._s(t.$t("common.fixed")))]),t._v(" "),r("option",{attrs:{value:"1"}},[t._v(t._s(t.$t("common.percentage"))+"(%)")])]),t._v(" "),r("has-error",{attrs:{form:t.form,field:"discountType"}})],1),t._v(" "),r("div",{staticClass:"form-group",class:1==t.form.discountType?"col-md-2":"col-md-4"},[r("label",{attrs:{for:"discount"}},[t._v(t._s(t.$t("common.discount"))+"\n                  "),1==t.form.discountType?r("span",[t._v("(%)")]):t._e()]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.discount,expression:"form.discount"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("discount")},attrs:{id:"discount",type:"number",step:"any",min:"1",max:1==t.form.discountType?100:t.form.netTotal,name:"discount",placeholder:t.$t("common.discount_placeholder")},domProps:{value:t.form.discount},on:{change:t.calculateSum,keyup:t.calculateSum,input:function(e){e.target.composing||t.$set(t.form,"discount",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"discount"}})],1),t._v(" "),1==t.form.discountType?r("div",{staticClass:"form-group col-md-2"},[r("label",{attrs:{for:"totalDiscount"}},[t._v(t._s(t.$t("common.total_discount")))]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.totalDiscount,expression:"form.totalDiscount"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("totalDiscount")},attrs:{id:"totalDiscount",type:"number",step:"any",name:"totalDiscount",readonly:""},domProps:{value:t.form.totalDiscount},on:{input:function(e){e.target.composing||t.$set(t.form,"totalDiscount",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"totalDiscount"}})],1):t._e(),t._v(" "),r("div",{staticClass:"form-group col-md-4"},[r("label",{attrs:{for:"transportCost"}},[t._v(t._s(t.$t("common.transport_cost")))]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.transportCost,expression:"form.transportCost"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("transportCost")},attrs:{id:"transportCost",type:"number",step:"any",min:"1",name:"transportCost",placeholder:t.$t("common.transport_cost_placeholder")},domProps:{value:t.form.transportCost},on:{change:t.calculateSum,keyup:t.calculateSum,input:function(e){e.target.composing||t.$set(t.form,"transportCost",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"transportCost"}})],1)]),t._v(" "),r("div",{staticClass:"row"},[t.taxes?r("div",{staticClass:"form-group col-md-4"},[r("label",{attrs:{for:"orderTax"}},[t._v(t._s(t.$t("sales.common.quotation_tax"))+"\n                  "),r("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),r("v-select",{class:{"is-invalid":t.form.errors.has("orderTax")},attrs:{options:t.taxes,label:"code",name:"orderTax",placeholder:t.$t("sales.common.quotation_tax_placeholder")},on:{input:t.calculateSum},model:{value:t.form.orderTax,callback:function(e){t.$set(t.form,"orderTax",e)},expression:"form.orderTax"}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"orderTax"}})],1):t._e(),t._v(" "),t.taxes?r("div",{staticClass:"form-group col-md-4"},[r("label",{attrs:{for:"totalTax"}},[t._v(t._s(t.$t("common.total_tax")))]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.totalTax,expression:"form.totalTax"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("totalTax")},attrs:{id:"totalTax",type:"text",name:"totalTax",readonly:""},domProps:{value:t.form.totalTax},on:{input:function(e){e.target.composing||t.$set(t.form,"totalTax",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"totalTax"}})],1):t._e(),t._v(" "),r("div",{staticClass:"form-group col-md-4"},[r("label",{attrs:{for:"netTotal"}},[t._v(t._s(t.$t("common.net_total")))]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.netTotal,expression:"form.netTotal"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("netTotal")},attrs:{id:"netTotal",type:"number",step:"any",name:"netTotal",readonly:""},domProps:{value:t.form.netTotal},on:{input:function(e){e.target.composing||t.$set(t.form,"netTotal",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"netTotal"}})],1)]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"form-group col-md-4"},[r("label",{attrs:{for:"deliveryPlace"}},[t._v(t._s(t.$t("sales.common.delivery_place")))]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.deliveryPlace,expression:"form.deliveryPlace"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("deliveryPlace")},attrs:{id:"deliveryPlace",type:"text",name:"deliveryPlace",placeholder:t.$t("sales.common.delivery_place_placeholder")},domProps:{value:t.form.deliveryPlace},on:{input:function(e){e.target.composing||t.$set(t.form,"deliveryPlace",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"deliveryPlace"}})],1),t._v(" "),r("div",{staticClass:"form-group col-md-4"},[r("label",{attrs:{for:"date"}},[t._v(t._s(t.$t("common.date")))]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.date,expression:"form.date"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("date")},attrs:{id:"date",type:"date",name:"date"},domProps:{value:t.form.date},on:{input:function(e){e.target.composing||t.$set(t.form,"date",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"date"}})],1),t._v(" "),r("div",{staticClass:"form-group col-md-4"},[r("label",{attrs:{for:"status"}},[t._v(t._s(t.$t("common.status")))]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.form.status,expression:"form.status"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("status")},attrs:{id:"status"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"status",e.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"1"}},[t._v(t._s(t.$t("common.active")))]),t._v(" "),r("option",{attrs:{value:"0"}},[t._v(t._s(t.$t("common.in_active")))])]),t._v(" "),r("has-error",{attrs:{form:t.form,field:"status"}})],1)]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"note"}},[t._v(t._s(t.$t("common.note")))]),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.note,expression:"form.note"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("note")},attrs:{id:"note",placeholder:t.$t("common.note_placeholder")},domProps:{value:t.form.note},on:{input:function(e){e.target.composing||t.$set(t.form,"note",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"note"}})],1)]),t._v(" "),r("div",{staticClass:"card-footer"},[r("v-button",{staticClass:"btn btn-primary",attrs:{loading:t.form.busy}},[r("i",{staticClass:"fas fa-edit"}),t._v(" "+t._s(t.$t("common.save_changes"))+"\n            ")]),t._v(" "),r("button",{staticClass:"btn btn-secondary float-right",attrs:{type:"reset"},on:{click:function(e){return t.form.reset()}}},[r("i",{staticClass:"fas fa-power-off"}),t._v(" "+t._s(t.$t("common.reset"))+"\n            ")])],1)])])])])],1)}),[],!1,null,"6568c006",null);e.default=f.exports}}]);