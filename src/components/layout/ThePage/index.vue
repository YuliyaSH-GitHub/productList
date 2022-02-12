<template>
  <div class="page">
    <MainContainer class="page__container">
      <header class="page__header">
        <h1 class="page__header-title">Добавление товара</h1>

        <div class="page__inner select">
          <select
            v-model="selected"
            name="select"
            class="page__select"
            @change="sort"
          >
            <option value="default">По умолчанию</option>
            <option value="increase">По возрастанию</option>
            <option value="decrease">По убыванию</option>
            <option value="name">По имени</option>
          </select>
        </div>
      </header>

      <main class="page__main">
        <div class="page__main-group">
          <AddProductForm class="page__form" />

          <ProductsList class="page__products-list" />
        </div>
      </main>
    </MainContainer>
  </div>
</template>

<script>
  import MainContainer from '@/components/containers/MainContainer';
  import AddProductForm from '@/components/global/AddProductForm';
  import ProductsList from '@/components/global/ProductsList';

  export default {
    name: 'ThePage',

    components: {
      MainContainer,
      AddProductForm,
      ProductsList,
    },

    data() {
      return {
        selected: 'default',
      };
    },

    methods: {
      sort() {
        if (this.selected === 'default') {
          this.$store.dispatch('load');
        } else if (this.selected === 'increase') {
          this.$store.commit('sortIncrease');
        } else if (this.selected === 'decrease') {
          this.$store.commit('sortDecrease');
        } else if (this.selected === 'name') {
          this.$store.commit('sortName');
        }
      },
    },
  };
</script>

<style lang="scss" scoped>
  .page {
    height: 100%;
    padding: 32px 0;

    &__container {
      display: flex;
      flex-direction: column;

      & > {
        *:not(:first-child) {
          margin-top: 16px;
        }
      }
    }

    &__header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      &-title {
        @include h2;
      }
    }

    &__inner {
      &.select {
        position: relative;

        &::after {
          position: absolute;
          top: 14px;
          right: 16px;
          z-index: 3;

          display: block;

          width: 5px;
          height: 5px;

          border-right: 1px solid $nobel;
          border-bottom: 1px solid $nobel;

          content: '';

          transform: rotate(45deg);
        }
      }
    }

    &__select {
      @include input-text;

      min-width: 130px;
      padding: 10px 16px 11px;

      border-color: $quarter-pearl-lusta;
      background: $quarter-pearl-lusta;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      border: none;

      color: $nobel;

      -webkit-appearance: none;
      -moz-appearance: none;

      &::-ms-expand {
        display: none;
      }

      &:focus {
        outline-color: $nobel;
      }
    }

    &__main {
      flex-grow: 1;

      &-group {
        display: flex;
        align-items: flex-start;

        height: 100%;
      }
    }

    &__form {
      margin-right: 16px;
    }

    &__products {
      &-list {
        width: 100%;
      }
    }
  }
</style>
