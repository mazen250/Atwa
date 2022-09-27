import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";
import About from "./pages/about/About";
import Register from "./pages/registeration/components/Register";
import Conact from "./pages/contact/Conact";



function App() {

  
  return (
    <div className="App">


      <Router>
      <Navbar />
        
        <Routes>
          <Route path="/about" element={<About/>} />
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Conact/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </Router>
      <Footer />
 
    </div>
  );
}

export default App;
