import { customAxios } from "./customAxios";

export const getMovies = async () => {
  try {
    const res = await customAxios.get("movie/11");
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const getTrending = async (type, timeWindow) => {
  try {
    const res = await customAxios.get(`trending/${type}/${timeWindow}`);
    return res.data;
  } catch (err) {}
};
