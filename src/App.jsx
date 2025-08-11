import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
// import AnimatedBackground from "./components/AnimatedBackground";

// Pages
import About from "./pages/AboutPage"

// Math Topics (all inside /pages)
import NormalDerivative from "./pages/NormalDerivative";
import TangentPlane from "./pages/TangentPlane";
import TangentLine from "./pages/TangentLine";
import AngleBetweenSurfaces from "./pages/AngleBetweenSurfaces";
import SolenoidalIrrotational from "./components/Solenoidal";
import ScalarPotential from "./pages/ScalarPotential";
import Contact from "./pages/contact";
import Home from "./pages/home";
import GradientPage from "./pages/GradientPage";
import DirectionalDerivative from "./pages/DirectionalDerivative";
import UnitNormalPage from "./pages/UnitNormalPage";
import SolenoidalPage from "./pages/SolenoidalPage";
import IrrotationalPage from "./pages/IrrotationalPage";
import OrthogonalPage from "./pages/OrthogonalPage"; // adjust path as needed
import ScalarPotentialPage from "./pages/ScalarPotentialPage";
import FormulasPage from './pages/FormulasPage';
import ScrollToTop from "./components/ScrollToTop";
import Sidebar from "./components/SideBar";

// Inside your <Routes>





function App() {
  return (
    <Router>
      <ScrollToTop/>
      <div className="relative min-h-screen bg-black text-gray-900">
        <Sidebar/>
        <NavBar />

        <main className="relative z-10 px-4 py-6 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* Math Topics */}
            <Route path="/directional-derivative" element={<DirectionalDerivative/>}/>
            <Route path="gradient" element={<GradientPage/>}/>
            <Route path="/scalar-potential" element={<ScalarPotentialPage />} />
            <Route path="/irrotational" element={<IrrotationalPage />} />
            <Route path="/orthogonal-surfaces" element={<OrthogonalPage />} />
            <Route path="/normal-derivative" element={<NormalDerivative />} />
            <Route path="/tangent-plane" element={<TangentPlane />} />
            <Route path="/tangent-line" element={<TangentLine />} />
            <Route path="/unit-normal" element={<UnitNormalPage />} />
             <Route path="/solenoidal" element={<SolenoidalPage />} />
            <Route path="/angle-between-surfaces" element={<AngleBetweenSurfaces />} />

            <Route path="/scalar-potential" element={<ScalarPotential />} />
             <Route path="/formulas" element={<FormulasPage />} /> 
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
