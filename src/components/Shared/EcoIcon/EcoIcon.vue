<template>
  <component :is="icon" />
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  }
})

const icon = defineAsyncComponent(() => import(`../../../assets/icons/${props.name}.svg`))
</script>

<style lang="scss" scoped></style>
