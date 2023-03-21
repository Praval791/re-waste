import Blog from "components/Blog";
import Bot from "components/Bot";
import Contact from "components/Contact";
import Footer from "components/Footer";
import Home from "components/Home";
import Milestones from "components/Milestones";
import Portfolio from "components/Portfolio";
import Pricing from "components/Pricing";
import ScrollToTop from "components/ScrollToTop";
import Services from "components/Services";
import Skills from "components/Skills";
import Testimonials from "components/Testimonials";
import { motion } from "framer-motion";
import React from "react";
import "./components/Bot.css";

function App() {
  return (
    <motion.div initial="hidden" animate="show">
      <Home />
      <Services />
      <Portfolio />
      <Milestones />
      <Blog />
      {/* <Pricing /> */}
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTop />
      <Bot />
    </motion.div>
  );
}

export default App;