<template>
  <div class="auth-page">
    <span class="auth-title">Reset Password</span>
    <form @submit.prevent="resetPassword" class="auth-form">
      <input
        id="email"
        name="email"
        v-model="resetForm.email"
        type="email"
        placeholder="example@example.com"
        required
      />
      <button type="submit">Reset Password</button>
    </form>
    <div class="auth-link">
      <router-link to="/auth/login">Back to Login</router-link>
    </div>
  </div>
</template>

<script>
import { authApi } from "@/api/authUrl";
import "./auth.css";

export default {
  name: "ResetPassword",
  data() {
    return {
      resetForm: {
        email: "",
      },
    };
  },
  methods: {
    resetPassword() {
      alert("Password reset link sent to your email");
    },
  },
};
</script>
