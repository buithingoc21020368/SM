import { createRouter, createWebHistory } from "vue-router";
import { authApi } from "@/api/authUrl";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/pages/HomePage.vue"),
    },
    {
      path: "/auth",
      component: () => import("@/pages/AuthPage.vue"),
      meta: { unProtectedRoute: true },
      children: [
        {
          path: "login",
          name: "Login",
          component: () => import("@/components/form/auth/LoginForm.vue"),
        },
        {
          path: "register",
          name: "Register",
          component: () => import("@/components/form/auth/RegisterForm.vue"),
        },
        {
          path: "reset-password",
          name: "ResetPassword",
          component: () =>
            import("@/components/form/auth/ResetPasswordForm.vue"),
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.unProtectedRoute) {
    next();
  } else {
    authApi
      .tokenValidate()
      .then(() => next())
      .catch(() => next("/auth/login"));
  }
});

export default router;
