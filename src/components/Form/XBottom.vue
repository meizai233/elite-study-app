<script lang="ts" setup>

const { modelValue } = defineProps<{ modelValue: boolean }>()

defineEmits<{ (e: 'update:modelValue', value: boolean): void }>()

const checked = $computed(() => modelValue)

</script>

<template>
  <view flex-col center>
    <view class="center mt-7.5">
      <radio :checked="checked" color="#4d555d" style="transform: scale(0.7)"
        @click="$emit('update:modelValue', true)" />
      <text text="24 #333333">
        同意并愿意遵守
      </text>
      <text text="24 blue">
        《隐私策略》
      </text>
      <text text="24 #333333">
        与
      </text>
      <text text="24 blue">
        《用户协议》
      </text>
    </view>
  </view>
</template>
