import NavRoutes from './NavRoutes'
import IllnessDetail from '@/pages/IllnessDetail'
import StartPage from '@/pages/StartPage'
import Error from '@/pages/Error'

export default [
    ...NavRoutes,
    {
        name: 'IllnessDetail',
        path: '/illness-detail/:illnessId?',
        component: IllnessDetail,
        meta: {
            title: '疾病详情'
        }
    },
    {
        name: 'StartPage',
        path: '/',
        component: StartPage,
        meta: {
            title: '首页'
        }
    },
    {
        path: '/*',
        component: Error,
    }
]