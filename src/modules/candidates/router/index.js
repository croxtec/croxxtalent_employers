import CandidateCV from "../views/CandidateCV.vue"

const Home = () => import("../views/indexView.vue")


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
        path: "/candidate/cv",
        component: CandidateCV,
        name: "candidate-cv",
        meta: {
            layout: 'DashboardLayout',
            parent: "candidates",
            header: "View Candidate CV"
        }
    }
]

export default routes