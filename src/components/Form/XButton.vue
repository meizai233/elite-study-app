<script lang="ts" setup>
const { formData } = defineProps<{ formData: Record<string, any> }>()

const emit = defineEmits<{ (e: 'click'): void }>()

const { base } = useToast()

function onClickBefore() {
  let needReturn = false
  for (const formDatum in formData) {
    if (formDatum === 'accept' && !formData.accept) {
      base('请先同意用户协议！')
      return
    } else if (formDatum === 'send' && !formData.send) {
      base('请先获取验证码！')
      return
    } else if (formDatum === 'code' && !formData.code) {
      base('请填写验证码！')
      return
    } else if (!formData[formDatum]) {
      needReturn = true
    }
  }
  if (needReturn) {
    base('请填写完整信息！')
    return
  }
  emit('click')
}
</script>

<template>
  <button text="30 white" bg="#4d555d" rounded-0 @click="onClickBefore()">
    <slot />
  </button>
</template>
