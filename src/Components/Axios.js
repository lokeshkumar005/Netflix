import axios from "axios";

const apiData = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default apiData;
