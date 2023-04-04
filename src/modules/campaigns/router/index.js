const Home = () => import("../views/indexView.vue")

const routes = [
    {
        path: "/campaigns",
        component: Home,
        name: "campaigns",
        meta: {
            layout: 'DashboardLayout',
            parent: "campaigns",
            header: "Campaigns"
        }
    }
]

export default routes