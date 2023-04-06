const Home = () => import("../views/indexView.vue")
const CreateCampaign = () => import("../views/CreateCampaign.vue")


const routes = [
    {
        path: "/campaigns",
        component: Home,
        name: "campaigns",
        meta: {
            layout: 'DashboardLayout',
            parent: "campaigns",
            header: "Campaigns"
        }
    },

    {
        path: "/create-campaign",
        component: CreateCampaign,
        name: "create-campaign",
        meta: {
            layout: 'DashboardLayout',
            parent: "campaigns",
            header: "Create Campaign"
        }
    }
]

export default routes