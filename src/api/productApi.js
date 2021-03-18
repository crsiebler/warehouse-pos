import axios from "axios";

export const getProducts = () => {
  return axios.get("https://60530fba45e4b30017290b42.mockapi.io/api/product/");
};
