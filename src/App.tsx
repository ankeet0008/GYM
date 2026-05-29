import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Navbar, Hero } from './components/HeroNav';
import { Classes, TrialTraining, Divider, About, Divider2 } from './components/Sections';
import { FaqContact, Footer } from './components/FooterSections';
import { CoursesHero, Divider3 } from './components/Courses';
import { PricingHero } from './components/Pricing';
import { FacilitiesHero, FacilitiesGallery } from './components/Facilities';
import { ContactHero, ContactForm } from './components/ContactUs';
import { LoginHero, LoginForm } from './components/Login';
import { AboutHero, OurCommunity, TheGymSection } from './components/AboutUs';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Classes />
              <TrialTraining />
              <Divider />
              <About />
              <Divider2 />
              <FaqContact />
            </>
          } />
          <Route path="/courses" element={
            <>
              <CoursesHero />
              <Classes showHeader={false} />
              <TrialTraining />
              <Divider3 />
            </>
          } />
          <Route path="/pricing" element={
            <>
              <PricingHero />
            </>
          } />
          <Route path="/about" element={
            <>
              <AboutHero />
              <About />
              <OurCommunity />
              <TheGymSection />
            </>
          } />
          <Route path="/facilities" element={
            <>
              <FacilitiesHero />
              <FacilitiesGallery />
            </>
          } />
          <Route path="/contact" element={
            <>
              <ContactHero />
              <ContactForm />
            </>
          } />
          <Route path="/login" element={
            <>
              <LoginHero />
              <LoginForm />
            </>
          } />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
