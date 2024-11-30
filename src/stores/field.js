import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFieldStore = defineStore('field', () => {
  const activeCell = ref(68)
  const isGameFinished = ref(getIsGameFinishedFromLocalStorage())

  function updateActiveCell(value) {
    activeCell.value = value
  }

  function updateIsGameFinished(value) {
    isGameFinished.value = value
    localStorage.setItem('isGameFinished', JSON.stringify(value))
  }

  function getIsGameFinishedFromLocalStorage() {
    const savedValue = localStorage.getItem('isGameFinished')
    return savedValue ? JSON.parse(savedValue) : false
  }

  return { activeCell, isGameFinished, updateActiveCell, updateIsGameFinished }
})
