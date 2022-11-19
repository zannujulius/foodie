import React from "react";
import axios from "axios";
import { getToken } from "./token";
const controller = new AbortController();

const token = async () => {
  let fetchedToken = await getToken("qws_token");
};

const instance = axios.create({
  baseURL: "https://api.app.voltz.africa/",
});

instance.interceptors.request.use(async (config) => {
  try {
    const token = await getToken("voltz_token");
    const user = await getToken("voltz_username");
    if (config.data) {
      config.data.sessionid = token;
      config.data.callerid = user;
    }
    config.signal = controller.signal;
    // console.log(config.data);
    // config.headers["Content-Type"] = "application/json";
    return config;
  } catch (err) {
    console.log(err.message);
  }
});

// instance.interceptors.response.use(async (res) => {
//   try {
//     // console.log(res);
//   } catch (err) {
//     // console.log(err.message);
//   }
// });

export default instance;
