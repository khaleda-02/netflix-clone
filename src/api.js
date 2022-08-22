const key = "666a85401ca00a79ddf98f715aace154";
export const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
  requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
};

export const searchLink = (name) => {
  return `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${name}`
}
export const getMovieById = (id) => {
  return `https://api.themoviedb.org/3/movie/${id}?api_key=${key}`
}
export const getSimillarById = (id) => {
  return `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${key}&language=en-US&page=1`
}
export const gettrailerById = (id) => {
  return `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=en-US`
}


