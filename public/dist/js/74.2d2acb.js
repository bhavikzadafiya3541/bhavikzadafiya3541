/*! For license information please see 74.2d2acb.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{388:function(e,t,r){"use strict";r.r(t);var o=r(3),s=r(4);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(){n=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},s="function"==typeof Symbol?Symbol:{},i=s.iterator||"@@iterator",l=s.asyncIterator||"@@asyncIterator",c=s.toStringTag||"@@toStringTag";function m(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{m({},"")}catch(e){m=function(e,t,r){return e[t]=r}}function u(e,t,r,s){var a=t&&t.prototype instanceof p?t:p,n=Object.create(a.prototype),i=new D(s||[]);return o(n,"_invoke",{value:C(e,r,i)}),n}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var d={};function p(){}function v(){}function h(){}var g={};m(g,i,(function(){return this}));var y=Object.getPrototypeOf,_=y&&y(y(L([])));_&&_!==t&&r.call(_,i)&&(g=_);var b=h.prototype=p.prototype=Object.create(g);function w(e){["next","throw","return"].forEach((function(t){m(e,t,(function(e){return this._invoke(t,e)}))}))}function $(e,t){var s;o(this,"_invoke",{value:function(o,n){function i(){return new t((function(s,i){!function o(s,n,i,l){var c=f(e[s],e,n);if("throw"!==c.type){var m=c.arg,u=m.value;return u&&"object"==a(u)&&r.call(u,"__await")?t.resolve(u.__await).then((function(e){o("next",e,i,l)}),(function(e){o("throw",e,i,l)})):t.resolve(u).then((function(e){m.value=e,i(m)}),(function(e){return o("throw",e,i,l)}))}l(c.arg)}(o,n,s,i)}))}return s=s?s.then(i,i):i()}})}function C(e,t,r){var o="suspendedStart";return function(s,a){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===s)throw a;return P()}for(r.method=s,r.arg=a;;){var n=r.delegate;if(n){var i=j(n,r);if(i){if(i===d)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===o)throw o="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o="executing";var l=f(e,t,r);if("normal"===l.type){if(o=r.done?"completed":"suspendedYield",l.arg===d)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o="completed",r.method="throw",r.arg=l.arg)}}}function j(e,t){var r=t.method,o=e.iterator[r];if(void 0===o)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,j(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var s=f(o,e.iterator,t.arg);if("throw"===s.type)return t.method="throw",t.arg=s.arg,t.delegate=null,d;var a=s.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function D(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function L(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,s=function t(){for(;++o<e.length;)if(r.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=void 0,t.done=!0,t};return s.next=s}}return{next:P}}function P(){return{value:void 0,done:!0}}return v.prototype=h,o(b,"constructor",{value:h,configurable:!0}),o(h,"constructor",{value:v,configurable:!0}),v.displayName=m(h,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,m(e,c,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},w($.prototype),m($.prototype,l,(function(){return this})),e.AsyncIterator=$,e.async=function(t,r,o,s,a){void 0===a&&(a=Promise);var n=new $(u(t,r,o,s),a);return e.isGeneratorFunction(r)?n:n.next().then((function(e){return e.done?e.value:n.next()}))},w(b),m(b,c,"Generator"),m(b,i,(function(){return this})),m(b,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var o in t)r.push(o);return r.reverse(),function e(){for(;r.length;){var o=r.pop();if(o in t)return e.value=o,e.done=!1,e}return e.done=!0,e}},e.values=L,D.prototype={constructor:D,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function o(r,o){return n.type="throw",n.arg=e,t.next=r,o&&(t.method="next",t.arg=void 0),!!o}for(var s=this.tryEntries.length-1;s>=0;--s){var a=this.tryEntries[s],n=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var i=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(i&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(i){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var o=this.tryEntries.length-1;o>=0;--o){var s=this.tryEntries[o];if(s.tryLoc<=this.prev&&r.call(s,"finallyLoc")&&this.prev<s.finallyLoc){var a=s;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var n=a?a.completion:{};return n.type=e,n.arg=t,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(n)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var o=r.completion;if("throw"===o.type){var s=o.arg;O(r)}return s}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:L(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},e}function i(e,t,r,o,s,a,n){try{var i=e[a](n),l=i.value}catch(e){return void r(e)}i.done?t(l):Promise.resolve(l).then(o,s)}function l(e){return function(){var t=this,r=arguments;return new Promise((function(o,s){var a=e.apply(t,r);function n(e){i(a,o,s,n,l,"next",e)}function l(e){i(a,o,s,n,l,"throw",e)}n(void 0)}))}}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function m(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!==a(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===a(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u={middleware:["auth","check-permissions"],metaInfo:function(){return{title:this.$t("employees.list.create.page_title")}},data:function(){return{breadcrumbsCurrent:"employees.list.create.breadcrumbs_current",breadcrumbs:[{name:"employees.list.create.breadcrumbs_first",url:"home"},{name:"employees.list.create.breadcrumbs_second",url:"employees.index"},{name:"employees.list.create.breadcrumbs_active",url:""}],url:null,form:new s.a({employeeName:"",department:"",designation:"",salary:"",commission:"",mobileNumber:"",gender:"",birthDate:"",bloodGroup:"",religion:"",appointmentDate:"",joiningDate:"",address:"",status:1,image:"",allowLogin:!1,email:"",password:"",role:""}),options:[],roles:""}},computed:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},Object(o.b)("operations",["items"])),created:function(){this.getDepartments(),this.getRoles()},methods:{getDepartments:function(){var e=this;return l(n().mark((function t(){return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("operations/allData",{path:"/api/all-departments"});case 2:case"end":return t.stop()}}),t)})))()},getRoles:function(){var e=this;return l(n().mark((function t(){var r,o;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.form.get(window.location.origin+"/api/all-roles");case 2:r=t.sent,o=r.data,e.roles=o.data;case 5:case"end":return t.stop()}}),t)})))()},onFileChange:function(e){var t=this,r=e.target.files[0],o=new FileReader;r.size<2111775&&("image/jpeg"===r.type||"image/png"===r.type||"image/gif"===r.type)?(o.onloadend=function(e){t.form.image=o.result},o.readAsDataURL(r),this.url=URL.createObjectURL(r)):Swal.fire(this.$t("common.error"),this.$t("common.image_error"),"error")},saveEmployee:function(){var e=this;return l(n().mark((function t(){return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.form.post(window.location.origin+"/api/employees").then((function(){toast.fire({type:"success",title:e.$t("employees.list.create.success_msg")}),e.$router.push({name:"employees.index"})})).catch((function(){toast.fire({type:"error",title:e.$t("common.error_msg")})}));case 2:case"end":return t.stop()}}),t)})))()}}},f=r(1),d=Object(f.a)(u,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("breadcrumbs",{attrs:{items:e.breadcrumbs,current:e.breadcrumbsCurrent}}),e._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-12"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[r("h3",{staticClass:"card-title"},[e._v("\n            "+e._s(e.$t("employees.list.create.form_title"))+"\n          ")]),e._v(" "),r("router-link",{staticClass:"btn btn-dark float-right",attrs:{to:{name:"employees.index"}}},[r("i",{staticClass:"fas fa-long-arrow-alt-left"}),e._v(" "+e._s(e.$t("common.back"))+"\n          ")])],1),e._v(" "),r("form",{attrs:{role:"form"},on:{submit:function(t){return t.preventDefault(),e.saveEmployee.apply(null,arguments)},keydown:function(t){return e.form.onKeydown(t)}}},[r("div",{staticClass:"card-body"},[r("div",{staticClass:"row"},[r("div",{staticClass:"form-group col-md-4"},[r("label",{attrs:{for:"employeeName"}},[e._v(e._s(e.$t("employees.common.employee_name"))+"\n                  "),r("span",{staticClass:"required"},[e._v("*")])]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.employeeName,expression:"form.employeeName"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("employeeName")},attrs:{id:"employeeName",type:"text",name:"employeeName",placeholder:e.$t("employees.common.employee_name_placeholder")},domProps:{value:e.form.employeeName},on:{input:function(t){t.target.composing||e.$set(e.form,"employeeName",t.target.value)}}}),e._v(" "),r("has-error",{attrs:{form:e.form,field:"employeeName"}})],1),e._v(" "),r("div",{staticClass:"form-group col-md-4"},[r("label",{attrs:{for:"department"}},[e._v(e._s(e.$t("common.department"))+"\n                  "),r("span",{staticClass:"required"},[e._v("*")])]),e._v(" "),e.items?r("v-select",{class:{"is-invalid":e.form.errors.has("department")},attrs:{options:e.items,label:"name",name:"department",placeholder:e.$t("common.department_placeholder")},model:{value:e.form.department,callback:function(t){e.$set(e.form,"department",t)},expression:"form.department"}}):e._e(),e._v(" "),r("has-error",{attrs:{form:e.form,field:"department"}})],1),e._v(" "),r("div",{staticClass:"form-group col-md-4"},[r("label",{attrs:{for:"designation"}},[e._v(e._s(e.$t("common.designation"))+"\n                  "),r("span",{staticClass:"required"},[e._v("*")])]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.designation,expression:"form.designation"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("designation")},attrs:{id:"designation",type:"text",name:"designation",placeholder:e.$t("common.designation_placeholder")},domProps:{value:e.form.designation},on:{input:function(t){t.target.composing||e.$set(e.form,"designation",t.target.value)}}}),e._v(" "),r("has-error",{attrs:{form:e.form,field:"designation"}})],1)]),e._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"form-group col-md-4"},[r("label",{attrs:{for:"mobileNumber"}},[e._v(e._s(e.$t("common.contact_number"))+"\n                  "),r("span",{staticClass:"required"},[e._v("*")])]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.mobileNumber,expression:"form.mobileNumber"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("mobileNumber")},attrs:{id:"mobileNumber",type:"text",name:"mobileNumber",placeholder:e.$t("common.contact_number_placeholder")},domProps:{value:e.form.mobileNumber},on:{input:function(t){t.target.composing||e.$set(e.form,"mobileNumber",t.target.value)}}}),e._v(" "),r("has-error",{attrs:{form:e.form,field:"mobileNumber"}})],1),e._v(" "),r("div",{staticClass:"form-group col-md-4"},[r("label",{attrs:{for:"salary"}},[e._v(e._s(e.$t("common.salary"))+"\n                  "),r("span",{staticClass:"required"},[e._v("*")])]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.salary,expression:"form.salary"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("salary")},attrs:{id:"salary",type:"number",name:"salary",placeholder:e.$t("common.salary_placeholder"),min:"0"},domProps:{value:e.form.salary},on:{input:function(t){t.target.composing||e.$set(e.form,"salary",t.target.value)}}}),e._v(" "),r("has-error",{attrs:{form:e.form,field:"salary"}})],1),e._v(" "),r("div",{staticClass:"form-group col-md-4"},[r("label",{attrs:{for:"commission"}},[e._v(e._s(e.$t("payroll.common.commission"))+"(%)\n                ")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.commission,expression:"form.commission"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("commission")},attrs:{id:"commission",type:"number",name:"commission",placeholder:e.$t("payroll.common.commission_placeholder"),max:"100"},domProps:{value:e.form.commission},on:{input:function(t){t.target.composing||e.$set(e.form,"commission",t.target.value)}}}),e._v(" "),r("has-error",{attrs:{form:e.form,field:"commission"}})],1)]),e._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"form-group col-md-3"},[r("label",{attrs:{for:"birthDate"}},[e._v(e._s(e.$t("employees.common.birth_date")))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.birthDate,expression:"form.birthDate"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("birthDate")},attrs:{id:"reabirthDateson",type:"date",name:"birthDate"},domProps:{value:e.form.birthDate},on:{input:function(t){t.target.composing||e.$set(e.form,"birthDate",t.target.value)}}}),e._v(" "),r("has-error",{attrs:{form:e.form,field:"birthDate"}})],1),e._v(" "),r("div",{staticClass:"form-group col-md-3"},[r("label",{attrs:{for:"gender"}},[e._v(e._s(e.$t("employees.common.gender"))+"\n                  "),r("span",{staticClass:"required"},[e._v("*")])]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.form.gender,expression:"form.gender"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("gender")},attrs:{name:"gender"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.form,"gender",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"",selected:"",disabled:""}},[e._v("\n                    "+e._s(e.$t("employees.common.gender_placeholder"))+"\n                  ")]),e._v(" "),r("option",{attrs:{value:"Male"}},[e._v("\n                    "+e._s(e.$t("employees.common.male"))+"\n                  ")]),e._v(" "),r("option",{attrs:{value:"Female"}},[e._v("\n                    "+e._s(e.$t("employees.common.female"))+"\n                  ")]),e._v(" "),r("option",{attrs:{value:"Transgender"}},[e._v("\n                    "+e._s(e.$t("employees.common.transgender"))+"\n                  ")]),e._v(" "),r("option",{attrs:{value:"Other"}},[e._v("\n                    "+e._s(e.$t("employees.common.other"))+"\n                  ")])]),e._v(" "),r("has-error",{attrs:{form:e.form,field:"gender"}})],1),e._v(" "),r("div",{staticClass:"form-group col-md-3"},[r("label",{attrs:{for:"bloodGroup"}},[e._v(e._s(e.$t("employees.common.blood_group")))]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.form.bloodGroup,expression:"form.bloodGroup"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("bloodGroup")},attrs:{name:"bloodGroup"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.form,"bloodGroup",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"",selected:"",disabled:""}},[e._v("\n                    "+e._s(e.$t("employees.common.blood_group_placeholder"))+"\n                  ")]),e._v(" "),r("option",{attrs:{value:"A+"}},[e._v("A+")]),e._v(" "),r("option",{attrs:{value:"A-"}},[e._v("A-")]),e._v(" "),r("option",{attrs:{value:"B+"}},[e._v("B+")]),e._v(" "),r("option",{attrs:{value:"B-"}},[e._v("B-")]),e._v(" "),r("option",{attrs:{value:"AB+"}},[e._v("AB+")]),e._v(" "),r("option",{attrs:{value:"AB-"}},[e._v("AB-")]),e._v(" "),r("option",{attrs:{value:"O+"}},[e._v("O+")]),e._v(" "),r("option",{attrs:{value:"O-"}},[e._v("O-")])]),e._v(" "),r("has-error",{attrs:{form:e.form,field:"bloodGroup"}})],1),e._v(" "),r("div",{staticClass:"form-group col-md-3"},[r("label",{attrs:{for:"religion"}},[e._v(e._s(e.$t("employees.common.religion")))]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.form.religion,expression:"form.religion"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("religion")},attrs:{name:"religion"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.form,"religion",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"",selected:"",disabled:""}},[e._v("\n                    "+e._s(e.$t("employees.common.religion_placeholder"))+"\n                  ")]),e._v(" "),r("option",{attrs:{value:"Islam"}},[e._v("\n                    "+e._s(e.$t("employees.common.islam"))+"\n                  ")]),e._v(" "),r("option",{attrs:{value:"Hinduism"}},[e._v("\n                    "+e._s(e.$t("employees.common.hinduism"))+"\n                  ")]),e._v(" "),r("option",{attrs:{value:"Buddhists"}},[e._v("\n                    "+e._s(e.$t("employees.common.buddhists"))+"\n                  ")]),e._v(" "),r("option",{attrs:{value:"Christians"}},[e._v("\n                    "+e._s(e.$t("employees.common.christians"))+"\n                  ")]),e._v(" "),r("option",{attrs:{value:"Animists"}},[e._v("\n                    "+e._s(e.$t("employees.common.animists"))+"\n                  ")]),e._v(" "),r("option",{attrs:{value:"Other"}},[e._v("\n                    "+e._s(e.$t("employees.common.other"))+"\n                  ")])]),e._v(" "),r("has-error",{attrs:{form:e.form,field:"religion"}})],1)]),e._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"form-group col-md-6"},[r("label",{attrs:{for:"appointmentDate"}},[e._v(e._s(e.$t("employees.common.appointment_date")))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.appointmentDate,expression:"form.appointmentDate"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("appointmentDate")},attrs:{id:"appointmentDate",type:"date",name:"appointmentDate"},domProps:{value:e.form.appointmentDate},on:{input:function(t){t.target.composing||e.$set(e.form,"appointmentDate",t.target.value)}}}),e._v(" "),r("has-error",{attrs:{form:e.form,field:"appointmentDate"}})],1),e._v(" "),r("div",{staticClass:"form-group col-md-6"},[r("label",{attrs:{for:"joiningDate"}},[e._v(e._s(e.$t("employees.common.join_date")))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.joiningDate,expression:"form.joiningDate"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("joiningDate")},attrs:{id:"joiningDate",type:"date",name:"joiningDate"},domProps:{value:e.form.joiningDate},on:{input:function(t){t.target.composing||e.$set(e.form,"joiningDate",t.target.value)}}}),e._v(" "),r("has-error",{attrs:{form:e.form,field:"joiningDate"}})],1)]),e._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"address"}},[e._v(e._s(e.$t("common.address")))]),e._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.form.address,expression:"form.address"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("note")},attrs:{id:"address",placeholder:e.$t("common.address_placeholder")},domProps:{value:e.form.address},on:{input:function(t){t.target.composing||e.$set(e.form,"address",t.target.value)}}}),e._v(" "),r("has-error",{attrs:{form:e.form,field:"address"}})],1),e._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"form-group col-md-6"},[r("label",{attrs:{for:"status"}},[e._v(e._s(e.$t("common.status")))]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.form.status,expression:"form.status"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("status")},attrs:{id:"status"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.form,"status",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"1"}},[e._v(e._s(e.$t("common.active")))]),e._v(" "),r("option",{attrs:{value:"0"}},[e._v(e._s(e.$t("common.in_active")))])]),e._v(" "),r("has-error",{attrs:{form:e.form,field:"status"}})],1),e._v(" "),r("div",{staticClass:"form-group col-md-6"},[r("label",{attrs:{for:"image"}},[e._v(e._s(e.$t("common.profile_picture")))]),e._v(" "),r("div",{staticClass:"custom-file"},[r("input",{staticClass:"custom-file-input",class:{"is-invalid":e.form.errors.has("image")},attrs:{id:"image",type:"file",name:"image"},on:{change:e.onFileChange}}),e._v(" "),r("label",{staticClass:"custom-file-label",attrs:{for:"image"}},[e._v(e._s(e.$t("common.choose_file")))])]),e._v(" "),r("has-error",{attrs:{form:e.form,field:"image"}}),e._v(" "),r("div",{staticClass:"bg-light mt-4 w-25"},[e.url?r("img",{staticClass:"img-fluid",attrs:{src:e.url,alt:e.$t("common.image_alt")}}):e._e()])],1)]),e._v(" "),r("div",{staticClass:"form-check"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.allowLogin,expression:"form.allowLogin"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"allowLogin"},domProps:{checked:Array.isArray(e.form.allowLogin)?e._i(e.form.allowLogin,null)>-1:e.form.allowLogin},on:{change:function(t){var r=e.form.allowLogin,o=t.target,s=!!o.checked;if(Array.isArray(r)){var a=e._i(r,null);o.checked?a<0&&e.$set(e.form,"allowLogin",r.concat([null])):a>-1&&e.$set(e.form,"allowLogin",r.slice(0,a).concat(r.slice(a+1)))}else e.$set(e.form,"allowLogin",s)}}}),e._v(" "),r("label",{staticClass:"form-check-label",attrs:{for:"allowLogin"}},[e._v(e._s(e.$t("employees.common.allow_login")))])]),e._v(" "),e.form.allowLogin?r("div",{staticClass:"row mt-3"},[r("div",{staticClass:"form-group col-md-4"},[r("label",{attrs:{for:"email"}},[e._v(e._s(e.$t("common.email"))+"\n                  "),r("span",{staticClass:"required"},[e._v("*")])]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("email")},attrs:{id:"email",type:"email",name:"email",placeholder:e.$t("common.email_placeholder")},domProps:{value:e.form.email},on:{input:function(t){t.target.composing||e.$set(e.form,"email",t.target.value)}}}),e._v(" "),r("has-error",{attrs:{form:e.form,field:"email"}})],1),e._v(" "),r("div",{staticClass:"form-group col-md-4"},[r("label",{attrs:{for:"password"}},[e._v(e._s(e.$t("common.password"))+"\n                  "),r("span",{staticClass:"required"},[e._v("*")])]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("password")},attrs:{id:"password",type:"password",name:"password",placeholder:e.$t("common.password_placeholder")},domProps:{value:e.form.password},on:{input:function(t){t.target.composing||e.$set(e.form,"password",t.target.value)}}}),e._v(" "),r("has-error",{attrs:{form:e.form,field:"password"}})],1),e._v(" "),r("div",{staticClass:"form-group col-md-4"},[r("label",{attrs:{for:"role"}},[e._v(e._s(e.$t("common.role"))),r("span",{staticClass:"required"},[e._v("*")])]),e._v(" "),e.roles?r("v-select",{class:{"is-invalid":e.form.errors.has("role")},attrs:{options:e.roles,label:"name",name:"role",placeholder:e.$t("common.role_placeholder")},model:{value:e.form.role,callback:function(t){e.$set(e.form,"role",t)},expression:"form.role"}}):e._e(),e._v(" "),r("has-error",{attrs:{form:e.form,field:"role"}})],1)]):e._e()]),e._v(" "),r("div",{staticClass:"card-footer"},[r("v-button",{staticClass:"btn btn-primary",attrs:{loading:e.form.busy}},[r("i",{staticClass:"fas fa-save"}),e._v(" "+e._s(e.$t("common.save"))+"\n            ")]),e._v(" "),r("button",{staticClass:"btn btn-secondary float-right",attrs:{type:"reset"},on:{click:function(t){return e.form.reset()}}},[r("i",{staticClass:"fas fa-power-off"}),e._v(" "+e._s(e.$t("common.reset"))+"\n            ")])],1)])])])])],1)}),[],!1,null,null,null);t.default=d.exports},4:function(e,t,r){"use strict";var o=r(7),s=r.n(o),a=Object.defineProperty,n=Object.prototype.hasOwnProperty,i=Object.getOwnPropertySymbols,l=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))n.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))l.call(t,r)&&c(e,r,t[r]);return e};const u=e=>void 0===e,f=e=>Array.isArray(e),d=e=>e&&"number"==typeof e.size&&"string"==typeof e.type&&"function"==typeof e.slice,p=(e,t,r,o)=>((t=t||{}).indices=!u(t.indices)&&t.indices,t.nullsAsUndefineds=!u(t.nullsAsUndefineds)&&t.nullsAsUndefineds,t.booleansAsIntegers=!u(t.booleansAsIntegers)&&t.booleansAsIntegers,t.allowEmptyArrays=!u(t.allowEmptyArrays)&&t.allowEmptyArrays,r=r||new FormData,u(e)||(null===e?t.nullsAsUndefineds||r.append(o,""):(e=>"boolean"==typeof e)(e)?t.booleansAsIntegers?r.append(o,e?1:0):r.append(o,e):f(e)?e.length?e.forEach((e,s)=>{const a=o+"["+(t.indices?s:"")+"]";p(e,t,r,a)}):t.allowEmptyArrays&&r.append(o+"[]",""):(e=>e instanceof Date)(e)?r.append(o,e.toISOString()):!(e=>e===Object(e))(e)||(e=>d(e)&&"string"==typeof e.name&&("object"==typeof e.lastModifiedDate||"number"==typeof e.lastModified))(e)||d(e)?r.append(o,e):Object.keys(e).forEach(s=>{const a=e[s];if(f(a))for(;s.length>2&&s.lastIndexOf("[]")===s.length-2;)s=s.substring(0,s.length-2);p(a,t,r,o?o+"["+s+"]":s)})),r);var v={serialize:p};function h(e){if(null===e||"object"!=typeof e)return e;const t=Array.isArray(e)?[]:{};return Object.keys(e).forEach(r=>{t[r]=h(e[r])}),t}function g(e){return Array.isArray(e)?e:[e]}class y{constructor(){this.errors={},this.errors={}}set(e,t){"object"==typeof e?this.errors=e:this.set(m(m({},this.errors),{[e]:g(t)}))}all(){return this.errors}has(e){return Object.prototype.hasOwnProperty.call(this.errors,e)}hasAny(...e){return e.some(e=>this.has(e))}any(){return Object.keys(this.errors).length>0}get(e){if(this.has(e))return this.getAll(e)[0]}getAll(e){return g(this.errors[e]||[])}only(...e){const t=[];return e.forEach(e=>{const r=this.get(e);r&&t.push(r)}),t}flatten(){return Object.values(this.errors).reduce((e,t)=>e.concat(t),[])}clear(e){const t={};e&&Object.keys(this.errors).forEach(r=>{r!==e&&(t[r]=this.errors[r])}),this.set(t)}}class _{constructor(e={}){this.originalData={},this.busy=!1,this.successful=!1,this.recentlySuccessful=!1,this.recentlySuccessfulTimeoutId=void 0,this.errors=new y,this.progress=void 0,this.update(e)}static make(e){return new this(e)}update(e){this.originalData=Object.assign({},this.originalData,h(e)),Object.assign(this,e)}fill(e={}){this.keys().forEach(t=>{this[t]=e[t]})}data(){return this.keys().reduce((e,t)=>m(m({},e),{[t]:this[t]}),{})}keys(){return Object.keys(this).filter(e=>!_.ignore.includes(e))}startProcessing(){this.errors.clear(),this.busy=!0,this.successful=!1,this.progress=void 0,this.recentlySuccessful=!1,clearTimeout(this.recentlySuccessfulTimeoutId)}finishProcessing(){this.busy=!1,this.successful=!0,this.progress=void 0,this.recentlySuccessful=!0,this.recentlySuccessfulTimeoutId=setTimeout(()=>{this.recentlySuccessful=!1},_.recentlySuccessfulTimeout)}clear(){this.errors.clear(),this.successful=!1,this.recentlySuccessful=!1,this.progress=void 0,clearTimeout(this.recentlySuccessfulTimeoutId)}reset(){Object.keys(this).filter(e=>!_.ignore.includes(e)).forEach(e=>{this[e]=h(this.originalData[e])})}get(e,t={}){return this.submit("get",e,t)}post(e,t={}){return this.submit("post",e,t)}patch(e,t={}){return this.submit("patch",e,t)}put(e,t={}){return this.submit("put",e,t)}delete(e,t={}){return this.submit("delete",e,t)}submit(e,t,r={}){return this.startProcessing(),r=m({data:{},params:{},url:this.route(t),method:e,onUploadProgress:this.handleUploadProgress.bind(this)},r),"get"===e.toLowerCase()?r.params=m(m({},this.data()),r.params):(r.data=m(m({},this.data()),r.data),function e(t){return t instanceof File||t instanceof Blob||t instanceof FileList||"object"==typeof t&&null!==t&&void 0!==Object.values(t).find(t=>e(t))}(r.data)&&!r.transformRequest&&(r.transformRequest=[e=>v.serialize(e)])),new Promise((e,t)=>{(_.axios||s.a).request(r).then(t=>{this.finishProcessing(),e(t)}).catch(e=>{this.handleErrors(e),t(e)})})}handleErrors(e){this.busy=!1,this.progress=void 0,e.response&&this.errors.set(this.extractErrors(e.response))}extractErrors(e){return e.data&&"object"==typeof e.data?e.data.errors?m({},e.data.errors):e.data.message?{error:e.data.message}:m({},e.data):{error:_.errorMessage}}handleUploadProgress(e){this.progress={total:e.total,loaded:e.loaded,percentage:Math.round(100*e.loaded/e.total)}}route(e,t={}){let r=e;return Object.prototype.hasOwnProperty.call(_.routes,e)&&(r=decodeURI(_.routes[e])),"object"!=typeof t&&(t={id:t}),Object.keys(t).forEach(e=>{r=r.replace(`{${e}}`,t[e])}),r}onKeydown(e){const t=e.target;t.name&&this.errors.clear(t.name)}}_.routes={},_.errorMessage="Something went wrong. Please try again.",_.recentlySuccessfulTimeout=2e3,_.ignore=["busy","successful","errors","progress","originalData","recentlySuccessful","recentlySuccessfulTimeoutId"],t.a=_}}]);