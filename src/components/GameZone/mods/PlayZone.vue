<script setup lang="ts">
import { IZone } from '../interface'
defineProps<{ zone?: Partial<IZone> }>()
</script>

<template>
  <div data-testid="play-zone">
    <h1>PLAY</h1>
  </div>
</template>

<style scoped></style>
