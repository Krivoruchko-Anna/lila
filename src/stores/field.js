import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFieldStore = defineStore('field', () => {
  const activeCell = ref(68)

  function updateActiveCell(value) {
    activeCell.value = value
  }

  return { activeCell, updateActiveCell }
})
