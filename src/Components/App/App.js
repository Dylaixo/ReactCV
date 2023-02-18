import './App.css';
import Info from '../Info/Info';
import Navigation from '../Navigation/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Footer/Footer';
import IconNav from '../IconNav/IconNav';
import { BrowserRouter as Router} from 'react-router-dom';
import ScrollToTop from "react-scroll-to-top";
import RouterAnimation from '../RouterAnimation/RouterAnimation';

function App() {
  return (
    <Router>
      <div className="App">
        <p className='visit'>Page visited: 0 times</p>
        <Navigation/>
        <Info/>
        <hr className='mt-5 divide'></hr>
        <IconNav/>
        <RouterAnimation/>
        <ScrollToTop/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
