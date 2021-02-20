import Cookies from "universal-cookie";

const getTokenCookie = () => {
  const cookies = new Cookies();
  return cookies.get("glbusiness");
};

const setTokenCookie = data => {
  const cookies = new Cookies();
  const expiryDate = new Date();
  expiryDate.setDate(expiryDate.getDate() + 7);
  cookies.set("glbusiness", data, { path: "/", expires: expiryDate });
  return "Cookie Created";
};

const removeTokenCookie = () => {
  document.cookie =
    "glbusiness=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
};

const getUserDataCookie = () => {
  const cookies = new Cookies();
  return cookies.get("glbusiness-user");
};

const setUserDataCookie = data => {
  const cookies = new Cookies();
  const expiryDate = new Date();
  expiryDate.setDate(expiryDate.getDate() + 7);
  cookies.set("glbusiness-user", data, { path: "/", expires: expiryDate });
  return "Cookie Created";
};

const removeUserDataCookie = () => {
  document.cookie =
    "glbusiness-user=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
};

export {
  getTokenCookie,
  setTokenCookie,
  removeTokenCookie,
  getUserDataCookie,
  setUserDataCookie,
  removeUserDataCookie
};
