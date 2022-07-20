import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _bff9b9cc = () => interopDefault(import('../pages/account/index.vue' /* webpackChunkName: "pages/account/index" */))
const _4275d176 = () => interopDefault(import('../pages/admission/index.vue' /* webpackChunkName: "pages/admission/index" */))
const _78bf08cb = () => interopDefault(import('../pages/app.vue' /* webpackChunkName: "pages/app" */))
const _1f1dcec8 = () => interopDefault(import('../pages/dum-ac/index.vue' /* webpackChunkName: "pages/dum-ac/index" */))
const _68d6c877 = () => interopDefault(import('../pages/employee/index.vue' /* webpackChunkName: "pages/employee/index" */))
const _3fdc10d4 = () => interopDefault(import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */))
const _094c3cb0 = () => interopDefault(import('../pages/student/index.vue' /* webpackChunkName: "pages/student/index" */))
const _60de3e80 = () => interopDefault(import('../pages/account/class.vue' /* webpackChunkName: "pages/account/class" */))
const _d1e8f534 = () => interopDefault(import('../pages/account/purpose.vue' /* webpackChunkName: "pages/account/purpose" */))
const _31236216 = () => interopDefault(import('../pages/admission/admissionInActiveBatch/index.vue' /* webpackChunkName: "pages/admission/admissionInActiveBatch/index" */))
const _3f80983e = () => interopDefault(import('../pages/admission/batch/index.vue' /* webpackChunkName: "pages/admission/batch/index" */))
const _a1cf453e = () => interopDefault(import('../pages/admission/department/index.vue' /* webpackChunkName: "pages/admission/department/index" */))
const _1100527e = () => interopDefault(import('../pages/admission/dept-wish-student.vue' /* webpackChunkName: "pages/admission/dept-wish-student" */))
const _d353031c = () => interopDefault(import('../pages/admission/form-import.vue' /* webpackChunkName: "pages/admission/form-import" */))
const _97d25958 = () => interopDefault(import('../pages/admission/form-sale.vue' /* webpackChunkName: "pages/admission/form-sale" */))
const _22fdd159 = () => interopDefault(import('../pages/admission/form-stock.vue' /* webpackChunkName: "pages/admission/form-stock" */))
const _11068942 = () => interopDefault(import('../pages/admission/student.vue' /* webpackChunkName: "pages/admission/student" */))
const _2f8ce56a = () => interopDefault(import('../pages/dum-ac/blog/index.vue' /* webpackChunkName: "pages/dum-ac/blog/index" */))
const _af4473ec = () => interopDefault(import('../pages/dum-ac/committee/index.vue' /* webpackChunkName: "pages/dum-ac/committee/index" */))
const _ec440f2c = () => interopDefault(import('../pages/dum-ac/contact.vue' /* webpackChunkName: "pages/dum-ac/contact" */))
const _f5f12c32 = () => interopDefault(import('../pages/dum-ac/event/index.vue' /* webpackChunkName: "pages/dum-ac/event/index" */))
const _1c49947f = () => interopDefault(import('../pages/dum-ac/facilitie/index.vue' /* webpackChunkName: "pages/dum-ac/facilitie/index" */))
const _3499841f = () => interopDefault(import('../pages/dum-ac/gallery/index.vue' /* webpackChunkName: "pages/dum-ac/gallery/index" */))
const _e54c44fe = () => interopDefault(import('../pages/dum-ac/notice/index.vue' /* webpackChunkName: "pages/dum-ac/notice/index" */))
const _48a254d1 = () => interopDefault(import('../pages/dum-ac/program/index.vue' /* webpackChunkName: "pages/dum-ac/program/index" */))
const _298a884a = () => interopDefault(import('../pages/dum-ac/slider/index.vue' /* webpackChunkName: "pages/dum-ac/slider/index" */))
const _eb70d104 = () => interopDefault(import('../pages/dum-ac/tution/index.vue' /* webpackChunkName: "pages/dum-ac/tution/index" */))
const _3af8abc0 = () => interopDefault(import('../pages/employee/department/index.vue' /* webpackChunkName: "pages/employee/department/index" */))
const _4b5b78df = () => interopDefault(import('../pages/employee/designation/index.vue' /* webpackChunkName: "pages/employee/designation/index" */))
const _2221a4dc = () => interopDefault(import('../pages/employee/employee/index.vue' /* webpackChunkName: "pages/employee/employee/index" */))
const _e1bd1134 = () => interopDefault(import('../pages/employee/office-time/index.vue' /* webpackChunkName: "pages/employee/office-time/index" */))
const _33ac7e76 = () => interopDefault(import('../pages/profile/qualification/index.vue' /* webpackChunkName: "pages/profile/qualification/index" */))
const _28f4c8c8 = () => interopDefault(import('../pages/profile/social/index.vue' /* webpackChunkName: "pages/profile/social/index" */))
const _25a963c9 = () => interopDefault(import('../pages/profile/training/index.vue' /* webpackChunkName: "pages/profile/training/index" */))
const _32bda196 = () => interopDefault(import('../pages/profile/update.vue' /* webpackChunkName: "pages/profile/update" */))
const _2e0fda69 = () => interopDefault(import('../pages/admission/admissionInActiveBatch/create.vue' /* webpackChunkName: "pages/admission/admissionInActiveBatch/create" */))
const _4f6b12fd = () => interopDefault(import('../pages/admission/batch/create.vue' /* webpackChunkName: "pages/admission/batch/create" */))
const _5ba7997d = () => interopDefault(import('../pages/admission/department/create.vue' /* webpackChunkName: "pages/admission/department/create" */))
const _46ac66d3 = () => interopDefault(import('../pages/dum-ac/blog/create.vue' /* webpackChunkName: "pages/dum-ac/blog/create" */))
const _e9e17418 = () => interopDefault(import('../pages/dum-ac/committee/create.vue' /* webpackChunkName: "pages/dum-ac/committee/create" */))
const _439a1db7 = () => interopDefault(import('../pages/dum-ac/event/create.vue' /* webpackChunkName: "pages/dum-ac/event/create" */))
const _d6c573c2 = () => interopDefault(import('../pages/dum-ac/facilitie/create.vue' /* webpackChunkName: "pages/dum-ac/facilitie/create" */))
const _45961d5d = () => interopDefault(import('../pages/dum-ac/notice/create.vue' /* webpackChunkName: "pages/dum-ac/notice/create" */))
const _1946dfe6 = () => interopDefault(import('../pages/dum-ac/program/create.vue' /* webpackChunkName: "pages/dum-ac/program/create" */))
const _2f7acbb4 = () => interopDefault(import('../pages/dum-ac/slider/create.vue' /* webpackChunkName: "pages/dum-ac/slider/create" */))
const _3340ba00 = () => interopDefault(import('../pages/dum-ac/tution/create.vue' /* webpackChunkName: "pages/dum-ac/tution/create" */))
const _4bd116fe = () => interopDefault(import('../pages/employee/department/create.vue' /* webpackChunkName: "pages/employee/department/create" */))
const _47c7edbf = () => interopDefault(import('../pages/employee/designation/create.vue' /* webpackChunkName: "pages/employee/designation/create" */))
const _49c74162 = () => interopDefault(import('../pages/employee/employee/create.vue' /* webpackChunkName: "pages/employee/employee/create" */))
const _69979b08 = () => interopDefault(import('../pages/profile/qualification/create.vue' /* webpackChunkName: "pages/profile/qualification/create" */))
const _a63bbabc = () => interopDefault(import('../pages/profile/social/create.vue' /* webpackChunkName: "pages/profile/social/create" */))
const _91913fd6 = () => interopDefault(import('../pages/profile/training/create.vue' /* webpackChunkName: "pages/profile/training/create" */))
const _3d2014f5 = () => interopDefault(import('../pages/admission/batch/update/_id.vue' /* webpackChunkName: "pages/admission/batch/update/_id" */))
const _56181728 = () => interopDefault(import('../pages/dum-ac/committee/update/_id.vue' /* webpackChunkName: "pages/dum-ac/committee/update/_id" */))
const _01ba6062 = () => interopDefault(import('../pages/employee/employee/detail/_id.vue' /* webpackChunkName: "pages/employee/employee/detail/_id" */))
const _374488da = () => interopDefault(import('../pages/employee/employee/update/_id.vue' /* webpackChunkName: "pages/employee/employee/update/_id" */))
const _21940a12 = () => interopDefault(import('../pages/admission/print-receive/_id.vue' /* webpackChunkName: "pages/admission/print-receive/_id" */))
const _0ae5cb08 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/account",
    component: _bff9b9cc,
    name: "account"
  }, {
    path: "/admission",
    component: _4275d176,
    name: "admission"
  }, {
    path: "/app",
    component: _78bf08cb,
    name: "app"
  }, {
    path: "/dum-ac",
    component: _1f1dcec8,
    name: "dum-ac"
  }, {
    path: "/employee",
    component: _68d6c877,
    name: "employee"
  }, {
    path: "/profile",
    component: _3fdc10d4,
    name: "profile"
  }, {
    path: "/student",
    component: _094c3cb0,
    name: "student"
  }, {
    path: "/account/class",
    component: _60de3e80,
    name: "account-class"
  }, {
    path: "/account/purpose",
    component: _d1e8f534,
    name: "account-purpose"
  }, {
    path: "/admission/admissionInActiveBatch",
    component: _31236216,
    name: "admission-admissionInActiveBatch"
  }, {
    path: "/admission/batch",
    component: _3f80983e,
    name: "admission-batch"
  }, {
    path: "/admission/department",
    component: _a1cf453e,
    name: "admission-department"
  }, {
    path: "/admission/dept-wish-student",
    component: _1100527e,
    name: "admission-dept-wish-student"
  }, {
    path: "/admission/form-import",
    component: _d353031c,
    name: "admission-form-import"
  }, {
    path: "/admission/form-sale",
    component: _97d25958,
    name: "admission-form-sale"
  }, {
    path: "/admission/form-stock",
    component: _22fdd159,
    name: "admission-form-stock"
  }, {
    path: "/admission/student",
    component: _11068942,
    name: "admission-student"
  }, {
    path: "/dum-ac/blog",
    component: _2f8ce56a,
    name: "dum-ac-blog"
  }, {
    path: "/dum-ac/committee",
    component: _af4473ec,
    name: "dum-ac-committee"
  }, {
    path: "/dum-ac/contact",
    component: _ec440f2c,
    name: "dum-ac-contact"
  }, {
    path: "/dum-ac/event",
    component: _f5f12c32,
    name: "dum-ac-event"
  }, {
    path: "/dum-ac/facilitie",
    component: _1c49947f,
    name: "dum-ac-facilitie"
  }, {
    path: "/dum-ac/gallery",
    component: _3499841f,
    name: "dum-ac-gallery"
  }, {
    path: "/dum-ac/notice",
    component: _e54c44fe,
    name: "dum-ac-notice"
  }, {
    path: "/dum-ac/program",
    component: _48a254d1,
    name: "dum-ac-program"
  }, {
    path: "/dum-ac/slider",
    component: _298a884a,
    name: "dum-ac-slider"
  }, {
    path: "/dum-ac/tution",
    component: _eb70d104,
    name: "dum-ac-tution"
  }, {
    path: "/employee/department",
    component: _3af8abc0,
    name: "employee-department"
  }, {
    path: "/employee/designation",
    component: _4b5b78df,
    name: "employee-designation"
  }, {
    path: "/employee/employee",
    component: _2221a4dc,
    name: "employee-employee"
  }, {
    path: "/employee/office-time",
    component: _e1bd1134,
    name: "employee-office-time"
  }, {
    path: "/profile/qualification",
    component: _33ac7e76,
    name: "profile-qualification"
  }, {
    path: "/profile/social",
    component: _28f4c8c8,
    name: "profile-social"
  }, {
    path: "/profile/training",
    component: _25a963c9,
    name: "profile-training"
  }, {
    path: "/profile/update",
    component: _32bda196,
    name: "profile-update"
  }, {
    path: "/admission/admissionInActiveBatch/create",
    component: _2e0fda69,
    name: "admission-admissionInActiveBatch-create"
  }, {
    path: "/admission/batch/create",
    component: _4f6b12fd,
    name: "admission-batch-create"
  }, {
    path: "/admission/department/create",
    component: _5ba7997d,
    name: "admission-department-create"
  }, {
    path: "/dum-ac/blog/create",
    component: _46ac66d3,
    name: "dum-ac-blog-create"
  }, {
    path: "/dum-ac/committee/create",
    component: _e9e17418,
    name: "dum-ac-committee-create"
  }, {
    path: "/dum-ac/event/create",
    component: _439a1db7,
    name: "dum-ac-event-create"
  }, {
    path: "/dum-ac/facilitie/create",
    component: _d6c573c2,
    name: "dum-ac-facilitie-create"
  }, {
    path: "/dum-ac/notice/create",
    component: _45961d5d,
    name: "dum-ac-notice-create"
  }, {
    path: "/dum-ac/program/create",
    component: _1946dfe6,
    name: "dum-ac-program-create"
  }, {
    path: "/dum-ac/slider/create",
    component: _2f7acbb4,
    name: "dum-ac-slider-create"
  }, {
    path: "/dum-ac/tution/create",
    component: _3340ba00,
    name: "dum-ac-tution-create"
  }, {
    path: "/employee/department/create",
    component: _4bd116fe,
    name: "employee-department-create"
  }, {
    path: "/employee/designation/create",
    component: _47c7edbf,
    name: "employee-designation-create"
  }, {
    path: "/employee/employee/create",
    component: _49c74162,
    name: "employee-employee-create"
  }, {
    path: "/profile/qualification/create",
    component: _69979b08,
    name: "profile-qualification-create"
  }, {
    path: "/profile/social/create",
    component: _a63bbabc,
    name: "profile-social-create"
  }, {
    path: "/profile/training/create",
    component: _91913fd6,
    name: "profile-training-create"
  }, {
    path: "/admission/batch/update/:id?",
    component: _3d2014f5,
    name: "admission-batch-update-id"
  }, {
    path: "/dum-ac/committee/update/:id",
    component: _56181728,
    name: "dum-ac-committee-update-id"
  }, {
    path: "/employee/employee/detail/:id?",
    component: _01ba6062,
    name: "employee-employee-detail-id"
  }, {
    path: "/employee/employee/update/:id?",
    component: _374488da,
    name: "employee-employee-update-id"
  }, {
    path: "/admission/print-receive/:id?",
    component: _21940a12,
    name: "admission-print-receive-id"
  }, {
    path: "/",
    component: _0ae5cb08,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
