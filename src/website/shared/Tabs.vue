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
            <div class="col-2">
              <img
                v-if="data.images.img_logo !== null"
                :src="data.images.img_logo.path"
                :alt="data.initial_title + 'background'"
                class="tab-wrapper__details__img"
              />
            </div>
            <div class="col-7">
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
                  ><img src="/website/img/calendar.svg" alt="calendar icon" />{{
                    data.kick_off_date.split(" ")[0]
                  }}</span
                >
              </div>
            </div>
            <div class="col-3 tab-wrapper__details__register">
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
        <p v-html="data.rules.content"></p>
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
        <p v-html="data.contacts.content"></p>
      </div>
    </div>
  </div>
</template>

<script>
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
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/color-palette.scss";
@import "../../assets/sass/website/variables.scss";
@import "../../assets/sass/website/mixins.scss";

.tab-pane {
  padding: 30px;
  position: relative;
  @include create-hexa-shape-tabs-body();
}

.nav-tabs {
  border: none;
}

.nav-tabs .nav-link:nth-child(1) {
  margin: 0 20px 0 0;
}
.nav-tabs .nav-link {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0c3656;
  cursor: pointer !important;
  color: rgba($color: #fff, $alpha: 0.4);
  border: none;
  margin: 0 20px;
  width: 120px;
  height: 50px;
  @include create-hexagone-shape-tab(10px);
  transform: translateY(5px);
}

.nav-item.nav-link.active {
  background-color: $placeholder-background;
  height: 55px;
  filter: drop-shadow(0 0 4px #175e90) !important;
  border: none;
  color: white;
  transform: translateY(0px);
}

.tab-pane.fade.show.active {
  background-color: $placeholder-background;
}

.nav-tabs .nav-link .active,
.nav-tabs .nav-item .show .nav-link {
  background-color: $placeholder-background !important;
  filter: drop-shadow(0 0 4px #175e90) !important;
  color: white;
  border: none;
}

.tab-wrapper {
  &__details {
    &__img {
      width: 100%;
      border: 1px solid $primary;
      border-radius: 5px;
    }
    &__title {
      font-size: 1.3rem;
      margin: 0;
    }
    &__format {
      font-size: 0.9rem;
      font-weight: lighter;
      margin: 0 10px;
    }
    &__platform {
      margin-right: 5px;
    }
    &__region {
      margin-left: 5px;
    }
    &__kick-off {
      padding: 5px 10px;
    }
    &__register {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      a {
        color: white !important;
      }
      div {
        border-radius: 50%;
        width: 10px;
        height: 10px;
        margin-top: 6px;
        margin-right: 5px;
      }
      &--open {
        background-color: rgba(0, 211, 81, 1);
      }
      &--closed {
        background-color: red;
      }
      &--soon {
        background-color: orange;
      }
    }
  }
}
</style>
