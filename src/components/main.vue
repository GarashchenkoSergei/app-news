<template>
  <div class="news">
    <div class="news__filter">
      <v-menu
        v-model="menu"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="date"
            label="Фильтр по дате"
            prepend-icon="event"
            readonly
            v-on="on"
            class="news__filter-input"
          ></v-text-field>
        </template>
        <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
      </v-menu>
      <v-btn small color="white" @click="resetFilterDate">Сбросить</v-btn>
    </div>
    <ul class="news__list">
      <li
        class="news__item"
        v-for="article in paginatedData"
        v-bind:key="articles.indexOf(article)"
        @click="showArticle(article)"
      >
        <router-link
          tag="article"
          to="/main/article"
          class="news__item-article"
        >
          <div class="article__picture">
            <img :src="`${article.urlToImage}`" class="article__picture-img" />
          </div>
          <div class="article__content">
            <h3 class="article__header">{{ article.title }}</h3>
            <p class="article__text">{{ article.description }}</p>
            <span class="article__date">{{
              article.publishedAt.slice(0, 10)
            }}</span>
          </div>
        </router-link>
      </li>
    </ul>
    <v-pagination
      v-model="page"
      :length="pagesAmmountCount"
      :next-icon="nextIcon"
      :prev-icon="prevIcon"
      :page="page"
      color="blue"
    ></v-pagination>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data: () => ({
    date: "",
    menu: false,
    page: 1,
    articlesAmmountOnPage: 5,
    nextIcon: "navigate_next",
    nextIcons: "mdi-chevron-right",
    prevIcon: "navigate_before",
    prevIcons: "mdi-chevron-left"
  }),
  computed: {
    ...mapState("news", {
      articles: state => state.articles
    }),
    filteredArticles: function() {
      return this.articles.filter(article => {
        let newsDate = article.publishedAt.slice(0, 10);
        return newsDate.match(this.date);
      });
    },
    pagesAmmountCount: function() {
      let newsArticles = this.filteredArticles.length;
      let pageSize = this.articlesAmmountOnPage;
      return Math.ceil(newsArticles / pageSize);
    },
    paginatedData() {
      const start = (this.page - 1) * this.articlesAmmountOnPage;
      const end = start + this.articlesAmmountOnPage;
      return this.filteredArticles.slice(start, end);
    }
  },
  created() {
    this.collectNews();
  },
  methods: {
    ...mapActions("news", ["fetchNews", "renderArticle"]),
    async collectNews() {
      try {
        await this.fetchNews();
      } catch (error) {
        alert("Ошибка при загрузке новостей");
      }
    },
    showArticle(article) {
      this.renderArticle(article);
    },
    resetFilterDate() {
      this.date = "";
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/mixins.scss";

.news {
  padding: 20px;
}

.news__filter {
  display: flex;
  align-items: center;
  width: 300px;
  margin-bottom: 15px;

  @include mobile {
    flex-direction: column;
    align-items: start;
  }
}

.news__filter-input {
  margin-right: 20px;
}

.news__list {
  padding: 0;
}

.news__item {
  padding: 10px;
  margin-bottom: 10px;
  border: 2px solid transparent;
  border-bottom: 2px solid #e0e0e0;

  &:hover {
    border: 2px solid #1e88e5;
    border-radius: 5px;
    cursor: pointer;
  }
}

.article__picture-img {
  max-width: 300px;

  @include mobile {
    max-width: 220px;
  }
}
</style>
