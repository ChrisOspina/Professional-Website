import Header from "./Components/header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import ChrisNav from './Components/ChrisNav';
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const App=()=> {
  return (
    <BrowserRouter>
    {/*Navigation */}
    <div className="pt-32 min-h-screen flex flex-col">
      <ChrisNav/>
      <Header/>
      <Main/>
      <Footer/>
    </div>
    {/*Routes*/}
    <Routes>
      <Route></Route>
      <Route></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
