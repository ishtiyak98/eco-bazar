<template>
  <div class="container d-flex ga-5">
    <BannerCategories></BannerCategories>
    <BannerSlider></BannerSlider>
  </div>
</template>

<script lang="ts">
import BannerCategories from './BannerCategories.vue'
import BannerSlider from './BannerSlider.vue'
export default {
  name: 'HomeBanner',
  components: { BannerCategories, BannerSlider }
}
</script>

<style lang="scss" scoped></style>
