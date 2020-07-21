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

function removeCookie() {
    const cookies = new Cookies();
    cookies.remove("esports");
}

export {
    setUserCookie,
    getUserCookie,
    removeCookie
};
