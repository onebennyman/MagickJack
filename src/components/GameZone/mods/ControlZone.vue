<script setup lang="ts">
import { useGameStateStore } from '../../../store/GameState'
import Button from '../../Ui/Button.vue'
import { IZone } from '../interface'
import { State } from '../../GameInstance/interface'

defineProps<{ zone: Partial<IZone> }>()

const store = useGameStateStore()
</script>

<template>
  <div :data-testid="`${zone.type}-zone`" class="relative">
    <div class="fixed bottom-[0%] left-[50%] translate-x-[-50%]">
      <div
        v-if="store.gameInstance.progress.state === State.action"
        data-testid="in-action"
      >
        <Button msg="DRAW" @click="store.gameInstance.player.drawCard()" />
        <Button msg="STOP" />
      </div>
      <div
        v-if="store.gameInstance.progress.state === State.wait"
        data-testid="waiting"
      >
        <Button msg="WAIT" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
