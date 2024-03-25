<script setup>
import { ref } from "vue";
import HeaderLayout from "./Header.vue";
import Sider from "./Sider.vue";

const collapsed = ref(false);
const collapseSider = () => {
  collapsed.value = !collapsed.value;
};
</script>

<template>
  <a-layout>
    <sider v-model:collapsed="collapsed" />
    <a-layout>
      <header-layout
        v-model:collapsed="collapsed"
        @collapse-sider="collapseSider"
      />
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        <slot />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<style lang="less" scoped>
.ant-layout {
  width: 100vw;
  height: 100vh;

  .ant-layout-header {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: #001529 !important;
  }
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>
