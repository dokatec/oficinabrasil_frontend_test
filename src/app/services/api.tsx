import axios from "axios";

const api = axios.create({
  baseURL: "https://api.coingecko.com/api/v3/simple/",
  timeout: 1000,
  headers: {
    "X-CMC_PRO_API_KEY": "CG-E57MSGzfYVKqsQe7y4otBPWv",
    Accept: "application/json",
  },
});

export default api;
