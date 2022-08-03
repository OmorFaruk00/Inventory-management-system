import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _fe70eda6 = () => interopDefault(import('../pages/account/index.vue' /* webpackChunkName: "pages/account/index" */))
const _03b8fec9 = () => interopDefault(import('../pages/admission/index.vue' /* webpackChunkName: "pages/admission/index" */))
const _4ff55a9e = () => interopDefault(import('../pages/app.vue' /* webpackChunkName: "pages/app" */))
const _6b4e2429 = () => interopDefault(import('../pages/dum-ac/index.vue' /* webpackChunkName: "pages/dum-ac/index" */))
const _bec1b678 = () => interopDefault(import('../pages/employee/index.vue' /* webpackChunkName: "pages/employee/index" */))
const _7e5344ae = () => interopDefault(import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */))
const _d9fb04e0 = () => interopDefault(import('../pages/setting/index.vue' /* webpackChunkName: "pages/setting/index" */))
const _47c3708a = () => interopDefault(import('../pages/student/index.vue' /* webpackChunkName: "pages/student/index" */))
const _9a6bc08c = () => interopDefault(import('../pages/account/fund.vue' /* webpackChunkName: "pages/account/fund" */))
const _584eb2b9 = () => interopDefault(import('../pages/account/purpose.vue' /* webpackChunkName: "pages/account/purpose" */))
const _fee0374e = () => interopDefault(import('../pages/account/sub_fund.vue' /* webpackChunkName: "pages/account/sub_fund" */))
const _6569d442 = () => interopDefault(import('../pages/admission/admissionInActiveBatch/index.vue' /* webpackChunkName: "pages/admission/admissionInActiveBatch/index" */))
const _025256f4 = () => interopDefault(import('../pages/admission/batch/index.vue' /* webpackChunkName: "pages/admission/batch/index" */))
const _4e9fae2e = () => interopDefault(import('../pages/admission/department/index.vue' /* webpackChunkName: "pages/admission/department/index" */))
const _48e29f94 = () => interopDefault(import('../pages/admission/dept-wish-student.vue' /* webpackChunkName: "pages/admission/dept-wish-student" */))
const _8f2dbcf6 = () => interopDefault(import('../pages/admission/form-import.vue' /* webpackChunkName: "pages/admission/form-import" */))
const _cae5c1b2 = () => interopDefault(import('../pages/admission/form-sale.vue' /* webpackChunkName: "pages/admission/form-sale" */))
const _0b50ffe6 = () => interopDefault(import('../pages/admission/form-stock.vue' /* webpackChunkName: "pages/admission/form-stock" */))
const _ec1d0da2 = () => interopDefault(import('../pages/admission/search-student.vue' /* webpackChunkName: "pages/admission/search-student" */))
const _6566b1de = () => interopDefault(import('../pages/dum-ac/blog/index.vue' /* webpackChunkName: "pages/dum-ac/blog/index" */))
const _6ec0f552 = () => interopDefault(import('../pages/dum-ac/committee/index.vue' /* webpackChunkName: "pages/dum-ac/committee/index" */))
const _7cb35692 = () => interopDefault(import('../pages/dum-ac/contact.vue' /* webpackChunkName: "pages/dum-ac/contact" */))
const _a5025098 = () => interopDefault(import('../pages/dum-ac/event/index.vue' /* webpackChunkName: "pages/dum-ac/event/index" */))
const _3c8b53cc = () => interopDefault(import('../pages/dum-ac/facilitie/index.vue' /* webpackChunkName: "pages/dum-ac/facilitie/index" */))
const _1cecb2ac = () => interopDefault(import('../pages/dum-ac/gallery/index.vue' /* webpackChunkName: "pages/dum-ac/gallery/index" */))
const _73d02954 = () => interopDefault(import('../pages/dum-ac/notice/index.vue' /* webpackChunkName: "pages/dum-ac/notice/index" */))
const _30f5835e = () => interopDefault(import('../pages/dum-ac/program/index.vue' /* webpackChunkName: "pages/dum-ac/program/index" */))
const _1000d41d = () => interopDefault(import('../pages/dum-ac/slider/index.vue' /* webpackChunkName: "pages/dum-ac/slider/index" */))
const _70bde351 = () => interopDefault(import('../pages/dum-ac/tution/index.vue' /* webpackChunkName: "pages/dum-ac/tution/index" */))
const _03e4e55a = () => interopDefault(import('../pages/employee/department/index.vue' /* webpackChunkName: "pages/employee/department/index" */))
const _2a3a6ca8 = () => interopDefault(import('../pages/employee/designation/index.vue' /* webpackChunkName: "pages/employee/designation/index" */))
const _0a17cf2f = () => interopDefault(import('../pages/employee/employee/index.vue' /* webpackChunkName: "pages/employee/employee/index" */))
const _2ea8c833 = () => interopDefault(import('../pages/employee/office-time/index.vue' /* webpackChunkName: "pages/employee/office-time/index" */))
const _f5e1716e = () => interopDefault(import('../pages/profile/qualification/index.vue' /* webpackChunkName: "pages/profile/qualification/index" */))
const _584e6bae = () => interopDefault(import('../pages/profile/social/index.vue' /* webpackChunkName: "pages/profile/social/index" */))
const _45eb2316 = () => interopDefault(import('../pages/profile/training/index.vue' /* webpackChunkName: "pages/profile/training/index" */))
const _1e698b82 = () => interopDefault(import('../pages/profile/update.vue' /* webpackChunkName: "pages/profile/update" */))
const _27d48dd2 = () => interopDefault(import('../pages/setting/assign-role.vue' /* webpackChunkName: "pages/setting/assign-role" */))
const _29faa581 = () => interopDefault(import('../pages/setting/permission.vue' /* webpackChunkName: "pages/setting/permission" */))
const _766a9fb0 = () => interopDefault(import('../pages/setting/role.vue' /* webpackChunkName: "pages/setting/role" */))
const _3679a1d6 = () => interopDefault(import('../pages/setting/special-permission.vue' /* webpackChunkName: "pages/setting/special-permission" */))
const _685eaefc = () => interopDefault(import('../pages/student/lecture-sheet/index.vue' /* webpackChunkName: "pages/student/lecture-sheet/index" */))
const _d2861fec = () => interopDefault(import('../pages/student/lesson-plan/index.vue' /* webpackChunkName: "pages/student/lesson-plan/index" */))
const _4b5b4150 = () => interopDefault(import('../pages/student/question/index.vue' /* webpackChunkName: "pages/student/question/index" */))
const _56d056fc = () => interopDefault(import('../pages/student/students/index.vue' /* webpackChunkName: "pages/student/students/index" */))
const _ca8c3ee2 = () => interopDefault(import('../pages/student/syllabus/index.vue' /* webpackChunkName: "pages/student/syllabus/index" */))
const _6f84febc = () => interopDefault(import('../pages/admission/admissionInActiveBatch/create.vue' /* webpackChunkName: "pages/admission/admissionInActiveBatch/create" */))
const _6facd24a = () => interopDefault(import('../pages/admission/batch/create.vue' /* webpackChunkName: "pages/admission/batch/create" */))
const _a5eb3b60 = () => interopDefault(import('../pages/admission/department/create.vue' /* webpackChunkName: "pages/admission/department/create" */))
const _6f23d4a0 = () => interopDefault(import('../pages/dum-ac/blog/create.vue' /* webpackChunkName: "pages/dum-ac/blog/create" */))
const _73057047 = () => interopDefault(import('../pages/dum-ac/committee/create.vue' /* webpackChunkName: "pages/dum-ac/committee/create" */))
const _2a10698a = () => interopDefault(import('../pages/dum-ac/event/create.vue' /* webpackChunkName: "pages/dum-ac/event/create" */))
const _7c937072 = () => interopDefault(import('../pages/dum-ac/facilitie/create.vue' /* webpackChunkName: "pages/dum-ac/facilitie/create" */))
const _2de94bea = () => interopDefault(import('../pages/dum-ac/notice/create.vue' /* webpackChunkName: "pages/dum-ac/notice/create" */))
const _156f3320 = () => interopDefault(import('../pages/dum-ac/program/create.vue' /* webpackChunkName: "pages/dum-ac/program/create" */))
const _17cdfa41 = () => interopDefault(import('../pages/dum-ac/slider/create.vue' /* webpackChunkName: "pages/dum-ac/slider/create" */))
const _629a5ce6 = () => interopDefault(import('../pages/dum-ac/tution/create.vue' /* webpackChunkName: "pages/dum-ac/tution/create" */))
const _294f306a = () => interopDefault(import('../pages/employee/department/create.vue' /* webpackChunkName: "pages/employee/department/create" */))
const _cdaa92dc = () => interopDefault(import('../pages/employee/designation/create.vue' /* webpackChunkName: "pages/employee/designation/create" */))
const _6096616f = () => interopDefault(import('../pages/employee/employee/create.vue' /* webpackChunkName: "pages/employee/employee/create" */))
const _448dec95 = () => interopDefault(import('../pages/profile/qualification/create.vue' /* webpackChunkName: "pages/profile/qualification/create" */))
const _62167496 = () => interopDefault(import('../pages/profile/social/create.vue' /* webpackChunkName: "pages/profile/social/create" */))
const _c1a4eb30 = () => interopDefault(import('../pages/profile/training/create.vue' /* webpackChunkName: "pages/profile/training/create" */))
const _69a9097c = () => interopDefault(import('../pages/student/lecture-sheet/create.vue' /* webpackChunkName: "pages/student/lecture-sheet/create" */))
const _68955bf4 = () => interopDefault(import('../pages/student/lesson-plan/create.vue' /* webpackChunkName: "pages/student/lesson-plan/create" */))
const _47c1336e = () => interopDefault(import('../pages/student/question/create.vue' /* webpackChunkName: "pages/student/question/create" */))
const _379307e2 = () => interopDefault(import('../pages/student/syllabus/create.vue' /* webpackChunkName: "pages/student/syllabus/create" */))
const _46b1347c = () => interopDefault(import('../pages/admission/batch/update/_id.vue' /* webpackChunkName: "pages/admission/batch/update/_id" */))
const _2656bd3f = () => interopDefault(import('../pages/dum-ac/committee/update/_id.vue' /* webpackChunkName: "pages/dum-ac/committee/update/_id" */))
const _469e9c22 = () => interopDefault(import('../pages/employee/employee/detail/_id.vue' /* webpackChunkName: "pages/employee/employee/detail/_id" */))
const _123ada67 = () => interopDefault(import('../pages/employee/employee/update/_id.vue' /* webpackChunkName: "pages/employee/employee/update/_id" */))
const _d38e5a8c = () => interopDefault(import('../pages/student/lecture-sheet/update/_id.vue' /* webpackChunkName: "pages/student/lecture-sheet/update/_id" */))
const _9501eb28 = () => interopDefault(import('../pages/student/lesson-plan/update/_id.vue' /* webpackChunkName: "pages/student/lesson-plan/update/_id" */))
const _38c2d634 = () => interopDefault(import('../pages/student/question/update/_id.vue' /* webpackChunkName: "pages/student/question/update/_id" */))
const _3d0ca507 = () => interopDefault(import('../pages/student/syllabus/update/_id.vue' /* webpackChunkName: "pages/student/syllabus/update/_id" */))
const _72f6d2e5 = () => interopDefault(import('../pages/admission/print-receive/_id.vue' /* webpackChunkName: "pages/admission/print-receive/_id" */))
const _5833d7df = () => interopDefault(import('../pages/admission/student-update/_id.vue' /* webpackChunkName: "pages/admission/student-update/_id" */))
const _451378e2 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _fe70eda6,
    name: "account"
  }, {
    path: "/admission",
    component: _03b8fec9,
    name: "admission"
  }, {
    path: "/app",
    component: _4ff55a9e,
    name: "app"
  }, {
    path: "/dum-ac",
    component: _6b4e2429,
    name: "dum-ac"
  }, {
    path: "/employee",
    component: _bec1b678,
    name: "employee"
  }, {
    path: "/profile",
    component: _7e5344ae,
    name: "profile"
  }, {
    path: "/setting",
    component: _d9fb04e0,
    name: "setting"
  }, {
    path: "/student",
    component: _47c3708a,
    name: "student"
  }, {
    path: "/account/fund",
    component: _9a6bc08c,
    name: "account-fund"
  }, {
    path: "/account/purpose",
    component: _584eb2b9,
    name: "account-purpose"
  }, {
    path: "/account/sub_fund",
    component: _fee0374e,
    name: "account-sub_fund"
  }, {
    path: "/admission/admissionInActiveBatch",
    component: _6569d442,
    name: "admission-admissionInActiveBatch"
  }, {
    path: "/admission/batch",
    component: _025256f4,
    name: "admission-batch"
  }, {
    path: "/admission/department",
    component: _4e9fae2e,
    name: "admission-department"
  }, {
    path: "/admission/dept-wish-student",
    component: _48e29f94,
    name: "admission-dept-wish-student"
  }, {
    path: "/admission/form-import",
    component: _8f2dbcf6,
    name: "admission-form-import"
  }, {
    path: "/admission/form-sale",
    component: _cae5c1b2,
    name: "admission-form-sale"
  }, {
    path: "/admission/form-stock",
    component: _0b50ffe6,
    name: "admission-form-stock"
  }, {
    path: "/admission/search-student",
    component: _ec1d0da2,
    name: "admission-search-student"
  }, {
    path: "/dum-ac/blog",
    component: _6566b1de,
    name: "dum-ac-blog"
  }, {
    path: "/dum-ac/committee",
    component: _6ec0f552,
    name: "dum-ac-committee"
  }, {
    path: "/dum-ac/contact",
    component: _7cb35692,
    name: "dum-ac-contact"
  }, {
    path: "/dum-ac/event",
    component: _a5025098,
    name: "dum-ac-event"
  }, {
    path: "/dum-ac/facilitie",
    component: _3c8b53cc,
    name: "dum-ac-facilitie"
  }, {
    path: "/dum-ac/gallery",
    component: _1cecb2ac,
    name: "dum-ac-gallery"
  }, {
    path: "/dum-ac/notice",
    component: _73d02954,
    name: "dum-ac-notice"
  }, {
    path: "/dum-ac/program",
    component: _30f5835e,
    name: "dum-ac-program"
  }, {
    path: "/dum-ac/slider",
    component: _1000d41d,
    name: "dum-ac-slider"
  }, {
    path: "/dum-ac/tution",
    component: _70bde351,
    name: "dum-ac-tution"
  }, {
    path: "/employee/department",
    component: _03e4e55a,
    name: "employee-department"
  }, {
    path: "/employee/designation",
    component: _2a3a6ca8,
    name: "employee-designation"
  }, {
    path: "/employee/employee",
    component: _0a17cf2f,
    name: "employee-employee"
  }, {
    path: "/employee/office-time",
    component: _2ea8c833,
    name: "employee-office-time"
  }, {
    path: "/profile/qualification",
    component: _f5e1716e,
    name: "profile-qualification"
  }, {
    path: "/profile/social",
    component: _584e6bae,
    name: "profile-social"
  }, {
    path: "/profile/training",
    component: _45eb2316,
    name: "profile-training"
  }, {
    path: "/profile/update",
    component: _1e698b82,
    name: "profile-update"
  }, {
    path: "/setting/assign-role",
    component: _27d48dd2,
    name: "setting-assign-role"
  }, {
    path: "/setting/permission",
    component: _29faa581,
    name: "setting-permission"
  }, {
    path: "/setting/role",
    component: _766a9fb0,
    name: "setting-role"
  }, {
    path: "/setting/special-permission",
    component: _3679a1d6,
    name: "setting-special-permission"
  }, {
    path: "/student/lecture-sheet",
    component: _685eaefc,
    name: "student-lecture-sheet"
  }, {
    path: "/student/lesson-plan",
    component: _d2861fec,
    name: "student-lesson-plan"
  }, {
    path: "/student/question",
    component: _4b5b4150,
    name: "student-question"
  }, {
    path: "/student/students",
    component: _56d056fc,
    name: "student-students"
  }, {
    path: "/student/syllabus",
    component: _ca8c3ee2,
    name: "student-syllabus"
  }, {
    path: "/admission/admissionInActiveBatch/create",
    component: _6f84febc,
    name: "admission-admissionInActiveBatch-create"
  }, {
    path: "/admission/batch/create",
    component: _6facd24a,
    name: "admission-batch-create"
  }, {
    path: "/admission/department/create",
    component: _a5eb3b60,
    name: "admission-department-create"
  }, {
    path: "/dum-ac/blog/create",
    component: _6f23d4a0,
    name: "dum-ac-blog-create"
  }, {
    path: "/dum-ac/committee/create",
    component: _73057047,
    name: "dum-ac-committee-create"
  }, {
    path: "/dum-ac/event/create",
    component: _2a10698a,
    name: "dum-ac-event-create"
  }, {
    path: "/dum-ac/facilitie/create",
    component: _7c937072,
    name: "dum-ac-facilitie-create"
  }, {
    path: "/dum-ac/notice/create",
    component: _2de94bea,
    name: "dum-ac-notice-create"
  }, {
    path: "/dum-ac/program/create",
    component: _156f3320,
    name: "dum-ac-program-create"
  }, {
    path: "/dum-ac/slider/create",
    component: _17cdfa41,
    name: "dum-ac-slider-create"
  }, {
    path: "/dum-ac/tution/create",
    component: _629a5ce6,
    name: "dum-ac-tution-create"
  }, {
    path: "/employee/department/create",
    component: _294f306a,
    name: "employee-department-create"
  }, {
    path: "/employee/designation/create",
    component: _cdaa92dc,
    name: "employee-designation-create"
  }, {
    path: "/employee/employee/create",
    component: _6096616f,
    name: "employee-employee-create"
  }, {
    path: "/profile/qualification/create",
    component: _448dec95,
    name: "profile-qualification-create"
  }, {
    path: "/profile/social/create",
    component: _62167496,
    name: "profile-social-create"
  }, {
    path: "/profile/training/create",
    component: _c1a4eb30,
    name: "profile-training-create"
  }, {
    path: "/student/lecture-sheet/create",
    component: _69a9097c,
    name: "student-lecture-sheet-create"
  }, {
    path: "/student/lesson-plan/create",
    component: _68955bf4,
    name: "student-lesson-plan-create"
  }, {
    path: "/student/question/create",
    component: _47c1336e,
    name: "student-question-create"
  }, {
    path: "/student/syllabus/create",
    component: _379307e2,
    name: "student-syllabus-create"
  }, {
    path: "/admission/batch/update/:id?",
    component: _46b1347c,
    name: "admission-batch-update-id"
  }, {
    path: "/dum-ac/committee/update/:id",
    component: _2656bd3f,
    name: "dum-ac-committee-update-id"
  }, {
    path: "/employee/employee/detail/:id?",
    component: _469e9c22,
    name: "employee-employee-detail-id"
  }, {
    path: "/employee/employee/update/:id?",
    component: _123ada67,
    name: "employee-employee-update-id"
  }, {
    path: "/student/lecture-sheet/update/:id",
    component: _d38e5a8c,
    name: "student-lecture-sheet-update-id"
  }, {
    path: "/student/lesson-plan/update/:id",
    component: _9501eb28,
    name: "student-lesson-plan-update-id"
  }, {
    path: "/student/question/update/:id?",
    component: _38c2d634,
    name: "student-question-update-id"
  }, {
    path: "/student/syllabus/update/:id?",
    component: _3d0ca507,
    name: "student-syllabus-update-id"
  }, {
    path: "/admission/print-receive/:id?",
    component: _72f6d2e5,
    name: "admission-print-receive-id"
  }, {
    path: "/admission/student-update/:id?",
    component: _5833d7df,
    name: "admission-student-update-id"
  }, {
    path: "/",
    component: _451378e2,
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
