
import { Outlet } from 'react-router';
import Navbar from './components/Navigation/Navbar';
import Footer from './components/Footer/Footer';
import './App.css'

function App() {
  // The Outlet will render page components dynamically
  return (
    <div className='container-fluid'>
      <header>
        <Navbar/>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer>
         <Footer/>
      </footer>
      
    </div>
  )
}

export default App
