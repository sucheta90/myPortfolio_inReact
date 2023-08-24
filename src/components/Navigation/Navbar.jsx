import {Link, useLocation} from 'react-router-dom';

export default function Navbar(){
    const currentPage = useLocation().pathname;

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li>
                     <Link
                   to='/'
                    className= {currentPage === '/' ? 'nav-link active' : 'nav-link'}
                   >
                     Home
                     </Link>
                 </li>
                <li>
                     <Link
                 to='/About'
                 className= {currentPage === '/About' ? 'nav-link active' : 'nav-link'}
                    >
                    About Me
                 </Link>
                 </li>
                 <li>
                 <Link
                 to='/Project'
                 className= {currentPage === '/Project' ? 'nav-link active' : 'nav-link'}
                 >
                 Project
                 </Link>
             </li>
                 <li>
                     <Link
                   to='/Contact'
                     className= {currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
                     >
                     Contact
                     </Link>
                 </li>
                 <li>
                     <Link
                     to='/Resume'
                     className= {currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
                     >
                     Resume
                     </Link>
                 </li>
            </ul>
          
            </div>
        </div>
        </nav>
    )
}