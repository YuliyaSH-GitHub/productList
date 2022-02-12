import {createStore} from 'vuex';
import storage from '@/storage';

export default createStore({
  state: {
    products: [],
  },

  getters: {
    products(state) {
      return state.products;
    },
  },

  mutations: {
    setProducts(state, data) {
      state.products = data;
    },

    sortIncrease(state) {
      return state.products.sort(
        (a, b) =>
          parseFloat(a.price.replace(/[^0-9.]/gim, '')) -
          parseFloat(b.price.replace(/[^0-9.]/gim, ''))
      );
    },

    sortDecrease(state) {
      return state.products.sort(
        (a, b) =>
          parseFloat(b.price.replace(/[^0-9.]/gim, '')) -
          parseFloat(a.price.replace(/[^0-9.]/gim, ''))
      );
    },

    sortName(state) {
      const collator = new Intl.Collator('ru');
      return state.products.sort((a, b) => collator.compare(a.name, b.name));
    },
  },

  actions: {
    async load({commit}) {
      try {
        const content = await storage.load();

        commit('setProducts', content);

        return content;
      } catch (error) {
        console.log(error);
      }
    },

    async update({commit}, product) {
      try {
        const content = await storage.save(product);

        commit('setProducts', content);

        return content;
      } catch (error) {
        console.log(error);
      }
    },

    async delete({commit, getters}, index) {
      try {
        let items = getters.products;

        items.splice(index, 1);

        storage.updateLocalStorage(items);

        commit('setProducts', items);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
