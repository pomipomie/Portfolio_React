import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import About from './About';
import Contact from "./Contact";
import Education from './Education';
import Experience from './Experience';
import ProjectDetails from "./ProjectDetails";
import Projects from "./Projects";
import Skills from "./Skills";

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
                <li>
                    <Link to="/skills">Skills</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            <div>
            <Routes>
                <Route exact path="/" element={<About/>} />
                <Route exact path="education" element={<Education/>} />
                <Route exact path="experience" element={<Experience/>} />
                <Route exact path="skills" element={<Skills/>} />
                <Route exact path="projects" element={<Projects/>} />
                <Route path="projects/*" element={<ProjectDetails />} />
                <Route exact path="contact" element={<Contact/>} />
            </Routes>
            </div>
            </BrowserRouter>
        </nav>
    )
}