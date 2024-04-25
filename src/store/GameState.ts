import { defineStore } from "pinia"
import { ref } from "vue"
import GameInstance from "../components/GameInstance/_GameInstance"

export const useGameStateStore = defineStore('gameState', () => {
    const gameInstance = ref(GameInstance)
  
    return { gameInstance }
  })