<script setup>
import Cell from "@/components/Cell.vue";
import CellDescription from "@/components/CellDescription.vue";
import { useFieldStore } from "@/stores/field.js";

defineProps({
  activeCell: {
    type: Number,
    required: false
  },
  descriptionId: {
    type: Number,
    required: false
  },
  highlightedCell: {
    type: Number,
    required: false
  }
})

const filedStore = useFieldStore()

const emits = defineEmits(["close-description", "open-description"])

const showDescription = (cell) => {
  emits("open-description", cell)
}

const closeDescription = () => {
  emits("close-description")
}

</script>

<template>
  <div class="cells">
    <Cell
        v-for="cell in filedStore.numbers"
        :key="cell"
        :cell="cell"
        :active-id="activeCell"
        :description-id="descriptionId"
        :is-active="+activeCell === +cell"
        :highlighted-cell="highlightedCell"
        @click="showDescription(cell)"
    ></Cell>
  </div>

  <Teleport to="body">
    <CellDescription
        v-if="descriptionId"
        :cell-id="descriptionId"
        @click="closeDescription"/>
  </Teleport>
</template>

<style scoped>
.cells {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}
</style>
