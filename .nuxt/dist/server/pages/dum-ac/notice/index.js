exports.ids = [33];
exports.modules = {

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dum-ac/notice/index.vue?vue&type=template&id=e3bd3ba8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"pt-5\" data-v-e3bd3ba8>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-e3bd3ba8>","</div>",[_vm._ssrNode("<div class=\"mx-auto col-md-12\" data-v-e3bd3ba8>","</div>",[_vm._ssrNode("<div class=\"panel\" data-v-e3bd3ba8>","</div>",[_vm._ssrNode("<div class=\"panel-heading\" data-v-e3bd3ba8>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-e3bd3ba8>","</div>",[_vm._ssrNode("<div class=\"col col-sm-5 col-xs-12\" data-v-e3bd3ba8><h4 class=\"title\" data-v-e3bd3ba8>notice List</h4></div> "),_vm._ssrNode("<div class=\"col-sm-7 col-xs-12 text-right\" data-v-e3bd3ba8>","</div>",[_c('nuxt-link',{staticClass:"btn-add",attrs:{"to":"/dum-ac/notice/create"}},[_vm._v("Add notice")])],1)],2)]),_vm._ssrNode(" <div class=\"panel-body table-responsive\" data-v-e3bd3ba8><table class=\"table table-striped  text-center\" data-v-e3bd3ba8><thead data-v-e3bd3ba8><tr data-v-e3bd3ba8><th data-v-e3bd3ba8>ID</th> <th data-v-e3bd3ba8>Title</th> <th data-v-e3bd3ba8>Description</th> <th data-v-e3bd3ba8>Image</th> <th data-v-e3bd3ba8>Status</th> <th style=\"width:200px\" data-v-e3bd3ba8>Action</th></tr></thead> <tbody data-v-e3bd3ba8>"+(_vm._ssrList((_vm.notices),function(notice){return ("<tr data-v-e3bd3ba8><td data-v-e3bd3ba8>"+_vm._ssrEscape(_vm._s(notice.id))+"</td> <td data-v-e3bd3ba8>"+_vm._ssrEscape(_vm._s(notice.title))+"</td> <td data-v-e3bd3ba8>"+_vm._ssrEscape(_vm._s(notice.description))+"</td> <td data-v-e3bd3ba8><img"+(_vm._ssrAttr("src",_vm.base_url + '/images/dum/' + notice.image))+" alt=\"image\" style=\"height:80px\" data-v-e3bd3ba8></td> <td data-v-e3bd3ba8>"+((notice.status == 1)?("<button class=\"btn-active\" data-v-e3bd3ba8>\n                      Active\n                    </button>"):"<!---->")+" "+((notice.status == 0)?("<button class=\"btn-inactive\" data-v-e3bd3ba8>\n                      Inactive\n                    </button>"):"<!---->")+"</td> <td data-v-e3bd3ba8><button class=\"btn-edit\" data-v-e3bd3ba8>Edit</button> <button class=\"btn-delete\" data-v-e3bd3ba8>\n                      Delete\n                    </button></td></tr>")}))+"</tbody></table></div>")],2)])]),_vm._ssrNode(" <div id=\"noticeUpdate\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\" class=\"modal fade\" data-v-e3bd3ba8><div role=\"document\" class=\"modal-dialog modal-dialog-centered\" data-v-e3bd3ba8><div class=\"modal-content\" data-v-e3bd3ba8><div class=\"modal-header\" data-v-e3bd3ba8><h5 id=\"exampleModalLongTitle\" class=\"modal-title\" data-v-e3bd3ba8>notice Update</h5> <button type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\" class=\"close\" data-v-e3bd3ba8><span aria-hidden=\"true\" data-v-e3bd3ba8>×</span></button></div> <div class=\"modal-body\" data-v-e3bd3ba8><div class=\"form-group\" data-v-e3bd3ba8><label for data-v-e3bd3ba8>Title</label> <input type=\"text\" id=\"name\" placeholder=\"Title\""+(_vm._ssrAttr("value",(_vm.notice.title)))+" class=\"form-control\" data-v-e3bd3ba8> "+((_vm.errors.title)?("<p class=\"text-danger\" data-v-e3bd3ba8>"+_vm._ssrEscape(_vm._s(_vm.errors.title[0]))+"</p>"):"<!---->")+"</div> <div class=\"form-group\" data-v-e3bd3ba8><label for data-v-e3bd3ba8>Short Description</label> <input type=\"text\" id=\"name\" placeholder=\"Short Description\""+(_vm._ssrAttr("value",(_vm.notice.description)))+" class=\"form-control\" data-v-e3bd3ba8> "+((_vm.errors.description)?("<p class=\"text-danger\" data-v-e3bd3ba8>"+_vm._ssrEscape(_vm._s(_vm.errors.description[0]))+"</p>"):"<!---->")+"</div> <div class=\"form-group\" data-v-e3bd3ba8><label for data-v-e3bd3ba8>Image</label> <input required=\"required\" type=\"file\" id=\"notice_image\" name=\"image\" accept=\"image/*\" data-v-e3bd3ba8> "+((_vm.errors.image)?("<p class=\"text-danger\" data-v-e3bd3ba8>"+_vm._ssrEscape(_vm._s(_vm.errors.image[0]))+"</p>"):"<!---->")+"</div></div> <div class=\"modal-footer\" data-v-e3bd3ba8><button type=\"button\" class=\"btn btn-submit\" data-v-e3bd3ba8>Update</button></div></div></div></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/dum-ac/notice/index.vue?vue&type=template&id=e3bd3ba8&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dum-ac/notice/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var noticevue_type_script_lang_js_ = ({
  layout: "Dum-content",

  mounted() {
    this.getnotice();
  },

  data() {
    return {
      notices: [],
      notice: {
        title: "",
        description: "",
        new_image: "",
        slug: ""
      },
      errors: {},
      base_url: "http://localhost:8000"
    };
  },

  methods: {
    getnotice() {
      this.$axios.$get("/notice/show").then(res => {
        this.notices = res;
      }).catch(err => {
        console.log(err);
      });
    },

    noticeEdit(id) {
      $("#noticeUpdate").modal("show");
      this.$axios.$get("/notice/edit/" + id).then(res => {
        this.notice = res;
      }).catch(err => {
        console.log(err);
      });
    },

    noticeUpdate() {
      let formData = new FormData();
      formData.append('title', this.notice.title);
      formData.append('description', this.notice.description);

      if (this.notice.new_image) {
        formData.append('image', this.notice.new_image);
      }

      this.$axios.$post("/notice/update/" + this.notice.id, formData).then(res => {
        this.getnotice();
        $("#noticeUpdate").modal("hide");
        this.$toaster.success(res.message);
        this.errors = "";
      }).catch(err => {
        console.log(err);
        this.errors = err.response.data.errors;
      });
    },

    deletenotice(id) {
      if (confirm("Are you sure to delete this notice?")) {
        this.$axios.$get("/notice/delete/" + id).then(res => {
          this.getnotice();
          this.$toaster.error(res.message);
        }).catch(err => {
          console.log(err);
        });
      }
    },

    noticeStatus(id) {
      this.$axios.$get("/notice/status/" + id).then(res => {
        this.getnotice();
        this.$toaster.success(res.message);
      }).catch(err => {
        console.log(err);
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/dum-ac/notice/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var dum_ac_noticevue_type_script_lang_js_ = (noticevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/dum-ac/notice/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  dum_ac_noticevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "e3bd3ba8",
  "2aecdd68"
  
)

/* harmony default export */ var notice = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map