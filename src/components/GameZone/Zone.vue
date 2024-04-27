<script setup lang="ts">
import { IZone, ZoneComponents } from './interface'
import DiscardZone from './mods/DiscardZone.vue';
import DeckZone from './mods/DeckZone.vue';
import PlayZone from './mods/PlayZone.vue';

defineProps<{ zone: IZone }>()
</script>

<template>
  <div :data-testid="`${zone.type}-zone`">
        <DiscardZone v-if="zone.components[ZoneComponents.discard]"  />
        <DeckZone v-if="zone.components[ZoneComponents.deck]"  />
        <PlayZone v-if="zone.components[ZoneComponents.play]"  />
  </div>
</template>

<style scoped></style>
