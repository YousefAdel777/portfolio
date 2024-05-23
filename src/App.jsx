import { Navbar, Hero, Contact, About, Works, Tech } from "./components";
import StarsCanvas from "./components/canvas/StarsCanvas";

const App = () => {
  return (
    <div className="bg-primary z-0 relative">
      <div className="bg-no-repeat bg-hero-pattern bg-center bg-cover">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Tech />
      <Works />
      <div className="z-0 relative">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
}

export default App;