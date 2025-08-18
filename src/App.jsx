import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Menu from './pages/Menu/Menu';
import Contact from './pages/Contact/Contact';
import Seminyak from './pages/Store/Seminyak';
import Amed from './pages/Store/Amed';
import Sanur from './pages/Store/Sanur';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/store/seminyak" element={<Seminyak />} />
            <Route path="/store/amed" element={<Amed />} />
            <Route path="/store/sanur" element={<Sanur />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App
