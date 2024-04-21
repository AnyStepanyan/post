<template>
  <v-btn class="mr-2" variant="tonal" @click="eventHandler">
    {{ buttonName }}
  </v-btn>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  buttonName: String,
});

const emits = defineEmits(["eventHandler"]);

const eventHandler = (val) => {
  emits("eventHandler", val);
};
</script>
