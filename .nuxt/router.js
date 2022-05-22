import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _116605ec = () => interopDefault(import('../pages/app.vue' /* webpackChunkName: "pages/app" */))
const _c32f0986 = () => interopDefault(import('../pages/dum-ac/index.vue' /* webpackChunkName: "pages/dum-ac/index" */))
const _0c4ed327 = () => interopDefault(import('../pages/student/index.vue' /* webpackChunkName: "pages/student/index" */))
const _05388fc8 = () => interopDefault(import('../pages/dum-ac/event/index.vue' /* webpackChunkName: "pages/dum-ac/event/index" */))
const _134d73c0 = () => interopDefault(import('../pages/dum-ac/notice/index.vue' /* webpackChunkName: "pages/dum-ac/notice/index" */))
const _fdbcf31c = () => interopDefault(import('../pages/dum-ac/program/index.vue' /* webpackChunkName: "pages/dum-ac/program/index" */))
const _a103c2ee = () => interopDefault(import('../pages/dum-ac/slider/index.vue' /* webpackChunkName: "pages/dum-ac/slider/index" */))
const _6ce49814 = () => interopDefault(import('../pages/dum-ac/event/create.vue' /* webpackChunkName: "pages/dum-ac/event/create" */))
const _7e154efe = () => interopDefault(import('../pages/dum-ac/notice/create.vue' /* webpackChunkName: "pages/dum-ac/notice/create" */))
const _6a78dae8 = () => interopDefault(import('../pages/dum-ac/program/create.vue' /* webpackChunkName: "pages/dum-ac/program/create" */))
const _67f9fd55 = () => interopDefault(import('../pages/dum-ac/slider/create.vue' /* webpackChunkName: "pages/dum-ac/slider/create" */))
const _0d6efafb = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _116605ec,
    name: "app"
  }, {
    path: "/dum-ac",
    component: _c32f0986,
    name: "dum-ac"
  }, {
    path: "/student",
    component: _0c4ed327,
    name: "student"
  }, {
    path: "/dum-ac/event",
    component: _05388fc8,
    name: "dum-ac-event"
  }, {
    path: "/dum-ac/notice",
    component: _134d73c0,
    name: "dum-ac-notice"
  }, {
    path: "/dum-ac/program",
    component: _fdbcf31c,
    name: "dum-ac-program"
  }, {
    path: "/dum-ac/slider",
    component: _a103c2ee,
    name: "dum-ac-slider"
  }, {
    path: "/dum-ac/event/create",
    component: _6ce49814,
    name: "dum-ac-event-create"
  }, {
    path: "/dum-ac/notice/create",
    component: _7e154efe,
    name: "dum-ac-notice-create"
  }, {
    path: "/dum-ac/program/create",
    component: _6a78dae8,
    name: "dum-ac-program-create"
  }, {
    path: "/dum-ac/slider/create",
    component: _67f9fd55,
    name: "dum-ac-slider-create"
  }, {
    path: "/",
    component: _0d6efafb,
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
