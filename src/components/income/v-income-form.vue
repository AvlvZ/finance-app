<template>
  <div>
    <form class="income-form" @submit.prevent="sendData">
      <div class="income-form-input">
        <label for="incomeInputName" class="income-form__label">Введите название расхода</label>
        <input
            type="text"
            class="income-form__input"
            id="incomeInputName"
            v-model="dataForm.name"
        >
      </div>
      <div class="income-form-input">
        <label for="incomeInputSum" class="income-form__label">Введите сумму расхода</label>
        <input
            type="text"
            class="income-form__input"
            id="incomeInputSum"
            v-model="dataForm.sum"
        >
      </div>
      <div class="income-form-input">
        <label for="incomeInputDate" class="income-form__label">Введите дату расхода</label>
        <input
            type="date"
            class="income-form__input"
            id="incomeInputDate"
            v-model="dataForm.date"
        >
      </div>
      <input type="submit" class="income-form__submit">
    </form>
  </div>
</template>

<script>

export default {
  name: "v-income-form",
  data() {
    return {
      dataForm: {
        name: "",
        sum: "",
        date: ""
      }
    }
  },
  methods: {
    async sendData() {
      const url = "https://bt-app-site.herokuapp.com/post/exp/";

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: this.dataForm.name,
          sum: this.dataForm.sum,
          date: this.dataForm.date
        })
      });

      if (!response.ok) throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response}`);
      return await response.json()
    },
  },
}
</script>

<style lang="scss">

.income-form {
  display: flex;
  flex-direction: column;
  gap: 32px;
  height: 500px;

  .income-form__input {
    @include overallDimensions(100%, 40px, none, none);
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 3px solid $c-purpleness;
    background: inherit;
    outline: none;
  }
  .income-form__label {
    color: $c-black;
  }
  .income-form__submit {
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