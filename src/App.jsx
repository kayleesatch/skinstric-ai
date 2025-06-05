import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Hero from "@/components/HeroSection/Hero";
import Nav from "@/components/Nav";
import Introduction from '@/components/Introduction';
import Location from "@/components/Location";
import PhotoSelect from "@/components/PhotoSection/PhotoSelect";
import PhotoCapture from "@/components/PhotoSection/PhotoCapture";
import Upload from "@/components/PhotoSection/Upload";
import AnalysisMenu from "@/components/AnalysisMenu";
import Demographics from "@/components/DemographicsSection/Demographics";
import LoadingAnalysis from "@/components/LoadingAnalysis.jsx";
import CameraPrep from "@/components/PhotoSection/CameraPrep.jsx";


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
        <Route path="/photo-select" element={<PhotoSelect />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/analysis-menu" element={<AnalysisMenu />} />
        <Route path="/photo-capture" element={<PhotoCapture />} />
        <Route path="/loading-analysis" element={<LoadingAnalysis />} />
        <Route path="/demographics" element={<Demographics />} />
        <Route path="/camera-prep" element={<CameraPrep />} />
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
