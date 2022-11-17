import { createStore } from "vuex"

import {headerLinks} from "@/store/headerLinks";
import {fetchExpenses} from "@/store/fetchExpenses";
import {fetchExpensesPost} from "@/store/fetchExpensesPost"
import {fetchIncome} from "@/store/fetchIncome"
import {fetchIncomePost} from "@/store/fetchIncomePost"


export default createStore({
    modules: {
        headerLinks,
        fetchExpenses,
        fetchExpensesPost,
        fetchIncome,
        fetchIncomePost
    }
})