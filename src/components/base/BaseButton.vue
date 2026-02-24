<template>
  <n-button
    :type="type"
    :size="size"
    :loading="loading"
    :disabled="disabled"
  >
    <slot />
  </n-button>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: 'primary'
  },
  size: {
    type: String,
    default: 'medium'
  },
  loading: Boolean,
  disabled: Boolean
})
</script>