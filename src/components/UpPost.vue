<template>
  <div
    class="bg-white border border-gray-300 rounded-lg shadow-md p-4 mt-6 mb-6"
  >
    <div class="flex items-center mb-3">
      <a class="flex items-center">
        <img
          class="w-8 h-8 rounded-full"
          src="https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png"
          alt="avatar"
        />
      </a>
      <textarea
        v-model="content"
        name="content"
        class="ml-3 w-full p-2 border border-gray-300 rounded-md resize-none"
        placeholder="What's on your mind?"
        rows="2"
      ></textarea>
    </div>

    <!-- <div v-if="file.length" class="grid grid-cols-3 gap-4 mb-4">
      <div v-for="(fileItem, index) in file" :key="index" class="relative">
        <img
          :src="URL.createObjectURL(fileItem)"
          alt="uploaded image"
          class="w-full h-auto rounded-lg"
        />
      </div>
    </div> -->

    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <label for="file" class="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
            class="hover:text-blue-600"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M18 20H4V6h9V4H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-9h-2v9zm-7.79-3.17l-1.96-2.36L5.5 18h11l-3.54-4.71zM20 4V1h-2v3h-3c.01.01 0 2 0 2h3v2.99c.01.01 2 0 2 0V6h3V4h-3z"
            />
          </svg>
          <input
            type="file"
            id="file"
            accept="image/*"
            multiple
            @change="handleFileUpload"
            class="hidden"
          />
        </label>
      </div>

      <div class="flex items-center">
        <button
          @click="submitPost"
          :disabled="!content && !listFile.length"
          class="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 disabled:opacity-50"
        >
          Đăng bài
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { postApi } from "@/api/postUrl";

export default {
  data() {
    return {
      content: "",
      imageIds: [],
      publicIds: [],
      file: [],
      listFile: [],
    };
  },
  methods: {
    async handleFileUpload(event) {
      this.file = event.target.files;
      try {
        for (let i = 0; i < this.file.length; i++) {
          if (!this.listFile.find((f) => f.name === this.file[i].name)) {
            this.listFile.push(this.file[i]);

            const formData = new FormData();
            formData.append("image", this.file[i]);
            const res = await postApi.upImage(formData);
            if (res && res.data.data.publicId) {
              this.imageIds.push(0);
              this.publicIds.push(res.data.data.publicId);
            }
          }
        }
      } catch (error) {
        console.log("Error uploading file:", error);
      }
    },
    async submitPost() {
      try {
        const postData = {
          content: this.content,
          status: "public",
          tagUserIds: [],
          imageIds: this.imageIds,
          publicIds: this.publicIds,
        };
        const res = await postApi.upPost(postData);
        if (res) {
          location.assign("/");
          alert("Post created successfully!");
        } else {
          alert("Failed to create post!");
        }
      } catch (error) {
        console.error("Error creating post:", error);
      }
    },
  },
};
</script>
