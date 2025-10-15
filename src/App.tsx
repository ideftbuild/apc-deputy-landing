// src/App.tsx
// Access components from window object
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import VisionMission from "./components/VisionMission";
import Donation from "./components/Donation";
import "./App.css";
import ContactForm from "./components/ContactForm";
import SocialMedia from "./components/SocialMedia";
import Footer from "./components/Footer";

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

        <div className="relative z-20 bg-[#f5f5f5]">
          <div className="flex items-center justify-center gap-4 my-12">
            <div className="h-px bg-red-300 w-20"></div>
            <p className="text-sm font-semibold text-red-600 uppercase tracking-widest">
              ALM we move!
            </p>
            <div className="h-px bg-red-300 w-20"></div>
          </div>
          <About />
          <VisionMission />
        </div>
        <Donation />

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 relative z-10">
          <ContactForm />
          <SocialMedia />
        </div>

        <Footer />
      </main>
    </div>
  );
}
