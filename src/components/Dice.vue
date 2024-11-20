<script setup>
import { useFieldStore } from '@/stores/field.js'

defineProps({
  number: {
    type: Number,
    required: false
  },
  isNewGame: {
    type: Boolean,
    required: false
  },
  maxAllowedNumber: {
    type: Number,
    required: false
  }
})

const fieldStore = useFieldStore()

const emits = defineEmits(['throw'])
</script>

<template>
  <div class="dice">
    <p
      class="dice__final"
      v-if="fieldStore.isGameFinished"
    >
      Congratulations! You have reached the Cosmic Conscience.
    </p>
    <div
      class="dice__text"
      :class="{ visible: (isNewGame && number) || fieldStore.isGameFinished }"
    >
      {{
        fieldStore.isGameFinished
          ? 'Click here to play again. The history will be cleared.'
          : 'Throw 6 to start the game'
      }}
    </div>
    <div v-if='maxAllowedNumber' class="dice__text">
      You need to throw {{ maxAllowedNumber }} or less to continue
    </div>
    <img
      class="dice__number"
      v-if="number"
      :src="`src/assets/dice/dice-${number}.svg`"
      :alt="number"
      @click="emits('throw')"
    />
    <img
      v-else
      class="dice__loader"
      src="@/assets/dice/dice-loader.svg"
      alt="loader"
    />
  </div>
</template>

<style scoped lang="scss">
.dice {
  text-align: center;
  width: fit-content;
  margin: 0 auto;
  color: var(--vt-c-text-light-1);

  img {
    width: 52px;
    height: 52px;
    border-radius: 6px;
  }

  &__number {
    animation: appear 0.5s ease-in-out;
    cursor: pointer;
    transition: 0.5s all;

    &:hover {
      scale: 0.9;
    }
  }

  &__loader {
    animation: loader 1.4s ease-in-out;
    pointer-events: none;
  }

  &__text {
    margin-bottom: 6px;
    transition: 0.1s all;
    opacity: 0;
    pointer-events: none;
  }

  &__final {
    font-size: 18px;
  }
}

.visible {
  opacity: 0.6;
}
</style>
