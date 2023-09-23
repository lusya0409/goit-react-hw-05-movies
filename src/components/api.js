import axios from 'axios';

const API_KEY = '539a811151219621cc49aaf90f09b51e';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTrendingMovies = async day => {
  const resp = await axios.get(
    `/trending/movie/${day}?language=en-US&api_key=${API_KEY}`
  );
  return resp.data;
};

export const fetchMoviesSearchQuery = async searchQuery => {
  const resp = await axios.get(
    `/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1&api_key=${API_KEY}`
  );
  return resp.data;
};

export const fetchMovieById = async movieId => {
  const resp = await axios.get(
    `/movie/${movieId}?language=en-US&api_key=${API_KEY}`
  );
  return resp.data;
};

export const fetchCastWithMovie = async movieId => {
  const resp = await axios.get(
    `/movie/${movieId}/credits?language=en-US&api_key=${API_KEY}`
  );
  return resp.data;
};

export const fetchReviewsAboutMovie = async movieId => {
  const resp = await axios.get(
    `/movie/${movieId}/reviews?language=en-US&page=1&api_key=${API_KEY}`
  );
  return resp.data;
};
