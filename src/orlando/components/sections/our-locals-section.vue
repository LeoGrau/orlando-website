<template>
  <div class="w-full bg-red-700 text-white px-4 py-10 flex flex-col items-center">
    <div class="flex gap-2 justify-center">
      <img src="../../images/food-frame-2-left.svg" class="w-1/8" alt="" />
      <h1 class="didact-gothic-regular text-4xl">Nuestros Locales</h1>
      <img src="../../images/food-frame-2-right.svg" class="w-1/8" alt="" />
    </div>
    <p class="text-justify py-5 px-4 max-w-[1256px]">
      Visítanos en nuestros locales en Vista Alegre y Nasca, donde siempre te
      recibiremos con los brazos abiertos. Puedes contactarnos para realizar
      pedidos o reservas, y seguirnos en nuestras redes sociales para estar al
      tanto de nuestras promociones y novedades.
    </p>
    <div class="flex flex-col md:grid md:grid-cols-2 p-4 gap-6">
      <a
        :href="local.GMapUrl"
        target="_blank"
        class="flex flex-col relative cursor-pointer local-card max-w-[600px]"
        v-for="local in locals"
        :key="local.address"
      >
        <div class="relative">
          <div
            class="hover-info opacity-0 transition-opacity delay-300 flex flex-col justify-center items-center absolute w-full h-full z-40 gap-2 bg-transparent"
          >
            <i class="pi pi-search scale-150"></i>
            <span>See Location</span>
          </div>
          <div
            class="hover-info delay-300 transition-opacity opacity-0 bg-zinc-800 z-30 top-0 absolute w-full h-full flex justify-center items-center"
          ></div>
          <div class="image-container flex justify-center z-20 relative">
            <img
              class="w-full h-full object-cover"
              src="../../images/restaurants/local-1.png"
              alt=""
            />
          </div>
        </div>
        <div class="bg-black p-3">
          <p class="text-center">{{ local.address }}</p>
        </div>
      </a>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";

const locals = ref([
  {
    imageUrl: "../../../orlando/images/restaurants/local-1.png",
    address: "Jr. Lima 588, Nasca 11401",
    GMapUrl: "https://maps.app.goo.gl/k1d9yfNhgiaFdbfJA",
  },
  {
    imageUrl: "../../../orlando/images/restaurants/local-1.png",
    address: "Calle Sinchi Roca, Nasca",
    GMapUrl: "https://maps.app.goo.gl/P1Lj8hSLqPYeFsx79",
  },
]);
</script>
<style scoped>
.local-card:hover .hover-info:nth-child(1) {
  opacity: 100%;
}
.local-card:hover .hover-info:nth-child(2) {
  opacity: 80%;
}
</style>
