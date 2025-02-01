import { createRouter, createWebHistory } from 'vue-router'
import Empresas from './views/Empresas.vue'
import Articulos from './views/Articulos.vue'
import Colaboradores from './views/Colaboradores.vue'

const routes = [
    {
        path: '/',
        redirect: '/empresas'
    },
    {
        path: '/empresas',
        name: 'empresas',
        component: Empresas
    },
    {
        path: '/articulos',
        name: 'articulos',
        component: Articulos
    },
    {
        path: '/colaboradores',
        name: 'colaboradores',
        component: Colaboradores
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router