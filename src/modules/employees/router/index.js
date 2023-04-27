const Home = () => import("../views/indexView.vue")
const CreateEmployee = () => import("../views/AddEmployee.vue")


const routes = [
    {
        path: "/employees",
        component: Home,
        name: "employees",
        meta: {
            layout: 'DashboardLayout',
            parent: "employees",
            header: "Employees"
        }
    },

    {
        path: "/create-employee",
        component: CreateEmployee,
        name: "create-employee",
        meta: {
            layout: 'DashboardLayout',
            parent: "employees",
            header: "Create New Employee"
        }
    }
]

export default routes