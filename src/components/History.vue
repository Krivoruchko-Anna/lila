<script setup>
import { computed } from "vue";
import { useHistoryStore } from "@/stores/history.js";

const store = useHistoryStore()

const hasHistory = computed(() => !store.history || !store.history.length)
</script>

<template>
  <div
      class="history"
      :class="{ 'hidden': hasHistory }">
    <div class="history__header">
      <h2>Game History</h2>
      <img
          src="../assets/images/download.svg"
          alt="download"
          title="Download the history"
          @click="store.downloadHistoryAsPdf()"
      >
    </div>

    <div class="history__list">
      <div
          v-for="item in store.history"
          :key="item.title"
          class="history__item">
        <p>{{ item.title }}</p>
        <p>{{ item.time }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "src/styles/mixins";

.history {
  display: flex;
  flex-direction: column;
  width: 290px;
  margin-top: 94px;
  color: white;

  @include scrollbar-styles;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: normal;

    img {
      height: 20px;
      cursor: pointer;
    }
  }

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
    border-bottom: 1px var(--color-violet-muted) solid;
    padding: 8px 0;
  }
}
</style>
