<script setup>
import { ref } from "vue";
import PlayingField from "@/components/PlayingField.vue";
import Dice from "@/components/Dice.vue";
import History from "@/components/History.vue";

const isNewGame = ref(true)

const setRandomDiceNumber = () => {
  diceNumber.value =  Math.floor(Math.random() * 6) + 1;

  if (diceNumber.value === 6) {
    isNewGame.value = false
  }
}

const handleDiceClick = () => {
  diceNumber.value = null;

  setTimeout(() => {
    setRandomDiceNumber()
  }, 1400)
}

const diceNumber = ref(1);
</script>

<template>
  <main class="playing-field">
    <div>
      <Dice :number="diceNumber"
            :is-new-game="isNewGame"
            @throw="handleDiceClick"
      ></Dice>

      <PlayingField :dice-number="diceNumber" :is-new-game="isNewGame" />
    </div>

    <History></History>
  </main>
</template>

<style scoped>
.playing-field {
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  gap: 40px;
  transform: translateX(150px);
}
</style>
