<script setup lang="ts">
import { IZone } from '../interface';
    defineProps<{ zone?: Partial<IZone> }>()
</script>

<template>
  <div data-testid="discard-zone">
    <h1>DISCARD</h1>
  </div>
</template>

<style scoped></style>
