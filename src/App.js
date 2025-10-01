import Header from "./Components/header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import ChrisNav from './Components/ChrisNav';
import HomePage from "./pages/HomePage";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import EducationPage from "./pages/EducationPage";

const App=()=> {
  return (
    <BrowserRouter>
    {/*Navigation */}
    <nav className="pt-16 min-h-screen flex flex-col">
      <ChrisNav/>
    </nav>
   
    {/*Routes*/}
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/education" element={<EducationPage/>} />
    </Routes>
      <footer>
      <Footer/>
    </footer>
    </BrowserRouter>
   
  );
}

export default App;
