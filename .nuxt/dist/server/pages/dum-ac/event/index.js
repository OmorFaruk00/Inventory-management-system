exports.ids = [27];
exports.modules = {

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dum-ac/event/index.vue?vue&type=template&id=cd395148&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"pt-5\" data-v-cd395148>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-cd395148>","</div>",[_vm._ssrNode("<div class=\"mx-auto col-md-12\" data-v-cd395148>","</div>",[_vm._ssrNode("<div class=\"panel\" data-v-cd395148>","</div>",[_vm._ssrNode("<div class=\"panel-heading\" data-v-cd395148>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-cd395148>","</div>",[_vm._ssrNode("<div class=\"col col-sm-5 col-xs-12\" data-v-cd395148><h4 class=\"title\" data-v-cd395148>event List</h4></div> "),_vm._ssrNode("<div class=\"col-sm-7 col-xs-12 text-right\" data-v-cd395148>","</div>",[_c('nuxt-link',{staticClass:"btn-add",attrs:{"to":"/dum-ac/event/create"}},[_vm._v("Add event")])],1)],2)]),_vm._ssrNode(" <div class=\"panel-body table-responsive\" data-v-cd395148><table class=\"table table-striped  text-center\" data-v-cd395148><thead data-v-cd395148><tr data-v-cd395148><th data-v-cd395148>ID</th> <th data-v-cd395148>Title</th> <th data-v-cd395148>Description</th> <th data-v-cd395148>Image</th> <th data-v-cd395148>Status</th> <th style=\"width:200px\" data-v-cd395148>Action</th></tr></thead> <tbody data-v-cd395148>"+(_vm._ssrList((_vm.events),function(event){return ("<tr data-v-cd395148><td data-v-cd395148>"+_vm._ssrEscape(_vm._s(event.id))+"</td> <td data-v-cd395148>"+_vm._ssrEscape(_vm._s(event.title))+"</td> <td data-v-cd395148>"+_vm._ssrEscape(_vm._s(event.description))+"</td> <td data-v-cd395148><img"+(_vm._ssrAttr("src",_vm.base_url + '/images/dum/' + event.image))+" alt=\"image\" style=\"height:80px\" data-v-cd395148></td> <td data-v-cd395148>"+((event.status == 1)?("<button class=\"btn-active\" data-v-cd395148>\n                      Active\n                    </button>"):"<!---->")+" "+((event.status == 0)?("<button class=\"btn-inactive\" data-v-cd395148>\n                      Inactive\n                    </button>"):"<!---->")+"</td> <td data-v-cd395148><button class=\"btn-edit\" data-v-cd395148>Edit</button> <button class=\"btn-delete\" data-v-cd395148>\n                      Delete\n                    </button></td></tr>")}))+"</tbody></table></div>")],2)])]),_vm._ssrNode(" <div id=\"eventUpdate\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\" class=\"modal fade\" data-v-cd395148><div role=\"document\" class=\"modal-dialog modal-dialog-centered\" data-v-cd395148><div class=\"modal-content\" data-v-cd395148><div class=\"modal-header\" data-v-cd395148><h5 id=\"exampleModalLongTitle\" class=\"modal-title\" data-v-cd395148>event Update</h5> <button type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\" class=\"close\" data-v-cd395148><span aria-hidden=\"true\" data-v-cd395148>×</span></button></div> <div class=\"modal-body\" data-v-cd395148><div class=\"form-group\" data-v-cd395148><label for data-v-cd395148>Title</label> <input type=\"text\" id=\"name\" placeholder=\"Title\""+(_vm._ssrAttr("value",(_vm.event.title)))+" class=\"form-control\" data-v-cd395148> "+((_vm.errors.title)?("<p class=\"text-danger\" data-v-cd395148>"+_vm._ssrEscape(_vm._s(_vm.errors.title[0]))+"</p>"):"<!---->")+"</div> <div class=\"form-group\" data-v-cd395148><label for data-v-cd395148>Short Description</label> <input type=\"text\" id=\"name\" placeholder=\"Short Description\""+(_vm._ssrAttr("value",(_vm.event.description)))+" class=\"form-control\" data-v-cd395148> "+((_vm.errors.description)?("<p class=\"text-danger\" data-v-cd395148>"+_vm._ssrEscape(_vm._s(_vm.errors.description[0]))+"</p>"):"<!---->")+"</div> <div class=\"form-group\" data-v-cd395148><label for data-v-cd395148>Image</label> <input required=\"required\" type=\"file\" id=\"event_image\" name=\"image\" accept=\"image/*\" data-v-cd395148> "+((_vm.errors.image)?("<p class=\"text-danger\" data-v-cd395148>"+_vm._ssrEscape(_vm._s(_vm.errors.image[0]))+"</p>"):"<!---->")+"</div></div> <div class=\"modal-footer\" data-v-cd395148><button type=\"button\" class=\"btn btn-submit\" data-v-cd395148>Update</button></div></div></div></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/dum-ac/event/index.vue?vue&type=template&id=cd395148&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dum-ac/event/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var eventvue_type_script_lang_js_ = ({
  layout: "Dum-content",

  mounted() {
    this.getevent();
  },

  data() {
    return {
      events: [],
      event: {
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
    getevent() {
      this.$axios.$get("/event/show").then(res => {
        this.events = res;
      }).catch(err => {
        console.log(err);
      });
    },

    eventEdit(id) {
      $("#eventUpdate").modal("show");
      this.$axios.$get("/event/edit/" + id).then(res => {
        this.event = res;
      }).catch(err => {
        console.log(err);
      });
    },

    eventUpdate() {
      let formData = new FormData();
      formData.append('title', this.event.title);
      formData.append('description', this.event.description);

      if (this.event.new_image) {
        formData.append('image', this.event.new_image);
      }

      this.$axios.$post("/event/update/" + this.event.id, formData).then(res => {
        this.getevent();
        $("#eventUpdate").modal("hide");
        this.$toaster.success(res.message);
        this.errors = "";
      }).catch(err => {
        console.log(err);
        this.errors = err.response.data.errors;
      });
    },

    deleteevent(id) {
      if (confirm("Are you sure to delete this event?")) {
        this.$axios.$get("/event/delete/" + id).then(res => {
          this.getevent();
          this.$toaster.error(res.message);
        }).catch(err => {
          console.log(err);
        });
      }
    },

    eventStatus(id) {
      this.$axios.$get("/event/status/" + id).then(res => {
        this.getevent();
        this.$toaster.success(res.message);
      }).catch(err => {
        console.log(err);
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/dum-ac/event/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var dum_ac_eventvue_type_script_lang_js_ = (eventvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/dum-ac/event/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  dum_ac_eventvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "cd395148",
  "469d5dc0"
  
)

/* harmony default export */ var dum_ac_event = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map