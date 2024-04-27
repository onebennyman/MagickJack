<script setup lang="ts">
import { IZone } from '../interface';
    defineProps<{ zone?: Partial<IZone> }>()

</script>

<template>
    <div data-testid="deck-zone" class="carta rounded border-2 border-solid border-white bg-slate-500">
        <h1 class="text-center text-black">DECK</h1>
    </div>
</template>

<style scoped>
.carta {
  height: 16vw;
  width: 10vw;
  aspect-ratio: 3 / 4;
  border-radius: 10px;
}
</style>
