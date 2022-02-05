<template>
  <div class="base-input">
    <label v-if="label" class="base-input__label" :class="classes" :for="id">
      <span class="base-input__label-text">{{ label }}</span>
    </label>

    <input
      class="base-input__input"
      :type="type"
      :name="id"
      :id="id"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
  const TYPE = [
    'text',
    'button',
    'checkbox',
    'radio',
    'password',
    'submit',
    'reset',
  ];

  export default {
    name: 'BaseInput',

    props: {
      type: {
        type: String,
        required: true,
        validator: (type) => TYPE.includes(type),
      },
      id: {
        type: String,
        required: true,
      },
      placeholder: {
        type: String,
        required: true,
      },
      label: {
        type: String,
      },
      required: {
        type: Boolean,
      },
    },

    computed: {
      classes() {
        return {required: this.required};
      },
    },
  };
</script>

<style lang="scss" scoped>
  .base-input {
    &__input {
      @include input-text;

      padding: 10px 16px 11px;

      color: $mine-shaft;

      border-radius: 4px;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    }

    &__input::placeholder {
      @include input-text;

      color: $nobel;
    }

    &__input:focus {
      outline-color: $nobel;
    }

    &__label {
      @include label-text;

      margin-bottom: 4px;

      color: $gun-powder;

      &.required & {
        &-text {
          position: relative;

          &::after {
            position: absolute;
            top: 0;
            right: -4px;

            display: block;

            width: 4px;
            height: 4px;

            content: '';

            color: $geraldine;

            border-radius: 50%;
            background-color: $geraldine;
          }
        }
      }
    }
  }
</style>
