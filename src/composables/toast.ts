export function useToast() {
  function base(title: string) {
    uni.showToast({ title, icon: "none", mask: true });
  }

  function error(title: string) {
    uni.showToast({ title, icon: "error", mask: true });
  }

  function success(title: string) {
    uni.showToast({ title, icon: "success", mask: true });
  }

  function loading(title: string) {
    uni.showToast({ title, icon: "loading", mask: true });
  }

  return {
    success,
    loading,
    error,
    base,
  };
}
