<template>
  <div class="content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ui-content"
}
</script>

<style scoped>
  .content  {
    padding: 32px;
    border-radius: 32px;
    background: #eee;
  }
</style>