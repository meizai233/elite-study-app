<script lang="ts" setup>
import XBottom from "@/components/Form/XBottom.vue";
// 接受父组件的值
defineProps<{ title?: string; modelValue: boolean }>();
// 改变modelValue值
defineEmits<{ (e: "update:modelValue", value: boolean): void }>();
</script>

<template>
  <view class="p-11.5">
    <text v-if="title" text="40 #333333">
      {{ title }}
    </text>
    <slot />
    <view absolute bottom-32 wfull left-0>
      <XBottom :model-value="modelValue" @update:model-value="$emit('update:modelValue', true)" />
    </view>
  </view>
</template>
