exports.ids = [38];
exports.modules = {

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dum-ac/tution/create.vue?vue&type=template&id=7978b83a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pt-5"},[_vm._ssrNode("<div class=\"col-md-6 mx-auto form-shadow p-5\">","</div>",[_vm._ssrNode("<div class=\"d-flex justify-content-end\">","</div>",[_c('nuxt-link',{staticClass:"btn-add",attrs:{"to":"/dum-ac/tution"}},[_vm._v(" Tution List")])],1),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<div class=\"form-group\">","</div>",[_vm._ssrNode("<label for>Name Of Program</label> "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.tution.name_of_program),expression:"tution.name_of_program"}],staticClass:"form-control",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.tution, "name_of_program", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"disabled":"","selected":"","value":""}},[_vm._v("Select Program")]),_vm._v(" "),_vm._l((_vm.programs),function(program){return _c('option',{key:program.id,domProps:{"value":program.name}},[_vm._v(_vm._s(program.name))])})],2),_vm._ssrNode(" "+((_vm.errors.name_of_program)?("<p class=\"text-danger\">"+_vm._ssrEscape(_vm._s(_vm.errors.name_of_program[0]))+"</p>"):"<!---->"))],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"form-group\">","</div>",[_vm._ssrNode("<label>Type</label> "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.tution.type),expression:"tution.type"}],staticClass:"form-control",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.tution, "type", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"disabled":"","selected":"","value":""}},[_vm._v("Select Type")]),_vm._v(" "),_c('option',{attrs:{"value":"residential"}},[_vm._v("Residential")]),_vm._v(" "),_c('option',{attrs:{"value":"non_residential"}},[_vm._v("Non Residential")]),_vm._v(" "),_c('option',{attrs:{"value":"day_care"}},[_vm._v("Day Care")])]),_vm._ssrNode(" "+((_vm.errors.type)?("<h6 class=\"text-danger\">"+_vm._ssrEscape(_vm._s(_vm.errors.type[0]))+"</h6>"):"<!---->"))],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"form-group\">","</div>",[_vm._ssrNode("<label>Duration</label> "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.tution.duration),expression:"tution.duration"}],staticClass:"form-control",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.tution, "duration", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"disabled":"","selected":"","value":""}},[_vm._v("Select Duration")]),_vm._v(" "),_c('option',{attrs:{"value":"1 Year"}},[_vm._v("1 Year")]),_vm._v(" "),_c('option',{attrs:{"value":"2 Year"}},[_vm._v("2 Year")]),_vm._v(" "),_c('option',{attrs:{"value":"3 Year"}},[_vm._v("3 Year")]),_vm._v(" "),_c('option',{attrs:{"value":"4 Year"}},[_vm._v("4 Year")])]),_vm._ssrNode(" "+((_vm.errors.duration)?("<h6 class=\"text-danger\">"+_vm._ssrEscape(_vm._s(_vm.errors.duration[0]))+"</h6>"):"<!---->"))],2),_vm._ssrNode(" <div class=\"form-group\"><label for>Total Fee</label> <input type=\"text\" id=\"name_of_program\" placeholder=\"Total Fee\""+(_vm._ssrAttr("value",(_vm.tution.total_fee)))+" class=\"form-control\"> "+((_vm.errors.total_fee)?("<p class=\"text-danger\">"+_vm._ssrEscape(_vm._s(_vm.errors.total_fee[0]))+"</p>"):"<!---->")+"</div> <div class=\"d-flex justify-content-end\"><button class=\"btn-submit\">\n                    Submit\n                </button></div>")],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/dum-ac/tution/create.vue?vue&type=template&id=7978b83a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dum-ac/tution/create.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var createvue_type_script_lang_js_ = ({
  layout: "Dum-content",

  data() {
    return {
      tution: {
        name_of_program: "",
        total_fee: "",
        duration: "",
        type: ""
      },
      programs: '',
      errors: {}
    };
  },

  mounted() {
    this.getProgram();
  },

  methods: {
    getProgram() {
      this.$axios.$get("/program/show").then(res => {
        this.programs = res;
      }).catch(err => {
        console.log(err);
      });
    },

    addTution() {
      this.$axios.$post("/tution/add", this.tution).then(res => {
        this.tution = "";
        this.errors = {};
        this.$toaster.success(res.message);
        this.$router.push("/dum-ac/tution");
      }).catch(error => {
        this.errors = error.response.data.errors;
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/dum-ac/tution/create.vue?vue&type=script&lang=js&
 /* harmony default export */ var tution_createvue_type_script_lang_js_ = (createvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/dum-ac/tution/create.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  tution_createvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "09a6c00e"
  
)

/* harmony default export */ var create = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=create.js.map