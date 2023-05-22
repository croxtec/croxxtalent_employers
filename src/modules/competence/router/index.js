import ManageCompetence from "../components/tables/ManageCompetence.vue"

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
        path: "/manage-competence",
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