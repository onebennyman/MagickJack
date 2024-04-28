<script setup lang="ts">
import { ICard } from './interface'
defineProps<{ card?: ICard }>()
</script>

<template>
  <div
    data-testid="card"
    class="border-2 border-solid border-white bg-slate-500 h-[16vw] w-[10vw] aspect-[3/4] rounded-md"
  >
    <h1 class="text-center text-black">{{ card?.msg || '' }}</h1>
  </div>
</template>

<style scoped></style>
