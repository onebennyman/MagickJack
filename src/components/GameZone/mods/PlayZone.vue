<script setup lang="ts">
import { useGameStateStore } from '../../../store/GameState'
import { IZone } from '../interface'
import Card from '../../Ui/Card.vue'
import TextDisplayer from '../../Ui/TextDisplayer.vue'

const props = defineProps<{
  zone: Partial<IZone>
  controller: 'player' | 'enemy'
}>()

const store = useGameStateStore()

const pawnController = store.gameInstance[props.controller]
</script>

<template>
  <div :data-testid="`${zone.type}-zone`" class="relative">
    <div class="flex flex-row justify-center align-middle items-center">
      <TextDisplayer
        :msg="pawnController?.deck.calculateTotalValue().toString()"
      />
    </div>
    <div
      class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[50%] flex flex-row flex-wrap justify-center align-middle"
    >
      <Card
        v-for="(card, index) in pawnController?.deck.inPlay"
        :card="card"
        :key="index"
      />
    </div>
  </div>
</template>

<style scoped></style>
