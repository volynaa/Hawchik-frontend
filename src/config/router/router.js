import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router'
const router = createRouter({
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'index',
            component: () => import('@/components/index/HawIndex.vue')
        },
    ]
})
export default router