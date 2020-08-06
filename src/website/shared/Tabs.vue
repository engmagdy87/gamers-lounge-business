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
            <div class="col-12 col-md-7">
              <div class="row  d-flex">
                <h1 class="tab-wrapper__details__title">
                  {{ data.initial_title }}
                </h1>
                <span class="tab-wrapper__details__format">
                  {{ data.format }}
                </span>
              </div>
              <div class="row d-flex">
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
                  ><img src="/website/img/calendar.svg" alt="calendar icon" />
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
        </div>
      </div>
      <div
        :class="['tab-pane fade', activeTabIndex === 1 ? 'show active' : '']"
        id="nav-profile"
        role="tabpanel"
        aria-labelledby="nav-profile-tab"
      >
        <h3>{{ data.rules.title }}</h3>
        <div class="description-container" v-html="data.rules.content"></div>
      </div>
      <div
        :class="['tab-pane fade', activeTabIndex === 2 ? 'show active' : '']"
        id="nav-contact"
        role="tabpanel"
        aria-labelledby="nav-contact-tab"
      >
        schedule
      </div>
      <div
        :class="['tab-pane fade', activeTabIndex === 3 ? 'show active' : '']"
        id="nav-contact"
        role="tabpanel"
        aria-labelledby="nav-contact-tab"
      >
        stream
      </div>
      <div
        :class="['tab-pane fade', activeTabIndex === 4 ? 'show active' : '']"
        id="nav-contact"
        role="tabpanel"
        aria-labelledby="nav-contact-tab"
      >
        <h3>{{ data.contacts.title }}</h3>
        <div class="description-container" v-html="data.contacts.content"></div>
      </div>
    </div>
  </div>
</template>

<script>
import redirectToNewTab from "../helpers/RedirectToNewTab";

export default {
  props: ["data"],
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
      tab === "Schedule" ||
      tab === "Streaming" ||
      (tab === "Rules Book" && !this.data.has_rules)
        ? () => {}
        : this.setActiveTabIndex(index);
    },
    getCSSClass(status) {
      if (status === "open") return "tab-wrapper__details__register--open";
      if (status === "closed") return "tab-wrapper__details__register--closed";
      if (status === "soon") return "tab-wrapper__details__register--soon";
    },
    changeHexaStyleForTab() {
      const tabPanes = document.getElementsByClassName("tab-pane");
      for (let index = 0; index < tabPanes.length; index++) {
        const element = tabPanes[index];
        if (element.clientHeight < 800) {
          element.style.clipPath = `polygon(0 0,100% 0,100% 4%,100% 92%,99% 96%,66% 96%,65% 100%,2% 100%,0 95%)`;
        } else {
          element.style.clipPath = `polygon(0 0,100% 0,100% 4%,100% 50%,99% 99.5%,66% 99.5%,65% 100%,2% 101%,0% 99%)`;
        }
      }
    }
  },
  mounted() {
    this.changeHexaStyleForTab();
  },
  updated() {
    this.changeHexaStyleForTab();
    redirectToNewTab("description-container");
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/shared/tabs.scss";
</style>
