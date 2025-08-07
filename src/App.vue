<template>
  <div class="app-wrapper">
    <Navbar />
    <main class="main-content">
      <router-view />
    </main>
    <Footer/>
</div>
</template>

<script setup>
import Navbar from '/src/components/Navbar.vue'
import Footer from '/src/components/Footer.vue'
</script>

<style scoped>
.app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
}
</style>