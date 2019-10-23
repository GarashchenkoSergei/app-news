<template>
  <div class="container" :style="`font-size: ${fontSize}`">
    <v-app id="app">
      <div class="wrapper">
        <app-nav></app-nav>
        <app-content></app-content>
      </div>
    </v-app>
  </div>
</template>

<script>
import appNav from "./components/appNav";
import appContent from "./components/appContent";
import { mapState } from "vuex";

export default {
  name: "app",
  components: {
    appNav,
    appContent
  },
  computed: {
    ...mapState("settings", {
      fontSize: state => state.fontSize
    })
  }
};
</script>

<style lang="scss">
body {
  -webkit-font-smoothing: antialiased;
  background: #f5f5f5;
  margin: 0;
}

ul {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

* {
  box-sizing: border-box;
}

#app {
  width: 100%;
}
.v-applicatioon--wrap {
  flex-direction: row;
}

.wrapper {
  display: flex;
  flex-direction: row;
}
</style>
