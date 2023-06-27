/*! For license information please see 135.83a8aa.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{4:function(t,e,r){"use strict";var o=r(7),n=r.n(o),s=Object.defineProperty,a=Object.prototype.hasOwnProperty,i=Object.getOwnPropertySymbols,c=Object.prototype.propertyIsEnumerable,u=(t,e,r)=>e in t?s(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,l=(t,e)=>{for(var r in e||(e={}))a.call(e,r)&&u(t,r,e[r]);if(i)for(var r of i(e))c.call(e,r)&&u(t,r,e[r]);return t};const f=t=>void 0===t,d=t=>Array.isArray(t),h=t=>t&&"number"==typeof t.size&&"string"==typeof t.type&&"function"==typeof t.slice,m=(t,e,r,o)=>((e=e||{}).indices=!f(e.indices)&&e.indices,e.nullsAsUndefineds=!f(e.nullsAsUndefineds)&&e.nullsAsUndefineds,e.booleansAsIntegers=!f(e.booleansAsIntegers)&&e.booleansAsIntegers,e.allowEmptyArrays=!f(e.allowEmptyArrays)&&e.allowEmptyArrays,r=r||new FormData,f(t)||(null===t?e.nullsAsUndefineds||r.append(o,""):(t=>"boolean"==typeof t)(t)?e.booleansAsIntegers?r.append(o,t?1:0):r.append(o,t):d(t)?t.length?t.forEach((t,n)=>{const s=o+"["+(e.indices?n:"")+"]";m(t,e,r,s)}):e.allowEmptyArrays&&r.append(o+"[]",""):(t=>t instanceof Date)(t)?r.append(o,t.toISOString()):!(t=>t===Object(t))(t)||(t=>h(t)&&"string"==typeof t.name&&("object"==typeof t.lastModifiedDate||"number"==typeof t.lastModified))(t)||h(t)?r.append(o,t):Object.keys(t).forEach(n=>{const s=t[n];if(d(s))for(;n.length>2&&n.lastIndexOf("[]")===n.length-2;)n=n.substring(0,n.length-2);m(s,e,r,o?o+"["+n+"]":n)})),r);var p={serialize:m};function v(t){if(null===t||"object"!=typeof t)return t;const e=Array.isArray(t)?[]:{};return Object.keys(t).forEach(r=>{e[r]=v(t[r])}),e}function y(t){return Array.isArray(t)?t:[t]}class g{constructor(){this.errors={},this.errors={}}set(t,e){"object"==typeof t?this.errors=t:this.set(l(l({},this.errors),{[t]:y(e)}))}all(){return this.errors}has(t){return Object.prototype.hasOwnProperty.call(this.errors,t)}hasAny(...t){return t.some(t=>this.has(t))}any(){return Object.keys(this.errors).length>0}get(t){if(this.has(t))return this.getAll(t)[0]}getAll(t){return y(this.errors[t]||[])}only(...t){const e=[];return t.forEach(t=>{const r=this.get(t);r&&e.push(r)}),e}flatten(){return Object.values(this.errors).reduce((t,e)=>t.concat(e),[])}clear(t){const e={};t&&Object.keys(this.errors).forEach(r=>{r!==t&&(e[r]=this.errors[r])}),this.set(e)}}class b{constructor(t={}){this.originalData={},this.busy=!1,this.successful=!1,this.recentlySuccessful=!1,this.recentlySuccessfulTimeoutId=void 0,this.errors=new g,this.progress=void 0,this.update(t)}static make(t){return new this(t)}update(t){this.originalData=Object.assign({},this.originalData,v(t)),Object.assign(this,t)}fill(t={}){this.keys().forEach(e=>{this[e]=t[e]})}data(){return this.keys().reduce((t,e)=>l(l({},t),{[e]:this[e]}),{})}keys(){return Object.keys(this).filter(t=>!b.ignore.includes(t))}startProcessing(){this.errors.clear(),this.busy=!0,this.successful=!1,this.progress=void 0,this.recentlySuccessful=!1,clearTimeout(this.recentlySuccessfulTimeoutId)}finishProcessing(){this.busy=!1,this.successful=!0,this.progress=void 0,this.recentlySuccessful=!0,this.recentlySuccessfulTimeoutId=setTimeout(()=>{this.recentlySuccessful=!1},b.recentlySuccessfulTimeout)}clear(){this.errors.clear(),this.successful=!1,this.recentlySuccessful=!1,this.progress=void 0,clearTimeout(this.recentlySuccessfulTimeoutId)}reset(){Object.keys(this).filter(t=>!b.ignore.includes(t)).forEach(t=>{this[t]=v(this.originalData[t])})}get(t,e={}){return this.submit("get",t,e)}post(t,e={}){return this.submit("post",t,e)}patch(t,e={}){return this.submit("patch",t,e)}put(t,e={}){return this.submit("put",t,e)}delete(t,e={}){return this.submit("delete",t,e)}submit(t,e,r={}){return this.startProcessing(),r=l({data:{},params:{},url:this.route(e),method:t,onUploadProgress:this.handleUploadProgress.bind(this)},r),"get"===t.toLowerCase()?r.params=l(l({},this.data()),r.params):(r.data=l(l({},this.data()),r.data),function t(e){return e instanceof File||e instanceof Blob||e instanceof FileList||"object"==typeof e&&null!==e&&void 0!==Object.values(e).find(e=>t(e))}(r.data)&&!r.transformRequest&&(r.transformRequest=[t=>p.serialize(t)])),new Promise((t,e)=>{(b.axios||n.a).request(r).then(e=>{this.finishProcessing(),t(e)}).catch(t=>{this.handleErrors(t),e(t)})})}handleErrors(t){this.busy=!1,this.progress=void 0,t.response&&this.errors.set(this.extractErrors(t.response))}extractErrors(t){return t.data&&"object"==typeof t.data?t.data.errors?l({},t.data.errors):t.data.message?{error:t.data.message}:l({},t.data):{error:b.errorMessage}}handleUploadProgress(t){this.progress={total:t.total,loaded:t.loaded,percentage:Math.round(100*t.loaded/t.total)}}route(t,e={}){let r=t;return Object.prototype.hasOwnProperty.call(b.routes,t)&&(r=decodeURI(b.routes[t])),"object"!=typeof e&&(e={id:e}),Object.keys(e).forEach(t=>{r=r.replace(`{${t}}`,e[t])}),r}onKeydown(t){const e=t.target;e.name&&this.errors.clear(e.name)}}b.routes={},b.errorMessage="Something went wrong. Please try again.",b.recentlySuccessfulTimeout=2e3,b.ignore=["busy","successful","errors","progress","originalData","recentlySuccessful","recentlySuccessfulTimeoutId"],e.a=b},476:function(t,e,r){"use strict";r.r(e);var o=r(4);function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(){s=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var s=e&&e.prototype instanceof m?e:m,a=Object.create(s.prototype),i=new L(n||[]);return o(a,"_invoke",{value:E(t,r,i)}),a}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var h={};function m(){}function p(){}function v(){}var y={};l(y,i,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(S([])));b&&b!==e&&r.call(b,i)&&(y=b);var w=v.prototype=m.prototype=Object.create(y);function _(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){var s;o(this,"_invoke",{value:function(o,a){function i(){return new e((function(s,i){!function o(s,a,i,c){var u=d(t[s],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==n(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,i,c)}),(function(t){o("throw",t,i,c)})):e.resolve(f).then((function(t){l.value=t,i(l)}),(function(t){return o("throw",t,i,c)}))}c(u.arg)}(o,a,s,i)}))}return s=s?s.then(i,i):i()}})}function E(t,e,r){var o="suspendedStart";return function(n,s){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===n)throw s;return k()}for(r.method=n,r.arg=s;;){var a=r.delegate;if(a){var i=O(a,r);if(i){if(i===h)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===o)throw o="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o="executing";var c=d(t,e,r);if("normal"===c.type){if(o=r.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(o="completed",r.method="throw",r.arg=c.arg)}}}function O(t,e){var r=e.method,o=t.iterator[r];if(void 0===o)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,O(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var n=d(o,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var s=n.arg;return s?s.done?(e[t.resultName]=s.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):s:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function S(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,n=function e(){for(;++o<t.length;)if(r.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:k}}function k(){return{value:void 0,done:!0}}return p.prototype=v,o(w,"constructor",{value:v,configurable:!0}),o(v,"constructor",{value:p,configurable:!0}),p.displayName=l(v,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,l(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},_(x.prototype),l(x.prototype,c,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,o,n,s){void 0===s&&(s=Promise);var a=new x(f(e,r,o,n),s);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(w),l(w,u,"Generator"),l(w,i,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var o in e)r.push(o);return r.reverse(),function t(){for(;r.length;){var o=r.pop();if(o in e)return t.value=o,t.done=!1,t}return t.done=!0,t}},t.values=S,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(r,o){return a.type="throw",a.arg=t,e.next=r,o&&(e.method="next",e.arg=void 0),!!o}for(var n=this.tryEntries.length-1;n>=0;--n){var s=this.tryEntries[n],a=s.completion;if("root"===s.tryLoc)return o("end");if(s.tryLoc<=this.prev){var i=r.call(s,"catchLoc"),c=r.call(s,"finallyLoc");if(i&&c){if(this.prev<s.catchLoc)return o(s.catchLoc,!0);if(this.prev<s.finallyLoc)return o(s.finallyLoc)}else if(i){if(this.prev<s.catchLoc)return o(s.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return o(s.finallyLoc)}}}},abrupt:function(t,e){for(var o=this.tryEntries.length-1;o>=0;--o){var n=this.tryEntries[o];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var s=n;break}}s&&("break"===t||"continue"===t)&&s.tryLoc<=e&&e<=s.finallyLoc&&(s=null);var a=s?s.completion:{};return a.type=t,a.arg=e,s?(this.method="next",this.next=s.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var o=r.completion;if("throw"===o.type){var n=o.arg;C(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}function a(t,e,r,o,n,s,a){try{var i=t[s](a),c=i.value}catch(t){return void r(t)}i.done?e(c):Promise.resolve(c).then(o,n)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(o,n){var s=t.apply(e,r);function i(t){a(s,o,n,i,c,"next",t)}function c(t){a(s,o,n,i,c,"throw",t)}i(void 0)}))}}var c={middleware:["auth","check-permissions"],metaInfo:function(){return{title:this.$t("setup.vat_rates.edit.page_title")}},data:function(){return{breadcrumbsCurrent:"setup.vat_rates.edit.breadcrumbs_current",breadcrumbs:[{name:"setup.vat_rates.edit.breadcrumbs_first",url:"home"},{name:"setup.vat_rates.edit.breadcrumbs_second",url:"setup.index"},{name:"setup.vat_rates.edit.breadcrumbs_third",url:"vatRates.index"},{name:"setup.vat_rates.edit.breadcrumbs_active",url:""}],form:new o.a({name:"",note:"",code:"",rate:"",status:1}),loading:!0}},mounted:function(){this.getVATRate()},methods:{getVATRate:function(){var t=this;return i(s().mark((function e(){var r,o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.form.get(window.location.origin+"/api/vat-rates/"+t.$route.params.slug);case 2:r=e.sent,o=r.data,t.form.name=o.data.name,t.form.code=o.data.code,t.form.rate=o.data.rate,t.form.note=o.data.note,t.form.status=o.data.status;case 9:case"end":return e.stop()}}),e)})))()},updateVATRate:function(){var t=this;return i(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.form.patch(window.location.origin+"/api/vat-rates/"+t.$route.params.slug).then((function(e){toast.fire({type:"success",title:t.$t("setup.vat_rates.edit.success_msg")}),t.$router.push({name:"vatRates.index"})})).catch((function(){toast.fire({type:"error",title:t.$t("common.error_msg")})}));case 2:case"end":return e.stop()}}),e)})))()}}},u=r(1),l=Object(u.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("breadcrumbs",{attrs:{items:t.breadcrumbs,current:t.breadcrumbsCurrent}}),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[r("h3",{staticClass:"card-title"},[t._v("\n            "+t._s(t.$t("setup.vat_rates.edit.form_title"))+"\n          ")]),t._v(" "),r("router-link",{staticClass:"btn btn-dark float-right",attrs:{to:{name:"vatRates.index"}}},[r("i",{staticClass:"fas fa-long-arrow-alt-left"}),t._v(" "+t._s(t.$t("common.back"))+"\n          ")])],1),t._v(" "),r("form",{attrs:{role:"form"},on:{submit:function(e){return e.preventDefault(),t.updateVATRate.apply(null,arguments)},keydown:function(e){return t.form.onKeydown(e)}}},[r("div",{staticClass:"card-body"},[r("div",{staticClass:"row"},[r("div",{staticClass:"form-group col-md-6"},[r("label",{attrs:{for:"name"}},[t._v(t._s(t.$t("common.name"))+"\n                  "),r("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("name")},attrs:{id:"name",type:"text",name:"name",placeholder:t.$t("common.name_placeholder")},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"name"}})],1),t._v(" "),r("div",{staticClass:"form-group col-md-6"},[r("label",{attrs:{for:"code"}},[t._v(t._s(t.$t("setup.common.sort_code"))+"\n                  "),r("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.code,expression:"form.code"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("code")},attrs:{id:"code",type:"text",name:"code",placeholder:t.$t("common.code_placeholder")},domProps:{value:t.form.code},on:{input:function(e){e.target.composing||t.$set(t.form,"code",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"code"}})],1)]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"form-group col-md-6"},[r("label",{attrs:{for:"rate"}},[t._v(t._s(t.$t("setup.vat_rates.common.rate_in_percent"))+"\n                  "),r("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.rate,expression:"form.rate"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("rate")},attrs:{id:"rate",type:"number",name:"rate",placeholder:t.$t("setup.vat_rates.common.rate_palceholder")},domProps:{value:t.form.rate},on:{input:function(e){e.target.composing||t.$set(t.form,"rate",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"rate"}})],1),t._v(" "),r("div",{staticClass:"form-group col-md-6"},[r("label",{attrs:{for:"status"}},[t._v(t._s(t.$t("common.status")))]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.form.status,expression:"form.status"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("status")},attrs:{id:"status"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"status",e.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"1"}},[t._v(t._s(t.$t("common.active")))]),t._v(" "),r("option",{attrs:{value:"0"}},[t._v(t._s(t.$t("common.in_active")))])]),t._v(" "),r("has-error",{attrs:{form:t.form,field:"status"}})],1)]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"form-group col-md-12"},[r("label",{attrs:{for:"note"}},[t._v(t._s(t.$t("common.note")))]),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.note,expression:"form.note"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("note")},attrs:{id:"note",placeholder:t.$t("common.note_placeholder")},domProps:{value:t.form.note},on:{input:function(e){e.target.composing||t.$set(t.form,"note",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"note"}})],1)])]),t._v(" "),r("div",{staticClass:"card-footer"},[r("v-button",{staticClass:"btn btn-primary",attrs:{loading:t.form.busy}},[r("i",{staticClass:"fas fa-edit"}),t._v(" Save changes\n            ")]),t._v(" "),r("button",{staticClass:"btn btn-secondary float-right",attrs:{type:"reset"},on:{click:function(e){return t.form.reset()}}},[r("i",{staticClass:"fas fa-power-off"}),t._v(" Reset\n            ")])],1)])])])])],1)}),[],!1,null,null,null);e.default=l.exports}}]);