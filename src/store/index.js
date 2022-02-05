import {createStore} from 'vuex';

export default createStore({
  state: {
    products: [
      {
        id: 0,
        name: 'Наименование товара',
        description:
          'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
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
  },

  // getters: {
  //   products(state) {
  //     return state.products;
  //   },
  // },
  mutations: {},
  actions: {},
  modules: {},
});
