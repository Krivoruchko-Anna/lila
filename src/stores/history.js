import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { jsPDF } from 'jspdf'

export const useHistoryStore = defineStore('history', () => {
  const history = ref(JSON.parse(localStorage.getItem('history')) || [])

  function updateHistory(value) {
    history.value.unshift(value)
    localStorage.setItem('history', JSON.stringify(history.value))
  }

  function clearHistory() {
    history.value = []
    localStorage.removeItem('history')
  }

  function downloadHistoryAsPdf() {
    const doc = new jsPDF()

    doc.text('Game History', 10, 10)
    history.value.forEach((item, index) => {
      doc.text(`${item.title} - ${item.time}`, 10, 20 + index * 10)
    })

    doc.save('game_history.pdf')
  }

  watch(history, (newHistory) => {
    localStorage.setItem('history', JSON.stringify(newHistory))
  })

  return { history, updateHistory, clearHistory, downloadHistoryAsPdf }
})
