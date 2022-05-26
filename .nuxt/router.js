import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4a558092 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _78bf08cb = () => interopDefault(import('../pages/app.vue' /* webpackChunkName: "pages/app" */))
const _1f1dcec8 = () => interopDefault(import('../pages/dum-ac/index.vue' /* webpackChunkName: "pages/dum-ac/index" */))
const _094c3cb0 = () => interopDefault(import('../pages/student/index.vue' /* webpackChunkName: "pages/student/index" */))
const _17cc1bd8 = () => interopDefault(import('../pages/test.vue' /* webpackChunkName: "pages/test" */))
const _f5f12c32 = () => interopDefault(import('../pages/dum-ac/event/index.vue' /* webpackChunkName: "pages/dum-ac/event/index" */))
const _e54c44fe = () => interopDefault(import('../pages/dum-ac/notice/index.vue' /* webpackChunkName: "pages/dum-ac/notice/index" */))
const _48a254d1 = () => interopDefault(import('../pages/dum-ac/program/index.vue' /* webpackChunkName: "pages/dum-ac/program/index" */))
const _298a884a = () => interopDefault(import('../pages/dum-ac/slider/index.vue' /* webpackChunkName: "pages/dum-ac/slider/index" */))
const _439a1db7 = () => interopDefault(import('../pages/dum-ac/event/create.vue' /* webpackChunkName: "pages/dum-ac/event/create" */))
const _45961d5d = () => interopDefault(import('../pages/dum-ac/notice/create.vue' /* webpackChunkName: "pages/dum-ac/notice/create" */))
const _1946dfe6 = () => interopDefault(import('../pages/dum-ac/program/create.vue' /* webpackChunkName: "pages/dum-ac/program/create" */))
const _2f7acbb4 = () => interopDefault(import('../pages/dum-ac/slider/create.vue' /* webpackChunkName: "pages/dum-ac/slider/create" */))
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
    path: "/about",
    component: _4a558092,
    name: "about"
  }, {
    path: "/app",
    component: _78bf08cb,
    name: "app"
  }, {
    path: "/dum-ac",
    component: _1f1dcec8,
    name: "dum-ac"
  }, {
    path: "/student",
    component: _094c3cb0,
    name: "student"
  }, {
    path: "/test",
    component: _17cc1bd8,
    name: "test"
  }, {
    path: "/dum-ac/event",
    component: _f5f12c32,
    name: "dum-ac-event"
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
    path: "/dum-ac/event/create",
    component: _439a1db7,
    name: "dum-ac-event-create"
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
