import './App.css';
import Info from '../Info/Info';
import Navigation from '../Navigation/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from '../About/About';
import Footer from '../Footer/Footer';
import IconNav from '../IconNav/IconNav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Education from '../Education/Education';
import Skills from '../Skills/Skills';
import Experience from '../Experience/Experience';
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <Router>
      <div className="App">
        <p className='visit'>Page visited: 0 times</p>
        <Navigation/>
        <Info/>
        <hr className='mt-5 divide'></hr>
        <IconNav></IconNav>
        <Routes>
          <Route path='/About' element={<About/>}/>
          <Route path='/Education' element={<Education/>}/>
          <Route path='/Experience' element={<Experience/>}/>
          <Route path='/Skills' element={<Skills/>}/>
        </Routes>
        <ScrollToTop/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
