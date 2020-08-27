<template>
  <div
    :class="[
      'popup-container',
      showEventPopup ? 'popup-container--show' : 'popup-container--hide'
    ]"
  >
    <div
      class="popup-wrapper"
      v-if="data.images !== null && data.images !== undefined"
      :style="`backgroundImage: url(${data.images.img_main.path})`"
      @click="redirectTo"
    >
      <!-- <div class="popup-wrapper__arrow-container" @click="toggleEventPopup">
        <img
          src="/website/img/arrow.svg"
          alt="arrow"
          :class="[
            'popup-wrapper__arrow',
            showEventPopup
              ? 'popup-wrapper__arrow--reverse'
              : 'popup-wrapper__arrow--normal'
          ]"
        />
      </div> -->
    </div>
  </div>
</template>

<script>
import { truncateText } from "../helpers/StringsHelper";

export default {
  props: ["data"],
  data() {
    return {
      showEventPopup: false
    };
  },
  methods: {
    redirectTo() {
      const url = this.data.link;
      if (url.includes("http")) window.open(url, "_blank");
      else window.open(`http://${url}`, "_blank");
    },
    trimText(text) {
      return truncateText(text);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/shared/popup.scss";
</style>
