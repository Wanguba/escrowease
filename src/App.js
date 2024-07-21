import './App.css';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Header from './components/Header';
import Samples from './components/Samples';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Welcome/>
      <Samples/>
      <Footer/>
    </div>
  );
}

export default App;
