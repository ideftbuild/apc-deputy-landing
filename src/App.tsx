// src/App.tsx
// Access components from window object

/**
 * The main application component.
 * This component orchestrates the layout of the entire landing page by importing and
 * arranging all the modular section components.
 */

window.App = function App() {

  return (
    <div className="">
      <Header />
      <Navbar />

      <main>
        <Hero />
        <About />
        <VisionMission />
        <CoreValues />
        <Attributes />
        <Donation />
        <SocialMedia />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
};
