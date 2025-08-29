import { defineStore } from 'pinia'
import { piniaStore } from '../../stores'

const useCounterStore = defineStore('counter', {
  state: () => {
    return { count: 0 }
  },
  actions: {
    increment() {
      this.count++
    },
  },
})

export function useCounterOutsideStore() {
  return useCounterStore(piniaStore)
}
