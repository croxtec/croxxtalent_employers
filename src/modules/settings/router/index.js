const Home = () => import("../views/IndexPage.vue");

const routes = [
  {
    path: "/settings",
    component: Home,
    name: "settings",
    meta: {
      layout: "DashboardLayout",
      parent: "settings",
      header: "Settings",
    },
  },
];

export default routes;
