<template>
  <section class="container section">
    <p class="section__sub-header text-center">Products</p>
    <h2 class="section__header text text-center">Our Featured Products</h2>
    <div class="section--content-gap">
      <div class="products-container">
        <div v-for="(product, index) in products" :key="index">
          <ProductCardOne :product="product"></ProductCardOne>
        </div>
      </div>
      <div class="section--content-gap">
        <v-row>
          <v-col cols="12" lg="3">
            <div class="product-type">
              <h5 class="product-type__title mb-4">Hot Deals</h5>
              <div class="d-flex flex-column ga-4">
                <ProductCardTwo></ProductCardTwo>
                <ProductCardTwo></ProductCardTwo>
                <ProductCardTwo></ProductCardTwo>
              </div>
            </div>
          </v-col>
          <v-col cols="12" lg="3">
            <div class="product-type">
              <h5 class="product-type__title mb-4">Hot Deals</h5>
              <div class="d-flex flex-column ga-4">
                <ProductCardTwo></ProductCardTwo>
                <ProductCardTwo></ProductCardTwo>
                <ProductCardTwo></ProductCardTwo>
              </div>
            </div>
          </v-col>
          <v-col cols="12" lg="3">
            <div class="product-type">
              <h5 class="product-type__title mb-4">Hot Deals</h5>
              <div class="d-flex flex-column ga-4">
                <ProductCardTwo></ProductCardTwo>
                <ProductCardTwo></ProductCardTwo>
                <ProductCardTwo></ProductCardTwo>
              </div>
            </div>
          </v-col>
          <v-col cols="12" lg="3"> </v-col>
        </v-row>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import ProductCardOne from '@/components/ProductCardOne/ProductCardOne.vue'
import ProductCardTwo from '@/components/ProductCardTwo/ProductCardTwo.vue'
import ApiCall from '@/api/apiInterface'

export default {
  name: 'FeaturedProducts',
  components: { ProductCardOne, ProductCardTwo },
  data() {
    return {
      products: []
    }
  },
  async mounted() {
    try {
      const { data } = await ApiCall.get('/src/data/featured-products.json')
      this.products = data
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style lang="scss" scoped>
.products-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
}

.product-type {
  &__title {
    font-size: 20px;
    font-weight: 500;
  }
}
</style>
