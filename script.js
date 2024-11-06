const add = document.getElementById('add')
const close = document.getElementById('cancel');


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
            movieName.innerHTML += `<div class="w-0 mx-2 my-2 rounded-lg box scroll-ml-6 snap-start">
            
            <img src=${image_base_url}/${info.backdrop_path} class="image rounded-lg"/>
            </div>
            `
        })
    })
    .catch((err)=>{
        console.log(err);
    })
    add.style.display = 'block';
    close.style.display = 'none'
}
const plus = () => {
    if (add.style.display = 'block'){
        add.style.display = 'none';
        close.style.display = 'block';
    }
    else if (close.style.display = 'block'){
        add.style.display = 'block';
        close.style.display = 'none';
    }
}
const cancel = () => {
    if (close.style.display = 'block') {
        add.style.display = 'block';
        close.style.display = 'none';
    }
    else if (add.style.display = 'block') {
        add.style.display = 'none';
        close.style.display = 'block';
    }
}

// const faq = document.getElementById('menu-button');
// faq.addEventListener('click', function(){
//     faq.aria-haspopup
// })
//<p>${index + 1}. ${info.title}</p>