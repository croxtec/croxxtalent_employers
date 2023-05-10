const Redirect = () => import("../views/AuthRedirect.vue")

const routes = [
    {
        path: "/redirecting",
        component: Redirect,
        name: "redirect",
        meta: {
            layout: 'AppDefaultLayout',
            parent: "redirect"
        }
    }
]

export default routes