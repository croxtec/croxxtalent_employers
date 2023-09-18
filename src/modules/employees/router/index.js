const Home = () => import("../views/indexView.vue")
const CreateEmployee = () => import("../views/AddEmployee.vue")
const ViewEmployee = () => import("../views/_ID.vue")


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
    },

    {
        path: "/employee/:id",
        component: ViewEmployee,
        name: "employee-details",
        meta: {
            layout: 'DashboardLayout',
            parent: "employees",
            header: "Employee Details"
        }
    }
]

export default routes