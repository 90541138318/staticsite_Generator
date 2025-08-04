<template>
  <Navbar />
  <div class="container my-4">
    <router-view />
  </div>
  <Footer />
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>
