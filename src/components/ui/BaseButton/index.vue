<template>
  <button class="base-button" :class="classes" :type="type">
    <slot />
  </button>
</template>

<script>
  const TYPE = ['button', 'submit', 'reset'];

  export default {
    name: 'BaseButton',

    props: {
      type: {
        type: String,
        required: true,
        validator: (type) => TYPE.includes(type),
      },
    },

    computed: {
      classes() {
        return {[this.type]: !!this.type};
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
      color: $nobel;

      background-color: $gallery;

      &.active {
        color: $white;

        background-color: $chelsea-cucumber;

        &:hover {
          background-color: $chelsea-cucumber-hover;
        }
      }

      &:disabled {
        color: $nobel;

        background-color: $gallery;
      }
    }
  }
</style>
