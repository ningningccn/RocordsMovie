import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/:pathMatch(.*)*', // router 4
    redirect: "login",
  },
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
    children: [
      {
        path: "/",
        name: "All",
        component: () => import("@/views/Home/All.vue"),
        meta: { requiresAuth: true },
      },
      {
        path: "watched",
        name: "Watched",
        component: () => import("@/views/Home/Watched.vue"),
        meta: { requiresAuth: true },
      },
      {
        path: "/expect",
        name: "Expect",
        component: () => import("@/views/Home/Expect.vue"),
        meta: { requiresAuth: true },
      },
      {
        path: "/favorite",
        name: "Favorite",
        component: () => import("@/views/Home/Favorite.vue"),
        meta: { requiresAuth: true },
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Page/Login.vue"),
  },
  {
    path: "/forget",
    name: "forget",
    component: () => import("@/views/Page/Login/ForgetPassword.vue"),
  },
  {
    path: "/logintest",
    name: "loginTest",
    component: () => import("@/views/Page/LoginTest.vue"),
  },
  {
    path: "/post_detail/:postId",
    name: "Post_detail",
    component: () => import("@/views/Page/Post_detail.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/movie",
    name: "Movie",
    component: () => import("@/views/Page/Movie.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/cartoon",
    name: "cartoon",
    component: () => import("@/views/Page/Cartoon.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/tvDrama",
    name: "tvDrama",
    component: () => import("@/views/Page/TVDrama.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/tvShow",
    name: "tvShow",
    component: () => import("@/views/Page/TVShow.vue"),
    meta: { requiresAuth: true },
  },
  // Home file
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
