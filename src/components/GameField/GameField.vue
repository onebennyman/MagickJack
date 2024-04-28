<script setup lang="ts">
import { useGameStateStore } from '../../store/GameState'
import Zone from '../GameZone/Zone.vue'
import { ZoneComponents } from '../GameZone/interface'
import { PawnController } from '../PawnController/PawnController'
import { IField } from './interface'

const store = useGameStateStore()

const playerField: IField = {
  type: 'player',
  style: {
    color: 'green',
    padding: '1'
  },
  components: {
    [ZoneComponents.discard]: true,
    [ZoneComponents.deck]: true,
    [ZoneComponents.play]: true,
    [ZoneComponents.controls]: true
  },
  controller: new PawnController()
}

const enemyField: IField = {
  type: 'enemy',
  style: {
    color: 'red',
    padding: '1'
  },
  components: {
    [ZoneComponents.discard]: true,
    [ZoneComponents.deck]: true,
    [ZoneComponents.play]: true
  },
  controller: new PawnController()
}
</script>

<template>
  <div
    data-testid="game-field"
    class="h-full w-full relative flex flex-col flex-nowrap justify-evenly items-stretch"
    :class="store.gameInstance.progress.inProgress ? 'show' : 'hidden'"
  >
    <Zone :field="enemyField" />
    <hr />
    <Zone :field="playerField" />
  </div>
</template>

<style scoped></style>
