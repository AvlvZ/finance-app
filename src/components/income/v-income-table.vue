<template>
  <div class="table">
    <v-table-header  />
    <div class="row" v-for="item in allIncomeDate" :key="item.id">
      <div class="col">{{item.id}}</div>
      <div class="col">{{item.name}}</div>
      <div class="col">{{item.sum}}</div>
      <div class="col">{{item.date}}</div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";
import vTableHeader from "@/components/v-table-header"

export default {
  name: "v-expenses-table",
  components: {vTableHeader},
  computed: mapGetters(["allIncomeDate"]),
  methods: mapActions(["fetchIncome"]),
  mounted() {
    this.fetchIncome();
  }
}
</script>

<style lang="scss">
.table {
  @include overallDimensions(100%, 100%, none, none);

  .row {
    @include grid(0.4fr 5fr 1fr 1fr, none, 0);
    @include overallDimensions(100%, 40px, none, none);
    align-items: center;
    padding: 0 1em;

    &:nth-child(2n+1) {
      background: $c-grey;
    }
    .col {
      @include textOptions(300, 18px, 108%, 0, $c-black);
    }
  }
}
</style>