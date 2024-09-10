<script lang="ts" setup>
import Layout from "@/components/Form/Layout.vue";
import XInput from "@/components/Form/XInput.vue";
import XGraphicCaptcha from "@/components/Form/XGraphicCaptcha.vue";
import XCaptcha from "@/components/Form/XCaptcha.vue";
import XButton from "@/components/Form/XButton.vue";

// 初始化变量
const formData = $ref({
  code: "", // 短信验证码
  send: false, // 是否发送短信验证码
  account: "", // 用户账号
  accept: false, // 是否同意协议
  graphicCaptcha: "", // 图形验证码
});

// 注册按钮
async function getRegister() {
  /**
   * 请求注册接口
   */
}
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
    <!-- 短信验证码 -->
    <view m="t-5 b-3">
      <XCaptcha v-model:send="formData.send" v-model="formData.code" type="register" :form-data="formData" />
    </view>
    <!-- 注册按钮 -->
    <view my-5>
      <XButton :form-data="formData" @click="getRegister"> 立即注册 </XButton>
    </view>
    <navigator text="30 #555555" url="/pages/login/index" hover-class="text-blue transition"> 去登录 </navigator>
  </Layout>
</template>

<style lang="scss" scoped></style>
