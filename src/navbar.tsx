
import './App.css'
import logo from './assets/deadpool.jpeg'
import {  useEffect, useState } from 'react'

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
        <i className='bx bx-movie-play' ></i>
          <span className="link_name">Movies</span>
        </a>
        <ul className="sub-menu blank">
          <li><a className="link_name" href="#">there you are</a></li>
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
          <li><a href="#">Action</a></li>
          <li><a href="#">Comedy</a></li>
          <li><a href="#">Romance</a></li>
           <li><a href="#">Thriller</a></li>
        </ul>
      </li>
      <li>
        <div className="iocn-link">
          <a href="#">
       <i className='bx bx-movie-play' ></i>
            <span className="link_name">Tv Shows</span>
          </a>
          <i className='bx bxs-chevron-down arrow' ></i>
        </div>
        <ul className="sub-menu">
          <li><a className="link_name" href="#">TV Shows</a></li>
          <li><a href="#">Web Design</a></li>
          <li><a href="#">Login Form</a></li>
          <li><a href="#">Card Design</a></li>
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


