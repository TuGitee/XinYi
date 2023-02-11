export default [
    {
        name: 'IllnessAnalysis',
        path: '/illness-analysis',
        component: () => import('@/pages/IllnessAnalysis'),
        meta: {
            title: '心理诊断',
            isNavShow: true,
            introduction: '心理诊断是指通过心理学方法，对人的心理特征、心理状况、心理发展过程、心理症状、心理功能等进行系统的观察、分析和评价，以便对人的心理健康状况进行全面的了解，从而为人的心理健康服务提供依据。',
            imgURL: 'assets/image/nav/illness-analysis.png'
        }
    },

    {
        name: 'NormalIllness',
        path: '/normal-illness',
        component: () => import('@/pages/NormalIllness'),
        meta: {
            title: '常见疾病',
            isNavShow: true,
            introduction: '常见疾病板块中有常见疾病的介绍，包括但不限于疾病的症状，病因，治疗方法等等。',
            imgURL: 'assets/image/nav/normal-illness.png'
        }
    },
    {
        name: 'SearchIllness',
        path: '/search-illness',
        component: () => import('@/pages/SearchIllness'),
        meta: {
            title: '搜索疾病',
            isNavShow: true,
            introduction: '搜索疾病板块中有搜索疾病的功能，可以通过输入疾病名称，搜索疾病的介绍。',
            imgURL: 'assets/image/nav/search-illness.png'
        }
    },
    {
        name: 'PsychologyConsult',
        path: '/psychology-consult',
        component: () => import('@/pages/PsychologyConsult'),
        meta: {
            title: '心理咨询',
            isNavShow: true,
            introduction: '心理咨询板块中提供心理咨询服务，为您提供贴心的心理咨询服务，让您体验足不出户的心理咨询服务',
            imgURL: 'assets/image/nav/psychology-consult.png'
        }
    },
    {
        name: 'FunctionIntroduction',
        path: '/function-introduction',
        component: () => import('@/pages/FunctionIntroduction'),
        meta: {
            title: '功能介绍',
            isNavShow: true,
            introduction: '功能介绍板块中有功能介绍的介绍，包括但不限于功能介绍的功能，功能介绍的使用方法等等。',
            imgURL: 'assets/image/nav/function-introduction.png'
        }
    }, {
        name: 'AboutUs',
        path: '/about-us',
        component: () => import('@/pages/AboutUs'),
        meta: {
            title: '关于我们',
            isNavShow: true,
            introduction: '关于我们板块中有关于我们团队的信息，包括但不限于团队成员及分工，联系方式等等。我们是一群热爱心理学的学生，我们希望通过这个项目，让更多的人了解心理学，了解自己，了解他人。',
            imgURL: 'assets/image/nav/about-us.png'
        }
    }, {
        name: 'PsychologyKnowledge',
        path: '/psychology-knowledge',
        component: () => import('@/pages/PsychologyKnowledge'),
        meta: {
            title: '心理小知识',
            isNavShow: true,
            introduction: '心理小知识板块中有心理学的知识，包括但不限于心理学的基本概念，心理学的发展历史，心理学的分支等等。',
            imgURL: 'assets/image/nav/psychology-knowledge.png'
        }
    },
]