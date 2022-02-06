<template>
  <button
    class="base-button"
    :class="classes"
    :type="type"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script>
  const TYPE = ['button', 'submit', 'reset'];

  export default {
    name: 'BaseButton',

    props: {
      disabled: {
        type: Boolean,
        default: true,
      },
      type: {
        type: String,
        required: true,
        validator: (type) => TYPE.includes(type),
      },
      active: {
        type: Boolean,
        default: false,
      },
    },

    computed: {
      classes() {
        return {[this.type]: !!this.type, active: this.active};
      },
    },
  };
</script>

<style lang="scss" scoped>
  .base-button {
    @include button-text;

    margin-top: 24px;
    padding: 10px 10px 11px;

    text-align: center;

    border-radius: 10px;

    &.submit {
      color: $white;

      background-color: $chelsea-cucumber;

      &:hover {
        background-color: $chelsea-cucumber-hover;
      }

      // &.active {

      // }

      &:disabled {
        color: $nobel;

        background-color: $gallery;
      }
    }
  }
</style>
