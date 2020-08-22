<template>
  <div class="table-responsive">
    <table class="table">
      <thead class="thead-dark">
        <slot name="columns">
          <tr>
            <th scope="col" v-for="column in columns" :key="column">
              {{ column }}
            </th>
          </tr>
        </slot>
      </thead>
      <tbody v-if="tableType === 'summits'">
        <SummitTabelRow
          v-for="(item, index) in data"
          :key="index"
          :rowData="item"
          :id="index + 1"
          :setShowDeleteDialogFlag="setShowDeleteDialogFlag"
        >
        </SummitTabelRow>
      </tbody>
      <tbody v-else-if="tableType === 'events'">
        <EventTabelRow
          v-for="(item, index) in data"
          :key="index"
          :rowData="item"
          :id="index + 1"
          :setShowDeleteDialogFlag="setShowDeleteDialogFlag"
        >
        </EventTabelRow>
      </tbody>
      <tbody v-else-if="tableType === 'sponsors'">
        <SponsorTabelRow
          v-for="(item, index) in data"
          :key="index"
          :rowData="item"
          :id="index + 1"
          :setShowDeleteDialogFlag="setShowDeleteDialogFlag"
        >
        </SponsorTabelRow>
      </tbody>
      <tbody v-else-if="tableType === 'games'">
        <GamesTabelRow
          v-for="(item, index) in data"
          :key="index"
          :rowData="item"
          :id="index + 1"
          :setShowDeleteDialogFlag="setShowDeleteDialogFlag"
        >
        </GamesTabelRow>
      </tbody>
      <tbody v-else-if="tableType === 'platforms'">
        <PlatformsTabelRow
          v-for="(item, index) in data"
          :key="index"
          :rowData="item"
          :id="index + 1"
          :setShowDeleteDialogFlag="setShowDeleteDialogFlag"
        >
        </PlatformsTabelRow>
      </tbody>
      <tbody v-else-if="tableType === 'regions'">
        <RegionsTabelRow
          v-for="(item, index) in data"
          :key="index"
          :rowData="item"
          :id="index + 1"
          :setShowDeleteDialogFlag="setShowDeleteDialogFlag"
        >
        </RegionsTabelRow>
      </tbody>
      <tbody v-else-if="tableType === 'tournaments'">
        <TournamentTabelRow
          v-for="(item, index) in data"
          :key="index"
          :rowData="item"
          :id="index + 1"
          :setShowDeleteDialogFlag="setShowDeleteDialogFlag"
        >
        </TournamentTabelRow>
      </tbody>
      <tbody v-else-if="tableType === 'sponsors-categories'">
        <SponsorsCategoryTabelRow
          v-for="(item, index) in data"
          :key="index"
          :rowData="item"
          :id="index + 1"
          :setShowDeleteDialogFlag="setShowDeleteDialogFlag"
        >
        </SponsorsCategoryTabelRow>
      </tbody>
      <tbody v-else-if="tableType === 'giveaways'">
        <GiveawayTabelRow
          v-for="(item, index) in data"
          :key="index"
          :rowData="item"
          :id="index + 1"
          :setShowDeleteDialogFlag="setShowDeleteDialogFlag"
        >
        </GiveawayTabelRow>
      </tbody>
      <tbody v-else-if="tableType === 'giveaways-register-question'">
        <GiveawayRegisterQuestionTabelRow
          v-for="(item, index) in data"
          :key="index"
          :rowData="item"
          :id="index + 1"
          :setShowDeleteDialogFlag="setShowDeleteDialogFlag"
          :setShowGiveawayRegisterQuestionModalFlag="
            setShowGiveawayRegisterQuestionModalFlag
          "
        >
        </GiveawayRegisterQuestionTabelRow>
      </tbody>
      <tbody v-else-if="tableType === 'event-parent'">
        <EventParentTableRow
          v-for="(item, index) in data"
          :key="index"
          :rowData="item"
          :id="index + 1"
          :setShowDeleteDialogFlag="setShowDeleteDialogFlag"
          :setShowGiveawayRegisterQuestionModalFlag="
            setShowGiveawayRegisterQuestionModalFlag
          "
        >
        </EventParentTableRow>
      </tbody>
      <tbody v-else-if="tableType === 'giveaway-registers'">
        <GiveawayRegistersTableRow
          v-for="(item, index) in data"
          :key="index"
          :rowData="item"
          :id="index + 1"
          :giveawayName="giveawayName"
        >
        </GiveawayRegistersTableRow>
      </tbody>
    </table>
  </div>
</template>
<script>
import SummitTabelRow from "./SummitTabelRow";
import EventTabelRow from "./EventTabelRow";
import SponsorTabelRow from "./SponsorTabelRow";
import GamesTabelRow from "./GamesTabelRow";
import PlatformsTabelRow from "./PlatformsTabelRow";
import RegionsTabelRow from "./RegionsTabelRow";
import TournamentTabelRow from "./TournamentTabelRow";
import GiveawayTabelRow from "./GiveawayTabelRow";
import GiveawayRegisterQuestionTabelRow from "./GiveawayRegisterQuestionTabelRow";
import SponsorsCategoryTabelRow from "./SponsorsCategoryTabelRow";
import EventParentTableRow from "./EventParentTableRow";
import GiveawayRegistersTableRow from "./GiveawayRegistersTableRow";

export default {
  name: "l-table",
  props: [
    "columns",
    "data",
    "tableType",
    "setShowDeleteDialogFlag",
    "setShowGiveawayRegisterQuestionModalFlag",
    "giveawayName"
  ],
  components: {
    SummitTabelRow,
    EventTabelRow,
    SponsorTabelRow,
    GamesTabelRow,
    PlatformsTabelRow,
    RegionsTabelRow,
    TournamentTabelRow,
    SponsorsCategoryTabelRow,
    GiveawayTabelRow,
    GiveawayRegisterQuestionTabelRow,
    EventParentTableRow,
    GiveawayRegistersTableRow
  }
};
</script>
<style></style>
