
import './App.css';
import Header from './Header';
import Apifetch from './Apifetch';
import Footer from './Footer';
import Banner from './Banner';


function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Apifetch/>
      <Footer/>
    </div>
  );
}

export default App;
