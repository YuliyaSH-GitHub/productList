<template>
  <li class="base-card">
    <button class="base-card__button" @click="$emit('delete')">
      <BaseIcon name="delete" />
    </button>

    <img class="base-card__img" :src="link" :alt="name" />

    <div class="base-card__info">
      <h3 class="base-card__title">{{ name }}</h3>

      <p v-if="description" class="base-card__description">{{ description }}</p>

      <p class="base-card__price">{{ price }} <span>руб.</span></p>
    </div>

    <router-link to="#" class="base-card__router-link"></router-link>
  </li>
</template>

<script>
  import BaseIcon from '@/components/ui/BaseIcon';

  export default {
    name: 'BaseCard',

    components: {
      BaseIcon,
    },

    props: {
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
      },
      link: {
        type: String,
        required: true,
      },
      price: {
        type: String,
        required: true,
      },
    },
  };
</script>

<style lang="scss" scoped>
  .base-card {
    position: relative;

    display: flex;
    flex-direction: column;

    border-radius: 4px;
    background-color: $quarter-pearl-lusta;

    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
      0px 6px 10px rgba(0, 0, 0, 0.02);

    &:hover {
      box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.1),
        0px 6px 10px rgba(0, 0, 0, 0.06);

      & .base-card__button {
        display: block;
      }
    }

    &__button {
      position: absolute;
      top: -8px;
      right: -8px;
      z-index: 2;

      display: none;

      padding: 8px;

      border-radius: 10px;
      background-color: $geraldine;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    }

    &__img {
      width: 100%;
      height: 200px;

      object-fit: cover;
      object-position: center;

      border-radius: 4px 4px 0 0;
    }

    &__info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-grow: 1;

      padding: 16px 16px 24px;

      color: $mine-shaft;
    }

    &__title {
      @include base-card-title;

      z-index: 2;

      margin-bottom: 16px;
    }

    &__description {
      @include base-card-description;

      z-index: 2;

      margin-bottom: 32px;
    }

    &__price {
      @include base-card-price;

      z-index: 2;
    }

    &__router-link {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
  }
</style>
