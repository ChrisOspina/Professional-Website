
import Footer from "./Components/Footer";
import ChrisNav from './Components/ChrisNav';
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './include/globals.css'
import EducationPage from "./pages/EducationPage";

const App=()=> {
  return (
    <div className="pt-32">
    <BrowserRouter>
    {/*Navigation */}
    <ChrisNav/>
    {/*Routes*/}
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/education" element={<EducationPage/>} />
      <Route></Route>
    </Routes>
      <footer>
      <Footer/>
    </footer>
    </BrowserRouter>
    </div>
    
   
  );
}

export default App;
