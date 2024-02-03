<template>
  <div class="container section">
    <v-row>
      <v-col cols="4">
        <BoardOne></BoardOne>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import BoardOne from '@/components/PromotionArea/BoardOne.vue'
export default {
  name: 'PromotionArea',
  components: { BoardOne }
}
</script>

<style lang="scss" scoped>
@import '../../styles/config';
</style>
