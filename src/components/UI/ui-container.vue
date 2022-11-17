<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ui-container"
}
</script>

<style scoped>
.container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
}
</style>