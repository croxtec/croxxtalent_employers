const Home = () => import("../views/indexView.vue")
const CreateJobCode = () => import("../views/CreateNewCode.vue")


const routes = [
    {
        path: "/job-codes",
        component: Home,
        name: "job-codes",
        meta: {
            layout: 'DashboardLayout',
            parent: "job-codes",
            header: "Job Codes"
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