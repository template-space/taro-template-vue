<template>
  <view>{{ msg }}</view>
  <view class="text-red-500" @tap="testPinia">点我测试pinia{{ count }}</view>
  <view className="text-[#acc855] text-[100px]">Hello world!</view>
  <view class="outer">
    <view class="inner">嵌套样式测试</view>
    <view class="w-[50%] h-5 bg-amber-400"></view>
  </view>
  <nut-button type="info">测试nutui</nut-button>
  
</template>

<script setup>
import { ref, computed } from 'vue'
import './index.css'
import { useCounterOutsideStore } from '@/stores/modules/demo'

const msg = ref('Hello world')
const count = computed(() => counterStore.count)
const counterStore = useCounterOutsideStore()
const testPinia = () => {
  counterStore.increment()
  console.log(counterStore.count)
}
</script>