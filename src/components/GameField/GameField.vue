<script setup lang="ts">
import { useGameStateStore } from '../../store/GameState'
import Zone from '../GameZone/Zone.vue'
import {IZone, ZoneComponents} from "../GameZone/interface";

const store = useGameStateStore()

const playerZone: IZone= {
  type: 'player',
  style: {
    color: "red",
    padding: "1"

  },
  components: 
  {
    [ZoneComponents.discard]: true,
    [ZoneComponents.deck]: true,
    [ZoneComponents.play]: true,
  }
}

const enemyZone: IZone = {
  type: 'enemy',
  style: {
    color: "red",
    padding: "1"

  },
  components: {
    [ZoneComponents.discard]: true,
    [ZoneComponents.deck]: true,
    [ZoneComponents.play]: true,

  }
}
</script>

<template>
  <div
    data-testid="game-field"
    class="h-full w-full relative flex flex-col flex-nowrap justify-evenly items-stretch"
    :class="store.gameInstance.progress.inProgress ? 'show' : 'hidden'"
  >
    <Zone :zone="enemyZone" />
    <hr>
    <Zone :zone="playerZone" />
  </div>
</template>

<style scoped></style>
