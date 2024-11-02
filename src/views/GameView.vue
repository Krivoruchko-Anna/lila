<script setup>
import { onMounted, ref } from "vue";
import { useHistoryStore } from "@/stores/history.js";
import { useFieldStore } from "@/stores/field.js";
import PlayingField from "@/components/PlayingField.vue";
import Dice from "@/components/Dice.vue";
import History from "@/components/History.vue";

const store = useHistoryStore()
const filedStore = useFieldStore()

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
    store.clearHistory()
  }

  setTimeout(() => {
    setRandomDiceNumber()
  }, 1400)
}

const finishTheGame = () => {
  isGameFinished.value = true
  isNewGame.value = true
}

const restart = () => {
  store.clearHistory()
  isNewGame.value = true
  filedStore.updateActiveCell(68)
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
    <img
        v-if="store.history.length"
        class="playing-field__restart"
        src="../assets/reload.svg"
        alt="restart"
        title="Restart the game"
        @click="restart"
    >

    <div>
      <Dice :number="diceNumber"
            :is-new-game="isNewGame"
            :is-game-finished="isGameFinished"
            @throw="handleDiceClick"
      ></Dice>

      <PlayingField
          :dice-number="diceNumber"
          :is-new-game="isNewGame"
          :is-game-finished="isGameFinished"
          :prevent-move="preventMove"
          @end="finishTheGame"
      />
    </div>

    <History />
  </main>
</template>

<style scoped lang="scss">
.playing-field {
  position: relative;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 20px;
  transform: translateX(150px);

  &__restart {
    position: absolute;
    right: 0;
    top: -52px;
    width: 22px;
    cursor: pointer;
    opacity: 0.4;
    transition: 0.3s all;

    &:hover{
      opacity: 1;
    }
  }
}
</style>
