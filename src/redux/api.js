import axios from "axios";
// INSTANCE 
const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    header :{
        "Content-type": "application/json"
    },
    timeout: 1000,
});

//INTERCEPTORS
// Add a request interceptor
api.interceptors.request.use(function (config) {
    console.log("request start", config)
    return config;
  }, function (error) {
    console.log("request error", error)
    return Promise.reject(error);
  });

// Add a response interceptor
api.interceptors.response.use(function (response) {
    console.log("response", response)
    return response;
  }, function (error) {
    console.log("response error", error)
    return Promise.reject(error);
  });

export default api