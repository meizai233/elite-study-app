<script lang="ts" setup>
import LoginHeader from "./components/LoginHeader.vue";
</script>

<template>
  <view class="mine">
    <!-- 无序导航条，撑开手机状态栏高度 -->
    <view class="navigation_hight" />
    <LoginHeader />
  </view>
</template>

<style lang="scss" scoped>
.mine {
  padding: 50rpx 35rpx;

  .navigation_hight {
    height: var(--status-bar-height);
  }
}
</style>
