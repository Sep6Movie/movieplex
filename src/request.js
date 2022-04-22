const API_KEY = "e07a0c394bdeedde413d9b1e4ee9357e";

const requests = {
    fetchTrendingMovies: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
}

export default requests;