<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { Cards } from '@/data/cards.js'
import { TeleportCells } from '@/data/teleportCells.js'
import { useHistoryStore } from '@/stores/history.js'
import { useFieldStore } from '@/stores/field.js'
import Cells from '@/components/Cells.vue'

const props = defineProps({
  diceNumber: {
    type: Number,
    required: false
  },
  isNewGame: {
    type: Boolean,
    required: false
  },
  preventMove: {
    type: Boolean,
    required: false
  }
})

const emits = defineEmits(['end', 'show-dice-message'])

const store = useHistoryStore()
const fieldStore = useFieldStore()

const activeCell = computed(() => fieldStore.activeCell)
const highlightedCell = ref()

const descriptionId = ref(null)

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const movePlayer = async () => {
  if (props.isNewGame || props.diceNumber + activeCell.value > 72) {
    const maxAllowedNumber = 72 - activeCell.value
    emits('show-dice-message', maxAllowedNumber)
    return
  }

  for (let i = 0; i < props.diceNumber; i++) {
    fieldStore.updateActiveCell(activeCell.value + 1)
    await delay(500)
  }

  if (TeleportCells[activeCell.value]) {
    moveToCell(activeCell.value)
  } else {
    await delay(500)
    openDescription(activeCell.value)
  }

  saveToHistory()
}

const moveToCell = (cell) => {
  fieldStore.updateActiveCell(cell)
  openDescription(activeCell.value)
}

const saveToHistory = () => {
  const historyCell = Cards[activeCell.value].title
  const timeStamp = getCurrentTime()
  store.updateHistory({
    number: activeCell.value,
    title: historyCell,
    time: timeStamp,
    dice: props.diceNumber
  })

  if (activeCell.value === 68) {
    emits('end')
  }
}

const getCurrentTime = () => {
  const currentTime = new Date()

  const hours = currentTime.getHours()
  const minutes = String(currentTime.getMinutes()).padStart(2, '0')

  return `${hours}:${minutes}`
}

const openDescription = (cell) => {
  descriptionId.value = cell
}

const checkGameStart = async () => {
  if (activeCell.value === 1) {
    highlightedCell.value = 6

    await delay(1000)

    highlightedCell.value = undefined
    fieldStore.updateActiveCell(6)
    openDescription(activeCell.value)
    saveToHistory()
  }
}

const checkTeleportCell = async () => {
  if (TeleportCells[activeCell.value]) {
    highlightedCell.value = TeleportCells[activeCell.value]
    await delay(600)
    fieldStore.updateActiveCell(TeleportCells[activeCell.value])
    highlightedCell.value = undefined

    await delay(900)
    openDescription(activeCell.value)
    saveToHistory()
  }
}

const closeDescription = async () => {
  descriptionId.value = null
  await checkGameStart()
  await checkTeleportCell()
}

watch(props, async (newValue) => {
  if (props.isNewGame) return
  if (activeCell.value === 68 && props.diceNumber === 6) {
    highlightedCell.value = 1
    await delay(1000)
    highlightedCell.value = undefined

    moveToCell(1)
    saveToHistory()
  } else {
    newValue.diceNumber && !props.preventMove && (await movePlayer())
  }
})

onMounted(() => {
  if (store.history.length) {
    fieldStore.updateActiveCell(store.history[0].number)
  }
})
</script>

<template>
  <div
    class="field"
    :class="{ finished: fieldStore.isGameFinished }"
    style='background-image: url("/images/game-field.jpg")'
  >
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
  background-size: contain;
  box-shadow: 0 0 16px var(--color-dark);
  background-color: var(--vt-c-black);
  border-radius: 8px;
  filter: saturate(0.7);
}

.finished {
  box-shadow: 0 0 12px var(--color-violet-medium);
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
