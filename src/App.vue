<script setup>
import { ref, onMounted, computed } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const selectedLanguage = ref('en')
const isDropdownOpen = ref(false)

const languages = [
  { code: 'en', label: 'En' },
  { code: 'ru', label: 'Ru' }
]

const selectedLanguageLabel = computed(() => {
  const selected = languages.find((lang) => lang.code === selectedLanguage.value)
  return selected ? selected.label : 'En' // Default to 'En' if not found
})

const changeLanguage = (language) => {
  selectedLanguage.value = language
  locale.value = language
  localStorage.setItem('selectedLanguage', language)
  isDropdownOpen.value = false
}

onMounted(() => {
  const storedLanguage = localStorage.getItem('selectedLanguage') || 'en'
  selectedLanguage.value = storedLanguage
  locale.value = storedLanguage
})
</script>

<template>
  <div class="app">
    <header>
      <div class="menu">
        <nav>
          <RouterLink to="/game"> {{ $t('menu.navigation.game') }} </RouterLink>
          <RouterLink to="/about"> {{ $t('menu.navigation.about') }} </RouterLink>

          <div class="dropdown">
            <button
              class="dropdown-btn"
              @click="isDropdownOpen = !isDropdownOpen"
            >
              {{ selectedLanguageLabel }}
            </button>

            <div
              v-if="isDropdownOpen"
              class="dropdown-menu"
            >
              <div
                class="dropdown-menu__item"
                :class="{ hidden: language && language.label === selectedLanguageLabel }"
                v-for="language in languages"
                :key="language.code"
                @click="changeLanguage(language.code)"
              >
                {{ language.label }}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>

    <RouterView />
  </div>
</template>

<style scoped lang="scss">
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  position: relative;
  width: 804px;
  margin: 1rem auto 0;
  display: flex;
  flex-direction: row;
  text-align: left;
  font-size: 1rem;
  padding: 1rem 0;

  a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
    color: var(--color-text-muted);

    &:first-of-type {
      border: 0;
    }

    &:hover {
      color: var(--vt-c-white-soft);
    }
  }

  a.router-link-exact-active {
    color: var(--color-text);
  }

  @media (max-width: 816px) {
    width: auto;
    max-width: 400px;
  }
}

.menu {
  display: flex;
  place-items: flex-start;
  flex-wrap: wrap;
}

.dropdown {
  position: absolute;
  left: 180px;

  @media (max-width: 360px) {
    display: none;
  }

  .dropdown-btn {
    padding: 6px 12px;
    background-color: var(--color-dark);
    color: var(--color-violet-light);
    border-radius: 4px;
    cursor: pointer;
    border: 1px solid var(--color-border);
    font-size: 14px;
    outline: none;

    &:focus {
      border-color: var(--color-violet-light-dark);
      border-radius: 4px 4px 0 0;
    }
  }

  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: var(--color-dark);
    list-style: none;
    padding: 0;
    margin: 0;
    border-radius: 0 0 4px 4px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 10;

    &__item {
      padding: 6px 12px;
      cursor: pointer;
      font-size: 14px;
      color: var(--color-violet-light);

      &:hover {
        background-color: var(--color-violet-light-dark);
      }
    }
  }
}
</style>
