import axios from "axios";


export const fetchExpensesPost = {
    state: () => ({
        dataForm: {
            name: "",
            sum: "",
            date: "",
        }
    }),
    actions: {
        async fetchExpensesPost(ctx) {
            const response = axios("https://bt-app-site.herokuapp.com/post/exp/", {
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
            })

            ctx.commit(response)

            if (!response.ok) throw new Error(`Ошибка по адресу ${"https://bt-app-site.herokuapp.com/post/exp/"}, статус ошибки ${response}`);
            return await response.json()
        }
    }
}