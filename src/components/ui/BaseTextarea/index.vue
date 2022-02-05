<template>
  <div class="base-textarea">
    <label v-if="label" class="base-textarea__label" :for="id">
      {{ label }}
    </label>

    <textarea
      class="base-textarea__textarea"
      :name="id"
      :id="id"
      :placeholder="placeholder"
    ></textarea>
  </div>
</template>

<script>
  export default {
    name: 'BaseTextarea',

    props: {
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
    },
  };
</script>

<style lang="scss" scoped>
  .base-textarea {
    &__textarea {
      @include input-text;

      padding: 10px 16px 11px;

      color: $mine-shaft;

      border-radius: 4px;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    }

    &__textarea::placeholder {
      @include input-text;

      color: $nobel;
    }

    &__textarea {
      resize: vertical;

      min-height: 108px;
    }

    &__textarea:focus {
      outline-color: $nobel;
    }

    &__label {
      @include label-text;

      margin-bottom: 4px;

      color: $gun-powder;
    }
  }
</style>
