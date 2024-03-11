<template>
  <button @click="clickIncrement">count is {{ count }}</button>
</template>

<script setup>
import { ref } from "vue";
const count = ref(0);

function clickIncrement() {
  count.value++;
}
</script>
<style lang="css" src="./index.css"></style>
