<template>
  <div>
    <toolbar-or class=""></toolbar-or>
    <router-view class="views" ></router-view>
  </div>
</template>
<script setup lang="ts">
// Own Componetns
import ToolbarOr from '@/orlando/components/toolbar/toolbar-or.vue';
</script>
<style>
  .views {
    transform: translateY(80px);
  }
</style>