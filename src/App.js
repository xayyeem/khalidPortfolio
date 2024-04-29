import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import About from "./pages/About";



import ProjectDisplay from "./pages/ProjectDisplay";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path="/education" element={<Education />} />
          <Route path='/experience' element={<Experience/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>


        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
