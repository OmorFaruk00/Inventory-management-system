exports.ids = [35];
exports.modules = {

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dum-ac/program/index.vue?vue&type=template&id=3adacca0&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"pt-5\" data-v-3adacca0>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-3adacca0>","</div>",[_vm._ssrNode("<div class=\"mx-auto col-md-12\" data-v-3adacca0>","</div>",[_vm._ssrNode("<div class=\"panel\" data-v-3adacca0>","</div>",[_vm._ssrNode("<div class=\"panel-heading\" data-v-3adacca0>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-3adacca0>","</div>",[_vm._ssrNode("<div class=\"col col-sm-5 col-xs-12\" data-v-3adacca0><h4 class=\"title\" data-v-3adacca0>Program List</h4></div> "),_vm._ssrNode("<div class=\"col-sm-7 col-xs-12 text-right\" data-v-3adacca0>","</div>",[_c('nuxt-link',{staticClass:"btn-add",attrs:{"to":"/dum-ac/program/create"}},[_vm._v("Add program")])],1)],2)]),_vm._ssrNode(" <div class=\"panel-body table-responsive\" data-v-3adacca0><table class=\"table table-striped  text-center\" data-v-3adacca0><thead data-v-3adacca0><tr data-v-3adacca0><th data-v-3adacca0>ID</th> <th data-v-3adacca0>Program name</th> <th data-v-3adacca0>Duration</th> <th data-v-3adacca0>Image</th> <th data-v-3adacca0>Status</th> <th data-v-3adacca0>Action</th></tr></thead> <tbody data-v-3adacca0>"+(_vm._ssrList((_vm.programs),function(program){return ("<tr data-v-3adacca0><td data-v-3adacca0>"+_vm._ssrEscape(_vm._s(program.id))+"</td> <td data-v-3adacca0>"+_vm._ssrEscape(_vm._s(program.name))+"</td> <td data-v-3adacca0>"+_vm._ssrEscape(_vm._s(program.duration))+"</td> <td data-v-3adacca0><img"+(_vm._ssrAttr("src",_vm.base_url + '/images/dum/' + program.image))+" alt=\"image\" style=\"height:80px\" data-v-3adacca0></td> <td data-v-3adacca0>"+((program.status == 1)?("<button class=\"btn-active\" data-v-3adacca0>\n                      Active\n                    </button>"):"<!---->")+" "+((program.status == 0)?("<button class=\"btn-inactive\" data-v-3adacca0>\n                      Inactive\n                    </button>"):"<!---->")+"</td> <td data-v-3adacca0><button class=\"btn-edit\" data-v-3adacca0>Edit</button> <button class=\"btn-delete\" data-v-3adacca0>\n                      Delete\n                    </button></td></tr>")}))+"</tbody></table></div>")],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<div id=\"programUpdate\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\" class=\"modal fade\" data-v-3adacca0>","</div>",[_vm._ssrNode("<div role=\"document\" class=\"modal-dialog modal-dialog-centered\" data-v-3adacca0>","</div>",[_vm._ssrNode("<div class=\"modal-content\" data-v-3adacca0>","</div>",[_vm._ssrNode("<div class=\"modal-header\" data-v-3adacca0><h5 id=\"exampleModalLongTitle\" class=\"modal-title\" data-v-3adacca0>program Update</h5> <button type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\" class=\"close\" data-v-3adacca0><span aria-hidden=\"true\" data-v-3adacca0>×</span></button></div> "),_vm._ssrNode("<div class=\"modal-body\" data-v-3adacca0>","</div>",[_vm._ssrNode("<div class=\"form-group\" data-v-3adacca0><label for data-v-3adacca0>Title</label> <input type=\"text\" id=\"name\" placeholder=\"Title\""+(_vm._ssrAttr("value",(_vm.program.name)))+" class=\"form-control\" data-v-3adacca0> "+((_vm.errors.title)?("<p class=\"text-danger\" data-v-3adacca0>"+_vm._ssrEscape(_vm._s(_vm.errors.title[0]))+"</p>"):"<!---->")+"</div> "),_vm._ssrNode("<div class=\"form-group\" data-v-3adacca0>","</div>",[_vm._ssrNode("<label data-v-3adacca0>Duration</label> "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.program.duration),expression:"program.duration"}],staticClass:"form-control",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.program, "duration", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"disabled":"","selected":"","value":""}},[_vm._v("Select Duration")]),_vm._v(" "),_c('option',{attrs:{"value":"1 Year"}},[_vm._v("1 Year")]),_vm._v(" "),_c('option',{attrs:{"value":"2 Year"}},[_vm._v("2 Year")]),_vm._v(" "),_c('option',{attrs:{"value":"3 Year"}},[_vm._v("3 Year")]),_vm._v(" "),_c('option',{attrs:{"value":"4 Year"}},[_vm._v("4 Year")])]),_vm._ssrNode(" "+((_vm.errors.duration)?("<h6 class=\"text-danger\" data-v-3adacca0>"+_vm._ssrEscape(_vm._s(_vm.errors.duration[0]))+"</h6>"):"<!---->"))],2),_vm._ssrNode(" <div class=\"form-group\" data-v-3adacca0><label for data-v-3adacca0>Image</label> <input required=\"required\" type=\"file\" id=\"program_image\" name=\"image\" accept=\"image/*\" class=\"form-control\" data-v-3adacca0> "+((_vm.errors.image)?("<p class=\"text-danger\" data-v-3adacca0>"+_vm._ssrEscape(_vm._s(_vm.errors.new_image[0]))+"</p>"):"<!---->")+"</div>")],2),_vm._ssrNode(" <div class=\"modal-footer\" data-v-3adacca0><button type=\"button\" class=\"btn btn-submit\" data-v-3adacca0>Update</button></div>")],2)])])],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/dum-ac/program/index.vue?vue&type=template&id=3adacca0&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dum-ac/program/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var programvue_type_script_lang_js_ = ({
  layout: "Dum-content",

  mounted() {
    this.getprogram();
  },

  data() {
    return {
      programs: [],
      program: {
        name: "",
        duration: "",
        new_image: ""
      },
      errors: {},
      base_url: "http://localhost:8000"
    };
  },

  methods: {
    getprogram() {
      this.$axios.$get("/program/show").then(res => {
        this.programs = res;
      }).catch(err => {
        console.log(err);
      });
    },

    programEdit(id) {
      $("#programUpdate").modal("show");
      this.$axios.$get("/program/edit/" + id).then(res => {
        this.program = res;
      }).catch(err => {
        console.log(err);
      });
    },

    programUpdate() {
      let formData = new FormData();
      formData.append('name', this.program.name);
      formData.append('duration', this.program.duration);

      if (this.program.new_image) {
        formData.append('image', this.program.new_image);
      }

      this.$axios.$post("/program/update/" + this.program.id, formData).then(res => {
        this.getprogram();
        $("#programUpdate").modal("hide");
        this.$toaster.success(res.message);
        this.errors = "";
      }).catch(err => {
        console.log(err);
        this.errors = err.response.data.errors;
      });
    },

    deleteprogram(id) {
      if (confirm("Are you sure to delete this program?")) {
        this.$axios.$get("/program/delete/" + id).then(res => {
          this.getprogram();
          this.$toaster.error(res.message);
        }).catch(err => {
          console.log(err);
        });
      }
    },

    programStatus(id, status) {
      this.$axios.$get("/program/status/" + id).then(res => {
        this.getprogram();
        this.$toaster.success(res.message);
      }).catch(err => {
        console.log(err);
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/dum-ac/program/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var dum_ac_programvue_type_script_lang_js_ = (programvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/dum-ac/program/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  dum_ac_programvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3adacca0",
  "5d6f51ca"
  
)

/* harmony default export */ var program = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map