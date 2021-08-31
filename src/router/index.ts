import { createRouter, createWebHashHistory } from "vue-router"
const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import('../view/home/index.vue')
    },
    {
        path: '/cssCompoment',
        name: 'cssCompoment',
        component: () => import('../view/cssCompoment/index.vue'),
    }

]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router