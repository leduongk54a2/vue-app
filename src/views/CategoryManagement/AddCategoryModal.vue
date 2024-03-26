<script setup>
import { computed, defineEmits, defineProps, ref, toRef, watch } from "vue";

const props = defineProps({
  visible: {},
});

const emits = defineEmits(["setVisible"]);

const localVisible = toRef(props.visible);
</script>

<template>
  {{ localVisible }}
  <a-modal v-model:open="localVisible"> {{ localVisible }}abc</a-modal>
</template>

<style scoped></style>
