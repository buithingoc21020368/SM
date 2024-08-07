import { useStorage } from "@vueuse/core";

export function useAppState() {
  const user = useStorage("user", {
    name: "maiphuong",
    profilePicture: "path_to_profile_picture.jpg",
    suggestions: [
      "huonguyen9873",
      "_im.ngoc__",
      "patrice.evra",
      "ngwth.ao27",
      "vindiesel",
    ],
  });

  const posts = useStorage("posts", [
    {
      id: 1,
      user: "habyhongg",
      time: "5d",
      image: "path_to_image.jpg",
      likes: 60,
      description:
        "My first dream team dù ngày chia tay vẫn 1/2 work remotely ✨",
      comments: [],
    },
    // ... more posts
  ]);

  return { user, posts };
}
