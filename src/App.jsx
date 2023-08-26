
import { Outlet } from 'react-router';
import Navbar from './components/Navigation/Navbar';
import Footer from './components/Footer/Footer';
import './App.css'

function App() {
  // The Outlet will render page components dynamically
  return (
    <div className='container-fluid d-flex flex-column'>
      <header>
        <Navbar/>
      </header>
      <main id='view'>
        <Outlet/>
      </main>
      <footer className='justify-self-end'>
         <Footer/>
      </footer>
      
    </div>
  )
}

export default App
