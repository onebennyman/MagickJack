<script setup lang="ts">
import { IZone } from '../interface';
    defineProps<{ zone?: Partial<IZone> }>()
</script>

<template>
  <div data-testid="deck-zone">
    <h1>DECK</h1>
  </div>
</template>

<style scoped></style>
