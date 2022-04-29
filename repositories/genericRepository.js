import axios from "axios";

if (typeof window !== 'undefined') {
 var accessToken = localStorage.getItem('user_accessToken')
} 

const baseDomain = "https://easy-transport-fyp.herokuapp.com";

export const appName = "easy_transport";

export const customHeaders = {
  Accept: "application/json",
  "content-type": "application/json",
  "Authorization" : `Bearer ${accessToken}`
};

export const baseUrl = `${baseDomain}`;

const instance = axios.create({
   baseUrl,
   headers: customHeaders,
});

export default instance;

export const getError = (error) => {
  if (error.response) {
    if (error?.response?.data?.data?.errorMessage) {
      return `${error.response.data.data.errorMessage}`;
    } else if (error?.response?.data?.message) {
      return `${error.response.data.message}`;
    } else {
      return error.response;
    }
  } else if (error.request) {
    return error.request;
  } else {
    return `${error}`;
  }
};
