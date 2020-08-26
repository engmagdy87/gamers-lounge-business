<template>
  <div>
    <nav>
      <div class="nav nav-tabs" id="nav-tab" role="tablist">
        <a
          v-for="(tab, index) in tabs"
          :key="index"
          :class="[
            'nav-item nav-link',
            activeTabIndex === index ? 'active' : ''
          ]"
          id="nav-home-tab"
          data-toggle="tab"
          role="tab"
          aria-controls="nav-home"
          aria-selected="true"
          @click="selectClickAction(tab, index)"
          >{{ tab }}</a
        >
      </div>
    </nav>
    <div class="tab-content" id="nav-tabContent">
      <div
        v-for="(event, i) in data"
        :key="i"
        :class="['tab-pane fade', activeTabIndex === i ? 'show active' : '']"
        v-if="activeTabIndex === i"
        id="nav-home"
        role="tabpanel"
        aria-labelledby="nav-home-tab"
      >
        <div class="row p-3">
          <div class="col-12 col-md-5">
            <div class="row d-flex align-items-center">
              <img
                v-if="event.images.img_logo !== null"
                :src="event.images.img_logo.path"
                :alt="event.initial_title + 'background'"
                class="event-tab-wrapper__details__img"
              />
              <div class="event-tab-wrapper__details__info">
                <p class="event-tab-wrapper__details__title">
                  Location: <span>{{ event.summit.location }}</span>
                </p>
                <!-- <p class="event-tab-wrapper__details__title">
                    Attendess: <span>{{ data.attendess }}</span>
                  </p> -->
              </div>
            </div>
            <div class="row mt-3">
              <div
                class="event-tab-wrapper__details__description"
                v-html="event.final_description"
              ></div>
            </div>
          </div>
          <div class="col-12 col-md-7" v-if="event.videos.vid_final !== null">
            <iframe
              width="100%"
              height="315"
              :src="event.videos.vid_final.path"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            >
            </iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import redirectToNewTab from "../helpers/RedirectToNewTab";
import isDeviceSmart from "../helpers/DetectIsDeviceSmart";
import { changeTextDirection } from "../helpers/StringsHelper";

export default {
  props: ["data", "redirectTo"],
  data() {
    return {
      activeTabIndex: 0,
      tabs: []
    };
  },
  methods: {
    setActiveTabIndex(index) {
      this.activeTabIndex = index;
    },
    selectClickAction(tab, index) {
      this.setActiveTabIndex(index);
    },
    changeHexaStyleForTab() {
      const tabPanes = document.getElementsByClassName("tab-pane");
      for (let index = 0; index < tabPanes.length; index++) {
        const element = tabPanes[index];
        if (isDeviceSmart())
          element.style.clipPath = `polygon(0 0,100% 0,100% 0.5%,100% 99.5%,90% 99.8%,50% 99.8%,20% 101%,0% 99.7%,0 99.8%)`;
        else if (element.clientHeight < 800)
          element.style.clipPath = `polygon(0 0,98.5% 0,100% 5%,100% 89%,98% 95%,66% 95%,50% 150%,6% 120%,0 93%)`;
        else if (element.clientHeight >= 800 && element.clientHeight < 1300)
          element.style.clipPath = `polygon(0 0,98% 0,100% 1.5%,100% 97%,98% 98.8%,60% 98.8%,55% 105%,10% 105%,0 99%)`;
        else if (element.clientHeight >= 1300 && element.clientHeight < 1600)
          element.style.clipPath = `polygon(0 0,98% 0,100% 1.5%,100% 98%,98% 98.8%,60% 98.8%,57% 100%,20% 105%,0 99.2%)`;
        else if (element.clientHeight >= 1600 && element.clientHeight < 2000)
          element.style.clipPath = `polygon(0 0,98% 0,100% 1%,100% 98%,98% 99%,60% 99%,57% 100%,20% 105%,0 99.5%)`;
        else if (element.clientHeight >= 1600 && element.clientHeight < 3000)
          element.style.clipPath = `polygon(0 0,98% 0,100% 1%,100% 98%,98% 99%,60% 99%,57% 100%,20% 105%,0 99.5%)`;
        else if (element.clientHeight >= 3000 && element.clientHeight < 5000)
          element.style.clipPath = `polygon(0 0,98% 0,100% 0.6%,100% 99%,98% 99.5%,66% 99.5%,60% 101%,15% 105%,0 99.5%)`;
        else if (element.clientHeight >= 5000 && element.clientHeight < 8200)
          element.style.clipPath = `polygon(0 0,98% 0,100% 0.3%,100% 99.5%,98% 99.7%,66% 99.7%,50% 101%,9% 101%,0 99.7%)`;
      }
    }
  },
  mounted() {
    this.changeHexaStyleForTab();
    this.data.forEach(tab => {
      this.tabs.push(tab.final_title);
    });
  },
  updated() {
    this.changeHexaStyleForTab();
    redirectToNewTab("description-container");
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/shared/event-tabs.scss";
</style>
