<template>
  <v-container>
    <v-row justify="center">
      <v-col v-for="post in posts" :key="`key_${post.id}`" cols="auto">
        <v-sheet
          class="gray text-center overflow-hidden"
          :elevation="3"
          max-width="344"
          max-height="390"
        >
          <v-img
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            cover
          ></v-img>

          <v-card-title class="text-capitalize">
            {{ post.title }}
          </v-card-title>

          <v-sheet class="overflow-hidden mb-5" max-height="70">
            {{ post.body }}
          </v-sheet>

          <v-btn
            class="font-weight-black mb-5"
            color="grey-darken-3"
            variant="text"
            @click="handleEvent(post.id)"
          >
            READ MORE
          </v-btn>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  posts: Object,
  postButton: String,
});

const emits = defineEmits(["handleEvent"]);

const handleEvent = (val) => {
  emits("handleEvent", val);
};
</script>
