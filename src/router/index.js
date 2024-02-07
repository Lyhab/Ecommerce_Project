import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../views/Homepage.vue'

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
        path: "/Brandsony",
        name: "Brandsony",
        component: () =>
        import("../views/Brandsony.vue")
      },
      {
        path: "/Login",
        name: "Login",
        component: () =>
        import("../views/Login.vue")
      },
      {
        path: "/Register",
        name: "Register",
        component: () =>
        import("../views/Register.vue")
      },

  ]
})

export default router