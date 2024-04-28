<script setup lang="ts">
import { IZone } from '../interface'
import CardPile from '../../Ui/CardPile.vue'
import { ICard } from '../../Ui/interface'

defineProps<{ zone: Partial<IZone> }>()

const card: ICard = {
  msg: 'DECK'
}
</script>

<template>
  <div :data-testid="`${zone.type}-zone`">
    <CardPile :position="zone.position" :card="card" />
  </div>
</template>

<style scoped></style>
