<script setup lang="ts">
import { IZone, ZoneComponents } from './interface'
import DiscardZone from './mods/DiscardZone.vue'
import DeckZone from './mods/DeckZone.vue'
import PlayZone from './mods/PlayZone.vue'
import { IField } from '../GameField/interface'

const props = defineProps<{ field: IField }>()

const discardZone: IZone = {
  type: 'discard',
  style: {},
  position: {
    x: {
      ref: props.field.type === 'enemy' ? 'left' : 'right',
      value: '10%'
    },
    y: {
      ref: 'top',
      value: '10%'
    }
  }
}
const deckZone: IZone = {
  type: 'deck',
  style: {},
  position: {
    x: {
      ref: props.field.type === 'enemy' ? 'right' : 'left',
      value: '10%'
    },
    y: {
      ref: 'top',
      value: '10%'
    }
  }
}
</script>

<template>
  <div
    :data-testid="`${field.type}-zone`"
    class="border-black rounded border-dashed relative grow"
    :class="[`bg-${field.style.color}-800`]"
  >
    <DiscardZone
      v-if="field.components[ZoneComponents.discard]"
      :zone="discardZone"
    />
    <DeckZone v-if="field.components[ZoneComponents.deck]" :zone="deckZone" />
    <PlayZone v-if="field.components[ZoneComponents.play]" />
  </div>
</template>

<style scoped></style>
