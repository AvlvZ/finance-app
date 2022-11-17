import { createRouter, createWebHashHistory } from "vue-router";

import vIndexPage from "@/pages/v-index-page";
import vExpenses from "@/pages/v-expenses-page"
import vIncome from "@/pages/v-income-page";
import vAnalytics from "@/pages/v-analytics-page";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: "/", component: vIndexPage},
        {path: "/expenses", component: vExpenses},
        {path: "/income", component: vIncome},
        {path: "/analytics", component: vAnalytics}
    ]
})