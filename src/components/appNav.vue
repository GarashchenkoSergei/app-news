<template>
  <div class="nav" :class="{ nav_active: burgerActive }">
    <v-navigation-drawer permanent>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Новости
          </v-list-item-title>
          <v-list-item-subtitle>
            Топ новостей в США
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item
          v-for="item in navItems"
          :key="item.name"
          link
          :to="item.path"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      navItems: [
        {
          name: "Главная",
          path: "/main",
          icon: "mdi-home"
        },
        {
          name: "Настройки",
          path: "/settings",
          icon: "mdi-settings"
        },
        {
          name: "Помощь",
          path: "/help",
          icon: "mdi-help-circle"
        },
        {
          name: "О нас",
          path: "/about",
          icon: "mdi-information"
        }
      ]
    };
  },
  computed: {
    ...mapState("menu", {
      burgerActive: state => state.burgerActive
    })
  }
};
</script>

<style scoped lang="scss">
@import "../styles/mixins.scss";

.nav {
  width: 23%;
  min-height: 100vh;
  z-index: 1;
  transition: 0.7s;

  @include mobile {
    position: absolute;
    left: -600px;
    width: 60%;
    height: 300px;
  }
}

.nav_active {
  left: 0px;
}
</style>
