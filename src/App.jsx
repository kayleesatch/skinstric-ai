import Hero from "./components/HeroSection/Hero";
import Nav from "./components/Nav";


function App() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <Nav />
      <Hero />
    </div>
  )
}

export default App;