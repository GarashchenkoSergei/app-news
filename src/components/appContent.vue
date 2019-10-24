<template>
  <div class="content" @click="contentClicked">
    <v-app-bar-nav-icon
      class="burger-menu"
      @click.stop="burgerClicked"
    ></v-app-bar-nav-icon>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions("menu", ["burgerClickedSend", "contentClickedSend"]),
    burgerClicked() {
      this.burgerClickedSend(true);
    },
    contentClicked() {
      this.contentClickedSend(false);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/mixins.scss";

.content {
  width: 100%;
}

.burger-menu {
  display: none;

  @include mobile {
    display: block;
    margin: 20px 0 0 20px;
  }
}
</style>
