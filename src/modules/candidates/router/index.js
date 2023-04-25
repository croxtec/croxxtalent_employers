const Home = () => import("../views/indexView.vue")
const CreateJobCode = () => import("../views/CreateNewCode.vue")


const routes = [
    {
        path: "/candidates",
        component: Home,
        name: "candidates",
        meta: {
            layout: 'DashboardLayout',
            parent: "candidates",
            header: "Candidates"
        }
    },

    {
        path: "/create-code",
        component: CreateJobCode,
        name: "create-code",
        meta: {
            layout: 'DashboardLayout',
            parent: "job-codes",
            header: "Create New Job Code"
        }
    }
]

export default routes