<script setup>
import { computed } from "vue";
import { useHistoryStore } from "@/stores/history.js";

const store = useHistoryStore()

const hasHistory = computed(() => !store.history || !store.history.length)
</script>

<template>
  <div class="history" :class="{ 'hidden': hasHistory }">
    <h2>Game History</h2>

    <div class="history__list">
      <div v-for="item in store.history" class="history__item">
        <p>{{ item.title }}</p>
        <p>{{ item.time }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.history {
  display: flex;
  flex-direction: column;
  width: 260px;
  margin-top: 94px;
  color: white;

  &__list {
    width: 100%;
    margin-top: 15px;
    max-height: 68vh;
    overflow: auto;
  }

  &__item {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    border-bottom: 1px #beaad3 solid;
    padding: 8px 0;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(209, 205, 234, 0.9);
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(80, 73, 126, 0.55);
  }
}

.hidden {
  opacity: 0;
}
</style>
