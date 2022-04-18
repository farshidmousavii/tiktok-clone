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

export const getFeed = () => {
  const params = { region: "US" };
  return http.get("/feed", { params, headers });
};

export const getUserInfo = (id) => {
  const params = { id: `${id}` };
  return http.get("/user", { params, headers });
};

export const getUserFollowerTotal = (id) => {
  const params = { id: `${id}` };
  return http.get("/user/follower", { params, headers });
};

export const getUserFollowingTotal = (id) => {
  const params = { id: `${id}` };
  return http.get("/user/following", { params, headers });
};

export const getUserVideos = (id) => {
  const params = { id: `${id}` };
  return http.get("user/videos", { params, headers });
};
