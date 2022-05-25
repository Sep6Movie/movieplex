const API_KEY = "e07a0c394bdeedde413d9b1e4ee9357e";


    const requests = {
        fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
        fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
        fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
        fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
        fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
        fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
        fetchDocumantaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
        fetchActorsFromMove: `/movie/movie?/credits?api_key=${API_KEY}&language=en-US`
}

export default requests;