
import Footer from "./Components/Footer";
import ChrisNav from './Components/ChrisNav';
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './include/globals.css'
import EducationPage from "./pages/EducationPage";
import ExperiencePage from "./pages/ExperiencePage";
import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";
import CertificationsPage from "./pages/CertificationsPage";
import ContactPage from "./pages/ContactPage";


const App=()=> {
  return (
    <div className="pt-32">
    <BrowserRouter>
    {/*Navigation */}
    <ChrisNav/>
    {/*Routes*/}
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/experience" element={<ExperiencePage/>}/>
      <Route path="/projects" element={<ProjectsPage/>}/>
      <Route path="/skills" element={<SkillsPage/>}/>
      <Route path="/education" element={<EducationPage/>} />
      <Route path="/certifications" element={<CertificationsPage/>} />
      <Route path="/contact" element={<ContactPage/>}/>
    </Routes>
    <footer>
      <Footer/>
    </footer>
    </BrowserRouter>
    </div>
    
   
  );
}

export default App;
