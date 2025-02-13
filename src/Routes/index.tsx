import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { About } from '../Pages/About'
import { Container } from '../Container/index'
import { Skills } from '../Pages/Skills'
import { Projects } from '../Pages/Projects'
import { Experience } from '../Pages/Experience'
import { Education } from '../Pages/Education'
import { Resume } from '../Pages/Resume'


export const Routers = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Container/>} >                                        
                    <Route path="about" element={<About/>} />
                    <Route path="skills" element={<Skills/>} />
                    <Route path="projects" element={<Projects/>} />
                    <Route path="experience" element={<Experience/>} />
                    <Route path="education" element={<Education/>} />
                    <Route path="resume" element={<Resume/>} />
                </Route>

            </Routes>
        </Router>
    )
}