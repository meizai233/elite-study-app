<script lang="ts" setup>
import XInput from "./XInput.vue";
import type { SendCodeType } from "@/typings/api";

const { formData, type } = defineProps<{
  send: boolean;
  type: SendCodeType;
  modelValue: string;
  formData: {
    accept: boolean;
    account: string;
    graphicCaptcha: string;
  };
}>();

const emit = defineEmits<{
  (e: "update:send", value: boolean): void;
  (e: "update:modelValue", value: string): void;
}>();

// 获取验证码倒计时初始值
let countDown = $ref(60);
// 定时器初始值
let timer = $ref<number>();
// 是否可点击
let disabled = $ref<boolean>(false);
// 倒计时
const countDownFun = function () {
  timer = setInterval(() => {
    countDown--;
    if (countDown <= 0) {
      clearInterval(timer);
      countDown = 60;
      disabled = false;
    }
  }, 1000);
};

const { base } = useToast();

// 点击获取验证码
async function getCaptcha() {
  if (!formData.accept) {
    base("请先同意用户协议！");
  } else if (!formData.account || !formData.graphicCaptcha) {
    base("请填写账号和图形验证码！");
  } else {
    /**
     * 发送接口请求
     */
  }
}

onUnmounted(() => {
  timer && clearInterval(timer);
});
</script>

<template>
  <XInput padding-right="32%" :model-value="modelValue" placeholder="请输入验证码" @update:model-value="$emit('update:modelValue', $event)">
    <view center hfull mr-2>
      <text text="30 #4d555d" :class="[disabled && 'disabled']" @click="getCaptcha">
        {{ disabled ? `${countDown}秒后重发` : "获取验证码" }}
      </text>
    </view>
  </XInput>
</template>

<style lang="scss" scoped>
.disabled {
  opacity: 0.7;
  pointer-events: none;
}
</style>
