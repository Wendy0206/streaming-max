import { useState, useEffect, useRef } from 'react'
import './App.css'
import axios from 'axios'

export const Home=()=> {

interface eachMovie {
  title: string;
  overview: string;
  genre: string[];
  poster_url: string;
  release_date: string;
vote_average:number;
}

interface eachSeries {
  title: string;
  overview: string;
  genre: string[];
  Season: string[];
  poster_url: string;
    release_date: string;
}

const [slideList, setSlideList] = useState <string[]>(['https://cdn.marvel.com/content/1x/dpool2024004_marvelvsalien.jpg']);
const clickCounter= useRef(0);

const [moviesList, setMoviesList] = useState<eachMovie[]>([
  {
    poster_url: 'https://cdn.marvel.com/content/1x/xfact2024002_cover.jpg',
    title: 'Dygeek',
    overview: 'Marvel and Pop Culture fan can look up series, comics and events of their favorite characters.',
    genre: ['Sci-Fi', 'Thriller'],
      release_date: '06/02/2023',
      vote_average:6.0
  },
 
 {
    poster_url: 'https://cdn.marvel.com/content/1x/aven2023018_cover.jpg',
    title: 'Fluffy',
    overview: ' Pop Culture fan can look up series, comics and events of their favorite characters.',
    genre: ['Action', 'Horror'],
      release_date: '03/22/2008',
      vote_average:6.0
  },
   {
    poster_url: 'https://cdn.marvel.com/content/1x/xfact2024002_cover.jpg',
    title: 'Best Movie',
    overview: ' comics and events of their favorite characters.  Pop Culture fan can look up series,',
    genre: ['Action', 'Horror'],
      release_date: '03/22/2008',
      vote_average:6.0
  },
  {
    poster_url: 'https://cdn.marvel.com/content/1x/dpool2024004_marvelvsalien.jpg',
    title: 'Dygeek',
    overview: 'Marvel and Pop Culture fan can look up series, comics and events of their favorite characters.',
    genre: ['Sci-Fi', 'Thriller'],
      release_date: '06/02/2023',
      vote_average:6.0
  },{
    poster_url: 'https://cdn.marvel.com/content/1x/xfact2024002_cover.jpg',
    title: 'Dygeek',
    overview: 'Marvel and Pop Culture fan can look up series, comics and events of their favorite characters.',
    genre: ['Sci-Fi', 'Thriller'],
      release_date: '06/02/2023',
      vote_average:6.0
  },
 
 {
    poster_url: 'https://cdn.marvel.com/content/1x/aven2023018_cover.jpg',
    title: 'Fluffy',
    overview: ' Pop Culture fan can look up series, comics and events of their favorite characters.',
    genre: ['Action', 'Horror'],
      release_date: '03/22/2008',
      vote_average:6.0
  },
   {
    poster_url: 'https://cdn.marvel.com/content/1x/xfact2024002_cover.jpg',
    title: 'Best Movie',
    overview: ' comics and events of their favorite characters.  Pop Culture fan can look up series,',
    genre: ['Action', 'Horror'],
      release_date: '03/22/2008',
      vote_average:6.0
  },
  {
    poster_url: 'https://cdn.marvel.com/content/1x/dpool2024004_marvelvsalien.jpg',
    title: 'Dygeek',
    overview: 'Marvel and Pop Culture fan can look up series, comics and events of their favorite characters.',
    genre: ['Sci-Fi', 'Thriller'],
      release_date: '06/02/2023',
      vote_average:6.0
  }


]);

const move_slider=():void=>{

// Ensure TypeScript knows the type of the elements you're working with
const movieList = document.querySelector<HTMLDivElement>('.movie-list');


  
  // Ensure movieList exists before using it
  if (!movieList) return;

  const itemNumber = movieList.querySelectorAll<HTMLImageElement>('img').length;
  

    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter.current++;

    if (itemNumber - (4 + clickCounter.current) + (4 - ratio) >= 0) {
      // Get current transform value
      const computedStyle = window.getComputedStyle(movieList);
      const transformValue = computedStyle.transform;
      let currentTransform = 0;

      if (transformValue !== 'none') {
        // Parse translateX value from transform
        const matrix = new DOMMatrix(transformValue);
        currentTransform = matrix.m41; // m41 is the translateX value in a matrix
      }

      movieList.style.transform = `translateX(${currentTransform - 300}px)`;
    } else {
      movieList.style.transform = 'translateX(0)';
      clickCounter.current = 0;
    }


  console.log('we are testing something '+Math.floor(window.innerWidth / 270));



}

useEffect(()=>{
getMovies();
},[])



const getMovies = async () => {
   const poster_path_base:string='https://image.tmdb.org/t/p/w500/';
axios.get('https://api.themoviedb.org/3/movie/popular?api_key=d690e22cc305f26ee731e993dbe748f7')
.then(response=>{
console.log('this is the data we get', response.data.results)

})
.catch(error=>console.log(error))
}



  return (
 
   
        <div className="content-container">
            <div className="featured-content" >

                  <p className="featured-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto illo dolor
                    deserunt nam assumenda ipsa eligendi dolore, ipsum id fugiat quo enim impedit, laboriosam omnis
                    minima voluptatibus incidunt. Accusamus, provident.</p>
                <button className="featured-button">WATCH</button>
            </div>
            <div className="movie-list-container">
                <h1 className="movie-list-title">Trending Movies</h1>
                <div className="movie-list-wrapper">
                    <div className="movie-list">

{moviesList.map((movie, index)=>

  <div className="movie-list-item" key={index}>
                            <img className="movie-list-item-img" src={movie.poster_url} alt=""/>
                            <span className="movie-list-item-title">{movie.title}</span>
                            <p className="movie-list-item-desc">{movie.overview}</p>
                            <button className="movie-list-item-button">Watch</button>
                        </div>

)}
                      
                      
                      

                    
                    </div>
                    <i className="fas fa-chevron-right arrow"  onClick={move_slider} ></i>
                </div>
            </div>
           
            <div className="featured-content">
                    <p className="featured-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto illo dolor
                    deserunt nam assumenda ipsa eligendi dolore, ipsum id fugiat quo enim impedit, laboriosam omnis
                    minima voluptatibus incidunt. Accusamus, provident.</p>
                <button className="featured-button">WATCH</button>
            </div>
             <div className="movie-list-container"></div>
                <h1 className="movie-list-title">Trending tv Shows</h1>
                <div className="movie-list-wrapper">
                    <div className="movie-list">

                    
{moviesList.map((movie,index)=>

  <div className="movie-list-item" key={index}>
                            <img className="movie-list-item-img" src={movie.poster_url} alt=""/>
                            <span className="movie-list-item-title">{movie.title}</span>
                            <p className="movie-list-item-desc">{movie.overview}</p>
                            <button className="movie-list-item-button">Watch</button>
                        </div>

)}
                    
                    </div>
                    <i className="fas fa-chevron-right arrow" onClick={move_slider}></i>
                </div>
            </div>
          
       
    
  )
}


