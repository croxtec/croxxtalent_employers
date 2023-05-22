import Vue from "vue";
import VueRouter from "vue-router";

// Modules
import DashboardRoutes from "@/modules/dashboard/router/index.js";
import Campaigns from "@/modules/campaigns/router";
import Assessment from "@/modules/assessment/router";
import TalentFinder from "@/modules/talents/router";
import JobCodes from "@/modules/job-codes/router";
import Employees from "@/modules/employees/router";
import Candidates from "@/modules/candidates/router"

import Competence from "@/modules/competence/router"

import Middleware from "@/middleware/router"

Vue.use(VueRouter);

const routes = [];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes.concat(
    DashboardRoutes,
    Campaigns,
    Assessment,
    TalentFinder,
    JobCodes,
    Employees,
    Candidates,
    Middleware, 
    Competence
  ),
});

export default router;
