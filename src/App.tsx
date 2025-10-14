// src/App.tsx
// Access components from window object
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
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

        <p className="ext-center font-bold mt-22">ALM we move!</p>
        <div className="relative z-20 bg-[#f5f5f5]">
          <About />
          <VisionMission />
        </div>
      </main>
    </div>
  );
};
