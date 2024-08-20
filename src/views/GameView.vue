<script setup>
import { ref } from "vue";
import PlayingField from "@/components/PlayingField.vue";
import Dice from "@/components/Dice.vue";

const setRandomDiceNumber = () => {
  diceNumber.value =  Math.floor(Math.random() * 6) + 1;
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
    <Dice :number="diceNumber"
          @click="handleDiceClick"
    ></Dice>

    <PlayingField :dice-number="diceNumber" />
  </main>
</template>

<style scoped>
.playing-field {
  margin-top: 5rem;
}
</style>
