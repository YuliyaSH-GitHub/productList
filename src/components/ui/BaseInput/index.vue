<template>
  <div class="base-input" :class="classes" ref="baseInput">
    <label v-if="label" class="base-input__label" :for="id">
      <span class="base-input__label-text">{{ label }}</span>
    </label>

    <input
      class="base-input__input"
      :type="type"
      :name="id"
      :id="id"
      :placeholder="placeholder"
      @blur="validateInput(modelValue)"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />

    <p v-show="errorVisible" class="base-input__error">
      Поле является обязательным!
    </p>
  </div>
</template>

<script>
  const TYPE = [
    'text',
    'number',
    'button',
    'checkbox',
    'radio',
    'password',
    'submit',
    'reset',
  ];

  export default {
    name: 'BaseInput',

    emits: ['update:modelValue'],

    props: {
      modelValue: {
        type: String,
        Number,
      },
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
        default: false,
      },
    },

    data() {
      return {
        inputIsValid: true,
      };
    },

    computed: {
      classes() {
        return {
          required: this.required,
          invalid: this.errorVisible,
        };
      },

      errorVisible() {
        return this.required && !this.inputIsValid;
      },
    },

    methods: {
      validateInput(modelValue) {
        if (modelValue === '' || modelValue === null) {
          this.inputIsValid = false;
        } else {
          this.inputIsValid = true;
        }
      },
    },
  };
</script>

<style lang="scss" scoped>
  .base-input {
    position: relative;

    &.required {
      & .base-input__label-text {
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

    &.invalid & {
      &__input {
        border: 1px solid $geraldine;
      }
    }

    &__input {
      @include input-text;

      padding: 9px 16px 10px;

      color: $mine-shaft;

      border: 1px solid transparent;
      border-radius: 4px;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);

      &::placeholder {
        @include input-text;

        color: $nobel;
      }

      &:focus {
        outline-color: $nobel;
      }

      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }

    &__label {
      @include label-text;

      margin-bottom: 4px;

      color: $gun-powder;
    }

    &__error {
      @include error-text;

      position: absolute;
      left: 0;
      bottom: -14px;

      color: $geraldine;
    }
  }
</style>
