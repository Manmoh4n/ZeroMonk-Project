import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Exp from "./components/Exp";
import Certificate from "./components/Certificate";
import Lang from "./components/Lang";
import Skill from "./components/Skill";
import Summ from "./components/Summ";

import "./styles/App.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/mediaquery.scss";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Exp" element={<Exp />} />
        <Route path="/Certificate" element={<Certificate />} />
        <Route path="/Lang" element={<Lang />} />
        <Route path="/Skill" element={<Skill />} />
        <Route path="/Summ" element={<Summ />} />
        
        <Route path="/services" element={<Services />} />
      </Routes>
     
    </Router>
  );
}

export default App;
