import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CreateNewPostView from "../views/CreateNewPostView.vue";
import DetailedPostView from "../views/DetailedPostView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/newPost",
      name: "newPost",
      component: CreateNewPostView,
    },
    {
      path: "/detailedPost/:id",
      name: "detailedPost",
      component: DetailedPostView,
    },
  ],
});

export default router;
