import axios from "axios";
export const customAxios = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzU0MWY1YzJhZjk3MmU4Y2U2MTA4Nzg1ZDM3NzRlMiIsIm5iZiI6MTc1Nzc2ODU0NC44MDYwMDAyLCJzdWIiOiI2OGM1NmI2MGEzYmY3NmZjYTNhYTNiMmUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.-JUPrOKQXOCQFm3LMktoDKK9HCKIxW2M2f5Tbp7ayCc`,
  },
});
