<template>
  <div class="base-input" :class="classes" ref="baseInput">
    <label v-if="label" class="base-input__label" :for="id">
      <span class="base-input__label-text">{{ label }}</span>
    </label>

    <input
      v-model="modelValue"
      class="base-input__input"
      :type="type"
      :name="id"
      :id="id"
      :placeholder="placeholder"
      @blur="validateInput"
    />

    <p v-if="errorVisible" class="base-input__error">
      Поле является обязательным!
    </p>
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

    emits: ['update:modelValue'],

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
        default: false,
      },
    },

    data() {
      return {
        modelValue: '',
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
      validateInput() {
        if (this.modelValue === '') {
          this.inputIsValid = false;
        } else {
          this.inputIsValid = true;
        }

        this.$emit('update:modelValue', this.modelValue);
      },
    },
  };
</script>

<style lang="scss" scoped>
  .base-input {
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
    }

    &__error {
      @include error-text;

      margin-top: 4px;

      color: $geraldine;
    }
  }
</style>
