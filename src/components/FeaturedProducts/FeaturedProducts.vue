<template>
  <section class="container section">
    <p class="section__sub-header text-center">Products</p>
    <h2 class="section__header text text-center">Our Featured Products</h2>
    <div class="section--content-gap">
      <ProductCardOne style="margin-right: 10px"></ProductCardOne>
      <ProductCardOne style="margin-right: 10px"></ProductCardOne>
      <ProductCardOne style="margin-right: 10px"></ProductCardOne>
      <ProductCardOne style="margin-right: 10px"></ProductCardOne>
      <ProductCardOne style="margin-right: 10px"></ProductCardOne>
    </div>
  </section>
</template>

<script lang="ts">
import ProductCardOne from '@/components/ProductCardOne/ProductCardOne.vue'
export default {
  name: 'FeaturedProducts',
  components: { ProductCardOne }
}
</script>

<style lang="scss" scoped></style>
