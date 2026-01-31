export const API_KEY = 'ea2773e6aac2a16fcde4ff24c489b068'
export const BASE_URL = 'https://api.themoviedb.org/3'
export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'

export const endpoints = {
  popular: page =>
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`,
  topRated: page =>
    `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`,
  upcoming: page =>
    `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`,
  movieDetails: id =>
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`,
  movieCredits: id =>
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`,
  search: (query, page) =>
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}`,
}
