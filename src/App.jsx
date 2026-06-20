import "./App.css";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { useState } from "react";
import Loader from "./components/Loader";


import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Features from "./components/Features";
import Dashboard from "./components/Dashboard";
import Demo from "./components/Demo";

import HowItWorks from "./components/HowItWorks";
import Why from "./components/Why";

import Contact from "./components/Contact";
import CTA from "./components/CTA";
import Footer from "./components/Footer";



function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    AOS.init({
      duration:900,
      once:true,
    });

    setTimeout(() => {
      setLoading(false);
    },1500);

  },[]);
  if(loading){

      return <Loader/>;

  }
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Dashboard />
      <Demo />
      <Why />
      <HowItWorks />
      <Contact />
      <CTA />
      <Footer />
    </>
  );
}

export default App;