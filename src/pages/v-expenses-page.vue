<template>
  <div class="expenses">
    <h1 class="expenses__header">Добавить расходы</h1>
    <div class="expenses__grid">
      <ui-content>
        <v-expenses-form />
      </ui-content>
      <ui-content>
        <v-expenses-table />
      </ui-content>
    </div>
  </div>
</template>

<script>
import UiContent from "@/components/UI/ui-content";
import VExpensesForm from "@/components/expenses-component/v-expenses-form";
import VExpensesTable from "@/components/expenses-component/v-expenses-table";
export default {
  name: "v-expenses-page",
  components: {VExpensesTable, VExpensesForm, UiContent},
}
</script>

<style lang="scss">
  .expenses {
    padding: 32px 100px;

    .expenses__header {
      margin-top: 64px;
      margin-bottom: 64px;
      text-align: center;
    }
    .expenses__grid {
      @include grid(1fr 4fr, none, 100px);
    }
  }
</style>