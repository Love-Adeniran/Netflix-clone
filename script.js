console.log('hello')
async function getMovies(){
    const movies = 'https://www.themoviedb.org/movie';
    try {
        const MovieResponse = await fetch(movies);
        if (MovieResponse){
            const json = await MovieResponse.json();
            console.log(json)
        }
    } catch (error){
        console.log(error.message)
    }
}