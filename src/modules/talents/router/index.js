const Home = () => import("../views/IndexView.vue")

const routes = [
    {
        path: "/find-talents",
        component: Home,
        name: "find-talents",
        meta: {
            layout: 'DashboardLayout',
            parent: "find-talents",
            header: "Finder"
        }
    }
]

export default routes