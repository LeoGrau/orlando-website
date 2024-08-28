<template>
  <div class="fixed w-full z-50">
    <div
      class="bg-black text-surface-50 px-4 flex flex-row justify-between items-center py-2 h-[80px]"
    >
    <div class="block md:hidden"></div>
      <img
        width="200"
        src="https://raw.githubusercontent.com/Fabrizio-2025/image-store/main/logos/logo-orlandos.png"
        alt="orlando logo"
      />
      <ul class="hidden md:flex gap-4">
        <li v-for="option in options" :key="option.id">
          <a :href="option.href" class="text-lg hover:underline">{{
            option.labelName
          }}</a>
        </li>
      </ul>
      <pv-button
        icon="pi pi-list"
        text
        class="md:hidden hover:bg-zinc-800 text-white"
        @click="toggleOptions = !toggleOptions"
      ></pv-button>
    </div>
    <div
      class="md:hidden bg-black w-full overflow-hidden duration-200"
      :class="{ 'h-0': !toggleOptions, 'h-[64px] pt-3': toggleOptions }"
    >
      <ul class="flex flex-col text-white">
        <li
          v-for="option in options"
          class="p-3 hover:bg-zinc-700 cursor-pointer"
        >
          <a :href="option.href" class="flex justify-center">{{
            option.labelName
          }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";

// Frontend Stuff
const toggleOptions = ref(false);

// Variables
const options = ref([
  // { labelName: 'Inicio', id: 1 }, { labelName: 'Carta', id: 2 }, { labelName: 'Promociones', id: 3 } future
  { labelName: "Carta", id: 1, href: "#menu-card" },
] as Array<{ labelName: string; id: number; href: string }>);
</script>
<style scoped></style>
