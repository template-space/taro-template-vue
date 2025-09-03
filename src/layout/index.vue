<template>
  <nut-config-provider class="h-full" :theme-vars="themeVars">
    <view class="layout h-full flex flex-col">
      <view class="header" v-show="isShowHeader">
        <Header :title="title" />
      </view>
      <view class="content flex-1">
        <slot />
      </view>
      <view class="footer" v-show="isShowFooter">
        <Footer :activeName="footerActive" />
      </view>
    </view>
  </nut-config-provider>
</template>

<script setup lang="ts">
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { onMounted, ref } from "vue";

type Props = {
  title: string;
  isShowHeader?: boolean;
  isShowFooter?: boolean;
  footerActive: string;
};
withDefaults(defineProps<Props>(), {
  title: "标题",
  isShowHeader: false,
  isShowFooter: true,
  footerActive: "home"
});

// 重置nutui样式 https://nutui.jd.com/taro/vue/4x/#/zh-CN/component/configprovider
const themeVars = ref({
  primaryColor: "#008000",
  primaryColorEnd: "#008000",
});

onMounted(() => {
  console.log("页面显示");
});
</script>
