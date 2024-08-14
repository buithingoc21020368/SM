<template>
  <div class="min-h-screen bg-gray-50">
    <main class="w-1/3 mx-auto">
      <UpPost />
      <PostList />
    </main>
  </div>
</template>

<script>
import PostList from "@/components/PostList.vue";
import UpPost from "@/components/UpPost.vue";

export default {
  components: {
    PostList,
    UpPost,
  },
};
</script>
