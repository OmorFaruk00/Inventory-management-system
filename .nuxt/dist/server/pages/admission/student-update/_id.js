exports.ids = [18];
exports.modules = {

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admission/student-update/_id.vue?vue&type=template&id=467f34ce&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"card mx-auto\" data-v-467f34ce>","</div>",[_vm._ssrNode("<div class=\"card-header\" data-v-467f34ce><div class=\"row\" data-v-467f34ce><div class=\"col\" data-v-467f34ce>Admission In Active Batch Create</div></div></div> "),_vm._ssrNode("<div class=\"card-body\" data-v-467f34ce>","</div>",[_vm._ssrNode("<div id=\"vue_app\" data-v-467f34ce>","</div>",[_vm._ssrNode("<div id=\"progrss-wizard\" class=\"twitter-bs-wizard\" data-v-467f34ce>","</div>",[_vm._ssrNode("<ul class=\"twitter-bs-wizard-nav nav-justified\" data-v-467f34ce><li class=\"nav-item d-none\" data-v-467f34ce><a class=\"nav-link\" data-v-467f34ce></a></li> "+((_vm.generalStep)?("<li class=\"nav-item\" data-v-467f34ce><a"+(_vm._ssrClass("nav-link",_vm.generalStep ? 'active' : ''))+" data-v-467f34ce><span class=\"step-number mr-2\" data-v-467f34ce>01.</span> General\n                            </a></li>"):"<!---->")+" "+((_vm.personalStep)?("<li class=\"nav-item\" data-v-467f34ce><a class=\"nav-link\" data-v-467f34ce><span class=\"step-number mr-2\" data-v-467f34ce>02.</span> Personal\n                            </a></li>"):"<!---->")+" "+((_vm.familyStep)?("<li class=\"nav-item\" data-v-467f34ce><a"+(_vm._ssrClass("nav-link",_vm.familyStep ? 'active' : ''))+" data-v-467f34ce><span class=\"step-number mr-2\" data-v-467f34ce>03.</span> Family\n                            </a></li>"):"<!---->")+" "+((_vm.educationStep)?("<li class=\"nav-item\" data-v-467f34ce><a"+(_vm._ssrClass("nav-link",_vm.educationStep ? 'active' : ''))+" data-v-467f34ce><span class=\"step-number mr-2\" data-v-467f34ce>04.</span> Education\n                            </a></li>"):"<!---->")+" "+((_vm.othersStep)?("<li class=\"nav-item\" data-v-467f34ce><a"+(_vm._ssrClass("nav-link",_vm.othersStep ? 'active' : ''))+" data-v-467f34ce><span class=\"step-number mr-2\" data-v-467f34ce>05.</span> Others\n                            </a></li>"):"<!---->")+"</ul> "),_vm._ssrNode("<div class=\"mt-3\" data-v-467f34ce>","</div>",[_vm._ssrNode("<div class=\"tab-content twitter-bs-wizard-tab-content\" data-v-467f34ce>","</div>",[_vm._ssrNode("<div"+(_vm._ssrClass("tab-pane",_vm.generalStep ? 'active' : ''))+" data-v-467f34ce>","</div>",[_vm._ssrNode("<div class=\"form-group row\" data-v-467f34ce>","</div>",[_vm._ssrNode("<label class=\"col-md-3 col-form-label\" data-v-467f34ce>Department <span class=\"text-danger\" data-v-467f34ce>*</span></label> "),_vm._ssrNode("<div class=\"col-md-9 mt-10\" data-v-467f34ce>","</div>",[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.student.department_id),expression:"student.department_id"}],staticClass:"form-control",attrs:{"name":"department_id","id":"department_id","required":""},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.student, "department_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0])},_vm.fetchBatch]}},[_c('option',{attrs:{"value":"","disabled":"","selected":""}},[_vm._v("Select Department")]),_vm._v(" "),_vm._l((_vm.departments),function(department,index){return _c('option',{key:index,attrs:{"disable":""},domProps:{"value":department.id,"textContent":_vm._s(department.department_name)}})})],2),_vm._ssrNode(" "+((_vm.errors.department_id)?("<small class=\"text-danger with-errors\" data-v-467f34ce>"+(_vm._s(_vm.errors.department_id[0]))+"</small>"):"<!---->"))],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"form-group row\" data-v-467f34ce>","</div>",[_vm._ssrNode("<label class=\"col-md-3 col-form-label\" data-v-467f34ce>Batch <span class=\"text-danger\" data-v-467f34ce>*</span></label> "),_vm._ssrNode("<div class=\"col-md-9 mt-10\" data-v-467f34ce>","</div>",[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.student.batch_id),expression:"student.batch_id"}],staticClass:"form-control",attrs:{"required":""},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.student, "batch_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0])},_vm.fetchShiftGroup]}},[_c('option',{attrs:{"disabled":"","selected":"","value":""}},[_vm._v("Select Batch")]),_vm._v(" "),_vm._l((_vm.batches),function(batch){return _c('option',{key:batch.id,domProps:{"value":batch.id,"textContent":_vm._s(batch.batch_name)}})})],2),_vm._ssrNode(" "+((_vm.errors.batch_id)?("<small class=\"text-danger with-errors\" data-v-467f34ce>"+(_vm._s(_vm.errors.batch_id[0]))+"</small>"):"<!---->"))],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"form-group row\" data-v-467f34ce>","</div>",[_vm._ssrNode("<label class=\"col-md-3 col-form-label\" data-v-467f34ce>Shift <span class=\"text-danger\" data-v-467f34ce>*</span></label> "),_vm._ssrNode("<div class=\"col-md-9 mt-10\" data-v-467f34ce>","</div>",[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.student.shift_id),expression:"student.shift_id"}],staticClass:"form-control",attrs:{"name":"shift_id","id":"shift_id","required":""},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.student, "shift_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"value":"","disabled":"","selected":""}},[_vm._v("Select Shift")]),_vm._v(" "),_vm._l((_vm.shifts),function(shift,index){return _c('option',{key:index,domProps:{"value":shift.id,"innerHTML":_vm._s(shift.shift)}})})],2),_vm._ssrNode(" "+((_vm.errors.shift_id)?("<small class=\"text-danger with-errors\" data-v-467f34ce>"+(_vm._s(_vm.errors.shift_id[0]))+"</small>"):"<!---->"))],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"form-group row\" data-v-467f34ce>","</div>",[_vm._ssrNode("<label class=\"col-md-3 col-form-label\" data-v-467f34ce>Group <span class=\"text-danger\" data-v-467f34ce>*</span></label> "),_vm._ssrNode("<div class=\"col-md-9 mt-10\" data-v-467f34ce>","</div>",[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.student.group_id),expression:"student.group_id"}],staticClass:"form-control",attrs:{"name":"group_id","id":"group_id","required":""},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.student, "group_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"value":"","disabled":"","selected":""}},[_vm._v("Select Group")]),_vm._v(" "),_vm._l((_vm.groups),function(group,index){return _c('option',{key:index,domProps:{"value":group.id,"innerHTML":_vm._s(group.group)}})})],2),_vm._ssrNode(" "+((_vm.errors.group_id)?("<small class=\"text-danger with-errors\" data-v-467f34ce>"+(_vm._s(_vm.errors.group_id[0]))+"</small>"):"<!---->"))],2)],2),_vm._ssrNode(" <div class=\"form-group row\" data-v-467f34ce><label class=\"col-md-3 col-form-label\" data-v-467f34ce>Roll No<span class=\"text-danger\" data-v-467f34ce>*</span></label> <div class=\"col-md-9 mt-10\" data-v-467f34ce><input type=\"text\" placeholder=\"Enter Roll Number\""+(_vm._ssrAttr("value",(_vm.student.roll_no)))+" class=\"form-control\" data-v-467f34ce> "+((_vm.errors.roll_no)?("<small class=\"text-danger with-errors\" data-v-467f34ce>"+(_vm._s(_vm.errors.roll_no[0]))+"</small>"):"<!---->")+"</div></div> <div class=\"form-group row\" data-v-467f34ce><label class=\"col-md-3 col-form-label\" data-v-467f34ce>REG No<span class=\"text-danger\" data-v-467f34ce>*</span></label> <div class=\"col-md-9 mt-10\" data-v-467f34ce><input type=\"text\" placeholder=\"Enter Reg Number\""+(_vm._ssrAttr("value",(_vm.student.reg_code)))+" class=\"form-control\" data-v-467f34ce> "+((_vm.errors.reg_code)?("<small class=\"text-danger with-errors\" data-v-467f34ce>"+(_vm._s(_vm.errors.reg_code[0]))+"</small>"):"<!---->")+"</div></div> <div class=\"form-group row\" data-v-467f34ce><label class=\"col-md-3 col-form-label\" data-v-467f34ce>Admission Form Sl\n                                        <span class=\"text-danger\" data-v-467f34ce>*</span></label> <div class=\"col-md-9 mt-10\" data-v-467f34ce><input name=\"adm_frm_sl\" placeholder=\"Enter Admission Form Sl No\" required=\"required\""+(_vm._ssrAttr("value",(_vm.student.adm_frm_sl)))+" class=\"form-control\" data-v-467f34ce> "+((_vm.errors.adm_frm_sl)?("<small class=\"text-danger with-errors\" data-v-467f34ce>"+(_vm._s(_vm.errors.adm_frm_sl[0]))+"</small>"):"<!---->")+"</div></div> <ul class=\"pager wizard twitter-bs-wizard-pager-link text-right\" data-v-467f34ce><button type=\"button\" class=\"btn btn-success\" data-v-467f34ce>\n                                        Next\n                                    </button></ul>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div"+(_vm._ssrClass("tab-pane",_vm.personalStep ? 'active' : ''))+" data-v-467f34ce>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-467f34ce>","</div>",[_vm._ssrNode("<div class=\"col-lg-4 col-md-6 col-sm-12\" data-v-467f34ce><div class=\"form-group\" data-v-467f34ce><label for=\"student_name\" data-v-467f34ce>Student Name\n                                                <span class=\"text-danger\" data-v-467f34ce>*</span></label> <input id=\"student_name\" type=\"text\" placeholder=\"Enter student name\" required=\"required\""+(_vm._ssrAttr("value",(_vm.student.student_name)))+" class=\"form-control\" data-v-467f34ce> "+((_vm.errors.student_name)?("<small class=\"text-danger with-errors\" data-v-467f34ce>"+(_vm._s(_vm.errors.student_name[0]))+"</small>"):"<!---->")+"</div></div> "),_vm._ssrNode("<div class=\"col-lg-4 col-md-6 col-sm-12\" data-v-467f34ce>","</div>",[_vm._ssrNode("<div class=\"form-group\" data-v-467f34ce>","</div>",[_vm._ssrNode("<label for=\"blood_group\" data-v-467f34ce>Blood Group <span class=\"text-danger\" data-v-467f34ce>*</span></label> "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.student.blood_group),expression:"student.blood_group"}],staticClass:"form-control",attrs:{"name":"blood_group","id":"blood_group","required":""},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.student, "blood_group", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},_vm._l((_vm.bloods),function(blood,index){return _c('option',{key:index,domProps:{"value":blood.value,"textContent":_vm._s(blood.text)}})}),0),_vm._ssrNode(" "+((_vm.errors.blood_group)?("<small class=\"text-danger with-errors\" data-v-467f34ce>"+(_vm._s(_vm.errors.blood_group[0]))+"</small>"):"<!---->"))],2)]),_vm._ssrNode(" <div class=\"col-lg-4 col-md-6 col-sm-12\" data-v-467f34ce><div class=\"form-group\" data-v-467f34ce><label for=\"email\" data-v-467f34ce>Email (Student Personal Email)\n                                                <span class=\"text-danger\" data-v-467f34ce>*</span></label> <input id=\"email\" type=\"email\" placeholder=\"Enter email address\""+(_vm._ssrAttr("value",(_vm.student.email)))+" class=\"form-control\" data-v-467f34ce> "+((_vm.errors.email)?("<small class=\"text-danger with-errors\" data-v-467f34ce>"+(_vm._s(_vm.errors.email[0]))+"</small>"):"<!---->")+"</div></div> <div class=\"col-lg-4 col-md-6 col-sm-12\" data-v-467f34ce><div class=\"form-group\" data-v-467f34ce><label for=\"phone_no\" data-v-467f34ce>Student Mobile Number\n                                                <span class=\"text-danger\" data-v-467f34ce>*</span></label> <input id=\"phone_no\" type=\"number\" placeholder=\"Enter phone no\" required=\"required\""+(_vm._ssrAttr("value",(_vm.student.phone_no)))+" class=\"form-control\" data-v-467f34ce> "+((_vm.errors.phone_no)?("<small class=\"text-danger with-errors\" data-v-467f34ce>"+(_vm._s(_vm.errors.phone_no[0]))+"</small>"):"<!---->")+"</div></div> "),_vm._ssrNode("<div class=\"col-lg-4 col-md-6 col-sm-12\" data-v-467f34ce>","</div>",[_vm._ssrNode("<div class=\"form-group\" data-v-467f34ce>","</div>",[_vm._ssrNode("<label for=\"religion\" data-v-467f34ce>Religion <span class=\"text-danger\" data-v-467f34ce>*</span></label> "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.student.religion_id),expression:"student.religion_id"}],staticClass:"form-control",attrs:{"name":"religion_id","id":"religion_id"},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.student, "religion_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"value":"","disabled":"","selected":""}},[_vm._v("Select Religion")]),_vm._v(" "),_c('option',{attrs:{"value":"1"}},[_vm._v("Islam")])]),_vm._ssrNode(" "+((_vm.errors.religion_id)?("<small class=\"text-danger with-errors\" data-v-467f34ce>"+(_vm._s(_vm.errors.religion_id[0]))+"</small>"):"<!---->"))],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-lg-4 col-md-6 col-sm-12\" data-v-467f34ce>","</div>",[_vm._ssrNode("<div class=\"form-group\" data-v-467f34ce>","</div>",[_vm._ssrNode("<label for=\"gender\" data-v-467f34ce>Gender <span class=\"text-danger\" data-v-467f34ce>*</span></label> "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.student.gender),expression:"student.gender"}],staticClass:"form-control",attrs:{"name":"gender","id":"gender"},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.student, "gender", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"value":"","selected":"","disabled":"","hidden":""}},[_vm._v("\n                                                    Select one\n                                                ")]),_vm._v(" "),_c('option',{attrs:{"value":"M"}},[_vm._v("Male")]),_vm._v(" "),_c('option',{attrs:{"value":"F"}},[_vm._v("Female")]),_vm._v(" "),_c('option',{attrs:{"value":"O"}},[_vm._v("Other")])]),_vm._ssrNode(" "+((_vm.errors.phone_no)?("<small class=\"text-danger with-errors\" data-v-467f34ce>"+(_vm._s(_vm.errors.phone_no[0]))+"</small>"):"<!---->"))],2)]),_vm._ssrNode(" <div class=\"col-lg-4 col-md-6 col-sm-12\" data-v-467f34ce><div class=\"form-group\" data-v-467f34ce><label for=\"dob\" data-v-467f34ce>Date of Birth\n                                                <span class=\"text-danger\" data-v-467f34ce>*</span></label> <input type=\"date\" name=\"dob\""+(_vm._ssrAttr("value",(_vm.student.dob)))+" class=\"form-control\" data-v-467f34ce> "+((_vm.errors.dob)?("<small class=\"text-danger with-errors\" data-v-467f34ce>"+(_vm._s(_vm.errors.dob[0]))+"</small>"):"<!---->")+"</div></div> <div class=\"col-lg-4 col-md-6 col-sm-12\" data-v-467f34ce><div class=\"form-group\" data-v-467f34ce><label for=\"birth_place\" data-v-467f34ce>Birth Place <span class=\"text-danger\" data-v-467f34ce>*</span></label> <input type=\"text\" placeholder=\"Enter birth place\""+(_vm._ssrAttr("value",(_vm.student.birth_place)))+" class=\"form-control\" data-v-467f34ce> "+((_vm.errors.birth_place)?("<small class=\"text-danger with-errors\" data-v-467f34ce>"+(_vm._s(_vm.errors.birth_place[0]))+"</small>"):"<!---->")+"</div></div> <div class=\"col-lg-4 col-md-6 col-sm-12\" data-v-467f34ce><div class=\"form-group\" data-v-467f34ce><label for=\"fg_monthly_income\" data-v-467f34ce>Monthly Income of Father/Guardian</label> <input type=\"number\" placeholder=\"monthly Income of Father/Guardian\""+(_vm._ssrAttr("value",(_vm.student.fg_monthly_income)))+" class=\"form-control\" data-v-467f34ce> "+((_vm.errors.fg_monthly_income)?("<small class=\"text-danger with-errors\" data-v-467f34ce>"+(_vm._s(_vm.errors.fg_monthly_income[0]))+"</small>"):"<!---->")+"</div></div> "),_vm._ssrNode("<div class=\"col-lg-4 col-md-6 col-sm-12\" data-v-467f34ce>","</div>",[_vm._ssrNode("<div class=\"form-group\" data-v-467f34ce>","</div>",[_vm._ssrNode("<label for=\"nationality\" data-v-467f34ce>Nationality <span class=\"text-danger\" data-v-467f34ce>*</span></label> "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.student.nationality),expression:"student.nationality"}],staticClass:"form-control",attrs:{"name":"country","id":"country"},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.student, "nationality", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"value":"","disabled":"","selected":""}},[_vm._v("Select Nationality")]),_vm._v(" "),_c('option',{attrs:{"value":"Bangladeshi"}},[_vm._v("Bangladeshi")])]),_vm._ssrNode(" "+((_vm.errors.nationality)?("<small class=\"text-danger with-errors\" data-v-467f34ce>"+(_vm._s(_vm.errors.nationality[0]))+"</small>"):"<!---->"))],2)]),_vm._ssrNode(" <div class=\"col-lg-4 col-md-6 col-sm-12\" data-v-467f34ce><div class=\"form-group\" data-v-467f34ce><label for=\"std_birth_or_nid_no\" data-v-467f34ce>Birth or NID or Passport No\n                                                <span class=\"text-danger\" data-v-467f34ce>*</span></label> <input type=\"number\" placeholder=\"Enter std birth or nid no\""+(_vm._ssrAttr("value",(_vm.student.std_birth_or_nid_no)))+" class=\"form-control\" data-v-467f34ce> "+((_vm.errors.std_birth_or_nid_no)?("<small class=\"text-danger with-errors\" data-v-467f34ce>"+(_vm._s(_vm.errors.std_birth_or_nid_no[0]))+"</small>"):"<!---->")+"</div></div> "),_vm._ssrNode("<div class=\"col-lg-4 col-md-6 col-sm-12\" data-v-467f34ce>","</div>",[_vm._ssrNode("<div class=\"form-group\" data-v-467f34ce>","</div>",[_vm._ssrNode("<label for=\"marital_status\" data-v-467f34ce>Marital ? <span class=\"text-danger\" data-v-467f34ce>*</span></label> "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.student.marital_status),expression:"student.marital_status"}],staticClass:"form-control",attrs:{"name":"marital_status","id":"marital_status","required":""},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.student, "marital_status", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"value":"","selected":"","disabled":"","hidden":""}},[_vm._v("\n                                                    Select one\n                                                ")]),_vm._v(" "),_c('option',{attrs:{"value":"N"}},[_vm._v("No")]),_vm._v(" "),_c('option',{attrs:{"value":"Y"}},[_vm._v("Yes")])]),_vm._ssrNode(" "+((_vm.errors.marital_status)?("<small class=\"text-danger with-errors\" data-v-467f34ce>"+(_vm._s(_vm.errors.marital_status[0]))+"</small>"):"<!---->"))],2)]),_vm._ssrNode(" <div class=\"col-lg-4 col-md-6 col-sm-12\" data-v-467f34ce><div class=\"form-group\" data-v-467f34ce><label for=\"image\" data-v-467f34ce>Image <span class=\"text-danger\" data-v-467f34ce>*</span></label> <br data-v-467f34ce> <input type=\"file\" id=\"file_input\" name=\"file\" accept=\"image/*\" required=\"required\" data-v-467f34ce> <br data-v-467f34ce> <span class=\"text-danger\" data-v-467f34ce>File extension must be jpeg,jpg,png and max\n                                                file size\n                                                1024KB</span> <br data-v-467f34ce> <img"+(_vm._ssrAttr("src",_vm.base_url + '/images/student_photo/' + this.student.photo))+" alt=\"image\" style=\"height:80px\" data-v-467f34ce></div></div> <div class=\"col-lg-4 col-md-6 col-sm-12\" data-v-467f34ce><div class=\"form-group\" data-v-467f34ce><label for=\"signature\" data-v-467f34ce>Signature <span class=\"text-danger\" data-v-467f34ce>*</span></label> <br data-v-467f34ce> <input type=\"file\" id=\"signature\" name=\"signature\" accept=\"image/*\" required=\"required\" data-v-467f34ce> <br data-v-467f34ce> <span class=\"text-danger\" data-v-467f34ce>File extension must be jpeg,jpg,png and max\n                                                file size\n                                                500KB</span> <br data-v-467f34ce> <img"+(_vm._ssrAttr("src",_vm.base_url + '/images/student_signature/' + this.student.signature))+" alt=\"image\" style=\"height:80px\" data-v-467f34ce></div></div> <div class=\"col-lg-12 col-md-12 col-sm-12\" data-v-467f34ce><div class=\"card my-2\" data-v-467f34ce><div class=\"card-header\" data-v-467f34ce>Permanent Add</div> <div class=\"card-body\" data-v-467f34ce><div class=\"row\" data-v-467f34ce><div class=\"col-lg-12 col-md-12 col-sm-12\" data-v-467f34ce><div class=\"form-group\" data-v-467f34ce><label for=\"permanent_add\" data-v-467f34ce>Permanent Add\n                                                                <span class=\"text-danger\" data-v-467f34ce>*</span></label> <textarea name=\"permanent_add\" id=\"permanent_add\" cols=\"30\" rows=\"3\" placeholder=\"Enter permanent add\" required=\"required\" class=\"form-control\" data-v-467f34ce>"+_vm._ssrEscape(_vm._s(_vm.student.permanent_add))+"</textarea> "+((_vm.errors.permanent_add)?("<small class=\"text-danger with-errors\" data-v-467f34ce>"+(_vm._s(_vm.errors.permanent_add[0]))+"</small>"):"<!---->")+"</div></div></div></div></div> <div class=\"card my-2\" data-v-467f34ce><div class=\"card-header\" data-v-467f34ce>\n                                                Mailing Add\n\n                                                <div class=\"form-check\" data-v-467f34ce><input type=\"checkbox\" value=\"yes\" id=\"sameAsPermanent\""+(_vm._ssrAttr("checked",Array.isArray(_vm.same_as_permanent)?_vm._i(_vm.same_as_permanent,"yes")>-1:(_vm.same_as_permanent)))+" class=\"form-check-input\" data-v-467f34ce> <label for=\"sameAsPermanent\" class=\"form-check-label\" data-v-467f34ce>\n                                                        Same as permanent\n                                                    </label></div></div> <div class=\"card-body\" data-v-467f34ce><div class=\"row\" data-v-467f34ce><div class=\"col-lg-12 col-md-12 col-sm-12\" data-v-467f34ce><div class=\"form-group\" data-v-467f34ce><label for=\"mailing_add\" data-v-467f34ce>Mailing Add\n                                                                <span class=\"text-danger\" data-v-467f34ce>*</span></label> <textarea name=\"mailing_add\" id=\"mailing_add\" cols=\"30\" rows=\"3\" placeholder=\"Enter mailing add\" class=\"form-control\" data-v-467f34ce>"+_vm._ssrEscape(_vm._s(_vm.student.mailing_add))+"</textarea> "+((_vm.errors.mailing_add)?("<small class=\"text-danger with-errors\" data-v-467f34ce>"+(_vm._s(_vm.errors.mailing_add[0]))+"</small>"):"<!---->")+"</div></div></div></div></div></div>")],2),_vm._ssrNode(" <ul class=\"pager wizard twitter-bs-wizard-pager-link text-right\" data-v-467f34ce><button type=\"button\" class=\"btn btn-info\" data-v-467f34ce>\n                                        Previous\n                                    </button> <button type=\"button\" class=\"btn btn-success\" data-v-467f34ce>\n                                        Next\n                                    </button></ul>")],2),_vm._ssrNode(" <div"+(_vm._ssrClass("tab-pane",_vm.familyStep ? 'active' : ''))+" data-v-467f34ce><div data-v-467f34ce><div class=\"card mb-2\" data-v-467f34ce><div class=\"card-header\" data-v-467f34ce>Father Info</div> <div class=\"card-body\" data-v-467f34ce><div class=\"row\" data-v-467f34ce><div class=\"col-lg-4 col-md-6 col-sm-12\" data-v-467f34ce><div class=\"form-group\" data-v-467f34ce><label for=\"f_name\" data-v-467f34ce>Name <span class=\"text-danger\" data-v-467f34ce>*</span></label> <input id=\"f_name\" type=\"text\" placeholder=\"Enter father name\" required=\"required\""+(_vm._ssrAttr("value",(_vm.student.f_name)))+" class=\"form-control\" data-v-467f34ce> "+((_vm.errors.f_name)?("<small class=\"text-danger with-errors\" data-v-467f34ce>"+(_vm._s(_vm.errors.f_name[0]))+"</small>"):"<!---->")+"</div></div> <div class=\"col-lg-4 col-md-6 col-sm-12\" data-v-467f34ce><div class=\"form-group\" data-v-467f34ce><label for=\"f_cellno\" data-v-467f34ce>Cell <span class=\"text-danger\" data-v-467f34ce>*</span></label> <input id=\"f_cellno\" type=\"text\" placeholder=\"Enter cell no\" required=\"required\""+(_vm._ssrAttr("value",(_vm.student.f_cellno)))+" class=\"form-control\" data-v-467f34ce> "+((_vm.errors.f_cellno)?("<small class=\"text-danger with-errors\" data-v-467f34ce>"+(_vm._s(_vm.errors.f_cellno[0]))+"</small>"):"<!---->")+"</div></div> <div class=\"col-lg-4 col-md-6 col-sm-12\" data-v-467f34ce><div class=\"form-group\" data-v-467f34ce><label for=\"f_occu\" data-v-467f34ce>Occupation</label> <input id=\"f_occu\" type=\"text\" placeholder=\"Enter occupation\""+(_vm._ssrAttr("value",(_vm.student.f_occu)))+" class=\"form-control\" data-v-467f34ce> "+((_vm.errors.f_occu)?("<small class=\"text-danger with-errors\" data-v-467f34ce>"+(_vm._s(_vm.errors.f_occu[0]))+"</small>"):"<!---->")+"</div></div> <div class=\"col-lg-4 col-md-6 col-sm-12\" data-v-467f34ce><div class=\"form-group\" data-v-467f34ce><label for=\"father_nid_no\" data-v-467f34ce>NID No\n                                                            <span class=\"text-danger\" data-v-467f34ce>*</span></label> <input id=\"father_nid_no\" type=\"number\" placeholder=\"Enter nid\""+(_vm._ssrAttr("value",(_vm.student.father_nid_no)))+" class=\"form-control\" data-v-467f34ce> "+((_vm.errors.father_nid_no)?("<small class=\"text-danger with-errors\" data-v-467f34ce>"+(_vm._s(_vm.errors.father_nid_no[0]))+"</small>"):"<!---->")+"</div></div></div></div></div> <div class=\"card mb-2\" data-v-467f34ce><div class=\"card-header\" data-v-467f34ce>Mother Info</div> <div class=\"card-body\" data-v-467f34ce><div class=\"row\" data-v-467f34ce><div class=\"col-lg-4 col-md-6 col-sm-12\" data-v-467f34ce><div class=\"form-group\" data-v-467f34ce><label for=\"m_name\" data-v-467f34ce>Name <span class=\"text-danger\" data-v-467f34ce>*</span></label> <input id=\"m_name\" type=\"text\" placeholder=\"Enter mother name\" required=\"required\""+(_vm._ssrAttr("value",(_vm.student.m_name)))+" class=\"form-control\" data-v-467f34ce> "+((_vm.errors.m_name)?("<small class=\"text-danger with-errors\" data-v-467f34ce>"+(_vm._s(_vm.errors.m_name[0]))+"</small>"):"<!---->")+"</div></div> <div class=\"col-lg-4 col-md-6 col-sm-12\" data-v-467f34ce><div class=\"form-group\" data-v-467f34ce><label for=\"m_cellno\" data-v-467f34ce>Cell </label> <input id=\"m_cellno\" type=\"text\" placeholder=\"Enter cell no\" required=\"required\""+(_vm._ssrAttr("value",(_vm.student.m_cellno)))+" class=\"form-control\" data-v-467f34ce> "+((_vm.errors.m_cellno)?("<small class=\"text-danger with-errors\" data-v-467f34ce>"+(_vm._s(_vm.errors.m_cellno[0]))+"</small>"):"<!---->")+"</div></div> <div class=\"col-lg-4 col-md-6 col-sm-12\" data-v-467f34ce><div class=\"form-group\" data-v-467f34ce><label for=\"m_occu\" data-v-467f34ce>Occupation</label> <input id=\"m_occu\" type=\"text\" placeholder=\"Enter occupation\""+(_vm._ssrAttr("value",(_vm.student.m_occu)))+" class=\"form-control\" data-v-467f34ce> "+((_vm.errors.m_occu)?("<small class=\"text-danger with-errors\" data-v-467f34ce>"+(_vm._s(_vm.errors.m_occu[0]))+"</small>"):"<!---->")+"</div></div> <div class=\"col-lg-4 col-md-6 col-sm-12\" data-v-467f34ce><div class=\"form-group\" data-v-467f34ce><label for=\"mother_nid_no\" data-v-467f34ce>NID No\n                                                            <span class=\"text-danger\" data-v-467f34ce>*</span></label> <input id=\"mother_nid_no\" type=\"number\" placeholder=\"Enter nid\""+(_vm._ssrAttr("value",(_vm.student.mother_nid_no)))+" class=\"form-control\" data-v-467f34ce> "+((_vm.errors.mother_nid_no)?("<small class=\"text-danger with-errors\" data-v-467f34ce>"+(_vm._s(_vm.errors.mother_nid_no[0]))+"</small>"):"<!---->")+"</div></div></div></div></div> <div class=\"card mb-2\" data-v-467f34ce><div class=\"card-header\" data-v-467f34ce>Guardian and Emergency info</div> <div class=\"card-body\" data-v-467f34ce><div class=\"row\" data-v-467f34ce><div class=\"col-lg-4 col-md-6 col-sm-12\" data-v-467f34ce><div class=\"form-group\" data-v-467f34ce><label for=\"g_name\" data-v-467f34ce>G Name</label> <input id=\"g_name\" type=\"text\" placeholder=\"Enter g name\""+(_vm._ssrAttr("value",(_vm.student.g_name)))+" class=\"form-control\" data-v-467f34ce> "+((_vm.errors.g_name)?("<small class=\"text-danger with-errors\" data-v-467f34ce>"+(_vm._s(_vm.errors.g_name[0]))+"</small>"):"<!---->")+"</div></div> <div class=\"col-lg-4 col-md-6 col-sm-12\" data-v-467f34ce><div class=\"form-group\" data-v-467f34ce><label for=\"g_cellno\" data-v-467f34ce>G Cell No</label> <input id=\"g_cellno\" type=\"text\" placeholder=\"Enter cell no\" required=\"required\""+(_vm._ssrAttr("value",(_vm.student.g_cellno)))+" class=\"form-control\" data-v-467f34ce> "+((_vm.errors.g_cellno)?("<small class=\"text-danger with-errors\" data-v-467f34ce>"+(_vm._s(_vm.errors.g_cellno[0]))+"</small>"):"<!---->")+"</div></div> <div class=\"col-lg-4 col-md-6 col-sm-12\" data-v-467f34ce><div class=\"form-group\" data-v-467f34ce><label for=\"g_occu\" data-v-467f34ce>G Occupation</label> <input id=\"g_occu\" type=\"text\" placeholder=\"Enter occupation\""+(_vm._ssrAttr("value",(_vm.student.g_occu)))+" class=\"form-control\" data-v-467f34ce> "+((_vm.errors.g_occu)?("<small class=\"text-danger with-errors\" data-v-467f34ce>"+(_vm._s(_vm.errors.g_occu[0]))+"</small>"):"<!---->")+"</div></div> <div class=\"col-lg-4 col-md-6 col-sm-12\" data-v-467f34ce><div class=\"form-group\" data-v-467f34ce><label for=\"e_name\" data-v-467f34ce>Emergency Contact Person Name\n                                                            <span class=\"text-danger\" data-v-467f34ce>*</span></label> <input id=\"e_name\" type=\"text\" placeholder=\"Enter e name\""+(_vm._ssrAttr("value",(_vm.student.e_name)))+" class=\"form-control\" data-v-467f34ce> "+((_vm.errors.e_name)?("<small class=\"text-danger with-errors\" data-v-467f34ce>"+(_vm._s(_vm.errors.e_name[0]))+"</small>"):"<!---->")+"</div></div> <div class=\"col-lg-4 col-md-6 col-sm-12\" data-v-467f34ce><div class=\"form-group\" data-v-467f34ce><label for=\"e_cellno\" data-v-467f34ce>Emergency Contact Person Cell No\n                                                            <span class=\"text-danger\" data-v-467f34ce>*</span></label> <input id=\"e_cellno\" type=\"number\" placeholder=\"Enter cell no\" required=\"required\""+(_vm._ssrAttr("value",(_vm.student.e_cellno)))+" class=\"form-control\" data-v-467f34ce> "+((_vm.errors.e_cellno)?("<small class=\"text-danger with-errors\" data-v-467f34ce>"+(_vm._s(_vm.errors.e_cellno[0]))+"</small>"):"<!---->")+"</div></div> <div class=\"col-lg-4 col-md-6 col-sm-12\" data-v-467f34ce><div class=\"form-group\" data-v-467f34ce><label for=\"e_occu\" data-v-467f34ce>E Occupation</label> <input id=\"e_occu\" type=\"text\" placeholder=\"Enter occupation\""+(_vm._ssrAttr("value",(_vm.student.e_occu)))+" class=\"form-control\" data-v-467f34ce> "+((_vm.errors.e_occu)?("<small class=\"text-danger with-errors\" data-v-467f34ce>"+(_vm._s(_vm.errors.e_occu[0]))+"</small>"):"<!---->")+"</div></div> <div class=\"col-lg-4 col-md-6 col-sm-12\" data-v-467f34ce><div class=\"form-group\" data-v-467f34ce><label for=\"e_relation\" data-v-467f34ce>E Relation</label> <input id=\"e_relation\" type=\"text\" placeholder=\"Enter e relation\""+(_vm._ssrAttr("value",(_vm.student.e_relation)))+" class=\"form-control\" data-v-467f34ce> "+((_vm.errors.e_relation)?("<small class=\"text-danger with-errors\" data-v-467f34ce>"+(_vm._s(_vm.errors.e_relation[0]))+"</small>"):"<!---->")+"</div></div></div></div></div> <ul class=\"pager wizard twitter-bs-wizard-pager-link text-right\" data-v-467f34ce><button type=\"button\" class=\"btn btn-info\" data-v-467f34ce>\n                                            Previous\n                                        </button> <button type=\"button\" class=\"btn btn-success\" data-v-467f34ce>\n                                            Next\n                                        </button></ul></div></div> "),_vm._ssrNode("<div"+(_vm._ssrClass("tab-pane",_vm.educationStep ? 'active' : ''))+" data-v-467f34ce>","</div>",[_vm._ssrNode("<div data-v-467f34ce>","</div>",[_vm._ssrNode("<div class=\"card mb-2\" data-v-467f34ce>","</div>",[_vm._ssrNode("<div class=\"card-header\" data-v-467f34ce>\n                                            Back Ground Education Info 1\n                                        </div> "),_vm._ssrNode("<div class=\"card-body\" data-v-467f34ce>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-467f34ce>","</div>",[_vm._ssrNode("<div class=\"col-lg-4 col-md-6 col-sm-12\" data-v-467f34ce><div class=\"form-group\" data-v-467f34ce><label for=\"e_exam_name1\" data-v-467f34ce>Name of Examination\n                                                            <span class=\"text-danger\" data-v-467f34ce>*</span></label> <input id=\"e_exam_name1\" type=\"text\" placeholder=\"Enter name of examination\" required=\"required\""+(_vm._ssrAttr("value",(_vm.education.exam_name1)))+" class=\"form-control\" data-v-467f34ce> "+((_vm.errors.e_exam_name1)?("<small class=\"text-danger with-errors\" data-v-467f34ce>"+(_vm._s(_vm.errors.e_exam_name1[0]))+"</small>"):"<!---->")+"</div></div> <div class=\"col-lg-4 col-md-6 col-sm-12\" data-v-467f34ce><div class=\"form-group\" data-v-467f34ce><label for=\"e_group1\" data-v-467f34ce>Group <span class=\"text-danger\" data-v-467f34ce>*</span></label> <input id=\"e_group1\" type=\"text\" placeholder=\"Enter group no\" required=\"required\""+(_vm._ssrAttr("value",(_vm.education.group1)))+" class=\"form-control\" data-v-467f34ce> "+((_vm.errors.e_group1)?("<small class=\"text-danger with-errors\" data-v-467f34ce>"+(_vm._s(_vm.errors.e_group1[0]))+"</small>"):"<!---->")+"</div></div> <div class=\"col-lg-4 col-md-6 col-sm-12\" data-v-467f34ce><div class=\"form-group\" data-v-467f34ce><label for=\"e_roll_no_1\" data-v-467f34ce>Roll <span class=\"text-danger\" data-v-467f34ce>*</span></label> <input id=\"e_roll_no_1\" type=\"number\" placeholder=\"Enter roll no\""+(_vm._ssrAttr("value",(_vm.education.roll_no1)))+" class=\"form-control\" data-v-467f34ce> "+((_vm.errors.e_roll_no_1)?("<small class=\"text-danger with-errors\" data-v-467f34ce>"+(_vm._s(_vm.errors.e_roll_no_1[0]))+"</small>"):"<!---->")+"</div></div> "),_vm._ssrNode("<div class=\"col-lg-4 col-md-6 col-sm-12\" data-v-467f34ce>","</div>",[_vm._ssrNode("<div class=\"form-group\" data-v-467f34ce>","</div>",[_vm._ssrNode("<label for=\"e_passing_year1\" data-v-467f34ce>Passing Year\n                                                            <span class=\"text-danger\" data-v-467f34ce>*</span></label> "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.education.passing_year1),expression:"education.passing_year1"}],staticClass:"form-control",attrs:{"name":"e_passing_year1","id":"e_passing_year1"},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.education, "passing_year1", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},_vm._l((_vm.years),function(year,index){return _c('option',{key:index,domProps:{"value":year,"textContent":_vm._s(year)}})}),0),_vm._ssrNode(" "+((_vm.errors.e_passing_year1)?("<small class=\"text-danger with-errors\" data-v-467f34ce>"+(_vm._s(_vm.errors.e_passing_year1[0]))+"</small>"):"<!---->"))],2)]),_vm._ssrNode(" <div class=\"col-lg-4 col-md-6 col-sm-12\" data-v-467f34ce><div class=\"form-group\" data-v-467f34ce><label for=\"e_ltr_grd_tmarks1\" data-v-467f34ce>Letter or Grade or Total\n                                                            Marks\n                                                            <span class=\"text-danger\" data-v-467f34ce>*</span></label> <input id=\"e_ltr_grd_tmarks1\" type=\"text\" placeholder=\"Enter letter or grade or total marks\""+(_vm._ssrAttr("value",(_vm.education.ltr_grd_tmarks1)))+" class=\"form-control\" data-v-467f34ce> "+((_vm.errors.e_ltr_grd_tmarks1)?("<small class=\"text-danger with-errors\" data-v-467f34ce>"+(_vm._s(_vm.errors.e_ltr_grd_tmarks1[0]))+"</small>"):"<!---->")+"</div></div> <div class=\"col-lg-4 col-md-6 col-sm-12\" data-v-467f34ce><div class=\"form-group\" data-v-467f34ce><label for=\"e_div_cls_cgpa1\" data-v-467f34ce>Divission Or Class Or CGPA\n                                                            <span class=\"text-danger\" data-v-467f34ce>*</span></label> <input id=\"e_div_cls_cgpa1\" type=\"text\" placeholder=\"Enter Divission Or Class Or CGPA\""+(_vm._ssrAttr("value",(_vm.education.div_cls_cgpa1)))+" class=\"form-control\" data-v-467f34ce> "+((_vm.errors.e_div_cls_cgpa1)?("<small class=\"text-danger with-errors\" data-v-467f34ce>"+(_vm._s(_vm.errors.e_div_cls_cgpa1[0]))+"</small>"):"<!---->")+"</div></div> <div class=\"col-lg-4 col-md-6 col-sm-12\" data-v-467f34ce><div class=\"form-group\" data-v-467f34ce><label for=\"e_board_institute1\" data-v-467f34ce>Board Or Institute\n                                                            <span class=\"text-danger\" data-v-467f34ce>*</span></label> <input id=\"e_board_institute1\" type=\"text\" placeholder=\"Enter Board Or Institute\""+(_vm._ssrAttr("value",(_vm.education.board_institute1)))+" class=\"form-control\" data-v-467f34ce> "+((_vm.errors.e_board_institute1)?("<small class=\"text-danger with-errors\" data-v-467f34ce>"+(_vm._s(_vm.errors.e_board_institute1[0]))+"</small>"):"<!---->")+"</div></div>")],2)])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"card mb-2\" data-v-467f34ce>","</div>",[_vm._ssrNode("<div class=\"card-header\" data-v-467f34ce>\n                                            Back Ground Education Info 2\n                                        </div> "),_vm._ssrNode("<div class=\"card-body\" data-v-467f34ce>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-467f34ce>","</div>",[_vm._ssrNode("<div class=\"col-lg-4 col-md-6 col-sm-12\" data-v-467f34ce><div class=\"form-group\" data-v-467f34ce><label for=\"e_exam_name2\" data-v-467f34ce>Name of Examination\n                                                            <span class=\"text-danger\" data-v-467f34ce>*</span></label> <input id=\"e_exam_name2\" type=\"text\" placeholder=\"Enter name of examination\" required=\"required\""+(_vm._ssrAttr("value",(_vm.student.e_exam_name2)))+" class=\"form-control\" data-v-467f34ce> "+((_vm.errors.e_exam_name2)?("<small class=\"text-danger with-errors\" data-v-467f34ce>"+(_vm._s(_vm.errors.e_exam_name1[0]))+"</small>"):"<!---->")+"</div></div> <div class=\"col-lg-4 col-md-6 col-sm-12\" data-v-467f34ce><div class=\"form-group\" data-v-467f34ce><label for=\"e_group2\" data-v-467f34ce>Group <span class=\"text-danger\" data-v-467f34ce>*</span></label> <input id=\"e_group2\" type=\"text\" placeholder=\"Enter group no\" required=\"required\""+(_vm._ssrAttr("value",(_vm.student.e_group2)))+" class=\"form-control\" data-v-467f34ce> "+((_vm.errors.e_group2)?("<small class=\"text-danger with-errors\" data-v-467f34ce>"+(_vm._s(_vm.errors.e_group1[0]))+"</small>"):"<!---->")+"</div></div> <div class=\"col-lg-4 col-md-6 col-sm-12\" data-v-467f34ce><div class=\"form-group\" data-v-467f34ce><label for=\"e_roll_no_2\" data-v-467f34ce>Roll <span class=\"text-danger\" data-v-467f34ce>*</span></label> <input id=\"e_roll_no_2\" type=\"number\" placeholder=\"Enter roll no\""+(_vm._ssrAttr("value",(_vm.student.e_roll_no_2)))+" class=\"form-control\" data-v-467f34ce> "+((_vm.errors.e_roll_no_2)?("<small class=\"text-danger with-errors\" data-v-467f34ce>"+(_vm._s(_vm.errors.e_roll_no_1[0]))+"</small>"):"<!---->")+"</div></div> "),_vm._ssrNode("<div class=\"col-lg-4 col-md-6 col-sm-12\" data-v-467f34ce>","</div>",[_vm._ssrNode("<div class=\"form-group\" data-v-467f34ce>","</div>",[_vm._ssrNode("<label for=\"e_passing_year2\" data-v-467f34ce>Passing Year\n                                                            <span class=\"text-danger\" data-v-467f34ce>*</span></label> "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.student.e_passing_year2),expression:"student.e_passing_year2"}],staticClass:"form-control",attrs:{"name":"e_passing_year2","id":"e_passing_year2"},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.student, "e_passing_year2", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},_vm._l((_vm.years),function(year,index){return _c('option',{key:index,domProps:{"value":year,"textContent":_vm._s(year)}})}),0),_vm._ssrNode(" "+((_vm.errors.e_passing_year2)?("<small class=\"text-danger with-errors\" data-v-467f34ce>"+(_vm._s(_vm.errors.e_passing_year1[0]))+"</small>"):"<!---->"))],2)]),_vm._ssrNode(" <div class=\"col-lg-4 col-md-6 col-sm-12\" data-v-467f34ce><div class=\"form-group\" data-v-467f34ce><label for=\"e_ltr_grd_tmarks2\" data-v-467f34ce>Letter or Grade or Total\n                                                            Marks\n                                                            <span class=\"text-danger\" data-v-467f34ce>*</span></label> <input id=\"e_ltr_grd_tmarks2\" type=\"text\" placeholder=\"Enter letter or grade or total marks\""+(_vm._ssrAttr("value",(_vm.student.e_ltr_grd_tmarks2)))+" class=\"form-control\" data-v-467f34ce> "+((_vm.errors.e_ltr_grd_tmarks2)?("<small class=\"text-danger with-errors\" data-v-467f34ce>"+(_vm._s(_vm.errors.e_ltr_grd_tmarks1[0]))+"</small>"):"<!---->")+"</div></div> <div class=\"col-lg-4 col-md-6 col-sm-12\" data-v-467f34ce><div class=\"form-group\" data-v-467f34ce><label for=\"e_div_cls_cgpa2\" data-v-467f34ce>Divission Or Class Or CGPA\n                                                            <span class=\"text-danger\" data-v-467f34ce>*</span></label> <input id=\"e_div_cls_cgpa2\" type=\"text\" placeholder=\"Enter Divission Or Class Or CGPA\""+(_vm._ssrAttr("value",(_vm.student.e_div_cls_cgpa2)))+" class=\"form-control\" data-v-467f34ce> "+((_vm.errors.e_div_cls_cgpa2)?("<small class=\"text-danger with-errors\" data-v-467f34ce>"+(_vm._s(_vm.errors.e_div_cls_cgpa1[0]))+"</small>"):"<!---->")+"</div></div> <div class=\"col-lg-4 col-md-6 col-sm-12\" data-v-467f34ce><div class=\"form-group\" data-v-467f34ce><label for=\"e_board_institute2\" data-v-467f34ce>Board Or Institute\n                                                            <span class=\"text-danger\" data-v-467f34ce>*</span></label> <input id=\"e_board_institute2\" type=\"text\" placeholder=\"Enter Board Or Institute\""+(_vm._ssrAttr("value",(_vm.student.e_board_institute2)))+" class=\"form-control\" data-v-467f34ce> "+((_vm.errors.e_board_institute2)?("<small class=\"text-danger with-errors\" data-v-467f34ce>"+(_vm._s(_vm.errors.e_board_institute1[0]))+"</small>"):"<!---->")+"</div></div>")],2)])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"card mb-2\" data-v-467f34ce>","</div>",[_vm._ssrNode("<div class=\"card-header\" data-v-467f34ce>\n                                            \n                                            Back Ground Education Info 3\n                                        </div> "),_vm._ssrNode("<div class=\"card-body\" data-v-467f34ce>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-467f34ce>","</div>",[_vm._ssrNode("<div class=\"col-lg-4 col-md-6 col-sm-12\" data-v-467f34ce><div class=\"form-group\" data-v-467f34ce><label for=\"e_exam_name3\" data-v-467f34ce>Name of Examination</label> <input id=\"e_exam_name3\" type=\"text\" placeholder=\"Enter name of examination\" required=\"required\""+(_vm._ssrAttr("value",(_vm.student.e_exam_name3)))+" class=\"form-control\" data-v-467f34ce> "+((_vm.errors.e_exam_name3)?("<small class=\"text-danger with-errors\" data-v-467f34ce>"+(_vm._s(_vm.errors.e_exam_name1[0]))+"</small>"):"<!---->")+"</div></div> <div class=\"col-lg-4 col-md-6 col-sm-12\" data-v-467f34ce><div class=\"form-group\" data-v-467f34ce><label for=\"e_group3\" data-v-467f34ce>Group</label> <input id=\"e_group3\" type=\"text\" placeholder=\"Enter group no\" required=\"required\""+(_vm._ssrAttr("value",(_vm.student.e_group3)))+" class=\"form-control\" data-v-467f34ce> "+((_vm.errors.e_group3)?("<small class=\"text-danger with-errors\" data-v-467f34ce>"+(_vm._s(_vm.errors.e_group1[0]))+"</small>"):"<!---->")+"</div></div> <div class=\"col-lg-4 col-md-6 col-sm-12\" data-v-467f34ce><div class=\"form-group\" data-v-467f34ce><label for=\"e_roll_no_3\" data-v-467f34ce>Roll</label> <input id=\"e_roll_no_3\" type=\"number\" placeholder=\"Enter roll no\""+(_vm._ssrAttr("value",(_vm.student.e_roll_no_3)))+" class=\"form-control\" data-v-467f34ce> "+((_vm.errors.e_roll_no_3)?("<small class=\"text-danger with-errors\" data-v-467f34ce>"+(_vm._s(_vm.errors.e_roll_no_1[0]))+"</small>"):"<!---->")+"</div></div> "),_vm._ssrNode("<div class=\"col-lg-4 col-md-6 col-sm-12\" data-v-467f34ce>","</div>",[_vm._ssrNode("<div class=\"form-group\" data-v-467f34ce>","</div>",[_vm._ssrNode("<label for=\"e_passing_year3\" data-v-467f34ce>Passing Year</label> "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.student.e_passing_year3),expression:"student.e_passing_year3"}],staticClass:"form-control",attrs:{"name":"e_passing_year3","id":"e_passing_year3"},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.student, "e_passing_year3", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},_vm._l((_vm.years),function(year,index){return _c('option',{key:index,domProps:{"value":year,"textContent":_vm._s(year)}})}),0),_vm._ssrNode(" "+((_vm.errors.e_passing_year3)?("<small class=\"text-danger with-errors\" data-v-467f34ce>"+(_vm._s(_vm.errors.e_passing_year1[0]))+"</small>"):"<!---->"))],2)]),_vm._ssrNode(" <div class=\"col-lg-4 col-md-6 col-sm-12\" data-v-467f34ce><div class=\"form-group\" data-v-467f34ce><label for=\"e_ltr_grd_tmarks3\" data-v-467f34ce>Letter or Grade or Total\n                                                            Marks</label> <input id=\"e_ltr_grd_tmarks3\" type=\"text\" placeholder=\"Enter letter or grade or total marks\""+(_vm._ssrAttr("value",(_vm.student.e_ltr_grd_tmarks3)))+" class=\"form-control\" data-v-467f34ce> "+((_vm.errors.e_ltr_grd_tmarks3)?("<small class=\"text-danger with-errors\" data-v-467f34ce>"+(_vm._s(_vm.errors.e_ltr_grd_tmarks1[0]))+"</small>"):"<!---->")+"</div></div> <div class=\"col-lg-4 col-md-6 col-sm-12\" data-v-467f34ce><div class=\"form-group\" data-v-467f34ce><label for=\"e_div_cls_cgpa3\" data-v-467f34ce>Divission Or Class Or\n                                                            CGPA</label> <input id=\"e_div_cls_cgpa3\" type=\"text\" placeholder=\"Enter Divission Or Class Or CGPA\""+(_vm._ssrAttr("value",(_vm.student.e_div_cls_cgpa3)))+" class=\"form-control\" data-v-467f34ce> "+((_vm.errors.e_div_cls_cgpa3)?("<small class=\"text-danger with-errors\" data-v-467f34ce>"+(_vm._s(_vm.errors.e_div_cls_cgpa1[0]))+"</small>"):"<!---->")+"</div></div> <div class=\"col-lg-4 col-md-6 col-sm-12\" data-v-467f34ce><div class=\"form-group\" data-v-467f34ce><label for=\"e_board_institute3\" data-v-467f34ce>Board Or Institute</label> <input id=\"e_board_institute3\" type=\"text\" placeholder=\"Enter Board Or Institute\""+(_vm._ssrAttr("value",(_vm.student.e_board_institute3)))+" class=\"form-control\" data-v-467f34ce> "+((_vm.errors.e_board_institute3)?("<small class=\"text-danger with-errors\" data-v-467f34ce>"+(_vm._s(_vm.errors.e_board_institute1[0]))+"</small>"):"<!---->")+"</div></div>")],2)])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"card mb-2\" data-v-467f34ce>","</div>",[_vm._ssrNode("<div class=\"card-header\" data-v-467f34ce>\n                                            Back Ground Education Info 4\n                                        </div> "),_vm._ssrNode("<div class=\"card-body\" data-v-467f34ce>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-467f34ce>","</div>",[_vm._ssrNode("<div class=\"col-lg-4 col-md-6 col-sm-12\" data-v-467f34ce><div class=\"form-group\" data-v-467f34ce><label for=\"e_exam_name4\" data-v-467f34ce>Name of Examination</label> <input id=\"e_exam_name4\" type=\"text\" placeholder=\"Enter name of examination\" required=\"required\""+(_vm._ssrAttr("value",(_vm.student.e_exam_name4)))+" class=\"form-control\" data-v-467f34ce> "+((_vm.errors.e_exam_name4)?("<small class=\"text-danger with-errors\" data-v-467f34ce>"+(_vm._s(_vm.errors.e_exam_name1[0]))+"</small>"):"<!---->")+"</div></div> <div class=\"col-lg-4 col-md-6 col-sm-12\" data-v-467f34ce><div class=\"form-group\" data-v-467f34ce><label for=\"e_group4\" data-v-467f34ce>Group</label> <input id=\"e_group4\" type=\"text\" placeholder=\"Enter group no\" required=\"required\""+(_vm._ssrAttr("value",(_vm.student.e_group4)))+" class=\"form-control\" data-v-467f34ce> "+((_vm.errors.e_group4)?("<small class=\"text-danger with-errors\" data-v-467f34ce>"+(_vm._s(_vm.errors.e_group1[0]))+"</small>"):"<!---->")+"</div></div> <div class=\"col-lg-4 col-md-6 col-sm-12\" data-v-467f34ce><div class=\"form-group\" data-v-467f34ce><label for=\"e_roll_no_4\" data-v-467f34ce>Roll</label> <input id=\"e_roll_no_4\" type=\"number\" placeholder=\"Enter roll no\""+(_vm._ssrAttr("value",(_vm.student.e_roll_no_4)))+" class=\"form-control\" data-v-467f34ce> "+((_vm.errors.e_roll_no_4)?("<small class=\"text-danger with-errors\" data-v-467f34ce>"+(_vm._s(_vm.errors.e_roll_no_1[0]))+"</small>"):"<!---->")+"</div></div> "),_vm._ssrNode("<div class=\"col-lg-4 col-md-6 col-sm-12\" data-v-467f34ce>","</div>",[_vm._ssrNode("<div class=\"form-group\" data-v-467f34ce>","</div>",[_vm._ssrNode("<label for=\"e_passing_year4\" data-v-467f34ce>Passing Year</label> "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.student.e_passing_year4),expression:"student.e_passing_year4"}],staticClass:"form-control",attrs:{"name":"e_passing_year4","id":"e_passing_year4"},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.student, "e_passing_year4", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},_vm._l((_vm.years),function(year,index){return _c('option',{key:index,domProps:{"value":year,"textContent":_vm._s(year)}})}),0),_vm._ssrNode(" "+((_vm.errors.e_passing_year4)?("<small class=\"text-danger with-errors\" data-v-467f34ce>"+(_vm._s(_vm.errors.e_passing_year1[0]))+"</small>"):"<!---->"))],2)]),_vm._ssrNode(" <div class=\"col-lg-4 col-md-6 col-sm-12\" data-v-467f34ce><div class=\"form-group\" data-v-467f34ce><label for=\"e_ltr_grd_tmarks4\" data-v-467f34ce>Letter or Grade or Total\n                                                            Marks</label> <input id=\"e_ltr_grd_tmarks4\" type=\"text\" placeholder=\"Enter letter or grade or total marks\""+(_vm._ssrAttr("value",(_vm.student.e_ltr_grd_tmarks4)))+" class=\"form-control\" data-v-467f34ce> "+((_vm.errors.e_ltr_grd_tmarks4)?("<small class=\"text-danger with-errors\" data-v-467f34ce>"+(_vm._s(_vm.errors.e_ltr_grd_tmarks1[0]))+"</small>"):"<!---->")+"</div></div> <div class=\"col-lg-4 col-md-6 col-sm-12\" data-v-467f34ce><div class=\"form-group\" data-v-467f34ce><label for=\"e_div_cls_cgpa4\" data-v-467f34ce>Divission Or Class Or\n                                                            CGPA</label> <input id=\"e_div_cls_cgpa4\" type=\"text\" placeholder=\"Enter Divission Or Class Or CGPA\""+(_vm._ssrAttr("value",(_vm.student.e_div_cls_cgpa4)))+" class=\"form-control\" data-v-467f34ce> "+((_vm.errors.e_div_cls_cgpa4)?("<small class=\"text-danger with-errors\" data-v-467f34ce>"+(_vm._s(_vm.errors.e_div_cls_cgpa1[0]))+"</small>"):"<!---->")+"</div></div> <div class=\"col-lg-4 col-md-6 col-sm-12\" data-v-467f34ce><div class=\"form-group\" data-v-467f34ce><label for=\"e_board_institute4\" data-v-467f34ce>Board Or Institute</label> <input id=\"e_board_institute4\" type=\"text\" placeholder=\"Enter Board Or Institute\""+(_vm._ssrAttr("value",(_vm.student.e_board_institute4)))+" class=\"form-control\" data-v-467f34ce> "+((_vm.errors.e_board_institute4)?("<small class=\"text-danger with-errors\" data-v-467f34ce>"+(_vm._s(_vm.errors.e_board_institute1[0]))+"</small>"):"<!---->")+"</div></div>")],2)])],2),_vm._ssrNode(" <ul class=\"pager wizard twitter-bs-wizard-pager-link text-right\" data-v-467f34ce><button type=\"button\" class=\"btn btn-info\" data-v-467f34ce>\n                                            Previous\n                                        </button> <button type=\"button\" class=\"btn btn-success\" data-v-467f34ce>\n                                            Next\n                                        </button></ul>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div"+(_vm._ssrClass("tab-pane",_vm.othersStep ? 'active' : ''))+" data-v-467f34ce>","</div>",[_vm._ssrNode("<div data-v-467f34ce>","</div>",[_vm._ssrNode("<div class=\"card mb-2\" data-v-467f34ce>","</div>",[_vm._ssrNode("<div class=\"card-header\" data-v-467f34ce>Refereed by</div> "),_vm._ssrNode("<div class=\"card-body\" data-v-467f34ce>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-467f34ce>","</div>",[_vm._ssrNode("<div class=\"col-lg-4 col-md-6 col-sm-12\" data-v-467f34ce>","</div>",[_vm._ssrNode("<div class=\"form-group\" data-v-467f34ce>","</div>",[_vm._ssrNode("<label for=\"refereed_by\" data-v-467f34ce>Referred By</label> "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.student.refereed_by),expression:"student.refereed_by"}],staticClass:"form-control",attrs:{"name":"refereed_by","id":"refereed_by"},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.student, "refereed_by", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_vm._l((_vm.refereedByParents),function(refereedByParent,index){return _c('option',{key:index,domProps:{"value":refereedByParent.id,"textContent":_vm._s(refereedByParent.name)}})}),_vm._v(" "),_c('option',{attrs:{"value":"test"}},[_vm._v("Test")])],2),_vm._ssrNode(" "+((_vm.errors.refereed_by)?("<small class=\"text-danger with-errors\" data-v-467f34ce>"+(_vm._s(_vm.errors.refereed_by[0]))+"</small>"):"<!---->"))],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-lg-4 col-md-6 col-sm-12\""+(_vm._ssrStyle(null,null, { display: (_vm.student.refereed_by == 1) ? '' : 'none' }))+" data-v-467f34ce>","</div>",[_vm._ssrNode("<div class=\"form-group\" data-v-467f34ce>","</div>",[_vm._ssrNode("<label for=\"refe_by_std_type\" data-v-467f34ce>From</label> "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.student.refe_by_std_type),expression:"student.refe_by_std_type"}],staticClass:"form-control",attrs:{"name":"refe_by_std_type","id":"refe_by_std_type"},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.student, "refe_by_std_type", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},_vm._l((_vm.refeByStdTypes),function(refeByStdType,index){return _c('option',{key:index,domProps:{"value":refeByStdType.id,"textContent":_vm._s(refeByStdType.name)}})}),0),_vm._ssrNode(" "+((_vm.errors.refe_by_std_type)?("<small class=\"text-danger with-errors\" data-v-467f34ce>"+(_vm._s(_vm.errors.refe_by_std_type[0]))+"</small>"):"<!---->"))],2)]),_vm._ssrNode(" <div class=\"col-lg-4 col-md-6 col-sm-12\""+(_vm._ssrStyle(null,null, { display: (
                                                    _vm.student.refereed_by != '' &&
                                                    _vm.student.refereed_by != 1
                                                ) ? '' : 'none' }))+" data-v-467f34ce><div class=\"form-group\" data-v-467f34ce><label for=\"refereed_by_email\" data-v-467f34ce>"+((_vm.student.refereed_by == 2)?("<span data-v-467f34ce>Liaison\n                                                                Officer's Code</span>"):(_vm.student.refereed_by == 3)?("<span data-v-467f34ce>Student's\n                                                                Reg.Code</span>"):("<span data-v-467f34ce>Employee's Email</span>"))+"</label> <input type=\"text\" id=\"refereed_by_email\" name=\"refereed_by_email\""+(_vm._ssrAttr("value",(_vm.student.refereed_by_email)))+" class=\"form-control\" data-v-467f34ce> "+((_vm.errors.refereed_by_email)?("<small class=\"text-danger with-errors\" data-v-467f34ce>"+(_vm._s(_vm.errors.refereed_by_email[0]))+"</small>"):"<!---->")+"</div></div>")],2)])],2),_vm._ssrNode(" <ul class=\"pager wizard twitter-bs-wizard-pager-link text-right\" data-v-467f34ce><button type=\"button\" class=\"btn btn-info\" data-v-467f34ce>\n                                            Previous\n                                        </button> <button type=\"button\" class=\"btn btn-success\" data-v-467f34ce>\n                                            Submit\n                                        </button></ul>")],2)])],2)])],2)])])],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/admission/student-update/_id.vue?vue&type=template&id=467f34ce&scoped=true&

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admission/student-update/_id.vue?vue&type=script&lang=js&
var _idvue_type_script_lang_js_ = __webpack_require__(59);

// CONCATENATED MODULE: ./pages/admission/student-update/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var student_update_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/admission/student-update/_id.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(95)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  student_update_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "467f34ce",
  "cc430b6a"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL) {//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["a"] = ({
  layout: 'Adm-content',
  computed: {
    years() {
      const year = new Date().getFullYear();
      let data = Array.from({
        length: year + 1 - 2000
      }, (value, index) => 2020 + index);
      return data.slice().reverse();
    }

  },

  data() {
    return {
      generalStep: true,
      personalStep: false,
      familyStep: false,
      educationStep: false,
      othersStep: false,
      same_as_permanent: false,
      base_url: "http://localhost:8000",
      student: {
        general: '',
        department_id: '',
        batch_id: '',
        shift_id: '',
        group_id: '',
        adm_frm_sl: '',
        admission_season: '',
        roll_no: '',
        reg_code: '',
        //personal
        student_name: '',
        blood_group: '',
        email: '',
        phone_no: '',
        religion_id: '',
        gender: '',
        dob: '',
        birth_place: '',
        fg_monthly_income: '',
        nationality: '',
        std_birth_or_nid_no: '',
        marital_status: '',
        permanent_add: '',
        mailing_add: '',
        //family
        f_name: '',
        f_cellno: '',
        f_occu: '',
        father_nid_no: '',
        m_name: '',
        m_cellno: '',
        m_occu: '',
        mother_nid_no: '',
        g_name: '',
        g_cellno: '',
        g_occu: '',
        e_name: '',
        e_cellno: '',
        e_occu: '',
        e_relation: '',
        //education
        exam_name1: '',
        roup1: '',
        roll_no_1: '',
        passing_year1: '',
        ltr_grd_tmarks1: '',
        div_cls_cgpa1: '',
        board_institute1: '',
        exam_name2: '',
        group2: '',
        roll_no_2: '',
        passing_year2: '',
        ltr_grd_tmarks2: '',
        div_cls_cgpa2: '',
        board_institute2: '',
        e_exam_name3: '',
        e_group3: '',
        e_roll_no_3: '',
        e_passing_year3: '',
        e_ltr_grd_tmarks3: '',
        e_div_cls_cgpa3: '',
        e_board_institute3: '',
        e_exam_name4: '',
        e_group4: '',
        e_roll_no_4: '',
        e_passing_year4: '',
        e_ltr_grd_tmarks4: '',
        e_div_cls_cgpa4: '',
        e_board_institute4: '',
        //others
        refereed_by: '',
        refe_by_std_type: '',
        refereed_by_email: ''
      },
      education: {
        exam_name1: 'test',
        group1: 'a',
        roll_no1: '10',
        passing_year1: '2020',
        ltr_grd_tmarks1: '4',
        div_cls_cgpa1: '4',
        board_institute1: 'test'
      },
      errors: [],
      loading: false,
      departments: '',
      batches: '',
      shifts: '',
      groups: '',
      bloods: [{
        value: '',
        text: 'Please select an option',
        disabled: true
      }, {
        value: 'UN',
        text: 'UN'
      }, {
        value: 'A+',
        text: 'A+'
      }, {
        value: 'A-',
        text: 'A-'
      }, {
        value: 'B+',
        text: 'B+'
      }, {
        value: 'B-',
        text: 'B-'
      }, {
        value: 'O+',
        text: 'O+'
      }, {
        value: 'O-',
        text: 'O-'
      }, {
        value: 'AB+',
        text: 'AB+'
      }, {
        value: 'AB-',
        text: 'AB-'
      }],
      countries: [],
      refereedByParents: [],
      refeByStdTypes: [],
      file_path: '',
      signature_path: ''
    };
  },

  mounted() {
    this.fetchStudentInfo();
    this.fetchDepartmentInfo();
  },

  methods: {
    fetchStudentInfo() {
      this.$axios.$get('/admission/student-edit/' + this.$route.params.id).then(response => {
        // console.log(response);   
        this.student = response;
        this.fetchBatch();
        this.fetchShiftGroup();
      }).catch(error => {
        this.$toaster.error("Student Not found");
      });
    },

    fetchDepartmentInfo() {
      this.$axios.$get('/admission/department').then(response => {
        this.departments = response;
      }).catch(error => {
        this.$toaster.error("Department Not found");
      });
    },

    fetchBatch() {
      this.$axios.$get("/admission/batch/" + this.student.department_id).then(response => {
        this.batches = response.data;
      }).catch(error => {
        this.$toaster.error("Batch Not found");
      });
    },

    fetchShiftGroup() {
      this.$axios.$get("/admission/shift-group/" + this.student.batch_id).then(response => {
        console.log('shift', response);
        this.shifts = response;
        this.groups = response;
      }).catch(error => {
        this.$toaster.error("Batch Not found");
      });
    },

    previewStep(step) {
      if (step == 1) {
        this.generalStep = true;
        this.personalStep = false;
        this.familyStep = false;
        this.educationStep = false;
        this.othersStep = false;
      } else if (step == 2) {
        this.generalStep = false;
        this.personalStep = true;
        this.familyStep = false;
        this.educationStep = false;
        this.othersStep = false;
      } else if (step == 3) {
        this.generalStep = false;
        this.personalStep = false;
        this.familyStep = true;
        this.educationStep = false;
        this.othersStep = false;
      } else {
        this.generalStep = false;
        this.personalStep = false;
        this.familyStep = false;
        this.educationStep = true;
        this.othersStep = false;
      }
    },

    nextStep(stepName) {
      if (stepName == 'general') {
        this.generalInfo();
      }

      if (stepName == 'personal') {
        this.personalInfo();
      }

      if (stepName == 'family') {
        this.familyInfo();
      }

      if (stepName == 'education') {
        this.educationInfo();
      }
    },

    generalInfo() {
      if (!this.student.department_id) {
        this.$toaster.error("Please select department");
        return false;
      }

      if (!this.student.batch_id) {
        this.$toaster.error("Please select batch");
        return false;
      }

      if (!this.student.shift_id) {
        this.$toaster.error("Please select shift");
        return false;
      }

      if (!this.student.group_id) {
        this.$toaster.error("Please select group");
        return false;
      }

      if (!this.student.adm_frm_sl) {
        this.$toaster.error("Please enter admission form sl");
        return false;
      }

      this.generalStep = false;
      this.personalStep = true;
      this.familyStep = false;
      this.educationStep = false;
      this.othersStep = false;
    },

    personalInfo() {
      if (!this.student.student_name) {
        this.$toaster.error("Please enter student name");
        return false;
      }

      if (!this.student.blood_group) {
        this.$toaster.error("Please select blood group");
        return false;
      }

      if (!this.student.email) {
        this.$toaster.error("Please enter email");
        return false;
      }

      if (!this.student.phone_no) {
        this.$toaster.error("Please enter student mobile number");
        return false;
      }

      if (!this.student.religion_id) {
        this.$toaster.error("Please select religion");
        return false;
      }

      if (!this.student.gender) {
        this.$toaster.error("Please select gender");
        return false;
      }

      if (!this.student.dob) {
        this.$toaster.error("Please select date of birth");
        return false;
      }

      if (!this.student.birth_place) {
        this.$toaster.error("Please enter birth place");
        return false;
      }

      if (!this.student.nationality) {
        this.$toaster.error("Please select nationality");
        return false;
      }

      if (!this.student.std_birth_or_nid_no) {
        this.$toaster.error("Please birth or NID or passport No");
        return false;
      }

      if (!this.student.marital_status) {
        this.$toaster.error("Please select marital status");
        return false;
      } // if (document.getElementById('file_input').files[0] == undefined) {
      //     this.$toaster.error("Please select image");
      //     return false;
      // }
      // if (document.getElementById('signature').files[0] == undefined) {
      //     this.$toaster.error("Please select signature");
      //     return false;
      // }


      if (!this.student.permanent_add) {
        this.$toaster.error("Please enter permanent address");
        return false;
      }

      if (!this.student.mailing_add) {
        this.$toaster.error("Please enter mailing address");
        return false;
      }

      this.generalStep = false;
      this.personalStep = false;
      this.familyStep = true;
      this.educationStep = false;
      this.othersStep = false;
    },

    familyInfo() {
      if (!this.student.f_name) {
        this.$toaster.error("Please enter father name");
        return false;
      }

      if (!this.student.f_cellno) {
        this.$toaster.error("Please enter father cell");
        return false;
      }

      if (!this.student.father_nid_no) {
        this.$toaster.error("Please enter father nid");
        return false;
      }

      if (!this.student.m_name) {
        this.$toaster.error("Please enter mother name");
        return false;
      }

      if (!this.student.mother_nid_no) {
        this.$toaster.error("Please enter mother nid");
        return false;
      }

      if (!this.student.mother_nid_no) {
        this.$toaster.error("Please enter mother nid");
        return false;
      }

      if (!this.student.e_name) {
        this.$toaster.error("Please enter Emergency Contact Person name");
        return false;
      }

      if (!this.student.e_cellno) {
        this.$toaster.error("Please enter Emergency Contact Person cell");
        return false;
      }

      this.generalStep = false;
      this.personalStep = false;
      this.familyStep = false;
      this.educationStep = true;
      this.othersStep = false;
    },

    educationInfo() {
      // if (!this.student.e_exam_name1) {
      //     this.$toaster.error("Please enter name of the examination (Back Ground Education Info 1)");
      //     return false;
      // }
      // if (!this.student.e_group1) {
      //     this.$toaster.error("Please enter group (Back Ground Education Info 1)");
      //     return false;
      // }
      // if (!this.student.e_roll_no_1) {
      //     this.$toaster.error("Please enter roll (Back Ground Education Info 1)");
      //     return false;
      // }
      // if (!this.student.e_passing_year1) {
      //     this.$toaster.error("Please enter passing year (Back Ground Education Info 1)");
      //     return false;
      // }
      // if (!this.student.e_ltr_grd_tmarks1) {
      //     this.$toaster.error("Please enter letter or grade or total Marks (Back Ground Education Info 1)");
      //     return false;
      // }
      // if (!this.student.e_div_cls_cgpa1) {
      //     this.$toaster.error("Please enter divission or class or CGPA (Back Ground Education Info 1)");
      //     return false;
      // }
      // if (!this.student.e_board_institute1) {
      //     this.$toaster.error("Please enter board / institute (Back Ground Education Info 1)");
      //     return false;
      // }
      // if (!this.student.e_exam_name2) {
      //     this.$toaster.error("Please enter name of the examination (Back Ground Education Info 2)");
      //     return false;
      // }
      // if (!this.student.e_group2) {
      //     this.$toaster.error("Please enter group (Back Ground Education Info 2)");
      //     return false;
      // }
      // if (!this.student.e_roll_no_2) {
      //     this.$toaster.error("Please enter roll (Back Ground Education Info 2)");
      //     return false;
      // }
      // if (!this.student.e_passing_year2) {
      //     this.$toaster.error("Please enter passing year (Back Ground Education Info 2)");
      //     return false;
      // }
      // if (!this.student.e_ltr_grd_tmarks2) {
      //     this.$toaster.error("Please enter letter or grade or total Marks (Back Ground Education Info 2)");
      //     return false;
      // }
      // if (!this.student.e_div_cls_cgpa2) {
      //     this.$toaster.error("Please enter divission or class or CGPA (Back Ground Education Info 2)");
      //     return false;
      // }
      // if (!this.student.e_board_institute2) {
      //     this.$toaster.error("Please enter board / institute (Back Ground Education Info 2)");
      //     return false;
      // }
      // this.fetchRefereedByParent();
      this.generalStep = false;
      this.personalStep = false;
      this.familyStep = false;
      this.educationStep = false;
      this.othersStep = true;
    },

    sameAsPermanent() {
      if (!this.same_as_permanent) {
        this.student.mailing_add = this.student.permanent_add;
      } else {
        this.student.mailing_add = '';
      }
    },

    submitForm() {
      let formData = new FormData();

      for (const property in this.student) {
        formData.append(`${property}`, `${this.student[property]}`);
      }

      formData.append("file", document.getElementById('file_input').files[0]);
      formData.append("signature", document.getElementById('signature').files[0]);
      console.log(formData);
      this.$axios.$post('/admission/student-update/' + this.$route.params.id, formData, this.education, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then(response => {
        this.$toaster.success(response.message);
        console.log(response);
      }).catch(error => {
        if (error.response.status == 422) {
          this.$toaster.error('Validation error');
          return false;
        }

        if (error.response.status == 400) {
          this.$toaster.error(error.response.data.message);
          return false;
        }

        if (error.response.status == 404) {
          this.$toaster.error(error.response.data.error);
          return false;
        }

        this.$toaster.error("Something went wrong");
      });
    },

    fileValidationCheck() {
      let FileSize = document.getElementById('file_input').files[0].size / 1024 / 1024; // in MiB // 1MB

      const file = document.getElementById('file_input').files[0];
      this.file_path = URL.createObjectURL(file);

      if (FileSize > 1) {
        alert('File max size must be 1024KB');
        $("#file_input").val('');
        this.file_path = '';
        return false;
      }
    },

    fileSignatureValidationCheck() {
      let FileSize = document.getElementById('signature').files[0].size / 500 / 500; // in MiB // 1MB

      const file = document.getElementById('signature').files[0];
      this.signature_path = URL.createObjectURL(file);

      if (FileSize > 1) {
        alert('File max size must be 500KB');
        $("#signature").val('');
        this.signature_path = '';
        return false;
      }
    }

  }
}); // $('.form-control').selectpicker({
//     liveSearch: true,
//     size: 5
// });
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(55)["URL"]))

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(96);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("3669cf17", content, true, context)
};

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_467f34ce_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_467f34ce_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_467f34ce_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_467f34ce_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_467f34ce_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "ul li[data-v-467f34ce]{text-decoration:none;list-style:none}.bootstrap-select[data-v-467f34ce]:not([class*=col-]):not([class*=form-control]):not(.input-group-btn){width:100%!important}.btn-light[data-v-467f34ce]{height:35px!important}.dropdown-toggle[data-v-467f34ce]:after{position:absolute;right:10px}.dropdown-menu[data-v-467f34ce]{min-width:0!important}input[placeholder=\"SELECT DATE\"][data-v-467f34ce]{width:100%;border:2px solid #1976d2;border-radius:3px;height:38px;padding:0 10px}.day__month_btn[data-v-467f34ce],.month__year_btn[data-v-467f34ce]{color:#000!important}.next[data-v-467f34ce],.prev[data-v-467f34ce]{padding:0!important;background:none!important}.mt-10[data-v-467f34ce]{margin-top:10px}.nav-link.active[data-v-467f34ce]{color:#fff;background-color:#423a3d}.bg-1[data-v-467f34ce]{background-color:#f45e55;color:#f45e55}.bg-1[data-v-467f34ce],.bg-2[data-v-467f34ce]{border-radius:100%}.bg-2[data-v-467f34ce]{background-color:#f8bb45;color:#f8bb45}.bg-3[data-v-467f34ce]{background-color:#43cb47;border-radius:100%;color:#43cb47}.h5[data-v-467f34ce]{color:#0b0b0b;font-weight:700}.job-preview-list[data-v-467f34ce]{list-style:none}.nav-item a[data-v-467f34ce]{text-align:center!important}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=_id.js.map