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
export { fetchTopVideo, fetchVideo };
