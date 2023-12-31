import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [{
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: '/dashboard',
  //   children: [{
  //     path: 'dashboard',
  //     name: 'Dashboard',
  //     component: () => import('@/views/dashboard/index'),
  //     meta: {
  //       title: 'Dashboard',
  //       icon: 'dashboard'
  //     }
  //   }]
  // },

  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/table',
  //   name: 'Example',
  //   meta: {
  //     title: 'Example',
  //     icon: 'el-icon-s-help'
  //   },
  //   children: [{
  //       path: 'table',
  //       name: 'Table',
  //       component: () => import('@/views/table/index'),
  //       meta: {
  //         title: 'Table',
  //         icon: 'table'
  //       }
  //     },
  //     {
  //       path: 'tree',
  //       name: 'Tree',
  //       component: () => import('@/views/tree/index'),
  //       meta: {
  //         title: 'Tree',
  //         icon: 'tree'
  //       }
  //     }
  //   ]
  // },

  {
    path: '/',
    component: Layout,
    redirect: '/index',
    children: [{
      path: 'index',
      name: 'Form',
      component: () => import('@/views/form/index'),
      meta: {
        title: '每日疫情打卡',
        icon: 'form'
      }
    }]
  }

]
const createRouter = () => new Router({
  mode: 'hash',
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher 
}

export default router
