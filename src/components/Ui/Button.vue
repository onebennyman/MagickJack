<script setup lang="ts">
defineProps<{ msg: string }>()

const emit = defineEmits(['buttonClicked'])

const buttonClicked = () => {
  emit('buttonClicked')
}
</script>

<template>
  <button
    class="bg-transparent py-2 px-4 font-semibold border rounded border-red-500 hover:border-transparent hover:dark:border-white text-white hover:bg-red-500 hover:text-white dark:hover:text-black"
    @click="buttonClicked"
  >
    {{ msg }}
  </button>
</template>

<style scoped>
button {
  will-change: color, border-color, background-color;
  transition: color 300ms;
  transition: border-color 300ms;
  transition: background-color 300ms;
}
</style>
