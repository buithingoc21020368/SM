<template>
  <div class="auth-page">
    <span class="auth-title">Login</span>
    <form @submit.prevent="login" class="auth-form">
      <input
        id="user_email"
        name="user_email"
        v-model="loginForm.userEmail"
        type="email"
        placeholder="example@example.com"
        required
      />
      <input
        id="password"
        name="password"
        v-model="loginForm.password"
        type="password"
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
    </form>
    <div class="auth-link">
      <router-link to="/auth/reset-password">Forgot Password?</router-link>
      <router-link to="/auth/register">Create your Account</router-link>
    </div>
  </div>
</template>

<script>
import { authApi } from "@/api/authUrl";
import "./auth.css";

export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        userEmail: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      authApi
        .login(this.loginForm)
        .then((response) => {
          localStorage.setItem("token", response.data.data.accessToken);
          location.assign("/");
          alert("Successfully login");
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
  },
};
</script>
