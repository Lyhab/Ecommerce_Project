import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../views/Homepage.vue'
import description from '../components/description.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Homepage,
    },
    
      {
        path: "/AboutPage",
        name: "AboutPage",
        component: () =>
        import("../views/AboutPage.vue")
      },
      {
        path: "/Promotion",
        name: "Promotion",
        component: () =>
        import("../views/Promotion.vue")
      },
      {
        path:'/cart/:productId',
        name: 'cart',
        component : ()=> import ('../views/Cart.vue')
      }
    

  ]
})

export default router