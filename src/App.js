import Header from "./Components/header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import ChrisNav from './Components/ChrisNav';

function App() {
  return (
    <div className="pt-32 min-h-screen flex flex-col">
      <ChrisNav/>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
