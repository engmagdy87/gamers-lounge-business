import Cookies from 'universal-cookie';

const cookieLifeTimeInWeeks = 7

function getUserCookie() {
    const cookies = new Cookies();
    return cookies.get('esports');
}

function setUserCookie(data) {
    const cookies = new Cookies();
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + cookieLifeTimeInWeeks);
    cookies.set('esports', { ...data }, { path: '/', expires: expiryDate });
}

function getEventCookie() {
    const cookies = new Cookies();
    return cookies.get('esports-event');
}

function setEventCookie(data) {
    const cookies = new Cookies();
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + cookieLifeTimeInWeeks);
    cookies.set('esports-event', { ...data }, { path: '/', expires: expiryDate });
}

function getTournamentCookie() {
    const cookies = new Cookies();
    return cookies.get('esports-tournament');
}

function setTournamentCookie(data) {
    const cookies = new Cookies();
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + cookieLifeTimeInWeeks);
    cookies.set('esports-tournament', { ...data }, { path: '/', expires: expiryDate });
}
function getGameCookie() {
    const cookies = new Cookies();
    return cookies.get('esports-game');
}

function setGameCookie(data) {
    const cookies = new Cookies();
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + cookieLifeTimeInWeeks);
    cookies.set('esports-game', { ...data }, { path: '/', expires: expiryDate });
}

function removeCookie() {
    const cookies = new Cookies();
    cookies.remove("esports");
}

export {
    setUserCookie,
    getUserCookie,
    removeCookie,
    getEventCookie,
    setEventCookie,
    getTournamentCookie,
    setTournamentCookie,
    getGameCookie,
    setGameCookie
};
