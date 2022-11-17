<template>
  <div class="analytics">
    <ui-container>
      <h1 class="analytics__header">История</h1>
      <div class="analytics__grid">
        <ui-content>
          <BarChartExpenses />
        </ui-content>
        <ui-content>
          <BarChartIncome />
        </ui-content>
      </div>
    </ui-container>
  </div>
</template>

<script>
import UiContainer from "@/components/UI/ui-container";
import UiContent from "@/components/UI/ui-content";
import BarChartExpenses from '@/components/charts/BarChartExpenses'
import BarChartIncome from '@/components/charts/BarChartIncome'

export default {
  name: "v-analytics-page",
  components: {UiContent, UiContainer, BarChartExpenses, BarChartIncome}
}
</script>

<style lang="scss">
.analytics {
  padding: 32px 100px;

  .analytics__header {
    @include textOptions(600, 24px, 108%, 0, $c-white);
    margin-bottom: 32px;
    text-align: center;
  }
  .analytics__grid {
    @include grid(1fr 1fr, none, 32px)
  }
}
</style>