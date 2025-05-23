import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Hero from "./components/HeroSection/Hero";
import Nav from "./components/Nav";
import Introduction from './components/Introduction';
import Location from "./components/Location";

function AppRoutes() {
  const location = useLocation();
  const isHero = location.pathname === '/';

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <Nav showImage={isHero} />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/location" element={<Location />} />
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
