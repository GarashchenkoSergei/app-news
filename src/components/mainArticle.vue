<template>
  <div class="article">
    <div class="article__content">
      <h3 class="article__header">{{ article.title }}</h3>
      <p class="article__text">{{ article.description }}</p>
      <span class="article__date">{{ article.publishedAt.slice(0, 10) }}</span>
    </div>
    <div class="article__picture">
      <img
        :src="`${article.urlToImage}`"
        class="article__picture-img"
        @click="sizeToggle"
      />
    </div>
    <v-btn small color="blue" @click="goBack" class="return">Назад</v-btn>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("news", {
      article: state => state.article
    })
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    sizeToggle() {
      let picture = document.querySelector(".article__picture-img");
      picture.classList.toggle("article__picture-img_active");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/mixins.scss";

.article {
  padding: 20px;
}

.article__header {
  margin-bottom: 20px;
}

.article__picture-img {
  max-width: 300px;
  margin: 20px 0;
  cursor: pointer;
  transition: 0.6s;

  @include mobile {
    max-width: 220px;
  }
}

.article__picture-img_active {
  max-width: 100%;
}
</style>
