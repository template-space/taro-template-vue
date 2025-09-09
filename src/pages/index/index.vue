<template>
  <Layout title="首页">
    <view class="text-center">
      <view>{{ msg }}</view>
      <view
        class="text-red-500"
        @tap="testPinia"
      >
        点我测试pinia{{ count }}
      </view>
      <view class-name="text-[#acc855] text-[100px]">
        Hello world!
      </view>
      <view class="outer">
        <view class="inner">
          嵌套样式测试
        </view>
        <view class="w-[50%] h-5 bg-amber-400" />
      </view>
      <view class="flex flex-wrap gap-2 py-2 justify-center">
        <IconFont
          name="dou-arrow-up"
          class="nut-icon-am-jump nut-icon-am-infinite"
          color="#ff0000"
        />
        <IconFont
          name="star-fill-n"
          class="nut-icon-am-blink nut-icon-am-infinite"
        />
        <IconFont
          name="refresh2"
          class="nut-icon-am-rotate nut-icon-am-infinite"
        />
        <IconFont
          name="heart-fill"
          class="nut-icon-am-breathe nut-icon-am-infinite"
        />
        <IconFont
          name="microphone"
          class="nut-icon-am-flash nut-icon-am-infinite"
        />
        <IconFont
          name="download"
          class="nut-icon-am-bounce nut-icon-am-infinite"
        />
        <IconFont
          name="message"
          class="nut-icon-am-shake nut-icon-am-infinite"
        />
      </view>
      <nut-button
        type="info"
        @click="fetchData"
      >
        接口请求
      </nut-button>
    </view>
    <view class="p-2">
      <view
        v-for="item in list"
        :key="item.id"
        class="my-15rpx b-b-solid b-b-1rpx b-b-color-[#cccccc]"
      >
        <text class="text-18rpx font-bold">
          {{ item.title }}
        </text>
        <view class="mt-4 text-12rpx color-[#9999]">
          {{ item.body }}
        </view>
      </view>
    </view>
  </Layout>
</template>

<script setup lang="ts">
import { showLoading, hideLoading } from "@tarojs/taro";
import { ref, computed } from "vue";
import { useCounterOutsideStore } from "@/stores/modules/demo";
import { useRequest } from "@/api";
import Layout from "@/layout/index.vue";
import { IconFont } from "@nutui/icons-vue-taro";
import "./index.css";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const { API_DEMO_GET } = useRequest();

const list = ref<Post[]>([]);
const fetchData = async () => {
  showLoading({
    title: "加载中...",
  });
  const res = await API_DEMO_GET();
  hideLoading();
  list.value = res;
  console.log(res);
};

const msg = ref("Hello world");
const count = computed(() => counterStore.count);
const counterStore = useCounterOutsideStore();
const testPinia = () => {
  counterStore.increment();
  console.log(counterStore.count);
};
</script>
