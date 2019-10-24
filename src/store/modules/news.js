export default {
  namespaced: true,
  state: {
    articles: [],
    article: {}
  },
  mutations: {
    SET_ARTICLES_STATE: (state, articles) => (state.articles = articles),
    RENDER_ARTICLE_STATE: (state, article) => (state.article = article)
  },
  actions: {
    async fetchNews({ commit }) {
      try {
        let response = await fetch(
          "https://newsapi.org/v2/top-headlines?country=us&apiKey=7ed3bea7ba80489198a4a262318ed307"
        );
        let result = await response.json();

        commit("SET_ARTICLES_STATE", result.articles);
      } catch {
        alert("Ошибка при загрузке новостей");
      }
    },
    renderArticle({ commit }, article) {
      commit("RENDER_ARTICLE_STATE", article);
    }
  },
  modules: {}
};
