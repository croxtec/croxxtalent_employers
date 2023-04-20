const Home = () => import("../views/indexView.vue")
const CreateJobCode = () => import("../views/CreateNewCode.vue")


const routes = [
    {
        path: "/employees",
        component: Home,
        name: "employees",
        meta: {
            layout: 'DashboardLayout',
            parent: "employees",
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