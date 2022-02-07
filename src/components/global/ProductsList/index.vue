<template>
  <ul class="products-list">
    <BaseCard
      v-for="(product, idx) in products"
      :key="product.id"
      class="products-list__item"
      :name="product.name"
      :description="product.description"
      :link="product.link"
      :price="product.price"
      @delete="removeProduct(idx)"
    />
  </ul>
</template>

<script>
  import BaseCard from '@/components/ui/BaseCard';

  export default {
    name: 'ProductsList',

    components: {
      BaseCard,
    },

    computed: {
      products() {
        return this.$store.getters['products'];
      },
    },

    created() {
      this.loadProducts();
    },

    methods: {
      async loadProducts() {
        await this.$store.dispatch('load');
      },

      async removeProduct(index) {
        await this.$store.dispatch('delete', index);
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
