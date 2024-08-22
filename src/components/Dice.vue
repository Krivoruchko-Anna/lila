<script setup>
defineProps({
  number: {
    type: Number,
    required: false
  },
  isNewGame: {
    type: Boolean,
    required: false
  }
})

const emits = defineEmits(['throw'])
</script>

<template>
  <div class="dice">
    <div
        class="dice__text"
        :class="{ 'visible': isNewGame }">
      Throw 6 to start the game
    </div>
    <img
        class="dice__number"
        v-if="number"
        :src="`src/assets/dice/dice-${number}.svg`"
        :alt="number"
        @click="emits('throw')"
    >
    <img
        v-else
        class="dice__loader"
        src="@/assets/dice/dice-loader.svg"
        alt="loader">
  </div>
</template>

<style scoped lang="scss">
.dice {
  text-align: center;
  width: fit-content;
  margin: 0 auto;

  img {
    width: 52px;
    height: 52px;
    background-color: #241923;
    border-radius: 6px;
  }

  &__number {
    animation: appear 0.5s ease-in-out;
    cursor: pointer;
  }

  &__loader {
    animation: loader 1.4s ease-in-out;
    pointer-events: none;
  }

  &__text {
    color: white;
    margin-bottom: 6px;
    transition: 0.3s all;
    opacity: 0;
    pointer-events: none;
  }

  &:hover {
    animation: scale 0.5s ease-in-out;

    .dice__text {
      opacity: 0;
    }
  }
}

.visible {
  opacity: 1;
}

@keyframes appear {
  0% {
    opacity: 0.6;
  }
  60% {
    opacity: 1;
  }
}

@keyframes scale {
  0% {
    scale: 1;
  }
  50% {
    scale: 0.9;
  }
  100% {
    scale: 1;
  }
}

@keyframes loader {
  0% {
    opacity: 0;
    rotate: 0deg;
    scale: 1;
  }
  20% {
    scale: 0.6;
  }
  40% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  80% {
    scale: 1;
  }
  100% {
    opacity: 0.2;
    rotate: 360deg;
  }
}
</style>
