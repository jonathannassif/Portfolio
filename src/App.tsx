import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css';
import { Analytics } from "@vercel/analytics/next"


import Hero from './Components/Hero'
import Results from './Components/Results'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'

function App() {

 useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Results />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Analytics />
    </div>
  );
}

export default App;