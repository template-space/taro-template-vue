import { createPinia } from "pinia";
import type { App } from "vue";

export const piniaStore = createPinia();
export function setupStore(app: App) {
  app.use(piniaStore);
}
