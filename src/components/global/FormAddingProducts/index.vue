<template>
  <form action="#" class="form-adding" @submit.prevent="add">
    <component
      v-for="item in formItems"
      :key="item.id"
      class="form-adding__group"
      :is="item.tag"
      :label="item.label"
      :type="item.type"
      :id="item.id"
      :placeholder="item.placeholder"
      :required="item.required"
    />

    <BaseButton class="form-adding__button" type="submit"
      >Добавить товар</BaseButton
    >
  </form>
</template>

<script>
  import BaseInput from '@/components/ui/BaseInput';
  import BaseTextarea from '@/components/ui/BaseTextarea';
  import BaseButton from '@/components/ui/BaseButton';

  export default {
    name: 'FormAddingProducts',

    components: {
      BaseInput,
      BaseTextarea,
      BaseButton,
    },

    computed: {
      formItems() {
        return [
          {
            tag: 'BaseInput',
            label: 'Наименование товара',
            type: 'text',
            id: 'name',
            placeholder: 'Введите наименование товара',
            required: true,
          },
          {
            tag: 'BaseTextarea',
            label: 'Описание товара',
            id: 'description',
            placeholder: 'Введите описание товара',
          },
          {
            tag: 'BaseInput',
            label: 'Ссылка на изображение товара',
            type: 'text',
            id: 'link',
            placeholder: 'Введите ссылку',
            required: true,
          },
          {
            tag: 'BaseInput',
            label: 'Цена товара',
            type: 'text',
            id: 'price',
            placeholder: 'Введите цену',
            required: true,
          },
        ];
      },
    },
  };
</script>

<style lang="scss" scoped>
  .form-adding {
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
