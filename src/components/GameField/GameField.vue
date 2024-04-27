<script setup lang="ts">
import { useGameStateStore } from '../../store/GameState'
import Zone from '../GameZone/Zone.vue'
import {ZoneComponents} from "../GameZone/interface";

const store = useGameStateStore()

const playerZone = {
  type: 'player',
  components: 
  {
    [ZoneComponents.discard]: true,
    [ZoneComponents.deck]: true,
    [ZoneComponents.play]: true,
  }
}

const enemyZone = {
  type: 'enemy',
  components: {
    [ZoneComponents.discard]: true,
    [ZoneComponents.deck]: true,
    [ZoneComponents.play]: true

  }
}
</script>

<template>
  <div
    data-testid="game-field"
    :class="store.gameInstance.progress.inProgress ? 'show' : 'hidden'"
  >
    <Zone :zone="enemyZone" />
    <Zone :zone="playerZone" />
  </div>
</template>

<style scoped></style>
