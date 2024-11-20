<script setup>
import { onMounted, ref } from 'vue'
import { useHistoryStore } from '@/stores/history.js'
import { useFieldStore } from '@/stores/field.js'
import PlayingField from '@/components/PlayingField.vue'
import Dice from '@/components/Dice.vue'
import History from '@/components/History.vue'

const store = useHistoryStore()
const fieldStore = useFieldStore()

const isNewGame = ref(true)
const diceNumber = ref(1)
const preventMove = ref(false)
const diceMaxAllowedNumber = ref(null)

const setRandomDiceNumber = () => {
  diceNumber.value = Math.floor(Math.random() * 6) + 1

  if (diceNumber.value === 6) {
    isNewGame.value = false
  }
}

const handleDiceClick = () => {
  diceNumber.value = null
  diceMaxAllowedNumber.value = null
  preventMove.value = false

  if (fieldStore.isGameFinished) {
    fieldStore.updateIsGameFinished(false)
    isNewGame.value = true
    store.clearHistory()
  }

  setTimeout(() => {
    setRandomDiceNumber()
  }, 1400)
}

const finishTheGame = () => {
  fieldStore.updateIsGameFinished(true)
  isNewGame.value = true
}

const restartGame = () => {
  store.clearHistory()
  isNewGame.value = true
  fieldStore.updateActiveCell(68)
}

const showDiceMessage = (maxAllowedNumber) => {
  diceMaxAllowedNumber.value = maxAllowedNumber
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
    <div class='playing-field__small-screen'>
      Please use a screen with a size of at least 816px to play the game.
    </div>
    <div class='playing-field__main'>
      <Dice
        :number="diceNumber"
        :is-new-game="isNewGame"
        :max-allowed-number='diceMaxAllowedNumber'
        @throw="handleDiceClick"
      ></Dice>

      <PlayingField
        :dice-number="diceNumber"
        :is-new-game="isNewGame"
        :prevent-move="preventMove"
        @end="finishTheGame"
        @show-dice-message='showDiceMessage'
      />
    </div>

    <History v-if="store.history.length" @set-new-game='restartGame'/>
  </main>
</template>

<style scoped lang="scss">
.playing-field {
  position: relative;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 20px;

  &__main {
    @media (max-width: 816px) {
      display: none;
    }
  }

  &__small-screen {
    display: none;
    padding: 0 20px;

    @media (max-width: 816px) {
      display: block;
    }
  }
}
</style>
