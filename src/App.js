import './App.css';
import Header from "./header";
import Main from "./Main";
import Footer from "./Footer";
import ContactNav from './ContactNav';
import MobileHamburgerMenu from './MobileHamburgerMenu';


function App() {
  return (
    <div className="App">
      <ContactNav/>
      <MobileHamburgerMenu/>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
