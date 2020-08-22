<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="/dashboard/giveaways">Giveaways & Offers</a>
        </li>
        <li class="breadcrumb-item">
          {{ giveawayName }}
        </li>
      </ol>
    </nav>
    <div class="row">
      <div class="col-sm">
        <h2 class="heading-margin">
          {{ giveawayName }} Registers ({{ giveawaysRegisters.length }})
        </h2>
      </div>
      <div class="col-sm">
        <button
          type="button"
          class="btn btn-secondary d-block ml-auto heading-margin"
          @click="downloadCSV"
        >
          Download All Registers
        </button>
      </div>
      <!-- </div> -->
    </div>
    <LTable
      class="table-hover table-striped"
      :columns="table.columns"
      :data="giveawaysRegisters"
      tableType="giveaway-registers"
      :giveawayName="giveawayName"
    >
    </LTable>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import types from "../../../store/types";
import LTable from "src/dashboard/components/Table.vue";

export default {
  data() {
    return {
      table: {
        columns: []
      },
      giveawayName: this.$router.history.current.query.giveawayName
    };
  },
  computed: {
    ...mapState({
      giveawaysRegisters: state => state.giveaways.giveawaysRegisters
    })
  },
  methods: {
    ...mapActions({
      fetchGiveawaysRegisters: types.giveaways.actions.FETCH_GIVEAWAY_REGISTERS
    }),
    notifyVue(message, color) {
      this.$notifications.notify({
        message: `<span>${message}</span>`,
        horizontalAlign: "right",
        verticalAlign: "top",
        type: color
      });
    },
    downloadCSV() {
      if (this.giveawaysRegisters.length === 0) return;
      let csvContent = "data:text/csv;charset=utf-8,";

      //******* Heading *******/
      let heading = "First Name;Last Name;Username;Email;Phone;Birthday Date;";

      this.giveawaysRegisters[0].answers.forEach(
        answer => (heading = heading + answer.title + ";")
      );

      //******* Rows *******/
      let row = "";
      let rows = [heading];
      this.giveawaysRegisters.forEach(userData => {
        const {
          first_name,
          last_name,
          username,
          email,
          phone,
          birthday_date
        } = userData.user;
        row = `${first_name};${last_name};${username};${email};${phone ||
          ""};${birthday_date || ""};`;
        userData.answers.forEach(answer => (row = row + answer.content + ";"));
        rows.push(row);
      });

      csvContent += rows.join("\n").replace(/(^\[)|(\]$)/gm, "");

      const data = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", data);
      link.setAttribute("download", `${this.giveawayName}.csv`);
      link.click();
    }
  },
  components: {
    LTable
  },
  mounted() {
    this.fetchGiveawaysRegisters(
      this.$router.history.current.params.giveawayId
    );
  },
  updated() {
    if (this.table.columns.length === 0) {
      this.table.columns.push("Id");
      this.table.columns.push("First Name");
      this.table.columns.push("Last Name");
      this.table.columns.push("Username");
      this.table.columns.push("Email");
      this.table.columns.push("Phone");
      this.table.columns.push("Birthday Date");
      if (this.giveawaysRegisters.length > 0)
        this.giveawaysRegisters[0].answers.forEach(answer =>
          this.table.columns.push(answer.title)
        );

      this.table.columns.push("Actions");
    }
  }
};
</script>

<style lang="scss" scoped>
.heading-margin {
  margin-top: 15px !important;
  margin-bottom: 30px !important;
}
</style>
