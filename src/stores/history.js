import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useHistoryStore = defineStore('history', () => {
    const history = ref([])
    function updateHistory(value) {
        history.value.unshift(value)
    }

    return { history, updateHistory }
})
