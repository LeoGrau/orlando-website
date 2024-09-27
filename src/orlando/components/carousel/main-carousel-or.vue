<template>
  <div class="main-carousel-bar h-[70vh] bg-red-800 overflow-hidden relative">
    <div
      class="flex w-max bg-black transition ease-in-out transition-ease-in-out h-full absolute z-50"
      :style="{ transform: `translateX(calc(-100vw * ${imageP}))` }"
    >
      <img
        v-for="image in imageQueueCarousel"
        class="w-[100vw] object-cover"
        :src="image.imageUrl"
        alt=""
      />
    </div>
    <div class="relative z-50 top-1/2 flex justify-between p-3">
      <pv-button
        @click="
          imageP - 1 < 0 ? (imageP = imageSetLength - 1) : (imageP = imageP - 1);
          resetInt();
        "
        icon="pi pi-chevron-left"
        text
      ></pv-button>
      <pv-button
        @click="
          imageP + 1 > imageSetLength - 1 ? (imageP = 0) : (imageP = imageP + 1);
          resetInt();
        "
        icon="pi pi-chevron-right"
        text
      ></pv-button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";

const imageQueueCarousel = ref([] as Array<{ imageUrl: string }>);
const imageP = ref(0);

// Interval
const imageSliderI = ref();

const imageSet = ref([
  {
    id: 0,
    imageUrl:
      "https://raw.githubusercontent.com/Fabrizio-2025/image-store/refs/heads/main/orlandos/marketing/comiendo.jpg",
  },
  {
    id: 1,
    imageUrl:
      "https://raw.githubusercontent.com/Fabrizio-2025/image-store/refs/heads/main/orlandos/marketing/pollo-entero.jpg",
  },
  {
    id: 2,
    imageUrl:
      "https://raw.githubusercontent.com/Fabrizio-2025/image-store/refs/heads/main/orlandos/marketing/imagen-pollo.jpg",
  },
  {
    id: 3,
    imageUrl:
      "https://raw.githubusercontent.com/Fabrizio-2025/image-store/main/orlandos/pollo-brasa.jpg",
  },
]);

const imageSetLength = ref(imageSet.value.length);


function updateImageP() {
  console.log("xd", imageSetLength.value);
  imageSliderI.value = setInterval(() => {
    imageP.value = imageP.value + 1;
    if (imageP.value + 1 > imageSetLength.value) imageP.value = 0;
  }, 3000);
}

function resetInt() {
  clearInterval(imageSliderI.value);
  imageSliderI.value = setInterval(() => {
    imageP.value = imageP.value + 1;
    if (imageP.value + 1 > imageSetLength.value) imageP.value = 0;
  }, 3000);
}

onMounted(() => {
  imageQueueCarousel.value = [...imageSet.value];
  updateImageP();
});
</script>
<style scoped></style>
