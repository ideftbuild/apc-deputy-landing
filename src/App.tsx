// src/App.tsx
// Access components from window object
// const { Header, Hero, About, VisionMission, CoreValues, Attributes, Donation, ContactForm, SocialMedia, Footer, Navbar } = window;
/**
 * The main application component.
 * This component orchestrates the layout of the entire landing page by importing and
 * arranging all the modular section components.
 */
// import Header from './src/components/Header';
// import Hero from './src/components/Hero';
// import About from './src/components/About';
// import VisionMission from './src/components/VisionMission';
// import CoreValues from './src/components/CoreValues';
// import Attributes from './src/components/Attributes';
// import Donation from './src/components/Donation';
// import ContactForm from './src/components/ContactForm';
// import SocialMedia from './src/components/SocialMedia';
// import Footer from './src/components/Footer';

window.App = function App() {

  return (
    <div className="">
      {/* Header Section */}
      <Header />

      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* About the Candidate Section */}
        <About />

        {/* Vision and Mission Section */}
        <VisionMission />

        {/* Core Values Section */}
        <CoreValues />

        {/* Key Attributes Section */}
        <Attributes />

        {/* Donation Section */}
        <Donation />

        {/* Social Media Links Section */}
        <SocialMedia />

        {/* Contact Form Section */}
        <ContactForm />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};
