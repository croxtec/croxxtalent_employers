import Vue from "vue";
import VueRouter from "vue-router";

// Modules
import DashboardRoutes from '@/modules/dashboard/router'
import Campaigns from '@/modules/campaigns/router'
import Assessment from '@/modules/assessment/router'
import TalentFinder from '@/modules/talents/router'

Vue.use(VueRouter);

const routes = [
 
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes.concat(DashboardRoutes, Campaigns, Assessment, TalentFinder)
});

export default router;
