<template>
  <Topbar></Topbar>
  <Navbar></Navbar>
  <HomeBanner></HomeBanner>
  <main>
    <PromotionArea></PromotionArea>
    <AllCategories></AllCategories>
    <FeaturedProducts></FeaturedProducts>
  </main>
</template>

<script>
import Topbar from '../components/Shared/Topbar/Topbar.vue'
import Navbar from '../components/Shared/Navbar/Navbar.vue'
import HomeBanner from '../components/HomeBanner/HomeBanner.vue'
import PromotionArea from '../components/PromotionArea/PromotionArea.vue'
import AllCategories from '@/components/AllCategories/AllCategories.vue'
import FeaturedProducts from '@/components/FeaturedProducts/FeaturedProducts.vue'

export default {
  name: 'HomeView',
  components: { Topbar, Navbar, HomeBanner, PromotionArea, AllCategories, FeaturedProducts },

  data() {
    return {}
  }
}
</script>
