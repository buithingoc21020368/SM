<template>
  <div
    class="flex items-center justify-center min-h-screen bg-center bg-cover custom-bg"
  >
    <div class="bg-white bg-opacity-90 p-5 rounded-lg text-center w-1/3">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthPage",
};
</script>

<style>
.custom-bg {
  background-image: url("@/assets/image/bg.png");
}
</style>
