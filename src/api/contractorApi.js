import axios from "axios";

export const getContractor = (paylod) => {
  return axios.get(
    `https://60530fba45e4b30017290b42.mockapi.io/api/contractor/${paylod.id}`
  );
};
