import './App.css';
import Info from '../Info/Info';
import Navigation from '../Navigation/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from '../About/Info';
import Footer from '../Footer/Footer';
function App() {
  return (
    <div className="App">
      <p className='visit'>Page visited: 0 times</p>
      <Navigation/>
      <Info/>
      <About/>
      <About/>
      <About/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
