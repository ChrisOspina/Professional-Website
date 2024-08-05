import Header from "./Components/header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import ChrisNav from './Components/ChrisNav';
import MobileHamburgerMenu from './Components/MobileHamburgerMenu';


function App() {
  return (
    <div className="App">
      <ChrisNav/>
      <MobileHamburgerMenu/>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
