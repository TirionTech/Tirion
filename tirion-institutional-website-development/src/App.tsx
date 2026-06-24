import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Problem from "./sections/Problem";
import Solution from "./sections/Solution";
import Coletor from "./sections/Coletor";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0c0820] text-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Problem />
        <Solution />
        <Coletor />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
