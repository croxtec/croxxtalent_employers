const Home = () => import("../views/IndexView.vue");
const CreateAssessment = () => import("../views/CreateAssessment");
const ManageAssessment = () => import("../views/_ID");

import store from "@/store";

const routes = [
  {
    path: "/assessment",
    component: Home,
    name: "assessment-page",
    meta: {
      layout: "DashboardLayout",
      parent: "assessment",
      subHeader: false,
      header: "Assessment",
    },
  },

  {
    path: "/manage-assessment/:id",
    component: ManageAssessment,
    name: "manage-assessment",
    meta: {
      layout: "DashboardLayout",
      parent: "assessment",
      subHeader: true,
      header: "Assessment",
    },
  },

  {
    path: "/create-assessment",
    component: CreateAssessment,
    name: "create-assessment-page",
    meta: {
      layout: "CreateLayouts",
      parent: "assessment",
      header: "Create Assessment",
    },
  },
];


export default routes;
