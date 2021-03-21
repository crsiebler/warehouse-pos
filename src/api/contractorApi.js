import axios from "axios";

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://enigmatic-waters-63171.herokuapp.com"
    : "http://localhost:3001";

export const getContractor = (paylod) => {
  return axios.get(
    `${BASE_URL}/contractors/${encodeURIComponent(paylod.id.toUpperCase())}`
  );
};
