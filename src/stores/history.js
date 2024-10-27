import { ref, watch } from 'vue'
import { defineStore } from 'pinia'

export const useHistoryStore = defineStore('history', () => {
    const history = ref(JSON.parse(localStorage.getItem('history')) || []);

    function updateHistory(value) {
        history.value.unshift(value);
        localStorage.setItem('history', JSON.stringify(history.value));
    }

    watch(history, (newHistory) => {
        localStorage.setItem('history', JSON.stringify(newHistory));
    });

    return { history, updateHistory }
})
