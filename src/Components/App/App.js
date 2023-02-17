import './App.css';
import Info from '../Info/Info';
import Navigation from '../Navigation/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from '../About/Info';
function App() {
  return (
    <div className="App">
      <p className='visit'>Page visited: 0 times</p>
      <Navigation/>
      <Info></Info>
      <About/>
      <About/>
      <About/>
      <About/>
    </div>
  );
}

export default App;
