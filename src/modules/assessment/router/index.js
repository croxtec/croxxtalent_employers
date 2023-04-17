const Home = () => import("../views/IndexView.vue")
const CreateAssessment = () => import("../views/CreateAssessment")


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
    },
    {
        path: "/create-assessment",
        component: CreateAssessment,
        name: "create-assessment-page",
        meta: {
            layout: 'CreateLayouts',
            parent: "assessment",
            header: "Create Assessment"
        }
    }
]

export default routes