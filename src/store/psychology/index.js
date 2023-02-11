import axios from "axios"
axios.defaults.baseURL = '/api'
axios.defaults.headers.get['Content-Type'] = 'application/json;charset=utf-8'

const state = {
    psychologyList: [],
}
const mutations = {
    setPsychologyList(state, psychologyList) {
        state.psychologyList = psychologyList
    }
}
const actions = {
    async getPsychologyList({ commit }) {
        const { data } = await axios.get('/psychology.json')
        commit('setPsychologyList', data)
    }
}
const getters = {
    psychologyList(state) {
        return state.psychologyList
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}