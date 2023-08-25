import {Link, useLocation} from 'react-router-dom';
import './Navbar.css';
export default function Navbar(){
    const currentPage = useLocation().pathname;

    return (
        <nav className="navbar navbar-expand-lg shadow bg-body-tertiary">
            <div className="container-fluid">
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className='nav-item px-2'>
                                <Link
                                to='/'
                                className= {currentPage === '/' ? 'nav-link active' : 'nav-link'}
                            >
                                <h3>Home</h3>
                                </Link>
                            </li>
                            <li className='nav-item px-2'>
                                <Link
                                to='/About'
                                className= {currentPage === '/About' ? 'nav-link active' : 'nav-link'}
                                >
                                <h3>About Me</h3>
                                </Link>
                            </li>
                            <li className='nav-item px-2'>
                                <Link
                                to='/Project'
                                className= {currentPage === '/Project' ? 'nav-link active' : 'nav-link'}
                            >
                               <h3>Portfolio</h3> 
                            </Link>
                            </li>
                            <li className='nav-item px-2'>
                                <Link
                                to='/Contact'
                                className= {currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
                                >
                                <h3>Contact</h3>
                                </Link>
                            </li>
                            <li className='nav-item px-2'>
                                <Link
                                to='/Resume'
                                className= {currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
                                >
                                <h3>Resume</h3>
                                </Link>
                            </li>
                        </ul>
                </div>
            </div>
        </nav>
    )
}