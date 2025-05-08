import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router'
const router = createRouter({
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'index',
            component: () => import('@/components/index/HawIndex.vue')
        },
        {
            path: '/categories',
            name: 'categories',
            meta: {
                breadcrumb: 'Все товары',
                filter: true,
            },
            component: () => import('@/components/categories/HawCategoriesIndex.vue')
        },
        {
            path: '/categories/cat',
            name: 'categoriesName',
            meta: {
                breadcrumb: false
            },
            component: () => import('@/components/categories/HawCategoriesIndex.vue')
        },
    ]
})
export default router