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
        <Hero/>
        <About/>
      </main>
    </div>
  );
};
