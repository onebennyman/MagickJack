<script setup lang="ts">
import { ref } from 'vue'
import MainMenu from './components/Menu/MainMenu.vue'
import Conf from './conf'
import { useGameStateStore } from './store/GameState'
import GameField from './components/GameField/GameField.vue'

const theme = ref(Conf.theme.dark)

const store = useGameStateStore()
store.gameInstance.firstLoad()
</script>
<template>
  <div
    class="logo p-5 rounded bg-white dark:bg-black"
    :class="[store.gameInstance.progress.inProgress ? 'active' : '', theme]"
  >
    <h1>MagickJack</h1>
    <MainMenu />
  </div>
  <GameField />
</template>

<style scoped>
.logo {
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #ff0000aa);
}

.logo.active {
  position: absolute;
  top: 0;
  left: 0;
}

.logo.active:hover {
  filter: drop-shadow(0 0 2em transparent);
}
</style>
