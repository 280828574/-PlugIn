const state = {
    name: false
};
const mutations = {
    setExampleName(state, name) {
        state.name = name;
    }
};
const actions = {
    setExampleName({ commit }, name) {
        commit('setExampleName', name);
    }
};
export default {
    state,
    mutations,
    actions
};
