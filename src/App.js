import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components//Home/Home';
import About from './Components/About/About';
import Projects from './Components/Project/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Projects" element={<Projects />} />
          <Route exact path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
