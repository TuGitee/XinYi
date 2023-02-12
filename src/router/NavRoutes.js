export default [
    {
        name: 'IllnessAnalysis',
        path: '/illness-analysis',
        component: () => import('@/pages/IllnessAnalysis'),
        meta: {
            title: '心理诊断',
            isNavShow: true,
            introduction: '心理诊断板块中提供了大量可信的心理诊断或链接测试供您或您的家人朋友进行测试及诊断。心理健康测试可以对人的心理特征、心理状况、心理发展过程、心理症状、心理功能等进行系统的观察、分析和评价，以便对人的心理健康状况进行全面的了解，从而为人的心理健康服务提供依据。本网站不对诊断或测试结果负责，仅提供相关链接，如需更为精确的诊断，请及时前往医院或相关诊疗机构就医。',
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
            introduction: '常见疾病板块中有部分常见疾病的详略介绍，包括但不限于对疾病总类及各个子类疾病的基本定义、诊断方法、社会背景、形成理论、治疗方法、亲友做法等等的介绍。数据来源于专业心理咨询师或心理疾病相关文献，经过层层筛选，为您提供更精确的资料。',
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
            introduction: '搜索疾病板块中具有搜索疾病的功能，您可以通过输入疾病名称对该疾病进行更为详尽的了解，同时若您搜索的内容并不准确，系统还会为您推荐您可能想搜的内容。对于您曾浏览过的疾病，系统会为您保留至历史搜索处，点击相关按键即可再次查看。',
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
            introduction: '心理咨询板块中提供心理咨询服务，为您提供贴心的心理咨询服务，让您体验足不出户的心理咨询服务。',
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
            introduction: '功能介绍板块中有功能介绍的介绍，包括但不限于功能板块的介绍，各个功能板块的使用方法，各个功能板块的跳转链接等等。',
            imgURL: 'assets/image/nav/function-introduction.png'
        }
    }, {
        name: 'AboutUs',
        path: '/about-us',
        component: () => import('@/pages/AboutUs'),
        meta: {
            title: '关于我们',
            isNavShow: true,
            introduction: '关于我们板块中有关于我们团队、项目特色的相关信息。我们团队是一群热爱心理学并具有丰富心理学经验的学生，我们希望通过这个项目，让更多的人了解心理学，了解自己，了解他人。',
            imgURL: 'assets/image/nav/about-us.png'
        }
    }, {
        name: 'PsychologyKnowledge',
        path: '/psychology-knowledge',
        component: () => import('@/pages/PsychologyKnowledge'),
        meta: {
            title: '心理小知识',
            isNavShow: true,
            introduction: '心理小知识板块为您提供相关心理学的知识，包括但不限于心理学的基本概念，心理学的发展历史，心理学相关的文章，心理学相关的科普性知识等等。',
            imgURL: 'assets/image/nav/psychology-knowledge.png'
        }
    },
]