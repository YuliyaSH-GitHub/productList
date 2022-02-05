<template>
  <form action="#" class="form-adding" @submit.prevent="add">
    <div class="form-adding__group">
      <label class="form-adding__label" for="name">Наименование товара</label>
      <input
        class="form-adding__input"
        type="text"
        id="name"
        placeholder="Введите наименование товара"
      />
    </div>

    <div class="form-adding__group">
      <label class="form-adding__label" for="description"
        >Описание товара</label
      >
      <textarea
        class="form-adding__textarea"
        name="description"
        id="description"
        placeholder="Введите описание товара"
      ></textarea>
    </div>

    <div class="form-adding__group">
      <label class="form-adding__label" for="link"
        >Ссылка на изображение товара</label
      >
      <input
        class="form-adding__input"
        type="text"
        id="link"
        placeholder="Введите ссылку"
      />
    </div>

    <div class="form-adding__group">
      <label class="form-adding__label" for="price">Цена товара</label>
      <input
        class="form-adding__input"
        type="text"
        id="price"
        placeholder="Введите цену"
      />
    </div>

    <button class="form-adding__button" type="submit">Добавить товар</button>
  </form>
</template>

<script>
  export default {
    name: 'FormAddingProducts',
  };
</script>

<style lang="scss" scoped>
  .form-adding {
    display: flex;
    flex-direction: column;

    max-width: 332px;
    padding: 24px;

    border-radius: 4px;
    background: $quarter-pearl-lusta;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
      0px 6px 10px rgba(0, 0, 0, 0.02);

    &__group {
      display: flex;
      flex-direction: column;

      width: 284px;

      &:not(:first-child) {
        margin-top: 16px;
      }
    }

    &__label {
      @include label-text;

      margin-bottom: 4px;

      color: $gun-powder;
    }

    &__input,
    &__textarea {
      @include input-text;

      padding: 10px 16px 11px;

      color: $mine-shaft;

      border-radius: 4px;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    }

    &__input::placeholder,
    &__textarea::placeholder {
      @include input-text;

      color: $nobel;
    }

    &__textarea {
      resize: vertical;

      min-height: 108px;
    }

    &__input:focus,
    &__textarea:focus {
      outline-color: $nobel;
    }

    &__button {
      @include button-text;

      margin-top: 24px;
      padding: 10px 10px 11px;

      text-align: center;

      color: $nobel;

      border-radius: 10px;
      background-color: $gallery;
    }
  }
</style>
