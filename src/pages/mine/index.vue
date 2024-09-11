<template>
  <view> 我的 </view>
</template>

<script setup lang="ts">
const { isLogin } = $(useUser());
console.log("isLogin:", isLogin);
</script>

<style></style>
