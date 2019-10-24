<template>
  <div class="about">
    <div class="description">
      <h2 class="description__title">О нас</h2>
      <p class="description__text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
        voluptatem quas officia error consectetur, perferendis accusantium sit
        cum maiores quia consequatur? Eos temporibus sint magni a ratione esse
        vero laboriosam!
      </p>
    </div>
    <yandex-map
      :settings="settings"
      :coords="[48.46, 135.08]"
      zoom="13"
      style="width: 90%; height: 500px; margin: 0 auto;"
      :cluster-options="{
        1: { clusterDisableClickZoom: true }
      }"
      :placemarks="placemarks"
    >
    </yandex-map>
  </div>
</template>

<script>
import { yandexMap } from "vue-yandex-maps";

export default {
  data() {
    return {
      settings: {
        apiKey: "5878be80-9a48-4bec-826a-b01a3f1dc5b6",
        lang: "ru_RU",
        coordorder: "latlong",
        version: "2.1"
      },
      placemarks: [
        {
          coords: [48.46328857390758, 135.08421449999992],
          properties: {
            hintContent: "FOGSTREAM"
          }
        }
      ]
    };
  },
  components: { yandexMap }
};
</script>

<style lang="scss" scoped>
.about {
  padding: 20px;
}
</style>
