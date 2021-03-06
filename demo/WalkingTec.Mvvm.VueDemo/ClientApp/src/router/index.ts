import Vue from "vue";
import Router, { RouteConfig } from "vue-router";
import Layout from "@/components/layout/index.vue";
Vue.use(Router);

export const constantRoutes: RouteConfig[] = [
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ "@/pages/dashboard/index.vue"
          ),
        name: "Dashboard",
        meta: {
          title: "dashboard",
          icon: "el-icon-odometer",
          affix: true
        }
      }
    ]
  }
];

export const asyncRoutes: RouteConfig[] = [
  {
    path: "*",
    redirect: "/404",
    meta: { hidden: true }
  }
];

const createRouter = () =>
  new Router({
    // mode: 'history',
    scrollBehavior: (to, from, savedPosition) => {
      if (savedPosition) {
        return savedPosition;
      } else {
        return { x: 0, y: 0 };
      }
    },
    base: process.env.BASE_URL,
    routes: constantRoutes
  });

const router = createRouter();

export function resetRouter() {
  const newRouter = createRouter();
  (router as any).matcher = (newRouter as any).matcher; // reset router
}

export default router;
