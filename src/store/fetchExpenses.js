import axios from "axios";


export const fetchExpenses = {
    state: () => ({
        expensesData: []
    }),
    getters: {
        allExpensesData(state) {
            return state.expensesData
        }
    },
    mutations: {
        updateFetchExpenses(state, response) {
            response.data.forEach(item => {
                state.expensesData.push(item)
            })
        }
    },
    actions: {
       async fetchExpenses(ctx) {
           const response = await axios.get("https://bt-app-site.herokuapp.com/get/exp/");
           ctx.commit("updateFetchExpenses", response)
       }
    }
}