<script setup>
defineProps({
  isActive: {
    type: Boolean,
    required: false
  },
  activeId: {
    type: Number,
    required: false
  },
  cell: {
    type: Number,
    required: false
  },
  descriptionId: {
    type: Number,
    required: false
  }
})

</script>

<template>
  <div class="cell"
       :class="{ 'active': isActive }"
       :data-id="activeId"
  >
    <img
        class="player"
        v-show="isActive"
        src="../assets/player.svg" alt="player"
    >
  </div>
</template>

<style scoped lang="scss">
.cell {
  width: 85px;
  height: 86px;
  border: 2px transparent solid;
  transition: 0.1s all;
  flex-grow: 0;
  flex-shrink: 0;
  cursor: pointer;
  color: white;

  &:hover {
    border: 2px #d4e4ff solid;
    filter: blur(2px);
  }

  div {
    color: white;
  }
}

.active {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(125 5 129 / 64%);
  animation: appear 0.3s ease-in-out;

  .player {
    border-radius: 50%;
    width: 60px;
    animation: rotation 9s infinite linear;
    animation-delay: 0.5s;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.55);
  }

  &:hover {
    filter: none;
    border: 2px transparent solid;
  }
}

@keyframes appear {
  0% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}

@keyframes rotation {
  0% {
    rotate: 0deg;
  }
  100% {
    rotate: 360deg;
  }
}
</style>
