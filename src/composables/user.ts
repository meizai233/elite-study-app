export const useUser = defineStore(
  "user",
  () => {
    let isLogin = $ref<boolean>(false);
    let token = $ref<string>("");

    async function switchLoginState(_token: string) {
      token = _token;
      isLogin = true;
      uni.switchTab({ url: "/pages/index/index" });
    }

    return $$({ isLogin, token, switchLoginState });
  },
  { persist: true }
);
