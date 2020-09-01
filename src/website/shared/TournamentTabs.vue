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
        <div
          class="col-lg-4 d-flex align-items-center justify-content-end tab-pane__custom-button-wrapper"
          role="button"
        >
          <div
            class="tab-pane__custom-button-wrapper__outside"
            @click="redirectTo"
          >
            REGISTER
          </div>
        </div>
      </div>
    </nav>
    <div class="tab-content" id="nav-tabContent">
      <div
        v-if="activeTabIndex === 0"
        :class="['tab-pane fade', activeTabIndex === 0 ? 'show active' : '']"
        id="nav-home"
        role="tabpanel"
        aria-labelledby="nav-home-tab"
      >
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-2">
              <img
                v-if="data.images.img_logo !== null"
                :src="data.images.img_logo.path"
                :alt="data.initial_title + 'background'"
                class="tab-wrapper__details__img"
              />
            </div>
            <div class="col-12 col-md-10">
              <div class="row">
                <div class="col-12 col-md-9">
                  <div class="row d-flex">
                    <h1 class="tab-wrapper__details__title">
                      {{ data.initial_title }}
                    </h1>
                    <span class="tab-wrapper__details__format">
                      {{ data.format }}
                    </span>
                  </div>
                  <div class="row d-flex mt-1 mb-1">
                    <span class="tab-wrapper__details__platform">
                      {{ data.platform }}
                    </span>
                    -
                    <span class="tab-wrapper__details__region">
                      {{ data.region }}
                    </span>
                  </div>
                  <div class="row">
                    <span
                      class="badge badge-pill badge-secondary tab-wrapper__details__kick-off"
                      ><img
                        src="/website/img/calendar.svg"
                        alt="calendar icon"
                      />
                      <span>{{ data.kick_off_date.split(" ")[0] }}</span></span
                    >
                  </div>
                </div>
                <div class="col-12 col-md-3 tab-wrapper__details__register">
                  <div :class="getCSSClass(data.register_status)"></div>
                  <span v-if="data.register_status === 'open'"
                    >Registeration is now open</span
                  >
                  <span v-else-if="data.register_status === 'closed'"
                    >Register was closed</span
                  >
                  <span v-else-if="data.register_status === 'soon'"
                    >Register coming soon</span
                  >
                </div>
              </div>
              <div class="row">
                <div class="col-12" style="padding:0">
                  <div
                    class="tab-wrapper__details__description"
                    v-html="data.initial_description"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="activeTabIndex === 1"
        :class="['tab-pane fade', activeTabIndex === 1 ? 'show active' : '']"
        id="nav-profile"
        role="tabpanel"
        aria-labelledby="nav-profile-tab"
      >
        <h3 :class="isRuleTitleArabicText ? 'tab-title--ar' : 'tab-title--en'">
          {{ data.rules.title }}
        </h3>
        <div class="description-container" v-html="data.rules.content"></div>
      </div>
      <div
        v-if="activeTabIndex === 2"
        :class="['tab-pane fade', activeTabIndex === 2 ? 'show active' : '']"
        id="nav-contact"
        role="tabpanel"
        aria-labelledby="nav-contact-tab"
      >
        <div class="row">
          <div class="col-12">
            <h3 class="pl-3">{{ data.schedule_title }}</h3>
          </div>
          <div class="col-12">
            <img
              v-if="data.images.img_schedule !== null"
              :src="data.images.img_schedule.path"
              :alt="data.schedule_title + 'background'"
              class="w-100 p-3"
            />
          </div>
        </div>
      </div>
      <div
        v-if="activeTabIndex === 3"
        :class="['tab-pane fade', activeTabIndex === 3 ? 'show active' : '']"
        id="nav-contact"
        role="tabpanel"
        aria-labelledby="nav-contact-tab"
      >
        <div
          class="row"
          v-if="
            data.streaming !== null &&
              data.streaming.path !== null &&
              data.streaming.path !== ''
          "
        >
          <div
            :class="[
              'col-12 ',
              getLiveVideoChatEmbedUrl(data.streaming.path) ? 'col-md-8' : ''
            ]"
          >
            <iframe
              width="100%"
              :height="getVideoHeight(data.streaming.path)"
              :src="getLiveVideoEmbedUrl(data.streaming.path)"
              frameborder="0"
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            >
            </iframe>
          </div>
          <div
            class="col-12 col-md-4"
            v-if="
              getLiveVideoChatEmbedUrl(data.streaming.path) &&
                isChatVisible(data.streaming.path)
            "
          >
            <iframe
              scrolling="<scrolling>"
              width="100%"
              :height="data.streaming.path.includes('facebook') ? 700 : 500"
              :src="getLiveVideoChatEmbedUrl(data.streaming.path)"
              frameborder="0"
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            >
            </iframe>
          </div>
        </div>

        <h3 v-else>There is no streaming now</h3>
      </div>
      <div
        v-if="activeTabIndex === 4"
        :class="['tab-pane fade', activeTabIndex === 4 ? 'show active' : '']"
        id="nav-contact"
        role="tabpanel"
        aria-labelledby="nav-contact-tab"
      >
        <h3
          :class="isContactTitleArabicText ? 'tab-title--ar' : 'tab-title--en'"
        >
          {{ data.contacts.title }}
        </h3>
        <div class="description-container" v-html="data.contacts.content"></div>
      </div>
    </div>
  </div>
</template>

<script>
import redirectToNewTab from "../helpers/RedirectToNewTab";
import isDeviceSmart from "../helpers/DetectIsDeviceSmart";
import { changeTextDirection } from "../helpers/StringsHelper";
import {
  liveVideoEmbedFormatter,
  liveVideoChatEmbedFormatter
} from "../../dashboard/helpers/LiveVideoEmbedFormater";

export default {
  props: ["data", "redirectTo"],
  data() {
    return {
      activeTabIndex: 0,
      tabs: ["Details", "Rules Book", "Schedule", "Streaming", "Contacts"]
    };
  },
  methods: {
    setActiveTabIndex(index) {
      this.activeTabIndex = index;
    },
    selectClickAction(tab, index) {
      tab === "Rules Book" && !this.data.has_rules
        ? () => {}
        : this.setActiveTabIndex(index);
    },
    getCSSClass(status) {
      if (status === "open") return "tab-wrapper__details__register--open";
      if (status === "closed") return "tab-wrapper__details__register--closed";
      if (status === "soon") return "tab-wrapper__details__register--soon";
    },
    getVideoHeight(path) {
      if (isDeviceSmart() && path.includes("facebook")) return 180;
      if (!isDeviceSmart() && path.includes("facebook")) return 650;
      if (isDeviceSmart() && !path.includes("facebook")) return 200;
      if (!isDeviceSmart() && !path.includes("facebook")) return 500;
    },
    changeHexaStyleForTab() {
      const tabPanes = document.getElementsByClassName("tab-pane");
      for (let index = 0; index < tabPanes.length; index++) {
        const element = tabPanes[index];

        if (isDeviceSmart() && element.clientHeight < 500)
          element.style.clipPath = `polygon(0 0,100% 0,100% 0.5%,100% 92%,95% 96%,60% 96%,30% 110%,5% 100%,0% 95%)`;
        else if (isDeviceSmart() && element.clientHeight < 1000)
          element.style.clipPath = `polygon(0 0,100% 0,100% 0.5%,100% 97.5%,95% 99%,60% 99%,5% 110%,5% 100%,0% 99%)`;
        else if (isDeviceSmart())
          element.style.clipPath = `polygon(0 0,100% 0,100% 0.5%,100% 99.6%,95% 99.8%,60% 99.8%,5% 102%,5% 100%,0% 99.8%)`;
        else if (element.clientHeight < 800)
          element.style.clipPath = `polygon(0 0,98.5% 0,100% 2%,100% 96%,98% 98%,66% 98%,50% 120%,1% 100%,0 98%)`;
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
    },
    getLiveVideoEmbedUrl(url) {
      return liveVideoEmbedFormatter(url);
    },
    getLiveVideoChatEmbedUrl(url) {
      return liveVideoChatEmbedFormatter(url);
    },
    isChatVisible(url) {
      return !(isDeviceSmart() && !url.includes("twitch"));
    }
  },
  mounted() {
    this.changeHexaStyleForTab();
  },
  updated() {
    this.changeHexaStyleForTab();
    redirectToNewTab("description-container");
  },
  computed: {
    isRuleTitleArabicText() {
      return changeTextDirection(this.data.rules.title);
    },
    isContactTitleArabicText() {
      return changeTextDirection(this.data.contacts.title);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/shared/tabs.scss";
.tab-title {
  &--ar {
    text-align: right;
  }
  &--en {
    text-align: left;
  }
}
</style>
