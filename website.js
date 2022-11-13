// ჩვენ ამ საიტიდან წამოვიღეთ ფოტოები, შემდეგ ამ ფოტოებიდან ერთის ლინკი ამოვიღეთ(ჩვენივე საიიტიდან), და გავსტილეთ მხოლოდ ეს ერთი ფილმის სურათი თავის აღწერასთან და "იმდბ"-სთან ერთად


const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = 'https://image.tmdb.org/t/p/w1280';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="

let selectBtn = document.querySelector('.kid-owner');
let span = document.querySelectorAll('span')

let navSlide = () => {
    let burger = document.querySelector('.burger');
    let nav = document.querySelector('.nav-links');
    let navLinks = document.querySelectorAll('.nav-links li')
    
    burger.addEventListener('click', function() {
        // toggle nav
        nav.classList.toggle('donate');

        // animate links
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = " "
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`
            }
        });
        //burger bar "X"
        burger.classList.toggle('toggle');

    });
    
    
}

navSlide();


let toTop = document.querySelector('.to-top');
window.addEventListener('scroll', () => {
    //if page was scrolled with 100px
    if (window.pageYOffset > 100) {
        toTop.classList.add('active')
    }else {
        toTop.classList.remove('active')
    }
})


selectBtn.addEventListener('click', function () {
    selectBtn.classList.toggle('open');
})

let items = document.querySelectorAll('.item');

items.forEach(item => {
    item.addEventListener('click', function(){
    item.classList.toggle('checked');

    let checked = document.querySelectorAll('.checked');
    let btnText = document.querySelector('.button-text');

        if(checked && checked.length === 0){
            btnText.innerText = 'Fav movie type'

        }else if(checked && checked.length <= 4 ) {
            btnText.innerText = `${checked.length} Selected(Select others)`

        }else if (checked && checked.length >= 5){
            btnText.innerText = `${checked.length} That's all!`
        }else{
           btnText.innerText = 'Fav movie type'
        }
        
    })

})

    


getMovies(APIURL);


async function getMovies(url) {
    const resp = await fetch(url);
    const respData = await resp.json();


    showMovies(respData.results);

};

function showMovies(movies) {
    //clear main
    main.innerHTML = '';
     
    movies.forEach((movie) => {
        const { poster_path, title, vote_average, overview} = movie;

        const movieEl = document.createElement("div");
        movieEl.classList.add("movie");

        movieEl.innerHTML = `
            <img
                src="${IMGPATH + poster_path}"
                alt="${title}"
            />
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h4 class="kiddo">Overview:</h4>
                ${overview}
            </div>

        `;

        main.appendChild(movieEl);

    });
}



function getClassByRate(vote) {
    if(vote > 8){
        return 'green'
    }else if(vote >= 7){
        return 'orange'
    }else {
        return 'red'
    }
}

//ro ar darefreshdes
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    if(searchTerm) {
        getMovies(SEARCHAPI + searchTerm);


        search.value = '';
    }

});

//Fav movies_________________________





