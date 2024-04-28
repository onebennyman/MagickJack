<script setup lang="ts">
import { Card } from '../Card/Card'
import { ICard } from './interface'
const props = defineProps<{ card?: ICard | Card }>()

const c = {
  title: '',
  subTitle: ''
}

if (props.card instanceof Card) {
  c.title = props.card.state?.value || ''
  c.subTitle = props.card.state?.suit || ''
} else {
  c.title = props.card?.msg || ''
}
</script>

<template>
  <div
    data-testid="card"
    class="border-2 border-solid border-white bg-slate-500 h-[16vw] w-[10vw] aspect-[3/4] rounded-md"
  >
    <h1 class="text-center text-black">{{ c.title }}</h1>
    <h4 class="text-center text-black">{{ c.subTitle }}</h4>
  </div>
</template>
<style scoped></style>
