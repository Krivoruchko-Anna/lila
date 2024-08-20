<script setup>
import { ref, watch } from "vue";
import Cells from "@/components/Cells.vue";

const props = defineProps({
  diceNumber: {
    type: Number,
    required: false
  }
})

const activeCell = ref(6);

const descriptionId = ref(null)

const teleportCells = {
  10: 24, 12: 8, 16: 4, 17: 69, 20: 32,
  22: 60, 24: 7, 27: 41, 28: 50, 29: 6,
  37: 64, 44: 9, 45: 67, 46: 62, 52: 35,
  54: 68, 55: 3, 61: 13, 63: 2, 72: 51
};

const handlePlayerTeleport = async () => {
  await delay(500)
  activeCell.value = teleportCells[activeCell.value]

  openDescription(activeCell.value)
}

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

const movePlayer = async () => {
  for (let i = 0; i < props.diceNumber; i++) {
    activeCell.value += 1
    await delay(500)
  }

  if (teleportCells[activeCell.value]) {
    await handlePlayerTeleport()
  }
};

const openDescription = (cell) => {
  descriptionId.value = cell
}

const closeDescription = () => {
  descriptionId.value = null
}

watch(props, (newValue) => {
  newValue.diceNumber && movePlayer()
})
</script>

<template>
  <div class="field">
    <Cells
        :active-cell="activeCell"
        :description-id="descriptionId"
        @open-description="openDescription"
        @close-description="closeDescription"
    ></Cells>
  </div>
</template>

<style scoped>
.field {
  width: 765px;
  height: 688px;
  margin-top: 1rem;
  padding-bottom: 3rem;
  background-image: url("../assets/game-field.jpg");
  background-size: contain;
  box-shadow: 0 0 60px #18181a;
  border-radius: 8px;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}
</style>
