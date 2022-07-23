exports.ids = [2];
exports.modules = {

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/account/index.vue?vue&type=template&id=66ec6242&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"accounts"},[_vm._ssrNode("<div class=\"container py-5\">","</div>",[_vm._ssrNode("<div class=\"card\">","</div>",[_vm._ssrNode("<div class=\"card-body\">","</div>",[_vm._ssrNode((_vm._ssrList((_vm.errors),function(error){return ("<p class=\"text-danger\">"+_vm._ssrEscape("* "+_vm._s(error[0]))+"</p>")}))+" "+((_vm.errors&&_vm.errors.message)?("<p>"+_vm._ssrEscape("* "+_vm._s(_vm.errors.message))+"</p>"):"<!---->")+" "),_vm._ssrNode("<form method=\"POST\" class=\"row g-3\">","</form>",[_vm._ssrNode("<div class=\"col-md-6\">","</div>",[_vm._ssrNode("<label for=\"inputStae\" class=\"form-label\">Class</label> "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.classId),expression:"classId"}],staticClass:"form-control",attrs:{"id":"inputStae"},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.classId=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},_vm.getPurpose]}},[_c('option',{attrs:{"selected":"","disabled":"","value":""}},[_vm._v("Choose...")]),_vm._v(" "),_vm._l((_vm.classes),function(cls){return _c('option',{key:cls.id,domProps:{"value":cls.id}},[_vm._v("\n                "+_vm._s(cls.name)+"\n              ")])})],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-md-6\">","</div>",[_vm._ssrNode("<label for=\"inputState\" class=\"form-label\">Roll</label> "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.roll),expression:"roll"}],staticClass:"form-control",attrs:{"id":"inputState"},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.roll=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_c('option',{attrs:{"selected":"","disabled":"","value":""}},[_vm._v("Choose...")]),_vm._v(" "),_c('option',{attrs:{"value":"1"}},[_vm._v("1")]),_vm._v(" "),_c('option',{attrs:{"value":"2"}},[_vm._v("2")]),_vm._v(" "),_c('option',{attrs:{"value":"3"}},[_vm._v("3")])])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-md-6\">","</div>",[_vm._ssrNode("<label for=\"inputState\" class=\"form-label\">Purpose</label> "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.purpose),expression:"purpose"}],staticClass:"form-control",attrs:{"id":"inputState"},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.purpose=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_c('option',{attrs:{"selected":"","disabled":"","value":""}},[_vm._v("Choose...")]),_vm._v(" "),_vm._l((_vm.purposes),function(purpo,i){return _c('option',{key:i,domProps:{"value":purpo.id,"textContent":_vm._s(purpo.name)}})})],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-md-6\">","</div>",[_vm._ssrNode("<label for=\"inputState\" class=\"form-label\">Pay By</label> "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.payBy),expression:"payBy"}],staticClass:"form-control",attrs:{"id":"inputState"},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.payBy=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_c('option',{attrs:{"selected":"","disabled":"","value":""}},[_vm._v("Choose...")]),_vm._v(" "),_c('option',{attrs:{"value":"BANK"}},[_vm._v("BANK")]),_vm._v(" "),_c('option',{attrs:{"value":"LILHA"}},[_vm._v("LILHA")]),_vm._v(" "),_c('option',{attrs:{"value":"COD"}},[_vm._v("COD")])])],2),_vm._ssrNode(" <div class=\"col-md-6\"><label for=\"inpu4\" class=\"form-label\">Total Pay "+((_vm.totalPay)?("<span readonly=\"readonly\">"+_vm._ssrEscape(_vm._s('('+_vm.totalPay+')'))+"</span>"):"<!---->")+"</label> <input type=\"number\" id=\"inpu4\""+(_vm._ssrAttr("value",(_vm.amount)))+" class=\"form-control\"></div> "+((_vm.payBy === 'LILHA')?("<div class=\"col-6\"><label for=\"inputAddress2\" class=\"form-label\">LILHA PAY Amount</label> <input type=\"number\" id=\"inputAddress2\" placeholder=\"Enter Amount\""+(_vm._ssrAttr("value",(_vm.lilha_pay)))+" class=\"form-control\"></div>"):"<!---->")+" "+((_vm.payBy === 'BANK')?("<div class=\"col-12\"><label for=\"inputAddress2\" class=\"form-label\">RECEIPT NO</label> <input type=\"number\" id=\"inputAddress2\" placeholder=\"Enter Amount\""+(_vm._ssrAttr("value",(_vm.receiptNo)))+" class=\"form-control\"></div>"):"<!---->")+" "+((_vm.getPurposeMonth)?("<div class=\"col-12\"><label for=\"inputAddress2\" class=\"form-label\">Month No</label> <input type=\"number\" id=\"inputAddress2\" placeholder=\"Enter Amount\""+(_vm._ssrAttr("value",(_vm.monthCount)))+" class=\"form-control\"></div>"):"<!---->")+" <div class=\"col-12\"><label for=\"inputAddress2\" class=\"form-label\">Discount</label> <input type=\"number\" id=\"inputAddress2\" placeholder=\"Discount\""+(_vm._ssrAttr("value",(_vm.scholarship)))+" class=\"form-control\"></div> <div class=\"col-12\"><label for=\"inputAddress2\" class=\"form-label\">Discount Type</label> <input type=\"text\" id=\"inputAddress2\" placeholder=\"Discount Type\""+(_vm._ssrAttr("value",(_vm.scholarship_type)))+" class=\"form-control\"></div> <div class=\"col-12\"><label for=\"inputAddress2\" class=\"form-label\">Date</label> <input type=\"date\" id=\"inputAddress2\" placeholder=\"Date\""+(_vm._ssrAttr("value",(_vm.date)))+" class=\"form-control\"></div> <div class=\"col-12 mt-2\"><button type=\"submit\" class=\"btn btn-info\">Make Payment</button></div>")],2)],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/account/index.vue?vue&type=template&id=66ec6242&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/account/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var accountvue_type_script_lang_js_ = ({
  data() {
    return {
      payBy: "",
      department: "",
      classId: "",
      roll: "",
      purpose: "",
      amount: "",
      lilha_pay: "",
      receiptNo: "",
      date: "",
      scholarship: "",
      scholarship_type: "",
      purposes: "",
      classes: "",
      monthCount: "",
      errors: ""
    };
  },

  mounted() {
    // this.getPurpose();
    this.getClass();
  },

  methods: {
    getClass() {
      this.$axios.get("/accounts/class").then(res => {
        this.classes = res.data;
      });
    },

    getPurpose() {
      this.$axios.get("/accounts/purpose/" + this.classId).then(res => {
        this.purposes = res.data;
      });
    },

    takingCost() {
      this.$axios.post("/accounts/costs-taking", {
        department: this.department,
        class: this.classId,
        roll: this.roll,
        purpose: this.purpose,
        scholarship: this.scholarship,
        scholarship_type: this.scholarship_type,
        payBy: this.payBy,
        amount: this.amount,
        receiptNo: this.receiptNo,
        date: this.date,
        discount: this.discount,
        monthCount: this.monthCount
      }).then(response => {
        this.payBy = "", this.department = "", this.classId = "", this.roll = "", this.purpose = "", this.amount = "", this.lilha_pay = "", this.receiptNo = "", this.date = "", this.scholarship = "", this.scholarship_type = "", this.monthCount = "", this.$toaster.success(response.data.message);
      }).catch(error => {
        if (error.response.status === 422) {
          if (error.response.data.message) {
            this.$toaster.success(error.response.data.message);
          }

          this.errors = error.response.data.errors;
        } else {}
      });
    }

  },
  computed: {
    totalPay() {
      let amount = "";

      if (this.purposes.length > 0) {
        this.purposes.filter(purpo => {
          if (purpo.id === this.purpose) {
            amount = parseInt(purpo.amount);
          }
        });
      }

      return amount;
    },

    getPurposeMonth() {
      let month = 0;

      if (this.purposes.length > 0) {
        this.purposes.filter(purpo => {
          if (purpo.id === this.purpose) {
            month = parseInt(purpo.month_wise);
          }
        });
      }

      return month;
    }

  },
  layout: 'Account-content'
});
// CONCATENATED MODULE: ./pages/account/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_accountvue_type_script_lang_js_ = (accountvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/account/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_accountvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "2831dc41"
  
)

/* harmony default export */ var account = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map