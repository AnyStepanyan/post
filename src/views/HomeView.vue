<template>
  <div class="bg-grey-darken-3">
    <h1 class="text-center pt-7">Blog Posts</h1>
    <PostCards
      :posts="posts"
      postButton="Read More"
      @handleEvent="goDetailedPostPage"
    />
  </div>
</template>

<script setup>
import PostCards from "@/components/PostCards.vue";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

const posts = computed(() => store.getters.posts);

const goDetailedPostPage = (id) => {
  try {
    router.push({ name: "detailedPost", params: { id } });
  } catch (error) {
    console.error("Error navigating to detailed post:", error);
  }
};

onMounted(() => {
  store.dispatch("getPosts");
});
</script>
