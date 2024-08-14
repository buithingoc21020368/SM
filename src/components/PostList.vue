<template>
  <div>
    <SinglePost
      v-for="(item, index) in postLists"
      :key="item.postId"
      :postID="item.postId"
      :content="item.content"
      :createdAt="item.createdAt"
      :updatedAt="item.updateAt"
      :imagePosts="item.imagePosts"
      :tagUsers="item.tagUsers"
    />
    <infinite-loading @infinite="infiniteHandler"></infinite-loading>
  </div>
</template>

<script>
import InfiniteLoading from "v3-infinite-loading";
import SinglePost from "./SinglePost.vue";
import { postApi } from "@/api/postUrl";

export default {
  name: "Posts",
  components: {
    InfiniteLoading,
    SinglePost,
  },
  data() {
    return {
      postLists: [
        {
          postID: 1,
          content: String,
          createdAt: String,
          updatedAt: String,
          imagePosts: [],
          tagUsers: [],
        },
        {
          postID: 1,
          content: String,
          createdAt: String,
          updatedAt: String,
          imagePosts: Array,
          tagUsers: Array,
        },
        {
          postID: 1,
          content: String,
          createdAt: String,
          updatedAt: String,
          imagePosts: Array,
          tagUsers: Array,
        },
        {
          postID: 1,
          content: String,
          createdAt: String,
          updatedAt: String,
          imagePosts: Array,
          tagUsers: Array,
        },
        {
          postID: 1,
          content: String,
          createdAt: String,
          updatedAt: String,
          imagePosts: Array,
          tagUsers: Array,
        },
        {
          postID: 1,
          content: String,
          createdAt: String,
          updatedAt: String,
          imagePosts: Array,
          tagUsers: Array,
        },
        {
          postID: 1,
          content: String,
          createdAt: String,
          updatedAt: String,
          imagePosts: Array,
          tagUsers: Array,
        },
      ],
      page: 1,
    };
  },
  methods: {
    async fetchPosts(page) {
      try {
        const response = await postApi.getPosts({ u: 11 });
        return response.data.data;
      } catch (error) {
        console.error("Error fetching posts:", error);
        return [];
      }
    },

    async infiniteHandler($state) {
      const posts = await this.fetchPosts(this.page);
      if (posts.length) {
        this.postLists.push(...posts);
        $state.loaded();
        this.page++;
      } else {
        $state.complete();
      }
    },
  },
};
</script>
