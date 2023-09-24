import { IMovieCard } from "@/src/components/MovieCard";
import axios from "axios";

const API_KEY = process.env.API_KEY;
const API_BASE_URL = "https://api.themoviedb.org/3";

const client = axios.create({
  baseURL: API_BASE_URL,
  params: { api_key: API_KEY },
});

export const getMovies = async (type: string, page: number) => {
  try {
    const response = await client.get(`/movie/${type}`, {
      params: { page: page },
    });

    if (response.data && response.data.results) {
      return response.data;
    } else {
      console.error("Couldn't get the data!");
    }
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getMovieDetails = async (id: IMovieCard["id"]) => {
  try {
    const response = await client.get(`/movie/${id}`);

    if (response.data) {
      return response.data;
    } else {
      console.error("Couldn't get the data!");
    }
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getMovieCasts = async (id: IMovieCard["id"]) => {
  try {
    const response = await client.get(`/movie/${id}/credits`);

    if (response.data) {
      return response.data;
    } else {
      console.error("Couldn't get the data!");
    }
  } catch (error) {
    console.error(error);
    return [];
  }
};
