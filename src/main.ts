import { createPinia } from "pinia";
import { createSSRApp } from "vue";
import { createPersistedState } from "pinia-plugin-persistedstate";
import App from "./App.vue";

import "uno.css";

// 引入Pinia和持久缓存的设置
const pinia = createPinia().use(
  createPersistedState({
    storage: {
      getItem(key: string) {
        return uni.getStorageSync(key);
      },
      setItem(key: string, value: string) {
        uni.setStorageSync(key, value);
      },
    },
  })
);

export function createApp() {
  const app = createSSRApp(App).use(pinia);
  return {
    app,
  };
}
