<template>
  <ul class="products-list">
    <BaseCard
      v-for="product in products"
      :key="product.id"
      class="products-list__item"
      :name="product.name"
      :description="product.description"
      :link="product.link"
      :price="product.price"
    />
  </ul>
</template>

<script>
  //   import {mapGetters} from 'vuex';

  import BaseCard from '@/components/ui/BaseCard';

  export default {
    name: 'ProductsList',

    components: {
      BaseCard,
    },

    data() {
      return {
        productsInitial: [
          {
            id: 0,
            name: 'Наименование товара',
            link: 'https://placeimg.com/640/480/tech',
            price: '10 000',
          },
          {
            id: 1,
            name: 'Наименование товара',
            description:
              'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
            link: 'https://placeimg.com/640/480/tech',
            price: '10 000',
          },
          {
            id: 2,
            name: 'Наименование товара',
            description:
              'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
            link: 'https://placeimg.com/640/480/tech',
            price: '10 000',
          },
          {
            id: 3,
            name: 'Наименование товара',
            description:
              'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
            link: 'https://placeimg.com/640/480/tech',
            price: '10 000',
          },
        ],
      };
    },
    computed: {
      products() {
        return this.productsInitial;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .products-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 16px;
  }
</style>
