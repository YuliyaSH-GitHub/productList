<template>
  <div class="page">
    <MainContainer class="page__container">
      <header class="page__header">
        <h2 class="page__header-title">Добавление товара</h2>

        <button>По умолчанию</button>
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
