<template>
  <div
    class="delete-modal"
    :style="showFlag ? 'display:block' : 'display:none'"
    @click="setShowDeleteDialogFlag(false)"
  >
    <!-- Modal content -->
    <div
      class="delete-modal-content"
      @click="
        e => {
          e.stopPropagation();
        }
      "
    >
      <div class="delete-modal-header">
        <span class="close" @click="setShowDeleteDialogFlag(false)"
          >&times;</span
        >
        <h2>Delete {{ item }}</h2>
      </div>
      <div class="delete-modal-body">
        <form>
          <div class="form-group delete-modal-body__text">
            <p>Do you want to delete this {{ item.toLowerCase() }}?</p>
          </div>
          <button
            type="button"
            class="btn float-right"
            @click="setShowDeleteDialogFlag(false)"
          >
            Cancel
          </button>
          <button
            type="button"
            class="btn btn-danger float-right"
            @click="deleteAction"
          >
            Delete
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["showFlag", "setShowDeleteDialogFlag", "item", "deleteAction"]
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/shared/delete-modal.scss";
</style>
