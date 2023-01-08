import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _61bb0317 = () => interopDefault(import('../pages/brand/index.vue' /* webpackChunkName: "pages/brand/index" */))
const _a758ad78 = () => interopDefault(import('../pages/category/index.vue' /* webpackChunkName: "pages/category/index" */))
const _1299e165 = () => interopDefault(import('../pages/change-password.vue' /* webpackChunkName: "pages/change-password" */))
const _17845424 = () => interopDefault(import('../pages/customer/index.vue' /* webpackChunkName: "pages/customer/index" */))
const _79e56cbe = () => interopDefault(import('../pages/dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _57739260 = () => interopDefault(import('../pages/password-reset.vue' /* webpackChunkName: "pages/password-reset" */))
const _53692d82 = () => interopDefault(import('../pages/product/index.vue' /* webpackChunkName: "pages/product/index" */))
const _6c31b540 = () => interopDefault(import('../pages/setting/index.vue' /* webpackChunkName: "pages/setting/index" */))
const _a7ef386c = () => interopDefault(import('../pages/unit/index.vue' /* webpackChunkName: "pages/unit/index" */))
const _8e4b06c8 = () => interopDefault(import('../pages/customer/category.vue' /* webpackChunkName: "pages/customer/category" */))
const _00ba7b1a = () => interopDefault(import('../pages/customer/create.vue' /* webpackChunkName: "pages/customer/create" */))
const _7d9deea0 = () => interopDefault(import('../pages/employee/department.vue' /* webpackChunkName: "pages/employee/department" */))
const _35040419 = () => interopDefault(import('../pages/employee/designation.vue' /* webpackChunkName: "pages/employee/designation" */))
const _8a70ea60 = () => interopDefault(import('../pages/employee/employee-add.vue' /* webpackChunkName: "pages/employee/employee-add" */))
const _3aa84eff = () => interopDefault(import('../pages/employee/employee-list.vue' /* webpackChunkName: "pages/employee/employee-list" */))
const _3767b650 = () => interopDefault(import('../pages/expense/category.vue' /* webpackChunkName: "pages/expense/category" */))
const _0fb10256 = () => interopDefault(import('../pages/expense/create.vue' /* webpackChunkName: "pages/expense/create" */))
const _70c81566 = () => interopDefault(import('../pages/expense/expense-list.vue' /* webpackChunkName: "pages/expense/expense-list" */))
const _59182058 = () => interopDefault(import('../pages/pos/sale-create.vue' /* webpackChunkName: "pages/pos/sale-create" */))
const _5a65ee76 = () => interopDefault(import('../pages/pos/sale-list.vue' /* webpackChunkName: "pages/pos/sale-list" */))
const _663b3321 = () => interopDefault(import('../pages/pos/sales_return.vue' /* webpackChunkName: "pages/pos/sales_return" */))
const _7bfc82ac = () => interopDefault(import('../pages/pos/sales_return_list.vue' /* webpackChunkName: "pages/pos/sales_return_list" */))
const _621b9b20 = () => interopDefault(import('../pages/pos/test.vue' /* webpackChunkName: "pages/pos/test" */))
const _1ad6095f = () => interopDefault(import('../pages/product/create.vue' /* webpackChunkName: "pages/product/create" */))
const _52027583 = () => interopDefault(import('../pages/product/stock.vue' /* webpackChunkName: "pages/product/stock" */))
const _7a711bd2 = () => interopDefault(import('../pages/purchase/create.vue' /* webpackChunkName: "pages/purchase/create" */))
const _6ea824c2 = () => interopDefault(import('../pages/purchase/purchase-list.vue' /* webpackChunkName: "pages/purchase/purchase-list" */))
const _7363aa1e = () => interopDefault(import('../pages/purchase/purchase-return.vue' /* webpackChunkName: "pages/purchase/purchase-return" */))
const _41be3eaa = () => interopDefault(import('../pages/purchase/purchase-return-list.vue' /* webpackChunkName: "pages/purchase/purchase-return-list" */))
const _1b54e211 = () => interopDefault(import('../pages/report/expense-report.vue' /* webpackChunkName: "pages/report/expense-report" */))
const _1f5724dd = () => interopDefault(import('../pages/report/profit-loss-report.vue' /* webpackChunkName: "pages/report/profit-loss-report" */))
const _85fc5646 = () => interopDefault(import('../pages/report/sales-report.vue' /* webpackChunkName: "pages/report/sales-report" */))
const _0012f258 = () => interopDefault(import('../pages/report/sales-return-report.vue' /* webpackChunkName: "pages/report/sales-return-report" */))
const _195e46da = () => interopDefault(import('../pages/report/stock-report.vue' /* webpackChunkName: "pages/report/stock-report" */))
const _611fccbc = () => interopDefault(import('../pages/setting/assign-role.vue' /* webpackChunkName: "pages/setting/assign-role" */))
const _0453409e = () => interopDefault(import('../pages/setting/permission.vue' /* webpackChunkName: "pages/setting/permission" */))
const _a46c6350 = () => interopDefault(import('../pages/setting/role.vue' /* webpackChunkName: "pages/setting/role" */))
const _3319b945 = () => interopDefault(import('../pages/setting/special-permission.vue' /* webpackChunkName: "pages/setting/special-permission" */))
const _63dbbf28 = () => interopDefault(import('../pages/supplier/create.vue' /* webpackChunkName: "pages/supplier/create" */))
const _5c7cb582 = () => interopDefault(import('../pages/supplier/supplier-list.vue' /* webpackChunkName: "pages/supplier/supplier-list" */))
const _6a142692 = () => interopDefault(import('../pages/customer/update/_id.vue' /* webpackChunkName: "pages/customer/update/_id" */))
const _7160c415 = () => interopDefault(import('../pages/employee/employee-update/_id.vue' /* webpackChunkName: "pages/employee/employee-update/_id" */))
const _7fbcafce = () => interopDefault(import('../pages/expense/update/_id.vue' /* webpackChunkName: "pages/expense/update/_id" */))
const _58f5eb52 = () => interopDefault(import('../pages/product/update/_id.vue' /* webpackChunkName: "pages/product/update/_id" */))
const _64d65a38 = () => interopDefault(import('../pages/supplier/update/_id.vue' /* webpackChunkName: "pages/supplier/update/_id" */))
const _55e68934 = () => interopDefault(import('../pages/password-reset-confirm/_token.vue' /* webpackChunkName: "pages/password-reset-confirm/_token" */))
const _0e27bb5f = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _61bb0317,
    name: "brand"
  }, {
    path: "/category",
    component: _a758ad78,
    name: "category"
  }, {
    path: "/change-password",
    component: _1299e165,
    name: "change-password"
  }, {
    path: "/customer",
    component: _17845424,
    name: "customer"
  }, {
    path: "/dashboard",
    component: _79e56cbe,
    name: "dashboard"
  }, {
    path: "/password-reset",
    component: _57739260,
    name: "password-reset"
  }, {
    path: "/product",
    component: _53692d82,
    name: "product"
  }, {
    path: "/setting",
    component: _6c31b540,
    name: "setting"
  }, {
    path: "/unit",
    component: _a7ef386c,
    name: "unit"
  }, {
    path: "/customer/category",
    component: _8e4b06c8,
    name: "customer-category"
  }, {
    path: "/customer/create",
    component: _00ba7b1a,
    name: "customer-create"
  }, {
    path: "/employee/department",
    component: _7d9deea0,
    name: "employee-department"
  }, {
    path: "/employee/designation",
    component: _35040419,
    name: "employee-designation"
  }, {
    path: "/employee/employee-add",
    component: _8a70ea60,
    name: "employee-employee-add"
  }, {
    path: "/employee/employee-list",
    component: _3aa84eff,
    name: "employee-employee-list"
  }, {
    path: "/expense/category",
    component: _3767b650,
    name: "expense-category"
  }, {
    path: "/expense/create",
    component: _0fb10256,
    name: "expense-create"
  }, {
    path: "/expense/expense-list",
    component: _70c81566,
    name: "expense-expense-list"
  }, {
    path: "/pos/sale-create",
    component: _59182058,
    name: "pos-sale-create"
  }, {
    path: "/pos/sale-list",
    component: _5a65ee76,
    name: "pos-sale-list"
  }, {
    path: "/pos/sales_return",
    component: _663b3321,
    name: "pos-sales_return"
  }, {
    path: "/pos/sales_return_list",
    component: _7bfc82ac,
    name: "pos-sales_return_list"
  }, {
    path: "/pos/test",
    component: _621b9b20,
    name: "pos-test"
  }, {
    path: "/product/create",
    component: _1ad6095f,
    name: "product-create"
  }, {
    path: "/product/stock",
    component: _52027583,
    name: "product-stock"
  }, {
    path: "/purchase/create",
    component: _7a711bd2,
    name: "purchase-create"
  }, {
    path: "/purchase/purchase-list",
    component: _6ea824c2,
    name: "purchase-purchase-list"
  }, {
    path: "/purchase/purchase-return",
    component: _7363aa1e,
    name: "purchase-purchase-return"
  }, {
    path: "/purchase/purchase-return-list",
    component: _41be3eaa,
    name: "purchase-purchase-return-list"
  }, {
    path: "/report/expense-report",
    component: _1b54e211,
    name: "report-expense-report"
  }, {
    path: "/report/profit-loss-report",
    component: _1f5724dd,
    name: "report-profit-loss-report"
  }, {
    path: "/report/sales-report",
    component: _85fc5646,
    name: "report-sales-report"
  }, {
    path: "/report/sales-return-report",
    component: _0012f258,
    name: "report-sales-return-report"
  }, {
    path: "/report/stock-report",
    component: _195e46da,
    name: "report-stock-report"
  }, {
    path: "/setting/assign-role",
    component: _611fccbc,
    name: "setting-assign-role"
  }, {
    path: "/setting/permission",
    component: _0453409e,
    name: "setting-permission"
  }, {
    path: "/setting/role",
    component: _a46c6350,
    name: "setting-role"
  }, {
    path: "/setting/special-permission",
    component: _3319b945,
    name: "setting-special-permission"
  }, {
    path: "/supplier/create",
    component: _63dbbf28,
    name: "supplier-create"
  }, {
    path: "/supplier/supplier-list",
    component: _5c7cb582,
    name: "supplier-supplier-list"
  }, {
    path: "/customer/update/:id?",
    component: _6a142692,
    name: "customer-update-id"
  }, {
    path: "/employee/employee-update/:id?",
    component: _7160c415,
    name: "employee-employee-update-id"
  }, {
    path: "/expense/update/:id?",
    component: _7fbcafce,
    name: "expense-update-id"
  }, {
    path: "/product/update/:id?",
    component: _58f5eb52,
    name: "product-update-id"
  }, {
    path: "/supplier/update/:id?",
    component: _64d65a38,
    name: "supplier-update-id"
  }, {
    path: "/password-reset-confirm/:token?",
    component: _55e68934,
    name: "password-reset-confirm-token"
  }, {
    path: "/",
    component: _0e27bb5f,
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
