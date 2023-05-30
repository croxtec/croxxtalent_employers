import ManageCompetence from "../views/_ID.vue"

const Home = () => import("../views/indexView.vue")


const routes = [
    {
        path: "/competence",
        component: Home,
        name: "competence",
        meta: {
            layout: 'DashboardLayout',
            parent: "competence",
            header: "Competence"
        }
    },

    {
        path: "/manage-competence/:id",
        component: ManageCompetence,
        name: "manage-competence",
        meta: {
            layout: 'DashboardLayout',
            parent: "competence",
            header: "Competence"
        }
    },

   
]

export default routes