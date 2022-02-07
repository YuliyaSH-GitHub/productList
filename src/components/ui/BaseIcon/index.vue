<template>
  <svg class="base-icon" xmlns="http://www.w3.org/2000/svg">
    <title v-if="title">{{ title }}</title>
    <use :xlink:href="iconPath" xmlns:xlink="http://www.w3.org/1999/xlink" />
  </svg>
</template>

<script>
  export default {
    name: 'BaseIcon',

    props: {
      name: {
        type: String,
        required: true,
      },

      title: {
        type: String,
        default: null,
      },
    },

    computed: {
      iconPath() {
        let icon = require(`@/assets/icons/svg/${this.name}.svg`);
        if (Object.prototype.hasOwnProperty.call(icon, 'default')) {
          icon = icon.default;
        }

        return icon.url;
      },
    },
  };
</script>

<style>
  .base-icon {
    display: block;

    height: 16px;
    width: 16px;
  }
</style>
