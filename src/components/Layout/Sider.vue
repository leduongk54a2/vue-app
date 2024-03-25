<script setup>
import { computed, toRef } from "vue";
import { routes } from "@/router";
import { useRoute } from "vue-router";

const route = useRoute();
const selectedKeys = computed(() => {
  return route.matched.at(0)?.path;
});

const props = defineProps({
  collapsed: {
    required: true,
    default: false,
  },
});

const localColapsed = toRef(props, "collapsed");
</script>

<template>
  <a-layout-sider v-model:collapsed="localColapsed" :trigger="null" collapsible>
    <div class="logo" />
    <a-menu :selectedKeys="[selectedKeys]" mode="inline" theme="dark">
      <a-menu-item
        v-for="item in routes"
        :key="item.path"
        class="menu-item-layout"
      >
        <router-link :to="item.path">
          <component :is="item.icon"></component>
          <span v-text="item.nameDisplay"></span>
        </router-link>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<style lang="less">
.menu-item-layout .ant-menu-title-content {
  display: flex;
}
</style>
