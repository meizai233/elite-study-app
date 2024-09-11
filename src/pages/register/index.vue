<script lang="ts" setup>
import Layout from "@/components/Form/Layout.vue";
import XInput from "@/components/Form/XInput.vue";
import XGraphicCaptcha from "@/components/Form/XGraphicCaptcha.vue";

// 初始化变量
const formData = $ref({
  code: "", // 短信验证码
  send: false, // 是否发送短信验证码
  account: "", // 用户账号
  accept: false, // 是否同意协议
  graphicCaptcha: "", // 图形验证码
});
</script>

<template>
  <Layout v-model="formData.accept" title="手机注册">
    <!-- 手机号 -->
    <view mt-10>
      <XInput v-model="formData.account" placeholder="请输入手机号" />
    </view>
    <!-- 图形验证码 -->
    <view m="t-5 b-3">
      <XGraphicCaptcha ref="xCaptcha" v-model="formData.graphicCaptcha" type="register" />
    </view>
  </Layout>
</template>

<style lang="scss" scoped></style>
