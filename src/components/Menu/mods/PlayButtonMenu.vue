<script setup lang="ts">
import Button from '../../Ui/Button.vue'
import { useGameStateStore } from '../../../store/GameState'

const store = useGameStateStore()

const startGame = () => {
  store.gameInstance.firstStart()
}
</script>

<template>
  <Button msg="PLAY" @buttonClicked="startGame" />
</template>

<style scoped>
button {
  will-change: color, border-color, background-color;
  transition: color 300ms;
  transition: border-color 300ms;
  transition: background-color 300ms;
}
</style>
