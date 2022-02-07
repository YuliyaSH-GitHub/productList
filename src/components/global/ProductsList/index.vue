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
  import {mapState} from 'vuex';

  import BaseCard from '@/components/ui/BaseCard';

  export default {
    name: 'ProductsList',

    components: {
      BaseCard,
    },

    computed: {
      ...mapState(['products']),
    },

    created() {
      this.loadProducts();
    },

    methods: {
      loadProducts() {
        this.$store.dispatch('load');
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
