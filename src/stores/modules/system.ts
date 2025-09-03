import { defineStore } from "pinia";
import { piniaStore } from "../../stores";

type SystemState = {
  tabbar: {
    active: string;
  };
};

const useSystemStore = defineStore("system", {
  state: (): SystemState => {
    return { tabbar: { active: "home" } };
  },
  actions: {
    setActiveTab(tab: string) {
      if (tab === this.tabbar.active) return;
      this.tabbar.active = tab;
    },
  },
});

export function useSystemOutsideStore() {
  return useSystemStore(piniaStore);
}
