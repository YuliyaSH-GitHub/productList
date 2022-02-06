import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import './main.scss';




// const data = [
//   {},
//   {},
// ];

// const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// const KEY = 'product-application';

// const Client = {
//   load() {
//     return localStorage.getItem(KEY);
//   },

//   async save(product) {

    // await delay(300);
    // try {

    // } catch (error) {
    //   throw 
    // }

//     const data = this.load();

//     data += product;

//     localStorage.setItem(KEY, data);

//     return product;
//   },
// };

// Storage.save(data);

// export Client;

createApp(App).use(store).use(router).mount('#app');
