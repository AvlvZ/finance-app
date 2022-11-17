import axios from "axios";


export const fetchIncome = {
    state: () => ({
        incomeData: []
    }),
    getters: {
        allIncomeDate(state) {
            return state.incomeData
        }
    },
    mutations: {
        updateFetchIncome(state, response) {
            response.data.forEach(item => {
                state.incomeData.push(item)
            })
        }
    },
    actions: {
        async fetchIncome(ctx) {
            const response = await axios.get("https://bt-app-site.herokuapp.com/get/inc/");
            ctx.commit("updateFetchIncome", response);
        }
    }
}