export const useUser = defineStore(
  "user",
  () => {
    let isLogin = $ref<boolean>(false);
    return $$({ isLogin });
  },
  { persist: true }
);
