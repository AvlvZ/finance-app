<template>
  <div class="row">
    <div class="col-hd">№</div>
    <div class="col-hd">Наименование</div>
    <div class="col-hd">Сумма</div>
    <div class="col-hd">Дата</div>
  </div>
</template>

<script>
export default {
  name: "v-expenses-table-header"
}
</script>

<style lang="scss" scoped>
.row {
  @include grid(0.4fr 5fr 1fr 1fr, none, 0);
  @include overallDimensions(100%, 40px, none, none);
  align-items: center;
  background: $c-grey;
  padding: 0 1em;

  .col-hd {
    @include textOptions(300, 18px, 108%, 0, $c-black);
  }
}
</style>