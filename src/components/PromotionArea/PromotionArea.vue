<template>
  <div class="container section">
    <v-row>
      <v-col cols="12" lg="4">
        <BoardOne></BoardOne>
      </v-col>
      <v-col cols="12" lg="4">
        <BoardTwo></BoardTwo>
      </v-col>
      <v-col cols="12" lg="4">
        <BoardThree></BoardThree>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import BoardOne from '@/components/PromotionArea/BoardOne.vue'
import BoardTwo from '@/components/PromotionArea/BoardTwo.vue'
import BoardThree from '@/components/PromotionArea/BoardThree.vue'

export default {
  name: 'PromotionArea',
  components: { BoardOne, BoardTwo, BoardThree }
}
</script>

<style lang="scss" scoped>
@import '../../styles/config';
</style>
