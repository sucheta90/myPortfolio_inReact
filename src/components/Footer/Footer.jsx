import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub} from '@fortawesome/free-brands-svg-icons';



export default function Footer(){

    return (
        <div className="container-fluid d-flex justify-content-center footer">
            
                <span className='p-1'>
                    <a href='https://www.linkedin.com/in/sucheta-mukherjee-07347b88/' target='_blank' rel='noreferrer' >
                    <FontAwesomeIcon icon={faLinkedin} style={{color: "white",}} />
                    </a>

                </span>
                <span className='p-1'>
                    <a href='https://github.com/sucheta90' target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon icon={faGithub} style={{color: "white",}} />
                    </a>
                </span>
          
        </div>
    )
}