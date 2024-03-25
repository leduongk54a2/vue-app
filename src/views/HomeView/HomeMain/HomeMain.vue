<script setup>
import { useRouter } from "vue-router";
import ROUTE from "@/router/route";

const router = useRouter();
const redirect = () => {
  router.push({ name: ROUTE.HOME_SUB });
};
</script>

<template>
  <button @click="redirect">redirect</button>
</template>

<style scoped></style>
