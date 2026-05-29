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
import ScrollToTop from './components/ScrollToTop';
import { MuayThaiHero, MuayThaiIntro, MuayThaiBasics, MuayThaiIntermediate, MuayThaiAdvanced } from './components/MuayThai';
import { FitnessHero, FitnessIntro, FitnessBasics, FitnessIntermediate, FitnessAdvanced } from './components/Fitness';
import { MmaHero, MmaIntro, MmaBasics, MmaIntermediate, MmaAdvanced } from './components/MMA';
import { BoxingHero, BoxingIntro, BoxingBasics, BoxingAdvanced, BoxingKids } from './components/Boxing';
import { RecoveryHero, RecoveryIntro, RecoveryMassages, RecoveryPhysicalTherapy, RecoveryTraining } from './components/Recovery';
import { YogaHero, YogaIntro, YogaBasics, YogaFlow, PowerYoga } from './components/Yoga';
import { WhatsAppButton } from './components/WhatsAppButton';

function App() {
  return (
    <>
      <ScrollToTop />
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
          <Route path="/muay-thai" element={
            <>
              <MuayThaiHero />
              <MuayThaiIntro />
              <MuayThaiBasics />
              <MuayThaiIntermediate />
              <MuayThaiAdvanced />
            </>
          } />
          <Route path="/fitness" element={
            <>
              <FitnessHero />
              <FitnessIntro />
              <FitnessBasics />
              <FitnessIntermediate />
              <FitnessAdvanced />
            </>
          } />
          <Route path="/mma" element={
            <>
              <MmaHero />
              <MmaIntro />
              <MmaBasics />
              <MmaIntermediate />
              <MmaAdvanced />
            </>
          } />
          <Route path="/boxing" element={
            <>
              <BoxingHero />
              <BoxingIntro />
              <BoxingBasics />
              <BoxingAdvanced />
              <BoxingKids />
            </>
          } />
          <Route path="/recovery" element={
            <>
              <RecoveryHero />
              <RecoveryIntro />
              <RecoveryMassages />
              <RecoveryPhysicalTherapy />
              <RecoveryTraining />
            </>
          } />
          <Route path="/yoga" element={
            <>
              <YogaHero />
              <YogaIntro />
              <YogaBasics />
              <YogaFlow />
              <PowerYoga />
            </>
          } />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
