<template>
  <Topbar></Topbar>
  <Navbar></Navbar>
  <HomeBanner></HomeBanner>
  <main>
    <h1>demo</h1>
  </main>
</template>

<script>
import Topbar from '../components/Shared/Topbar/Topbar.vue'
import Navbar from '../components/Shared/Navbar/Navbar.vue'
import HomeBanner from '../components/HomeBanner/HomeBanner.vue'

export default {
  name: 'HomeView',
  components: { Topbar, Navbar, HomeBanner },

  data() {
    return {}
  }
}
</script>
