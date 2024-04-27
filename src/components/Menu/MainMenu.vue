<script setup lang="ts">
import PlayButtonMenu from "./mods/PlayButtonMenu.vue"
import { useGameStateStore } from '../../store/GameState'

const store = useGameStateStore()

const MenuElements = [
  {component: PlayButtonMenu},
]

</script>

<template>

  <nav data-testid="main-menu" :class="store.gameInstance.progress.inProgress ? 'hidden' : 'show' ">
    <ul>
      <li v-for="(element, index) in MenuElements" :key="index">
        <component :is="element.component"></component>
      </li>
  </ul>
  </nav>

</template>

<style scoped>
</style>
