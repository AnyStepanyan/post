<template>
  <NewPostForm
    v-model="postData"
    title="Create new post"
    titlePlaceholder="Title"
    contentPlaceholder="Write your content here..."
    submitBtn="Submit"
    :titleRules="[required(postData.title)]"
    :contentRules="[required(postData.content)]"
    @handleSubmit="submitPost"
  />
</template>

<script setup>
import { ref } from "vue";
import NewPostForm from "@/components/NewPostForm.vue";
import { required } from "@/helpers/validations";
import { useStore } from "vuex";

const store = useStore();

const postData = ref({
  title: "",
  content: "",
});

const submitPost = async () => {
  const postResponse = await store.dispatch("submitPost", postData.value);
  if (postResponse && !postResponse.error) {
    resetForm();
  }
};

const resetForm = () => {
  const trimmedTitle = postData.value.title.trim();
  const trimmedContent = postData.value.content.trim();

  if (trimmedTitle && trimmedContent) {
    postData.value.title = "";
    postData.value.content = "";
  }
};
</script>
