<template>
  <form action="#" class="add-product-form" @submit.prevent="submitForm">
    <BaseInput
      class="add-product-form__group"
      label="Наименование товара"
      type="text"
      id="name"
      placeholder="Введите наименование товара"
      required
      @update:model-value="nameValue = $event"
    />

    <BaseTextarea
      class="add-product-form__group"
      label="Описание товара"
      type="text"
      id="description"
      placeholder="Введите описание товара"
      @update:model-value="descriptionValue = $event"
    />

    <BaseInput
      class="add-product-form__group"
      :input-value="linkValue"
      label="Ссылка на изображение товара"
      type="text"
      id="link"
      placeholder="Введите ссылку"
      required
      @update:model-value="linkValue = $event"
    />

    <BaseInput
      class="add-product-form__group"
      :input-value="priceValue"
      label="Цена товара"
      type="text"
      id="price"
      placeholder="Введите цену"
      required
      @update:model-value="priceValue = $event"
    />

    <BaseButton
      class="add-product-form__button"
      type="submit"
      :active="formIsValid"
      :disabled="isButtonDisabled"
    >
      Добавить товар
    </BaseButton>
  </form>
</template>

<script>
  import BaseInput from '@/components/ui/BaseInput';
  import BaseTextarea from '@/components/ui/BaseTextarea';
  import BaseButton from '@/components/ui/BaseButton';

  export default {
    name: 'AddProductForm',

    components: {
      BaseInput,
      BaseTextarea,
      BaseButton,
    },

    data() {
      return {
        formIsValid: false,

        nameValue: '',
        descriptionValue: '',
        linkValue: '',
        priceValue: '',
      };
    },

    computed: {
      isButtonDisabled() {
        return (
          this.nameValue === '' ||
          this.linkValue === '' ||
          this.priceValue === ''
        );
      },
    },

    methods: {
      submitForm() {},
    },
  };
</script>

<style lang="scss" scoped>
  .add-product-form {
    display: flex;
    flex-direction: column;

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
  }
</style>
