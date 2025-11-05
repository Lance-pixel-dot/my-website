import Header from "./Header";
import Hero from "./Hero";
import ProjectsSection from "./ProjectsSection";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Footer from "./Footer.";
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

function App() {

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollProgress = Math.min(scrollY / (document.body.scrollHeight - window.innerHeight), 1);

  // Interpolate gradient based on scroll
  const gradients = [
    "linear-gradient(135deg, #0f0c29, #302b63, #24243e)", // top
    "linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)", // mid
    "linear-gradient(135deg, #000428, #004e92, #00223E)"  // bottom
  ];

  const currentGradient =
    scrollProgress < 0.5
      ? gradients[0]
      : scrollProgress < 0.8
      ? gradients[1]
      : gradients[2];

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // whether animation should happen only once
    });
    window.scrollTo(0, 0); // Scroll to top on page load
  }, []);

  return (
    <>
        <div className="min-h-screen text-white transition-all duration-700 ease-in-out"
      style={{ background: currentGradient }}>
          <Header></Header>
          <Hero></Hero>
          <ProjectsSection></ProjectsSection>
          <AboutMe></AboutMe>
          <Contact></Contact>
          <Footer></Footer>
        </div>
    </>
  );
}

export default App
