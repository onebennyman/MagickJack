<script setup lang="ts">
import { IPosition } from '../GameZone/interface'
import { ICard, TCardContainerStyle } from './interface'
import Card from './Card.vue'

const props = defineProps<{ position?: Partial<IPosition>; card: ICard }>()

const cardContainerStyle: TCardContainerStyle = {
  [props.position?.x?.ref || 'right']: props.position?.x?.value || '10%',
  [props.position?.y?.ref || 'top']: props.position?.y?.value || '10%'
}
</script>

<template>
  <div class="absolute" :style="cardContainerStyle">
    <Card :card="card" />
  </div>
</template>

<style scoped></style>
