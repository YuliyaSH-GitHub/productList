<template>
  <form action="#" class="add-product-form" @submit.prevent="submitForm">
    <BaseInput
      class="add-product-form__group"
      label="Наименование товара"
      type="text"
      id="name"
      placeholder="Введите наименование товара"
      required
      v-model="nameValue"
      @update:model-value="nameValue = $event"
    />

    <BaseTextarea
      class="add-product-form__group"
      label="Описание товара"
      type="text"
      id="description"
      placeholder="Введите описание товара"
      v-model="descriptionValue"
      @update:model-value="descriptionValue = $event"
    />

    <BaseInput
      class="add-product-form__group"
      label="Ссылка на изображение товара"
      type="text"
      id="link"
      placeholder="Введите ссылку"
      required
      v-model="linkValue"
      @update:model-value="linkValue = $event"
    />

    <BaseInput
      class="add-product-form__group"
      label="Цена товара"
      type="number"
      id="price"
      placeholder="Введите цену"
      required
      v-model="priceValue"
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
        priceValue: null,
      };
    },

    computed: {
      isButtonDisabled() {
        return (
          this.nameValue === '' ||
          this.linkValue === '' ||
          this.priceValue === null
        );
      },
    },

    methods: {
      resetModelValue() {
        this.nameValue = '';
        this.descriptionValue = '';
        this.linkValue = '';
        this.priceValue = null;
      },

      async submitForm() {
        const product = {
          id: new Date().getTime(),
          name: this.nameValue,
          description: this.descriptionValue,
          link: this.linkValue,
          price: (+this.priceValue).toLocaleString('ru'),
        };

        await this.$store.dispatch('update', product);

        this.resetModelValue();
      },
    },
  };
</script>

<style lang="scss" scoped>
  .add-product-form {
    display: flex;
    flex-direction: column;

    width: 332px;
    min-width: 332px;
    padding: 24px;

    border-radius: 4px;
    background: $quarter-pearl-lusta;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
      0px 6px 10px rgba(0, 0, 0, 0.02);

    &__group {
      display: flex;
      flex-direction: column;

      &:not(:first-child) {
        margin-top: 16px;
      }
    }
  }
</style>
