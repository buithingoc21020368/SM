<template>
  <div class="auth-page">
    <span class="auth-title">Register an account</span>
    <form @submit.prevent="register" class="auth-form">
      <input
        id="first_name"
        name="first_name"
        v-model="registerForm.firstName"
        v-if="!otpRequired"
        type="text"
        placeholder="First Name"
        required
      />
      <input
        id="last_name"
        name="last_name"
        v-model="registerForm.lastName"
        v-if="!otpRequired"
        type="text"
        placeholder="Last Name"
        required
      />
      <input
        id="user_email"
        name="user_email"
        v-model="registerForm.userEmail"
        v-if="!otpRequired"
        type="email"
        placeholder="example@example.com"
        required
      />
      <input
        id="password"
        name="password"
        v-model="registerForm.password"
        v-if="!otpRequired"
        type="password"
        placeholder="Password"
        required
      />
      <input
        id="confirm_password"
        name="confirm_password"
        v-model="registerForm.confirmPassword"
        v-if="!otpRequired"
        type="password"
        placeholder="Confirm Password"
        required
      />
      <input
        id="otp"
        name="otp"
        v-model="registerForm.otp"
        v-if="otpRequired"
        type="text"
        placeholder="Enter OTP"
        required
      />
      <button type="submit">
        {{ otpRequired ? "Submit OTP" : "Register" }}
      </button>
    </form>
    <div class="auth-link">
      <span>Have you already got an account? </span>
      <router-link to="/auth/login">Login</router-link>
    </div>
  </div>
</template>

<script>
import { authApi } from "@/api/authUrl";
import "./auth.css";

export default {
  name: "RegisterPage",
  data() {
    return {
      registerForm: {
        firstName: "",
        lastName: "",
        userEmail: "",
        password: "",
        confirmPassword: "",
        code: "",
        otp: "",
      },
      otpRequired: false,
    };
  },
  methods: {
    register() {
      if (this.otpRequired) {
        authApi
          .registerCheckOtp(this.registerForm)
          .then((response) => {
            location.assign("/auth/login");
            alert(response.data.data.message);
          })
          .catch((err) => {
            alert(err.response.data.message);
          });
      } else {
        authApi
          .register(this.registerForm)
          .then((response) => {
            alert(response.data.data.message);
            this.otpRequired = true;
          })
          .catch((err) => {
            alert(err.response.data.message);
          });
      }
    },
  },
};
</script>
