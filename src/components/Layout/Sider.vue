<script setup>
import { ref, watch } from "vue";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons-vue";

const props = defineProps({
  collapsed: {
    type: Boolean,
    required: true,
    default: false,
  },
  selectedKeys: {
    type: Array,
    required: true,
    default() {
      return [];
    },
  },
});

const localCollapsed = ref(false);

watch(props.collapsed, (newCollapsed) => {
  console.log("abc", newCollapsed);
  localCollapsed.value = newCollapsed;
});
// watch(localCollapsed, (newCollapsed) => {
//   console.log("abc", newCollapsed);
// });
</script>

<template>
  <a-layout-sider
    v-model:collapsed="localCollapsed"
    :trigger="null"
    collapsible
  >
    <div class="logo" />
    <a-menu
      v-model:selectedKeys="props.selectedKeys"
      mode="inline"
      theme="dark"
    >
      <a-menu-item key="1">
        <user-outlined />
        <span>nav 1</span>
      </a-menu-item>
      <a-menu-item key="2">
        <video-camera-outlined />
        <span>nav 2</span>
      </a-menu-item>
      <a-menu-item key="3">
        <upload-outlined />
        <span>nav 3</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<style scoped></style>
