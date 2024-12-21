<script setup>
import { useHistoryStore } from '@/stores/history.js'
import { useI18n } from 'vue-i18n'

const store = useHistoryStore()
const emits = defineEmits(['setNewGame'])

const { t } = useI18n()

const restart = () => {
  if (confirm(t('history.confirmRestart'))) {
    emits('setNewGame')
  }
}
</script>

<template>
  <div class="history">
    <img
      class="history__restart"
      src='/images/reload.svg'
      alt="restart"
      :title="$t('gameView.restart')"
      @click="restart"
    />
    <div class="history__header">
      <h2>{{ $t('history.historyTitle') }}</h2>
      <img
        src='/images/download.svg'
        class="history__download"
        alt="download"
        :title="$t('history.downloadHistory')"
        @click="store.downloadHistoryAsPdf()"
      />
    </div>

    <div class="history__list">
      <div
        v-for="item in store.history"
        :key="item.title"
        class="history__item"
      >
        <p>{{ $t(item.title) }}</p>
        <p class="history__time">{{ item.time }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import 'src/styles/mixins';

.history {
  position: absolute;
  right: -290px;
  width: 290px;
  margin-top: 94px;

  @include scrollbar-styles;

  &__restart {
    position: absolute;
    right: 0;
    top: -148px;
    width: 22px;
    cursor: pointer;
    opacity: 0.5;
    transition: 0.5s all;

    &:hover {
      opacity: 1;
    }
  }

  &__download {
    opacity: 0.6;
    transition: 0.5s all;

    &:hover {
      opacity: 1;
    }
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 8px;
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
    padding: 8px 8px 8px 0;
  }

  @media (max-width: 1600px) {
    width: 200px;
    right: -200px;
  }

  @media (max-width: 1360px) {
    width: 180px;
    right: -180px;

    &__time {
      display: none;
    }
  }

  @media (max-width: 1200px) {
    display: none;
  }
}
</style>
