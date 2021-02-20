<template>
  <div
    :class="['single-filled-box', isButton && 'single-filled-box--is-button']"
    @click="onClickAction"
    role="button"
  >
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  props: {
    isButton: {
      type: Boolean,
      default: false
    },
    onClickAction: {
      type: Function,
      default: () => {}
    }
  }
};
</script>
