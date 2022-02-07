const KEY = 'products';

const productsInitial = [
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
    price: '8 000',
  },
  {
    id: 2,
    name: 'Наименование товара',
    description:
      'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
    link: 'https://placeimg.com/640/480/tech',
    price: '7 000',
  },
  {
    id: 3,
    name: 'Наименование товара',
    description:
      'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
    link: 'https://placeimg.com/640/480/tech',
    price: '9 000',
  },
];

const Client = {
  load() {
    let value = localStorage.getItem(KEY);

    if (typeof value === 'undefined' || value === null) {
      return productsInitial;
    }

    return JSON.parse(value);
  },

  save(product) {
    let data = this.load();

    let payload = data.concat(product);

    localStorage.setItem(KEY, JSON.stringify(payload));

    return payload;
  },

  updateLocalStorage(products) {
    localStorage.setItem(KEY, JSON.stringify(products));
  },
};

export default Client;
