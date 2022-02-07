<template>
  <div class="page">
    <MainContainer class="page__container">
      <header class="page__header">
        <h2 class="page__header-title">Добавление товара</h2>

        <select class="page__select">
          <option value="По умолчанию" selected>По умолчанию</option>
          <option value="По умолчанию">По возрастанию цены</option>
          <option value="По умолчанию">По убыванию цены</option>
        </select>
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

    &__select {
      @include input-text;

      padding: 10px 4px;

      border-color: $quarter-pearl-lusta;
      background: $quarter-pearl-lusta;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
      border-radius: 4px;

      color: $nobel;

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
