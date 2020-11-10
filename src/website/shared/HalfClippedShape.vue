<template>
  <div
    :class="['half-filled-box', isButton && 'half-filled-box--is-button']"
    @click="onClickAction"
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
