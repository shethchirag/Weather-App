import axios from "axios";
const BASE_URL = "https://api.openweathermap.org/data/2.5/";
const API_KEY = "a22dd9432db3e4b7f0625c5f35b954dc";

export const fetchDataFromApi = async (infoType, params) => {
  try {
    const { data } = await axios.get(BASE_URL + infoType, {
      params: {
        ...params,
        appid: API_KEY,
      },
    });
    return data;
  } catch (error) {
    return error;
  }
};
