const Home = () => import("../views/IndexView.vue")

const routes = [
    {
        path: "/assessment",
        component: Home,
        name: "assessment-page",
        meta: {
            layout: 'DashboardLayout',
            parent: "assessment",
            header: "Assessment"
        }
    }
]

export default routes