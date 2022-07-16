import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import About from './About';
import Education from './Education';
import Experience from './Experience';

export default function Navbar() {
    return (
        <nav className="navbar_container">
            <BrowserRouter>
            <ul className="navbar_ul">
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/education">Education</Link>
                </li>
                <li>
                    <Link to="/experience">Experience</Link>
                </li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contacts</li>
            </ul>
            <div>
            <Routes>
                <Route exact path="/" element={<About/>} />
                <Route exact path="education" element={<Education/>} />
                <Route exact path="experience" element={<Experience/>} />
            </Routes>
            </div>
            </BrowserRouter>
        </nav>
    )
}