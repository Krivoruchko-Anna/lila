<template>
  <div class="about">
    <h2 class="about__title">{{ $t('about.title') }}</h2>

    <div class="about__description">
      <p>{{ $t('about.description.first') }}</p>
      <p>{{ $t('about.description.second') }}</p>
    </div>

    <h2 class="about__title">{{ $t('about.rules.title') }}</h2>

    <div class="about__description">
      <p>{{ $t('about.rules.description.first') }}</p>
      <p>{{ $t('about.rules.description.second') }}</p>
      <p>
        <span>{{ $t('about.rules.ladders.title') }}:</span>
        {{ $t('about.rules.ladders.description') }}
      </p>
      <p>
        <span>{{ $t('about.rules.snakes.title') }}:</span>
        {{ $t('about.rules.snakes.description') }}
      </p>
      <p>
        <span>{{ $t('about.rules.objective.title') }}</span>
        {{ $t('about.rules.objective.description') }}
      </p>
      <p>
        <span>{{ $t('about.rules.understandingSquares.title') }}:</span>
        {{ $t('about.rules.understandingSquares.description') }}
      </p>
      <p>
        <span>{{ $t('about.rules.chakras.title') }}:</span>
        {{ $t('about.rules.chakras.description') }}
      </p>
      <p>
        <span>{{ $t('about.rules.winning.title') }}:</span>
        {{ $t('about.rules.winning.description') }}
      </p>
      <p>
        <span>{{ $t('about.rules.karmicLessons.title') }}:</span>
        {{ $t('about.rules.karmicLessons.description') }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about {
  max-width: 770px;
  margin: 60px auto;
  padding: 20px;
  background-color: var(--color-dark-60);

  &__title {
    font-size: 20px;
  }

  &__description {
    margin: 20px 0;
    font-size: 15px;

    p {
      margin: 10px 0;
      line-height: 26px;
      color: #b4a0bf;
    }

    span {
      color: #ffffff;
    }
  }
}
</style>
<script setup></script>
