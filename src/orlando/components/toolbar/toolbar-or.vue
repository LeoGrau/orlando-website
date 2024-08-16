<template>
  <div class="fixed w-full">
    <div class="bg-black text-surface-50 px-4 flex justify-between items-center py-2 h-[80px]">
    <img src="" alt="orlando logo" />
    <ul class="hidden md:flex gap-4 text-sm">
      <li v-for="option in options">{{ option.labelName }}</li>
    </ul>
    <pv-button
      icon="pi pi-list"
      text
      class="md:hidden hover:bg-zinc-800 text-white"
      @click="toggleOptions = !toggleOptions"
    ></pv-button>
  </div>
  <div class="md:hidden bg-black w-full pt-3 overflow-hidden duration-200" :class="{'h-[0px]': !toggleOptions, 'h-[144px]': toggleOptions}">
    <ul class="flex text-sm flex-col text-white">
      <li v-for="option in options" class="p-3 hover:bg-zinc-700 cursor-pointer text-sm">
        <p class="text-center">{{ option.labelName }}</p>
      </li>
    </ul>
  </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";

// Frontend Stuff
const toggleOptions = ref(false)

// Variables
const options = ref([
  { labelName: 'Inicio', id: 1 }, { labelName: 'Carta', id: 2 }, { labelName: 'Promociones', id: 3 }
] as Array<{ labelName: string; id: number }>);



</script>
<style scoped>

</style>
