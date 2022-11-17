<template>
  <div class="v-index-page">
      <ui-container>
        <h1 class="index__header">Money</h1>
        <p class="index__title">
          Введите свою финансовую отчетность посредством приложения "Money"
        </p>
        <div class="center">
          <button class="index__btn" @click="$router.push('/income')">Приступить к работе</button>
        </div>
      </ui-container>
  </div>
</template>

<script>
import UiContainer from "@/components/UI/ui-container";
export default {
  name: "v-index-page",
  components: {UiContainer},
}
</script>

<style lang="scss">
  .v-index-page {
    margin-top: 100px;

    .index__header {
      @include textOptions(600, 48px, 108%, 0, $c-white);
      text-align: center;
      margin-bottom: 32px;
    }
    .index__title {
      @include textOptions(400, 24px, 108%, 0, $c-white);
      text-align: center;
      margin-bottom: 64px;
    }
    .center {
      @include flexbox(center, center, 0);

      .index__btn {
        height: 40px;
        padding: 0 1em;
        border: 2px solid #fff;
        background: inherit;
        border-radius: 16px;
        color: #fff;
        cursor: pointer;

        &:hover {
          transition: all .5s linear;
          background: #C72FF8FF;
        }
      }
    }
  }
</style>