<template>
  <v-sheet class="mx-auto ma-10 text-center" height="auto" max-width="700">
    <h1 class="text-capitalize font-weight-black">
      {{ currentPost.title }}
    </h1>

    <h5 class="ma-7">{{ `Post Number ${currentPost.id}` }}</h5>

    <v-img
      height="400px"
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      cover
    ></v-img>

    <v-textarea
      v-if="!isEditing"
      class="ma-8"
      maxlength="auto"
      v-model="postBody"
      :value="postBody"
    >
    </v-textarea>

    <p v-else class="ma-8">
      {{ postBody }}
    </p>

    <div class="d-flex flex-end">
      <slot name="body"></slot>
    </div>
  </v-sheet>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  currentPost: Object,
  isEditing: Boolean,
});

const postBody = defineModel();
</script>
