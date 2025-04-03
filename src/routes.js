import routes from '~pages';
import { createRouter, createWebHashHistory } from 'vue-router';
// import { setupLayouts } from 'virtual:generated-layouts'
// import generatedRoutes from 'virtual:generated-pages'

// const routes = setupLayouts(generatedRoutes)

const router = createRouter({
  routes,
  history: createWebHashHistory()
});

// 路由守卫
// router.beforeEach(v => {
//   if (v.meta.isLogin == false) {
//     router.replace('/');
//   }
// })

export default router;