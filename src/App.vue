<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app">
    <header>
      <div class="menu">
        <nav>
          <RouterLink to="/game"> Game </RouterLink>
          <RouterLink to="/about"> About </RouterLink>
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

header {
  .menu {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
