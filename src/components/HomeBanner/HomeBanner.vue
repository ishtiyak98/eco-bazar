<template>
  <div class="container mt-6">
    <v-row>
      <v-col cols="3">
        <BannerCategories></BannerCategories>
      </v-col>
      <v-col cols="9">
        <BannerSlider></BannerSlider>
      </v-col>
    </v-row>
    <BannerExtra></BannerExtra>
  </div>
</template>

<script lang="ts">
import BannerCategories from '@/components/HomeBanner/BannerCategories.vue'
import BannerSlider from '@/components/HomeBanner/BannerSlider.vue'
import BannerExtra from '@/components/HomeBanner/BannerExtra.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeBanner',
  components: { BannerCategories, BannerSlider, BannerExtra }
})
</script>

<style lang="scss" scoped></style>
