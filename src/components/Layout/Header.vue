<script setup>
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons-vue";

defineProps({
  collapsed: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const emit = defineEmits({
  collapseSider: null,
});
</script>

<template>
  <a-layout-header style="background: #fff; padding: 0">
    <menu-unfold-outlined
      v-if="collapsed"
      class="trigger"
      @click="emit('collapseSider')"
    />
    <menu-fold-outlined v-else class="trigger" @click="emit('collapseSider')" />
  </a-layout-header>
</template>

<style scoped>
.anticon {
  color: white !important;
  font-size: 22px;
}
</style>
