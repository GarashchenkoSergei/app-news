export default {
  namespaced: true,
  state: {
    fontSize: "",
    newsAmmount: "5"
  },
  mutations: {
    SET_FONTSIZE_STATE: (state, fontSize) => (state.fontSize = fontSize),
    SET_NEWSAMMOUNT_STATE: (state, value) => (state.newsAmmount = value)
  },
  actions: {
    setFontSize({ commit }, fontSize) {
      commit("SET_FONTSIZE_STATE", fontSize);
    },
    setNewsAmmount({ commit }, value) {
      commit("SET_NEWSAMMOUNT_STATE", value);
    }
  },
  modules: {}
};
