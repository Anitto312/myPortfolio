import { Link } from "react-router-dom"
import "./css/Navbar.css"

const Navbar =() => {
    return(
        <header>
            
            <nav>
                <li><Link to="/" class="linktag">Home</Link></li>
                <li><Link to="Aboutme" class="linktag">About me</Link></li>
                <li><Link to="/Skills" class="linktag">Skills</Link></li>
                <li><Link to="/Achievements" class="linktag">Acheivements</Link></li>
                <li><Link to="/Education" class="linktag">Education</Link></li>
                <li><Link to="/Contact" class="linktag">Contact</Link></li>
            </nav>
        </header>
    )
}
export default Navbar