<script setup>
import { useStore } from "vuex";
import { computed, onMounted, watch } from "vue";
import { GET_ALL_CATEGORY } from "@/store/modules/category/actions-type";

const store = useStore();

onMounted(() => {
  store.dispatch(GET_ALL_CATEGORY);
});

const listCategory = computed(() => store.getters.listCategory);
watch(listCategory, () => {
  console.log(store);
});
</script>

<template>
  <div>{{ listCategory }}</div>
</template>

<style scoped></style>
