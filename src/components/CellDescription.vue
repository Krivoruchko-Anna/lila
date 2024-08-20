<script setup>
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
      <div>Description {{ cellId }}</div>
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
  background-color: rgb(23 23 23 / 80%);
  z-index: 100;

  &__wrapper {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
}
</style>
