

export const headerLinks = {
    state: () => ({
        headerLinks: [
            {id: 0, title: "Главная", link: "/"},
            {id: 0, title: "Расходы", link: "/expenses"},
            {id: 0, title: "Доходы", link: "/income"},
            {id: 0, title: "История", link: "/analytics"},
        ]
    }),
    getters: {
        allHeaderLinks(state) {
            return (state.headerLinks)
        }
    }
}