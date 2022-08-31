import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _f2643ee2 = () => interopDefault(import('../pages/brand/index.vue' /* webpackChunkName: "pages/brand/index" */))
const _0aa38e68 = () => interopDefault(import('../pages/category/index.vue' /* webpackChunkName: "pages/category/index" */))
const _e0dd7a46 = () => interopDefault(import('../pages/change-password.vue' /* webpackChunkName: "pages/change-password" */))
const _c0adb5ce = () => interopDefault(import('../pages/dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _d6abf308 = () => interopDefault(import('../pages/employee/index.vue' /* webpackChunkName: "pages/employee/index" */))
const _b463bc30 = () => interopDefault(import('../pages/password-reset.vue' /* webpackChunkName: "pages/password-reset" */))
const _04c5b25c = () => interopDefault(import('../pages/pos/index.vue' /* webpackChunkName: "pages/pos/index" */))
const _021cc8b7 = () => interopDefault(import('../pages/product/index.vue' /* webpackChunkName: "pages/product/index" */))
const _238c64f1 = () => interopDefault(import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */))
const _148ef650 = () => interopDefault(import('../pages/setting/index.vue' /* webpackChunkName: "pages/setting/index" */))
const _7aa27c0f = () => interopDefault(import('../pages/brand/create.vue' /* webpackChunkName: "pages/brand/create" */))
const _fa65a91c = () => interopDefault(import('../pages/category/create.vue' /* webpackChunkName: "pages/category/create" */))
const _ac6a2eca = () => interopDefault(import('../pages/employee/department/index.vue' /* webpackChunkName: "pages/employee/department/index" */))
const _925e5138 = () => interopDefault(import('../pages/employee/designation/index.vue' /* webpackChunkName: "pages/employee/designation/index" */))
const _22835c77 = () => interopDefault(import('../pages/employee/employee/index.vue' /* webpackChunkName: "pages/employee/employee/index" */))
const _0ad2542a = () => interopDefault(import('../pages/employee/office-time/index.vue' /* webpackChunkName: "pages/employee/office-time/index" */))
const _5a3107f8 = () => interopDefault(import('../pages/pos/test.vue' /* webpackChunkName: "pages/pos/test" */))
const _693098e7 = () => interopDefault(import('../pages/product/create.vue' /* webpackChunkName: "pages/product/create" */))
const _36e2f091 = () => interopDefault(import('../pages/profile/qualification/index.vue' /* webpackChunkName: "pages/profile/qualification/index" */))
const _77f181e1 = () => interopDefault(import('../pages/profile/social/index.vue' /* webpackChunkName: "pages/profile/social/index" */))
const _46b4ccce = () => interopDefault(import('../pages/profile/training/index.vue' /* webpackChunkName: "pages/profile/training/index" */))
const _12746d3a = () => interopDefault(import('../pages/profile/update.vue' /* webpackChunkName: "pages/profile/update" */))
const _5669ff1a = () => interopDefault(import('../pages/setting/assign-role.vue' /* webpackChunkName: "pages/setting/assign-role" */))
const _75cdeb39 = () => interopDefault(import('../pages/setting/permission.vue' /* webpackChunkName: "pages/setting/permission" */))
const _2b129fe0 = () => interopDefault(import('../pages/setting/role.vue' /* webpackChunkName: "pages/setting/role" */))
const _9e9d8666 = () => interopDefault(import('../pages/setting/special-permission.vue' /* webpackChunkName: "pages/setting/special-permission" */))
const _917314fa = () => interopDefault(import('../pages/employee/department/create.vue' /* webpackChunkName: "pages/employee/department/create" */))
const _4afe5fda = () => interopDefault(import('../pages/employee/designation/create.vue' /* webpackChunkName: "pages/employee/designation/create" */))
const _559c7d27 = () => interopDefault(import('../pages/employee/employee/create.vue' /* webpackChunkName: "pages/employee/employee/create" */))
const _65a12766 = () => interopDefault(import('../pages/profile/qualification/create.vue' /* webpackChunkName: "pages/profile/qualification/create" */))
const _a419f606 = () => interopDefault(import('../pages/profile/social/create.vue' /* webpackChunkName: "pages/profile/social/create" */))
const _90cdd0a0 = () => interopDefault(import('../pages/profile/training/create.vue' /* webpackChunkName: "pages/profile/training/create" */))
const _655231a7 = () => interopDefault(import('../pages/employee/employee/detail/_id.vue' /* webpackChunkName: "pages/employee/employee/detail/_id" */))
const _ca474bc2 = () => interopDefault(import('../pages/employee/employee/update/_id.vue' /* webpackChunkName: "pages/employee/employee/update/_id" */))
const _17e02ade = () => interopDefault(import('../pages/password-reset-confirm/_token.vue' /* webpackChunkName: "pages/password-reset-confirm/_token" */))
const _87a7da52 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _f2643ee2,
    name: "brand"
  }, {
    path: "/category",
    component: _0aa38e68,
    name: "category"
  }, {
    path: "/change-password",
    component: _e0dd7a46,
    name: "change-password"
  }, {
    path: "/dashboard",
    component: _c0adb5ce,
    name: "dashboard"
  }, {
    path: "/employee",
    component: _d6abf308,
    name: "employee"
  }, {
    path: "/password-reset",
    component: _b463bc30,
    name: "password-reset"
  }, {
    path: "/pos",
    component: _04c5b25c,
    name: "pos"
  }, {
    path: "/product",
    component: _021cc8b7,
    name: "product"
  }, {
    path: "/profile",
    component: _238c64f1,
    name: "profile"
  }, {
    path: "/setting",
    component: _148ef650,
    name: "setting"
  }, {
    path: "/brand/create",
    component: _7aa27c0f,
    name: "brand-create"
  }, {
    path: "/category/create",
    component: _fa65a91c,
    name: "category-create"
  }, {
    path: "/employee/department",
    component: _ac6a2eca,
    name: "employee-department"
  }, {
    path: "/employee/designation",
    component: _925e5138,
    name: "employee-designation"
  }, {
    path: "/employee/employee",
    component: _22835c77,
    name: "employee-employee"
  }, {
    path: "/employee/office-time",
    component: _0ad2542a,
    name: "employee-office-time"
  }, {
    path: "/pos/test",
    component: _5a3107f8,
    name: "pos-test"
  }, {
    path: "/product/create",
    component: _693098e7,
    name: "product-create"
  }, {
    path: "/profile/qualification",
    component: _36e2f091,
    name: "profile-qualification"
  }, {
    path: "/profile/social",
    component: _77f181e1,
    name: "profile-social"
  }, {
    path: "/profile/training",
    component: _46b4ccce,
    name: "profile-training"
  }, {
    path: "/profile/update",
    component: _12746d3a,
    name: "profile-update"
  }, {
    path: "/setting/assign-role",
    component: _5669ff1a,
    name: "setting-assign-role"
  }, {
    path: "/setting/permission",
    component: _75cdeb39,
    name: "setting-permission"
  }, {
    path: "/setting/role",
    component: _2b129fe0,
    name: "setting-role"
  }, {
    path: "/setting/special-permission",
    component: _9e9d8666,
    name: "setting-special-permission"
  }, {
    path: "/employee/department/create",
    component: _917314fa,
    name: "employee-department-create"
  }, {
    path: "/employee/designation/create",
    component: _4afe5fda,
    name: "employee-designation-create"
  }, {
    path: "/employee/employee/create",
    component: _559c7d27,
    name: "employee-employee-create"
  }, {
    path: "/profile/qualification/create",
    component: _65a12766,
    name: "profile-qualification-create"
  }, {
    path: "/profile/social/create",
    component: _a419f606,
    name: "profile-social-create"
  }, {
    path: "/profile/training/create",
    component: _90cdd0a0,
    name: "profile-training-create"
  }, {
    path: "/employee/employee/detail/:id?",
    component: _655231a7,
    name: "employee-employee-detail-id"
  }, {
    path: "/employee/employee/update/:id?",
    component: _ca474bc2,
    name: "employee-employee-update-id"
  }, {
    path: "/password-reset-confirm/:token?",
    component: _17e02ade,
    name: "password-reset-confirm-token"
  }, {
    path: "/",
    component: _87a7da52,
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
