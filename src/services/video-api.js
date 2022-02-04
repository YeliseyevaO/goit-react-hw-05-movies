import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/movie";

const fetchTopVideo = async () => {
  const url = `${BASE_URL}/top_rated?api_key=5eb7bc95e03c1a409c17dc93d6cf9c19&language=en-US&page=1`;
  const { data } = await axios.get(url);

  return data.results;
};
const fetchVideo = async (videoId) => {
  const url = `${BASE_URL}/${videoId}?api_key=5eb7bc95e03c1a409c17dc93d6cf9c19&language=en-US`;
  const { data } = await axios.get(url);

  return data;
};
const fetchCast = async (id) => {
  const url = `${BASE_URL}/${id}/credits?api_key=5eb7bc95e03c1a409c17dc93d6cf9c19&language=en-US`;
  const { data } = await axios.get(url);
  return data.cast;
};
const fetchInfo = async (id) => {
  const url = `${BASE_URL}/${id}/reviews?api_key=5eb7bc95e03c1a409c17dc93d6cf9c19&language=en-US`;
  const { data } = await axios.get(url);
  return data.results;
};
const fetchWord = async (word) => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=5eb7bc95e03c1a409c17dc93d6cf9c19&language=en-US&query=${word}&page=1`;
  const { data } = await axios.get(url);
  return data.results;
};
export { fetchTopVideo, fetchVideo, fetchCast, fetchInfo, fetchWord };
