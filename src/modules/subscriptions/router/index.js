const Home = () => import("../views/IndexPage.vue");

const routes = [
  {
    path: "/subscriptions",
    component: Home,
    name: "subscriptions",
    meta: {
      layout: "DashboardLayout",
      parent: "subscriptions",
      header: "Subscriptions",
    },
  },
];

export default routes;
