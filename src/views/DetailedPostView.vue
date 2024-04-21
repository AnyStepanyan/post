<template>
  <div>
    <DetailedPostContent
      v-model="postBody"
      :current-post="currentPost"
      :isEditing="isEditing"
    >
      <template #body>
        <GreyButtons button-name="Edit" @eventHandler="toggleEdit" />
        <GreyButtons
          v-if="!isEditing"
          button-name="Done"
          @eventHandler="updatePost(currentPost.id, postBody)"
        />
        <GreyButtons
          button-name="Delete"
          @eventHandler="deletePost(currentPost.id)"
        />
      </template>
    </DetailedPostContent>
    <DetailedPostComments
      header="Comments"
      :currentPostComments="currentPostComments"
    />
  </div>
</template>

<script setup>
import DetailedPostContent from "@/components/DetailedPostContent.vue";
import DetailedPostComments from "@/components/DetailedPostComments.vue";
import GreyButtons from "@/components/GreyButtons.vue";
import { ref, computed, watch, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";

const store = useStore();
const router = useRouter();
const route = useRoute();

const isEditing = ref(true);
const postBody = ref(null);

const currentPost = computed(() => store.getters.currentPost);
const currentPostComments = computed(() => store.getters.currentPostComments);

const toggleEdit = () => {
  isEditing.value = !isEditing.value;
};

const updatePost = async (id, postBody) => {
  const postResponse = await store.dispatch("updatePost", { id, postBody });
  if (postResponse && !postResponse.error) {
    toggleEdit()
  }
};

const deletePost = async (id) => {
  const postResponse = await store.dispatch("deletePost", id);
  if (postResponse && !postResponse.error) {
    router.push({ name: "home" });
  }
};

onMounted(() => {
  const postId = route.params.id;
  store.dispatch("getCurrentPost", postId);
  store.dispatch("getcurrentPostComments", postId);
});

watch(currentPost, (newPost) => {
  postBody.value = newPost.body;
});
</script>
