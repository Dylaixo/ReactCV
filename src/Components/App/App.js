import './App.css';
import Info from '../Info/Info';
import Navigation from '../Navigation/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Footer/Footer';
import IconNav from '../IconNav/IconNav';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import ScrollToTop from "react-scroll-to-top";
import Education from '../Education/Education';
import Skills from '../Skills/Skills';
import Experience from '../Experience/Experience';
import About from '../About/About';
import Projects from '../Projects/Projects';
import CurrentDate from '../CurrentDate/CurrentDate';

function App() {
  return (
    <Router>
      <div className="App">
        <CurrentDate/>
        <Navigation/>
        <Info/>
        <hr className='mt-5 divide'></hr>
        <IconNav/>
        <Routes >
            <Route path='/About' element={<About/>}/>
            <Route path='/Education' element={<Education/>}/>
            <Route path='/Experience' element={<Experience/>}/>
            <Route path='/Skills' element={<Skills/>}/>
            <Route path='/Projects' element={<Projects/>}/>
        </Routes>
        <ScrollToTop/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
