import axios from "axios";

axios.defaults.baseURL = "https://tiktok-all-in-one.p.rapidapi.com/";

const http = {
  get: axios.get,
  put: axios.put,
  post: axios.post,
  delete: axios.delete,
};

export default http;
