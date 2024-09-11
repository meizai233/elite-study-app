<script lang="ts" setup>
import XInput from "./XInput.vue";
import type { SendCodeType } from "@/typings/api";
import { baseUrl } from "../../utils/request";

const { type } = defineProps<{ type: SendCodeType; modelValue: string }>();

defineEmits<{ (e: "update:modelValue", value: string): void }>();

// 图形验证码url
let captcha = $ref(`${baseUrl}/notify/v1/captcha?type=${type}`);

// 改变图形验证码
const changeCaptcha = () => {
  captcha = `${baseUrl}/notify/v1/captcha?type=${type}&${Math.random()}`;
};

// 提供父组件调用改变图形验证码
defineExpose({ changeCaptcha });
</script>

<template>
  <XInput :border="true" :model-value="modelValue" placeholder="请输入图形验证码" padding-right="50%" @update:model-value="$emit('update:modelValue', $event)">
    <view center @click="changeCaptcha">
      <image src="@/static/images/icons/common/reload.png" class="w-50 h-50 mr-2.2" />
      <!-- <image src="@/static/images/icons/common/reload.png" class="w-50 h-50 mr-2.2" /> -->
      <image class="h-90rpx w-200rpx" :src="captcha" />
    </view>
  </XInput>
</template>
