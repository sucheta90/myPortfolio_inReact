
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBootstrap, faHtml5,faCss3Alt,faSquareJs,faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';

export default function ResumePage(){
    return (
        <>
        <h1>Resume </h1>
        <div className="row">
            <div className="col">
                <a>Download Reasume</a>
            </div>
            <div className="col">
                <section>
                    <h3>
                        Front-end Proficiencies
                    </h3>
                <ul>
                    <li> <FontAwesomeIcon icon={faHtml5} /> HTML</li>
                    <li> <FontAwesomeIcon icon={faCss3Alt} /> CSS</li>
                    <li> <FontAwesomeIcon icon={faSquareJs} /> JavaScript</li>
                    <li>jQuery</li>
                    <li>Responsive Web Design</li>
                    <li><FontAwesomeIcon icon={faReact} /> React</li>
                    <li><FontAwesomeIcon icon={faBootstrap} /> Bootstrap</li>
                    <li>Bulma</li>
                </ul>
                </section>
                <section>
                    <h3>
                        Back-end Proficiencies
                    </h3>
                <ul>
                    <li>Rest APIs</li>
                    <li><FontAwesomeIcon icon={faNodeJs} /> Node</li>
                    <li>Express</li>
                    <li>MySQL, Sequelize</li>
                    <li>MongoDB</li>
                </ul>
                </section>
                
            </div>

        </div>
        </>
    )
}