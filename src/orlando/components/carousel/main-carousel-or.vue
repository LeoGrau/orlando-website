<template>
  <div class="main-carousel-bar h-[70vh] bg-red-800 overflow-hidden relative">
    <div
      class="flex w-max bg-blue-600 transition ease-in-out transition-ease-in-out h-full absolute z-50"
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
import RoundedLinkedList from "../../data-structure/rounded-linked-list";
import { onMounted, ref } from "vue";
const imageCarousel = ref(new RoundedLinkedList<any>());

const imageQueueCarousel = ref([] as Array<{ imageUrl: string }>);
const imageC = ref(0);
const imageP = ref(0);
const currentImage = ref<HTMLElement | null>(null);

// Interval
const imageSliderI = ref();

const imageSet = ref([
  {
    id: 0,
    imageUrl:
      "https://www.peru.travel/Contenido/General/Imagen/es/263/1.1/brasa-ds.jpg",
  },
  {
    id: 1,
    imageUrl:
      "https://portal.andina.pe/EDPFotografia3/thumbnail/2021/07/17/000790789W.jpg",
  },
  {
    id: 2,
    imageUrl:
      "https://media.revistagq.com/photos/63edfa0ecf53bfbacf6f6580/16:9/w_2560%2Cc_limit/spider-man-4-tom-holland.jpg",
  },
  {
    id: 3,
    imageUrl:
      "https://wallpapers.com/images/featured/spiderman-p4ashmgeamn2mvkn.jpg",
  },
]);

const imageSetLength = ref(imageSet.value.length);

function setImages() {
  console.log(imageCarousel.value);
  imageCarousel.value.add(9);
  imageCarousel.value.add(12);
  imageCarousel.value.add(19);
  console.log(imageCarousel.value);
}

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
