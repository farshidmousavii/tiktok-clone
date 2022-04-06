import http from "./httpServices";

const headers = {
  "X-RapidAPI-Host": "tiktok-all-in-one.p.rapidapi.com",
  "X-RapidAPI-Key": "b3c8716c5emsh2ec60c2feec9481p196e4fjsn71820c135371",
};
export const getSuggestedUsers = () => {
  return http.get("/user/recommend", { headers });
};

export const getDiscover = () => {
  const params = { region: "US", offset: "20" };
  return http.get("/discover", { params, headers });
};
