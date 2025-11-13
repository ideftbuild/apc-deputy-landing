// src/App.tsx
// Access components from window object
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Vision from "./components/Vision";
import Donation from "./components/Donation";
import ContactForm from "./components/ContactForm";
import SocialMedia from "./components/SocialMedia";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";
import CoreValues from "./components/CoreValues";
import Events from "./components/Events";

/**
 * The main application component.
 * This component orchestrates the layout of the entire landing page by importing and
 * arranging all the modular section components.
 */

export default function App() {
  return (
    <div className="">
      <Header />

      <main>
        <Hero />

        <div className="relative z-20 bg-[#f5f5f5] overflow-hidden">
          {/*<div className="flex items-center justify-center gap-4 pt-8">
            <div className="h-px bg-red-300 w-20"></div>
            <p className="text-sm font-semibold text-red-500 uppercase tracking-widest">
              ALM we move!
            </p>
            <div className="h-px bg-red-300 w-20"></div>
          </div>*/}

          <About />
          <CoreValues />
          <Vision />
          <Events />
        </div>
        <Donation />

        <div className="flex flex-col md:flex-row-reverse items-center justify-center relative z-10 overflow-hidden py-12 md:py-24 px-6 md:px-12">
          <ScrollReveal animationType="fadeRight">
            <ContactForm />
          </ScrollReveal>
          <ScrollReveal animationType="fadeLeft">
            <SocialMedia />
          </ScrollReveal>
        </div>

        <Footer />
      </main>
    </div>
  );
}
