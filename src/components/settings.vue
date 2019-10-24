<template>
  <div class="settings">
    <div class="settings-item">
      <div class="settings-item__theme item">
        <div class="settings-item__theme-name name">Тема оформления:</div>
        <v-select
          v-model="theme"
          :items="themes"
          outlined
          label="light/dark"
          class="settings-item__theme-switch switch"
          @change="themeChange"
        ></v-select>
      </div>
      <div class="settings-item__font item">
        <div class="settings-item__font-name name">Размер шрифта:</div>
        <v-select
          v-model="size"
          @change="sizeChange"
          :items="sizes"
          outlined
          label="шрифт"
          class="settings-item__font-switch switch"
        ></v-select>
      </div>
      <div class="settings-item__ammount item">
        <div class="settings-item__ammount-name name">
          Новостей на странице:
        </div>
        <v-select
          v-model="newsDef"
          @change="newsChange"
          :items="news"
          outlined
          label="новостей"
          class="settings-item__ammount-switch switch"
        ></v-select>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      themes: ["light", "dark"],
      sizes: ["средний", "крупный"],
      news: ["5", "10"],
      theme: "",
      size: "",
      newsDef: ""
    };
  },
  methods: {
    ...mapActions("settings", ["setFontSize", "setNewsAmmount"]),
    themeChange() {
      if (this.theme == "dark") {
        this.$vuetify.theme.dark = true;
        return;
      }
      this.$vuetify.theme.dark = false;
    },
    sizeChange() {
      if (this.size === "средний") {
        this.setFontSize("16px");
      }
      if (this.size === "крупный") {
        this.setFontSize("24px");
      }
    },
    newsChange() {
      this.setNewsAmmount(this.newsDef);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/mixins.scss";

.settings {
  padding: 20px;
}

.item {
  display: flex;
  margin-bottom: 10px;
  justify-content: space-between;
  align-items: center;
  max-width: 70%;

  @include mobile {
    flex-direction: column;
  }
}

.name {
  padding-bottom: 15px;
  @include mobile {
    margin-bottom: 10px;
  }
}

.switch {
  max-width: 150px;
}
</style>
