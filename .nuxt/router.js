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
const _13b79c08 = () => interopDefault(import('../pages/password-reset.vue' /* webpackChunkName: "pages/password-reset" */))
const _f1bf3788 = () => interopDefault(import('../pages/pos/index.vue' /* webpackChunkName: "pages/pos/index" */))
const _dbe8ead2 = () => interopDefault(import('../pages/product/index.vue' /* webpackChunkName: "pages/product/index" */))
const _f4b17290 = () => interopDefault(import('../pages/setting/index.vue' /* webpackChunkName: "pages/setting/index" */))
const _2be38172 = () => interopDefault(import('../pages/unit/index.vue' /* webpackChunkName: "pages/unit/index" */))
const _6a7a31f4 = () => interopDefault(import('../pages/customer/category.vue' /* webpackChunkName: "pages/customer/category" */))
const _6610b31c = () => interopDefault(import('../pages/customer/create.vue' /* webpackChunkName: "pages/customer/create" */))
const _4625adf8 = () => interopDefault(import('../pages/employee/department.vue' /* webpackChunkName: "pages/employee/department" */))
const _7d742fc1 = () => interopDefault(import('../pages/employee/designation.vue' /* webpackChunkName: "pages/employee/designation" */))
const _ff4657b0 = () => interopDefault(import('../pages/employee/employee-add.vue' /* webpackChunkName: "pages/employee/employee-add" */))
const _27bc30a7 = () => interopDefault(import('../pages/employee/employee-list.vue' /* webpackChunkName: "pages/employee/employee-list" */))
const _c0973700 = () => interopDefault(import('../pages/expense/category.vue' /* webpackChunkName: "pages/expense/category" */))
const _6815e804 = () => interopDefault(import('../pages/expense/create.vue' /* webpackChunkName: "pages/expense/create" */))
const _100c20f5 = () => interopDefault(import('../pages/expense/expense-list.vue' /* webpackChunkName: "pages/expense/expense-list" */))
const _f6bf23fc = () => interopDefault(import('../pages/pos/create.vue' /* webpackChunkName: "pages/pos/create" */))
const _21a372c9 = () => interopDefault(import('../pages/pos/sales_return.vue' /* webpackChunkName: "pages/pos/sales_return" */))
const _4191cc04 = () => interopDefault(import('../pages/pos/sales_return_list.vue' /* webpackChunkName: "pages/pos/sales_return_list" */))
const _2a6ecbd0 = () => interopDefault(import('../pages/pos/test.vue' /* webpackChunkName: "pages/pos/test" */))
const _51cbd9f2 = () => interopDefault(import('../pages/product/create.vue' /* webpackChunkName: "pages/product/create" */))
const _0dc296db = () => interopDefault(import('../pages/product/stock.vue' /* webpackChunkName: "pages/product/stock" */))
const _f4ecd796 = () => interopDefault(import('../pages/report/sales-report.vue' /* webpackChunkName: "pages/report/sales-report" */))
const _d0e48000 = () => interopDefault(import('../pages/report/sales-return-report.vue' /* webpackChunkName: "pages/report/sales-return-report" */))
const _d0104e0c = () => interopDefault(import('../pages/setting/assign-role.vue' /* webpackChunkName: "pages/setting/assign-role" */))
const _ffa5554e = () => interopDefault(import('../pages/setting/permission.vue' /* webpackChunkName: "pages/setting/permission" */))
const _b957bc00 = () => interopDefault(import('../pages/setting/role.vue' /* webpackChunkName: "pages/setting/role" */))
const _6ad6f226 = () => interopDefault(import('../pages/setting/special-permission.vue' /* webpackChunkName: "pages/setting/special-permission" */))
const _329be5ea = () => interopDefault(import('../pages/customer/update/_id.vue' /* webpackChunkName: "pages/customer/update/_id" */))
const _155ec7bd = () => interopDefault(import('../pages/employee/employee-update/_id.vue' /* webpackChunkName: "pages/employee/employee-update/_id" */))
const _0213a576 = () => interopDefault(import('../pages/expense/update/_id.vue' /* webpackChunkName: "pages/expense/update/_id" */))
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
    component: _4625adf8,
    name: "employee-department"
  }, {
    path: "/employee/designation",
    component: _7d742fc1,
    name: "employee-designation"
  }, {
    path: "/employee/employee-add",
    component: _ff4657b0,
    name: "employee-employee-add"
  }, {
    path: "/employee/employee-list",
    component: _27bc30a7,
    name: "employee-employee-list"
  }, {
    path: "/expense/category",
    component: _c0973700,
    name: "expense-category"
  }, {
    path: "/expense/create",
    component: _6815e804,
    name: "expense-create"
  }, {
    path: "/expense/expense-list",
    component: _100c20f5,
    name: "expense-expense-list"
  }, {
    path: "/pos/create",
    component: _f6bf23fc,
    name: "pos-create"
  }, {
    path: "/pos/sales_return",
    component: _21a372c9,
    name: "pos-sales_return"
  }, {
    path: "/pos/sales_return_list",
    component: _4191cc04,
    name: "pos-sales_return_list"
  }, {
    path: "/pos/test",
    component: _2a6ecbd0,
    name: "pos-test"
  }, {
    path: "/product/create",
    component: _51cbd9f2,
    name: "product-create"
  }, {
    path: "/product/stock",
    component: _0dc296db,
    name: "product-stock"
  }, {
    path: "/report/sales-report",
    component: _f4ecd796,
    name: "report-sales-report"
  }, {
    path: "/report/sales-return-report",
    component: _d0e48000,
    name: "report-sales-return-report"
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
    path: "/customer/update/:id?",
    component: _329be5ea,
    name: "customer-update-id"
  }, {
    path: "/employee/employee-update/:id?",
    component: _155ec7bd,
    name: "employee-employee-update-id"
  }, {
    path: "/expense/update/:id?",
    component: _0213a576,
    name: "expense-update-id"
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
