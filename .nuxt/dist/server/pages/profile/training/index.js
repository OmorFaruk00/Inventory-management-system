exports.ids = [57];
exports.modules = {

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/training/index.vue?vue&type=template&id=ce3aa2bc&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"pt-5\" data-v-ce3aa2bc>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-ce3aa2bc>","</div>",[_vm._ssrNode("<div class=\"mx-auto col-md-12\" data-v-ce3aa2bc>","</div>",[_vm._ssrNode("<div class=\"panel\" data-v-ce3aa2bc>","</div>",[_vm._ssrNode("<div class=\"panel-heading\" data-v-ce3aa2bc>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-ce3aa2bc>","</div>",[_vm._ssrNode("<div class=\"col col-sm-5 col-xs-12\" data-v-ce3aa2bc><h4 class=\"title\" data-v-ce3aa2bc>training List</h4></div> "),_vm._ssrNode("<div class=\"col-sm-7 col-xs-12 text-right\" data-v-ce3aa2bc>","</div>",[_c('nuxt-link',{staticClass:"btn-add",attrs:{"to":"/profile/training/create"}},[_vm._v("Add training")])],1)],2)]),_vm._ssrNode(" <div class=\"panel-body table-responsive\" data-v-ce3aa2bc><table class=\"table table-striped text-center\" data-v-ce3aa2bc><thead data-v-ce3aa2bc><tr data-v-ce3aa2bc><th data-v-ce3aa2bc>Training Name</th> <th data-v-ce3aa2bc>Institute Name</th> <th data-v-ce3aa2bc>Duration</th> <th data-v-ce3aa2bc>Training Year</th> <th data-v-ce3aa2bc>Action</th></tr></thead> <tbody data-v-ce3aa2bc>"+(_vm._ssrList((_vm.trainings),function(training){return ("<tr data-v-ce3aa2bc><td data-v-ce3aa2bc>"+_vm._ssrEscape(_vm._s(training.training_name))+"</td> <td data-v-ce3aa2bc>"+_vm._ssrEscape(_vm._s(training.institute_name))+"</td> <td data-v-ce3aa2bc>"+_vm._ssrEscape(_vm._s(training.duration))+"</td> <td data-v-ce3aa2bc>"+_vm._ssrEscape(_vm._s(training.training_year))+"</td> <td data-v-ce3aa2bc><button class=\"btn-edit\" data-v-ce3aa2bc>\n                      Edit\n                    </button> <button class=\"btn-delete\" data-v-ce3aa2bc>\n                      Delete\n                    </button></td></tr>")}))+"</tbody></table></div>")],2)])]),_vm._ssrNode(" <div id=\"trainingUpdate\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\" class=\"modal fade\" data-v-ce3aa2bc><div role=\"document\" class=\"modal-dialog modal-dialog-centered\" data-v-ce3aa2bc><div class=\"modal-content\" data-v-ce3aa2bc><div class=\"modal-header\" data-v-ce3aa2bc><h5 class=\"title\" data-v-ce3aa2bc>\n              training Update\n            </h5> <button type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\" class=\"close\" data-v-ce3aa2bc><span aria-hidden=\"true\" data-v-ce3aa2bc>×</span></button></div> <div class=\"modal-body\" data-v-ce3aa2bc><div class=\"form-horizontal\" data-v-ce3aa2bc><div class=\"form-row\" data-v-ce3aa2bc><div class=\"form-group col-md-6 col-lg-6 col-sm-12\" data-v-ce3aa2bc><label class=\"form-label\" data-v-ce3aa2bc>Training Name</label> <input type=\"text\" placeholder"+(_vm._ssrAttr("value",(_vm.training.training_name)))+" class=\"form-control\" data-v-ce3aa2bc> "+((_vm.errors.training_name)?("<h6 class=\"text-danger\" data-v-ce3aa2bc>"+_vm._ssrEscape(_vm._s(_vm.errors.training_name[0]))+"</h6>"):"<!---->")+"</div> <div class=\"form-group col-md-6 col-lg-6 col-sm-12\" data-v-ce3aa2bc><label class=\"form-label\" data-v-ce3aa2bc>Duration</label> <input type=\"text\" placeholder"+(_vm._ssrAttr("value",(_vm.training.duration)))+" class=\"form-control\" data-v-ce3aa2bc> "+((_vm.errors.duration)?("<h6 class=\"text-danger\" data-v-ce3aa2bc>"+_vm._ssrEscape(_vm._s(_vm.errors.duration[0]))+"</h6>"):"<!---->")+"</div> <div class=\"form-group col-md-6 col-lg-6 col-sm-12\" data-v-ce3aa2bc><label class=\"form-label\" data-v-ce3aa2bc>Training Year</label> <input type=\"text\" placeholder=\"Ex-yyyy-mm-dd\""+(_vm._ssrAttr("value",(_vm.training.training_year)))+" class=\"form-control\" data-v-ce3aa2bc> "+((_vm.errors.training_year)?("<h6 class=\"text-danger\" data-v-ce3aa2bc>"+_vm._ssrEscape(_vm._s(_vm.errors.training_year[0]))+"</h6>"):"<!---->")+"</div> <div class=\"form-group col-md-6 col-lg-6 col-sm-12\" data-v-ce3aa2bc><label class=\"form-label\" data-v-ce3aa2bc>Institute Name</label> <input type=\"text\" placeholder"+(_vm._ssrAttr("value",(_vm.training.institute_name)))+" class=\"form-control\" data-v-ce3aa2bc> "+((_vm.errors.institute_name)?("<h6 class=\"text-danger\" data-v-ce3aa2bc>"+_vm._ssrEscape(_vm._s(_vm.errors.institute_name[0]))+"</h6>"):"<!---->")+"</div></div></div></div> <div class=\"modal-footer\" data-v-ce3aa2bc><button type=\"button\" class=\"btn-submit\" data-v-ce3aa2bc>\n              Update\n            </button></div></div></div></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/profile/training/index.vue?vue&type=template&id=ce3aa2bc&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/training/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var trainingvue_type_script_lang_js_ = ({
  layout: "Profile-content",

  mounted() {
    this.getTraining();
  },

  data() {
    return {
      trainings: '',
      training: {
        training_name: "",
        duration: "",
        training_year: "",
        institute_name: ""
      },
      errors: {}
    };
  },

  methods: {
    getTraining() {
      this.$axios.$get("/training/show").then(res => {
        console.log(res);
        this.trainings = res;
      }).catch(err => {
        console.log(err);
      });
    },

    trainingEdit(id) {
      $("#trainingUpdate").modal("show");
      this.$axios.$get("/training/edit/" + id).then(res => {
        this.training = res;
      }).catch(err => {
        console.log(err);
      });
    },

    trainingUpdate() {
      this.$axios.$post("/training/update/" + this.training.id, this.training).then(res => {
        this.getTraining();
        $("#trainingUpdate").modal("hide");
        this.$toaster.success(res.message);
        this.errors = "";
      }).catch(err => {
        console.log(err);
        this.errors = err.response.data.errors;
      });
    },

    trainingDelete(id) {
      if (confirm("Are you sure to delete this training?")) {
        this.$axios.$get("/training/delete/" + id).then(res => {
          this.getTraining();
          this.$toaster.error(res.message);
        }).catch(err => {
          console.log(err);
        });
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/profile/training/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var profile_trainingvue_type_script_lang_js_ = (trainingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/profile/training/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  profile_trainingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "ce3aa2bc",
  "3b2b0682"
  
)

/* harmony default export */ var training = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map