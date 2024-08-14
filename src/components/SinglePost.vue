<template>
  <div class="bg-white border border-gray-300 rounded-lg shadow-md p-4 mt-6">
    <div class="flex items-center mb-3">
      <a class="flex items-center">
        <img
          class="w-8 h-8 rounded-full"
          src="https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png"
          alt="avatar"
        />
        <span class="text-start font-bold ml-2">username</span>
      </a>
    </div>

    <div>
      <p v-if="content" class="mb-2 whitespace-pre-line">{{ content }}</p>
      <div v-if="imagePosts.length" class="mt-4">
        <img
          v-for="(image, index) in imagePosts"
          :key="index"
          :src="image"
          alt="Post Image"
          class="w-full h-auto mb-4"
        />
      </div>
      <img
        class="w-full h-auto mb-4"
        src="../assets/image/bg.png"
        alt="avatar"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "SinglePost",
  props: {
    postID: Number,
    content: String,
    createdAt: String,
    updatedAt: String,
    imagePosts: Array,
    tagUsers: Array,
  },
};
</script>
