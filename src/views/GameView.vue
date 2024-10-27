<script setup>
import { onMounted, ref } from "vue";
import { useHistoryStore } from "@/stores/history.js";
import PlayingField from "@/components/PlayingField.vue";
import Dice from "@/components/Dice.vue";
import History from "@/components/History.vue";

const store = useHistoryStore()

const isNewGame = ref(true)
const isGameFinished = ref(false)
const diceNumber = ref(1)
const preventMove = ref(false)

const setRandomDiceNumber = () => {
  diceNumber.value =  Math.floor(Math.random() * 6) + 1;

  if (diceNumber.value === 6) {
    isNewGame.value = false
  }
}

const handleDiceClick = () => {
  diceNumber.value = null
  preventMove.value = false

  if (isGameFinished.value) {
    isGameFinished.value = false
    isNewGame.value = true

    store.updateHistory([])
  }

  setTimeout(() => {
    setRandomDiceNumber()
  }, 1400)
}

const finishTheGame = () => {
  isGameFinished.value = true
  isNewGame.value = true
}

onMounted(() => {
  if (store.history.length) {
    isNewGame.value = false
    diceNumber.value = store.history[0].dice
    preventMove.value = true
  }
})
</script>

<template>
  <main class="playing-field">
    <div>
      <Dice :number="diceNumber"
            :is-new-game="isNewGame"
            :is-game-finished="isGameFinished"
            @throw="handleDiceClick"
      ></Dice>

      <PlayingField
          :dice-number="diceNumber"
          :is-new-game="isNewGame"
          :prevent-move="preventMove"
          @end="finishTheGame"
      />
    </div>

    <History></History>
  </main>
</template>

<style scoped>
.playing-field {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 20px;
  transform: translateX(150px);
}
</style>
