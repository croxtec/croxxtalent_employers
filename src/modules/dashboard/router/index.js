const Home = () => import("../views/indexView.vue")

const routes = [
    {
        path: "/",
        component: Home,
        name: "index-page",
        meta: {
            layout: 'DashboardLayout',
            parent: "dashboard",
            header: "Dashboard"
        }
    }
]

export default routes