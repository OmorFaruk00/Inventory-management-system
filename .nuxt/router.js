import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _78bf08cb = () => interopDefault(import('../pages/app.vue' /* webpackChunkName: "pages/app" */))
const _1f1dcec8 = () => interopDefault(import('../pages/dum-ac/index.vue' /* webpackChunkName: "pages/dum-ac/index" */))
const _68d6c877 = () => interopDefault(import('../pages/employee/index.vue' /* webpackChunkName: "pages/employee/index" */))
const _3fdc10d4 = () => interopDefault(import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */))
const _094c3cb0 = () => interopDefault(import('../pages/student/index.vue' /* webpackChunkName: "pages/student/index" */))
const _ec440f2c = () => interopDefault(import('../pages/dum-ac/contact.vue' /* webpackChunkName: "pages/dum-ac/contact" */))
const _f5f12c32 = () => interopDefault(import('../pages/dum-ac/event/index.vue' /* webpackChunkName: "pages/dum-ac/event/index" */))
const _1c49947f = () => interopDefault(import('../pages/dum-ac/facilitie/index.vue' /* webpackChunkName: "pages/dum-ac/facilitie/index" */))
const _e54c44fe = () => interopDefault(import('../pages/dum-ac/notice/index.vue' /* webpackChunkName: "pages/dum-ac/notice/index" */))
const _48a254d1 = () => interopDefault(import('../pages/dum-ac/program/index.vue' /* webpackChunkName: "pages/dum-ac/program/index" */))
const _298a884a = () => interopDefault(import('../pages/dum-ac/slider/index.vue' /* webpackChunkName: "pages/dum-ac/slider/index" */))
const _3af8abc0 = () => interopDefault(import('../pages/employee/department/index.vue' /* webpackChunkName: "pages/employee/department/index" */))
const _4b5b78df = () => interopDefault(import('../pages/employee/designation/index.vue' /* webpackChunkName: "pages/employee/designation/index" */))
const _2221a4dc = () => interopDefault(import('../pages/employee/employee/index.vue' /* webpackChunkName: "pages/employee/employee/index" */))
const _e1bd1134 = () => interopDefault(import('../pages/employee/office-time/index.vue' /* webpackChunkName: "pages/employee/office-time/index" */))
const _33ac7e76 = () => interopDefault(import('../pages/profile/qualification/index.vue' /* webpackChunkName: "pages/profile/qualification/index" */))
const _28f4c8c8 = () => interopDefault(import('../pages/profile/social/index.vue' /* webpackChunkName: "pages/profile/social/index" */))
const _439a1db7 = () => interopDefault(import('../pages/dum-ac/event/create.vue' /* webpackChunkName: "pages/dum-ac/event/create" */))
const _d6c573c2 = () => interopDefault(import('../pages/dum-ac/facilitie/create.vue' /* webpackChunkName: "pages/dum-ac/facilitie/create" */))
const _45961d5d = () => interopDefault(import('../pages/dum-ac/notice/create.vue' /* webpackChunkName: "pages/dum-ac/notice/create" */))
const _1946dfe6 = () => interopDefault(import('../pages/dum-ac/program/create.vue' /* webpackChunkName: "pages/dum-ac/program/create" */))
const _2f7acbb4 = () => interopDefault(import('../pages/dum-ac/slider/create.vue' /* webpackChunkName: "pages/dum-ac/slider/create" */))
const _4bd116fe = () => interopDefault(import('../pages/employee/department/create.vue' /* webpackChunkName: "pages/employee/department/create" */))
const _47c7edbf = () => interopDefault(import('../pages/employee/designation/create.vue' /* webpackChunkName: "pages/employee/designation/create" */))
const _49c74162 = () => interopDefault(import('../pages/employee/employee/create.vue' /* webpackChunkName: "pages/employee/employee/create" */))
const _374488da = () => interopDefault(import('../pages/employee/employee/update/_id.vue' /* webpackChunkName: "pages/employee/employee/update/_id" */))
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
    path: "/employee/employee/update/:id?",
    component: _374488da,
    name: "employee-employee-update-id"
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
