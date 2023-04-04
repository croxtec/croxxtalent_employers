const Home = () => import("../views/indexView.vue")

const routes = [
    {
        path: "/",
        component: Home,
        name: "index-page",
        meta: {
            layout: 'DashboardLayout',
            parent: "dashboard"
        }
    }
]

export default routes