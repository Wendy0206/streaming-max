import { Navbar } from './navbar'
import './App.css'
import './home.css'
import './movieCard.css'
import { Home } from './home';

function App() {
  

const menu_on_off = (): void => {
const sidebar = document.querySelector<HTMLElement>(".sidebar");

  if (sidebar) {
 sidebar.classList.toggle("close");
  }
}


  return (
    <>
  
     <Navbar/>
       <section className="home-section">
    <div className="home-content">
      <i className='bx bx-menu' onClick={()=>menu_on_off()}></i>
      <span className="text">Streaming +</span>
    </div>
  <Home/>
  </section>

    {/* <Home/> */}
    </>
  )
}

export default App
