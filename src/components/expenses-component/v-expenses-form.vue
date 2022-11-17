<template>
  <div>
    <form class="expenses-form" @submit.prevent="sendData">
      <div class="expenses-form-input">
        <label for="expensesInputName" class="expenses-form__label">Введите название расхода</label>
        <input
            type="text"
            class="expenses-form__input"
            id="expensesInputName"
            v-model="dataForm.name"
        >
      </div>
      <div class="expenses-form-input">
        <label for="expensesInputSum" class="expenses-form__label">Введите сумму расхода</label>
        <input
            type="text"
            class="expenses-form__input"
            id="expensesInputSum"
            v-model="dataForm.sum"
        >
      </div>
      <div class="expenses-form-input">
        <label for="expensesInputDate" class="expenses-form__label">Введите дату расхода</label>
        <input
            type="date"
            class="expenses-form__input"
            id="expensesInputDate"
            v-model="dataForm.date"
        >
      </div>
      <input type="submit" class="expenses-form__submit">
    </form>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "v-expenses-form",
  data() {
    return {
      dataForm: {
        name: "",
        sum: "",
        date: ""
      }
    }
  },
  methods: mapActions(["fetchExpensesPost"]),
  mounted() {
    this.fetchExpensesPost()
  }
}
</script>

<style lang="scss">

.expenses-form {
  display: flex;
  flex-direction: column;
  gap: 32px;
  height: 500px;

  .expenses-form__input {
    @include overallDimensions(100%, 40px, none, none);
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 3px solid $c-purpleness;
    background: inherit;
    outline: none;
  }
  .expenses-form__label {
    color: $c-black;
  }
  .expenses-form__submit {
    height: 40px;
    padding: 0 1em;
    border: 2px solid $c-purpleness;
    background: inherit;
    border-radius: 16px;
    color: $c-purpleness;
    cursor: pointer;

    &:hover {
      transition: all .5s linear;
      background: #C72FF8FF;
      color: $c-white;
    }
  }
}

</style>