import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import authRotes from "./auth";
import boardRotes from "./board";
import travelRoutes from "./travel";
import galleryRoutes from "./gallery"; //배열

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: "/", name: "home", component: HomePage },
        ...authRotes,
        ...boardRotes,
        ...travelRoutes,
        ...galleryRoutes, //펼침 연산자 사용해서 배열 넣기
    ],
});

export default router;
