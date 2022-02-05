<template>
  <div class="main-container">
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'MainContainer',
  };
</script>

<style lang="scss" scoped>
  .main-container {
    width: 100%;
    height: 100%;
    max-width: $window-width-desktop;
    margin: 0 auto;
  }
</style>
