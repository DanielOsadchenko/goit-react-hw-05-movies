export const URL = 'https://api.themoviedb.org/3';
export const API_KEY = '86ff1474d02492b68b238125fe79bb52';
export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

export async function getTrends() {
  const res = await fetch(`${URL}/trending/movie/day?api_key=${API_KEY}`);
  return await res.json();
}

export async function getFilmByQuery(page, query) {
  const res = await fetch(`${URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`);
  return await res.json();
}

export async function getFilmById(id) {
  const res = await fetch(`${URL}/movie/${id}?api_key=${API_KEY}`);
  return await res.json();
}

export async function getCastById(id) {
  const res = await fetch(`${URL}/movie/${id}/credits?api_key=${API_KEY}`);
  return await res.json();
}

export async function getReviewsById(id) {
  const res = await fetch(`${URL}/movie/${id}/reviews?api_key=${API_KEY}`);
  return await res.json();
}