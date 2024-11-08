import { Navbar } from './components/navbar'
import './styles/App.css'
import './styles/home.css'
import './styles/movieCard.css'
import { Home } from './components/home';
import { Training } from './components/training';
import { Loading } from './components/loading';
import axios from "axios";
import { useState, useEffect } from 'react';

function App() {

//const path_base: string = "http://localhost:4000/upload-movies";

   const [isLoading, setIsLoading] = useState(true);
//const [userMoviesData, setUserMoviesData] = useState<any>(null);
  interface eachMovie {
      id: number;
    title: string;
    overview: string;
    genre: string[];
    poster_url: string;
    release_date: string;
    vote_average: number;
  }
   const getUserMovies = async (): Promise<any> => {
  const path_base: string = ""; // Set your API endpoint here

  try {
    const response = await axios.get(path_base);
    
    // Extract movies, favorites, and watchLater directly
    const { movies, favorites, watchLater } = response.data;

    // Return the combined data in one object
    return { movies, favorites, watchLater };

  } catch (error) {
    console.error(error);
    return {}; // Return an empty object on error
  }
};


 useEffect(() => {

//    const fetchData = async () => {
//       const data = await getUserMovies();
//       setUserMoviesData(data);  // Store the fetched data
//       setIsLoading(false);  
//    };

// fetchData(); 
  const timeout = setTimeout(() => {
      setIsLoading(false);  // Set loading to false after 2.5 seconds
    }, 2500);
return () => clearTimeout(timeout);
  }, []);

  const moviesList=[
    {
        "id": 912649,
        "title": "Venom: The Last Dance",
        "overview": "Eddie and Venom are on the run. Hunted by both of their worlds and with the net ...",
        "poster_url": "https://image.tmdb.org/t/p/w500//k42Owka8v91trK1qMYwCQCNwJKr.jpg",
        "genre": [
            878,
            28,
            12
        ],
        "score": 6.6,
        "release_date": "2024-10-22"
    },
    {
        "id": 1184918,
        "title": "The Wild Robot",
        "overview": "After a shipwreck, an intelligent robot called Roz is stranded on an uninhabited...",
        "poster_url": "https://image.tmdb.org/t/p/w500//wTnV3PCVW5O92JMrFvvrRcV39RU.jpg",
        "genre": [
            16,
            878,
            10751
        ],
        "score": 8.583,
        "release_date": "2024-09-12"
    },
    {
        "id": 1034541,
        "title": "Terrifier 3",
        "overview": "Five years after surviving Art the Clown's Halloween massacre, Sienna and Jonath...",
        "poster_url": "https://image.tmdb.org/t/p/w500//63xYQj1BwRFielxsBDXvHIJyXVm.jpg",
        "genre": [
            27,
            53
        ],
        "score": 7.3,
        "release_date": "2024-10-09"
    },
    {
        "id": 933260,
        "title": "The Substance",
        "overview": "A fading celebrity decides to use a black market drug, a cell-replicating substa...",
        "poster_url": "https://image.tmdb.org/t/p/w500//lqoMzCcZYEFK729d6qzt349fB4o.jpg",
        "genre": [
            27,
            878,
            53
        ],
        "score": 7.3,
        "release_date": "2024-09-07"
    },
    {
        "id": 1029235,
        "title": "Azrael",
        "overview": "In a world where no one speaks, a devout female hunts down a young woman who has...",
        "poster_url": "https://image.tmdb.org/t/p/w500//qpdFKDvJS7oLKTcBLXOaMwUESbs.jpg",
        "genre": [
            28,
            27,
            53
        ],
        "score": 6.1,
        "release_date": "2024-09-27"
    },
    {
        "id": 1159311,
        "title": "僕のヒーローアカデミア THE MOVIE ユアネクスト",
        "overview": "In a society devastated by the effects of an all-out war between heroes and vill...",
        "poster_url": "https://image.tmdb.org/t/p/w500//8rdB1wkheEMMqcY8qLAKjCMPcnZ.jpg",
        "genre": [
            16,
            28,
            12,
            878
        ],
        "score": 6.758,
        "release_date": "2024-08-02"
    },
    {
        "id": 978796,
        "title": "Bagman",
        "overview": "For centuries and across cultures, parents have warned their children of the leg...",
        "poster_url": "https://image.tmdb.org/t/p/w500//pkKcIP2B2ILAh4lGKyn9YkO0L1t.jpg",
        "genre": [
            27,
            53
        ],
        "score": 6.5,
        "release_date": "2024-09-20"
    },
    {
        "id": 1047373,
        "title": "The Silent Hour",
        "overview": "While working a case as an interpreter, a hearing-impaired police detective must...",
        "poster_url": "https://image.tmdb.org/t/p/w500//j736cRzBtEPCm0nHnpRN1prqiqj.jpg",
        "genre": [
            80,
            53,
            28
        ],
        "score": 6.4,
        "release_date": "2024-10-03"
    },
    {
        "id": 1100782,
        "title": "Smile 2",
        "overview": "About to embark on a new world tour, global pop sensation Skye Riley begins expe...",
        "poster_url": "https://image.tmdb.org/t/p/w500//aE85MnPIsSoSs3978Noo16BRsKN.jpg",
        "genre": [
            27,
            9648
        ],
        "score": 6.889,
        "release_date": "2024-10-16"
    },
    {
        "id": 823219,
        "title": "Flow",
        "overview": "A solitary cat, displaced by a great flood, finds refuge on a boat with various ...",
        "poster_url": "https://image.tmdb.org/t/p/w500//dzDMewC0Hwv01SROiWgKOi4iOc1.jpg",
        "genre": [
            16,
            14,
            12
        ],
        "score": 8.767,
        "release_date": "2024-08-30"
    },
    {
        "id": 1249532,
        "title": "Rippy",
        "overview": "Young police officer Maddy is determined to live up to her deceased father's leg...",
        "poster_url": "https://image.tmdb.org/t/p/w500//cZ5U4Ae74g29E02JR5oR98RQhiR.jpg",
        "genre": [
            27,
            9648
        ],
        "score": 3.8,
        "release_date": "2024-10-25"
    },
    {
        "id": 814889,
        "title": "Never Let Go",
        "overview": "As an evil takes over the world beyond their front doorstep, the only protection...",
        "poster_url": "https://image.tmdb.org/t/p/w500//3EpZ2ksjijmdr8BhISP03PYzNFW.jpg",
        "genre": [
            27,
            18
        ],
        "score": 6.1,
        "release_date": "2024-09-18"
    },
    {
        "id": 832964,
        "title": "Lee",
        "overview": "The true story of photographer Elizabeth 'Lee' Miller, a fashion model who becam...",
        "poster_url": "https://image.tmdb.org/t/p/w500//zdNWyuim8gpJHe1LtKaDrs43dWz.jpg",
        "genre": [
            18,
            36,
            10752
        ],
        "score": 6.9,
        "release_date": "2024-09-12"
    },
    {
        "id": 1064028,
        "title": "Subservience",
        "overview": "With his wife out sick, a struggling father brings home a lifelike AI, only to h...",
        "poster_url": "https://image.tmdb.org/t/p/w500//gBenxR01Uy0Ev9RTIw6dVBPoyQU.jpg",
        "genre": [
            878,
            53,
            27
        ],
        "score": 6.77,
        "release_date": "2024-08-15"
    },
    {
        "id": 835113,
        "title": "Woman of the Hour",
        "overview": "An aspiring actress crosses paths with a prolific serial killer in '70s LA when ...",
        "poster_url": "https://image.tmdb.org/t/p/w500//nc9ZqrJFbcUdlMg9lxXXtJb24jU.jpg",
        "genre": [
            80,
            18,
            53
        ],
        "score": 6.6,
        "release_date": "2024-10-03"
    },
    {
        "id": 1084736,
        "title": "Le Comte de Monte-Cristo",
        "overview": "Edmond Dantes becomes the target of a sinister plot and is arrested on his weddi...",
        "poster_url": "https://image.tmdb.org/t/p/w500//sAT1P3FGhtJ68anUyJScnMu8t1l.jpg",
        "genre": [
            12,
            36,
            28,
            18,
            10749,
            53
        ],
        "score": 8.386,
        "release_date": "2024-06-28"
    },
    {
        "id": 931944,
        "title": "Des Teufels Bad",
        "overview": "18th century Austria. Villages surrounded by deep forests. A woman is sentenced ...",
        "poster_url": "https://image.tmdb.org/t/p/w500//ycoXsJomPmPjtCfNweM0UWiTkPY.jpg",
        "genre": [
            27,
            9648,
            36
        ],
        "score": 7,
        "release_date": "2024-03-08"
    },
    {
        "id": 1226578,
        "title": "Longlegs",
        "overview": "FBI Agent Lee Harker is assigned to an unsolved serial killer case that takes an...",
        "poster_url": "https://image.tmdb.org/t/p/w500//5aj8vVGFwGVbQQs26ywhg4Zxk2L.jpg",
        "genre": [
            27,
            53
        ],
        "score": 6.7,
        "release_date": "2024-05-31"
    },
    {
        "id": 748230,
        "title": "Salem's Lot",
        "overview": "Author Ben Mears returns to his childhood home of Jerusalem's Lot only to discov...",
        "poster_url": "https://image.tmdb.org/t/p/w500//j7ncdqBVufydVzVtxmXu8Ago4ox.jpg",
        "genre": [
            27,
            9648
        ],
        "score": 6.277,
        "release_date": "2024-10-03"
    },
    {
        "id": 558449,
        "title": "Gladiator II",
        "overview": "Years after witnessing the death of the revered hero Maximus at the hands of his...",
        "poster_url": "https://image.tmdb.org/t/p/w500//2cxhvwyEwRlysAmRH4iodkvo0z5.jpg",
        "genre": [
            28,
            12
        ],
        "score": 0,
        "release_date": "2024-11-13"
    }
];


const userMoviesData={
  movies: moviesList.slice(0,6),
  favorites: moviesList.slice(7,13),
  watchLater:moviesList.slice(14,19)
}

const menu_on_off = (): void => {

const sidebar = document.querySelector<HTMLElement>(".sidebar");

  if (sidebar) {
 sidebar.classList.toggle("close");
  }
}


  return (
    <div className='all_container'>
  
     <Navbar/>
       <section className="home-section">
    <div className="home-content">
      <i className='bx bx-menu' onClick={()=>menu_on_off()}></i>
      <span className="text">Streaming +</span>
    </div>
   {isLoading? <Loading /> : <Home movies={userMoviesData?.movies} favorites={userMoviesData?.favorites} watchLater={userMoviesData?.watchLater} />}

  </section>


    </div>
  )
}

export default App
