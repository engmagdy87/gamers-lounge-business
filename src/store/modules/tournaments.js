import { getTournaments, getTournamentsForDashboard, getTournamentDetails, getFilteredTournaments, removeTournament, removeTournamentImage, getTournamentRegisterLink } from '../../website/helpers/APIsHelper';
import types from '../types';

const state = {
    tournamentsData: [],
    filteredTournamentsData: [],
    isFilteredTournamentsDataFetched: false,
    isTournamentsDataFetched: false,
    dashboardTournamentsData: [],
    isDashboardTournamentsDataFetched: false,
    tournamentDetailsData: [],
    isTournamentDetailsDataFetched: false,
};

const mutations = {
    [types.tournaments.mutations.SET_TOURNAMENTS_DATA]: (currentState, payload) => {
        currentState.tournamentsData = payload;
        currentState.filteredTournamentsData = payload;
    },
    [types.tournaments.mutations.SET_DASHBOARD_TOURNAMENTS_DATA]: (currentState, payload) => {
        currentState.dashboardTournamentsData = payload;
    },
    [types.tournaments.mutations.SET_IS_TOURNAMENTS_DATA_FETCHED]: (currentState, payload) => {
        currentState.isTournamentsDataFetched = payload;
    },
    [types.tournaments.mutations.SET_IS_DASHBOARD_TOURNAMENTS_DATA_FETCHED]: (currentState, payload) => {
        currentState.isDashboardTournamentsDataFetched = payload;
    },
    [types.tournaments.mutations.SET_IS_TOURNAMENT_DETAILS_DATA_FETCHED]: (currentState, payload) => {
        currentState.isTournamentDetailsDataFetched = payload;
    },
    [types.tournaments.mutations.SET_TOURNAMENT_DETAILS_DATA]: (currentState, payload) => {
        currentState.tournamentDetailsData = payload;
    },
    [types.tournaments.mutations.SET_FILTERED_TOURNAMENTS_DATA]: (currentState, payload) => {
        currentState.filteredTournamentsData = payload;
    },
    [types.tournaments.mutations.SET_IS_FILTERED_TOURNAMENT_DATA_FETCHED]: (currentState, payload) => {
        currentState.isFilteredTournamentsDataFetched = payload;
    },
    [types.tournaments.mutations.REMOVE_DELETED_TOURNAMENT]: (currentState, index) => {
        currentState.dashboardTournamentsData.splice(index, 1);
    },
};

const getTournamentsData = async ({ commit }) => {
    const response = await getTournaments().then((response) => {
        commit(types.tournaments.mutations.SET_TOURNAMENTS_DATA, response.data.tournaments);
        commit(types.tournaments.mutations.SET_IS_TOURNAMENTS_DATA_FETCHED, true);
        return true
    }).catch(() => false);
    return response
};

const getTournamentsListSummary = async ({ commit }) => {
    commit(types.home.mutations.SET_SPINNER_FLAG, true);
    const response = await getTournamentsForDashboard().then((response) => {
        commit(types.tournaments.mutations.SET_DASHBOARD_TOURNAMENTS_DATA, response.data.tournaments);
        commit(types.tournaments.mutations.SET_IS_DASHBOARD_TOURNAMENTS_DATA_FETCHED, true);
        commit(types.home.mutations.SET_SPINNER_FLAG, false);
        return true
    }).catch(() => false);
    return response
};

const getTournamentDetailsData = async ({ commit }, tournamentId) => {
    commit(types.home.mutations.SET_SPINNER_FLAG, true);
    const response = await getTournamentDetails(tournamentId).then((response) => {
        commit(types.tournaments.mutations.SET_TOURNAMENT_DETAILS_DATA, response.data.tournaments);
        commit(types.tournaments.mutations.SET_IS_TOURNAMENT_DETAILS_DATA_FETCHED, true);
        commit(types.home.mutations.SET_SPINNER_FLAG, false);
        return true
    }).catch(() => false);
    return response
};
const getFilteredTournamentsData = async ({ commit }, payload) => {
    commit(types.home.mutations.SET_SPINNER_FLAG, true);
    const response = await getFilteredTournaments(payload).then((response) => {
        commit(types.tournaments.mutations.SET_FILTERED_TOURNAMENTS_DATA, response.data.tournaments);
        commit(types.tournaments.mutations.SET_IS_FILTERED_TOURNAMENT_DATA_FETCHED, true);
        commit(types.home.mutations.SET_SPINNER_FLAG, false);
        return true
    }).catch(() => false);
    return response
};

const fetchRegisterLink = async ({ commit }, payload) => {
    commit(types.home.mutations.SET_SPINNER_FLAG, true);
    const response = await getTournamentRegisterLink(payload).then((response) => {
        commit(types.home.mutations.SET_SPINNER_FLAG, false);
        return response.data.register_link
    }).catch(() => false);
    return response
};

const deleteTournament = async ({ commit }, payload) => {
    const { tournamentId, locationInDataArray } = payload
    commit(types.home.mutations.SET_SPINNER_FLAG, true);
    const response = await removeTournament(tournamentId).then(() => {
        commit(types.tournaments.mutations.REMOVE_DELETED_TOURNAMENT, locationInDataArray);
        commit(types.home.mutations.SET_SPINNER_FLAG, false);
        return true
    }).catch(() => false);
    return response
};

const deleteTournamentImage = async ({ commit }, payload) => {
    const { tournamentId, imageId } = payload
    commit(types.home.mutations.SET_SPINNER_FLAG, true);
    const response = await removeTournamentImage(tournamentId, imageId).then(() => {
        commit(types.home.mutations.SET_SPINNER_FLAG, false);
        return true
    }).catch(() => false);
    return response
};

const actions = {
    [types.tournaments.actions.FETCH_TOURNAMENTS]: getTournamentsData,
    [types.tournaments.actions.FETCH_TOURNAMENTS_FOR_DASHBOARD]: getTournamentsListSummary,
    [types.tournaments.actions.FETCH_TOURNAMENTS_DETAILS]: getTournamentDetailsData,
    [types.tournaments.actions.FETCH_FILTERED_TOURNAMENTS]: getFilteredTournamentsData,
    [types.tournaments.actions.DELETE_TOURNAMENT]: deleteTournament,
    [types.tournaments.actions.DELETE_TOURNAMENT_IMAGE]: deleteTournamentImage,
    [types.tournaments.actions.FETCH_REGISTER_LINK]: fetchRegisterLink,
};

export default {
    state,
    mutations,
    actions
};
