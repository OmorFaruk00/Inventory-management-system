import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4578cb22 = () => interopDefault(import('../pages/brand/index.vue' /* webpackChunkName: "pages/brand/index" */))
const _6897b2ec = () => interopDefault(import('../pages/category/index.vue' /* webpackChunkName: "pages/category/index" */))
const _4251e686 = () => interopDefault(import('../pages/change-password.vue' /* webpackChunkName: "pages/change-password" */))
const _586f4468 = () => interopDefault(import('../pages/customer/index.vue' /* webpackChunkName: "pages/customer/index" */))
const _2203d6f9 = () => interopDefault(import('../pages/dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _0293809c = () => interopDefault(import('../pages/employee/index.vue' /* webpackChunkName: "pages/employee/index" */))
const _13b79c08 = () => interopDefault(import('../pages/password-reset.vue' /* webpackChunkName: "pages/password-reset" */))
const _f1bf3788 = () => interopDefault(import('../pages/pos/index.vue' /* webpackChunkName: "pages/pos/index" */))
const _dbe8ead2 = () => interopDefault(import('../pages/product/index.vue' /* webpackChunkName: "pages/product/index" */))
const _9909b25e = () => interopDefault(import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */))
const _f4b17290 = () => interopDefault(import('../pages/setting/index.vue' /* webpackChunkName: "pages/setting/index" */))
const _2be38172 = () => interopDefault(import('../pages/unit/index.vue' /* webpackChunkName: "pages/unit/index" */))
const _6a7a31f4 = () => interopDefault(import('../pages/customer/category.vue' /* webpackChunkName: "pages/customer/category" */))
const _6610b31c = () => interopDefault(import('../pages/customer/create.vue' /* webpackChunkName: "pages/customer/create" */))
const _3f45da7b = () => interopDefault(import('../pages/employee/department/index.vue' /* webpackChunkName: "pages/employee/department/index" */))
const _5e97bcf8 = () => interopDefault(import('../pages/employee/designation/index.vue' /* webpackChunkName: "pages/employee/designation/index" */))
const _585d7352 = () => interopDefault(import('../pages/employee/employee/index.vue' /* webpackChunkName: "pages/employee/employee/index" */))
const _147a200b = () => interopDefault(import('../pages/employee/office-time/index.vue' /* webpackChunkName: "pages/employee/office-time/index" */))
const _f6bf23fc = () => interopDefault(import('../pages/pos/create.vue' /* webpackChunkName: "pages/pos/create" */))
const _4e681a8a = () => interopDefault(import('../pages/pos/new.vue' /* webpackChunkName: "pages/pos/new" */))
const _2a6ecbd0 = () => interopDefault(import('../pages/pos/test.vue' /* webpackChunkName: "pages/pos/test" */))
const _51cbd9f2 = () => interopDefault(import('../pages/product/create.vue' /* webpackChunkName: "pages/product/create" */))
const _5968ea71 = () => interopDefault(import('../pages/profile/qualification/index.vue' /* webpackChunkName: "pages/profile/qualification/index" */))
const _681ee401 = () => interopDefault(import('../pages/profile/social/index.vue' /* webpackChunkName: "pages/profile/social/index" */))
const _3ddbb224 = () => interopDefault(import('../pages/profile/training/index.vue' /* webpackChunkName: "pages/profile/training/index" */))
const _ff44314c = () => interopDefault(import('../pages/profile/update.vue' /* webpackChunkName: "pages/profile/update" */))
const _d0104e0c = () => interopDefault(import('../pages/setting/assign-role.vue' /* webpackChunkName: "pages/setting/assign-role" */))
const _ffa5554e = () => interopDefault(import('../pages/setting/permission.vue' /* webpackChunkName: "pages/setting/permission" */))
const _b957bc00 = () => interopDefault(import('../pages/setting/role.vue' /* webpackChunkName: "pages/setting/role" */))
const _6ad6f226 = () => interopDefault(import('../pages/setting/special-permission.vue' /* webpackChunkName: "pages/setting/special-permission" */))
const _5dac80ba = () => interopDefault(import('../pages/employee/department/create.vue' /* webpackChunkName: "pages/employee/department/create" */))
const _6d8459ba = () => interopDefault(import('../pages/employee/designation/create.vue' /* webpackChunkName: "pages/employee/designation/create" */))
const _63e86172 = () => interopDefault(import('../pages/employee/employee/create.vue' /* webpackChunkName: "pages/employee/employee/create" */))
const _092ea326 = () => interopDefault(import('../pages/profile/qualification/create.vue' /* webpackChunkName: "pages/profile/qualification/create" */))
const _791c3246 = () => interopDefault(import('../pages/profile/social/create.vue' /* webpackChunkName: "pages/profile/social/create" */))
const _68e70190 = () => interopDefault(import('../pages/profile/training/create.vue' /* webpackChunkName: "pages/profile/training/create" */))
const _d8e91872 = () => interopDefault(import('../pages/employee/employee/detail/_id.vue' /* webpackChunkName: "pages/employee/employee/detail/_id" */))
const _6dd4c782 = () => interopDefault(import('../pages/employee/employee/update/_id.vue' /* webpackChunkName: "pages/employee/employee/update/_id" */))
const _329be5ea = () => interopDefault(import('../pages/customer/update/_id.vue' /* webpackChunkName: "pages/customer/update/_id" */))
const _55dbffff = () => interopDefault(import('../pages/product/update/_id.vue' /* webpackChunkName: "pages/product/update/_id" */))
const _9e61a684 = () => interopDefault(import('../pages/password-reset-confirm/_token.vue' /* webpackChunkName: "pages/password-reset-confirm/_token" */))
const _b72a9692 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/brand",
    component: _4578cb22,
    name: "brand"
  }, {
    path: "/category",
    component: _6897b2ec,
    name: "category"
  }, {
    path: "/change-password",
    component: _4251e686,
    name: "change-password"
  }, {
    path: "/customer",
    component: _586f4468,
    name: "customer"
  }, {
    path: "/dashboard",
    component: _2203d6f9,
    name: "dashboard"
  }, {
    path: "/employee",
    component: _0293809c,
    name: "employee"
  }, {
    path: "/password-reset",
    component: _13b79c08,
    name: "password-reset"
  }, {
    path: "/pos",
    component: _f1bf3788,
    name: "pos"
  }, {
    path: "/product",
    component: _dbe8ead2,
    name: "product"
  }, {
    path: "/profile",
    component: _9909b25e,
    name: "profile"
  }, {
    path: "/setting",
    component: _f4b17290,
    name: "setting"
  }, {
    path: "/unit",
    component: _2be38172,
    name: "unit"
  }, {
    path: "/customer/category",
    component: _6a7a31f4,
    name: "customer-category"
  }, {
    path: "/customer/create",
    component: _6610b31c,
    name: "customer-create"
  }, {
    path: "/employee/department",
    component: _3f45da7b,
    name: "employee-department"
  }, {
    path: "/employee/designation",
    component: _5e97bcf8,
    name: "employee-designation"
  }, {
    path: "/employee/employee",
    component: _585d7352,
    name: "employee-employee"
  }, {
    path: "/employee/office-time",
    component: _147a200b,
    name: "employee-office-time"
  }, {
    path: "/pos/create",
    component: _f6bf23fc,
    name: "pos-create"
  }, {
    path: "/pos/new",
    component: _4e681a8a,
    name: "pos-new"
  }, {
    path: "/pos/test",
    component: _2a6ecbd0,
    name: "pos-test"
  }, {
    path: "/product/create",
    component: _51cbd9f2,
    name: "product-create"
  }, {
    path: "/profile/qualification",
    component: _5968ea71,
    name: "profile-qualification"
  }, {
    path: "/profile/social",
    component: _681ee401,
    name: "profile-social"
  }, {
    path: "/profile/training",
    component: _3ddbb224,
    name: "profile-training"
  }, {
    path: "/profile/update",
    component: _ff44314c,
    name: "profile-update"
  }, {
    path: "/setting/assign-role",
    component: _d0104e0c,
    name: "setting-assign-role"
  }, {
    path: "/setting/permission",
    component: _ffa5554e,
    name: "setting-permission"
  }, {
    path: "/setting/role",
    component: _b957bc00,
    name: "setting-role"
  }, {
    path: "/setting/special-permission",
    component: _6ad6f226,
    name: "setting-special-permission"
  }, {
    path: "/employee/department/create",
    component: _5dac80ba,
    name: "employee-department-create"
  }, {
    path: "/employee/designation/create",
    component: _6d8459ba,
    name: "employee-designation-create"
  }, {
    path: "/employee/employee/create",
    component: _63e86172,
    name: "employee-employee-create"
  }, {
    path: "/profile/qualification/create",
    component: _092ea326,
    name: "profile-qualification-create"
  }, {
    path: "/profile/social/create",
    component: _791c3246,
    name: "profile-social-create"
  }, {
    path: "/profile/training/create",
    component: _68e70190,
    name: "profile-training-create"
  }, {
    path: "/employee/employee/detail/:id?",
    component: _d8e91872,
    name: "employee-employee-detail-id"
  }, {
    path: "/employee/employee/update/:id?",
    component: _6dd4c782,
    name: "employee-employee-update-id"
  }, {
    path: "/customer/update/:id?",
    component: _329be5ea,
    name: "customer-update-id"
  }, {
    path: "/product/update/:id?",
    component: _55dbffff,
    name: "product-update-id"
  }, {
    path: "/password-reset-confirm/:token?",
    component: _9e61a684,
    name: "password-reset-confirm-token"
  }, {
    path: "/",
    component: _b72a9692,
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
