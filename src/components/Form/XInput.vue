<script lang="ts" setup>
interface UniInput {
  detail: { value: string };
}

const { paddingRight } = defineProps<{
  password?: boolean;
  paddingRight?: string;
  modelValue: string;
  placeholder: string;
}>();

const emit = defineEmits<{ (e: "update:modelValue", value: string): void }>();

const pr = $computed(() => {
  return paddingRight ?? "0";
});
</script>

<template>
  <view relative>
    <input
      text="28"
      :value="modelValue"
      :password="password"
      :placeholder="placeholder"
      placeholder-class="text-#999999"
      class="b b-#797979 h-90 box-border pl-3 p_right border-solid"
      @input="emit('update:modelValue', ($event as unknown as UniInput).detail.value)"
    />
    <view absolute top-0 right-0 h-full>
      <slot />
    </view>
  </view>
</template>

<style lang="scss" scoped>
.p_right {
  padding-right: v-bind(pr);
}
</style>
