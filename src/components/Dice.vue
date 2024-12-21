<script setup>
import { useFieldStore } from '@/stores/field.js'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
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

const { t } = useI18n()

const emits = defineEmits(['throw'])

const message = computed(() => {
  if (fieldStore.isGameFinished) {
    return t('dice.playAgain')
  } else if (props.maxAllowedNumber) {
    return t('dice.lastGameLine', { maxAllowedNumber: props.maxAllowedNumber })
  } else if (props.isNewGame) {
    return t('dice.startWithSix')
  } else return ``
})
</script>

<template>
  <div class="dice">
    <p
      class="dice__final"
      v-if="fieldStore.isGameFinished"
    >
      {{ $t('dice.winMessage') }}
    </p>
    <div
      class="dice__text"
      :class="{ visible: (isNewGame && number) || fieldStore.isGameFinished || maxAllowedNumber }"
    >
      {{ message }}
    </div>
    <img
      class="dice__number"
      v-if="number"
      :src="`/dice/dice-${number}.svg`"
      :alt="number"
      @click="emits('throw')"
    />
    <img
      v-else
      class="dice__loader"
      src="/dice/dice-loader.svg"
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
    height: 20px;
    margin-bottom: 10px;
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
