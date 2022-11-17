<template>
  <div class="income">
    <h1 class="income__header">Добавить доходы</h1>
    <div class="income__grid">
      <ui-content>
        <v-income-form />
      </ui-content>
      <ui-content>
        <v-income-table />
      </ui-content>
    </div>
  </div>
</template>

<script>
import UiContent from "@/components/UI/ui-content";
import VIncomeForm from "@/components/income/v-income-form";
import vIncomeTable from "@/components/income/v-income-table"
export default {
  name: "v-income-page",
  components: {VIncomeForm, UiContent, vIncomeTable}
}
</script>

<style lang="scss">
.income {
  padding: 32px 100px;

  .income__header {
    margin-top: 64px;
    margin-bottom: 64px;
    text-align: center;
  }
  .income__grid {
    @include grid(1fr 4fr, none, 100px);
  }
}
</style>