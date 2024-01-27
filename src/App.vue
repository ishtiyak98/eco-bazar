<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>

<template>
  <RouterView />
  <div class="d-flex justify-center mb-10">
    <v-btn class="bg-primary"> Button </v-btn>
  </div>
</template>

<style scoped></style>
