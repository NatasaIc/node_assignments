import axios from "axios";

const api = () => {
  return axios.create({
    baseURL: "http://localhost:1337/api",
  });
};

export const getMovies = async () => {
  return await api().get("/movies");
};

export const getMovie = async (id: number) => {
  return await api().get(`movies/${id}`);
};
