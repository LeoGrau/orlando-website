<template>
    <div class="main-carousel-bar">
    
    </div>
</template>
<script lang="ts" setup>
import RoundedList from './circular-list';
import { ref } from 'vue';
const imageCarousel = ref(new RoundedList<number>())

function setImages() {
    console.log(imageCarousel.value)
    imageCarousel.value.push(9)
    imageCarousel.value.push(12)
    imageCarousel.value.push(19)
    console.log(imageCarousel.value)
}

setImages()

</script>
<style >
    
</style>