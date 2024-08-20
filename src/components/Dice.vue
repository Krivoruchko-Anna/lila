<script setup>
defineProps({
  number: {
    type: Number,
    required: false
  },
})
</script>

<template>
  <div class="dice">
    <img class="dice__number" v-if="number" :src="`src/assets/dice/dice-${number}.svg`" :alt="number">
    <img class="dice__loader" v-else src="@/assets/dice/dice-loader.svg" alt="loader">
  </div>
</template>

<style scoped lang="scss">
.dice {
  text-align: center;
  cursor: pointer;
  width: fit-content;
  margin: 0 auto;

  img {
    width: 52px;
    height: 52px;
    background-color: #241923;
  }

  &__number {
    animation: appear 0.5s ease-in-out;
  }

  &__loader {
    animation: loader 1.4s ease-in-out;
  }

  &:hover {
    animation: scale 0.5s ease-in-out;
  }
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
