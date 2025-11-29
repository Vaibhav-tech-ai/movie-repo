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
    const res = await customAxios.get(`trending/${type}/${timeWindow}?append_to_response=videos`);
    return res.data;
  } catch (err) {}
};

export const discoverResults = async (type, { page }) => {
  try {
    const res = await customAxios.get(
      `discover/${type}?page=${page}&include_adult=false`
    );
    return res.data;
  } catch (err) {}
};

export const getSearchResults = async (type, { query, page }) => {
  try {
    const res = await customAxios.get(
      `search/${type}?query=${query}&page=${page}&include_adult=false&language=en-US`
    );
    return res.data;
  } catch (err) {}
};
export const getTrailerKey = async (dataId, type) => {
  try {
    const res = await customAxios.get(`${type}/${dataId}/videos`);
    return res.data;
  } catch (err) {}
};
