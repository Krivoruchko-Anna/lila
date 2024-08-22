<script setup>
import { Cards } from "@/data/cards.js";

defineProps({
  cellId: {
    type: Number,
    required: true
  },
})
</script>

<template>
  <div class="cell-description">
    <div class="cell-description__wrapper">
      <div class="cell-description__title">{{ Cards[cellId].title }}</div>
      <div class="cell-description__text">{{ Cards[cellId].text }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cell-description {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgb(23 23 23 / 90%);
  z-index: 100;
  overflow: auto;
  padding-top: 140px;

  &__wrapper {
    height: 100%;
    max-width: 820px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    color: white;
  }

  &__title {
    font-size: 24px;
    display: block;
  }

  &__text {
    margin-top: 20px;
    padding-bottom: 120px;
    font-size: 16px;
  }
}
</style>
