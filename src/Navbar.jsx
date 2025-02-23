import { Link } from "react-router-dom"
import "./css/Navbar.css"

const Navbar =() => {
    return(
        <header>
            <nav>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Skills">Skills</Link></li>
                <li>Achievement</li>
                <li>Education</li>
                <li>Contact</li>
            </nav>
        </header>
    )
}
export default Navbar