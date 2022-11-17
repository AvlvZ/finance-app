<template>
  <button class="link">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ui-link"
}
</script>

<style scoped>
  .link {
    background: inherit;
    border: none;
    cursor: pointer;
  }
</style>