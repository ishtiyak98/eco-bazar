<template>
  <Topbar></Topbar>
  <Navbar></Navbar>
  <main>
    <h1>demo</h1>
  </main>
</template>

<script>
import Topbar from '../components/Shared/Topbar/Topbar.vue'
import Navbar from '../components/Shared/Navbar/Navbar.vue'

export default {
  name: 'HomeView',
  components: { Topbar, Navbar },

  data() {
    return {}
  }
}
</script>
