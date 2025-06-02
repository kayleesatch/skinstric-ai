import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Hero from "./components/HeroSection/Hero";
import Nav from "./components/Nav";
import Introduction from './components/Introduction';
import Location from "./components/Location";
import PhotoSelect from "./components/PhotoSection/PhotoSelect";
import PhotoCapture from "./components/PhotoSection/PhotoCapture";
import Upload from "./components/PhotoSection/Upload";
import AnalysisMenu from "./components/AnalysisMenu";
import Demographics from "./components/DemographicsSection/Demographics";

function AppRoutes() {
  const location = useLocation();
  const pathname = location.pathname;
  
  const isHero = pathname === '/';

  const hasUploadedImages = [
    '/upload',
    '/analysis-menu',
    '/demographics'
  ].includes(pathname);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <Nav showImage={isHero} hasUploadedImages={hasUploadedImages} />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/location" element={<Location />} />
        <Route path="/photoselect" element={<PhotoSelect />} />
        <Route path="/photocapture" element={<PhotoCapture />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/analysis-menu" element={<AnalysisMenu />} />
        <Route path="/demographics" element={<Demographics />} />
      </Routes>
    </div>
  )
}


export default function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  )
}
