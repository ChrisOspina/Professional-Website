import './App.css';
import Header from "./header";
import Main from "./Main";
import Footer from "./Footer";
import ContactNav from './ContactNav';


function App() {
  return (
    <div className="App">
      <ContactNav/>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
