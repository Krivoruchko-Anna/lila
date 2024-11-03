import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFieldStore = defineStore('field', () => {
    const activeCell = ref(68)

    const numbers = [72, 71, 70, 69, 68, 67, 66, 65, 64, 55, 56, 57, 58, 59, 60, 61, 62, 63, 54, 53, 52, 51, 50, 49, 48, 47, 46, 37, 38, 39, 40, 41, 42, 43, 44, 45, 36, 35, 34, 33, 32, 31, 30, 29, 28, 19, 20, 21, 22, 23, 24, 25, 26, 27, 18, 17, 16, 15, 14, 13, 12, 11, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    function updateActiveCell(value) {
        activeCell.value = value
    }

    return { activeCell, numbers, updateActiveCell }
})
