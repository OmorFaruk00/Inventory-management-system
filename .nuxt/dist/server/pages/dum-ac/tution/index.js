exports.ids = [39];
exports.modules = {

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dum-ac/tution/index.vue?vue&type=template&id=126f1bee&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"pt-5\" data-v-126f1bee>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-126f1bee>","</div>",[_vm._ssrNode("<div class=\"mx-auto col-md-12\" data-v-126f1bee>","</div>",[_vm._ssrNode("<div class=\"panel\" data-v-126f1bee>","</div>",[_vm._ssrNode("<div class=\"panel-heading\" data-v-126f1bee>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-126f1bee>","</div>",[_vm._ssrNode("<div class=\"col col-sm-5 col-xs-12\" data-v-126f1bee><h4 class=\"title\" data-v-126f1bee>tution List</h4></div> "),_vm._ssrNode("<div class=\"col-sm-7 col-xs-12 text-right\" data-v-126f1bee>","</div>",[_c('nuxt-link',{staticClass:"btn-add",attrs:{"to":"/dum-ac/tution/create"}},[_vm._v("Add tution")])],1)],2)]),_vm._ssrNode(" <div class=\"panel-body table-responsive\" data-v-126f1bee><table class=\"table table-striped text-center\" data-v-126f1bee><thead data-v-126f1bee><tr data-v-126f1bee><th data-v-126f1bee>ID</th> <th data-v-126f1bee>Name Of Program</th> <th data-v-126f1bee>Duration</th> <th data-v-126f1bee>Type</th> <th data-v-126f1bee>Total Fee</th> <th data-v-126f1bee>Status</th> <th style=\"width:200px\" data-v-126f1bee>Action</th></tr></thead> <tbody data-v-126f1bee>"+(_vm._ssrList((_vm.tutions),function(tution){return ("<tr data-v-126f1bee><td data-v-126f1bee>"+_vm._ssrEscape(_vm._s(tution.id))+"</td> <td data-v-126f1bee>"+_vm._ssrEscape(_vm._s(tution.name_of_program))+"</td> <td data-v-126f1bee>"+_vm._ssrEscape(_vm._s(tution.duration))+"</td> <td data-v-126f1bee>"+_vm._ssrEscape(_vm._s(tution.type))+"</td> <td data-v-126f1bee>"+_vm._ssrEscape(_vm._s(tution.total_fee))+"</td> <td data-v-126f1bee>"+((tution.status == 1)?("<button class=\"btn-active\" data-v-126f1bee>\n                      Active\n                    </button>"):"<!---->")+" "+((tution.status == 0)?("<button class=\"btn-inactive\" data-v-126f1bee>\n                      Inactive\n                    </button>"):"<!---->")+"</td> <td data-v-126f1bee><button class=\"btn-edit\" data-v-126f1bee>\n                      Edit\n                    </button> <button class=\"btn-delete\" data-v-126f1bee>\n                      Delete\n                    </button></td></tr>")}))+"</tbody></table></div>")],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<div id=\"tutionUpdate\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\" class=\"modal fade\" data-v-126f1bee>","</div>",[_vm._ssrNode("<div role=\"document\" class=\"modal-dialog modal-dialog-centered\" data-v-126f1bee>","</div>",[_vm._ssrNode("<div class=\"modal-content\" data-v-126f1bee>","</div>",[_vm._ssrNode("<div class=\"modal-header\" data-v-126f1bee><h5 id=\"exampleModalLongTitle\" class=\"modal-title\" data-v-126f1bee>\n              Tution Fee Update\n            </h5> <button type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\" class=\"close\" data-v-126f1bee><span aria-hidden=\"true\" data-v-126f1bee>×</span></button></div> "),_vm._ssrNode("<div class=\"modal-body\" data-v-126f1bee>","</div>",[_vm._ssrNode("<div class=\"form-group\" data-v-126f1bee>","</div>",[_vm._ssrNode("<label for data-v-126f1bee>Name Of Program</label> "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.tution.name_of_program),expression:"tution.name_of_program"}],staticClass:"form-control",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.tution, "name_of_program", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"disabled":"","selected":"","value":""}},[_vm._v("Select Program")]),_vm._v(" "),_vm._l((_vm.programs),function(program){return _c('option',{key:program.id,domProps:{"value":program.name}},[_vm._v(_vm._s(program.name))])})],2),_vm._ssrNode(" "+((_vm.errors.name_of_program)?("<p class=\"text-danger\" data-v-126f1bee>"+_vm._ssrEscape(_vm._s(_vm.errors.name_of_program[0]))+"</p>"):"<!---->"))],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"form-group\" data-v-126f1bee>","</div>",[_vm._ssrNode("<label data-v-126f1bee>Type</label> "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.tution.type),expression:"tution.type"}],staticClass:"form-control",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.tution, "type", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"disabled":"","selected":"","value":""}},[_vm._v("Select Type")]),_vm._v(" "),_c('option',{attrs:{"value":"residential"}},[_vm._v("Residential")]),_vm._v(" "),_c('option',{attrs:{"value":"non_residential"}},[_vm._v("Non Residential")]),_vm._v(" "),_c('option',{attrs:{"value":"day_care"}},[_vm._v("Day Care")])]),_vm._ssrNode(" "+((_vm.errors.type)?("<h6 class=\"text-danger\" data-v-126f1bee>"+_vm._ssrEscape(_vm._s(_vm.errors.type[0]))+"</h6>"):"<!---->"))],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"form-group\" data-v-126f1bee>","</div>",[_vm._ssrNode("<label data-v-126f1bee>Duration</label> "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.tution.duration),expression:"tution.duration"}],staticClass:"form-control",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.tution, "duration", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"disabled":"","selected":"","value":""}},[_vm._v("Select Duration")]),_vm._v(" "),_vm._l((_vm.programs),function(program){return _c('option',{key:program.id,domProps:{"value":program.duration}},[_vm._v(_vm._s(program.duration))])})],2),_vm._ssrNode(" "+((_vm.errors.duration)?("<h6 class=\"text-danger\" data-v-126f1bee>"+_vm._ssrEscape(_vm._s(_vm.errors.duration[0]))+"</h6>"):"<!---->"))],2),_vm._ssrNode(" <div class=\"form-group\" data-v-126f1bee><label for data-v-126f1bee>Total Fee</label> <input type=\"text\" id=\"name_of_program\" placeholder=\"Total Fee\""+(_vm._ssrAttr("value",(_vm.tution.total_fee)))+" class=\"form-control\" data-v-126f1bee> "+((_vm.errors.total_fee)?("<p class=\"text-danger\" data-v-126f1bee>"+_vm._ssrEscape(_vm._s(_vm.errors.total_fee[0]))+"</p>"):"<!---->")+"</div>")],2),_vm._ssrNode(" <div class=\"modal-footer\" data-v-126f1bee><button type=\"button\" class=\"btn btn-submit\" data-v-126f1bee>\n              Update\n            </button></div>")],2)])])],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/dum-ac/tution/index.vue?vue&type=template&id=126f1bee&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dum-ac/tution/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var tutionvue_type_script_lang_js_ = ({
  layout: "Dum-content",

  mounted() {
    this.getTution();
    this.getProgram();
  },

  data() {
    return {
      tutions: [],
      tution: {
        name_of_program: "",
        duration: "",
        type: "",
        total_fee: ""
      },
      errors: {},
      programs: ''
    };
  },

  methods: {
    getProgram() {
      this.$axios.$get("/program/show").then(res => {
        this.programs = res;
      }).catch(err => {
        console.log(err);
      });
    },

    getTution() {
      this.$axios.$get("/tution/show").then(res => {
        console.log(res);
        this.tutions = res;
      }).catch(err => {
        console.log(err);
      });
    },

    tutionEdit(id) {
      $("#tutionUpdate").modal("show");
      this.$axios.$get("/tution/edit/" + id).then(res => {
        this.tution = res;
      }).catch(err => {
        console.log(err);
      });
    },

    tutionUpdate() {
      this.$axios.$post("/tution/update/" + this.tution.id, this.tution).then(res => {
        this.getTution();
        $("#tutionUpdate").modal("hide");
        this.$toaster.success(res.message);
        this.errors = "";
      }).catch(err => {
        console.log(err);
        this.errors = err.response.data.errors;
      });
    },

    deletetution(id) {
      if (confirm("Are you sure to delete this tution?")) {
        this.$axios.$get("/tution/delete/" + id).then(res => {
          this.getTution();
          this.$toaster.error(res.message);
        }).catch(err => {
          console.log(err);
        });
      }
    },

    tutionStatus(id) {
      this.$axios.$get("/tution/status/" + id).then(res => {
        this.getTution();
        this.$toaster.success(res.message);
      }).catch(err => {
        console.log(err);
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/dum-ac/tution/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var dum_ac_tutionvue_type_script_lang_js_ = (tutionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/dum-ac/tution/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  dum_ac_tutionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "126f1bee",
  "27da9765"
  
)

/* harmony default export */ var tution = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map