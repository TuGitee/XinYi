import axios from "axios"
axios.defaults.baseURL = '/api'
axios.defaults.headers.get['Content-Type'] = 'application/json;charset=utf-8'


const state = {
    analysisList: [],
}
const mutations = {
    setAnalysisList(state, analysisList) {
        state.analysisList = analysisList
    }
}
const actions = {
    async getAnalysisList({ commit }) {
        const { data } = await axios.get('/analysis.json')
        commit('setAnalysisList', data)
    }
}
const getters = {
    analysisList(state) {
        return state.analysisList
    },
    analysisListRandom(state) {
        const links = state.analysisList.reduce((pre, cur) => {
            return pre.concat(cur.links);
        }, []);
        return links.sort(() => Math.random() - 0.5).slice(0, 5);
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}