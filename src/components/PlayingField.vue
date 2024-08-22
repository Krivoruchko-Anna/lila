<script setup>
import { ref, watch } from "vue";
import { Cards } from "@/data/cards.js";
import { TeleportCells } from "@/data/teleportCells.js";
import { useHistoryStore } from "@/stores/history.js";
import Cells from "@/components/Cells.vue";

const props = defineProps({
  diceNumber: {
    type: Number,
    required: false
  },
  isNewGame: {
    type: Boolean,
    required: false
  }
})

const store = useHistoryStore()

const activeCell = ref(68);
const highlightedCell = ref();

const descriptionId = ref(null)

const handlePlayerTeleport = async () => {
  await delay(600)
  activeCell.value = TeleportCells[activeCell.value]
  highlightedCell.value = undefined

  await delay(900)
  openDescription(activeCell.value)
}

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

const movePlayer = async () => {
  if (props.isNewGame && props.diceNumber + activeCell.value > 72) return

  for (let i = 0; i < props.diceNumber; i++) {
    activeCell.value += 1
    await delay(500)
  }

  if (TeleportCells[activeCell.value]) {
    highlightedCell.value = TeleportCells[activeCell.value];
    await handlePlayerTeleport()
  } else {
    await delay(500)
    openDescription(activeCell.value)
  }

  saveToHistory()
};

const startGame = async () => {
  highlightedCell.value = 1

  await delay(1000)

  highlightedCell.value = undefined
  activeCell.value = 1
  openDescription(activeCell.value)
  saveToHistory()
}

const saveToHistory = () => {
  store.updateHistory(Cards[activeCell.value].title)
}

const openDescription = (cell) => {
  descriptionId.value = cell
}

const closeDescription = async () => {
  descriptionId.value = null

  if (activeCell.value === 1) {
    highlightedCell.value = 6

    await delay(1000)

    highlightedCell.value = undefined
    activeCell.value = 6
    openDescription(activeCell.value)
    saveToHistory()
  }
}

watch(props, async (newValue) => {
  if (props.isNewGame) return
  if (activeCell.value === 68 && props.diceNumber === 6) {
    await startGame()
  } else {
    newValue.diceNumber && await movePlayer()
  }
})
</script>

<template>
  <div class="field">
    <Cells
        :active-cell="activeCell"
        :description-id="descriptionId"
        :highlighted-cell="highlightedCell"
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
