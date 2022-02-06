import { createStore } from 'vuex';

import storage from '@/storage';

export default createStore({
  state() {
    return {
      products: [],
    };
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
  },

  actions: {
    async load({ commit }) {
      try {
        const content = await storage.load();

        commit('setProducts', content);

        return content;
      } catch (error) {
        console.log(error);
      }
    },

    async update({ commit }, product) {
      try {
        const content = await storage.save(product);

        commit('setProducts', content);

        return content;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
