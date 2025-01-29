import Cookies from "js-cookie";

export const getSessionToken = () => {
  const sessionToken = Cookies.get("LNX.INFOUNA-SESSION") ?? "";
  return sessionToken;
};

export const setSessionToken = (token: string) => {
  Cookies.set("LNX.INFOUNA-SESSION", token, {
    expires: 1,
  });
};

export const removeSessionToken = () => {
  Cookies.remove("LNX.INFOUNA-SESSION");
};
