<template>
  <view class="footer relative">
    <!-- 安全区 -->
    <view class="h-[var(--nut-tabbar-height,_100px)]" />
    <nut-tabbar
      v-model="activeName"
      bottom
      safe-area-inset-bottom
      placeholder
      @tab-switch="tabSwitch"
    >
      <nut-tabbar-item
        v-for="item in list"
        :key="item.name"
        :name="item.name"
        :tab-title="item.title"
        :icon="item.icon"
      />
    </nut-tabbar>
  </view>
</template>

<script setup lang="ts">
import { Home, Category, My } from "@nutui/icons-vue-taro";
import { ref, h, computed } from "vue";
import { router } from "@/router";
import { useSystemOutsideStore } from "@/stores/modules/system";

const useSystemStore = useSystemOutsideStore();
type TabItem = {
  name: string;
  path: string;
  title: string;
  icon: unknown;
};

const list = ref<TabItem[]>([
  { name: "home", path: "/pages/index/index", title: "首页", icon: h(Home) },
  { name: "test", path: "/pages/test/test", title: "测试", icon: h(Category) },
  { name: "my", path: "/pages/my/my", title: "我的", icon: h(My) },
]);

const activeName = computed({
  get: () => useSystemStore.tabbar.active,
  set: (value) => useSystemStore.setActiveTab(value),
});

const tabSwitch = (item: TabItem, index: number) => {
  const path = list.value.filter((tab) => tab.name === item.name)[0].path;
  console.log(path, index);
  router.switchTab(path);
};
</script>
