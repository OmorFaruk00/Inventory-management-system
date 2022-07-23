exports.ids = [1];
exports.modules = {

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/account/class.vue?vue&type=template&id=161a33c5&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"py-2"},[_vm._ssrNode("<h3>Create Class</h3> <div class=\"row\"><div class=\"col-12\"><form><div class=\"form-group\"><label for=\"inputAddress2\">Class Name</label> <input type=\"text\" id=\"inputAddress2\" placeholder=\"Class Name\""+(_vm._ssrAttr("value",(_vm.name)))+" class=\"form-control\"> "+((_vm.error && _vm.error.name)?("<span class=\"text-danger\">"+_vm._ssrEscape(_vm._s(_vm.error.name[0]))+"</span>"):"<!---->")+"</div> <div class=\"form-group\"><label for=\"inputAddress2\">Admission Fee</label> <input type=\"number\" id=\"inputAddress2\" placeholder=\"Class Description\""+(_vm._ssrAttr("value",(_vm.admissionFee)))+" class=\"form-control\"> "+((_vm.error && _vm.error.admission_fee)?("<span class=\"text-danger\">"+_vm._ssrEscape(_vm._s(_vm.error.admission_fee[0]))+"</span>"):"<!---->")+"</div> <div class=\"form-group\"><label for=\"inputAddress2\">Monthly fee</label> <input type=\"number\" id=\"inputAddress2\" placeholder=\"Class Price\""+(_vm._ssrAttr("value",(_vm.monthlyFee)))+" class=\"form-control\"> "+((_vm.error && _vm.error.monthly_fee)?("<span class=\"text-danger\">"+_vm._ssrEscape(_vm._s(_vm.error.monthly_fee[0]))+"</span>"):"<!---->")+"</div> <div class=\"form-group\"><label for=\"inputAddress2\">Total fee</label> <input type=\"number\" id=\"inputAddress3\" placeholder=\"Class Price\""+(_vm._ssrAttr("value",(_vm.totalFee)))+" class=\"form-control\"></div> <button class=\"btn btn-info\">Make Class</button></form></div></div> <hr> <div><table class=\"table table-striped\"><thead><tr><th scope=\"col\">#</th> <th scope=\"col\">Class Name</th> <th scope=\"col\">Admission Fee</th> <th scope=\"col\">Monthly Fee</th></tr></thead> <tbody>"+(_vm._ssrList((_vm.classes),function(cls,i){return ("<tr><th scope=\"row\">"+_vm._ssrEscape(_vm._s(++i))+"</th> <td>"+_vm._ssrEscape(_vm._s(cls.name))+"</td> <td>"+_vm._ssrEscape(_vm._s(cls.admission_fee))+"</td> <td>"+_vm._ssrEscape(_vm._s(cls.monthly_fee))+"</td></tr>")}))+" "+((_vm.classes === null)?("<h3 class=\"text-center\">Loading...</h3>"):"<!---->")+"</tbody></table></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/account/class.vue?vue&type=template&id=161a33c5&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/account/class.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var classvue_type_script_lang_js_ = ({
  layout: "Emp-content",

  data() {
    return {
      name: "",
      admissionFee: "",
      monthlyFee: "",
      classes: null,
      error: ""
    };
  },

  created() {
    this.getClass();
  },

  computed: {
    totalFee() {
      if (this.admissionFee && this.monthlyFee) {
        return parseInt(this.admissionFee) + parseInt(this.monthlyFee);
      }
    }

  },
  methods: {
    createClass() {
      this.$axios.post("/accounts/class", {
        name: this.name,
        admissionFee: this.admissionFee,
        monthlyFee: this.monthlyFee
      }).then(response => {
        this.classes = [...this.classes, {
          id: this.classes.length + 1,
          name: this.name,
          admission_fee: this.admissionFee,
          monthly_fee: this.monthlyFee
        }];
        this.name = "", this.admissionFee = "", this.monthlyFee = "", this.$toaster.success(response.data.message);
        this.$router.push("/account/class");
      }).catch(error => {
        if (error.response.status === 422) {
          this.error = error.response.data.errors;
        }

        console.log(error);
      });
    },

    getClass() {
      this.$axios.get("/accounts/class").then(response => {
        this.classes = response.data;
      }).catch(error => {
        console.log(error);
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/account/class.vue?vue&type=script&lang=js&
 /* harmony default export */ var account_classvue_type_script_lang_js_ = (classvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/account/class.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  account_classvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "57bf99e7"
  
)

/* harmony default export */ var account_class = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=class.js.map