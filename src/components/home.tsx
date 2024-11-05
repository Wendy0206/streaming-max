import { useRef } from "react";
import "../styles/App.css";


  interface eachMovie {
    title: string;
    overview: string;
    genre: string[];
    poster_url: string;
    release_date: string;
    vote_average: number;
  }


interface HomeProps {
  movies: eachMovie[];
  favorites: eachMovie[];
  watchLater: eachMovie[];
}

export const Home = ({movies, favorites, watchLater}: HomeProps) => {


 const movieListRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const move_slider = (index: number): void => {
    const movieList = movieListRefs.current[index];
    if (!movieList) return;

    const ratio = Math.floor(window.innerWidth / 270); // Items visible in one screen (assuming 270px width per item)
    const itemCount = movieList.querySelectorAll<HTMLImageElement>("img").length;

    const maxMove = (itemCount - ratio) * 270; // Calculate maximum move distance

    // Get current translation
    const currentTransform = parseInt(
      movieList.style.transform.replace("translateX(", "").replace("px)", "") || "0",
      10
    );

    // Calculate new translation
    let newTransform = currentTransform - 300; // Move by 300px

    // If the move exceeds the max, reset to the beginning
    if (newTransform < -maxMove) {
      newTransform = 0;
    }

    // Apply the new translation
    movieList.style.transform = `translateX(${newTransform}px)`;

    // Add transition for smooth sliding
    movieList.style.transition = "transform 0.3s ease-in-out";
  };




  return (
    <div className="content-container">
      <div className="featured-content" style={{
    background: 'linear-gradient(to bottom, rgba(0,0,0,0), #31363F), url("https://cdn.marvel.com/content/1x/dpool2024004_marvelvsalien.jpg") no-repeat center center / 100%',
  }}>
        <p className="featured-desc">
         {movies[0].overview}
        </p>
        <button className="featured-button">WATCH</button>
      </div>

      <div className="movie-list-container">
        <h1 className="movie-list-title">Trending Movies</h1>
        <div className="movie-list-wrapper">
          <div className="movie-list"  ref={(el) => (movieListRefs.current[0] = el)}>
            {movies.map((movie, index) => (
              <div className="movie-list-item" key={index}>
                <img
                  className="movie-list-item-img"
                  src={movie.poster_url}
                  alt=""
                />
                <span className="movie-list-item-title">{movie.title}</span>
                <p className="movie-list-item-desc">{movie.overview}</p>
                <button className="movie-list-item-button">Watch</button>
              </div>
            ))}
          </div>
          <i className="fas fa-chevron-right arrow" onClick={()=> move_slider(0)}></i>
        </div>
      </div>

      <div className="featured-content"  style={{
    background: 'linear-gradient(to bottom, rgba(0,0,0,0), #31363F), url("https://cdn.marvel.com/content/1x/dpool2024004_marvelvsalien.jpg") no-repeat center center / 100%',
  }}>
        <p className="featured-desc">
          {movies[1].overview}
        </p>
        <button className="featured-button">WATCH</button>
      </div>

      <div className="movie-list-container"></div>
      <h1 className="movie-list-title">My favorites</h1>
      <div className="movie-list-wrapper">
        <div className="movie-list"  ref={(el) => (movieListRefs.current[1] = el)}>
          {favorites.map((movie, index) => (
            <div className="movie-list-item" key={index}>
              <img
                className="movie-list-item-img"
                src={movie.poster_url}
                alt=""
              />
              <span className="movie-list-item-title">{movie.title}</span>
              <p className="movie-list-item-desc">{movie.overview}</p>
              <button className="movie-list-item-button">Watch</button>
            </div>
          ))}
        </div>
        <i className="fas fa-chevron-right arrow" onClick={ ()=> move_slider(1)}></i>
      </div>

      <div className="movie-list-container">
        <h1 className="movie-list-title">Watch-later</h1>
        <div className="movie-list-wrapper">
          <div className="movie-list"   ref={(el) => (movieListRefs.current[2] = el)}>
            {watchLater.map((movie, index) => (
              <div className="movie-list-item" key={index}>
                <img
                  className="movie-list-item-img"
                  src={movie.poster_url}
                  alt=""
                />
                <span className="movie-list-item-title">{movie.title}</span>
                <p className="movie-list-item-desc">{movie.overview}</p>
                <button className="movie-list-item-button">Watch</button>
              </div>
            ))}
          </div>
          <i className="fas fa-chevron-right arrow" onClick={ ()=> move_slider(2)}></i>
        </div>
      </div>


    </div>
  );
};
