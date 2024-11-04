

const getMovies = () => {
    // const movies = 'https://api.themoviedb.org/3/movie/157336/videos?api_key=008b984b2b30cb1875d5d38b64308b89';
    // const movies = 'https://api.themoviedb.org/3/movie/157336?api_key=008b984b2b30cb1875d5d38b64308b89';
    // const movies = 'https://api.themoviedb.org/3/account/null/lists?api_key=008b984b2b30cb1875d5d38b64308b89page=1'
    // const url = "https://fakestoreapi.com/products"
    const popMovies = "https://api.themoviedb.org/3/movie/popular"
    const apiKey = "008b984b2b30cb1875d5d38b64308b89" 
    const image_base_url = "https://image.tmdb.org/t/p/original"
    fetch(`${popMovies}?api_key=${apiKey}`)
    .then(res=>res.json())
    .then((result)=>{
        console.log(result.results);
        
        let answer = result.results
        answer.map((info, index)=>{
            console.log(info);
            movieName.innerHTML += `<div class=" border border-red-400 w-screen rounded ">
            
            <img src=${image_base_url}/${info.backdrop_path} class=""/>
            </div>
            `
        })
    })
    .catch((err)=>{
        console.log(err);
    })

}

const faq = document.getElementById('menu-button');
faq.addEventListener('click', function(){
    faq.aria-haspopup
})
//<p>${index + 1}. ${info.title}</p>