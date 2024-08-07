<template>
  <div class="min-h-screen bg-gray-50">
    <main class="w-1/3 mx-auto">
      <PostList />
    </main>
  </div>
</template>

<script>
import PostList from "@/components/PostList.vue";

export default {
  components: {
    PostList,
  },
};
</script>
