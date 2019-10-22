export default {
  namespaced: true,
  state: {
    burgerActive: false
  },
  mutations: {
    SET_BURGER_STATE: (state, value) => (state.burgerActive = value)
  },
  actions: {
    burgerClickedSend({ commit }, value) {
      commit("SET_BURGER_STATE", value);
    },
    contentClickedSend({ commit }, value) {
      commit("SET_BURGER_STATE", value);
    }
  },
  modules: {}
};
