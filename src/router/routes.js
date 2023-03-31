import NavRoutes from './NavRoutes'

export default [
    ...NavRoutes,
    {
        name: 'IllnessDetail',
        path: '/illness-detail/:illnessId?',
        component: () => import('@/pages/IllnessDetail'),
        meta: {
            title: '疾病详情'
        }
    },
    {
        name: 'StartPage',
        path: '/',
        component: () => import('@/pages/StartPage'),
        meta: {
            title: '首页'
        }
    },
    {
        name: 'Login',
        path: '/login',
        component: () => import('@/pages/Login'),
    },
    {
        name: 'BackEnd',
        path: '/backend',
        component: () => import('@/pages/BackEnd'),
    },
    {
        path: '/*',
        component: () => import('@/pages/Error'),
    }
]