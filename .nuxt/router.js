import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _71eb64ac = () => interopDefault(import('../pages/client.vue' /* webpackChunkName: "pages/client" */))
const _69770c98 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/cms_template/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/client",
    component: _71eb64ac,
    name: "client___en___default"
  }, {
    path: "/login",
    component: _69770c98,
    name: "login___en___default"
  }, {
    path: "/cn/client",
    component: _71eb64ac,
    name: "client___cn"
  }, {
    path: "/cn/login",
    component: _69770c98,
    name: "login___cn"
  }, {
    path: "/en/client",
    component: _71eb64ac,
    name: "client___en"
  }, {
    path: "/en/login",
    component: _69770c98,
    name: "login___en"
  }, {
    path: "/zh/client",
    component: _71eb64ac,
    name: "client___zh"
  }, {
    path: "/zh/login",
    component: _69770c98,
    name: "login___zh"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
