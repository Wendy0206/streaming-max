
import '../styles/App.css'
import logo from '../assets/deadpool.jpeg'
import {  useEffect } from 'react'

export const Navbar=()=> {

useEffect(()=>{
launch_menu();
},[])


const launch_menu = (): void => {
  // Use a type assertion to specify the type of elements returned by querySelectorAll
  const arrows = document.querySelectorAll<HTMLElement>(".arrow");
  
  for (let i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener("click", (e: MouseEvent) => {
      // Type assertion to specify that target is an HTMLElement
      const target = e.target as HTMLElement;
      
      if (target) {
        // Type assertion for the parent element
        const arrowParent = target.parentElement?.parentElement as HTMLElement;
        
        if (arrowParent) {
          arrowParent.classList.toggle("showMenu");
        }
      }
    });
  }

};

 const genres = [
    { name: "Action", id: 28 },
    { name: "Adventure", id: 12 },
    { name: "Animation", id: 16 },
    { name: "Comedy", id: 35 },
    { name: "Crime", id: 80 },
    { name: "Documentary", id: 99 },
    { name: "Drama", id: 18 },
    { name: "Family", id: 10751 },
    { name: "Fantasy", id: 14 },
    { name: "History", id: 36 },
    { name: "Horror", id: 27 },
    { name: "Music", id: 10402 },
    { name: "Mystery", id: 9648 },
    { name: "Romance", id: 10749 },
    { name: "Sci-Fi", id: 878 },
    { name: "TV movie", id: 10770 },
    { name: "Thriller", id: 53 },
    { name: "War", id: 10752 },
    { name: "Western", id: 37 }
  ];

// add scollbar to the genre list

  return (
    
      
     <div className="sidebar close">
    <div className="logo-details">
     <i className='bx bx-camera-movie' ></i>
      <span className="logo_name">Streaming +</span>
    </div>
    <ul className="nav-links">
      <li>
        <a href="#">
          <i className='bx bx-grid-alt' ></i>
          <span className="link_name">Dashboard</span>
        </a>
      
      </li>
          <li>
        <a href="#">
        <i className='bx bxs-heart' ></i>
          <span className="link_name">Movies</span>
        </a>
        <ul className="sub-menu blank">
          <li><a className="link_name" href="#">Favorites</a></li>
        </ul>
      </li>
      <li>
        <div className="iocn-link">
          <a href="#">
            <i className='bx bx-collection' ></i>
            <span className="link_name">Genre</span>
          </a>
          <i className='bx bxs-chevron-down arrow' ></i>
        </div>
        <ul className="sub-menu">
          <li><a className="link_name" href="#">Genre</a></li>
          {genres.map((genre)=>(
<li><a href="#">{genre.name}</a></li>

          ))}
          
        
        </ul>
      </li>
    

  <li>
        <a href="#">
          <i className='bx bx-history'></i>
          <span className="link_name">Watch later</span>
        </a>
        <ul className="sub-menu blank">
          <li><a className="link_name" href="#">Watch later</a></li>
        </ul>
      </li>
 
  

      <li>
    <div className="profile-details">
      <div className="profile-content">
        <img src={logo} alt="profileImg"/>
      </div>
      <div className="name-job">
        <div className="profile_name">Wendy</div>
        <div className="job">Developer</div>
      </div>
      <i className='bx bx-log-out' ></i>
    </div>
  </li>
</ul>
  </div>
    
  )
}


