const Redirect = () => import("../views/AuthRedirect.vue")
const ComingSoon = () => import("../views/ComingSoon.vue")

const routes = [
    {
        path: "/redirecting",
        component: Redirect,
        name: "redirect",
        meta: {
            layout: 'AppDefaultLayout',
            parent: "redirect"
        }
    },

    {
        path: "/coming-soon",
        component: ComingSoon,
        name: "coming-soon",
        meta: {
          layout: "DashboardLayout",
            header: "Coming Soon"
        },
      },
]

export default routes