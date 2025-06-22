import Header from "./Header";
import Hero from "./Hero";
import ProjectsSection from "./ProjectsSection";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Footer from "./Footer.";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // whether animation should happen only once
    });
  }, []);

  return (
    <>
        <Header></Header>
        <Hero></Hero>
        <ProjectsSection></ProjectsSection>
        <AboutMe></AboutMe>
        <Contact></Contact>
        <Footer></Footer>
    </>
  );
}

export default App
