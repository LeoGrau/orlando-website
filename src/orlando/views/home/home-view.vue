<template>
  <div>
    <main-carousel-or></main-carousel-or>
    <menu-card-or id="menu-card" ></menu-card-or>
    <about-us-section></about-us-section>
    <our-locals-section></our-locals-section>
    <footer-or></footer-or>
  </div>
</template>
<script setup lang="ts">
import MainCarouselOr from '@/orlando/components/carousel/main-carousel-or.vue';
import FooterOr from '@/orlando/components/footer/footer-or.vue';
import MenuCardOr from '@/orlando/components/sections/menu-card-or.vue';
import AboutUsSection from '@/orlando/components/sections/about-us-section.vue'
import OurLocalsSection from '@/orlando/components/sections/our-locals-section.vue';
</script>
<style lang="">
  
</style>