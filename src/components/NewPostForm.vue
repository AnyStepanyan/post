<template>
  <v-sheet class="mx-auto ma-10" max-width="700">
    <h1 class="my-10">{{title}}</h1>
    <v-form @submit.prevent="handleSubmit">
      <v-textarea
        :rules="titleRules"
        rows="2"
        v-model="postData.title"
        :placeholder="titlePlaceholder"
      />
      <v-textarea
        :rules="contentRules"
        maxlength="auto"
        rows="10"
        v-model="postData.content"
        :placeholder="contentPlaceholder"
      />
      <v-btn class="mt-2" block type="submit">
        {{ submitBtn }}
      </v-btn>
    </v-form>
  </v-sheet>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  title: String,
  titlePlaceholder: String,
  contentPlaceholder: String,
  submitBtn: String,
  titleRules: Object,
  contentRules: Object,
});

const emits = defineEmits(["handleSubmit"]);

const postData = defineModel();

const handleSubmit = (formData) => {
  emits("handleSubmit", formData);
};
</script>
