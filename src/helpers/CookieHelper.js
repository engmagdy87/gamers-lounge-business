import Cookies from "universal-cookie";

const getTokenCookie = () => {
    const cookies = new Cookies();
    return cookies.get("gl-business");
}

const setTokenCookie = (data) => {
    const cookies = new Cookies();
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 7);
    cookies.set("gl-business", data, { path: "/", expires: expiryDate });
    return "Cookie Created";
}

const removeTokenCookie = () => {
    const cookies = new Cookies();
    cookies.remove("gl-business");
}

export {
    getTokenCookie,
    setTokenCookie,
    removeTokenCookie,
}